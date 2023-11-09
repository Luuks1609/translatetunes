import { i as is_promise, n as noop } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { T as TrackSearchResult } from "../../../../../chunks/TrackSearchResult.js";
import { c as callWithRetry } from "../../../../../chunks/utils2.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const getPlaylist = async () => {
    try {
      const getPlaylist2 = await callWithRetry(`https://api.spotify.com/v1/playlists/${data.props.playlistId}`);
      return getPlaylist2;
    } catch (error) {
      console.error(error);
    }
  };
  let promise = getPlaylist();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-mv6tav">...waiting</p> `;
    }
    return function(data2) {
      return ` <div class="p-4">  <div class="bg-dark-gray w-fit rounded-lg border border-b-4 border-gray-700 p-3 px-3 cursor-pointer">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "bi:chevron-left",
          class: "text-white ",
          height: "18"
        },
        {},
        {}
      )}</div></div> <div class="flex justify-center"><div class="mb-5"><img class="w-64 h-64 object-cover"${add_attribute("src", data2?.images[0].url, 0)}${add_attribute("alt", data2?.name.name, 0)}> <h2 class="text-center font-bold text-xl py-2">${escape(data2.name)}</h2></div></div> ${validate_component(TrackSearchResult, "TrackSearchResult").$$render(
        $$result,
        {
          results: data2.tracks.items.map((item) => item.track),
          isAlbum: true
        },
        {},
        {}
      )} `;
    }(__value);
  }(promise)}`;
});
export {
  Page as default
};
