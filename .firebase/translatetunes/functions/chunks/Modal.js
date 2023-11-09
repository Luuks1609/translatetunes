import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: "dialog.s-5tQsHPDWUqIr.s-5tQsHPDWUqIr{min-width:60%;max-width:85%;border-radius:0.2em;border:none;padding:0}dialog.s-5tQsHPDWUqIr.s-5tQsHPDWUqIr::backdrop{background:rgba(0, 0, 0, 0.6)}dialog.s-5tQsHPDWUqIr>div.s-5tQsHPDWUqIr{padding:1em}dialog[open].s-5tQsHPDWUqIr.s-5tQsHPDWUqIr{animation:s-5tQsHPDWUqIr-zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes s-5tQsHPDWUqIr-zoom{from{transform:scale(0.95)}to{transform:scale(1)}}dialog[open].s-5tQsHPDWUqIr.s-5tQsHPDWUqIr::backdrop{animation:s-5tQsHPDWUqIr-fade 0.2s ease-out}@keyframes s-5tQsHPDWUqIr-fade{from{opacity:0}to{opacity:1}}button.s-5tQsHPDWUqIr.s-5tQsHPDWUqIr{display:block}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  $$result.css.add(css);
  return `  <dialog class="bg-dark-gray text-white w-5/6 s-5tQsHPDWUqIr"${add_attribute("this", dialog, 0)}> <div class="s-5tQsHPDWUqIr"><div class="w-full flex justify-between items-center mb-5"><div class="w-8 h-8"></div> ${slots.header ? slots.header({}) : ``}  <button autofocus class="s-5tQsHPDWUqIr"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8 text-gray-500"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> ${slots.default ? slots.default({}) : ``}</div> </dialog>`;
});
export {
  Modal as M
};
