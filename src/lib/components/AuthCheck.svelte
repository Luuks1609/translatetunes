<script>
	import { user } from '$lib/firebase';
</script>

{#if $user}
	<slot />
{:else}
	<p class="">
		You must be signed in to view this page.
		<a class="btn btn-primary" href="/register">Sign in</a>
	</p>
{/if}
