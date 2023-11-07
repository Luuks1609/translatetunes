<script>
	import Navigation from '$lib/components/UI/Navigation.svelte';
	import ProfileStatistic from '$lib/components/UI/ProfileStatistic.svelte';
	import UserProfile from '$lib/components/UI/UserProfile.svelte';
	import { db, user, userData } from '$lib/firebase';
	import { spotifyUser } from '$lib/stores/spotifyStore';
	import { callWithRetry } from '$lib/utils';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { collection, query, where, getDocs } from 'firebase/firestore';

	let isLoading = true; // Initialize as true to show the loader.
	let totalStars = 0;
	const fetchData = async () => {
		// fetch the user's profile
		await callWithRetry('https://api.spotify.com/v1/me/').then((data) => {
			spotifyUser.set(data);
			isLoading = false; // Set isLoading to false when data is loaded.
		});

		try {
			const userId = $user.uid;
			const starsRef = collection(db, 'playedSongs');
			const userStarsQuery = query(starsRef, where('user_id', '==', userId));
			const userStarsSnapshot = await getDocs(userStarsQuery);
			totalStars = userStarsSnapshot.size;

			isLoading = false; // Set isLoading to false when data is loaded.
		} catch (error) {
			console.error('Error fetching star data:', error);
		}
	};

	onMount(() => {
		fetchData();
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
	<div class="flex gap-3 mt-8">
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
</div>

<Navigation />
