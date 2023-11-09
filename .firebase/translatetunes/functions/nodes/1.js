

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.dd21ed8e.js","_app/immutable/chunks/scheduler.635b56cd.js","_app/immutable/chunks/index.1e81eea3.js","_app/immutable/chunks/stores.b4383a79.js","_app/immutable/chunks/singletons.c08ed1d2.js","_app/immutable/chunks/index.5c011611.js"];
export const stylesheets = [];
export const fonts = [];
