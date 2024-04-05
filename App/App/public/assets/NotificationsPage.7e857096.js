import{af as V,ag as b,J as I,ah as B,ai as v,am as q,an as C,ao as L,_ as z,m as g,p as i,S as u,f as r,s,q as f,aw as _,F as m,a3 as w,V as y,a2 as Q,X as p,U as P,R as S,a6 as H,a8 as $,a9 as T,bA as j,aa as x}from"./index.30bcee2d.js";import{Q as O}from"./QToolbarTitle.80059bbe.js";import{Q as R}from"./QToolbar.8b90f7d3.js";import{Q as U}from"./QHeader.b4bada8e.js";import{Q as A}from"./QItemLabel.b935a34d.js";import{Q as F}from"./QBadge.787b59b6.js";import{Q as M}from"./QSlideItem.4ba6d61d.js";import{Q as E}from"./QList.d8ad41f7.js";import{Q as J}from"./QInnerLoading.1dad5a80.js";import{Q as X}from"./QSpinnerDots.3f00e075.js";import{Q as G}from"./QInfiniteScroll.c9142728.js";import{Q as K}from"./QImg.4e876ad6.js";import{Q as W}from"./QPageScroller.8d9fce0a.js";import{Q as Y}from"./QPage.f04658ef.js";import{Q as Z}from"./QPullToRefresh.e8308158.js";import{Q as ee}from"./QTab.9fbd659e.js";import{Q as te}from"./QTabs.3876ad2a.js";import{Q as oe}from"./QFooter.f2cd3c2a.js";import{c as D}from"./selection.c88e3f6c.js";import{u as ae}from"./CartStore.fe06611f.js";import"./QResizeObserver.3c3b4a7a.js";import"./use-cache.b0833c75.js";import"./use-page-sticky.73584e0a.js";import"./touch.3df10340.js";import"./format.2bc25e5f.js";import"./rtl.b51694b1.js";var ie=V({name:"touch-hold",beforeMount(e,o){const{modifiers:d}=o;if(d.mouse!==!0&&b.has.touch!==!0)return;const t={handler:o.value,noop:I,mouseStart(a){typeof t.handler=="function"&&B(a)===!0&&(v(t,"temp",[[document,"mousemove","move","passiveCapture"],[document,"click","end","notPassiveCapture"]]),t.start(a,!0))},touchStart(a){if(a.target!==void 0&&typeof t.handler=="function"){const n=a.target;v(t,"temp",[[n,"touchmove","move","passiveCapture"],[n,"touchcancel","end","notPassiveCapture"],[n,"touchend","end","notPassiveCapture"]]),t.start(a)}},start(a,n){t.origin=q(a);const h=Date.now();b.is.mobile===!0&&(document.body.classList.add("non-selectable"),D(),t.styleCleanup=c=>{t.styleCleanup=void 0;const k=()=>{document.body.classList.remove("non-selectable")};c===!0?(D(),setTimeout(k,10)):k()}),t.triggered=!1,t.sensitivity=n===!0?t.mouseSensitivity:t.touchSensitivity,t.timer=setTimeout(()=>{t.timer=void 0,D(),t.triggered=!0,t.handler({evt:a,touch:n!==!0,mouse:n===!0,position:t.origin,duration:Date.now()-h})},t.duration)},move(a){const{top:n,left:h}=q(a);t.timer!==void 0&&(Math.abs(h-t.origin.left)>=t.sensitivity||Math.abs(n-t.origin.top)>=t.sensitivity)&&(clearTimeout(t.timer),t.timer=void 0)},end(a){C(t,"temp"),t.styleCleanup!==void 0&&t.styleCleanup(t.triggered),t.triggered===!0?a!==void 0&&L(a):t.timer!==void 0&&(clearTimeout(t.timer),t.timer=void 0)}},l=[600,5,7];if(typeof o.arg=="string"&&o.arg.length!==0&&o.arg.split(":").forEach((a,n)=>{const h=parseInt(a,10);h&&(l[n]=h)}),[t.duration,t.touchSensitivity,t.mouseSensitivity]=l,e.__qtouchhold=t,d.mouse===!0){const a=d.mouseCapture===!0||d.mousecapture===!0?"Capture":"";v(t,"main",[[e,"mousedown","mouseStart",`passive${a}`]])}b.has.touch===!0&&v(t,"main",[[e,"touchstart","touchStart",`passive${d.capture===!0?"Capture":""}`],[e,"touchend","noop","notPassiveCapture"]])},updated(e,o){const d=e.__qtouchhold;d!==void 0&&o.oldValue!==o.value&&(typeof o.value!="function"&&d.end(),d.handler=o.value)},beforeUnmount(e){const o=e.__qtouchhold;o!==void 0&&(C(o,"main"),C(o,"temp"),o.timer!==void 0&&clearTimeout(o.timer),o.styleCleanup!==void 0&&o.styleCleanup(),delete e.__qtouchhold)}});const re={name:"NotificationsPage",data(){return{loading:!0,data:[],page:0,data_done:!1,is_refresh:void 0,hold:!1,notification_uuids:[],tab:"delete"}},setup(){return{CartStore:ae()}},watch:{hold(e,o){e||(this.notification_uuids=[])}},computed:{hasData(){return Object.keys(this.data).length>0},itemToDelete(){return Object.keys(this.notification_uuids).length}},methods:{refresh(e){this.resetPagination(),this.is_refresh=e},getNotifications(e,o){this.loading=!0,g.getNotification(e).then(d=>{this.page=e,this.data.push(d.details.data),console.log(this.data)}).catch(d=>{this.data_done=!0,this.$refs.nscroll.stop()}).then(d=>{o(),this.loading=!1,g.empty(this.is_refresh)||this.is_refresh()})},resetPagination(){this.page=0,this.data=[],this.$refs.nscroll.reset(),this.$refs.nscroll.resume(),this.$refs.nscroll.trigger()},deleteNotification(e,o,d){this.data[e].splice(o,1),g.deleteNotification(d.notification_uuid).then(t=>{})},handleHold(e){this.hold=!0},resetHold(){this.hold=!1,this.notification_uuids=[]},deleteAllNotification(){g.fetchDataByToken("deleteAllNotification",{notification_uuids:this.notification_uuids}).then(e=>{this.hold=!1,this.resetPagination()}).catch(e=>{}).then(e=>{})},deleteAll(){this.$q.dialog({title:this.$t("Delete all"),message:this.$t("Are you sure want to delete all notifications?"),transitionShow:"fade",transitionHide:"fade",ok:{unelevated:!0,color:"primary",rounded:!1,"text-color":"white",size:"md",label:this.$t("Okay"),"no-caps":!0}}).onOk(()=>{g.fetchDataByToken("deleteNotifications",{}).then(e=>{this.hold=!1,this.resetPagination()}).catch(e=>{}).then(e=>{})}).onCancel(()=>{}).onDismiss(()=>{})}}},se=["src"],le={key:1,class:"row justify-center q-my-md"},ne={key:0,class:"row justify-center q-my-sm"},de={class:"font12 text-grey"},ue={key:1,class:"full-width text-center"},ce={class:"text-h5 text-weight-bold"},fe={class:"text-grey font12"};function me(e,o,d,t,l,a){return i(),u(m,null,[r(Z,{onRefresh:a.refresh},{default:s(()=>[r(U,{class:w({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:s(()=>[r(R,null,{default:s(()=>[r(y,{onClick:o[0]||(o[0]=n=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),r(O,{class:"text-weight-bold"},{default:s(()=>[l.hold?(i(),u(m,{key:0},[Q(p(a.itemToDelete)+" "+p(e.$t("selected")),1)],64)):(i(),u(m,{key:1},[Q(p(e.$t("Notifications")),1)],64))]),_:1}),l.hold?(i(),f(y,{key:0,onClick:o[1]||(o[1]=n=>l.hold=!1),flat:"",round:"",dense:"",icon:"close",color:e.$q.dark.mode?"white":"dark"},null,8,["color"])):(i(),u(m,{key:1},[a.hasData?(i(),f(y,{key:0,onClick:a.deleteAll,flat:"",round:"",dense:"",icon:"las la-trash",color:e.$q.dark.mode?"white":"dark"},null,8,["onClick","color"])):_("",!0)],64))]),_:1})]),_:1},8,["class"]),r(Y,{class:w(["bg-transparent",{"flex flex-center":!a.hasData&&!l.loading}])},{default:s(()=>[r(G,{ref:"nscroll",onLoad:a.getNotifications,offset:250},{loading:s(()=>[l.page<=0?(i(),f(J,{key:0,showing:!0,color:"primary",size:"md"})):(i(),u("div",le,[r(X,{color:"primary",size:"40px"})]))]),default:s(()=>[r(E,null,{default:s(()=>[(i(!0),u(m,null,P(l.data,(n,h)=>(i(),u(m,{key:n},[(i(!0),u(m,null,P(n,(c,k)=>(i(),f(M,{key:c,onAction:N=>a.deleteNotification(h,k,c),"right-color":e.$q.dark.mode?"grey600":"mygrey"},{right:s(()=>[r(y,{round:"",color:"lightprimary","text-color":"primary",icon:"las la-trash",unelevated:"",size:"sm"})]),default:s(()=>[H((i(),f($,{tag:"label",class:w({"bg-mydark ":e.$q.dark.mode,"bg-white ":!e.$q.dark.mode})},{default:s(()=>[r(T,{avatar:""},{default:s(()=>[l.hold?(i(),f(j,{key:0,modelValue:l.notification_uuids,"onUpdate:modelValue":o[2]||(o[2]=N=>l.notification_uuids=N),val:c.notification_uuid},null,8,["modelValue","val"])):(i(),f(x,{key:1},{default:s(()=>[c.image_type=="image"?(i(),u("img",{key:0,src:c.image},null,8,se)):(i(),f(x,{key:1,color:"primary","text-color":"white",icon:"notifications",size:"md"}))]),_:2},1024))]),_:2},1024),r(T,null,{default:s(()=>[r(A,{lines:"2",class:"text-weight-medium font13"},{default:s(()=>[Q(p(c.message),1)]),_:2},1024),r(A,{caption:"",class:"font11"},{default:s(()=>[Q(p(c.date),1)]),_:2},1024)]),_:2},1024),r(T,{side:""},{default:s(()=>[r(F,{rounded:"",color:"mygrey"})]),_:1})]),_:2},1032,["class"])),[[ie,a.handleHold,void 0,{mouse:!0}]])]),_:2},1032,["onAction","right-color"]))),128))],64))),128))]),_:1})]),_:1},8,["onLoad"]),l.loading?_("",!0):(i(),u(m,{key:0},[a.hasData?(i(),u(m,{key:0},[l.data_done&&l.data.length>=10?(i(),u("div",ne,[S("p",de,p(e.$t("end of results")),1)])):_("",!0)],64)):(i(),u("div",ue,[r(K,{src:"no-notification.png",fit:"fill","spinner-color":"primary",style:{height:"150px","max-width":"200px"}}),S("div",ce,p(e.$t("No notifications")),1),S("p",fe,p(e.$t("If there is notification it will show here")),1)]))],64)),r(W,{position:"bottom-right","scroll-offset":150,offset:[18,18]},{default:s(()=>[r(y,{fab:"",icon:"keyboard_arrow_up",color:"mygrey","text-color":"dark",dense:"",padding:"3px"})]),_:1})]),_:1},8,["class"])]),_:1},8,["onRefresh"]),l.hold&&a.itemToDelete>0?(i(),f(oe,{key:0,class:"bg-lightprimary"},{default:s(()=>[r(te,{modelValue:l.tab,"onUpdate:modelValue":o[3]||(o[3]=n=>l.tab=n),class:"text-grey-8","no-caps":"",dense:"",shrink:"","narrow-indicator":"",stretch:"",align:"left",breakpoint:0,"indicator-color":"lightprimary"},{default:s(()=>[r(ee,{name:"delete",icon:"las la-trash",label:e.$t("Delete"),onClick:a.deleteAllNotification},null,8,["label","onClick"])]),_:1},8,["modelValue"])]),_:1})):_("",!0)],64)}var je=z(re,[["render",me]]);export{je as default};