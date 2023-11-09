import { B as BROWSER } from "./dev-ssr.js";
import { w as writable } from "./index.js";
const browser = BROWSER;
const accessToken = writable("");
accessToken.subscribe((value) => browser);
const refreshToken = writable("");
refreshToken.subscribe((value) => browser);
export {
  accessToken as a,
  refreshToken as r
};
