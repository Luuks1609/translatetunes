import Translate from "translate";
import { a as accessToken, r as refreshToken } from "./authStore.js";
import { g as get_store_value } from "./utils.js";
const parseJsonpResponse = (response) => {
  const jsonpCallback = /callback\((.*?)\);/;
  const match = response.match(jsonpCallback);
  if (match) {
    const jsonData = match[1];
    try {
      return JSON.parse(jsonData);
    } catch (e) {
      return null;
    }
  }
  return null;
};
const translate = async (text, source, target) => {
  const translatedText = await Translate(text, {
    key: "AIzaSyC0RyDn8GCcPv_VEndWHo7YJ0cLB1L_HYI",
    from: source,
    to: target
  });
  return translatedText;
};
async function callWithRetry(endpoint) {
  const searchUrl = endpoint;
  const access = get_store_value(accessToken);
  const refresh = get_store_value(refreshToken);
  const searchResponse = await fetch(searchUrl, {
    headers: {
      Authorization: `Bearer ${access}}`
    }
  });
  if (searchResponse.status === 401 || searchResponse.status === 400) {
    console.log("trying to get a new token");
    const refreshResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          `${"ae8a8377a94d42d7b7e69086cde1bf6d"}:${"6901ef8b39ce4d1497749180106c32b5"}`
        )}`
      },
      body: `grant_type=refresh_token&refresh_token=${refresh}`
    });
    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json();
      const newAccessToken = refreshData.access_token;
      accessToken.set(newAccessToken);
      const retrySearchResponse = await fetch(searchUrl, {
        headers: {
          Authorization: `Bearer ${newAccessToken}`
        }
      });
      return retrySearchResponse.json();
    }
  }
  return searchResponse.json();
}
function extractGoodSentences(lyrics, minLen, maxRepetitive) {
  const sentences = lyrics.split(/[\n.!?;]/);
  const cleanSentences = sentences.map((sentence) => sentence.trim()).filter((sentence) => sentence.length >= minLen).map((sentence) => sentence.replace(/\([^)]*\)/g, "").trim()).filter((sentence) => sentence.length > 0).filter((sentence) => !sentence.includes("*"));
  const filteredSentences = [];
  const uniqueSentences = /* @__PURE__ */ new Set();
  for (const sentence of cleanSentences) {
    const characters = sentence.split("");
    const uniqueCharacters = [...new Set(characters)];
    if (uniqueCharacters.length / characters.length <= maxRepetitive && !uniqueSentences.has(sentence)) {
      filteredSentences.push(sentence);
      uniqueSentences.add(sentence);
    }
  }
  for (let i = filteredSentences.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filteredSentences[i], filteredSentences[j]] = [filteredSentences[j], filteredSentences[i]];
  }
  return filteredSentences;
}
export {
  callWithRetry as c,
  extractGoodSentences as e,
  parseJsonpResponse as p,
  translate as t
};
