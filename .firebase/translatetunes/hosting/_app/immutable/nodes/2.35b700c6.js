import{s as b,v as p,r as _,n as k,u as v,p as w,q as y}from"../chunks/scheduler.635b56cd.js";import{S,i as C,d as m,v as D,j as L,k as A,m as R,b as d,t as $,l as j}from"../chunks/index.1e81eea3.js";import{A as h}from"../chunks/AuthCheck.937e7621.js";import{u as i,a as l}from"../chunks/firebase.a6fa023d.js";/* empty css                    */function g(s){let t;const a=s[0].default,n=k(a,s,s[1],null),r={c:function(){n&&n.c()},l:function(e){n&&n.l(e)},m:function(e,c){n&&n.m(e,c),t=!0},p:function(e,c){n&&n.p&&(!t||c&2)&&v(n,a,e,e[1],t?y(a,e[1],c,null):w(e[1]),null)},i:function(e){t||(d(n,e),t=!0)},o:function(e){$(n,e),t=!1},d:function(e){n&&n.d(e)}};return m("SvelteRegisterBlock",{block:r,id:g.name,type:"slot",source:"(10:0) <AuthCheck>",ctx:s}),r}function f(s){let t,a;t=new h({props:{$$slots:{default:[g]},$$scope:{ctx:s}},$$inline:!0});const n={c:function(){L(t.$$.fragment)},l:function(o){A(t.$$.fragment,o)},m:function(o,e){R(t,o,e),a=!0},p:function(o,[e]){const c={};e&2&&(c.$$scope={dirty:e,ctx:o}),t.$set(c)},i:function(o){a||(d(t.$$.fragment,o),a=!0)},o:function(o){$(t.$$.fragment,o),a=!1},d:function(o){j(t,o)}};return m("SvelteRegisterBlock",{block:n,id:f.name,type:"component",source:"",ctx:s}),n}function q(s,t,a){let n,r;p(i,"userData"),_(s,i,u=>a(2,n=u)),p(l,"user"),_(s,l,u=>a(3,r=u));let{$$slots:o={},$$scope:e}=t;D("Layout",o,["default"]);const c=[];return Object.keys(t).forEach(u=>{!~c.indexOf(u)&&u.slice(0,2)!=="$$"&&u!=="slot"&&console.warn(`<Layout> was created with unknown prop '${u}'`)}),s.$$set=u=>{"$$scope"in u&&a(1,e=u.$$scope)},s.$capture_state=()=>({AuthCheck:h,userData:i,user:l,$userData:n,$user:r}),[o,e]}class F extends S{constructor(t){super(t),C(this,t,q,f,b,{}),m("SvelteRegisterComponent",{component:this,tagName:"Layout",options:t,id:f.name})}}export{F as component};