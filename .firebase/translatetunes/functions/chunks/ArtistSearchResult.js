import { c as create_ssr_component, e as escape, a as each, b as add_attribute } from "./ssr.js";
const ArtistSearchResult = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { results } = $$props;
  let { title } = $$props;
  if ($$props.results === void 0 && $$bindings.results && results !== void 0)
    $$bindings.results(results);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<h2 class="my-2 mt-10 font-bold text-2xl">${escape(title)}</h2> <div class="overflow-x-scroll my-2"><div class="flex flex-nowrap gap-4 snap snap-x snap-mandatory justify-between"> ${results && results.length > 0 ? `${each(results.slice(0, 10), (artist) => {
    return `<a${add_attribute("href", `/artist/${artist.id}`, 0)} class="w-2/5 flex-shrink-0 border-gray-700 border-2 p-1 rounded-xl border-b-4"> <div class="flex items-center justify-center w-full"><img class="w-16 h-16 object-cover rounded-full mt-2"${add_attribute("src", artist.images[0]?.url, 0)}${add_attribute("alt", artist.name, 0)}></div>  <p class="pt-5 whitespace-nowrap overflow-hidden text-ellipsis text-md text-center font-semibold text-white">${escape(artist.name)}</p> <p class="text-sm text-center text-gray-400" data-svelte-h="svelte-cuhuc7">Artist</p> </a>`;
  })}` : `<p class="text-center text-gray-400" data-svelte-h="svelte-jhdd1r">No artists found.</p>`}</div></div>`;
});
export {
  ArtistSearchResult as A
};
