import{_ as u,k as p,l as d,n,p as l,q as s,s as o,f as e,a3 as f,a2 as b,X as k,aw as _,t as Q}from"./index.30bcee2d.js";import{Q as t}from"./QRouteTab.33bc66f3.js";import{Q as C}from"./QBadge.787b59b6.js";import{Q as h}from"./QTabs.3876ad2a.js";import{Q as v}from"./QFooter.f2cd3c2a.js";import{Q as $,a as w}from"./QLayout.0b142fb3.js";import{u as g}from"./CartStore.fe06611f.js";import"./QResizeObserver.3c3b4a7a.js";import"./rtl.b51694b1.js";import"./QScrollObserver.e13608c6.js";const y=p({name:"NotopnavLayout",data(){return{tab:"home"}},components:{QuickTrack:d(()=>Q(()=>import("./QuickTrack.2ebdc10d.js"),["assets/QuickTrack.2ebdc10d.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QBadge.787b59b6.js","assets/QLinearProgress.c25688c9.js"]))},setup(){return{CartStore:g()}}});function S(a,r,T,V,L,N){const m=n("router-view"),c=n("QuickTrack");return l(),s($,{view:"lHh Lpr lFf"},{default:o(()=>[e(v,{bordered:"",class:"bg-white text-dark"},{default:o(()=>[e(h,{modelValue:a.tab,"onUpdate:modelValue":r[0]||(r[0]=i=>a.tab=i),dense:"","indicator-color":"transparent","active-color":"secondary",class:f({"bg-black text-white":a.$q.dark.mode,"text-dark":!a.$q.dark.mode})},{default:o(()=>[e(t,{name:"home",icon:"las la-home",label:a.$t("Home"),"no-caps":"",to:"/home"},null,8,["label"]),e(t,{name:"browse",icon:"search",label:a.$t("Search"),"no-caps":"",to:"/search"},null,8,["label"]),e(t,{name:"cart",icon:"las la-shopping-bag",label:a.$t("Cart"),"no-caps":"",to:"/cart"},{default:o(()=>[a.CartStore.hasItem?(l(),s(C,{key:0,color:"yellow-9",floating:"",rounded:""},{default:o(()=>[b(k(a.CartStore.items_count),1)]),_:1})):_("",!0)]),_:1},8,["label"]),e(t,{name:"account",icon:"las la-user-alt",label:a.$t("Account"),"no-caps":"",to:"/account-menu"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),e(w,null,{default:o(()=>[e(m)]),_:1}),e(c,{ref:"quick_track"},null,512)]),_:1})}var z=u(y,[["render",S]]);export{z as default};