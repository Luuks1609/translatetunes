<script>
	import AlbumSearchResult from '$lib/components/AlbumSearchResult.svelte';
	import ArtistSearchResult from '$lib/components/ArtistSearchResult.svelte';
	import TrackSearchResult from '$lib/components/TrackSearchResult.svelte';
	import { callWithRetry } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let data;

	const getPlaylist = async () => {
		try {
			const getPlaylist = await callWithRetry(
				`https://api.spotify.com/v1/playlists/${data.props.playlistId}`
			);

			return getPlaylist;
		} catch (error) {
			// Handle errors if any of the requests fail
			console.error(error);
		}
	};

	let promise = getPlaylist();

	onMount(() => {
		promise = getPlaylist();
	});
</script>

{#await promise}
	<p>...waiting</p>
{:then data}
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
	<div class="flex justify-center">
		<div class="mb-5">
			<img class="w-64 h-64 object-cover" src={data?.images[0].url} alt={data?.name.name} />
			<h2 class="text-center font-bold text-xl py-2">{data.name}</h2>
		</div>
	</div>
	<TrackSearchResult results={data.tracks.items.map((item) => item.track)} isAlbum />
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
