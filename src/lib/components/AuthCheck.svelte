<script>
	import { user } from '$lib/firebase';
	import LandingScreen from './LandingScreen.svelte';
	import LoadingSpinner from './UI/LoadingSpinner.svelte';

	export let loading;

	$: user.subscribe((value) => {
		if (value && value.loading !== undefined) loading = value.loading;
	});
</script>

{#if loading}
	<div class="w-full h-screen flex items-center justify-center">
		<LoadingSpinner />
	</div>
	<!-- were using uid here because $user has always the loading property, meaning $user is truthy -->
{:else if $user?.uid}
	<slot />
{:else}
	<LandingScreen />
{/if}
