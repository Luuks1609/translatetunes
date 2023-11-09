import{s as $e,v as xe,r as Ee,o as ne,g as k,c as S,h as $,i as I,A as De,d as B,k as x,e as z,B as he,w as ve,l as G,m as H,C as oe}from"../chunks/scheduler.635b56cd.js";import{S as Ie,i as je,d as O,v as Ve,j as K,e as h,k as Q,g as _,a as M,n as f,m as T,t as P,c as pe,b as q,l as X,p as W,h as ge,s as ae}from"../chunks/index.1e81eea3.js";import{N as be}from"../chunks/Navigation.acb20dfd.js";import{e as re,a as L,u as Se,c as le,g as se,l as ce,o as ie,q as ue,w as fe}from"../chunks/firebase.a6fa023d.js";import{s as de}from"../chunks/spotifyStore.cc39e0ec.js";import{c as me}from"../chunks/utils.808755f5.js";import{I as Y}from"../chunks/Icon.20649865.js";const E="src/routes/(protected)/leaderboard/+page.svelte";function _e(u,t,a){const s=u.slice();return s[6]=t[a],s[8]=a,s}function Be(u,t,a){const s=u.slice();return s[3]=t[a],s}function ye(u){let t,a,s=W(u[0]),o=[];for(let e=0;e<s.length;e+=1)o[e]=F(_e(u,s,e));const v=e=>P(o[e],1,1,()=>{o[e]=null}),c={c:function(){for(let n=0;n<o.length;n+=1)o[n].c();t=z()},l:function(n){for(let r=0;r<o.length;r+=1)o[r].l(n);t=z()},m:function(n,r){for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(n,r);M(n,t,r),a=!0},p:function(n,r){if(r&3){s=W(n[0]);let l;for(l=0;l<s.length;l+=1){const b=_e(n,s,l);o[l]?(o[l].p(b,r),q(o[l],1)):(o[l]=F(b),o[l].c(),q(o[l],1),o[l].m(t.parentNode,t))}for(ge(),l=s.length;l<o.length;l+=1)v(l);pe()}},i:function(n){if(!a){for(let r=0;r<s.length;r+=1)q(o[r]);a=!0}},o:function(n){o=o.filter(Boolean);for(let r=0;r<o.length;r+=1)P(o[r]);a=!1},d:function(n){n&&h(t),he(o,n)}};return O("SvelteRegisterBlock",{block:c,id:ye.name,type:"else",source:"(56:2) {:else}",ctx:u}),c}function we(u){let t,a,s=W([1,2,3,4,5]),o=[];for(let c=0;c<5;c+=1)o[c]=ke(Be(u,s,c));const v={c:function(){for(let e=0;e<5;e+=1)o[e].c();t=z()},l:function(e){for(let n=0;n<5;n+=1)o[n].l(e);t=z()},m:function(e,n){for(let r=0;r<5;r+=1)o[r]&&o[r].m(e,n);M(e,t,n),a=!0},p:ve,i:function(e){if(!a){for(let n=0;n<5;n+=1)q(o[n]);a=!0}},o:function(e){o=o.filter(Boolean);for(let n=0;n<5;n+=1)P(o[n]);a=!1},d:function(e){e&&h(t),he(o,e)}};return O("SvelteRegisterBlock",{block:v,id:we.name,type:"if",source:"(40:2) {#if data.length === 0}",ctx:u}),v}function F(u){let t,a,s,o=u[8]+1+"",v,c,e,n,r,l,b=u[6].username+"",w,D,p,m,d,i=u[6].score+"",g,j,N,C;m=new Y({props:{icon:"fluent-emoji:gem-stone",class:"text-blue-400",height:"24"},$$inline:!0});const Z={c:function(){t=k("div"),a=k("div"),s=k("p"),v=G(o),c=S(),e=k("img"),r=S(),l=k("p"),w=G(b),D=S(),p=k("div"),K(m.$$.fragment),d=S(),g=G(i),j=S(),this.h()},l:function(y){t=$(y,"DIV",{class:!0});var V=I(t);a=$(V,"DIV",{class:!0});var R=I(a);s=$(R,"P",{class:!0});var ee=I(s);v=H(ee,o),ee.forEach(h),c=B(R),e=$(R,"IMG",{src:!0,class:!0,alt:!0}),r=B(R),l=$(R,"P",{class:!0});var te=I(l);w=H(te,b),te.forEach(h),R.forEach(h),D=B(V),p=$(V,"DIV",{class:!0});var U=I(p);Q(m.$$.fragment,U),d=B(U),g=H(U,i),U.forEach(h),j=B(V),V.forEach(h),this.h()},h:function(){var y;_(s,"class","font-semibold text-lg"),x(s,E,62,6,2071),oe(e.src,n=(y=u[6])==null?void 0:y.avatar)||_(e,"src",n),_(e,"class","rounded-full h-12"),_(e,"alt",""),x(e,E,63,6,2122),_(l,"class","font-semibold text-xl"),x(l,E,64,6,2190),_(a,"class","flex items-center gap-3"),x(a,E,61,5,2027),_(p,"class","flex items-center gap-3 text-xl"),x(p,E,68,5,2277),_(t,"class",N="flex px-5 py-2 justify-between items-center w-full min-h-[3em] border-2 border-gray-700 "+(u[6].uid===u[1].uid&&"border-amber-400")+" rounded mb-2 overflow-hidden"),x(t,E,57,4,1826)},m:function(y,V){M(y,t,V),f(t,a),f(a,s),f(s,v),f(a,c),f(a,e),f(a,r),f(a,l),f(l,w),f(t,D),f(t,p),T(m,p,null),f(p,d),f(p,g),f(t,j),C=!0},p:function(y,V){var R;(!C||V&1&&!oe(e.src,n=(R=y[6])==null?void 0:R.avatar))&&_(e,"src",n),(!C||V&1)&&b!==(b=y[6].username+"")&&ae(w,b),(!C||V&1)&&i!==(i=y[6].score+"")&&ae(g,i),(!C||V&3&&N!==(N="flex px-5 py-2 justify-between items-center w-full min-h-[3em] border-2 border-gray-700 "+(y[6].uid===y[1].uid&&"border-amber-400")+" rounded mb-2 overflow-hidden"))&&_(t,"class",N)},i:function(y){C||(q(m.$$.fragment,y),C=!0)},o:function(y){P(m.$$.fragment,y),C=!1},d:function(y){y&&h(t),X(m)}};return O("SvelteRegisterBlock",{block:Z,id:F.name,type:"each",source:"(57:3) {#each data as player, i}",ctx:u}),Z}function ke(u){let t,a,s,o,v,c,e,n,r,l,b,w;n=new Y({props:{icon:"fluent-emoji:gem-stone",class:"text-blue-400",height:"24"},$$inline:!0});const D={c:function(){t=k("div"),a=k("div"),s=k("div"),o=S(),v=k("div"),c=S(),e=k("div"),K(n.$$.fragment),r=S(),l=k("div"),b=S(),this.h()},l:function(m){t=$(m,"DIV",{class:!0});var d=I(t);a=$(d,"DIV",{class:!0});var i=I(a);s=$(i,"DIV",{class:!0}),I(s).forEach(h),o=B(i),v=$(i,"DIV",{class:!0}),I(v).forEach(h),i.forEach(h),c=B(d),e=$(d,"DIV",{class:!0});var g=I(e);Q(n.$$.fragment,g),r=B(g),l=$(g,"DIV",{class:!0}),I(l).forEach(h),g.forEach(h),b=B(d),d.forEach(h),this.h()},h:function(){_(s,"class","w-10 h-10 bg-gray-500 rounded-full"),x(s,E,46,6,1444),_(v,"class","w-32 h-6 bg-gray-500 rounded-full"),x(v,E,47,6,1501),_(a,"class","flex items-center gap-3"),x(a,E,45,5,1400),_(l,"class","w-12 h-4 bg-gray-500 rounded-full"),x(l,E,51,6,1699),_(e,"class","flex items-center gap-3 text-xl"),x(e,E,49,5,1568),_(t,"class","flex px-5 py-2 justify-between items-center w-full min-h-[3em] border-2 border-gray-700 rounded mb-2 overflow-hidden animate-pulse"),x(t,E,42,4,1240)},m:function(m,d){M(m,t,d),f(t,a),f(a,s),f(a,o),f(a,v),f(t,c),f(t,e),T(n,e,null),f(e,r),f(e,l),f(t,b),w=!0},p:ve,i:function(m){w||(q(n.$$.fragment,m),w=!0)},o:function(m){P(n.$$.fragment,m),w=!1},d:function(m){m&&h(t),X(n)}};return O("SvelteRegisterBlock",{block:D,id:ke.name,type:"each",source:"(42:3) {#each [1, 2, 3, 4, 5] as _}",ctx:u}),D}function J(u){let t,a,s,o,v="Leaderboard",c,e,n,r,l,b;const w=[we,ye],D=[];function p(d,i){return d[0].length===0?0:1}e=p(u),n=D[e]=w[e](u),l=new be({$$inline:!0});const m={c:function(){t=k("div"),a=k("div"),s=k("nav"),o=k("h2"),o.textContent=v,c=S(),n.c(),r=S(),K(l.$$.fragment),this.h()},l:function(i){t=$(i,"DIV",{class:!0});var g=I(t);a=$(g,"DIV",{class:!0});var j=I(a);s=$(j,"NAV",{class:!0});var N=I(s);o=$(N,"H2",{class:!0,"data-svelte-h":!0}),De(o)!=="svelte-1bh8pud"&&(o.textContent=v),N.forEach(h),c=B(j),n.l(j),j.forEach(h),g.forEach(h),r=B(i),Q(l.$$.fragment,i),this.h()},h:function(){_(o,"class","font-bold text-xl capitalize"),x(o,E,36,3,1058),_(s,"class","flex justify-between mb-5"),x(s,E,35,2,1015),_(a,"class","px-5 mt-5"),x(a,E,34,1,989),_(t,"class","mb-20"),x(t,E,33,0,968)},m:function(i,g){M(i,t,g),f(t,a),f(a,s),f(s,o),f(a,c),D[e].m(a,null),M(i,r,g),T(l,i,g),b=!0},p:function(i,[g]){let j=e;e=p(i),e===j?D[e].p(i,g):(ge(),P(D[j],1,1,()=>{D[j]=null}),pe(),n=D[e],n?n.p(i,g):(n=D[e]=w[e](i),n.c()),q(n,1),n.m(a,null))},i:function(i){b||(q(n),q(l.$$.fragment,i),b=!0)},o:function(i){P(n),P(l.$$.fragment,i),b=!1},d:function(i){i&&(h(t),h(r)),D[e].d(),X(l,i)}};return O("SvelteRegisterBlock",{block:m,id:J.name,type:"component",source:"",ctx:u}),m}function Re(u,t,a){let s;xe(L,"user"),Ee(u,L,r=>a(1,s=r));let{$$slots:o={},$$scope:v}=t;Ve("Page",o,[]);let c=[];const e=async()=>{await me("https://api.spotify.com/v1/me/").then(w=>{de.set(w)});const r=le(re,"users"),l=ue(r,ie("score","desc"),fe("score",">",0),ce(10));(await se(l)).forEach(w=>{a(0,c=[...c,{uid:w.id,...w.data()}])})};ne(()=>{e()});const n=[];return Object.keys(t).forEach(r=>{!~n.indexOf(r)&&r.slice(0,2)!=="$$"&&r!=="slot"&&console.warn(`<Page> was created with unknown prop '${r}'`)}),u.$capture_state=()=>({Navigation:be,db:re,user:L,userData:Se,spotifyUser:de,callWithRetry:me,Icon:Y,collection:le,getDocs:se,limit:ce,orderBy:ie,query:ue,where:fe,onMount:ne,data:c,fetchUsers:e,$user:s}),u.$inject_state=r=>{"data"in r&&a(0,c=r.data)},t&&"$$inject"in t&&u.$inject_state(t.$$inject),[c,s]}class Ue extends Ie{constructor(t){super(t),je(this,t,Re,J,$e,{}),O("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:J.name})}}export{Ue as component};
