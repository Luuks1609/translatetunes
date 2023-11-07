<script>
	import Icon from '@iconify/svelte';

	export let icon;
	export let statistic = 0;
	export let title;
	export let color;
	export let isLoading;
</script>

<div
	class="flex gap-2 items-start bg-dark-gray border-2 border-b-4 border-gray-700 rounded-lg w-1/2 py-2 px-5"
>
	{#if isLoading}
		<div class="w-24 h-4 bg-gray-500 rounded-full animate-pulse" />
		<div class="flex-1 animate-pulse">
			<div class="w-16 h-4 bg-gray-500 mb-1 rounded-full" />
			<div class="w-32 h-4 bg-gray-500 rounded-full" />
		</div>
	{:else}
		<Icon {icon} class={color} height="24" />
		<span>
			<p class="font-semibold tracking-wider text-lg">{statistic}</p>
			<p class="-mt-1 text-gray-500 font-medium text-sm">{title}</p>
		</span>
	{/if}
</div>
