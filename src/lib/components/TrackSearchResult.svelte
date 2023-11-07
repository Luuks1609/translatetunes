<script>
	import { onMount } from 'svelte';
	import DifficultyBox from './UI/DifficultyBox.svelte';
	import Modal from './UI/Modal.svelte';
	import Icon from '@iconify/svelte';
	import { db, user } from '$lib/firebase';
	import { collection, onSnapshot, query, where } from 'firebase/firestore';

	export let results;
	export let title = '';
	export let isAlbum = false;
	export let albumArt = '';

	let showModal = false;
	let selectedTrack;

	let audioIsPlaying = false;
	let currentlyPlayingAudio = null;

	let songStars = {}; // Initialize an empty object to store stars earned for each song

	const albumClasses = isAlbum ? 'border-none my-5 pl-3' : '';
	const threeStarClasses = 'bg-gradient-to-b from-yellow-300 to-yellow-500 ';

	const playAudio = (audioUrl, track) => {
		if (currentlyPlayingAudio) {
			if (track === selectedTrack) {
				currentlyPlayingAudio.pause();
				currentlyPlayingAudio = null;
				audioIsPlaying = false;
				return;
			} else {
				currentlyPlayingAudio.pause();
			}
		}

		const audio = new Audio(audioUrl);
		audio.play();
		currentlyPlayingAudio = audio;
		audioIsPlaying = true;
		selectedTrack = track;

		audio.onended = () => {
			audioIsPlaying = false;
		};
	};

	const difficulties = {
		1: 'Easy',
		2: 'Medium',
		3: 'Hard'
	};

	onMount(() => {
		const userId = $user.uid;
		const songsRef = collection(db, 'playedSongs');
		const userSongQuery = query(songsRef, where('userId', '==', userId));
		onSnapshot(userSongQuery, (snapshot) => {
			snapshot.forEach((doc) => {
				const songId = doc.data().trackId;
				const difficulty = doc.data().difficulty;

				// Calculate the stars earned based on the number of difficulties played
				const starsEarned = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 1 : 1;

				// If songStars[songId] doesn't exist, initialize it as an empty array
				if (!songStars[songId]) {
					songStars[songId] = {
						stars: 0,
						playedDifficulties: []
					};
				}

				// Increment stars and update played difficulties for the song
				songStars[songId].stars += starsEarned;
				songStars[songId].playedDifficulties.push(difficulty);
			});
		});
	});

	let selectedDifficulty = 1;

	// Description variable based on the selected difficulty
	let gameTitle = '';
	let gameDescription = '';

	const toggleModal = (track) => {
		selectedTrack = track;
		showModal = !showModal;
	};

	// Update description based on the selected difficulty
	$: {
		if (selectedDifficulty === 1) {
			gameTitle = 'Vertaal de zin';
			gameDescription = 'Vertaal de songteksten naar het Engels';
		} else if (selectedDifficulty === 2) {
			gameTitle = 'Vertaal de zin (reverse)';
			gameDescription = 'Vertaal de songteksten naar het Spaans!';
		} else if (selectedDifficulty === 3) {
			gameTitle = 'Missing Word';
			gameDescription = 'Raad het ontbrekend woord!';
		}
	}
</script>

<h2 class="my-2 mt-10 font-bold text-2xl">{title}</h2>

