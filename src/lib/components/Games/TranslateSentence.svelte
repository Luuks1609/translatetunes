<script>
	import { extractGoodSentences, translate } from '$lib/utils';
	import { createEventDispatcher, onMount } from 'svelte';

	export let lyrics;
	export let sourceLanguage;
	export let targetLanguage;
	export let mode; // 'easy' or 'medium' mode
	export const onOptionClick = () => handleOptionClick();

	/**
	 * Sentences that already have been asked in the game.
	 * @type {string[]}
	 */
	let askedSentences = [];

	/**
	 * Sentence that is currently being asked.
	 * @type {string | null}
	 */
	let currentSentence = null;

	// Extracts good sentences from the provided lyrics.
	const extractedSentences = extractGoodSentences(lyrics, 15, 29);

	$: if (askedSentences.length === extractedSentences.length) {
		dispatch('finishGame');
	}

	const dispatch = createEventDispatcher();
	// ergens plaatsen om einde van spel te bepalen
	// on:click={() => dispatch('finishGame')}

	const pickOptions = async () => {
		/**
		 * @type {Set<string>}
		 */
		const randomSentences = new Set();

		// Add the current sentence to the options set (lowercased)
		randomSentences.add(currentSentence.toLowerCase());

		while (randomSentences.size < 3 && extractedSentences.length > 0) {
			const randomIndex = Math.floor(Math.random() * extractedSentences.length);
			const randomSentence = extractedSentences[randomIndex];
			randomSentences.add(randomSentence.toLowerCase());
		}

		// Ensure you have at least 3 unique options, and then add one extra unique option.
		while (randomSentences.size < 4) {
			const randomIndex = Math.floor(Math.random() * extractedSentences.length);
			const randomSentence = extractedSentences[randomIndex];
			randomSentences.add(randomSentence.toLowerCase());
		}

		// 2. Convert the set back to an array, shuffle it, and map to the original casing
		const shuffledOptions = Array.from(randomSentences).map((sentence) => {
			return sentence === currentSentence.toLowerCase() ? currentSentence : sentence;
		});

		for (let i = shuffledOptions.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
		}

		// 3. Return an object array with label = sentence and value = sentence but translated using the translate function
		dispatch(
			'setOptions',
			await Promise.all(
				shuffledOptions.map(async (sentence) => {
					const translatedLabel =
						mode === 'easy'
							? await translate(sentence, sourceLanguage, targetLanguage)
							: await translate(sentence, targetLanguage, sourceLanguage);

					return {
						label: translatedLabel,
						value: sentence,
						correct: sentence === currentSentence
					};
				})
			)
		);

		// 4. Add the current sentence to the asked sentences array
		// askedSentences.push(currentSentence);
		askedSentences = [...askedSentences, currentSentence];
	};

	const handleOptionClick = async () => {
		if (mode === 'easy') {
			currentSentence = extractedSentences[askedSentences.length];
		} else {
			// In medium mode, swap the source and target languages for currentSentence
			currentSentence =
				mode === 'medium'
					? await translate(
							extractedSentences[askedSentences.length],
							sourceLanguage,
							targetLanguage
					  )
					: null;
		}

		pickOptions();
	};

	onMount(async () => {
		if (mode === 'easy') {
			currentSentence = extractedSentences[0];
		} else {
			// In medium mode, set the first sentence in the target language
			currentSentence =
				mode === 'medium'
					? await translate(extractedSentences[0], sourceLanguage, targetLanguage)
					: null;
		}

		dispatch('setTotalOptions', extractedSentences.length);
		pickOptions();
	});
</script>

<p class="text-white text-2xl font-bold my-5 text-center">{currentSentence}</p>
