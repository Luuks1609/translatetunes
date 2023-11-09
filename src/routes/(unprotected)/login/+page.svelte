<script>
	import { auth, user } from '$lib/firebase.js';
	import { translateFirebaseError } from '$lib/utils.js';
	import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

	export let data;

	let email = '';
	let password = '';
	let errorMessage = ''; // New variable to store error messages

	async function login() {
		try {
			const userCredential = await signInWithEmailAndPassword(auth, email, password);
			if (userCredential && userCredential.user) {
				window.location.href = '/';
			}
		} catch (error) {
			errorMessage = translateFirebaseError(error); // Translate Firebase error

			console.error(error);
		}
	}
</script>

{#if $user && $user.uid}
	<div class="p-10">
		<p class="text-center text-xl font-semibold mb-10">You are logged in</p>
		<button
			class="bg-red-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-red-700"
			on:click={() => signOut(auth)}>Sign out</button
		>
	</div>
{:else}
	<div class="p-10 rounded-lg bg-dark-gray border-gray-700">
		<h2 class="text-center text-xl font-semibold mb-10">Inloggen</h2>
		{#if errorMessage}
			<p class="text-red-500 text-sm mb-5">{errorMessage}</p>
		{/if}
		<input
			type="text"
			class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white"
			placeholder="email"
			bind:value={email}
		/>
		<input
			type="password"
			class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white"
			placeholder="wachtwoord"
			bind:value={password}
		/>

		<button
			class="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-green-700"
			on:click={login}>Inloggen</button
		>
	</div>
{/if}
