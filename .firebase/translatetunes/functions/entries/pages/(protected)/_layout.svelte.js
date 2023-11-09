import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { A as AuthCheck } from "../../../chunks/AuthCheck.js";
import { u as userData, a as user } from "../../../chunks/firebase.js";
/* empty css                   */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userData;
  let $$unsubscribe_user;
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => value);
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => value);
  $$unsubscribe_userData();
  $$unsubscribe_user();
  return `${validate_component(AuthCheck, "AuthCheck").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
