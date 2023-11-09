<!-- src/routes/index.svelte -->

<script>
	import ArtistSearchResult from '$lib/components/ArtistSearchResult.svelte';
	import PlaylistResult from '$lib/components/PlaylistResult.svelte';
	import TrackSearchResult from '$lib/components/TrackSearchResult.svelte';
	import { accessToken, refreshToken } from '$lib/stores/authStore';
	import { callWithRetry } from '$lib/utils';
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';
	import { db, userData, user as fbUser } from '$lib/firebase';
	import Icon from '@iconify/svelte';
	import Navigation from '$lib/components/UI/Navigation.svelte';
	import { spotifyUser } from '$lib/stores/spotifyStore';
	import { collection, doc, getDocs, query, updateDoc, where } from 'firebase/firestore';

	/**
	 * @typedef {Object} SearchResultItem
	 * @property {string} name - The name of the item.
	 * @property {string} external_urls - URLs related to the item.
	 * @property {string} [otherProperty] - Add any other optional properties here.
	 */

	/** @typedef {Object<string, { items: SearchResultItem[] }>} SearchResults */

	/** @type {string} */
	let searchQuery = '';
	let timer;

	/** @type {SearchResults | null} */
	let searchResults = null;

	/** @type {string[]} */
	let topUserArtists = [];
	/** @type {string[]} */
	let topUserTracks = [];
	/** @type {object} */
	let user = {};
	/** @type {object} */
	let userPlaylists;
	/** @type {string[]} */
	let unfinishedTracks = [];

	// Function to authorize with Spotify
	const authorizeSpotify = () => {
		const scope = 'user-read-private user-read-email user-top-read';
		// Define the Spotify API authorization URL using environment variables
		const authUrl = `https://accounts.spotify.com/authorize?client_id=${
			import.meta.env.VITE_SPOTIFY_CLIENT_ID
		}&response_type=code&redirect_uri=${import.meta.env.VITE_SPOTIFY_REDIRECT_URI}&scope=${scope}`;

		// Redirect the user to the Spotify register page
		if (typeof window !== 'undefined') {
			window.location.href = authUrl;
		}
	};

	// On component mount, check if the access token is in the URL hash and refresh it if needed
	onMount(async () => {
		const usersColRef = collection(db, 'users');
		const userDocRef = doc(usersColRef, $fbUser.uid);

		if (typeof window !== 'undefined') {
			if (window.location.search.includes('code')) {
				const params = new URLSearchParams(window.location.search);
				const authCode = params.get('code');

				if (authCode && !window.localStorage.getItem('refresh_token')) {
					// user has now authorized to use this app, let's get a Access Token now
					const response = await fetch('https://accounts.spotify.com/api/token', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
							Authorization: `Basic ${btoa(
								`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${
									import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
								}`
							)}`
						},
						body: `grant_type=authorization_code&code=${authCode}&redirect_uri=${
							import.meta.env.VITE_SPOTIFY_REDIRECT_URI
						}`
					});

					if (response.ok) {
						const data = await response.json();
						// we finally got our tokens
						accessToken.set(data.access_token);
						refreshToken.set(data.refresh_token);
					}
				}
			}
		}
		// fetch the user's top artists
		await callWithRetry('https://api.spotify.com/v1/me/top/artists').then(
			(data) => (topUserArtists = data.items)
		);
		// fetch the user's top tracks
		await callWithRetry('https://api.spotify.com/v1/me/top/tracks').then(
			(data) => (topUserTracks = data.items)
		);

		// fetch the user's profile
		await callWithRetry('https://api.spotify.com/v1/me/').then(
			(data) => ((user = data), spotifyUser.set(data))
		);

		await callWithRetry('https://api.spotify.com/v1/me/').then((data) => {
			user = data;
			spotifyUser.set(data);
			updateDoc(userDocRef, {
				avatar: data?.images[0]?.url
			});
		});

		// fetch the user's playlists
		await callWithRetry('https://api.spotify.com/v1/me/playlists?limit=5').then(
			(data) => (userPlaylists = data)
		);

		// fetch the tracks that has not 3 stars yet
		getUnfinishedTracks();
	});

	const getSearch = async () => {
		const q = encodeURIComponent(searchQuery);

		// Reset searchResults to null if the search input is empty
		if (!q) {
			searchResults = null;
			return;
		}

		const searchType = encodeURIComponent('album,artist,playlist,track');
		const newSearchResults = await callWithRetry(
			`https://api.spotify.com/v1/search?q=${q}&type=${searchType}`
		);

		// Update searchResults for each type
		searchResults = {
			artists: newSearchResults.artists,
			tracks: newSearchResults.tracks,
			albums: newSearchResults.albums,
			playlists: newSearchResults.playlists
			// Add more types as needed
		};
	};

	const getUnfinishedTracks = async () => {
		const userId = $fbUser.uid;
		const songsRef = collection(db, 'playedSongs');
		const userSongQuery = query(songsRef, where('userId', '==', userId));

		// Define the difficulties you want to check
		const difficulties = ['easy', 'medium', 'hard'];

		// Create an empty map to track played difficulties for each track
		const trackDifficultiesMap = new Map();

		// Query the Firestore collection for user's played songs
		const querySnapshot = await getDocs(userSongQuery);

		querySnapshot.forEach((doc) => {
			const playedSongData = doc.data();
			const trackId = playedSongData.trackId;
			const difficulty = playedSongData.difficulty;

			// Check if this difficulty has been played for this track
			if (!trackDifficultiesMap.has(trackId)) {
				trackDifficultiesMap.set(trackId, []);
			}
			trackDifficultiesMap.get(trackId).push(difficulty);
		});

		// Iterate through the tracks and check if all difficulties have been played
		const unplayedTracks = [];
		trackDifficultiesMap.forEach((playedDifficulties, trackId) => {
			const unplayedDifficulties = difficulties.filter(
				(difficulty) => !playedDifficulties.includes(difficulty)
			);

			if (unplayedDifficulties.length > 0) {
				unplayedTracks.push(trackId);
			}
		});

		// Create a comma-separated string of track IDs
		const trackIdsString = unplayedTracks.join(',');

		// Use this string to make the API call
		await callWithRetry(`https://api.spotify.com/v1/tracks?ids=${trackIdsString}`).then((data) => {
			// Handle the response here, for example, by assigning it to a variable.
			unfinishedTracks = data.tracks;
		});
	};

	const debounce = (v) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			searchQuery = v;
			getSearch();
		}, 750);
	};
