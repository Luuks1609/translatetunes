import{s as ye,o as ce,e as le,g as p,l as Q,h as _,i as k,m as U,j as Ee,k as v,w as N,c as H,d as W,C as ie,A as Pe}from"../chunks/scheduler.635b56cd.js";import{h as ue,T as ve,u as Ie}from"../chunks/TrackSearchResult.6780c042.js";import{g as je}from"../chunks/globals.7f7f1b26.js";import{S as De,i as Se,d as O,v as Ae,a as z,b as X,t as Y,e as h,n as m,s as Z,j as de,k as me,g as f,m as fe,q as Ce,l as he}from"../chunks/index.1e81eea3.js";import{c as pe}from"../chunks/utils.808755f5.js";import{I as ge}from"../chunks/Icon.20649865.js";const{console:_e}=je,g="src/routes/(protected)/album/[id]/+page.svelte";function be(a){let e,n=a[4].message+"",l;const t={c:function(){e=p("p"),l=Q(n),this.h()},l:function(o){e=_(o,"P",{style:!0});var r=k(e);l=U(r,n),r.forEach(h),this.h()},h:function(){Ee(e,"color","red"),v(e,g,58,1,1761)},m:function(o,r){z(o,e,r),m(e,l)},p:function(o,r){r&2&&n!==(n=o[4].message+"")&&Z(l,n)},i:N,o:N,d:function(o){o&&h(e)}};return O("SvelteRegisterBlock",{block:t,id:be.name,type:"catch",source:"(58:0) {:catch error}",ctx:a}),t}function ke(a){var ae,ne,se,oe;let e,n,l,t,s,o,r,c,y,u,F,I,w,j,C=((ae=a[0])==null?void 0:ae.name)+"",T,J,D,R=((ne=a[0])==null?void 0:ne.artists[0].name)+"",G,K,E,P,L,ee;o=new ge({props:{icon:"bi:chevron-left",class:"text-white ",height:"18"},$$inline:!0}),E=new ve({props:{results:(se=a[0])==null?void 0:se.tracks.items,isAlbum:!0,albumArt:(oe=a[0])==null?void 0:oe.images[0].url},$$inline:!0});const te={c:function(){e=p("div"),n=p("div"),l=p("div"),t=p("div"),s=p("div"),de(o.$$.fragment),r=H(),c=p("img"),F=H(),I=p("div"),w=p("div"),j=p("h1"),T=Q(C),J=H(),D=p("p"),G=Q(R),K=H(),de(E.$$.fragment),this.h()},l:function(i){e=_(i,"DIV",{class:!0});var d=k(e);n=_(d,"DIV",{class:!0});var b=k(n);l=_(b,"DIV",{class:!0});var V=k(l);t=_(V,"DIV",{class:!0});var $=k(t);s=_($,"DIV",{class:!0});var B=k(s);me(o.$$.fragment,B),B.forEach(h),$.forEach(h),V.forEach(h),r=W(b),c=_(b,"IMG",{class:!0,src:!0,alt:!0}),F=W(b),I=_(b,"DIV",{class:!0});var q=k(I);w=_(q,"DIV",{class:!0});var A=k(w);j=_(A,"H1",{class:!0});var M=k(j);T=U(M,C),M.forEach(h),J=W(A),D=_(A,"P",{class:!0});var re=k(D);G=U(re,R),re.forEach(h),A.forEach(h),q.forEach(h),b.forEach(h),K=W(d),me(E.$$.fragment,d),d.forEach(h),this.h()},h:function(){var i,d;f(s,"class","bg-dark-gray w-fit rounded-lg border border-b-4 border-gray-700 p-3 px-3 cursor-pointer"),v(s,g,38,5,959),f(t,"class","p-4"),v(t,g,35,4,810),f(l,"class","absolute top-0 left-0 right-0"),v(l,g,34,3,762),f(c,"class","w-full h-full object-cover"),ie(c.src,y=(i=a[0])==null?void 0:i.images[0].url)||f(c,"src",y),f(c,"alt",u=(d=a[0])==null?void 0:d.name.name),v(c,g,46,3,1217),f(j,"class","text-4xl font-bold"),v(j,g,50,5,1502),f(D,"class","text-lg font-medium"),v(D,g,51,5,1556),f(w,"class","p-4"),v(w,g,49,4,1479),f(I,"class","absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black text-white"),v(I,g,48,3,1389),f(n,"class","relative w-full h-1/3"),v(n,g,33,2,723),f(e,"class","relative w-full min-h-screen"),v(e,g,31,1,628)},m:function(i,d){z(i,e,d),m(e,n),m(n,l),m(l,t),m(t,s),fe(o,s,null),m(n,r),m(n,c),m(n,F),m(n,I),m(I,w),m(w,j),m(j,T),m(w,J),m(w,D),m(D,G),m(e,K),fe(E,e,null),P=!0,L||(ee=Ce(s,"click",a[2],!1,!1,!1,!1),L=!0)},p:function(i,d){var V,$,B,q,A,M;(!P||d&2&&!ie(c.src,y=(V=i[0])==null?void 0:V.images[0].url))&&f(c,"src",y),(!P||d&2&&u!==(u=($=i[0])==null?void 0:$.name.name))&&f(c,"alt",u),(!P||d&2)&&C!==(C=((B=i[0])==null?void 0:B.name)+"")&&Z(T,C),(!P||d&2)&&R!==(R=((q=i[0])==null?void 0:q.artists[0].name)+"")&&Z(G,R);const b={};d&2&&(b.results=(A=i[0])==null?void 0:A.tracks.items),d&2&&(b.albumArt=(M=i[0])==null?void 0:M.images[0].url),E.$set(b)},i:function(i){P||(X(o.$$.fragment,i),X(E.$$.fragment,i),P=!0)},o:function(i){Y(o.$$.fragment,i),Y(E.$$.fragment,i),P=!1},d:function(i){i&&h(e),he(o),he(E),L=!1,ee()}};return O("SvelteRegisterBlock",{block:te,id:ke.name,type:"then",source:"(31:0) {:then data}",ctx:a}),te}function we(a){let e,n="...waiting";const l={c:function(){e=p("p"),e.textContent=n,this.h()},l:function(s){e=_(s,"P",{"data-svelte-h":!0}),Pe(e)!=="svelte-mv6tav"&&(e.textContent=n),this.h()},h:function(){v(e,g,29,1,596)},m:function(s,o){z(s,e,o)},p:N,i:N,o:N,d:function(s){s&&h(e)}};return O("SvelteRegisterBlock",{block:l,id:we.name,type:"pending",source:"(29:16)   <p>...waiting</p> {:then data}",ctx:a}),l}function x(a){let e,n,l,t={ctx:a,current:null,token:null,hasCatch:!0,pending:we,then:ke,catch:be,value:0,error:4,blocks:[,,,]};ue(n=a[1],t);const s={c:function(){e=le(),t.block.c()},l:function(r){e=le(),t.block.l(r)},m:function(r,c){z(r,e,c),t.block.m(r,t.anchor=c),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p:function(r,[c]){a=r,t.ctx=a,c&2&&n!==(n=a[1])&&ue(n,t)||Ie(t,a,c)},i:function(r){l||(X(t.block),l=!0)},o:function(r){for(let c=0;c<3;c+=1){const y=t.blocks[c];Y(y)}l=!1},d:function(r){r&&h(e),t.block.d(r),t.token=null,t=null}};return O("SvelteRegisterBlock",{block:s,id:x.name,type:"component",source:"",ctx:a}),s}function Re(a,e,n){let{$$slots:l={},$$scope:t}=e;Ae("Page",l,[]);let{data:s}=e;const o=async()=>{try{return await pe(`https://api.spotify.com/v1/albums/${s.props.albumId}`)}catch(u){console.error(u)}};let r=o();ce(()=>{n(1,r=o())}),a.$$.on_mount.push(function(){s===void 0&&!("data"in e||a.$$.bound[a.$$.props.data])&&_e.warn("<Page> was created without expected prop 'data'")});const c=["data"];Object.keys(e).forEach(u=>{!~c.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&_e.warn(`<Page> was created with unknown prop '${u}'`)});const y=()=>history.back();return a.$$set=u=>{"data"in u&&n(0,s=u.data)},a.$capture_state=()=>({TrackSearchResult:ve,callWithRetry:pe,Icon:ge,onMount:ce,data:s,getAlbum:o,promise:r}),a.$inject_state=u=>{"data"in u&&n(0,s=u.data),"promise"in u&&n(1,r=u.promise)},e&&"$$inject"in e&&a.$inject_state(e.$$inject),[s,r,y]}class Oe extends De{constructor(e){super(e),Se(this,e,Re,x,ye,{data:0}),O("SvelteRegisterComponent",{component:this,tagName:"Page",options:e,id:x.name})}get data(){throw new Error("<Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}set data(e){throw new Error("<Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'")}}export{Oe as component};