<!-- Check if there are results -->
{#if results && results.length > 1}
	{#each results as track}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div on:click={() => toggleModal(track)} on:keydown class="cursor-pointer">
			<div
				class="w-full min-h-16 border-2 border-gray-700 rounded flex flex-row mb-2 overflow-hidden {albumClasses} {Array(
					songStars[track?.id]?.stars === 3 ? threeStarClasses : ''
				)}"
			>
				{#if track?.album?.images}
					<img class="h-16 object-cover" src={track.album?.images[0]?.url} alt={track.album.name} />
				{/if}
				<div class="flex flex-col pl-2 flex-grow justify-center">
					<p
						class="w-3/4 text-white text-md truncate {Array(
							songStars[track?.id]?.stars === 3 ? '!text-black font-bold' : ''
						)}"
					>
						{track.name}
					</p>

					<div class="flex gap-1">
						{#each Array(songStars[track?.id]?.stars || 0) as _, i}
							{#if songStars[track?.id]?.stars === 3}
								<Icon icon="bi:star-fill" class="text-black" height="15" />
							{:else}
								<Icon icon="bi:star-fill" class="text-yellow-300 " height="15" />
							{/if}
						{/each}
					</div>
					<p
						class="text-gray-400 text-sm {Array(
							songStars[track?.id]?.stars === 3 ? '!text-black font-medium' : ''
						)}"
					>
						{#each track.artists as artist, i}
							<span>{artist.name}{i < track.artists.length - 1 ? ', ' : ''}</span>
						{/each}
					</p>
				</div>
				{#if track.preview_url}
					<div class="flex justify-center items-center px-5">
						{#if audioIsPlaying && currentlyPlayingAudio.src === track.preview_url}
							<span on:click|stopPropagation={() => playAudio(track.preview_url, track)} on:keydown
								><Icon icon="bi:pause-fill" class="text-gray-400" height="24" /></span
							>
						{:else}
							<span on:click|stopPropagation={() => playAudio(track.preview_url, track)} on:keydown
								><Icon icon="bi:play-fill" class="text-gray-400" height="24" /></span
							>
						{/if}
					</div>
				{/if}
			</div>
		</div>
	{/each}
{:else}
	<p class="text-center text-gray-400">No tracks found.</p>
{/if}

<Modal bind:showModal>
	<h2 slot="header">
		<!-- {selectedTrack?.name} -->
		<p class="text-gray-400 text-center font-bold text-lg">{selectedTrack?.name}</p>
	</h2>

	<div class="flex justify-center mb-5">
		<img
			class="h-36 rounded-lg shadow-2xl"
			src={albumArt ? albumArt : selectedTrack?.album.images[0]?.url}
			alt={albumArt ? 'Album art' : selectedTrack?.album.name}
		/>
	</div>
	<div class="flex justify-center gap-2 mb-5">
		{#each Array(songStars[selectedTrack?.id]?.stars || 0) as _, i}
			<Icon icon="bi:star-fill" class="text-yellow-400" height="24" key={i} />
		{/each}
		<!-- Render gray stars for missing stars -->
		{#each Array(3 - (songStars[selectedTrack?.id]?.stars || 0)) as _, i}
			<Icon icon="bi:star-fill" class="text-gray-400" height="24" key={i} />
		{/each}
	</div>

	<div class="flex items-center gap-1 justify-between my-5">
		<DifficultyBox
			{selectedDifficulty}
			finished={songStars[selectedTrack?.id]?.playedDifficulties.includes('easy')}
			stars={1}
			on:click={() => (selectedDifficulty = 1)}
		/>
		<DifficultyBox
			{selectedDifficulty}
			finished={songStars[selectedTrack?.id]?.playedDifficulties.includes('medium')}
			stars={2}
			on:click={() => (selectedDifficulty = 2)}
		/>
		<DifficultyBox
			{selectedDifficulty}
			finished={songStars[selectedTrack?.id]?.playedDifficulties.includes('hard')}
			stars={3}
			on:click={() => (selectedDifficulty = 3)}
		/>
	</div>

	<div class="text-center my-5">
		<p class="font-bold text-2xl">{gameTitle}</p>
		<p class="font-light">{gameDescription}</p>
	</div>
	<div class="flex justify-center">
		<a
			href={`/game/${selectedTrack?.id}/${selectedTrack?.artists[0].name}&${
				selectedTrack?.name
			}/${difficulties[selectedDifficulty].toLowerCase()}`}
			class="bg-green-500 text-sm uppercase w-full text-center text-gray-900 font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-green-700"
			>Starten</a
		>
	</div>
</Modal>
