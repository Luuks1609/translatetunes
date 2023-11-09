import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, b as add_attribute, a as each, v as validate_component, e as escape } from "../../../../chunks/ssr.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
import { d as db, a as user, u as userData } from "../../../../chunks/firebase.js";
import "../../../../chunks/Icon.js";
import { collection, doc } from "firebase/firestore";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $userData, $$unsubscribe_userData;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let searchQuery = "";
  let searchResults = [];
  collection(db, "users");
  doc(db, "users", $user.uid);
  $$unsubscribe_user();
  $$unsubscribe_userData();
  return `<div class="p-5 mb-20"><nav class="flex justify-between mb-5"><h2 class="font-bold text-xl capitalize" data-svelte-h="svelte-1x5kyhf">Friends</h2></nav> <input class="w-full rounded p-2 mt-10 mb-2 bg-gray-700 border-2 border-gray-600 text-white" placeholder="Search for a user" type="text"${add_attribute("value", searchQuery, 0)}> <form><input type="submit" value="Zoeken" class="bg-blue-400 w-full text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-blue-500"></form> ${each(searchResults, (result, i) => {
    return `<div class="flex mt-5 px-5 py-2 justify-between items-center w-full min-h-[3em] border-2 border-gray-700 rounded mb-2 overflow-hidden"><div class="flex items-center gap-3"><img${add_attribute("src", result?.avatar, 0)} class="rounded-full h-12" alt=""> <p class="font-semibold">${escape(result.username)}</p></div> <div class="flex items-center gap-3">${$user.uid !== result.userId ? `${$userData.following.includes(result.userId) ? `<button class="bg-red-400 w-full text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-300 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-red-500" data-svelte-h="svelte-fvil23">Unfollow
						</button>` : `<button class="bg-blue-400 w-full text-white font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-blue-500" data-svelte-h="svelte-xl7pdg">Follow
						</button>`}` : ``}</div> </div>`;
  })}</div> ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
