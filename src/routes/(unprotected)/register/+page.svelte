<script>
	import { auth, user } from '$lib/firebase.js';
	import { translateFirebaseError } from '$lib/utils.js';
	import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

	export let data;

	let email = '';
	let password = '';
	let confirmPassword = '';
	let errorMessage = ''; // New variable to store error messages

	async function register() {
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const userCredential = await createUserWithEmailAndPassword(auth, email, password);
			if (userCredential && userCredential.user) {
				window.location.href = '/register/username';
			}
		} catch (error) {
			errorMessage = translateFirebaseError(error); // Translate Firebase error
		}
	}
</script>

{#if $user && $user.uid}
	<p class="text-center text-xl font-semibold mb-10">You are logged in</p>
	<button
		class="bg-red-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-red-700"
		on:click={() => signOut(auth)}>Sign out</button
	>
{:else}
	<h2 class="text-center text-xl font-semibold mb-10">Register</h2>
	{#if errorMessage}
		<p class="text-red-500 text-sm mb-5">{errorMessage}</p>
	{/if}
	<input
		type="text"
		class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white"
		placeholder="example@email.com"
		bind:value={email}
	/>
	<input
		type="password"
		class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white"
		placeholder="password"
		bind:value={password}
	/>
	<input
		type="password"
		class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white"
		placeholder="repeat password"
		bind:value={confirmPassword}
	/>
	<button
		class="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-green-700"
		on:click={register}>Register</button
	>
{/if}
