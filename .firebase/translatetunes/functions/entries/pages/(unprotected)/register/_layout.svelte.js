import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const AnimatedRoute = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_page();
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const activeClasses = "text-green-600 dark:text-green-500";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="p-4"><ol class="flex items-center justify-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base pb-10"><li class="${escape(activeClasses, true) + " flex md:w-full items-center sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}"><a href="/register" class="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500"><svg class="${"w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 " + escape(activeClasses, true)}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path></svg>
				Account <span class="hidden sm:inline-flex sm:ml-2" data-svelte-h="svelte-18oc919">Registratie</span></a></li> <li class="${escape(
    $page.route.id?.includes("username") ? activeClasses : "",
    true
  ) + " flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700"}"><a href="register/username" class="flex items-center sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">${$page.route.id?.includes("username") ? `<svg class="${"w-3.5 h-3.5 sm:w-4 sm:h-4 mr-2.5 " + escape(activeClasses, true)}" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"></path></svg>` : `<span class="mr-2" data-svelte-h="svelte-2qcogv">2</span>`}
				Gebruikersnaam</a></li></ol> ${validate_component(AnimatedRoute, "AnimatedRoute").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="p-6 rounded-lg bg-dark-gray border-gray-700">${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}</div>`;
});
export {
  Layout as default
};
