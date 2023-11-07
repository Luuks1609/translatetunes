<script>
	import { ConfettiBurst, random } from 'svelte-canvas-confetti';
	import { onMount, tick } from 'svelte';
	import { userData, user, db } from '$lib/firebase';
	import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
	import { tweened } from 'svelte/motion';
	import { fade, fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	/**
	 * Correct selections.
	 * @type {number}
	 */
	export let score;

	/**
	 * Inorrect selections.
	 * @type {number}
	 */
	export let incorrectAnswers;
	export let difficulty;
	export let trackId;

	let pageIndex = 0;

	const totalQuestions = score + incorrectAnswers;

	const correctPercentage = (score / totalQuestions) * 100;

	// Computed property for the CSS class
	$: resultClass =
		correctPercentage < 55
			? 'text-red-400'
			: correctPercentage <= 75
			? 'text-green-400'
			: correctPercentage < 100
			? 'text-blue-400'
			: 'gradient-text';

	// Text based on percentage
	$: resultText =
		correctPercentage < 55
			? 'Nog even oefenen!'
			: correctPercentage <= 75
			? 'Goed gedaan!'
			: correctPercentage < 100
			? 'Uitstekend!'
			: 'PERFECTE SCORE!';

	const makeConfettiBursts = async () => {
		show = false;
		await tick();
		show = true;
	};

	const hasDifficultyBeenPlayed = async (userId, trackId, difficulty) => {
		const docRef = doc(db, 'playedSongs', `${userId}_${trackId}_${difficulty}`);
		const docSnapshot = await getDoc(docRef);
		return docSnapshot.exists();
	};

	const arr = Array.from({ length: 10 }, (_, i) => random(i));
	let show = false;

	const currentUserScore = $userData.score;
	const newScore = currentUserScore + score;

	const giveScore = async () => {
		if (score > 0) {
			await updateDoc(doc(db, 'users', $user.uid), { score: newScore });
		}

		if (correctPercentage > 55) {
			const userId = $user.uid;
			// Check if the difficulty has been played for the given track
			const difficultyPlayed = await hasDifficultyBeenPlayed(userId, trackId, difficulty);

			if (!difficultyPlayed) {
				// Update the 'playedSongs' collection to mark this difficulty as played
				await setDoc(doc(db, 'playedSongs', `${userId}_${trackId}_${difficulty}`), {
					userId,
					trackId,
					difficulty
				});
			}
		}
	};

	const scoreTweened = tweened(currentUserScore, {
		duration: 1200
	});

	onMount(() => {
		makeConfettiBursts();
		giveScore();
	});

	$: if (pageIndex === 1) {
		scoreTweened.set(newScore);
		setTimeout(() => {
			window.location.href = '/';
		}, 1500);
	}

	// stylen van auth-pages
	// iets bedenken voor authCheck, soort loading state.
</script>

{#if pageIndex === 0}
	<div class="flex flex-col justify-between h-3/4 mt-32 p-4">
		<div class="flex flex-col justify-center items-center h-3/4">
			<p class="text-2xl font-bold text-center {resultClass}">{resultText}</p>
			<p class="text-sm text-gray-400">You have earned {score} points!</p>
			<div class="flex gap-5 w-full mt-10">
				<div class="basis-1/2">
					<div class="bg-green-500 rounded-t-xl px-5">
						<p class="text-center text-xs py-1 uppercase text-gray-dark font-bold tracking-wide">
							questions
						</p>
					</div>
					<div class="border-green-500 border-2 rounded-b-xl basis-1/2 p-2">
						<p class="text-green-500 font-bold text-sm tracking-wider text-center">
							{score}/{totalQuestions}
						</p>
					</div>
				</div>
				<div class="basis-1/2">
					<div class="bg-yellow-500 rounded-t-xl px-5">
						<p class="text-center text-xs py-1 uppercase text-gray-dark font-bold tracking-wide">
							good
						</p>
					</div>
					<div class="border-yellow-500 border-2 rounded-b-xl basis-1/2 p-2">
						<p class="text-yellow-500 font-bold text-sm tracking-wider text-center">
							{correctPercentage.toFixed(0)}%
						</p>
					</div>
				</div>
			</div>
		</div>

		<button
			class="bg-blue-400 text-white font-semibold py-2 px-4 mt-32 w-full rounded-md shadow-mdtransition duration-300 ease-in-out border-b-4 border-blue-500"
			on:keydown
			on:click={() => pageIndex++}>Continue</button
		>
	</div>

	{#if show && correctPercentage >= 75}
		{#each arr as delay, i (i)}
			<ConfettiBurst
				origin={[
					random((window.innerWidth / 4) * 3, window.innerWidth / 4),
					random((window.innerHeight / 4) * 2, window.innerHeight / 4)
				]}
				particleCount={25}
				styles={[`hsl(${i * 40 + 25}, 95%, 75%)`]}
				onCreate={(p) => ({ ...p, delay, w: 6, h: 6 })}
			/>
		{/each}
	{/if}
{:else}
	<div class="flex flex-col items-center justify-between h-3/4 mt-32 p-4">
		<div class="flex flex-col items-center justify-center h-3/4">
			<p transition:fade={{ duration: 1000 }} class="font-extrabold text-blue-500 text-8xl">
				{$scoreTweened.toFixed(0)}
			</p>
		</div>
	</div>
{/if}

<style>
	/* CSS for the gradient animation class */
	@keyframes gradient {
		0% {
			background-position: 0% 50%;
		}
		100% {
			background-position: 100% 50%;
		}
	}

	.animate-gradient {
		background: linear-gradient(270deg, #ff5722, #2196f3, #4caf50);
		background-size: 200% 200%;
		animation: gradient 8s linear infinite;
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	.gradient-text {
		--bg-size: 400%;
		--color-one: yellow;
		--color-two: orange;
		background: linear-gradient(90deg, var(--color-one), var(--color-two), var(--color-one)) 0 0 /
			var(--bg-size) 100%;
		color: transparent;
		background-clip: text;
	}

	@media (prefers-reduced-motion: no-preference) {
		.gradient-text {
			animation: move-bg 6s linear infinite;
		}
		@keyframes move-bg {
			to {
				background-position: var(--bg-size) 0;
			}
		}
	}
</style>
