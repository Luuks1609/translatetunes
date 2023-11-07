<script>
	export let results = null;
	export let title;
</script>

{#if results}
	<h2 class="my-2 mt-10 font-bold text-2xl">{title}</h2>

	<div class="grid grid-cols-2 gap-2">
		{#each results.items as playlist}
			<a href={`/playlist/${playlist.id}`}>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex">
					<img class="h-12 w-12 object-cover" src={playlist.images[0].url} alt={playlist.name} />
					<div class="flex items-center truncate">
						<p class="text-white text-md font-semibold truncate pl-2">
							{playlist.name}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<!-- Display a skeleton layout when results are not available -->
	<div class="my-2 mt-10 font-bold text-2xl animate-pulse">
		<div class="w-1/2 h-6 bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md mb-2" />
		<div class="grid grid-cols-2 gap-2">
			<div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex">
				<div class="h-12 w-12 bg-gray-500" />
				<div class="flex items-center truncate">
					<div class="w-1/2 h-4 bg-gray-500 rounded-full" />
				</div>
			</div>
			<div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex">
				<div class="h-12 w-12 bg-gray-500" />
				<div class="flex items-center truncate">
					<div class="w-1/2 h-4 bg-gray-500 rounded-full" />
				</div>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-2 mt-2">
			<div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex">
				<div class="h-12 w-12 bg-gray-500" />
				<div class="flex items-center truncate">
					<div class="w-1/2 h-4 bg-gray-500 rounded-full" />
				</div>
			</div>
			<div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex">
				<div class="h-12 w-12 bg-gray-500" />
				<div class="flex items-center truncate">
					<div class="w-1/2 h-4 bg-gray-500 rounded-full" />
				</div>
			</div>
		</div>
	</div>
{/if}
