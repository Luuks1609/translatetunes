import * as server from '../entries/pages/(protected)/artist/_id_/_page.server.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(protected)/artist/_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/(protected)/artist/[id]/+page.server.js";
export const imports = ["_app/immutable/nodes/7.f598bcf8.js","_app/immutable/chunks/scheduler.635b56cd.js","_app/immutable/chunks/TrackSearchResult.6780c042.js","_app/immutable/chunks/index.1e81eea3.js","_app/immutable/chunks/Icon.20649865.js","_app/immutable/chunks/Modal.6c353d5e.js","_app/immutable/chunks/firebase.a6fa023d.js","_app/immutable/chunks/index.5c011611.js","_app/immutable/chunks/globals.7f7f1b26.js","_app/immutable/chunks/AlbumSearchResult.1e4e593c.js","_app/immutable/chunks/ArtistSearchResult.2aadac5b.js","_app/immutable/chunks/utils.808755f5.js"];
export const stylesheets = ["_app/immutable/assets/Modal.af4ae337.css"];
export const fonts = [];
