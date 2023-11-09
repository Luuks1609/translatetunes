import{s as it,o as W,e as z,g as _,l as tt,h as v,i as E,m as et,j as lt,k as g,w as A,c as q,d as M,C as F,A as ut}from"../chunks/scheduler.635b56cd.js";import{h as J,T as at,u as mt}from"../chunks/TrackSearchResult.6780c042.js";import{g as dt}from"../chunks/globals.7f7f1b26.js";import{S as ft,i as pt,d as $,v as ht,a as j,b as N,t as O,e as d,n as S,s as nt,j as K,k as L,g as f,m as Q,q as _t,l as U}from"../chunks/index.1e81eea3.js";import{A as vt}from"../chunks/AlbumSearchResult.1e4e593c.js";import{A as gt}from"../chunks/ArtistSearchResult.2aadac5b.js";import{c as X}from"../chunks/utils.808755f5.js";import{I as st}from"../chunks/Icon.20649865.js";const{console:Y}=dt,b="src/routes/(protected)/playlist/[id]/+page.svelte";function ot(a){let t,c=a[4].message+"",i;const o={c:function(){t=_("p"),i=tt(c),this.h()},l:function(s){t=v(s,"P",{style:!0});var e=E(t);i=et(e,c),e.forEach(d),this.h()},h:function(){lt(t,"color","red"),g(t,b,51,1,1499)},m:function(s,e){j(s,t,e),S(t,i)},p:function(s,e){e&2&&c!==(c=s[4].message+"")&&nt(i,c)},i:A,o:A,d:function(s){s&&d(t)}};return $("SvelteRegisterBlock",{block:o,id:ot.name,type:"catch",source:"(51:0) {:catch error}",ctx:a}),o}function rt(a){let t,c,i,o,n,s,e,u,p,l,k,R=a[0].name+"",D,B,h,y,V,x;i=new st({props:{icon:"bi:chevron-left",class:"text-white ",height:"18"},$$inline:!0}),h=new at({props:{results:a[0].tracks.items.map(Z),isAlbum:!0},$$inline:!0});const G={c:function(){t=_("div"),c=_("div"),K(i.$$.fragment),o=q(),n=_("div"),s=_("div"),e=_("img"),l=q(),k=_("h2"),D=tt(R),B=q(),K(h.$$.fragment),this.h()},l:function(r){t=v(r,"DIV",{class:!0});var m=E(t);c=v(m,"DIV",{class:!0});var I=E(c);L(i.$$.fragment,I),I.forEach(d),m.forEach(d),o=M(r),n=v(r,"DIV",{class:!0});var C=E(n);s=v(C,"DIV",{class:!0});var P=E(s);e=v(P,"IMG",{class:!0,src:!0,alt:!0}),l=M(P),k=v(P,"H2",{class:!0});var H=E(k);D=et(H,R),H.forEach(d),P.forEach(d),C.forEach(d),B=M(r),L(h.$$.fragment,r),this.h()},h:function(){var r,m;f(c,"class","bg-dark-gray w-fit rounded-lg border border-b-4 border-gray-700 p-3 px-3 cursor-pointer"),g(c,b,36,2,941),f(t,"class","p-4"),g(t,b,33,1,801),f(e,"class","w-64 h-64 object-cover"),F(e.src,u=(r=a[0])==null?void 0:r.images[0].url)||f(e,"src",u),f(e,"alt",p=(m=a[0])==null?void 0:m.name.name),g(e,b,45,3,1227),f(k,"class","text-center font-bold text-xl py-2"),g(k,b,46,3,1317),f(s,"class","mb-5"),g(s,b,44,2,1205),f(n,"class","flex justify-center"),g(n,b,43,1,1169)},m:function(r,m){j(r,t,m),S(t,c),Q(i,c,null),j(r,o,m),j(r,n,m),S(n,s),S(s,e),S(s,l),S(s,k),S(k,D),j(r,B,m),Q(h,r,m),y=!0,V||(x=_t(c,"click",a[2],!1,!1,!1,!1),V=!0)},p:function(r,m){var C,P;(!y||m&2&&!F(e.src,u=(C=r[0])==null?void 0:C.images[0].url))&&f(e,"src",u),(!y||m&2&&p!==(p=(P=r[0])==null?void 0:P.name.name))&&f(e,"alt",p),(!y||m&2)&&R!==(R=r[0].name+"")&&nt(D,R);const I={};m&2&&(I.results=r[0].tracks.items.map(Z)),h.$set(I)},i:function(r){y||(N(i.$$.fragment,r),N(h.$$.fragment,r),y=!0)},o:function(r){O(i.$$.fragment,r),O(h.$$.fragment,r),y=!1},d:function(r){r&&(d(t),d(o),d(n),d(B)),U(i),U(h,r),V=!1,x()}};return $("SvelteRegisterBlock",{block:G,id:rt.name,type:"then",source:"(33:0) {:then data}",ctx:a}),G}function ct(a){let t,c="...waiting";const i={c:function(){t=_("p"),t.textContent=c,this.h()},l:function(n){t=v(n,"P",{"data-svelte-h":!0}),ut(t)!=="svelte-mv6tav"&&(t.textContent=c),this.h()},h:function(){g(t,b,31,1,769)},m:function(n,s){j(n,t,s)},p:A,i:A,o:A,d:function(n){n&&d(t)}};return $("SvelteRegisterBlock",{block:i,id:ct.name,type:"pending",source:"(31:16)   <p>...waiting</p> {:then data}",ctx:a}),i}function T(a){let t,c,i,o={ctx:a,current:null,token:null,hasCatch:!0,pending:ct,then:rt,catch:ot,value:0,error:4,blocks:[,,,]};J(c=a[1],o);const n={c:function(){t=z(),o.block.c()},l:function(e){t=z(),o.block.l(e)},m:function(e,u){j(e,t,u),o.block.m(e,o.anchor=u),o.mount=()=>t.parentNode,o.anchor=t,i=!0},p:function(e,[u]){a=e,o.ctx=a,u&2&&c!==(c=a[1])&&J(c,o)||mt(o,a,u)},i:function(e){i||(N(o.block),i=!0)},o:function(e){for(let u=0;u<3;u+=1){const p=o.blocks[u];O(p)}i=!1},d:function(e){e&&d(t),o.block.d(e),o.token=null,o=null}};return $("SvelteRegisterBlock",{block:n,id:T.name,type:"component",source:"",ctx:a}),n}const Z=a=>a.track;function bt(a,t,c){let{$$slots:i={},$$scope:o}=t;ht("Page",i,[]);let{data:n}=t;const s=async()=>{try{return await X(`https://api.spotify.com/v1/playlists/${n.props.playlistId}`)}catch(l){console.error(l)}};let e=s();W(()=>{c(1,e=s())}),a.$$.on_mount.push(function(){n===void 0&&!("data"in t||a.$$.bound[a.$$.props.data])&&Y.warn("<Page> was created without expected prop 'data'")});const u=["data"];Object.keys(t).forEach(l=>{!~u.indexOf(l)&&l.slice(0,2)!=="$$"&&l!=="slot"&&Y.warn(`<Page> was created with unknown prop '${l}'`)});const p=()=>history.back();return a.$$set=l=>{"data"in l&&c(0,n=l.data)},a.$capture_state=()=>({AlbumSearchResult:vt,ArtistSearchResult:gt,TrackSearchResult:at,callWithRetry:X,Icon:st,onMount:W,data:n,getPlaylist:s,promise:e}),a.$inject_state=l=>{"data"in l&&c(0,n=l.data),"promise"in l&&c(1,e=l.promise)},t&&"$$inject"in t&&a.$inject_state(t.$$inject),[n,e,p]}class It extends ft{constructor(t){super(t),pt(this,t,bt,T,it,{data:0}),$("SvelteRegisterComponent",{component:this,tagName:"Page",options:t,id:T.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(t){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{It as component};
