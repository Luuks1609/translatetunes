<script>
	import Icon from '@iconify/svelte';
	import { page } from '$app/stores';

	const menuItems = [
		{ icon: 'bi:house-fill', color: 'text-blue-400', border: 'border-blue-400', route: '/' },
		{
			icon: 'bi:people-fill',
			color: 'text-green-400',
			border: 'border-green-400',
			route: '/friends'
		},
		{
			icon: 'bi:trophy-fill',
			color: 'text-yellow-400',
			border: 'border-yellow-400',
			route: '/leaderboard'
		},
		{
			icon: 'bi:person-circle',
			color: 'text-violet-500',
			border: 'border-violet-400',
			route: '/profile'
		}
	];
	$: path = $page.url.pathname;
</script>

<div
	class="max-w-[1200px] fixed flex px-5 justify-between items-center w-full bottom-0 h-20 bg-dark-gray border-t-2 border-gray-700"
>
	{#each menuItems as item}
		<a href={item.route} class="p-2 rounded-lg {path == item.route && `border ${item.border}`}">
			<Icon icon={item.icon} class={`${item.color}`} height="32" />
		</a>
	{/each}
</div>
