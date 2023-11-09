import { v as validate_store, s as subscribe } from "../../../../chunks/utils.js";
import { c as create_ssr_component, v as validate_component, e as escape, b as add_attribute, a as each } from "../../../../chunks/ssr.js";
import { N as Navigation } from "../../../../chunks/Navigation.js";
import { I as Icon } from "../../../../chunks/Icon.js";
import { a as user, u as userData } from "../../../../chunks/firebase.js";
import "firebase/auth";
import { M as Modal } from "../../../../chunks/Modal.js";
import "firebase/firestore";
import { w as writable } from "../../../../chunks/index.js";
import "translate";
import "../../../../chunks/authStore.js";
const spotifyUser = writable();
const ProfileStatistic = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { statistic = 0 } = $$props;
  let { title } = $$props;
  let { color } = $$props;
  let { isLoading } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.statistic === void 0 && $$bindings.statistic && statistic !== void 0)
    $$bindings.statistic(statistic);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  return `<div class="flex gap-2 items-start bg-dark-gray border-2 border-b-4 border-gray-700 rounded-lg w-1/2 py-2 px-5">${isLoading ? `<div class="w-24 h-4 bg-gray-500 rounded-full animate-pulse"></div> <div class="flex-1 animate-pulse"><div class="w-16 h-4 bg-gray-500 mb-1 rounded-full"></div> <div class="w-32 h-4 bg-gray-500 rounded-full"></div></div>` : `${validate_component(Icon, "Icon").$$render($$result, { icon, class: color, height: "24" }, {}, {})} <span><p class="font-semibold tracking-wider text-lg">${escape(statistic)}</p> <p class="-mt-1 text-gray-500 font-medium text-sm">${escape(title)}</p></span>`}</div>`;
});
const UserProfile = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { username } = $$props;
  let { email } = $$props;
  let { followers = [] } = $$props;
  let { following = [] } = $$props;
  let { creationDate } = $$props;
  let { pictureURL } = $$props;
  let { isLoading } = $$props;
  let { stranger } = $$props;
  let showModal = false;
  let modalMode;
  let data = [];
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.followers === void 0 && $$bindings.followers && followers !== void 0)
    $$bindings.followers(followers);
  if ($$props.following === void 0 && $$bindings.following && following !== void 0)
    $$bindings.following(following);
  if ($$props.creationDate === void 0 && $$bindings.creationDate && creationDate !== void 0)
    $$bindings.creationDate(creationDate);
  if ($$props.pictureURL === void 0 && $$bindings.pictureURL && pictureURL !== void 0)
    $$bindings.pictureURL(pictureURL);
  if ($$props.isLoading === void 0 && $$bindings.isLoading && isLoading !== void 0)
    $$bindings.isLoading(isLoading);
  if ($$props.stranger === void 0 && $$bindings.stranger && stranger !== void 0)
    $$bindings.stranger(stranger);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = ` ${isLoading ? `<div class="animate-pulse flex justify-between items-center"><div class=""><div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div> <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div></div> <div class="h-32 w-32 rounded-full bg-gray-300 dark:bg-gray-700"></div></div>` : `<div class="border-b border-gray-700 pb-10"><div class="flex justify-between items-center"><div class=""><p class="text-3xl font-bold">${escape(username)}</p> <p class="text-gray-400">${escape(email)}</p> <div class="flex gap-5 my-5"><div class="flex flex-col"><p class="text-xl font-bold">${escape(followers?.length || 0)}</p> <p class="text-gray-400" data-svelte-h="svelte-1yib3xq">followers</p></div> <div class="flex flex-col"><p class="text-xl font-bold">${escape(following?.length || 0)}</p> <p class="text-gray-400" data-svelte-h="svelte-44nyci">following</p></div></div> <div class="flex gap-2 items-center">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "bi:clock-fill",
        class: "text-gray-500",
        height: "16"
      },
      {},
      {}
    )} <p class="text-gray-400 capitalize">Joined ${escape(new Date(creationDate).toLocaleDateString("en", { year: "numeric", month: "long" }))}</p></div></div> <img${add_attribute("src", pictureURL, 0)} class="h-32 w-32 rounded-full" alt=""></div> <div>${stranger ? `<button class="bg-blue-400 text-white font-semibold py-2 px-4 mt-10 w-full rounded-md shadow-mdtransition duration-300 ease-in-out border-b-4 border-blue-500" data-svelte-h="svelte-103nn80">Follow</button>` : `<div class="flex gap-2"><button class="bg-blue-400 text-white font-semibold py-2 px-4 mt-10 w-full rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-blue-500" data-svelte-h="svelte-324rxy">Add friends</button> <button class="bg-blue-400 flex justify-center text-white font-semibold py-2 px-4 mt-10 w-1/3 rounded-md shadow-md transition duration-300 ease-in-out border-b-4 border-blue-500">${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "bi:box-arrow-in-left",
        class: "text-white",
        height: 32
      },
      {},
      {}
    )}</button></div>`}</div></div>`} ${validate_component(Modal, "Modal").$$render(
      $$result,
      { showModal },
      {
        showModal: ($$value) => {
          showModal = $$value;
          $$settled = false;
        }
      },
      {
        header: () => {
          return `<h2 slot="header"><p class="capitalize text-xl font-bold">${escape(modalMode)}</p></h2>`;
        },
        default: () => {
          return `${each(data, (follower) => {
            return `<div class="flex px-1 py-2 items-center w-full border-b border-gray-800 rounded mb-2 pb-2"><div class="flex items-center gap-3"><img${add_attribute("src", follower?.avatar, 0)} class="rounded-full h-12" alt=""> <div class="flex flex-col"><p class="font-semibold">${escape(follower.username)}</p> <div class="flex gap-2">${validate_component(Icon, "Icon").$$render(
              $$result,
              {
                icon: "fluent-emoji:gem-stone",
                class: "text-blue-400",
                height: "24"
              },
              {},
              {}
            )} <p class="font-semibold">${escape(follower.score)}</p></div> </div></div> </div>`;
          })}`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Challenge = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let completionPercentage;
  let { title } = $$props;
  let { description } = $$props;
  let { target } = $$props;
  let { progress } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  completionPercentage = parseInt(progress) / parseInt(target) * 100;
  return `<div class="bg-dark-gray font-semibold my-3 py-2 px-4 w-full rounded-md border-b-4 border-2 border-gray-700"><h3 class="${"text-xl font-semibold " + escape(completionPercentage === 100 && "text-yellow-400", true)}">${escape(title)}</h3> <h3 class="font-medium">${escape(description)}</h3> ${completionPercentage !== 100 ? `<div class="flex items-center justify-between mt-3"><div class="text-white mb-1"><span>${escape(progress)}</span> of <span>${escape(target)}</span></div></div> <div class="overflow-hidden h-4 mb-4 text-xs flex rounded-lg bg-gray-600"><div style="${"width: " + escape(completionPercentage, true) + "%;"}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 rounded-lg"></div></div>` : `<p class="font-light mt-2">You have reached ${escape(target)}!</p>`}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  let $spotifyUser, $$unsubscribe_spotifyUser;
  let $userData, $$unsubscribe_userData;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  validate_store(spotifyUser, "spotifyUser");
  $$unsubscribe_spotifyUser = subscribe(spotifyUser, (value) => $spotifyUser = value);
  validate_store(userData, "userData");
  $$unsubscribe_userData = subscribe(userData, (value) => $userData = value);
  let isLoading = true;
  let totalStars = 0;
  let playedSongs = 0;
  $$unsubscribe_user();
  $$unsubscribe_spotifyUser();
  $$unsubscribe_userData();
  return `<div class="mb-16 p-5">${validate_component(UserProfile, "UserProfile").$$render(
    $$result,
    {
      username: $spotifyUser?.display_name,
      email: $spotifyUser?.email,
      creationDate: $user?.metadata.creationTime,
      pictureURL: $spotifyUser?.images[1].url,
      stranger: false,
      followers: $userData?.followers,
      following: $userData?.following,
      isLoading
    },
    {},
    {}
  )} <div class="flex gap-3 my-8">${validate_component(ProfileStatistic, "ProfileStatistic").$$render(
    $$result,
    {
      icon: "bi:star-fill",
      color: "text-yellow-400",
      statistic: totalStars,
      title: "Stars Acquired",
      isLoading
    },
    {},
    {}
  )} ${validate_component(ProfileStatistic, "ProfileStatistic").$$render(
    $$result,
    {
      icon: "fluent-emoji:gem-stone",
      color: "text-blue-400",
      statistic: $userData?.score,
      title: "Diamonds earned",
      isLoading
    },
    {},
    {}
  )}</div> ${validate_component(Challenge, "Challenge").$$render(
    $$result,
    {
      title: "Star Collector",
      description: "Acquire 50 stars",
      target: "50 stars",
      progress: totalStars
    },
    {},
    {}
  )} ${validate_component(Challenge, "Challenge").$$render(
    $$result,
    {
      title: "Diamond Specialist",
      description: "Collect 1000 diamonds",
      target: "1000 diamonds",
      progress: $userData?.score
    },
    {},
    {}
  )} ${validate_component(Challenge, "Challenge").$$render(
    $$result,
    {
      title: "Music Lover",
      description: "Play 50 songs",
      target: "50 songs",
      progress: playedSongs
    },
    {},
    {}
  )}</div> ${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
