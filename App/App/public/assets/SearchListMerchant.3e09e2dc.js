import{Q as d}from"./QImg.4e876ad6.js";import{_ as u,p as a,S as r,f as s,s as n,a9 as m,R as t,X as i,F as o,U as _,a2 as f,aw as h,a3 as p}from"./index.30bcee2d.js";import{Q as g}from"./QChip.9a5e9391.js";import{Q as y}from"./QItemLabel.b935a34d.js";const k={name:"SearchListMerchant",props:["items","cuisine"],setup(){return{}}},x={class:"font13 text-weight-bold no-margin line-normal"},v={class:"text-grey ellipsis-2-lines font12 line-normal"},w={class:"row items-center justify-between"},Q={class:"text-dark"},S={class:"font11 text-grey"};function b(l,z,e,C,L,N){return a(),r(o,null,[s(m,{avatar:""},{default:n(()=>[s(d,{src:e.items.url_logo,lazy:"",fit:"cover",style:{height:"80px",width:"80px"},class:"radius8","spinner-color":"amber","spinner-size":"sm"},null,8,["src"])]),_:1}),s(m,null,{default:n(()=>[s(y,null,{default:n(()=>[t("div",x,i(e.items.restaurant_name),1),t("div",v,[(a(!0),r(o,null,_(e.items.cuisine_group,c=>(a(),r(o,{key:c},[e.cuisine[c]?(a(),r(o,{key:0},[f(i(e.cuisine[c].name)+", ",1)],64)):h("",!0)],64))),128))]),t("div",w,[s(g,{size:"sm",color:"mygrey"},{default:n(()=>[t("span",Q,i(l.$t("Restaurant")),1)]),_:1}),t("div",S,[t("span",{class:p({"text-white":l.$q.dark.mode,"text-dark":!l.$q.dark.mode})},i(e.items.distance_pretty),3)])])]),_:1})]),_:1})],64)}var F=u(k,[["render",b]]);export{F as default};