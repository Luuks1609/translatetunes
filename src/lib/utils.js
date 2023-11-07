import Translate from 'translate';
import { accessToken, refreshToken } from '$lib/stores/authStore';
import { get } from 'svelte/store';

export const parseJsonpResponse = (response) => {
	// Check if the response is wrapped in a JSONP function call
	const jsonpCallback = /callback\((.*?)\);/;

	const match = response.match(jsonpCallback);
	if (match) {
		const jsonData = match[1];

		try {
			return JSON.parse(jsonData);
		} catch (e) {
			return null;
		}
	}

	return null;
};

/**
 * @param {string} text - Text that has to be translated.
 * * @param {string} source - Language code of the source language.
 * * @param {string} target - Language code of the target language.
 * @returns {Promise<string>} - Translated text
 */
export const translate = async (text, source, target) => {
	const translatedText = await Translate(text, {
		key: 'AIzaSyC0RyDn8GCcPv_VEndWHo7YJ0cLB1L_HYI',
		from: source,
		to: target
	});
	return translatedText;
};

/**
 * @param {string} endpoint - Spotify endpoint to perform the call on.
 * @returns {Promise<any>} -
 */

// Function to perform a search with the Spotify API
export async function callWithRetry(endpoint) {
	// Define the search URL
	const searchUrl = endpoint;

	const access = get(accessToken);
	const refresh = get(refreshToken);

	// Perform the search with the provided access token
	const searchResponse = await fetch(searchUrl, {
		headers: {
			Authorization: `Bearer ${access}}`
		}
	});

	if (searchResponse.status === 401 || searchResponse.status === 400) {
		// If the response status is 401, it may indicate an expired token
		console.log('trying to get a new token');

		const refreshResponse = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization: `Basic ${btoa(
					`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`
				)}`
			},
			body: `grant_type=refresh_token&refresh_token=${refresh}`
		});

		if (refreshResponse.ok) {
			const refreshData = await refreshResponse.json();
			const newAccessToken = refreshData.access_token;
			accessToken.set(newAccessToken);

			// Retry the search with the new access token
			const retrySearchResponse = await fetch(searchUrl, {
				headers: {
					Authorization: `Bearer ${newAccessToken}`
				}
			});

			return retrySearchResponse.json();
		}
	}

	return searchResponse.json();
}

/**
 * Extracts good sentences from the provided lyrics.
 *
 * @param {string} lyrics - The lyrics to extract sentences from.
 * @param {number} minLen - The minimum sentence length.
 * @param {number} maxRepetitive - The maximum percentage of repetitive characters.
 * @returns {string[]} - An array of extracted sentences.
 */
export function extractGoodSentences(lyrics, minLen, maxRepetitive) {
	// Split the lyrics into sentences using a broader range of delimiters.
	const sentences = lyrics.split(/[\n.!?;]/);

	// Filter and clean the sentences, removing text within parentheses and *.
	const cleanSentences = sentences
		.map((sentence) => sentence.trim())
		.filter((sentence) => sentence.length >= minLen)
		.map((sentence) => sentence.replace(/\([^)]*\)/g, '').trim())
		.filter((sentence) => sentence.length > 0) // Remove empty sentences
		.filter((sentence) => !sentence.includes('*')); // Remove sentences with "*"

	// Filter out sentences with excessive repetitive characters.
	const filteredSentences = [];
	const uniqueSentences = new Set();

	for (const sentence of cleanSentences) {
		const characters = sentence.split('');
		const uniqueCharacters = [...new Set(characters)];

		if (
			uniqueCharacters.length / characters.length <= maxRepetitive &&
			!uniqueSentences.has(sentence)
		) {
			filteredSentences.push(sentence);
			uniqueSentences.add(sentence);
		}
	}

	// Shuffle the filtered sentences randomly.
	for (let i = filteredSentences.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[filteredSentences[i], filteredSentences[j]] = [filteredSentences[j], filteredSentences[i]];
	}

	return filteredSentences;
}
