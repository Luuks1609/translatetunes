

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(protected)/leaderboard/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.2d0e2ae1.js","_app/immutable/chunks/scheduler.635b56cd.js","_app/immutable/chunks/index.1e81eea3.js","_app/immutable/chunks/Navigation.acb20dfd.js","_app/immutable/chunks/Icon.20649865.js","_app/immutable/chunks/stores.b4383a79.js","_app/immutable/chunks/singletons.c08ed1d2.js","_app/immutable/chunks/index.5c011611.js","_app/immutable/chunks/firebase.a6fa023d.js","_app/immutable/chunks/spotifyStore.cc39e0ec.js","_app/immutable/chunks/utils.808755f5.js"];
export const stylesheets = [];
export const fonts = [];
