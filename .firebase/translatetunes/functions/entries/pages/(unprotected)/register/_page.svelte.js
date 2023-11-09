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
  let confirmPassword = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_user();
  return `${$user ? `<p class="text-center text-xl font-semibold mb-10" data-svelte-h="svelte-okyd9s">You are logged in</p> <button class="bg-red-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-red-700" data-svelte-h="svelte-g9gfqx">Sign out</button>` : `<h2 class="text-center text-xl font-semibold mb-10" data-svelte-h="svelte-iibtbq">Registreren</h2> <input type="text" class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white" placeholder="example@email.com"${add_attribute("value", email, 0)}> <input type="password" class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white" placeholder="wachtwoord"${add_attribute("value", password, 0)}> <input type="password" class="w-full rounded p-2 mb-5 bg-gray-700 border-2 border-gray-600 text-white" placeholder="herhaal wachtwoord"${add_attribute("value", confirmPassword, 0)}> <button class="bg-green-500 text-white font-semibold py-2 px-4 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-green-700" data-svelte-h="svelte-1eh6kb3">Registreer</button>`}`;
});
export {
  Page as default
};
