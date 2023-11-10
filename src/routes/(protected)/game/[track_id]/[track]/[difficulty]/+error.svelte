<script>
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<div
	class="w-full flex justify-center flex-col text-center items-center min-h-screen max-w-[1200px] p-5"
>
	<h1 class="font-bold text-xl">Something went wrong!</h1>
	<p class="mb-5">Error message: {$page.error.message}</p>
	<button
		class="bg-green-500 text-white font-semibold py-2 px-4 w-fit rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-green-700"
		on:click={() => goto('/')}>Back to home page</button
	>
</div>
