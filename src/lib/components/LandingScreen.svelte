<script>
	import LogoComponent from './LogoComponent.svelte';

	import { goto } from '$app/navigation';
</script>

<div class="w-full flex justify-center">
	<div class="flex flex-col justify-between min-h-screen items-center pb-64 px-5 max-w-lg">
		<div />
		<LogoComponent />
		<div class="w-full">
			<button
				on:click={() => goto('/login')}
				class="bg-blue-400 uppercase text-white font-semibold py-2 px-4 w-full rounded-xl border-b-4 border-blue-500"
				>Get started</button
			>
			<button
				on:click={() => goto('/register')}
				class="bg-transparent uppercase text-blue-400 font-semibold py-2 px-4 mt-5 w-full rounded-xl border border-gray-600 border-b-4"
				>I already have an account</button
			>
		</div>
	</div>
</div>
