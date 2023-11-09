<script>
	import AlbumSearchResult from '$lib/components/AlbumSearchResult.svelte';
	import ArtistSearchResult from '$lib/components/ArtistSearchResult.svelte';
	import TrackSearchResult from '$lib/components/TrackSearchResult.svelte';
	import { callWithRetry } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	export let data;

	const getArtist = async () => {
		try {
			const getArtist = await callWithRetry(
				`https://api.spotify.com/v1/artists/${data.props.artistId}`
			);
			const getAlbums = await callWithRetry(
				`https://api.spotify.com/v1/artists/${data.props.artistId}/albums`
			);
			const getTopTracks = await callWithRetry(
				// todo: market is hardcoded to NL, should be dynamic
				`https://api.spotify.com/v1/artists/${data.props.artistId}/top-tracks?market=NL`
			);
			const getRelatedArtists = await callWithRetry(
				`https://api.spotify.com/v1/artists/${data.props.artistId}/related-artists`
			);

			// Combine the results into a single artistData object
			const artistData = {
				getArtist,
				getAlbums,
				getTopTracks,
				getRelatedArtists
			};
			return artistData;
		} catch (error) {
			// Handle errors if any of the requests fail
			console.error(error);
		}
	};

	let promise = getArtist();

	onMount(() => {
		promise = getArtist();
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
			<img
				class="w-full h-full object-cover"
				src={data?.getArtist.images[0].url}
				alt={data?.getArtist.name}
			/>
			<!-- Artist's name at the bottom of the image with gradient background -->
			<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white">
				<div class="p-4">
					<h1 class="text-4xl font-bold">{data?.getArtist.name}</h1>
				</div>
			</div>
		</div>
		<div class="p-4">
			<TrackSearchResult results={data?.getTopTracks.tracks} title="Popular Tracks" />
			<AlbumSearchResult results={data?.getAlbums.items} title="Albums" />
			<ArtistSearchResult results={data?.getRelatedArtists.artists} title="Related Artists" />
		</div>
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}
