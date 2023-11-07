<script>
	import Navigation from '$lib/components/UI/Navigation.svelte';
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
	<div class="w-full h-32 bg-yellow-400 flex flex-col justify-center items-center">
		<p class="text-center text-4xl font-semibold">Leaderboard</p>
	</div>

	<div class="px-5 mt-5">
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
	</div>
</div>
<Navigation />
<!-- fetch users with firebase query for most score sorting -->
<!-- noto-v1:2nd-place-medal -->

<!-- <div
			class="flex justify-between items-center px-10 py-3 border-b border-gray-600 {player.uid ===
				$user.uid && 'bg-gray-800'}"
		>
			<div class="flex items-center gap-3">
				{#if i + 1 === 1}
					<Icon icon="fluent-emoji-flat:1st-place-medal" height={45} />
				{:else if i + 1 === 2}
					<Icon icon="fluent-emoji-flat:2nd-place-medal" height={45} />
				{:else if i + 1 === 3}
					<Icon icon="fluent-emoji-flat:3rd-place-medal" height={45} />
				{:else}
					<div class="flex items-center justify-center h-10 w-10">
						<p class="text-lg">{i + 1}</p>
					</div>
				{/if}
				<p class="font-semibold text-xl {player.uid === $user.uid && 'text-yellow-500'}">
					{player.username}
				</p>
			</div>

			<div class="flex items-center gap-2">
				<div
					class="flex gap-3 text-white font-semibold py-2 px-4 w-full rounded-md shadow-mdtransition duration-300 ease-in-out"
				>
					{player.score}
					<Icon icon="fluent-emoji:gem-stone" class="text-blue-400" height="24" />
				</div>
			</div>
		</div> -->
