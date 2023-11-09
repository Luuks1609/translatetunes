import { v as validate_store, s as subscribe, i as is_promise, n as noop } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as each, b as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { A as ArtistSearchResult } from "../../../chunks/ArtistSearchResult.js";
import { T as TrackSearchResult } from "../../../chunks/TrackSearchResult.js";
import { a as accessToken } from "../../../chunks/authStore.js";
import "translate";
import { a as user, u as userData } from "../../../chunks/firebase.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { N as Navigation } from "../../../chunks/Navigation.js";
import "firebase/firestore";
const PlaylistResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { results = null } = $$props;
  let { title } = $$props;
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `${results ? `<h2 class="my-2 mt-10 font-bold text-2xl">${escape(title)}</h2> <div class="grid grid-cols-2 gap-2">${each(results.items, (playlist) => {
    return `<a${add_attribute("href", `/playlist/${playlist.id}`, 0)}> <div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex"><img class="h-12 w-12 object-cover"${add_attribute("src", playlist.images[0].url, 0)}${add_attribute("alt", playlist.name, 0)}> <div class="flex items-center truncate"><p class="text-white text-md font-semibold truncate pl-2">${escape(playlist.name)}</p> </div></div> </a>`;
  })}</div>` : ` <div class="my-2 mt-10 font-bold text-2xl animate-pulse"><div class="w-1/2 h-6 bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md mb-2"></div> <div class="grid grid-cols-2 gap-2"><div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex"><div class="h-12 w-12 bg-gray-500"></div> <div class="flex items-center truncate"><div class="w-1/2 h-4 bg-gray-500 rounded-full"></div></div></div> <div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex"><div class="h-12 w-12 bg-gray-500"></div> <div class="flex items-center truncate"><div class="w-1/2 h-4 bg-gray-500 rounded-full"></div></div></div></div> <div class="grid grid-cols-2 gap-2 mt-2"><div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex"><div class="h-12 w-12 bg-gray-500"></div> <div class="flex items-center truncate"><div class="w-1/2 h-4 bg-gray-500 rounded-full"></div></div></div> <div class="w-full bg-dark-gray border-2 border-b-4 border-gray-700 rounded-md flex"><div class="h-12 w-12 bg-gray-500"></div> <div class="flex items-center truncate"><div class="w-1/2 h-4 bg-gray-500 rounded-full"></div></div></div></div></div>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_fbUser;
  let $accessToken, $$unsubscribe_accessToken;
  let $userData, $$unsubscribe_userData;
  validate_store(user, "fbUser");
  $$unsubscribe_fbUser = subscribe(user, (value) => value);
  validate_store(accessToken, "accessToken");
  $$unsubscribe_accessToken = subscribe(accessToken, (value) => $accessToken = value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let searchQuery = "";
  let topUserArtists = [];
  let topUserTracks = [];
  let userPlaylists;
  let unfinishedTracks = [];
  $$unsubscribe_fbUser();
  $$unsubscribe_accessToken();
  $$unsubscribe_userData();
  return `  ${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-wx5pme">Authorizing...</p> `;
    }
    return function(token) {
      return ` ${token ? `<div class="p-5 mb-16"> <nav class="flex justify-between"><h2 class="font-bold text-xl capitalize">Welcome, ${escape($userData?.username)}</h2> <span class="flex items-center gap-2">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "fluent-emoji:gem-stone",
          class: "text-blue-400",
          height: "32"
        },
        {},
        {}
      )} <p class="font-black tracking-wide text-3xl text-blue-300">${escape($userData?.score || 0)}</p></span></nav> <input class="w-full rounded p-2 mt-10 mb-2 bg-gray-700 border-2 border-gray-600 text-white" placeholder="Search for a track..." type="text"${add_attribute("value", searchQuery, 0)}> <form><input type="submit" value="Zoeken" class="bg-blue-400 w-full text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-blue-500"></form>  ${unfinishedTracks && unfinishedTracks.length > 0 ? `${validate_component(TrackSearchResult, "TrackSearchResult").$$render(
        $$result,
        {
          results: unfinishedTracks,
          title: "Get 3 stars!"
        },
        {},
        {}
      )}` : ``} ${validate_component(PlaylistResult, "PlaylistResult").$$render(
        $$result,
        {
          results: userPlaylists,
          title: "Your Playlists"
        },
        {},
        {}
      )} ${`<div>${validate_component(ArtistSearchResult, "ArtistSearchResult").$$render(
        $$result,
        {
          results: topUserArtists,
          title: "Favorite Artists"
        },
        {},
        {}
      )} ${validate_component(TrackSearchResult, "TrackSearchResult").$$render(
        $$result,
        {
          results: topUserTracks,
          title: "Favorite Tracks"
        },
        {},
        {}
      )}</div>`} ${``}</div> ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}` : `<button data-svelte-h="svelte-126e2f0">Authorize with Spotify</button>`} `;
    }(__value);
  }($accessToken)}`;
});
export {
  Page as default
};
