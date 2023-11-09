import * as server from '../entries/pages/(protected)/game/_track_id_/_track_/_difficulty_/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(protected)/game/_track_id_/_track_/_difficulty_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(protected)/game/[track_id]/[track]/[difficulty]/+page.server.js";
export const imports = ["_app/immutable/nodes/9.f75bf1dd.js","_app/immutable/chunks/scheduler.635b56cd.js","_app/immutable/chunks/index.1e81eea3.js","_app/immutable/chunks/index.5a91c927.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/firebase.a6fa023d.js","_app/immutable/chunks/index.5c011611.js","_app/immutable/chunks/utils.808755f5.js"];
export const stylesheets = ["_app/immutable/assets/9.aaf8cbfb.css"];
export const fonts = [];
