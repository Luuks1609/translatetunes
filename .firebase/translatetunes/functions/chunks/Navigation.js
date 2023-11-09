import { v as validate_store, s as subscribe } from "./utils.js";
import { c as create_ssr_component, a as each, b as add_attribute, e as escape, v as validate_component } from "./ssr.js";
import { I as Icon } from "./Icon.js";
import { p as page } from "./stores.js";
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let path;
  let $page, $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const menuItems = [
    {
      icon: "bi:house-fill",
      color: "blue-400",
      border: "border-blue-400",
      route: "/"
    },
    {
      icon: "bi:people-fill",
      color: "green-400",
      border: "border-green-400",
      route: "/friends"
    },
    {
      icon: "bi:trophy-fill",
      color: "yellow-400",
      border: "border-yellow-400",
      route: "/leaderboard"
    },
    {
      icon: "bi:person-circle",
      color: "purple-500",
      border: "border-purple-400",
      route: "/profile"
    }
  ];
  path = $page.url.pathname;
  $$unsubscribe_page();
  return `<div class="fixed flex px-5 justify-between items-center bottom-0 w-full h-20 bg-dark-gray border-t-2 border-gray-700">${each(menuItems, (item) => {
    return `<a${add_attribute("href", item.route, 0)} class="${"p-2 rounded-lg " + escape(path == item.route && `border ${item.border}`, true)}">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: item.icon,
        class: "text-" + item.color,
        height: "32"
      },
      {},
      {}
    )} </a>`;
  })}</div>`;
});
export {
  Navigation as N
};
