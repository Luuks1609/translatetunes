import { v as validate_store, s as subscribe } from "./utils.js";
import { c as create_ssr_component, d as createEventDispatcher, e as escape, v as validate_component, a as each, b as add_attribute } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { M as Modal } from "./Modal.js";
import { a as user } from "./firebase.js";
import "firebase/firestore";
const DifficultyBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active;
  let { selectedDifficulty } = $$props;
  let { stars } = $$props;
  let { finished } = $$props;
  let activeClasses = "bg-yellow-400 shadow-2xl border-b-8 border-yellow-500 ";
  let inactiveClasses = "border-gray-700 border-b-4";
  createEventDispatcher();
  if ($$props.selectedDifficulty === void 0 && $$bindings.selectedDifficulty && selectedDifficulty !== void 0)
    $$bindings.selectedDifficulty(selectedDifficulty);
  if ($$props.stars === void 0 && $$bindings.stars && stars !== void 0)
    $$bindings.stars(stars);
  if ($$props.finished === void 0 && $$bindings.finished && finished !== void 0)
    $$bindings.finished(finished);
  active = selectedDifficulty === stars;
  return ` <div class="${"w-1/3 relative py-5 rounded-xl flex justify-center gap-1 bg-gray-800 " + escape(active ? activeClasses : inactiveClasses, true) + "}"}">${finished ? `<span class="absolute top-0 left-2">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "fa-solid:medal",
      class: "text-red-500",
      height: "30"
    },
    {},
    {}
  )}</span>` : ``} ${each({ length: stars }, (_) => {
    return `${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "bi:star-fill",
        class: active ? "text-gray-700" : "text-yellow-400",
        height: "24"
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const threeStarClasses = "bg-gradient-to-b from-yellow-300 to-yellow-500 ";
const TrackSearchResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  let { results } = $$props;
  let { title = "" } = $$props;
  let { isAlbum = false } = $$props;
  let { albumArt = "" } = $$props;
  let showModal = false;
  let selectedTrack;
  let songStars = {};
  const albumClasses = isAlbum ? "border-none my-5 pl-3" : "";
  const difficulties = { 1: "Easy", 2: "Medium", 3: "Hard" };
  let selectedDifficulty = 1;
  let gameTitle = "";
  let gameDescription = "";
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.isAlbum === void 0 && $$bindings.isAlbum && isAlbum !== void 0)
    $$bindings.isAlbum(isAlbum);
  if ($$props.albumArt === void 0 && $$bindings.albumArt && albumArt !== void 0)
    $$bindings.albumArt(albumArt);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      {
        {
          gameTitle = "Vertaal de zin";
          gameDescription = "Vertaal de songteksten naar het Engels";
        }
      }
    }
    $$rendered = `<h2 class="my-2 mt-10 font-bold text-2xl">${escape(title)}</h2>  ${results && results.length > 1 ? `${each(results, (track) => {
      return ` <div class="cursor-pointer"><div class="${"w-full min-h-16 border-2 border-gray-700 rounded flex flex-row mb-2 overflow-hidden " + escape(albumClasses, true) + " " + escape(
        Array(songStars[track?.id]?.stars === 3 ? threeStarClasses : ""),
        true
      )}">${track?.album?.images ? `<img class="h-16 object-cover"${add_attribute("src", track.album?.images[0]?.url, 0)}${add_attribute("alt", track.album.name, 0)}>` : ``} <div class="flex flex-col pl-2 flex-grow justify-center"><p class="${"w-3/4 text-white text-md truncate " + escape(
        Array(songStars[track?.id]?.stars === 3 ? "!text-black font-bold" : ""),
        true
      )}">${escape(track.name)}</p> <div class="flex gap-1">${each(Array(songStars[track?.id]?.stars || 0), (_, i) => {
        return `${songStars[track?.id]?.stars === 3 ? `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "bi:star-fill",
            class: "text-black",
            height: "15"
          },
          {},
          {}
        )}` : `${validate_component(Icon, "Icon").$$render(
          $$result,
          {
            icon: "bi:star-fill",
            class: "text-yellow-300 ",
            height: "15"
          },
          {},
          {}
        )}`}`;
      })}</div> <p class="${"text-gray-400 text-sm " + escape(
        Array(songStars[track?.id]?.stars === 3 ? "!text-black font-medium" : ""),
        true
      )}">${each(track.artists, (artist, i) => {
        return `<span>${escape(artist.name)}${escape(i < track.artists.length - 1 ? ", " : "")}</span>`;
      })} </p></div> ${track.preview_url ? `<div class="flex justify-center items-center px-5">${`<span>${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "bi:play-fill",
          class: "text-gray-400",
          height: "24"
        },
        {},
        {}
      )}</span>`} </div>` : ``}</div> </div>`;
    })}` : `<p class="text-center text-gray-400" data-svelte-h="svelte-1dd039r">No tracks found.</p>`} ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header"> <p class="text-gray-400 text-center font-bold text-lg">${escape(selectedTrack?.name)}</p></h2>`;
        },
        default: () => {
          return `<div class="flex justify-center mb-5"><img class="h-36 rounded-lg shadow-2xl"${add_attribute(
            "src",
            albumArt ? albumArt : selectedTrack?.album.images[0]?.url,
            0
          )}${add_attribute("alt", albumArt ? "Album art" : selectedTrack?.album.name, 0)}></div> <div class="flex justify-center gap-2 mb-5">${each(Array(songStars[selectedTrack?.id]?.stars || 0), (_, i) => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "bi:star-fill",
                class: "text-yellow-400",
                height: "24",
                key: i
              },
              {},
              {}
            )}`;
          })}  ${each(Array(3 - (songStars[selectedTrack?.id]?.stars || 0)), (_, i) => {
            return `${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "bi:star-fill",
                class: "text-gray-400",
                height: "24",
                key: i
              },
              {},
              {}
            )}`;
          })}</div> <div class="flex items-center gap-1 justify-between my-5">${validate_component(DifficultyBox, "DifficultyBox").$$render(
            $$result,
            {
              selectedDifficulty,
              finished: songStars[selectedTrack?.id]?.playedDifficulties.includes("easy"),
              stars: 1
            },
            {},
            {}
          )} ${validate_component(DifficultyBox, "DifficultyBox").$$render(
            $$result,
            {
              selectedDifficulty,
              finished: songStars[selectedTrack?.id]?.playedDifficulties.includes("medium"),
              stars: 2
            },
            {},
            {}
          )} ${validate_component(DifficultyBox, "DifficultyBox").$$render(
            $$result,
            {
              selectedDifficulty,
              finished: songStars[selectedTrack?.id]?.playedDifficulties.includes("hard"),
              stars: 3
            },
            {},
            {}
          )}</div> <div class="text-center my-5"><p class="font-bold text-2xl">${escape(gameTitle)}</p> <p class="font-light">${escape(gameDescription)}</p></div> <div class="flex justify-center"><a${add_attribute("href", `/game/${selectedTrack?.id}/${selectedTrack?.artists[0].name}&${selectedTrack?.name}/${difficulties[selectedDifficulty].toLowerCase()}`, 0)} class="bg-green-500 text-sm uppercase w-full text-center text-gray-900 font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-green-700">Starten</a></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  $$unsubscribe_user();
  return $$rendered;
});
export {
  TrackSearchResult as T
};
