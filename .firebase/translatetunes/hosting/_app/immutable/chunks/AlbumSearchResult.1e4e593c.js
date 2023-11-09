import{s as Z,g as b,l as j,c as F,e as L,h as g,i as S,m as P,d as O,k as w,w as H,A as $,B as ee,C as Q}from"./scheduler.635b56cd.js";import{S as te,i as se,d as C,v as le,e as m,g as f,a as k,n as d,s as Y,p as T}from"./index.1e81eea3.js";const y="src/lib/components/AlbumSearchResult.svelte";function U(l,e,n){const s=l.slice();return s[2]=e[n],s}function W(l){let e,n="No albums found.";const s={c:function(){e=b("p"),e.textContent=n,this.h()},l:function(r){e=g(r,"P",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-2hm59j"&&(e.textContent=n),this.h()},h:function(){f(e,"class","text-center text-gray-400"),w(e,y,27,1,826)},m:function(r,c){k(r,e,c)},p:H,d:function(r){r&&m(e)}};return C("SvelteRegisterBlock",{block:s,id:W.name,type:"else",source:"(27:0) {:else}",ctx:l}),s}function X(l){let e,n=T(l[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=M(U(l,n,r));const i={c:function(){e=b("div");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l:function(c){e=g(c,"DIV",{class:!0});var a=S(e);for(let t=0;t<s.length;t+=1)s[t].l(a);a.forEach(m),this.h()},h:function(){f(e,"class","grid grid-cols-2 gap-4"),w(e,y,8,1,187)},m:function(c,a){k(c,e,a);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p:function(c,a){if(a&1){n=T(c[0]);let t;for(t=0;t<n.length;t+=1){const u=U(c,n,t);s[t]?s[t].p(u,a):(s[t]=M(u),s[t].c(),s[t].m(e,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=n.length}},d:function(c){c&&m(e),ee(s,c)}};return C("SvelteRegisterBlock",{block:i,id:X.name,type:"if",source:"(8:0) {#if results && results.length > 1}",ctx:l}),i}function M(l){let e,n,s,i,r,c,a,t,u=l[2].name+"",o,h,v,R=new Date(l[2].release_date).getFullYear()+"",D,z,A=l[2].album_group+"",B,G,I;const J={c:function(){e=b("a"),n=b("div"),s=b("img"),c=F(),a=b("div"),t=b("p"),o=j(u),h=F(),v=b("p"),D=j(R),z=j(" • "),B=j(A),G=F(),this.h()},l:function(_){e=g(_,"A",{href:!0});var p=S(e);n=g(p,"DIV",{class:!0});var N=S(n);s=g(N,"IMG",{class:!0,src:!0,alt:!0}),c=O(N),a=g(N,"DIV",{class:!0});var V=S(a);t=g(V,"P",{class:!0});var K=S(t);o=P(K,u),K.forEach(m),h=O(V),v=g(V,"P",{class:!0});var q=S(v);D=P(q,R),z=P(q," • "),B=P(q,A),q.forEach(m),V.forEach(m),N.forEach(m),G=O(p),p.forEach(m),this.h()},h:function(){f(s,"class","h-auto w-full"),Q(s.src,i=l[2].images[0].url)||f(s,"src",i),f(s,"alt",r=l[2].name),w(s,y,13,5,410),f(t,"class","text-white text-md font-semibold truncate"),w(t,y,15,6,540),f(v,"class","capitalize text-gray-400 text-sm"),w(v,y,18,6,631),f(a,"class","justify-center text-center py-2"),w(a,y,14,5,488),f(n,"class","w-full border border-gray-700 rounded"),w(n,y,12,4,353),f(e,"href",I=`/album/${l[2].id}`),w(e,y,10,3,254)},m:function(_,p){k(_,e,p),d(e,n),d(n,s),d(n,c),d(n,a),d(a,t),d(t,o),d(a,h),d(a,v),d(v,D),d(v,z),d(v,B),d(e,G)},p:function(_,p){p&1&&!Q(s.src,i=_[2].images[0].url)&&f(s,"src",i),p&1&&r!==(r=_[2].name)&&f(s,"alt",r),p&1&&u!==(u=_[2].name+"")&&Y(o,u),p&1&&R!==(R=new Date(_[2].release_date).getFullYear()+"")&&Y(D,R),p&1&&A!==(A=_[2].album_group+"")&&Y(B,A),p&1&&I!==(I=`/album/${_[2].id}`)&&f(e,"href",I)},d:function(_){_&&m(e)}};return C("SvelteRegisterBlock",{block:J,id:M.name,type:"each",source:"(10:2) {#each results as album}",ctx:l}),J}function x(l){let e,n,s,i;function r(u,o){return u[0]&&u[0].length>1?X:W}let c=r(l),a=c(l);const t={c:function(){e=b("h2"),n=j(l[1]),s=F(),a.c(),i=L(),this.h()},l:function(o){e=g(o,"H2",{class:!0});var h=S(e);n=P(h,l[1]),h.forEach(m),s=O(o),a.l(o),i=L(),this.h()},h:function(){f(e,"class","my-2 mt-5 font-bold text-2xl"),w(e,y,5,0,60)},m:function(o,h){k(o,e,h),d(e,n),k(o,s,h),a.m(o,h),k(o,i,h)},p:function(o,[h]){h&2&&Y(n,o[1]),c===(c=r(o))&&a?a.p(o,h):(a.d(1),a=c(o),a&&(a.c(),a.m(i.parentNode,i)))},i:H,o:H,d:function(o){o&&(m(e),m(s),m(i)),a.d(o)}};return C("SvelteRegisterBlock",{block:t,id:x.name,type:"component",source:"",ctx:l}),t}function ne(l,e,n){let{$$slots:s={},$$scope:i}=e;le("AlbumSearchResult",s,[]);let{results:r}=e,{title:c}=e;l.$$.on_mount.push(function(){r===void 0&&!("results"in e||l.$$.bound[l.$$.props.results])&&console.warn("<AlbumSearchResult> was created without expected prop 'results'"),c===void 0&&!("title"in e||l.$$.bound[l.$$.props.title])&&console.warn("<AlbumSearchResult> was created without expected prop 'title'")});const a=["results","title"];return Object.keys(e).forEach(t=>{!~a.indexOf(t)&&t.slice(0,2)!=="$$"&&t!=="slot"&&console.warn(`<AlbumSearchResult> was created with unknown prop '${t}'`)}),l.$$set=t=>{"results"in t&&n(0,r=t.results),"title"in t&&n(1,c=t.title)},l.$capture_state=()=>({results:r,title:c}),l.$inject_state=t=>{"results"in t&&n(0,r=t.results),"title"in t&&n(1,c=t.title)},e&&"$$inject"in e&&l.$inject_state(e.$$inject),[r,c]}class ce extends te{constructor(e){super(e),se(this,e,ne,x,Z,{results:0,title:1}),C("SvelteRegisterComponent",{component:this,tagName:"AlbumSearchResult",options:e,id:x.name})}get results(){throw new Error("<AlbumSearchResult>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set results(e){throw new Error("<AlbumSearchResult>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get title(){throw new Error("<AlbumSearchResult>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<AlbumSearchResult>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{ce as A};