</script>

{#await $accessToken}
	<p>Authorizing...</p>
{:then token}
	{#if token}
		<div class="p-5 mb-16">
			<!-- The user is authorized, you can make API calls here -->
			<nav class="flex justify-between items-center">
				<h2 class="font-bold text-xl capitalize">Welcome, {$userData?.username}</h2>
				<span class="flex items-center gap-2">
					<Icon icon="fluent-emoji:gem-stone" class="text-blue-400" height="32" />
					<p class="font-black tracking-wide text-3xl text-blue-300">{$userData?.score || 0}</p>
				</span>
			</nav>
			<input
				class="w-full rounded p-2 mt-10 mb-2 bg-gray-700 border-2 border-gray-600 text-white"
				placeholder="Search for a track..."
				type="text"
				on:keyup={({ target: { value } }) => debounce(value)}
			/>

			{#if searchResults}
				<div transition:slide>
					<h2 class="mt-2 font-bold text-2xl">Searchresults for: {searchQuery}</h2>
					<ArtistSearchResult results={searchResults?.artists.items} title="Artists" />
					<TrackSearchResult results={searchResults?.tracks.items} title="Tracks" />
					<!-- <SearchResult type="album" results={searchResults.album} /> -->
					<!-- <SearchResult type="playlist" results={searchResults.playlist} /> -->
					<!-- <SearchResult type="track" results={searchResults.track} /> -->
				</div>
			{:else}
				{#if unfinishedTracks && unfinishedTracks.length > 0}
					<TrackSearchResult results={unfinishedTracks} title="Get 3 stars!" />
				{/if}

				<PlaylistResult results={userPlaylists} title="Your Playlists" />

				<div transition:slide>
					<ArtistSearchResult results={topUserArtists} title="Favorite Artists" />
					<TrackSearchResult results={topUserTracks} title="Favorite Tracks" />
				</div>
			{/if}
		</div>
		<Navigation />
	{:else}
		<button on:click={authorizeSpotify}>Authorize with Spotify</button>
	{/if}
{:catch error}
	<p>Error: {error.message}</p>
{/await}
