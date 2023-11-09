<script>
	import Navigation from '$lib/components/UI/Navigation.svelte';
	import ProfileStatistic from '$lib/components/UI/ProfileStatistic.svelte';
	import UserProfile from '$lib/components/UI/UserProfile.svelte';
	import { db, user, userData } from '$lib/firebase';
	import { spotifyUser } from '$lib/stores/spotifyStore';
	import { callWithRetry, fetchSpotifySongs } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { collection, query, where, getDocs } from 'firebase/firestore';
	import Challenge from '$lib/components/Challenge.svelte';

	let isLoading = true; // Initialize as true to show the loader.
	let totalStars = 0;
	let playedSongs = 0;

	const fetchData = async () => {
		// fetch the user's profile
		await callWithRetry('https://api.spotify.com/v1/me/').then((data) => {
			spotifyUser.set(data);
			isLoading = false; // Set isLoading to false when data is loaded.
		});

		try {
			const userId = $user.uid;
			const starsRef = collection(db, 'playedSongs');
			const userStarsQuery = query(starsRef, where('userId', '==', userId));
			const userStarsSnapshot = await getDocs(userStarsQuery);
			totalStars = userStarsSnapshot.docs.length;

			isLoading = false; // Set isLoading to false when data is loaded.
		} catch (error) {
			console.error('Error fetching star data:', error);
		}
	};

	async function getUniquePlayedSongsByUser() {
		const songs = new Set();

		const playedSongsRef = collection(db, 'playedSongs');
		const q = query(playedSongsRef, where('userId', '==', $user.uid));

		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
			const songId = doc.data().trackId;
			songs.add(songId);
		});

		return Array.from(songs).length;
	}

	onMount(() => {
		fetchData();
	});

	// async onmount
	onMount(async () => {
		playedSongs = await getUniquePlayedSongsByUser();
	});
</script>

<div class="mb-16 p-5" in:fade>
	<UserProfile
		username={$spotifyUser?.display_name}
		email={$spotifyUser?.email}
		creationDate={$user?.metadata.creationTime}
		pictureURL={$spotifyUser?.images[1].url}
		stranger={false}
		followers={$userData?.followers}
		following={$userData?.following}
		{isLoading}
	/>
	<div class="flex gap-3 my-8">
		<ProfileStatistic
			icon="bi:star-fill"
			color="text-yellow-400"
			statistic={totalStars}
			title="Stars Acquired"
			{isLoading}
		/>
		<ProfileStatistic
			icon="fluent-emoji:gem-stone"
			color="text-blue-400"
			statistic={$userData?.score}
			title="Diamonds earned"
			{isLoading}
		/>
	</div>

	<Challenge
		title="Star Collector"
		description="Acquire 50 stars"
		target="11 stars"
		progress={totalStars}
	/>
	<Challenge
		title="Diamond Specialist"
		description="Collect 1000 diamonds"
		target="1000 diamonds"
		progress={$userData?.score}
	/>
	<Challenge
		title="Music Lover"
		description="Play 50 songs"
		target="50 songs"
		progress={playedSongs}
	/>
</div>

<Navigation />
