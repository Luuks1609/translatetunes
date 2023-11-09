

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(protected)/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.29315282.js","_app/immutable/chunks/scheduler.635b56cd.js","_app/immutable/chunks/TrackSearchResult.6780c042.js","_app/immutable/chunks/index.1e81eea3.js","_app/immutable/chunks/Icon.20649865.js","_app/immutable/chunks/Modal.6c353d5e.js","_app/immutable/chunks/firebase.a6fa023d.js","_app/immutable/chunks/index.5c011611.js","_app/immutable/chunks/ArtistSearchResult.2aadac5b.js","_app/immutable/chunks/utils.808755f5.js","_app/immutable/chunks/index.5a91c927.js","_app/immutable/chunks/Navigation.acb20dfd.js","_app/immutable/chunks/stores.b4383a79.js","_app/immutable/chunks/singletons.c08ed1d2.js","_app/immutable/chunks/spotifyStore.cc39e0ec.js"];
export const stylesheets = ["_app/immutable/assets/Modal.af4ae337.css"];
export const fonts = [];
