<script>
	export let results;
	export let title;
</script>

<h2 class="my-2 mt-10 font-bold text-2xl">{title}</h2>
<div class="overflow-x-scroll my-2">
	<div class="flex flex-nowrap gap-4 snap snap-x snap-mandatory justify-between">
		<!-- Check if there are results -->
		{#if results && results.length > 0}
			{#each results.slice(0, 10) as artist}
				<a
					href={`/artist/${artist.id}`}
					class="w-2/5 flex-shrink-0 border-gray-700 border-2 p-1 rounded-xl border-b-4"
				>
					<!-- Image at the top -->
					<div class="flex items-center justify-center w-full">
						<img
							class="w-16 h-16 object-cover rounded-full mt-2"
							src={artist.images[0]?.url}
							alt={artist.name}
						/>
					</div>
					<!-- Artist Name -->
					<p
						class="pt-5 whitespace-nowrap overflow-hidden text-ellipsis text-md text-center font-semibold text-white"
					>
						{artist.name}
					</p>
					<p class="text-sm text-center text-gray-400">Artist</p>
				</a>
			{/each}
		{:else}
			<p class="text-center text-gray-400">No artists found.</p>
		{/if}
	</div>
</div>
