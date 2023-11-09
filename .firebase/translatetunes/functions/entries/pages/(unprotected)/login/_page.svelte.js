import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/ssr.js";
import { a as user } from "../../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { data } = $$props;
  let email = "";
  let password = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `${$user ? `<div class="p-10"><p class="text-center text-xl font-semibold mb-10" data-svelte-h="svelte-okyd9s">You are logged in</p> <button class="bg-red-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-red-700" data-svelte-h="svelte-18e8rp8">Sign out</button></div>` : `<div class="p-10 rounded-lg bg-dark-gray border-gray-700"><h2 class="text-center text-xl font-semibold mb-10" data-svelte-h="svelte-1lvc6x9">Inloggen</h2> <input type="text" class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white" placeholder="email"${add_attribute("value", email, 0)}> <input type="password" class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white" placeholder="wachtwoord"${add_attribute("value", password, 0)}> <button class="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-green-700" data-svelte-h="svelte-r49415">Inloggen</button></div>`}`;
});
export {
  Page as default
};
