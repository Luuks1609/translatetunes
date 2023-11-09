import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, a as each, v as validate_component, e as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
import { a as user } from "../../../../chunks/firebase.js";
import "translate";
import "../../../../chunks/authStore.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let data = [];
  $$unsubscribe_user();
  return `<div class="mb-20"><div class="px-5 mt-5"><nav class="flex justify-between mb-5"><h2 class="font-bold text-xl capitalize" data-svelte-h="svelte-1bh8pud">Leaderboard</h2></nav> ${data.length === 0 ? ` ${each([1, 2, 3, 4, 5], (_) => {
    return `<div class="flex px-5 py-2 justify-between items-center w-full min-h-[3em] border-2 border-gray-700 rounded mb-2 overflow-hidden animate-pulse"><div class="flex items-center gap-3"><div class="w-10 h-10 bg-gray-500 rounded-full"></div> <div class="w-32 h-6 bg-gray-500 rounded-full"></div></div> <div class="flex items-center gap-3 text-xl">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "fluent-emoji:gem-stone",
        class: "text-blue-400",
        height: "24"
      },
      {},
      {}
    )} <div class="w-12 h-4 bg-gray-500 rounded-full"></div></div> </div>`;
  })}` : `${each(data, (player, i) => {
    return `<div class="${"flex px-5 py-2 justify-between items-center w-full min-h-[3em] border-2 border-gray-700 " + escape(player.uid === $user.uid && "border-amber-400", true) + " rounded mb-2 overflow-hidden"}"><div class="flex items-center gap-3"><p class="font-semibold text-lg">${escape(i + 1)}</p> <img${add_attribute("src", player?.avatar, 0)} class="rounded-full h-12" alt=""> <p class="font-semibold text-xl">${escape(player.username)} </p></div> <div class="flex items-center gap-3 text-xl">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "fluent-emoji:gem-stone",
        class: "text-blue-400",
        height: "24"
      },
      {},
      {}
    )} ${escape(player.score)}</div> </div>`;
  })}`}</div></div> ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
