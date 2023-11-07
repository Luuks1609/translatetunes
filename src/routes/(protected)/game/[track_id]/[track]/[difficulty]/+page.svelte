<script>
	import { scale } from 'svelte/transition';

	import { FallingConfetti } from 'svelte-canvas-confetti';
	import GameOver from '$lib/components/GameOver.svelte';
	import TranslateSentence from '$lib/components/Games/TranslateSentence.svelte';
	import MissingWord from '$lib/components/Games/MissingWord.svelte';

	export let data;

	let lyrics = data.props.track;
	let difficulty = data.props.difficulty;
	let trackId = data.props.trackId;

	/**
	 * User's score.
	 * @type {number}
	 */
	let score = 0;

	/**
	 * Incorrect selections.
	 * @type {number}
	 */
	let incorrectAnswers = 0;

	/**
	 * Options to be displayed to the user.
	 * @type {Array<{ correct:boolean, label:string, translation:string }>}
	 */
	let options = [];

	/**
	 * Total number of questions.
	 * @type {null | number}
	 */
	let totalOptions = null;

	// Determines if they game is over
	let gameOver = false;

	let showCorrectAnswerIcon = false;
	let showIncorrectAnswerIcon = false;
	let optionClick;

	const correctAnswerAnimation = () => {
		showCorrectAnswerIcon = true;
		setTimeout(() => {
			showCorrectAnswerIcon = false;
		}, 1500);
	};

	const incorrectAnswerAnimation = () => {
		showIncorrectAnswerIcon = true;
		setTimeout(() => {
			showIncorrectAnswerIcon = false;
		}, 1500);
	};

	const setOptions = (event) => {
		options = event.detail;
	};

	const setTotalQuestions = (event) => {
		totalOptions = event.detail;
	};

	const setGameOver = (event) => {
		gameOver = event.detail;
	};

	/**
	 * Checks if the selected option is correct.
	 * @param {boolean} correct - Whether the selected option is the correct one.
	 */
	const handleOptionClick = (correct) => {
		if (correct) {
			score++;
			correctAnswerAnimation();
		} else {
			incorrectAnswers++;
			incorrectAnswerAnimation();
		}
		optionClick();
	};
</script>

{#if !gameOver}
	<div class="flex flex-col justify-between h-full min-h-screen p-5">
		<div>
			<div class="flex items-center gap-5">
				<a href="/" class="text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						class="w-8 h-8"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</a>

				<div class="w-full h-4 bg-gray-600 relative rounded-full my-5">
					<div
						class="h-full bg-green-500 rounded-full transition"
						style="width: {((score + incorrectAnswers) * 100) /
							totalOptions}%; transition: width 0.2s ease-in-out;"
					/>
				</div>

				<div class="flex">
					<span class="font-extrabold text-white text-4xl">
						{score}
					</span>
				</div>
			</div>

			{#if difficulty === 'easy'}
				<!-- Show lyrics in target language and translate to source language -->
				<TranslateSentence
					{lyrics}
					sourceLanguage="es"
					targetLanguage="en"
					mode="easy"
					on:setOptions={(options) => setOptions(options)}
					on:setTotalOptions={(totalOptions) => setTotalQuestions(totalOptions)}
					on:setGameOver={(gameOver) => setGameOver(gameOver)}
					on:finishGame={() => (gameOver = !gameOver)}
					bind:onOptionClick={optionClick}
				/>
			{:else if difficulty === 'medium'}
				<!-- Show lyrics in source language and translate to target language -->
				<TranslateSentence
					{lyrics}
					sourceLanguage="es"
					targetLanguage="en"
					mode={difficulty}
					on:setOptions={(options) => setOptions(options)}
					on:setTotalOptions={(totalOptions) => setTotalQuestions(totalOptions)}
					on:setGameOver={(gameOver) => setGameOver(gameOver)}
					on:finishGame={() => (gameOver = !gameOver)}
					bind:onOptionClick={optionClick}
				/>
			{:else}
				<MissingWord
					{lyrics}
					sourceLanguage="es"
					targetLanguage="en"
					on:setOptions={(options) => setOptions(options)}
					on:setTotalOptions={(totalOptions) => setTotalQuestions(totalOptions)}
					on:setGameOver={(gameOver) => setGameOver(gameOver)}
					on:finishGame={() => (gameOver = !gameOver)}
					bind:onOptionClick={optionClick}
				/>
			{/if}

			{#if showCorrectAnswerIcon}
				<FallingConfetti />
			{/if}
			{#if showIncorrectAnswerIcon}
				<div class="flex justify-center" transition:scale>
					<svg
						clip-rule="evenodd"
						class="bg-red-500 rounded-full p-2"
						fill="#fff"
						width="48"
						height="48"
						fill-rule="evenodd"
						stroke-linejoin="round"
						stroke-miterlimit="2"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
						/></svg
					>
				</div>
			{/if}
		</div>

		<div class="mb-32">
			{#each options as option}
				<button
					class="bg-blue-400 text-white font-semibold lowercase py-2 px-4 mb-5 w-full rounded-md shadow-mdtransition duration-300 ease-in-out border-b-4 border-blue-500"
					on:click={() => handleOptionClick(option.correct)}
					>{option.label}
					{#if option.translation}
						<span class="block italic text-xs font-light">({option.translation})</span>
					{/if}
				</button>
			{/each}
		</div>
	</div>
{:else}
	<GameOver {incorrectAnswers} {score} {difficulty} {trackId} />
{/if}
