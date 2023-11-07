<script>
	export let results;
	export let title;
</script>

<h2 class="my-2 mt-5 font-bold text-2xl">{title}</h2>
<!-- Check if there are results -->
{#if results && results.length > 1}
	<div class="grid grid-cols-2 gap-4">
		{#each results as album}
			<a href={`/album/${album.id}`}>
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class="w-full border border-gray-700 rounded">
					<img class="h-auto w-full" src={album.images[0].url} alt={album.name} />
					<div class="justify-center text-center py-2">
						<p class="text-white text-md font-semibold truncate">
							{album.name}
						</p>
						<p class="capitalize text-gray-400 text-sm">
							{new Date(album.release_date).getFullYear()} &#x2022; {album.album_group}
						</p>
					</div>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<p class="text-center text-gray-400">No albums found.</p>
{/if}
