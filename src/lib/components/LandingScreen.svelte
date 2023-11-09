<script>
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
</script>

<div class="flex flex-col justify-between min-h-screen items-center py-32 px-5">
	<div />
	<div class="flex flex-col justify-center items-center py-16 px-5 relative">
		<h1 class="text-7xl font-bold text-green-400 absolute top-0">Translate</h1>
		<div class="text-center relative">
			<h1 class="text-7xl font-bold text-green-600">Tunes</h1>
			<Icon icon="bi:music-note" class="text-blue-400 absolute top-3 left-full ml-2" height="32" />
		</div>
		<p class="text-gray-400 mt-2">Learn languages using your favorite music.</p>
	</div>

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
