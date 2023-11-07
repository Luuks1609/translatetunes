<script>
	import { auth, user } from '$lib/firebase.js';
	import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';

	export let data;

	let email = '';
	let password = '';
	let confirmPassword = '';

	async function register() {
		if (password !== confirmPassword) {
			alert('Passwords do not match');
			return;
		}

		try {
			const user = await createUserWithEmailAndPassword(auth, email, password).then((user) => {
				window.location.href = '/register/username';
			});
		} catch (error) {
			console.error(error);
		}
	}
</script>

{#if $user}
	<p class="text-center text-xl font-semibold mb-10">You are logged in</p>
	<button
		class="bg-red-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-red-700"
		on:click={() => signOut(auth)}>Sign out</button
	>
{:else}
	<h2 class="text-center text-xl font-semibold mb-10">Registreren</h2>
	<input
		type="text"
		class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white"
		placeholder="example@email.com"
		bind:value={email}
	/>
	<input
		type="password"
		class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white"
		placeholder="wachtwoord"
		bind:value={password}
	/>
	<input
		type="password"
		class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white"
		placeholder="herhaal wachtwoord"
		bind:value={confirmPassword}
	/>
	<button
		class="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-green-700"
		on:click={register}>Registreer</button
	>
{/if}
