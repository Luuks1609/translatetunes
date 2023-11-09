<script>
	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import { userData, user } from '$lib/firebase';
	import '../../app.css';

	$user;
	$userData;
	let loading = true;
</script>

<AuthCheck {loading}>
	<slot />
</AuthCheck>
