<script>
	import Navigation from '$lib/components/UI/Navigation.svelte';
	import LoadingSpinner from '$lib/components/UI/LoadingSpinner.svelte';
	import { db, user, userData } from '$lib/firebase.js';
	import { spotifyUser } from '$lib/stores/spotifyStore';
	import { callWithRetry } from '$lib/utils';
	import Icon from '@iconify/svelte';

	// Create a reference to the cities collection
	import { collection, getDocs, limit, orderBy, query, where } from 'firebase/firestore';
	import { onMount } from 'svelte';

	let data = [];

	const fetchUsers = async () => {
		await callWithRetry('https://api.spotify.com/v1/me/').then((data) => {
			spotifyUser.set(data);
		});

		const usersRef = collection(db, 'users');

		// Create a query against the collection.
		const q = query(usersRef, orderBy('score', 'desc'), where('score', '>', 0), limit(10));
		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			data = [...data, { uid: doc.id, ...doc.data() }];
		});
	};

	onMount(() => {
		fetchUsers();
	});
</script>

<div class="mb-20">
	<div class="px-5 mt-5">
		<nav class="flex justify-between mb-5">
			<h2 class="font-bold text-xl capitalize">Leaderboard</h2>
		</nav>

		{#if data.length === 0}
			<!-- Display a skeleton layout while loading -->
			<LoadingSpinner />
		{:else}
			{#each data as player, i}
				<div
					class="flex px-5 py-2 justify-between items-center w-full min-h-[3em] border-2 border-gray-700 {player.uid ===
						$user.uid && 'border-amber-400'} rounded mb-2 overflow-hidden"
				>
					<div class="flex items-center gap-3">
						<p class="font-semibold text-lg">{i + 1}</p>
						<img src={player?.avatar} class="rounded-full h-12" alt="" />
						<p class="font-semibold text-xl">
							{player.username}
						</p>
					</div>
					<div class="flex items-center gap-3 text-xl">
						<Icon icon="fluent-emoji:gem-stone" class="text-blue-400" height="24" />
						{player.score}
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>
<Navigation />
