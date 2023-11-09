

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/(protected)/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.35b700c6.js","_app/immutable/chunks/scheduler.635b56cd.js","_app/immutable/chunks/index.1e81eea3.js","_app/immutable/chunks/AuthCheck.937e7621.js","_app/immutable/chunks/firebase.a6fa023d.js","_app/immutable/chunks/index.5c011611.js"];
export const stylesheets = ["_app/immutable/assets/app.7fc1f8b7.css"];
export const fonts = [];
