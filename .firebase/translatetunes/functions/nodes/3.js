

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(unprotected)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.89cf6348.js","_app/immutable/chunks/scheduler.635b56cd.js","_app/immutable/chunks/index.1e81eea3.js"];
export const stylesheets = ["_app/immutable/assets/app.7fc1f8b7.css"];
export const fonts = [];
