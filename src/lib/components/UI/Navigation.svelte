<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	const menuItems = [
		{ icon: 'bi:house-fill', color: 'blue-400', route: '/' },
		{ icon: 'bi:people-fill', color: 'green-400', route: 'friends' },
		{ icon: 'bi:trophy-fill', color: 'yellow-400', route: 'leaderboard' },
		{ icon: 'bi:person-circle', color: 'purple-400', route: '/profile' }
	];
</script>

<div
	class="fixed flex px-5 justify-between items-center bottom-0 w-full h-20 bg-dark-gray border-t-2 border-gray-700"
>
	{#each menuItems as item}
		<a
			href={item.route}
			class="p-2 rounded-lg {$page.route.id?.match(item.route) && 'border border-blue-400'}"
		>
			<Icon icon={item.icon} class={'text-' + item.color} height="32" />
		</a>
	{/each}
</div>
