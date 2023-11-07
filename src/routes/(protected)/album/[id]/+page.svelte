<script>
	import TrackSearchResult from '$lib/components/TrackSearchResult.svelte';
	import { callWithRetry } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let data;

	const getAlbum = async () => {
		try {
			const getAlbum = await callWithRetry(
				`https://api.spotify.com/v1/albums/${data.props.albumId}`
			);

			return getAlbum;
		} catch (error) {
			// Handle errors if any of the requests fail
			console.error(error);
		}
	};

	let promise = getAlbum();

	onMount(() => {
		promise = getAlbum();
	});
</script>

{#await promise}
	<p>...waiting</p>
{:then data}
	<div class="relative w-full min-h-screen">
		<!-- Image at the top with gradient overlay -->
		<div class="relative w-full h-1/3">
			<div class="absolute top-0 left-0 right-0">
				<div class="p-4">
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						on:click={() => history.back()}
						class="bg-dark-gray w-fit rounded-lg border border-b-4 border-gray-700 p-3 px-3 cursor-pointer"
					>
						<Icon icon="bi:chevron-left" class="text-white " height="18" />
					</div>
				</div>
			</div>
			<img class="w-full h-full object-cover" src={data?.images[0].url} alt={data?.name.name} />
			<!-- Artist's name at the bottom of the image with gradient background -->
			<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white">
				<div class="p-4">
					<h1 class="text-4xl font-bold">{data?.name}</h1>
					<p class="text-lg font-medium">{data?.artists[0].name}</p>
				</div>
			</div>
		</div>
		<TrackSearchResult results={data?.tracks.items} isAlbum albumArt={data?.images[0].url} />
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
