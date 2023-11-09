import { i as is_promise, n as noop } from "../../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, a as each, b as add_attribute, v as validate_component } from "../../../../../chunks/ssr.js";
import { A as ArtistSearchResult } from "../../../../../chunks/ArtistSearchResult.js";
import { T as TrackSearchResult } from "../../../../../chunks/TrackSearchResult.js";
import { c as callWithRetry } from "../../../../../chunks/utils2.js";
import { I as Icon } from "../../../../../chunks/Icon.js";
const AlbumSearchResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { results } = $$props;
  let { title } = $$props;
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<h2 class="my-2 mt-5 font-bold text-2xl">${escape(title)}</h2>  ${results && results.length > 1 ? `<div class="grid grid-cols-2 gap-4">${each(results, (album) => {
    return `<a${add_attribute("href", `/album/${album.id}`, 0)}> <div class="w-full border border-gray-700 rounded"><img class="h-auto w-full"${add_attribute("src", album.images[0].url, 0)}${add_attribute("alt", album.name, 0)}> <div class="justify-center text-center py-2"><p class="text-white text-md font-semibold truncate">${escape(album.name)}</p> <p class="capitalize text-gray-400 text-sm">${escape(new Date(album.release_date).getFullYear())} • ${escape(album.album_group)}</p> </div></div> </a>`;
  })}</div>` : `<p class="text-center text-gray-400" data-svelte-h="svelte-2hm59j">No albums found.</p>`}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const getArtist = async () => {
    try {
      const getArtist2 = await callWithRetry(`https://api.spotify.com/v1/artists/${data.props.artistId}`);
      const getAlbums = await callWithRetry(`https://api.spotify.com/v1/artists/${data.props.artistId}/albums`);
      const getTopTracks = await callWithRetry(
        // todo: market is hardcoded to NL, should be dynamic
        `https://api.spotify.com/v1/artists/${data.props.artistId}/top-tracks?market=NL`
      );
      const getRelatedArtists = await callWithRetry(`https://api.spotify.com/v1/artists/${data.props.artistId}/related-artists`);
      const artistData = {
        getArtist: getArtist2,
        getAlbums,
        getTopTracks,
        getRelatedArtists
      };
      return artistData;
    } catch (error) {
      console.error(error);
    }
  };
  let promise = getArtist();
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
      )}</div></div></div> <img class="w-full h-full object-cover"${add_attribute("src", data2?.getArtist.images[0].url, 0)}${add_attribute("alt", data2?.getArtist.name, 0)}>  <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white"><div class="p-4"><h1 class="text-4xl font-bold">${escape(data2?.getArtist.name)}</h1></div></div></div> <div class="p-4">${validate_component(TrackSearchResult, "TrackSearchResult").$$render(
        $$result,
        {
          results: data2?.getTopTracks.tracks,
          title: "Popular Tracks"
        },
        {},
        {}
      )} ${validate_component(AlbumSearchResult, "AlbumSearchResult").$$render(
        $$result,
        {
          results: data2?.getAlbums.items,
          title: "Albums"
        },
        {},
        {}
      )} ${validate_component(ArtistSearchResult, "ArtistSearchResult").$$render(
        $$result,
        {
          results: data2?.getRelatedArtists.artists,
          title: "Related Artists"
        },
        {},
        {}
      )} </div></div> `;
    }(__value);
  }(promise)}`;
});
export {
  Page as default
};
