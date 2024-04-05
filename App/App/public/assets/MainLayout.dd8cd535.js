import{av as q,t as d,_ as P,k as A,l as c,P as I,m as o,as as S,aL as V,n as l,p as h,q as _,s as r,f as t,a3 as p,V as v,R as g,ap as T,X as D,aw as y,a2 as E}from"./index.30bcee2d.js";import{Q as R}from"./QToolbar.8b90f7d3.js";import{Q as L}from"./QHeader.b4bada8e.js";import{Q as u}from"./QRouteTab.33bc66f3.js";import{Q as B}from"./QBadge.787b59b6.js";import{Q as N}from"./QTabs.3876ad2a.js";import{Q as O}from"./QFooter.f2cd3c2a.js";import{Q as M,a as F}from"./QLayout.0b142fb3.js";import{u as H}from"./PlaceStore.c2f2bb5a.js";import{u as z}from"./DeliverySched.7aa22819.js";import{u as U}from"./CartStore.fe06611f.js";import{u as j}from"./ClientStore.5dffc3bb.js";import"./QResizeObserver.3c3b4a7a.js";import"./rtl.b51694b1.js";import"./QScrollObserver.e13608c6.js";const m=q("Device",{web:()=>d(()=>import("./web.9d1417a2.js"),["assets/web.9d1417a2.js","assets/index.30bcee2d.js","assets/index.aba08127.css"]).then(e=>new e.DeviceWeb)}),W=A({name:"MainLayout",components:{DeliveryDetails:c(()=>d(()=>import("./DeliveryDetails.f2af7b21.js"),["assets/DeliveryDetails.f2af7b21.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QBtnToggle.c946cab5.js","assets/QBtnGroup.d73b976b.js","assets/QItemLabel.b935a34d.js","assets/QList.d8ad41f7.js","assets/PlaceStore.c2f2bb5a.js","assets/DeliverySched.7aa22819.js"])),DeliverySched:c(()=>d(()=>import("./DeliverySched.d1de5213.js"),["assets/DeliverySched.d1de5213.js","assets/QBtnToggle.c946cab5.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QBtnGroup.d73b976b.js","assets/QSelect.a5140148.js","assets/QChip.9a5e9391.js","assets/QItemLabel.b935a34d.js","assets/QMenu.3f2e45b1.js","assets/selection.c88e3f6c.js","assets/rtl.b51694b1.js","assets/format.2bc25e5f.js","assets/DeliverySched.7aa22819.js"])),NotiButton:c(()=>d(()=>import("./NotiButton.df7c462f.js"),["assets/NotiButton.df7c462f.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QBadge.787b59b6.js"])),QuickTrack:c(()=>d(()=>import("./QuickTrack.2ebdc10d.js"),["assets/QuickTrack.2ebdc10d.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QBadge.787b59b6.js","assets/QLinearProgress.c25688c9.js"])),PushDialog:c(()=>d(()=>import("./PushDialog.91e91c0b.js"),["assets/PushDialog.91e91c0b.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QSpace.274cde1f.js"]))},setup(){const e=H(),a=z(),s=U(),i=I(),n=j();return{PlaceStore:e,deliveryschedStore:a,CartStore:s,DataStore:i,ClientStore:n}},data(){return{tab:"home",dialog_location:!1,dialog_deliverytime:!1,transaction_type:"delivery",location_options:"share_location",delivery_time_options:"",back_url:"/home?refresh=1"}},created(){this.$q.capacitor&&this.DeviceInit()},mounted(){this.initData()},watch:{DataStore:{immediate:!1,deep:!0,handler(e,a){o.empty(e.appversion_data)||Object.keys(e.appversion_data).length>0&&this.checkAppVersion()}}},methods:{initData(){this.PlaceStore.getPlace(),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"),0),this.CartStore.hadItem()||this.CartStore.getCount()},showSched(){this.$refs.delivery_details.showModal(!1),this.$refs.delivery_sched.showSched(!0)},afterSavetrans(){console.log("afterSavetrans"),this.deliveryschedStore.getDeliverySched(o.getStorage("cart_uuid"),0)},afterSavetranstype(e){console.log("afterSavetranstype")},DeviceInit(){const e=o.getSession("device_token"),a=o.getSession("device_registered"),s=o.getSession("device_registered_auth");S.authenticated()?s!==1&&m.getId().then(i=>{m.getInfo().then(n=>{this.updateDevice(e,i.identifier,n.platform)})}):a!==1&&m.getId().then(i=>{m.getInfo().then(n=>{this.registerDevice(e,i.identifier,n.platform)})}),this.subsribeDevice()},registerDevice(e,a,s){o.registerDevice(e,a,s).then(i=>{o.setSession("device_registered",1)})},updateDevice(e,a,s){o.updateDevice(e,a,s).then(i=>{o.setSession("device_registered_auth",1)})},revealStateChange(e){this.deliveryschedStore.main_layout_header=e},subsribeDevice(){let e=S.getUser();e&&!this.ClientStore.push_off&&V.subscribeTo({topic:e.client_uuid}).then(a=>{this.ClientStore.push_notifications=!0}).catch(a=>{this.ClientStore.push_notifications=!1})},checkAppVersion(){this.$q.capacitor&&(this.$q.platform.is.android&&this.DataStore.appversion_data.mobile_app_version_android>0?this.DataStore.appversion_data.mobile_app_version_android>this.DataStore.app_version&&this.$router.replace("/update-app"):this.$q.platform.is.ios&&this.DataStore.appversion_data.mobile_app_version_ios>0&&this.DataStore.appversion_data.mobile_app_version_ios>this.DataStore.app_version&&this.$router.replace("/update-app"))}}}),X={class:"fit row items-center"};function G(e,a,s,i,n,J){const b=l("NotiButton"),k=l("router-view"),$=l("DeliveryDetails"),w=l("DeliverySched"),C=l("QuickTrack"),Q=l("PushDialog");return h(),_(M,{view:"lHh Lpr lFf"},{default:r(()=>[t(L,{reveal:"",class:"bg-white",onReveal:e.revealStateChange},{default:r(()=>[t(R,{class:p(["top-toolbar row",{"bg-mydark text-white":e.$q.dark.mode,"text-primary":!e.$q.dark.mode}]),dense:""},{default:r(()=>[t(v,{to:"/account-menu",flat:"",dense:"",icon:"las la-bars",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(v,{onClick:a[0]||(a[0]=f=>this.$refs.delivery_details.showModal(!0)),unelevated:"",color:e.$q.dark.mode?"grey600":"white","text-color":e.$q.dark.mode?"grey300":"dark",dense:"","no-caps":"",class:p({"col-8":e.DataStore.enabled_language,"col-9":!e.DataStore.enabled_language})},{default:r(()=>[g("div",X,[t(T,{name:"las la-map-marker-alt",color:"grey",size:"15px"}),g("div",{class:p(["q-ml-xs font13 ellipsis col-10",{"text-grey300":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},D(e.PlaceStore.address),3)])]),_:1},8,["color","text-color","class"]),e.DataStore.enabled_language?(h(),_(v,{key:0,to:"/account/language",flat:"",round:"",dense:"",icon:"las la-globe",class:"q-mr-smx",color:e.$q.dark.mode?"white":"grey"},null,8,["color"])):y("",!0),t(b)]),_:1},8,["class"])]),_:1},8,["onReveal"]),t(O,{bordered:"",class:"bg-white text-dark"},{default:r(()=>[t(N,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=f=>e.tab=f),dense:"","indicator-color":"transparent","active-color":"secondary",class:p({"bg-mydark text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode})},{default:r(()=>[t(u,{name:"home",icon:"las la-home",label:e.$t("Home"),"no-caps":"",to:"/home"},null,8,["label"]),t(u,{name:"browse",icon:"search",label:e.$t("Search"),"no-caps":"",to:"/search"},null,8,["label"]),t(u,{name:"cart",icon:"las la-shopping-bag",label:e.$t("Cart"),"no-caps":"",to:"/cart"},{default:r(()=>[e.CartStore.hasItem?(h(),_(B,{key:0,color:"secondary",floating:"",rounded:""},{default:r(()=>[E(D(e.CartStore.items_count),1)]),_:1})):y("",!0)]),_:1},8,["label"]),t(u,{name:"account",icon:"las la-user-alt",label:e.$t("Account"),"no-caps":"",to:"/account-menu"},null,8,["label"])]),_:1},8,["modelValue","class"])]),_:1}),t(F,null,{default:r(()=>[t(k)]),_:1}),t($,{ref:"delivery_details",back_url:e.back_url,onShowSched:e.showSched,onAfterSavetrans:e.afterSavetrans,onAfterSavetranstype:e.afterSavetranstype},null,8,["back_url","onShowSched","onAfterSavetrans","onAfterSavetranstype"]),t(w,{ref:"delivery_sched",slug:"0",onAfterSavetrans:e.afterSavetrans},null,8,["onAfterSavetrans"]),t(C,{ref:"quick_track"},null,512),t(Q,{ref:"push_dialog"},null,512)]),_:1})}var pe=P(W,[["render",G]]);export{pe as default};
