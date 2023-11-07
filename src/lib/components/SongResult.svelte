<script>
	/**
	 * A component that displays information about a song.
	 * @component
	 *
	 * @prop {string} songName - The title of the song.
	 * @prop {string} artistName - The artist of the song.
	 * @prop {string} albumName - The album of the song.
	 * @prop {number} trackId - The id of the song.
	 */

	export let songName = '';
	export let artistName = '';
	export let albumName = '';
	export let trackId = 0;
</script>

<div
	class="max-w-full rounded p-5 mt-10 bg-gray-700 border-gray-400 border-2 flex justify-between items-center gap-5"
	id={trackId.toString()}
>
	<div>
		<p class="text-xl text-white font-semibold">{songName}</p>
		<p class="text-gray-300 text-xl font-medium">{artistName}</p>
		<p class="text-gray-300 text-xs font-medium">{albumName}</p>
	</div>
	<a
		href="/game/{trackId}"
		class="bg-pink-400 text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-pink-600"
		>Starten!</a
	>
</div>
