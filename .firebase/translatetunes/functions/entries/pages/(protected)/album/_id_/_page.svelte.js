import { i as is_promise, n as noop } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, b as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { T as TrackSearchResult } from "../../../../../chunks/TrackSearchResult.js";
import { c as callWithRetry } from "../../../../../chunks/utils2.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const getAlbum = async () => {
    try {
      const getAlbum2 = await callWithRetry(`https://api.spotify.com/v1/albums/${data.props.albumId}`);
      return getAlbum2;
    } catch (error) {
      console.error(error);
    }
  };
  let promise = getAlbum();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` <p data-svelte-h="svelte-mv6tav">...waiting</p> `;
    }
    return function(data2) {
      return ` <div class="relative w-full min-h-screen"> <div class="relative w-full h-1/3"><div class="absolute top-0 left-0 right-0"><div class="p-4">  <div class="bg-dark-gray w-fit rounded-lg border border-b-4 border-gray-700 p-3 px-3 cursor-pointer">${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "bi:chevron-left",
          class: "text-white ",
          height: "18"
        },
        {},
        {}
      )}</div></div></div> <img class="w-full h-full object-cover"${add_attribute("src", data2?.images[0].url, 0)}${add_attribute("alt", data2?.name.name, 0)}>  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white"><div class="p-4"><h1 class="text-4xl font-bold">${escape(data2?.name)}</h1> <p class="text-lg font-medium">${escape(data2?.artists[0].name)}</p></div></div></div> ${validate_component(TrackSearchResult, "TrackSearchResult").$$render(
        $$result,
        {
          results: data2?.tracks.items,
          isAlbum: true,
          albumArt: data2?.images[0].url
        },
        {},
        {}
      )}</div> `;
    }(__value);
  }(promise)}`;
});
export {
  Page as default
};
