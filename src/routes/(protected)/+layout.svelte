<script>
	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import { userData, user } from '$lib/firebase';
	import '../../app.css';

	$user;
	$userData;
</script>

<AuthCheck>
	<slot />
</AuthCheck>
