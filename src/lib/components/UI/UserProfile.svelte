<script>
	import { auth, db, userData } from '$lib/firebase';
	import Icon from '@iconify/svelte';
	import { signOut } from 'firebase/auth';
	import Modal from './Modal.svelte';
	import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
	import { goto } from '$app/navigation';

	export let username;
	export let email;
	export let followers = [];
	export let following = [];
	export let creationDate;
	export let pictureURL;
	export let stranger;

	let showModal = false;
	let modalMode;

	let data = [];

	const toggleModal = (mode) => {
		// dont open modal if there is no followers or following
		if (mode === 'followers' && followers.length === 0) return;
		if (mode === 'following' && following.length === 0) return;

		modalMode = mode;
		showModal = !showModal;

		if (modalMode === 'followers') {
			fetchFollowers();
		} else if (modalMode === 'following') {
			fetchFollowing();
		}
	};

	const fetchFollowers = async () => {
		data = [];
		for (const followerId of followers) {
			const followerRef = doc(db, 'users', followerId);
			const followerDoc = await getDoc(followerRef);
			const followerData = followerDoc.data();
			data.push({
				userId: followerId,
				username: followerData.username,
				avatar: followerData.avatar,
				score: followerData.score
				// Add other fields as needed
			});
		}
		data = data;
	};

	const fetchFollowing = async () => {
		data = [];
		for (const followingId of following) {
			const followingRef = doc(db, 'users', followingId);
			const followingDoc = await getDoc(followingRef);
			const followingData = followingDoc.data();
			data.push({
				userId: followingId,
				username: followingData.username,
				avatar: followingData.avatar,
				score: followingData.score
				// Add other fields as needed
			});
		}
		data = data;
	};
</script>

<!-- header -->

<div class="border-b border-gray-700 pb-10">
	<div class="flex justify-between items-center">
		<div class="">
			<p class="text-3xl font-bold">
				{username ? username : '--'}
			</p>
			<p class="text-gray-400">
				{email ? email : '--'}
			</p>
			<div class="flex gap-5 my-5">
				<div class="flex flex-col" on:click={() => toggleModal('followers')}>
					<p class="text-xl font-bold">{followers?.length || 0}</p>
					<p class="text-gray-400">followers</p>
				</div>
				<div class="flex flex-col" on:click={() => toggleModal('following')}>
					<p class="text-xl font-bold">{following?.length || 0}</p>
					<p class="text-gray-400">following</p>
				</div>
			</div>
			<div class="flex gap-2 items-center">
				<Icon icon="bi:clock-fill" class="text-gray-500" height="16" />
				<p class="text-gray-400 capitalize">
					Joined {new Date(creationDate).toLocaleDateString('en', {
						year: 'numeric',
						month: 'long'
					}) || '--'}
				</p>
			</div>
		</div>
		{#if !pictureURL}
			<div class="h-32 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-4 animate-pulse" />
		{:else}
			<img src={pictureURL} class="h-32 w-32 rounded-full" alt="" />
		{/if}
	</div>

	<div>
		{#if stranger}
			<button
				class="bg-blue-400 text-white font-semibold py-2 px-4 mt-10 w-full rounded-md shadow-mdtransition duration-300 ease-in-out border-b-4 border-blue-500"
				>Follow</button
			>
		{:else}
			<div class="flex gap-2">
				<button
					class="bg-blue-400 text-white font-semibold py-2 px-4 mt-10 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-blue-500"
					>Add friends</button
				>
				<button
					class="bg-blue-400 flex justify-center text-white font-semibold py-2 px-4 mt-10 w-1/3 rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-blue-500"
					on:click={() => {
						signOut(auth).then(() => goto('/'));
					}}><Icon icon="bi:box-arrow-in-left" class="text-white" height={32} /></button
				>
			</div>
		{/if}
	</div>
</div>

<Modal bind:showModal>
	<h2 slot="header">
		<p class="capitalize text-xl font-bold">
			{modalMode}
		</p>
	</h2>

	{#each data as follower}
		<div class="flex px-1 py-2 items-center w-full border-b border-gray-800 rounded mb-2 pb-2">
			<div class="flex items-center gap-3">
				<img src={follower?.avatar} class="rounded-full h-12" alt="" />
				<div class="flex flex-col">
					<p class="font-semibold">{follower.username}</p>
					<div class="flex gap-2">
						<Icon icon="fluent-emoji:gem-stone" class="text-blue-400" height="24" />
						<p class="font-semibold">{follower.score}</p>
					</div>
				</div>
			</div>
		</div>
	{/each}
</Modal>
