<script>
	import AuthCheck from '$lib/components/AuthCheck.svelte';
	import { userData, user } from '$lib/firebase';
	import '../../app.css';

	$user;
	$userData;
	let loading = true;
</script>

<div class="flex justify-center">
	<div class="max-w-[1200px] w-full">
		<AuthCheck {loading}>
			<slot />
		</AuthCheck>
	</div>
</div>
