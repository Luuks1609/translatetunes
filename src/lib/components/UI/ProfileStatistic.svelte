<script>
	import Icon from '@iconify/svelte';

	export let icon;
	export let statistic = 0;
	export let title;
	export let color;
</script>

<div class="bg-dark-gray border-2 border-b-4 border-gray-700 rounded-lg w-full py-2 px-5">
	<div class="flex justify-center gap-2 mb-2">
		<Icon {icon} class={color} height="24" />
		<p class="font-bold tracking-wider text-xl">{statistic}</p>
	</div>
	<p class="-mt-1 text-gray-500 font-medium text-sm text-center">{title}</p>
</div>
