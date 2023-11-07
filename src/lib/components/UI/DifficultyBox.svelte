<script>
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';

	/**
	 * Currently selected difficulty.
	 * @type {number}
	 */
	export let selectedDifficulty;

	/**
	 * Amount of stars to display.
	 * @type {number}
	 */
	export let stars;

	/**
	 * Amount of stars to display.
	 * @type {boolean}
	 */
	export let finished;

	$: active = selectedDifficulty === stars;

	let activeClasses = 'bg-yellow-400 shadow-2xl border-b-8 border-yellow-500 ';
	let inactiveClasses = 'border-gray-700 border-b-4';

	const dispatch = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={() => dispatch('click')}
	on:keydown
	class="w-1/3 relative py-5 rounded-xl flex justify-center gap-1 bg-gray-800 {active
		? activeClasses
		: inactiveClasses}}"
>
	{#if finished}
		<span class="absolute top-0 left-2">
			<Icon icon="fa-solid:medal" class="text-red-500" height="30" />
		</span>
	{/if}
	{#each { length: stars } as _}
		<Icon icon="bi:star-fill" class={active ? 'text-gray-700' : 'text-yellow-400'} height="24" />
	{/each}
</div>
