import{s as rt,a as U,o as q,b as st,t as W,c as ct,e as d,d as at,f as I,g as ut,h as lt,i as ft,j as D,k as _t,l as mt,m as dt}from"../chunks/scheduler.635b56cd.js";import{S as pt,i as ht,d as P,v as wt,a as y,t as p,c as L,b as h,e as g,f as b,g as B,s as gt,h as O,j as v,k as T,m as k,l as E}from"../chunks/index.1e81eea3.js";const bt=!0,vt="modulepreload",kt=function(c,t){return new URL(c,t).href},z={},w=function(t,n,u){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(l=>{if(l=kt(l,u),l in z)return;z[l]=!0;const f=l.endsWith(".css"),r=f?'[rel="stylesheet"]':"";if(!!u)for(let i=s.length-1;i>=0;i--){const m=s[i];if(m.href===l&&(!f||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${r}`))return;const o=document.createElement("link");if(o.rel=f?"stylesheet":vt,f||(o.as="script",o.crossOrigin=""),o.href=l,document.head.appendChild(o),f)return new Promise((i,m)=>{o.addEventListener("load",i),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t()).catch(l=>{const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=l,window.dispatchEvent(f),!f.defaultPrevented)throw l})},Ot={},Et=bt,Rt=".svelte-kit/generated/root.svelte";function F(c){let t,n,u;var s=c[1][0];function l(r,e){return{props:{data:r[3],form:r[2]},$$inline:!0}}s&&(t=b(s,l(c)),c[18](t));const f={c:function(){t&&v(t.$$.fragment),n=d()},l:function(e){t&&T(t.$$.fragment,e),n=d()},m:function(e,o){t&&k(t,e,o),y(e,n,o),u=!0},p:function(e,o){if(o&2&&s!==(s=e[1][0])){if(t){O();const i=t;p(i.$$.fragment,1,0,()=>{E(i,1)}),L()}s?(t=b(s,l(e)),e[18](t),v(t.$$.fragment),h(t.$$.fragment,1),k(t,n.parentNode,n)):t=null}else if(s){const i={};o&8&&(i.data=e[3]),o&4&&(i.form=e[2]),t.$set(i)}},i:function(e){u||(t&&h(t.$$.fragment,e),u=!0)},o:function(e){t&&p(t.$$.fragment,e),u=!1},d:function(e){e&&g(n),c[18](null),t&&E(t,e)}};return P("SvelteRegisterBlock",{block:f,id:F.name,type:"else",source:"(60:0) {:else}",ctx:c}),f}function G(c){let t,n,u;var s=c[1][0];function l(r,e){return{props:{data:r[3],$$slots:{default:[Y]},$$scope:{ctx:r}},$$inline:!0}}s&&(t=b(s,l(c)),c[17](t));const f={c:function(){t&&v(t.$$.fragment),n=d()},l:function(e){t&&T(t.$$.fragment,e),n=d()},m:function(e,o){t&&k(t,e,o),y(e,n,o),u=!0},p:function(e,o){if(o&2&&s!==(s=e[1][0])){if(t){O();const i=t;p(i.$$.fragment,1,0,()=>{E(i,1)}),L()}s?(t=b(s,l(e)),e[17](t),v(t.$$.fragment),h(t.$$.fragment,1),k(t,n.parentNode,n)):t=null}else if(s){const i={};o&8&&(i.data=e[3]),o&524407&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)}},i:function(e){u||(t&&h(t.$$.fragment,e),u=!0)},o:function(e){t&&p(t.$$.fragment,e),u=!1},d:function(e){e&&g(n),c[17](null),t&&E(t,e)}};return P("SvelteRegisterBlock",{block:f,id:G.name,type:"if",source:"(44:0) {#if constructors[1]}",ctx:c}),f}function H(c){let t,n,u;var s=c[1][1];function l(r,e){return{props:{data:r[4],form:r[2]},$$inline:!0}}s&&(t=b(s,l(c)),c[16](t));const f={c:function(){t&&v(t.$$.fragment),n=d()},l:function(e){t&&T(t.$$.fragment,e),n=d()},m:function(e,o){t&&k(t,e,o),y(e,n,o),u=!0},p:function(e,o){if(o&2&&s!==(s=e[1][1])){if(t){O();const i=t;p(i.$$.fragment,1,0,()=>{E(i,1)}),L()}s?(t=b(s,l(e)),e[16](t),v(t.$$.fragment),h(t.$$.fragment,1),k(t,n.parentNode,n)):t=null}else if(s){const i={};o&16&&(i.data=e[4]),o&4&&(i.form=e[2]),t.$set(i)}},i:function(e){u||(t&&h(t.$$.fragment,e),u=!0)},o:function(e){t&&p(t.$$.fragment,e),u=!1},d:function(e){e&&g(n),c[16](null),t&&E(t,e)}};return P("SvelteRegisterBlock",{block:f,id:H.name,type:"else",source:"(56:2) {:else}",ctx:c}),f}function J(c){let t,n,u;var s=c[1][1];function l(r,e){return{props:{data:r[4],$$slots:{default:[X]},$$scope:{ctx:r}},$$inline:!0}}s&&(t=b(s,l(c)),c[15](t));const f={c:function(){t&&v(t.$$.fragment),n=d()},l:function(e){t&&T(t.$$.fragment,e),n=d()},m:function(e,o){t&&k(t,e,o),y(e,n,o),u=!0},p:function(e,o){if(o&2&&s!==(s=e[1][1])){if(t){O();const i=t;p(i.$$.fragment,1,0,()=>{E(i,1)}),L()}s?(t=b(s,l(e)),e[15](t),v(t.$$.fragment),h(t.$$.fragment,1),k(t,n.parentNode,n)):t=null}else if(s){const i={};o&16&&(i.data=e[4]),o&524391&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)}},i:function(e){u||(t&&h(t.$$.fragment,e),u=!0)},o:function(e){t&&p(t.$$.fragment,e),u=!1},d:function(e){e&&g(n),c[15](null),t&&E(t,e)}};return P("SvelteRegisterBlock",{block:f,id:J.name,type:"if",source:"(46:2) {#if constructors[2]}",ctx:c}),f}function K(c){let t,n,u;var s=c[1][2];function l(r,e){return{props:{data:r[5],form:r[2]},$$inline:!0}}s&&(t=b(s,l(c)),c[14](t));const f={c:function(){t&&v(t.$$.fragment),n=d()},l:function(e){t&&T(t.$$.fragment,e),n=d()},m:function(e,o){t&&k(t,e,o),y(e,n,o),u=!0},p:function(e,o){if(o&2&&s!==(s=e[1][2])){if(t){O();const i=t;p(i.$$.fragment,1,0,()=>{E(i,1)}),L()}s?(t=b(s,l(e)),e[14](t),v(t.$$.fragment),h(t.$$.fragment,1),k(t,n.parentNode,n)):t=null}else if(s){const i={};o&32&&(i.data=e[5]),o&4&&(i.form=e[2]),t.$set(i)}},i:function(e){u||(t&&h(t.$$.fragment,e),u=!0)},o:function(e){t&&p(t.$$.fragment,e),u=!1},d:function(e){e&&g(n),c[14](null),t&&E(t,e)}};return P("SvelteRegisterBlock",{block:f,id:K.name,type:"else",source:"(52:4) {:else}",ctx:c}),f}function M(c){let t,n,u;var s=c[1][2];function l(r,e){return{props:{data:r[5],$$slots:{default:[Q]},$$scope:{ctx:r}},$$inline:!0}}s&&(t=b(s,l(c)),c[13](t));const f={c:function(){t&&v(t.$$.fragment),n=d()},l:function(e){t&&T(t.$$.fragment,e),n=d()},m:function(e,o){t&&k(t,e,o),y(e,n,o),u=!0},p:function(e,o){if(o&2&&s!==(s=e[1][2])){if(t){O();const i=t;p(i.$$.fragment,1,0,()=>{E(i,1)}),L()}s?(t=b(s,l(e)),e[13](t),v(t.$$.fragment),h(t.$$.fragment,1),k(t,n.parentNode,n)):t=null}else if(s){const i={};o&32&&(i.data=e[5]),o&524359&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)}},i:function(e){u||(t&&h(t.$$.fragment,e),u=!0)},o:function(e){t&&p(t.$$.fragment,e),u=!1},d:function(e){e&&g(n),c[13](null),t&&E(t,e)}};return P("SvelteRegisterBlock",{block:f,id:M.name,type:"if",source:"(48:4) {#if constructors[3]}",ctx:c}),f}function Q(c){let t,n,u;var s=c[1][3];function l(r,e){return{props:{data:r[6],form:r[2]},$$inline:!0}}s&&(t=b(s,l(c)),c[12](t));const f={c:function(){t&&v(t.$$.fragment),n=d()},l:function(e){t&&T(t.$$.fragment,e),n=d()},m:function(e,o){t&&k(t,e,o),y(e,n,o),u=!0},p:function(e,o){if(o&2&&s!==(s=e[1][3])){if(t){O();const i=t;p(i.$$.fragment,1,0,()=>{E(i,1)}),L()}s?(t=b(s,l(e)),e[12](t),v(t.$$.fragment),h(t.$$.fragment,1),k(t,n.parentNode,n)):t=null}else if(s){const i={};o&64&&(i.data=e[6]),o&4&&(i.form=e[2]),t.$set(i)}},i:function(e){u||(t&&h(t.$$.fragment,e),u=!0)},o:function(e){t&&p(t.$$.fragment,e),u=!1},d:function(e){e&&g(n),c[12](null),t&&E(t,e)}};return P("SvelteRegisterBlock",{block:f,id:Q.name,type:"slot",source:"(49:5) <svelte:component this={constructors[2]} bind:this={components[2]} data={data_2}>",ctx:c}),f}function X(c){let t,n,u,s;const l=[M,K],f=[];function r(o,i){return o[1][3]?0:1}t=r(c),n=f[t]=l[t](c);const e={c:function(){n.c(),u=d()},l:function(i){n.l(i),u=d()},m:function(i,m){f[t].m(i,m),y(i,u,m),s=!0},p:function(i,m){let _=t;t=r(i),t===_?f[t].p(i,m):(O(),p(f[_],1,1,()=>{f[_]=null}),L(),n=f[t],n?n.p(i,m):(n=f[t]=l[t](i),n.c()),h(n,1),n.m(u.parentNode,u))},i:function(i){s||(h(n),s=!0)},o:function(i){p(n),s=!1},d:function(i){i&&g(u),f[t].d(i)}};return P("SvelteRegisterBlock",{block:e,id:X.name,type:"slot",source:"(47:3) <svelte:component this={constructors[1]} bind:this={components[1]} data={data_1}>",ctx:c}),e}function Y(c){let t,n,u,s;const l=[J,H],f=[];function r(o,i){return o[1][2]?0:1}t=r(c),n=f[t]=l[t](c);const e={c:function(){n.c(),u=d()},l:function(i){n.l(i),u=d()},m:function(i,m){f[t].m(i,m),y(i,u,m),s=!0},p:function(i,m){let _=t;t=r(i),t===_?f[t].p(i,m):(O(),p(f[_],1,1,()=>{f[_]=null}),L(),n=f[t],n?n.p(i,m):(n=f[t]=l[t](i),n.c()),h(n,1),n.m(u.parentNode,u))},i:function(i){s||(h(n),s=!0)},o:function(i){p(n),s=!1},d:function(i){i&&g(u),f[t].d(i)}};return P("SvelteRegisterBlock",{block:e,id:Y.name,type:"slot",source:"(45:1) <svelte:component this={constructors[0]} bind:this={components[0]} data={data_0}>",ctx:c}),e}function N(c){let t,n=c[8]&&j(c);const u={c:function(){t=ut("div"),n&&n.c(),this.h()},l:function(l){t=lt(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var f=ft(t);n&&n.l(f),f.forEach(g),this.h()},h:function(){B(t,"id","svelte-announcer"),B(t,"aria-live","assertive"),B(t,"aria-atomic","true"),D(t,"position","absolute"),D(t,"left","0"),D(t,"top","0"),D(t,"clip","rect(0 0 0 0)"),D(t,"clip-path","inset(50%)"),D(t,"overflow","hidden"),D(t,"white-space","nowrap"),D(t,"width","1px"),D(t,"height","1px"),_t(t,Rt,64,1,1707)},m:function(l,f){y(l,t,f),n&&n.m(t,null)},p:function(l,f){l[8]?n?n.p(l,f):(n=j(l),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d:function(l){l&&g(t),n&&n.d()}};return P("SvelteRegisterBlock",{block:u,id:N.name,type:"if",source:"(64:0) {#if mounted}",ctx:c}),u}function j(c){let t;const n={c:function(){t=mt(c[9])},l:function(s){t=dt(s,c[9])},m:function(s,l){y(s,t,l)},p:function(s,l){l&512&&gt(t,s[9])},d:function(s){s&&g(t)}};return P("SvelteRegisterBlock",{block:n,id:j.name,type:"if",source:"(66:2) {#if navigated}",ctx:c}),n}function C(c){let t,n,u,s,l;const f=[G,F],r=[];function e(m,_){return m[1][1]?0:1}t=e(c),n=r[t]=f[t](c);let o=c[7]&&N(c);const i={c:function(){n.c(),u=ct(),o&&o.c(),s=d()},l:function(_){n.l(_),u=at(_),o&&o.l(_),s=d()},m:function(_,R){r[t].m(_,R),y(_,u,R),o&&o.m(_,R),y(_,s,R),l=!0},p:function(_,[R]){let S=t;t=e(_),t===S?r[t].p(_,R):(O(),p(r[S],1,1,()=>{r[S]=null}),L(),n=r[t],n?n.p(_,R):(n=r[t]=f[t](_),n.c()),h(n,1),n.m(u.parentNode,u)),_[7]?o?o.p(_,R):(o=N(_),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i:function(_){l||(h(n),l=!0)},o:function(_){p(n),l=!1},d:function(_){_&&(g(u),g(s)),r[t].d(_),o&&o.d(_)}};return P("SvelteRegisterBlock",{block:i,id:C.name,type:"component",source:"",ctx:c}),i}function yt(c,t,n){let{$$slots:u={},$$scope:s}=t;wt("Root",u,[]);let{stores:l}=t,{page:f}=t,{constructors:r}=t,{components:e=[]}=t,{form:o}=t,{data_0:i=null}=t,{data_1:m=null}=t,{data_2:_=null}=t,{data_3:R=null}=t;U(l.page.notify);let S=!1,V=!1,A=null;q(()=>{const a=l.page.subscribe(()=>{S&&(n(8,V=!0),W().then(()=>{n(9,A=document.title||"untitled page")}))});return n(7,S=!0),a}),c.$$.on_mount.push(function(){l===void 0&&!("stores"in t||c.$$.bound[c.$$.props.stores])&&console.warn("<Root> was created without expected prop 'stores'"),f===void 0&&!("page"in t||c.$$.bound[c.$$.props.page])&&console.warn("<Root> was created without expected prop 'page'"),r===void 0&&!("constructors"in t||c.$$.bound[c.$$.props.constructors])&&console.warn("<Root> was created without expected prop 'constructors'"),o===void 0&&!("form"in t||c.$$.bound[c.$$.props.form])&&console.warn("<Root> was created without expected prop 'form'")});const Z=["stores","page","constructors","components","form","data_0","data_1","data_2","data_3"];Object.keys(t).forEach(a=>{!~Z.indexOf(a)&&a.slice(0,2)!=="$$"&&a!=="slot"&&console.warn(`<Root> was created with unknown prop '${a}'`)});function $(a){I[a?"unshift":"push"](()=>{e[3]=a,n(0,e)})}function x(a){I[a?"unshift":"push"](()=>{e[2]=a,n(0,e)})}function tt(a){I[a?"unshift":"push"](()=>{e[2]=a,n(0,e)})}function et(a){I[a?"unshift":"push"](()=>{e[1]=a,n(0,e)})}function nt(a){I[a?"unshift":"push"](()=>{e[1]=a,n(0,e)})}function ot(a){I[a?"unshift":"push"](()=>{e[0]=a,n(0,e)})}function it(a){I[a?"unshift":"push"](()=>{e[0]=a,n(0,e)})}return c.$$set=a=>{"stores"in a&&n(10,l=a.stores),"page"in a&&n(11,f=a.page),"constructors"in a&&n(1,r=a.constructors),"components"in a&&n(0,e=a.components),"form"in a&&n(2,o=a.form),"data_0"in a&&n(3,i=a.data_0),"data_1"in a&&n(4,m=a.data_1),"data_2"in a&&n(5,_=a.data_2),"data_3"in a&&n(6,R=a.data_3)},c.$capture_state=()=>({setContext:st,afterUpdate:U,onMount:q,tick:W,browser:Et,stores:l,page:f,constructors:r,components:e,form:o,data_0:i,data_1:m,data_2:_,data_3:R,mounted:S,navigated:V,title:A}),c.$inject_state=a=>{"stores"in a&&n(10,l=a.stores),"page"in a&&n(11,f=a.page),"constructors"in a&&n(1,r=a.constructors),"components"in a&&n(0,e=a.components),"form"in a&&n(2,o=a.form),"data_0"in a&&n(3,i=a.data_0),"data_1"in a&&n(4,m=a.data_1),"data_2"in a&&n(5,_=a.data_2),"data_3"in a&&n(6,R=a.data_3),"mounted"in a&&n(7,S=a.mounted),"navigated"in a&&n(8,V=a.navigated),"title"in a&&n(9,A=a.title)},t&&"$$inject"in t&&c.$inject_state(t.$$inject),c.$$.update=()=>{c.$$.dirty&3072&&l.page.set(f)},[e,r,o,i,m,_,R,S,V,A,l,f,$,x,tt,et,nt,ot,it]}class St extends pt{constructor(t){super(t),ht(this,t,yt,C,rt,{stores:10,page:11,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5,data_3:6}),P("SvelteRegisterComponent",{component:this,tagName:"Root",options:t,id:C.name})}get stores(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stores(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get page(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set page(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get constructors(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set constructors(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get components(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set components(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get form(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set form(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_0(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_0(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_1(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_1(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_2(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_2(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get data_3(){throw new Error("<Root>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data_3(t){throw new Error("<Root>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const Dt=[()=>w(()=>import("../nodes/0.d4f373bd.js"),["../nodes/0.d4f373bd.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js"],import.meta.url),()=>w(()=>import("../nodes/1.dd21ed8e.js"),["../nodes/1.dd21ed8e.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../chunks/stores.b4383a79.js","../chunks/singletons.c08ed1d2.js","../chunks/index.5c011611.js"],import.meta.url),()=>w(()=>import("../nodes/2.35b700c6.js"),["../nodes/2.35b700c6.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../chunks/AuthCheck.937e7621.js","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js","../assets/app.7fc1f8b7.css"],import.meta.url),()=>w(()=>import("../nodes/3.89cf6348.js"),["../nodes/3.89cf6348.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../assets/app.7fc1f8b7.css"],import.meta.url),()=>w(()=>import("../nodes/4.eb303296.js"),["../nodes/4.eb303296.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../chunks/stores.b4383a79.js","../chunks/singletons.c08ed1d2.js","../chunks/index.5c011611.js","../chunks/index.5a91c927.js"],import.meta.url),()=>w(()=>import("../nodes/5.29315282.js"),["../nodes/5.29315282.js","../chunks/scheduler.635b56cd.js","../chunks/TrackSearchResult.6780c042.js","../chunks/index.1e81eea3.js","../chunks/Icon.20649865.js","../chunks/Modal.6c353d5e.js","../assets/Modal.af4ae337.css","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js","../chunks/ArtistSearchResult.2aadac5b.js","../chunks/utils.808755f5.js","../chunks/index.5a91c927.js","../chunks/Navigation.acb20dfd.js","../chunks/stores.b4383a79.js","../chunks/singletons.c08ed1d2.js","../chunks/spotifyStore.cc39e0ec.js"],import.meta.url),()=>w(()=>import("../nodes/6.bf0b9bcf.js"),["../nodes/6.bf0b9bcf.js","../chunks/scheduler.635b56cd.js","../chunks/TrackSearchResult.6780c042.js","../chunks/index.1e81eea3.js","../chunks/Icon.20649865.js","../chunks/Modal.6c353d5e.js","../assets/Modal.af4ae337.css","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js","../chunks/globals.7f7f1b26.js","../chunks/utils.808755f5.js"],import.meta.url),()=>w(()=>import("../nodes/7.f598bcf8.js"),["../nodes/7.f598bcf8.js","../chunks/scheduler.635b56cd.js","../chunks/TrackSearchResult.6780c042.js","../chunks/index.1e81eea3.js","../chunks/Icon.20649865.js","../chunks/Modal.6c353d5e.js","../assets/Modal.af4ae337.css","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js","../chunks/globals.7f7f1b26.js","../chunks/AlbumSearchResult.1e4e593c.js","../chunks/ArtistSearchResult.2aadac5b.js","../chunks/utils.808755f5.js"],import.meta.url),()=>w(()=>import("../nodes/8.aa37f291.js"),["../nodes/8.aa37f291.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../chunks/globals.7f7f1b26.js","../chunks/Navigation.acb20dfd.js","../chunks/Icon.20649865.js","../chunks/stores.b4383a79.js","../chunks/singletons.c08ed1d2.js","../chunks/index.5c011611.js","../chunks/firebase.a6fa023d.js"],import.meta.url),()=>w(()=>import("../nodes/9.f75bf1dd.js"),["../nodes/9.f75bf1dd.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../chunks/index.5a91c927.js","../chunks/globals.7f7f1b26.js","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js","../chunks/utils.808755f5.js","../assets/9.aaf8cbfb.css"],import.meta.url),()=>w(()=>import("../nodes/10.2d0e2ae1.js"),["../nodes/10.2d0e2ae1.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../chunks/Navigation.acb20dfd.js","../chunks/Icon.20649865.js","../chunks/stores.b4383a79.js","../chunks/singletons.c08ed1d2.js","../chunks/index.5c011611.js","../chunks/firebase.a6fa023d.js","../chunks/spotifyStore.cc39e0ec.js","../chunks/utils.808755f5.js"],import.meta.url),()=>w(()=>import("../nodes/11.f3dca469.js"),["../nodes/11.f3dca469.js","../chunks/scheduler.635b56cd.js","../chunks/TrackSearchResult.6780c042.js","../chunks/index.1e81eea3.js","../chunks/Icon.20649865.js","../chunks/Modal.6c353d5e.js","../assets/Modal.af4ae337.css","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js","../chunks/globals.7f7f1b26.js","../chunks/AlbumSearchResult.1e4e593c.js","../chunks/ArtistSearchResult.2aadac5b.js","../chunks/utils.808755f5.js"],import.meta.url),()=>w(()=>import("../nodes/12.ff0af4f3.js"),["../nodes/12.ff0af4f3.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../chunks/globals.7f7f1b26.js","../chunks/Navigation.acb20dfd.js","../chunks/Icon.20649865.js","../chunks/stores.b4383a79.js","../chunks/singletons.c08ed1d2.js","../chunks/index.5c011611.js","../chunks/firebase.a6fa023d.js","../chunks/Modal.6c353d5e.js","../assets/Modal.af4ae337.css","../chunks/spotifyStore.cc39e0ec.js","../chunks/utils.808755f5.js","../chunks/index.5a91c927.js"],import.meta.url),()=>w(()=>import("../nodes/13.4e4931a3.js"),["../nodes/13.4e4931a3.js","../chunks/scheduler.635b56cd.js","../chunks/globals.7f7f1b26.js","../chunks/index.1e81eea3.js","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js"],import.meta.url),()=>w(()=>import("../nodes/14.d54c87fe.js"),["../nodes/14.d54c87fe.js","../chunks/scheduler.635b56cd.js","../chunks/globals.7f7f1b26.js","../chunks/index.1e81eea3.js","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js"],import.meta.url),()=>w(()=>import("../nodes/15.3ff955ff.js"),["../nodes/15.3ff955ff.js","../chunks/scheduler.635b56cd.js","../chunks/index.1e81eea3.js","../chunks/globals.7f7f1b26.js","../chunks/AuthCheck.937e7621.js","../chunks/firebase.a6fa023d.js","../chunks/index.5c011611.js"],import.meta.url)],It=[],Tt={"/(protected)":[5,[2]],"/(protected)/album/[id]":[-7,[2]],"/(protected)/artist/[id]":[-8,[2]],"/(protected)/friends":[8,[2]],"/(protected)/game/[track_id]/[track]/[difficulty]":[-10,[2]],"/(protected)/leaderboard":[10,[2]],"/(unprotected)/login":[13,[3]],"/(protected)/playlist/[id]":[-12,[2]],"/(protected)/profile":[12,[2]],"/(unprotected)/register":[14,[3,4]],"/(unprotected)/register/username":[15,[3,4]]},Vt={handleError:({error:c})=>{console.error(c)}};export{Tt as dictionary,Vt as hooks,Ot as matchers,Dt as nodes,St as root,It as server_loads};
