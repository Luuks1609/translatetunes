import axios from 'axios';
import { parseJsonpResponse } from '$lib/utils';

// Function to fetch data from the API
const fetchData = async (/** @type {string} */ track, /** @type {string} */ artist) => {
	try {
		const res = await axios.get('https://api.musixmatch.com/ws/1.1/matcher.lyrics.get', {
			params: {
				format: 'jsonp',
				callback: 'callback',
				q_track: track,
				q_artist: artist,
				apikey: 'baf1dc7f6a6c6dd44af675812fbc7036'
			}
		});

		// Parse the JSONP response and return the data
		const data = parseJsonpResponse(res.data);

		return data.message.body.lyrics.lyrics_body;
	} catch (e) {
		return null;
	}
};

/** @type {import('../$types').PageServerLoad} */
export async function load({ params }) {
	const [artist, track] = params.track.split('&');

	// Fetch data from the API
	const trackData = await fetchData(track, artist);

	return {
		props: {
			// Pass the fetched data to the page
			track: trackData,
			difficulty: params.difficulty,
			trackId: params.track_id
		}
	};
}
