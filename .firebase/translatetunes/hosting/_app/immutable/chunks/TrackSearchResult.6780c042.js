import{L as Nt,M as qt,N as je,O as Ot,s as wt,G as ct,g as q,c as Z,h as O,i as F,d as x,k as H,B as De,F as qe,H as Me,f as Ht,v as Gt,r as Lt,o as at,l as pe,m as ye,K as zt,A as Ft,w as Te,e as Ve,C as Ne,P as vt}from"./scheduler.635b56cd.js";import{h as de,t as B,c as he,b as w,S as Dt,i as St,d as Q,p as re,v as At,e as y,g as D,a as G,n as M,q as ke,j as oe,k as ce,m as ae,l as ue,A as Kt,s as we}from"./index.1e81eea3.js";import{I as ge}from"./Icon.20649865.js";import{M as Et}from"./Modal.6c353d5e.js";import{a as Oe,c as ut,e as ft,q as dt,w as ht,h as mt}from"./firebase.a6fa023d.js";function xt(t,e){const n=e.token={};function i(s,r,o,c){if(e.token!==n)return;e.resolved=c;let f=e.ctx;o!==void 0&&(f=f.slice(),f[o]=c);const l=s&&(e.current=s)(f);let a=!1;e.block&&(e.blocks?e.blocks.forEach((g,m)=>{m!==r&&g&&(de(),B(g,1,1,()=>{e.blocks[m]===g&&(e.blocks[m]=null)}),he())}):e.block.d(1),l.c(),w(l,1),l.m(e.mount(),e.anchor),a=!0),e.block=l,e.blocks&&(e.blocks[r]=l),a&&Ot()}if(Nt(t)){const s=qt();if(t.then(r=>{je(s),i(e.then,1,e.value,r),je(null)},r=>{if(je(s),i(e.catch,2,e.error,r),je(null),!e.hasCatch)throw r}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function $t(t,e,n){const i=e.slice(),{resolved:s}=t;t.current===t.then&&(i[t.value]=s),t.current===t.catch&&(i[t.error]=s),t.block.p(i,n)}const Bt="src/lib/components/UI/DifficultyBox.svelte";function _t(t,e,n){const i=t.slice();return i[9]=e[n],i}function He(t){let e,n,i;n=new ge({props:{icon:"fa-solid:medal",class:"text-red-500",height:"30"},$$inline:!0});const s={c:function(){e=q("span"),oe(n.$$.fragment),this.h()},l:function(o){e=O(o,"SPAN",{class:!0});var c=F(e);ce(n.$$.fragment,c),c.forEach(y),this.h()},h:function(){D(e,"class","absolute top-0 left-2"),H(e,Bt,39,2,848)},m:function(o,c){G(o,e,c),ae(n,e,null),i=!0},i:function(o){i||(w(n.$$.fragment,o),i=!0)},o:function(o){B(n.$$.fragment,o),i=!1},d:function(o){o&&y(e),ue(n)}};return Q("SvelteRegisterBlock",{block:s,id:He.name,type:"if",source:"(39:1) {#if finished}",ctx:t}),s}function Ge(t){let e,n;e=new ge({props:{icon:"bi:star-fill",class:t[2]?"text-gray-700":"text-yellow-400",height:"24"},$$inline:!0});const i={c:function(){oe(e.$$.fragment)},l:function(r){ce(e.$$.fragment,r)},m:function(r,o){ae(e,r,o),n=!0},p:function(r,o){const c={};o&4&&(c.class=r[2]?"text-gray-700":"text-yellow-400"),e.$set(c)},i:function(r){n||(w(e.$$.fragment,r),n=!0)},o:function(r){B(e.$$.fragment,r),n=!1},d:function(r){ue(e,r)}};return Q("SvelteRegisterBlock",{block:i,id:Ge.name,type:"each",source:"(44:1) {#each { length: stars } as _}",ctx:t}),i}function Le(t){let e,n,i,s,r,o,c=t[1]&&He(t),f=re({length:t[0]}),l=[];for(let m=0;m<f.length;m+=1)l[m]=Ge(_t(t,f,m));const a=m=>B(l[m],1,1,()=>{l[m]=null}),g={c:function(){e=q("div"),c&&c.c(),n=Z();for(let k=0;k<l.length;k+=1)l[k].c();this.h()},l:function(k){e=O(k,"DIV",{class:!0});var b=F(e);c&&c.l(b),n=x(b);for(let h=0;h<l.length;h+=1)l[h].l(b);b.forEach(y),this.h()},h:function(){D(e,"class",i="w-1/3 relative py-5 rounded-xl flex justify-center gap-1 bg-gray-800 "+(t[2]?t[3]:t[4])+"}"),H(e,Bt,31,0,649)},m:function(k,b){G(k,e,b),c&&c.m(e,null),M(e,n);for(let h=0;h<l.length;h+=1)l[h]&&l[h].m(e,null);s=!0,r||(o=[ke(e,"click",t[8],!1,!1,!1,!1),ke(e,"keydown",t[7],!1,!1,!1,!1)],r=!0)},p:function(k,[b]){if(k[1]?c?b&2&&w(c,1):(c=He(k),c.c(),w(c,1),c.m(e,n)):c&&(de(),B(c,1,1,()=>{c=null}),he()),b&5){f=re({length:k[0]});let h;for(h=0;h<f.length;h+=1){const S=_t(k,f,h);l[h]?(l[h].p(S,b),w(l[h],1)):(l[h]=Ge(S),l[h].c(),w(l[h],1),l[h].m(e,null))}for(de(),h=f.length;h<l.length;h+=1)a(h);he()}(!s||b&4&&i!==(i="w-1/3 relative py-5 rounded-xl flex justify-center gap-1 bg-gray-800 "+(k[2]?k[3]:k[4])+"}"))&&D(e,"class",i)},i:function(k){if(!s){w(c);for(let b=0;b<f.length;b+=1)w(l[b]);s=!0}},o:function(k){B(c),l=l.filter(Boolean);for(let b=0;b<l.length;b+=1)B(l[b]);s=!1},d:function(k){k&&y(e),c&&c.d(),De(l,k),r=!1,qe(o)}};return Q("SvelteRegisterBlock",{block:g,id:Le.name,type:"component",source:"",ctx:t}),g}function Qt(t,e,n){let i,{$$slots:s={},$$scope:r}=e;At("DifficultyBox",s,[]);let{selectedDifficulty:o}=e,{stars:c}=e,{finished:f}=e,l="bg-yellow-400 shadow-2xl border-b-8 border-yellow-500 ",a="border-gray-700 border-b-4";const g=ct();t.$$.on_mount.push(function(){o===void 0&&!("selectedDifficulty"in e||t.$$.bound[t.$$.props.selectedDifficulty])&&console.warn("<DifficultyBox> was created without expected prop 'selectedDifficulty'"),c===void 0&&!("stars"in e||t.$$.bound[t.$$.props.stars])&&console.warn("<DifficultyBox> was created without expected prop 'stars'"),f===void 0&&!("finished"in e||t.$$.bound[t.$$.props.finished])&&console.warn("<DifficultyBox> was created without expected prop 'finished'")});const m=["selectedDifficulty","stars","finished"];Object.keys(e).forEach(h=>{!~m.indexOf(h)&&h.slice(0,2)!=="$$"&&h!=="slot"&&console.warn(`<DifficultyBox> was created with unknown prop '${h}'`)});function k(h){Me.call(this,t,h)}const b=()=>g("click");return t.$$set=h=>{"selectedDifficulty"in h&&n(6,o=h.selectedDifficulty),"stars"in h&&n(0,c=h.stars),"finished"in h&&n(1,f=h.finished)},t.$capture_state=()=>({Icon:ge,createEventDispatcher:ct,selectedDifficulty:o,stars:c,finished:f,activeClasses:l,inactiveClasses:a,dispatch:g,active:i}),t.$inject_state=h=>{"selectedDifficulty"in h&&n(6,o=h.selectedDifficulty),"stars"in h&&n(0,c=h.stars),"finished"in h&&n(1,f=h.finished),"activeClasses"in h&&n(3,l=h.activeClasses),"inactiveClasses"in h&&n(4,a=h.inactiveClasses),"active"in h&&n(2,i=h.active)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty&65&&n(2,i=o===c)},[c,f,i,l,a,g,o,k,b]}class Ce extends Dt{constructor(e){super(e),St(this,e,Qt,Le,wt,{selectedDifficulty:6,stars:0,finished:1}),Q("SvelteRegisterComponent",{component:this,tagName:"DifficultyBox",options:e,id:Le.name})}get selectedDifficulty(){throw new Error("<DifficultyBox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set selectedDifficulty(e){throw new Error("<DifficultyBox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get stars(){throw new Error("<DifficultyBox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set stars(e){throw new Error("<DifficultyBox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get finished(){throw new Error("<DifficultyBox>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set finished(e){throw new Error("<DifficultyBox>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}const L="src/lib/components/TrackSearchResult.svelte";function gt(t,e,n){const i=t.slice();return i[27]=e[n],i[29]=n,i}function bt(t,e,n){const i=t.slice();return i[27]=e[n],i[29]=n,i}function pt(t,e,n){const i=t.slice();return i[31]=e[n],i}function yt(t,e,n){const i=t.slice();return i[34]=e[n],i[29]=n,i}function kt(t,e,n){const i=t.slice();return i[27]=e[n],i[29]=n,i}function Rt(t){let e,n="No tracks found.";const i={c:function(){e=q("p"),e.textContent=n,this.h()},l:function(r){e=O(r,"P",{class:!0,"data-svelte-h":!0}),Ft(e)!=="svelte-1dd039r"&&(e.textContent=n),this.h()},h:function(){D(e,"class","text-center text-gray-400"),H(e,L,166,1,4973)},m:function(r,o){G(r,e,o)},p:Te,i:Te,o:Te,d:function(r){r&&y(e)}};return Q("SvelteRegisterBlock",{block:i,id:Rt.name,type:"else",source:"(166:0) {:else}",ctx:t}),i}function Pt(t){let e,n,i=re(t[0]),s=[];for(let c=0;c<i.length;c+=1)s[c]=Ue(pt(t,i,c));const r=c=>B(s[c],1,1,()=>{s[c]=null}),o={c:function(){for(let f=0;f<s.length;f+=1)s[f].c();e=Ve()},l:function(f){for(let l=0;l<s.length;l+=1)s[l].l(f);e=Ve()},m:function(f,l){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(f,l);G(f,e,l),n=!0},p:function(f,l){if(l[0]&22977){i=re(f[0]);let a;for(a=0;a<i.length;a+=1){const g=pt(f,i,a);s[a]?(s[a].p(g,l),w(s[a],1)):(s[a]=Ue(g),s[a].c(),w(s[a],1),s[a].m(e.parentNode,e))}for(de(),a=i.length;a<s.length;a+=1)r(a);he()}},i:function(f){if(!n){for(let l=0;l<i.length;l+=1)w(s[l]);n=!0}},o:function(f){s=s.filter(Boolean);for(let l=0;l<s.length;l+=1)B(s[l]);n=!1},d:function(f){f&&y(e),De(s,f)}};return Q("SvelteRegisterBlock",{block:o,id:Pt.name,type:"if",source:"(110:0) {#if results && results.length > 1}",ctx:t}),o}function ze(t){let e,n,i;const s={c:function(){e=q("img"),this.h()},l:function(o){e=O(o,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h:function(){var o,c;D(e,"class","h-16 object-cover"),Ne(e.src,n=(c=(o=t[31].album)==null?void 0:o.images[0])==null?void 0:c.url)||D(e,"src",n),D(e,"alt",i=t[31].album.name),H(e,L,119,5,3390)},m:function(o,c){G(o,e,c)},p:function(o,c){var f,l;c[0]&1&&!Ne(e.src,n=(l=(f=o[31].album)==null?void 0:f.images[0])==null?void 0:l.url)&&D(e,"src",n),c[0]&1&&i!==(i=o[31].album.name)&&D(e,"alt",i)},d:function(o){o&&y(e)}};return Q("SvelteRegisterBlock",{block:s,id:ze.name,type:"if",source:"(119:4) {#if track?.album?.images}",ctx:t}),s}function It(t){let e,n;e=new ge({props:{icon:"bi:star-fill",class:"text-yellow-300 ",height:"15"},$$inline:!0});const i={c:function(){oe(e.$$.fragment)},l:function(r){ce(e.$$.fragment,r)},m:function(r,o){ae(e,r,o),n=!0},i:function(r){n||(w(e.$$.fragment,r),n=!0)},o:function(r){B(e.$$.fragment,r),n=!1},d:function(r){ue(e,r)}};return Q("SvelteRegisterBlock",{block:i,id:It.name,type:"else",source:"(135:7) {:else}",ctx:t}),i}function Tt(t){let e,n;e=new ge({props:{icon:"bi:star-fill",class:"text-black",height:"15"},$$inline:!0});const i={c:function(){oe(e.$$.fragment)},l:function(r){ce(e.$$.fragment,r)},m:function(r,o){ae(e,r,o),n=!0},i:function(r){n||(w(e.$$.fragment,r),n=!0)},o:function(r){B(e.$$.fragment,r),n=!1},d:function(r){ue(e,r)}};return Q("SvelteRegisterBlock",{block:i,id:Tt.name,type:"if",source:"(133:7) {#if songStars[track?.id]?.stars === 3}",ctx:t}),i}function Fe(t){let e,n,i,s;const r=[Tt,It],o=[];function c(l,a){var g,m;return((m=l[8][(g=l[31])==null?void 0:g.id])==null?void 0:m.stars)===3?0:1}e=c(t),n=o[e]=r[e](t);const f={c:function(){n.c(),i=Ve()},l:function(a){n.l(a),i=Ve()},m:function(a,g){o[e].m(a,g),G(a,i,g),s=!0},p:function(a,g){let m=e;e=c(a),e!==m&&(de(),B(o[m],1,1,()=>{o[m]=null}),he(),n=o[e],n||(n=o[e]=r[e](a),n.c()),w(n,1),n.m(i.parentNode,i))},i:function(a){s||(w(n),s=!0)},o:function(a){B(n),s=!1},d:function(a){a&&y(i),o[e].d(a)}};return Q("SvelteRegisterBlock",{block:f,id:Fe.name,type:"each",source:"(132:6) {#each Array(songStars[track?.id]?.stars || 0) as _, i}",ctx:t}),f}function Ke(t){let e,n=t[34].name+"",i,s=t[29]<t[31].artists.length-1?", ":"",r;const o={c:function(){e=q("span"),i=pe(n),r=pe(s),this.h()},l:function(f){e=O(f,"SPAN",{});var l=F(e);i=ye(l,n),r=ye(l,s),l.forEach(y),this.h()},h:function(){H(e,L,145,7,4260)},m:function(f,l){G(f,e,l),M(e,i),M(e,r)},p:function(f,l){l[0]&1&&n!==(n=f[34].name+"")&&we(i,n),l[0]&1&&s!==(s=f[29]<f[31].artists.length-1?", ":"")&&we(r,s)},d:function(f){f&&y(e)}};return Q("SvelteRegisterBlock",{block:o,id:Ke.name,type:"each",source:"(145:6) {#each track.artists as artist, i}",ctx:t}),o}function Qe(t){let e,n,i,s;const r=[Mt,jt],o=[];function c(l,a){return l[6]&&l[7].src===l[31].preview_url?0:1}n=c(t),i=o[n]=r[n](t);const f={c:function(){e=q("div"),i.c(),this.h()},l:function(a){e=O(a,"DIV",{class:!0});var g=F(e);i.l(g),g.forEach(y),this.h()},h:function(){D(e,"class","flex justify-center items-center px-5"),H(e,L,150,5,4397)},m:function(a,g){G(a,e,g),o[n].m(e,null),s=!0},p:function(a,g){let m=n;n=c(a),n===m?o[n].p(a,g):(de(),B(o[m],1,1,()=>{o[m]=null}),he(),i=o[n],i?i.p(a,g):(i=o[n]=r[n](a),i.c()),w(i,1),i.m(e,null))},i:function(a){s||(w(i),s=!0)},o:function(a){B(i),s=!1},d:function(a){a&&y(e),o[n].d()}};return Q("SvelteRegisterBlock",{block:f,id:Qe.name,type:"if",source:"(150:4) {#if track.preview_url}",ctx:t}),f}function jt(t){let e,n,i,s,r;n=new ge({props:{icon:"bi:play-fill",class:"text-gray-400",height:"24"},$$inline:!0});function o(){return t[20](t[31])}const c={c:function(){e=q("span"),oe(n.$$.fragment),this.h()},l:function(l){e=O(l,"SPAN",{});var a=F(e);ce(n.$$.fragment,a),a.forEach(y),this.h()},h:function(){H(e,L,156,7,4729)},m:function(l,a){G(l,e,a),ae(n,e,null),i=!0,s||(r=[ke(e,"click",vt(o),!1,!1,!0,!1),ke(e,"keydown",t[18],!1,!1,!1,!1)],s=!0)},p:function(l,a){t=l},i:function(l){i||(w(n.$$.fragment,l),i=!0)},o:function(l){B(n.$$.fragment,l),i=!1},d:function(l){l&&y(e),ue(n),s=!1,qe(r)}};return Q("SvelteRegisterBlock",{block:c,id:jt.name,type:"else",source:"(156:6) {:else}",ctx:t}),c}function Mt(t){let e,n,i,s,r;n=new ge({props:{icon:"bi:pause-fill",class:"text-gray-400",height:"24"},$$inline:!0});function o(){return t[19](t[31])}const c={c:function(){e=q("span"),oe(n.$$.fragment),this.h()},l:function(l){e=O(l,"SPAN",{});var a=F(e);ce(n.$$.fragment,a),a.forEach(y),this.h()},h:function(){H(e,L,152,7,4534)},m:function(l,a){G(l,e,a),ae(n,e,null),i=!0,s||(r=[ke(e,"click",vt(o),!1,!1,!0,!1),ke(e,"keydown",t[17],!1,!1,!1,!1)],s=!0)},p:function(l,a){t=l},i:function(l){i||(w(n.$$.fragment,l),i=!0)},o:function(l){B(n.$$.fragment,l),i=!1},d:function(l){l&&y(e),ue(n),s=!1,qe(r)}};return Q("SvelteRegisterBlock",{block:c,id:Mt.name,type:"if",source:"(152:6) {#if audioIsPlaying && currentlyPlayingAudio.src === track.preview_url}",ctx:t}),c}function Ue(t){var T,ve,ie,j;let e,n,i,s,r,o=t[31].name+"",c,f,l,a,g,m,k,b,h,S,p,A,J,E=((ve=(T=t[31])==null?void 0:T.album)==null?void 0:ve.images)&&ze(t),X=re(Array(((j=t[8][(ie=t[31])==null?void 0:ie.id])==null?void 0:j.stars)||0)),R=[];for(let d=0;d<X.length;d+=1)R[d]=Fe(kt(t,X,d));const le=d=>B(R[d],1,1,()=>{R[d]=null});let U=re(t[31].artists),z=[];for(let d=0;d<U.length;d+=1)z[d]=Ke(yt(t,U,d));let C=t[31].preview_url&&Qe(t);function ee(){return t[21](t[31])}const se={c:function(){e=q("div"),n=q("div"),E&&E.c(),i=Z(),s=q("div"),r=q("p"),c=pe(o),l=Z(),a=q("div");for(let I=0;I<R.length;I+=1)R[I].c();g=Z(),m=q("p");for(let I=0;I<z.length;I+=1)z[I].c();b=Z(),C&&C.c(),S=Z(),this.h()},l:function(I){e=O(I,"DIV",{class:!0});var v=F(e);n=O(v,"DIV",{class:!0});var V=F(n);E&&E.l(V),i=x(V),s=O(V,"DIV",{class:!0});var W=F(s);r=O(W,"P",{class:!0});var Y=F(r);c=ye(Y,o),Y.forEach(y),l=x(W),a=O(W,"DIV",{class:!0});var $=F(a);for(let te=0;te<R.length;te+=1)R[te].l($);$.forEach(y),g=x(W),m=O(W,"P",{class:!0});var me=F(m);for(let te=0;te<z.length;te+=1)z[te].l(me);me.forEach(y),W.forEach(y),b=x(V),C&&C.l(V),V.forEach(y),S=x(v),v.forEach(y),this.h()},h:function(){var I,v,V,W,Y,$;D(r,"class",f="w-3/4 text-white text-md truncate "+Array(((v=t[8][(I=t[31])==null?void 0:I.id])==null?void 0:v.stars)===3?"!text-black font-bold":"")),H(r,L,122,5,3558),D(a,"class","flex gap-1"),H(a,L,130,5,3740),D(m,"class",k="text-gray-400 text-sm "+Array(((W=t[8][(V=t[31])==null?void 0:V.id])==null?void 0:W.stars)===3?"!text-black font-medium":"")),H(m,L,139,5,4075),D(s,"class","flex flex-col pl-2 flex-grow justify-center"),H(s,L,121,4,3495),D(n,"class",h="w-full min-h-16 border-2 border-gray-700 rounded flex flex-row mb-2 overflow-hidden "+t[11]+" "+Array((($=t[8][(Y=t[31])==null?void 0:Y.id])==null?void 0:$.stars)===3?Ye:"")),H(n,L,113,3,3155),D(e,"class","cursor-pointer"),H(e,L,112,2,3076)},m:function(I,v){G(I,e,v),M(e,n),E&&E.m(n,null),M(n,i),M(n,s),M(s,r),M(r,c),M(s,l),M(s,a);for(let V=0;V<R.length;V+=1)R[V]&&R[V].m(a,null);M(s,g),M(s,m);for(let V=0;V<z.length;V+=1)z[V]&&z[V].m(m,null);M(n,b),C&&C.m(n,null),M(e,S),p=!0,A||(J=[ke(e,"click",ee,!1,!1,!1,!1),ke(e,"keydown",t[16],!1,!1,!1,!1)],A=!0)},p:function(I,v){var V,W,Y,$,me,te,Se,Ae,Ee,N;if(t=I,(W=(V=t[31])==null?void 0:V.album)!=null&&W.images?E?E.p(t,v):(E=ze(t),E.c(),E.m(n,i)):E&&(E.d(1),E=null),(!p||v[0]&1)&&o!==(o=t[31].name+"")&&we(c,o),(!p||v[0]&257&&f!==(f="w-3/4 text-white text-md truncate "+Array((($=t[8][(Y=t[31])==null?void 0:Y.id])==null?void 0:$.stars)===3?"!text-black font-bold":"")))&&D(r,"class",f),v[0]&257){X=re(Array(((te=t[8][(me=t[31])==null?void 0:me.id])==null?void 0:te.stars)||0));let u;for(u=0;u<X.length;u+=1){const _=kt(t,X,u);R[u]?(R[u].p(_,v),w(R[u],1)):(R[u]=Fe(_),R[u].c(),w(R[u],1),R[u].m(a,null))}for(de(),u=X.length;u<R.length;u+=1)le(u);he()}if(v[0]&1){U=re(t[31].artists);let u;for(u=0;u<U.length;u+=1){const _=yt(t,U,u);z[u]?z[u].p(_,v):(z[u]=Ke(_),z[u].c(),z[u].m(m,null))}for(;u<z.length;u+=1)z[u].d(1);z.length=U.length}(!p||v[0]&257&&k!==(k="text-gray-400 text-sm "+Array(((Ae=t[8][(Se=t[31])==null?void 0:Se.id])==null?void 0:Ae.stars)===3?"!text-black font-medium":"")))&&D(m,"class",k),t[31].preview_url?C?(C.p(t,v),v[0]&1&&w(C,1)):(C=Qe(t),C.c(),w(C,1),C.m(n,null)):C&&(de(),B(C,1,1,()=>{C=null}),he()),(!p||v[0]&257&&h!==(h="w-full min-h-16 border-2 border-gray-700 rounded flex flex-row mb-2 overflow-hidden "+t[11]+" "+Array(((N=t[8][(Ee=t[31])==null?void 0:Ee.id])==null?void 0:N.stars)===3?Ye:"")))&&D(n,"class",h)},i:function(I){if(!p){for(let v=0;v<X.length;v+=1)w(R[v]);w(C),p=!0}},o:function(I){R=R.filter(Boolean);for(let v=0;v<R.length;v+=1)B(R[v]);B(C),p=!1},d:function(I){I&&y(e),E&&E.d(),De(R,I),De(z,I),C&&C.d(),A=!1,qe(J)}};return Q("SvelteRegisterBlock",{block:se,id:Ue.name,type:"each",source:"(111:1) {#each results as track}",ctx:t}),se}function We(t){let e,n;e=new ge({props:{icon:"bi:star-fill",class:"text-yellow-400",height:"24",key:t[29]},$$inline:!0});const i={c:function(){oe(e.$$.fragment)},l:function(r){ce(e.$$.fragment,r)},m:function(r,o){ae(e,r,o),n=!0},p:Te,i:function(r){n||(w(e.$$.fragment,r),n=!0)},o:function(r){B(e.$$.fragment,r),n=!1},d:function(r){ue(e,r)}};return Q("SvelteRegisterBlock",{block:i,id:We.name,type:"each",source:"(184:2) {#each Array(songStars[selectedTrack?.id]?.stars || 0) as _, i}",ctx:t}),i}function Je(t){let e,n;e=new ge({props:{icon:"bi:star-fill",class:"text-gray-400",height:"24",key:t[29]},$$inline:!0});const i={c:function(){oe(e.$$.fragment)},l:function(r){ce(e.$$.fragment,r)},m:function(r,o){ae(e,r,o),n=!0},p:Te,i:function(r){n||(w(e.$$.fragment,r),n=!0)},o:function(r){B(e.$$.fragment,r),n=!1},d:function(r){ue(e,r)}};return Q("SvelteRegisterBlock",{block:i,id:Je.name,type:"each",source:"(188:2) {#each Array(3 - (songStars[selectedTrack?.id]?.stars || 0)) as _, i}",ctx:t}),i}function Ct(t){var v,V,W,Y,$,me,te,Se,Ae,Ee;let e,n,i,s,r,o,c,f,l,a,g,m,k,b,h,S,p,A,J,E,X,R,le,U,z,C,ee,se=re(Array(((V=t[8][(v=t[5])==null?void 0:v.id])==null?void 0:V.stars)||0)),T=[];for(let N=0;N<se.length;N+=1)T[N]=We(bt(t,se,N));const ve=N=>B(T[N],1,1,()=>{T[N]=null});let ie=re(Array(3-(((Y=t[8][(W=t[5])==null?void 0:W.id])==null?void 0:Y.stars)||0))),j=[];for(let N=0;N<ie.length;N+=1)j[N]=Je(gt(t,ie,N));const d=N=>B(j[N],1,1,()=>{j[N]=null});a=new Ce({props:{selectedDifficulty:t[3],finished:(me=t[8][($=t[5])==null?void 0:$.id])==null?void 0:me.playedDifficulties.includes("easy"),stars:1},$$inline:!0}),a.$on("click",t[22]),m=new Ce({props:{selectedDifficulty:t[3],finished:(Se=t[8][(te=t[5])==null?void 0:te.id])==null?void 0:Se.playedDifficulties.includes("medium"),stars:2},$$inline:!0}),m.$on("click",t[23]),b=new Ce({props:{selectedDifficulty:t[3],finished:(Ee=t[8][(Ae=t[5])==null?void 0:Ae.id])==null?void 0:Ee.playedDifficulties.includes("hard"),stars:3},$$inline:!0}),b.$on("click",t[24]);const I={c:function(){e=q("div"),n=q("img"),r=Z(),o=q("div");for(let u=0;u<T.length;u+=1)T[u].c();c=Z();for(let u=0;u<j.length;u+=1)j[u].c();f=Z(),l=q("div"),oe(a.$$.fragment),g=Z(),oe(m.$$.fragment),k=Z(),oe(b.$$.fragment),h=Z(),S=q("div"),p=q("p"),A=pe(t[9]),J=Z(),E=q("p"),X=pe(t[10]),R=Z(),le=q("div"),U=q("a"),z=pe("Starten"),this.h()},l:function(u){e=O(u,"DIV",{class:!0});var _=F(e);n=O(_,"IMG",{class:!0,src:!0,alt:!0}),_.forEach(y),r=x(u),o=O(u,"DIV",{class:!0});var K=F(o);for(let _e=0;_e<T.length;_e+=1)T[_e].l(K);c=x(K);for(let _e=0;_e<j.length;_e+=1)j[_e].l(K);K.forEach(y),f=x(u),l=O(u,"DIV",{class:!0});var ne=F(l);ce(a.$$.fragment,ne),g=x(ne),ce(m.$$.fragment,ne),k=x(ne),ce(b.$$.fragment,ne),ne.forEach(y),h=x(u),S=O(u,"DIV",{class:!0});var fe=F(S);p=O(fe,"P",{class:!0});var be=F(p);A=ye(be,t[9]),be.forEach(y),J=x(fe),E=O(fe,"P",{class:!0});var Be=F(E);X=ye(Be,t[10]),Be.forEach(y),fe.forEach(y),R=x(u),le=O(u,"DIV",{class:!0});var Re=F(le);U=O(Re,"A",{href:!0,class:!0});var Pe=F(U);z=ye(Pe,"Starten"),Pe.forEach(y),Re.forEach(y),this.h()},h:function(){var u,_,K,ne,fe,be;D(n,"class","h-36 rounded-lg shadow-2xl"),Ne(n.src,i=t[2]?t[2]:(_=(u=t[5])==null?void 0:u.album.images[0])==null?void 0:_.url)||D(n,"src",i),D(n,"alt",s=t[2]?"Album art":(K=t[5])==null?void 0:K.album.name),H(n,L,176,2,5247),D(e,"class","flex justify-center mb-5"),H(e,L,175,1,5206),D(o,"class","flex justify-center gap-2 mb-5"),H(o,L,182,1,5431),D(l,"class","flex items-center gap-1 justify-between my-5"),H(l,L,192,1,5841),D(p,"class","font-bold text-2xl"),H(p,L,214,2,6497),D(E,"class","font-light"),H(E,L,215,2,6545),D(S,"class","text-center my-5"),H(S,L,213,1,6464),D(U,"href",C=`/game/${(ne=t[5])==null?void 0:ne.id}/${(fe=t[5])==null?void 0:fe.artists[0].name}&${(be=t[5])==null?void 0:be.name}/${t[13][t[3]].toLowerCase()}`),D(U,"class","bg-green-500 text-sm uppercase w-full text-center text-gray-900 font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 transition duration-300 ease-in-out border-b-4 border-green-700"),H(U,L,218,2,6634),D(le,"class","flex justify-center"),H(le,L,217,1,6598)},m:function(u,_){G(u,e,_),M(e,n),G(u,r,_),G(u,o,_);for(let K=0;K<T.length;K+=1)T[K]&&T[K].m(o,null);M(o,c);for(let K=0;K<j.length;K+=1)j[K]&&j[K].m(o,null);G(u,f,_),G(u,l,_),ae(a,l,null),M(l,g),ae(m,l,null),M(l,k),ae(b,l,null),G(u,h,_),G(u,S,_),M(S,p),M(p,A),M(S,J),M(S,E),M(E,X),G(u,R,_),G(u,le,_),M(le,U),M(U,z),ee=!0},p:function(u,_){var be,Be,Re,Pe,_e,Ze,xe,$e,et,tt,nt,lt,st,it,rt,ot;if((!ee||_[0]&36&&!Ne(n.src,i=u[2]?u[2]:(Be=(be=u[5])==null?void 0:be.album.images[0])==null?void 0:Be.url))&&D(n,"src",i),(!ee||_[0]&36&&s!==(s=u[2]?"Album art":(Re=u[5])==null?void 0:Re.album.name))&&D(n,"alt",s),_[0]&288){se=re(Array(((_e=u[8][(Pe=u[5])==null?void 0:Pe.id])==null?void 0:_e.stars)||0));let P;for(P=0;P<se.length;P+=1){const Ie=bt(u,se,P);T[P]?(T[P].p(Ie,_),w(T[P],1)):(T[P]=We(Ie),T[P].c(),w(T[P],1),T[P].m(o,c))}for(de(),P=se.length;P<T.length;P+=1)ve(P);he()}if(_[0]&288){ie=re(Array(3-(((xe=u[8][(Ze=u[5])==null?void 0:Ze.id])==null?void 0:xe.stars)||0)));let P;for(P=0;P<ie.length;P+=1){const Ie=gt(u,ie,P);j[P]?(j[P].p(Ie,_),w(j[P],1)):(j[P]=Je(Ie),j[P].c(),w(j[P],1),j[P].m(o,null))}for(de(),P=ie.length;P<j.length;P+=1)d(P);he()}const K={};_[0]&8&&(K.selectedDifficulty=u[3]),_[0]&288&&(K.finished=(et=u[8][($e=u[5])==null?void 0:$e.id])==null?void 0:et.playedDifficulties.includes("easy")),a.$set(K);const ne={};_[0]&8&&(ne.selectedDifficulty=u[3]),_[0]&288&&(ne.finished=(nt=u[8][(tt=u[5])==null?void 0:tt.id])==null?void 0:nt.playedDifficulties.includes("medium")),m.$set(ne);const fe={};_[0]&8&&(fe.selectedDifficulty=u[3]),_[0]&288&&(fe.finished=(st=u[8][(lt=u[5])==null?void 0:lt.id])==null?void 0:st.playedDifficulties.includes("hard")),b.$set(fe),(!ee||_[0]&512)&&we(A,u[9]),(!ee||_[0]&1024)&&we(X,u[10]),(!ee||_[0]&40&&C!==(C=`/game/${(it=u[5])==null?void 0:it.id}/${(rt=u[5])==null?void 0:rt.artists[0].name}&${(ot=u[5])==null?void 0:ot.name}/${u[13][u[3]].toLowerCase()}`))&&D(U,"href",C)},i:function(u){if(!ee){for(let _=0;_<se.length;_+=1)w(T[_]);for(let _=0;_<ie.length;_+=1)w(j[_]);w(a.$$.fragment,u),w(m.$$.fragment,u),w(b.$$.fragment,u),ee=!0}},o:function(u){T=T.filter(Boolean);for(let _=0;_<T.length;_+=1)B(T[_]);j=j.filter(Boolean);for(let _=0;_<j.length;_+=1)B(j[_]);B(a.$$.fragment,u),B(m.$$.fragment,u),B(b.$$.fragment,u),ee=!1},d:function(u){u&&(y(e),y(r),y(o),y(f),y(l),y(h),y(S),y(R),y(le)),De(T,u),De(j,u),ue(a),ue(m),ue(b)}};return Q("SvelteRegisterBlock",{block:I,id:Ct.name,type:"slot",source:"(170:0) <Modal bind:showModal>",ctx:t}),I}function Vt(t){var o;let e,n,i=((o=t[5])==null?void 0:o.name)+"",s;const r={c:function(){e=q("h2"),n=q("p"),s=pe(i),this.h()},l:function(f){e=O(f,"H2",{slot:!0});var l=F(e);n=O(l,"P",{class:!0});var a=F(n);s=ye(a,i),a.forEach(y),l.forEach(y),this.h()},h:function(){D(n,"class","text-gray-400 text-center font-bold text-lg"),H(n,L,172,2,5116),D(e,"slot","header"),H(e,L,170,1,5062)},m:function(f,l){G(f,e,l),M(e,n),M(n,s)},p:function(f,l){var a;l[0]&32&&i!==(i=((a=f[5])==null?void 0:a.name)+"")&&we(s,i)},d:function(f){f&&y(e)}};return Q("SvelteRegisterBlock",{block:r,id:Vt.name,type:"slot",source:"(171:1) ",ctx:t}),r}function Xe(t){let e,n,i,s,r,o,c,f,l;const a=[Pt,Rt],g=[];function m(S,p){return S[0]&&S[0].length>1?0:1}s=m(t),r=g[s]=a[s](t);function k(S){t[25](S)}let b={$$slots:{header:[Vt],default:[Ct]},$$scope:{ctx:t}};t[4]!==void 0&&(b.showModal=t[4]),c=new Et({props:b,$$inline:!0}),Ht.push(()=>Kt(c,"showModal",k));const h={c:function(){e=q("h2"),n=pe(t[1]),i=Z(),r.c(),o=Z(),oe(c.$$.fragment),this.h()},l:function(p){e=O(p,"H2",{class:!0});var A=F(e);n=ye(A,t[1]),A.forEach(y),i=x(p),r.l(p),o=x(p),ce(c.$$.fragment,p),this.h()},h:function(){D(e,"class","my-2 mt-10 font-bold text-2xl"),H(e,L,106,0,2859)},m:function(p,A){G(p,e,A),M(e,n),G(p,i,A),g[s].m(p,A),G(p,o,A),ae(c,p,A),l=!0},p:function(p,A){(!l||A[0]&2)&&we(n,p[1]);let J=s;s=m(p),s===J?g[s].p(p,A):(de(),B(g[J],1,1,()=>{g[J]=null}),he(),r=g[s],r?r.p(p,A):(r=g[s]=a[s](p),r.c()),w(r,1),r.m(o.parentNode,o));const E={};A[0]&1836|A[1]&64&&(E.$$scope={dirty:A,ctx:p}),!f&&A[0]&16&&(f=!0,E.showModal=p[4],zt(()=>f=!1)),c.$set(E)},i:function(p){l||(w(r),w(c.$$.fragment,p),l=!0)},o:function(p){B(r),B(c.$$.fragment,p),l=!1},d:function(p){p&&(y(e),y(i),y(o)),g[s].d(p),ue(c,p)}};return Q("SvelteRegisterBlock",{block:h,id:Xe.name,type:"component",source:"",ctx:t}),h}const Ye="bg-gradient-to-b from-yellow-300 to-yellow-500 ";function Ut(t,e,n){let i;Gt(Oe,"user"),Lt(t,Oe,d=>n(26,i=d));let{$$slots:s={},$$scope:r}=e;At("TrackSearchResult",s,[]);let{results:o}=e,{title:c=""}=e,{isAlbum:f=!1}=e,{albumArt:l=""}=e,a=!1,g,m=!1,k=null,b={};const h=f?"border-none my-5 pl-3":"",S=(d,I)=>{if(k)if(I===g){k.pause(),n(7,k=null),n(6,m=!1);return}else k.pause();const v=new Audio(d);v.play(),n(7,k=v),n(6,m=!0),n(5,g=I),v.onended=()=>{n(6,m=!1)}},p={1:"Easy",2:"Medium",3:"Hard"};at(()=>{const d=i.uid,I=ut(ft,"playedSongs"),v=dt(I,ht("userId","==",d));mt(v,V=>{V.forEach(W=>{const Y=W.data().trackId,$=W.data().difficulty,me=1;b[Y]||n(8,b[Y]={stars:0,playedDifficulties:[]},b),n(8,b[Y].stars+=me,b),b[Y].playedDifficulties.push($)})})});let A=1,J="",E="";const X=d=>{n(5,g=d),n(4,a=!a)};t.$$.on_mount.push(function(){o===void 0&&!("results"in e||t.$$.bound[t.$$.props.results])&&console.warn("<TrackSearchResult> was created without expected prop 'results'")});const R=["results","title","isAlbum","albumArt"];Object.keys(e).forEach(d=>{!~R.indexOf(d)&&d.slice(0,2)!=="$$"&&d!=="slot"&&console.warn(`<TrackSearchResult> was created with unknown prop '${d}'`)});function le(d){Me.call(this,t,d)}function U(d){Me.call(this,t,d)}function z(d){Me.call(this,t,d)}const C=d=>S(d.preview_url,d),ee=d=>S(d.preview_url,d),se=d=>X(d),T=()=>n(3,A=1),ve=()=>n(3,A=2),ie=()=>n(3,A=3);function j(d){a=d,n(4,a)}return t.$$set=d=>{"results"in d&&n(0,o=d.results),"title"in d&&n(1,c=d.title),"isAlbum"in d&&n(15,f=d.isAlbum),"albumArt"in d&&n(2,l=d.albumArt)},t.$capture_state=()=>({onMount:at,DifficultyBox:Ce,Modal:Et,Icon:ge,db:ft,user:Oe,collection:ut,onSnapshot:mt,query:dt,where:ht,results:o,title:c,isAlbum:f,albumArt:l,showModal:a,selectedTrack:g,audioIsPlaying:m,currentlyPlayingAudio:k,songStars:b,albumClasses:h,threeStarClasses:Ye,playAudio:S,difficulties:p,selectedDifficulty:A,gameTitle:J,gameDescription:E,toggleModal:X,$user:i}),t.$inject_state=d=>{"results"in d&&n(0,o=d.results),"title"in d&&n(1,c=d.title),"isAlbum"in d&&n(15,f=d.isAlbum),"albumArt"in d&&n(2,l=d.albumArt),"showModal"in d&&n(4,a=d.showModal),"selectedTrack"in d&&n(5,g=d.selectedTrack),"audioIsPlaying"in d&&n(6,m=d.audioIsPlaying),"currentlyPlayingAudio"in d&&n(7,k=d.currentlyPlayingAudio),"songStars"in d&&n(8,b=d.songStars),"selectedDifficulty"in d&&n(3,A=d.selectedDifficulty),"gameTitle"in d&&n(9,J=d.gameTitle),"gameDescription"in d&&n(10,E=d.gameDescription)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),t.$$.update=()=>{t.$$.dirty[0]&8&&(A===1?(n(9,J="Vertaal de zin"),n(10,E="Vertaal de songteksten naar het Engels")):A===2?(n(9,J="Vertaal de zin (reverse)"),n(10,E="Vertaal de songteksten naar het Spaans!")):A===3&&(n(9,J="Missing Word"),n(10,E="Raad het ontbrekend woord!")))},[o,c,l,A,a,g,m,k,b,J,E,h,S,p,X,f,le,U,z,C,ee,se,T,ve,ie,j]}class en extends Dt{constructor(e){super(e),St(this,e,Ut,Xe,wt,{results:0,title:1,isAlbum:15,albumArt:2},null,[-1,-1]),Q("SvelteRegisterComponent",{component:this,tagName:"TrackSearchResult",options:e,id:Xe.name})}get results(){throw new Error("<TrackSearchResult>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set results(e){throw new Error("<TrackSearchResult>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get title(){throw new Error("<TrackSearchResult>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set title(e){throw new Error("<TrackSearchResult>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get isAlbum(){throw new Error("<TrackSearchResult>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set isAlbum(e){throw new Error("<TrackSearchResult>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}get albumArt(){throw new Error("<TrackSearchResult>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set albumArt(e){throw new Error("<TrackSearchResult>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{en as T,xt as h,$t as u};