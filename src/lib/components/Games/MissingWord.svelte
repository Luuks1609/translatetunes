<script>
	import { extractGoodSentences, translate } from '$lib/utils';
	import { createEventDispatcher, onMount } from 'svelte';

	export let lyrics;
	export let sourceLanguage;
	export let targetLanguage;

	let sentence = '';
	let translatedSentence = ''; // Added variable for translated sentence
	let currentSentenceIndex = 0;
	let correctAnswer = '';

	export const onOptionClick = () => handleOptionClick();

	const dispatch = createEventDispatcher();

	// Extracts good sentences from the provided lyrics.
	const extractedSentences = extractGoodSentences(lyrics, 15, 29);

	function replaceLongestWord(sentence) {
		const words = sentence.split(' ');
		let longestWord = '';

		for (const word of words) {
			if (word.length > longestWord.length) {
				longestWord = word;
			}
		}

		const replacedSentence = sentence.replace(longestWord, '_____');
		return { replacedSentence, correctAnswer: longestWord };
	}

	const pickOptions = async (correctAnswer) => {
		// Clean the correctAnswer
		let cleanedCorrectAnswer = correctAnswer.replace(/[^a-zA-ZáéíóúñüÁÉÍÓÚÑÜ',]/g, ''); // Remove non-alphabetic characters, commas, and apostrophes
		cleanedCorrectAnswer = cleanedCorrectAnswer.replace(/[',]$/, ''); // Remove trailing comma or apostrophe

		let options = [];
		const longestWords = new Set(); // Use a Set to avoid duplicate words

		// Loop through all the extracted sentences
		for (const sentence of extractedSentences) {
			const words = sentence.split(/\s|,/); // Split by space or comma

			let longestWord = '';
			for (const word of words) {
				let cleanedWord = word.replace(/[^a-zA-ZáéíóúñüÁÉÍÓÚÑÜ',]/g, ''); // Remove non-alphabetic characters, commas, and apostrophes
				cleanedWord = cleanedWord.replace(/[',]$/, ''); // Remove trailing comma or apostrophe
				if (cleanedWord.length > longestWord.length) {
					longestWord = cleanedWord; // Update the longest word
				}
			}

			if (longestWord.length > 0) {
				longestWords.add(longestWord); // Add the longest word to the set
			}
		}

		// Make sure the cleaned correct answer is not included in the longestWords set
		longestWords.delete(cleanedCorrectAnswer);

		// Shuffle the longest words and pick 4 random ones
		const uniqueLongestWords = Array.from(longestWords);
		const randomWords = uniqueLongestWords.slice(0, 4);

		// Create options with correct set to false
		for (const word of randomWords) {
			options.push({
				correct: false,
				label: word,
				translation: await translate(word, sourceLanguage, targetLanguage)
			});
		}

		// Add the cleaned correct answer with correct set to true
		options.push({
			correct: true,
			label: cleanedCorrectAnswer,
			translation: await translate(cleanedCorrectAnswer, sourceLanguage, targetLanguage)
		});

		options = options.sort(() => Math.random() - 0.5); // Shuffle the options

		return options;
	};

	const handleOptionClick = async () => {
		if (currentSentenceIndex < extractedSentences.length - 1) {
			currentSentenceIndex++;
			loadSentence();
		} else {
			dispatch('finishGame');
		}
	};

	const loadSentence = async () => {
		const fullSentence = extractedSentences[currentSentenceIndex];
		const result = replaceLongestWord(fullSentence);
		sentence = result.replacedSentence;
		correctAnswer = result.correctAnswer;

		// // Translate the sentence and set it to translatedSentence
		// translate(fullSentence, sourceLanguage, targetLanguage)
		// 	.then((translation) => {
		// 		translatedSentence = translation;
		// 	})
		// 	.catch((error) => {
		// 		console.error('Translation error: ', error);
		// 	});

		dispatch('setOptions', await pickOptions(correctAnswer));
	};

	onMount(async () => {
		loadSentence();
		dispatch('setTotalOptions', extractedSentences.length);
	});
</script>

<p class="text-white text-2xl font-bold my-5 text-center">{sentence}</p>
<!-- todo: beslissen of je de vertaling wilt -->
<!-- <p class="text-white text-sm my-3 text-center">{translatedSentence}</p> -->
