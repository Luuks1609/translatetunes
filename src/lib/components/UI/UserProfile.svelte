<script>
	import { auth, userData } from '$lib/firebase';
	import Icon from '@iconify/svelte';
	import { signOut } from 'firebase/auth';

	export let username;
	export let email;
	export let followers;
	export let following;
	export let creationDate;
	export let pictureURL;
	export let friends;
	export let isLoading;
	export let stranger;
</script>

<!-- header -->
{#if isLoading}
	<div class="animate-pulse flex justify-between items-center">
		<div class="">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5" />
		</div>
		<div class="h-32 w-32 rounded-full bg-gray-300 dark:bg-gray-700" />
	</div>
{:else}
	<div class="border-b border-gray-700 pb-10">
		<div class="flex justify-between items-center">
			<div class="">
				<p class="text-3xl font-bold">
					{username}
				</p>
				<p class="text-gray-400">
					{email}
				</p>
				<div class="flex gap-5 my-5">
					<div class="flex flex-col">
						<p class="text-xl font-bold">{followers}</p>
						<p class="text-gray-400">followers</p>
					</div>
					<div class="flex flex-col">
						<p class="text-xl font-bold">{following}</p>
						<p class="text-gray-400">following</p>
					</div>
				</div>
				<div class="flex gap-2 items-center">
					<Icon icon="bi:clock-fill" class="text-gray-500" height="16" />
					<p class="text-gray-400 capitalize">
						Joined {new Date(creationDate).toLocaleDateString('en', {
							year: 'numeric',
							month: 'long'
						})}
					</p>
				</div>
			</div>
			<img src={pictureURL} class="h-32 w-32 rounded-full" alt="" />
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
							signOut(auth);
						}}><Icon icon="bi:box-arrow-in-left" class="text-white" height={32} /></button
					>
				</div>
			{/if}
		</div>
	</div>
{/if}
