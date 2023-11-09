import { c as create_ssr_component, d as createEventDispatcher, e as escape, v as validate_component, a as each } from "../../../../../../../chunks/ssr.js";
import "../../../../../../../chunks/firebase.js";
import "firebase/firestore";
import { e as extractGoodSentences, t as translate } from "../../../../../../../chunks/utils2.js";
const Confetti_svelte_svelte_type_style_lang = "";
const GameOver_svelte_svelte_type_style_lang = "";
const TranslateSentence = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lyrics } = $$props;
  let { sourceLanguage } = $$props;
  let { targetLanguage } = $$props;
  let { mode } = $$props;
  const onOptionClick = () => handleOptionClick();
  let askedSentences = [];
  let currentSentence = null;
  const extractedSentences = extractGoodSentences(lyrics, 15, 29);
  const dispatch = createEventDispatcher();
  const pickOptions = async () => {
    const randomSentences = /* @__PURE__ */ new Set();
    randomSentences.add(currentSentence.toLowerCase());
    while (randomSentences.size < 3 && extractedSentences.length > 0) {
      const randomIndex = Math.floor(Math.random() * extractedSentences.length);
      const randomSentence = extractedSentences[randomIndex];
      randomSentences.add(randomSentence.toLowerCase());
    }
    while (randomSentences.size < 4) {
      const randomIndex = Math.floor(Math.random() * extractedSentences.length);
      const randomSentence = extractedSentences[randomIndex];
      randomSentences.add(randomSentence.toLowerCase());
    }
    const shuffledOptions = Array.from(randomSentences).map((sentence) => {
      return sentence === currentSentence.toLowerCase() ? currentSentence : sentence;
    });
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }
    dispatch("setOptions", await Promise.all(shuffledOptions.map(async (sentence) => {
      const translatedLabel = mode === "easy" ? await translate(sentence, sourceLanguage, targetLanguage) : await translate(sentence, targetLanguage, sourceLanguage);
      return {
        label: translatedLabel,
        value: sentence,
        correct: sentence === currentSentence
      };
    })));
    askedSentences = [...askedSentences, currentSentence];
  };
  const handleOptionClick = async () => {
    if (mode === "easy") {
      currentSentence = extractedSentences[askedSentences.length];
    } else {
      currentSentence = mode === "medium" ? await translate(extractedSentences[askedSentences.length], sourceLanguage, targetLanguage) : null;
    }
    pickOptions();
  };
  if ($$props.lyrics === void 0 && $$bindings.lyrics && lyrics !== void 0)
    $$bindings.lyrics(lyrics);
  if ($$props.sourceLanguage === void 0 && $$bindings.sourceLanguage && sourceLanguage !== void 0)
    $$bindings.sourceLanguage(sourceLanguage);
  if ($$props.targetLanguage === void 0 && $$bindings.targetLanguage && targetLanguage !== void 0)
    $$bindings.targetLanguage(targetLanguage);
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.onOptionClick === void 0 && $$bindings.onOptionClick && onOptionClick !== void 0)
    $$bindings.onOptionClick(onOptionClick);
  {
    if (askedSentences.length === extractedSentences.length) {
      dispatch("finishGame");
    }
  }
  return `<p class="text-white text-2xl font-bold my-5 text-center">${escape(currentSentence)}</p>`;
});
function replaceLongestWord(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";
  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  const replacedSentence = sentence.replace(longestWord, "_____");
  return {
    replacedSentence,
    correctAnswer: longestWord
  };
}
const MissingWord = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { lyrics } = $$props;
  let { sourceLanguage } = $$props;
  let { targetLanguage } = $$props;
  let sentence = "";
  let currentSentenceIndex = 0;
  let correctAnswer = "";
  const onOptionClick = () => handleOptionClick();
  const dispatch = createEventDispatcher();
  const extractedSentences = extractGoodSentences(lyrics, 15, 29);
  const pickOptions = async (correctAnswer2) => {
    let cleanedCorrectAnswer = correctAnswer2.replace(/[^a-zA-ZáéíóúñüÁÉÍÓÚÑÜ',]/g, "");
    cleanedCorrectAnswer = cleanedCorrectAnswer.replace(/[',]$/, "");
    let options = [];
    const longestWords = /* @__PURE__ */ new Set();
    for (const sentence2 of extractedSentences) {
      const words = sentence2.split(/\s|,/);
      let longestWord = "";
      for (const word of words) {
        let cleanedWord = word.replace(/[^a-zA-ZáéíóúñüÁÉÍÓÚÑÜ',]/g, "");
        cleanedWord = cleanedWord.replace(/[',]$/, "");
        if (cleanedWord.length > longestWord.length) {
          longestWord = cleanedWord;
        }
      }
      if (longestWord.length > 0) {
        longestWords.add(longestWord);
      }
    }
    longestWords.delete(cleanedCorrectAnswer);
    const uniqueLongestWords = Array.from(longestWords);
    const randomWords = uniqueLongestWords.slice(0, 4);
    for (const word of randomWords) {
      options.push({
        correct: false,
        label: word,
        translation: await translate(word, sourceLanguage, targetLanguage)
      });
    }
    options.push({
      correct: true,
      label: cleanedCorrectAnswer,
      translation: await translate(cleanedCorrectAnswer, sourceLanguage, targetLanguage)
    });
    options = options.sort(() => Math.random() - 0.5);
    return options;
  };
  const handleOptionClick = async () => {
    if (currentSentenceIndex < extractedSentences.length - 1) {
      currentSentenceIndex++;
      loadSentence();
    } else {
      dispatch("finishGame");
    }
  };
  const loadSentence = async () => {
    const fullSentence = extractedSentences[currentSentenceIndex];
    const result = replaceLongestWord(fullSentence);
    sentence = result.replacedSentence;
    correctAnswer = result.correctAnswer;
    dispatch("setOptions", await pickOptions(correctAnswer));
  };
  if ($$props.lyrics === void 0 && $$bindings.lyrics && lyrics !== void 0)
    $$bindings.lyrics(lyrics);
  if ($$props.sourceLanguage === void 0 && $$bindings.sourceLanguage && sourceLanguage !== void 0)
    $$bindings.sourceLanguage(sourceLanguage);
  if ($$props.targetLanguage === void 0 && $$bindings.targetLanguage && targetLanguage !== void 0)
    $$bindings.targetLanguage(targetLanguage);
  if ($$props.onOptionClick === void 0 && $$bindings.onOptionClick && onOptionClick !== void 0)
    $$bindings.onOptionClick(onOptionClick);
  return `<p class="text-white text-2xl font-bold my-5 text-center">${escape(sentence)}</p>  `;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let lyrics = data.props.track;
  let difficulty = data.props.difficulty;
  data.props.trackId;
  let score = 0;
  let incorrectAnswers = 0;
  let options = [];
  let totalOptions = null;
  let optionClick;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${`<div class="flex flex-col justify-between h-full min-h-screen p-5"><div><div class="flex items-center gap-5"><a href="/" class="text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></a> <div class="w-full h-4 bg-gray-600 relative rounded-full my-5"><div class="h-full bg-green-500 rounded-full transition" style="${"width: " + escape((score + incorrectAnswers) * 100 / totalOptions, true) + "%; transition: width 0.2s ease-in-out;"}"></div></div> <div class="flex"><span class="font-extrabold text-white text-4xl">${escape(score)}</span></div></div> ${difficulty === "easy" ? ` ${validate_component(TranslateSentence, "TranslateSentence").$$render(
      $$result,
      {
        lyrics,
        sourceLanguage: "es",
        targetLanguage: "en",
        mode: "easy",
        onOptionClick: optionClick
      },
      {
        onOptionClick: ($$value) => {
          optionClick = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${difficulty === "medium" ? ` ${validate_component(TranslateSentence, "TranslateSentence").$$render(
      $$result,
      {
        lyrics,
        sourceLanguage: "es",
        targetLanguage: "en",
        mode: difficulty,
        onOptionClick: optionClick
      },
      {
        onOptionClick: ($$value) => {
          optionClick = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : `${validate_component(MissingWord, "MissingWord").$$render(
      $$result,
      {
        lyrics,
        sourceLanguage: "es",
        targetLanguage: "en",
        onOptionClick: optionClick
      },
      {
        onOptionClick: ($$value) => {
          optionClick = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}`} ${``} ${``}</div> <div class="mb-32">${each(options, (option) => {
      return `<button class="bg-blue-400 text-white font-semibold lowercase py-2 px-4 mb-5 w-full rounded-md shadow-mdtransition duration-300 ease-in-out border-b-4 border-blue-500">${escape(option.label)} ${option.translation ? `<span class="block italic text-xs font-light">(${escape(option.translation)})</span>` : ``} </button>`;
    })}</div></div>`}`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
