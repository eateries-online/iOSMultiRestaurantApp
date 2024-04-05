import{u as F,ad as D,ae as M,c as L,h as z,y as I,g as $,_ as E,l as g,P as x,m as o,as as V,n as u,p as d,S as n,q as S,s as i,a3 as f,aw as v,f as a,ax as B,F as p,V as c,a2 as y,X as b,R as m,ap as G,a4 as T,a6 as R,a5 as O,t as _}from"./index.30bcee2d.js";import{Q as N}from"./QToolbarTitle.80059bbe.js";import{Q as j}from"./QToolbar.8b90f7d3.js";import{Q as H}from"./QHeader.b4bada8e.js";import{Q as q}from"./QInnerLoading.1dad5a80.js";import{Q as U}from"./QFooter.f2cd3c2a.js";import{Q as X}from"./QPage.f04658ef.js";import{Q as J}from"./QSpace.274cde1f.js";import{C as K}from"./ClosePopup.da855ff7.js";import{u as W}from"./ClientStore.5dffc3bb.js";import{u as Y}from"./MapStore.d39bcab1.js";import{A as w}from"./AppLocation.20af81ca.js";import"./QResizeObserver.3c3b4a7a.js";var Z=F({name:"QBar",props:{...D,dense:Boolean},setup(e,{slots:t}){const{proxy:{$q:r}}=$(),k=M(e,r),s=L(()=>`q-bar row no-wrap items-center q-bar--${e.dense===!0?"dense":"standard"}  q-bar--${k.value===!0?"dark":"light"}`);return()=>z("div",{class:s.value,role:"toolbar"},I(t.default))}});const ee={name:"MapPage",components:{SearchAddress:g(()=>_(()=>import("./SearchAddress.dc2a7ee0.js"),["assets/SearchAddress.dc2a7ee0.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QItemLabel.b935a34d.js","assets/QSelect.a5140148.js","assets/QChip.9a5e9391.js","assets/QMenu.3f2e45b1.js","assets/selection.c88e3f6c.js","assets/rtl.b51694b1.js","assets/format.2bc25e5f.js"])),DeliverySched:g(()=>_(()=>import("./DeliverySched.d1de5213.js"),["assets/DeliverySched.d1de5213.js","assets/QBtnToggle.c946cab5.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QBtnGroup.d73b976b.js","assets/QSelect.a5140148.js","assets/QChip.9a5e9391.js","assets/QItemLabel.b935a34d.js","assets/QMenu.3f2e45b1.js","assets/selection.c88e3f6c.js","assets/rtl.b51694b1.js","assets/format.2bc25e5f.js","assets/DeliverySched.7aa22819.js"])),MapsComponents:g(()=>_(()=>import("./MapsComponents.3831646d.js"),["assets/MapsComponents.3831646d.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/index.4f152a18.js"])),AddressInformation:g(()=>_(()=>import("./AddressInformation.b6003222.js"),["assets/AddressInformation.b6003222.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/QToolbarTitle.80059bbe.js","assets/QToolbar.8b90f7d3.js","assets/QSpace.274cde1f.js","assets/QSelect.a5140148.js","assets/QChip.9a5e9391.js","assets/QItemLabel.b935a34d.js","assets/QMenu.3f2e45b1.js","assets/selection.c88e3f6c.js","assets/rtl.b51694b1.js","assets/format.2bc25e5f.js","assets/QBtnToggle.c946cab5.js","assets/QBtnGroup.d73b976b.js","assets/QFooter.f2cd3c2a.js","assets/QResizeObserver.3c3b4a7a.js","assets/QForm.ab8a2cd2.js","assets/ClosePopup.da855ff7.js"]))},setup(){const e=x(),t=W(),r=Y();return{DataStore:e,ClientStore:t,MapStore:r}},data(){return{address:"",address_search:"",modal:!1,geocoder_loading:!0,center:{lat:34.04703,lng:-118.24686},data:[],marker_position:{},default_icon:{text:"\uEA44",fontFamily:"Material Icons",color:"#ffffff",fontSize:"18px"},icon:{},back_url:"",loading:!0,maps_config:[]}},created(){this.back_url=this.$route.query.url,this.icon=this.default_icon},computed:{hasAddress(){return!!o.empty(this.address)}},watch:{DataStore:{immediate:!0,deep:!0,handler(e,t){console.log(e.loading),Object.keys(e.maps_config).length>0?(this.maps_config=e.maps_config,this.setMarkerPosition(this.maps_config.default_lat,this.maps_config.default_lng),this.checkSavedLocation()):e.loading==!1&&(this.geocoder_loading=!1)}}},methods:{setMarkerPosition(e,t){this.marker_position=[{id:0,lat:parseFloat(e),lng:parseFloat(t),label:o.getIcon("customer"),icon:null,draggable:!0}]},locateCurrentLocation(){this.geocoder_loading=!0,this.locationPermission()},checkSavedLocation(){let e=o.getStorage("place_data");o.empty(e)?(this.geocoder_loading=!1,this.locationPermission()):(this.geocoder_loading=!1,this.loading=!1,this.data=e,this.address_search=e.address.formatted_address,this.address=e.address.formatted_address,this.center={lat:parseFloat(this.data.latitude),lng:parseFloat(this.data.longitude)},this.setMarkerPosition(this.data.latitude,this.data.longitude))},addressFocus(){this.$refs.search_address.Focus()},afterSelectaddress(e){this.data=e,this.address=e.address.formatted_address,this.address_search=e.address.formatted_address,this.modal=!1,this.setMarkerPosition(e.latitude,e.longitude),this.center={lat:parseFloat(e.latitude),lng:parseFloat(e.longitude)}},reverseGeocoding(e,t){this.geocoder_loading=!0,o.reverseGeocoding(e,t).then(r=>{this.data=r.details.data,typeof r.details.data.address!="undefined"&&r.details.data.address!==null?this.address=r.details.data.address.formatted_address:(this.address="",this.data=[])}).catch(r=>{o.notify("dark",r,"error",this.$q)}).then(r=>{this.geocoder_loading=!1,this.loading=!1})},setLocation(){o.empty(this.data.place_id)&&o.notify("dark","Enter your location or select on the map","error",this.$q),o.setStorage("place_data",this.data),o.setStorage("place_id",this.data.place_id);const e=o.getStorage("delivery_sched");console.debug("deliverySched=>"+e),V.authenticated()?this.$refs.address_information.show(this.data):(this.geocoder_loading=!0,o.empty(e)?(this.geocoder_loading=!1,this.$refs.delivery_sched.showSched(!0)):(this.DataStore.list_data=[],this.backPage()))},backPage(){o.empty(this.back_url)?this.$router.push("/home"):this.$router.push(this.back_url)},afterSavetrans(e){this.backPage()},locationPermission(){this.$q.capacitor?w.checkAccuracy().then(e=>{this.locateLocation()}).catch(e=>{e.code===4?(this.geocoder_loading=!1,this.setMarkerPosition(this.maps_config.default_lat,this.maps_config.default_lng),this.reverseGeocoding(parseFloat(this.maps_config.default_lat),parseFloat(this.maps_config.default_lng))):o.notify("dark",e.message,"error",this.$q)}).then(e=>{}):navigator.geolocation&&navigator.geolocation.getCurrentPosition(e=>{this.setMarkerPosition(e.coords.latitude,e.coords.longitude),this.reverseGeocoding(e.coords.latitude,e.coords.longitude)},e=>{this.setMarkerPosition(this.maps_config.default_lat,this.maps_config.default_lng),this.reverseGeocoding(parseFloat(this.maps_config.default_lat),parseFloat(this.maps_config.default_lng))})},locateLocation(){w.getPosition().then(e=>{this.setMarkerPosition(e.lat,e.lng),this.reverseGeocoding(e.lat,e.lng)}).catch(e=>{this.setMarkerPosition(this.maps_config.default_lat,this.maps_config.default_lng),this.reverseGeocoding(parseFloat(this.maps_config.default_lat),parseFloat(this.maps_config.default_lng))}).then(e=>{})},afterSelectmap(e,t){console.log("afterSelectmap =>"+e+t),this.reverseGeocoding(e,t)}}},te={class:"col-12 relative-position"},se={key:0,class:"absolute-top-left full-width text-rightx q-pa-sm",style:{"z-index":"999"}},ae={class:"absolute-bottom-left full-width text-right q-pa-sm",style:{"z-index":"99"}},oe={class:"q-pr-sm"},re={class:"font13 col-9"},ie={key:1,class:"q-pa-lg"};function le(e,t,r,k,s,l){const P=u("MapsComponents"),C=u("SearchAddress"),A=u("DeliverySched"),Q=u("AddressInformation");return d(),n(p,null,[e.$q.platform.is.ios?(d(),S(H,{key:0,class:f({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode})},{default:i(()=>[a(j,null,{default:i(()=>[a(c,{onClick:t[0]||(t[0]=h=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),a(N,{class:"text-weight-bold"},{default:i(()=>[y(b(e.$t("Select location")),1)]),_:1})]),_:1})]),_:1},8,["class"])):v("",!0),a(X,{class:"bg-grey-1 row items-stretch"},{default:i(()=>[m("div",te,[e.$q.platform.is.ios?v("",!0):(d(),n("div",se,[a(c,{onClick:t[1]||(t[1]=h=>e.$router.back()),round:"",dense:"",icon:"close",class:"q-mr-sm",color:e.$q.dark.mode?"grey600":"dark",unelevated:"",size:"sm"},null,8,["color"])])),m("div",ae,[a(c,{onClick:l.locateCurrentLocation,round:"",color:"secondary",icon:"o_near_me",unelevated:"",loading:e.loading2,class:"rotate-270"},null,8,["onClick","loading"])]),k.DataStore.hasMapConfig?(d(),S(P,{key:1,ref:"mapRef",class:"maps",size:"fit",keys:s.maps_config.key,provider:s.maps_config.provider,zoom:s.maps_config.zoom,center:s.center,markers:s.marker_position,onAfterSelectmap:l.afterSelectmap},null,8,["keys","provider","zoom","center","markers","onAfterSelectmap"])):v("",!0)]),a(q,{showing:s.geocoder_loading,size:"md",color:"primary"},null,8,["showing"]),a(U,{reveal:"",class:f(["bg-whitex q-pl-md q-pr-md q-pb-lg q-pt-md text-dark",{"bg-white":!s.loading,"bg-grey-1":s.loading}]),style:{"border-top-right-radius":"15px","border-top-left-radius":"15px"}},{default:i(()=>[a(q,{showing:s.loading,color:"primary",size:"md"},null,8,["showing"]),s.loading?(d(),n("div",ie,"\xA0")):(d(),n(p,{key:0},[m("div",{class:f(["row items-center q-mb-md no-wrap",{"text-white":e.$q.dark.mode,"text-dark":!e.$q.dark.mode}])},[m("div",oe,[a(G,{name:"las la-map-marker",size:"md"})]),m("div",re,[l.hasAddress?(d(),n(p,{key:1},[y(b(e.$t("Location is not available")),1)],64)):(d(),n(p,{key:0},[y(b(s.address),1)],64))]),m("div",null,[a(c,{round:"",color:"primary",icon:"edit",unelevated:"",size:"md",flat:"",onClick:t[2]||(t[2]=h=>s.modal=!s.modal)})])],2),a(c,{label:e.$t("Confirm Location"),onClick:l.setLocation,disable:l.hasAddress||s.geocoder_loading,loading:s.loading,unelevated:"","no-caps":"",color:s.geocoder_loading==!0?"grey":"primary","text-color":"white",class:"full-width text-weight-medium radius28",size:"lg"},null,8,["label","onClick","disable","loading","color"])],64))]),_:1},8,["class"])]),_:1}),a(B,{modelValue:s.modal,"onUpdate:modelValue":t[3]||(t[3]=h=>s.modal=h),"transition-show":"fade","transition-hide":"fade",onShow:t[4]||(t[4]=h=>l.addressFocus()),maximized:!0},{default:i(()=>[a(T,{class:f(["no-shadow q-pt-sm q-pb-sm",{"bg-mydark":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},{default:i(()=>[a(Z,{class:f(["bg-whitex",{"bg-mydark text-white":e.$q.dark.mode,"bg-white text-black":!e.$q.dark.mode}])},{default:i(()=>[a(J),R(a(c,{dense:"",flat:"",icon:"close"},null,512),[[K]])]),_:1},8,["class"]),a(O,null,{default:i(()=>[a(C,{ref:"search_address",onAfterSelectaddress:l.afterSelectaddress,placeholder:e.$t("Enter your location")},null,8,["onAfterSelectaddress","placeholder"])]),_:1})]),_:1},8,["class"])]),_:1},8,["modelValue"]),a(A,{ref:"delivery_sched",onAfterSavetrans:l.afterSavetrans},null,8,["onAfterSavetrans"]),a(Q,{ref:"address_information",back_url:s.back_url},null,8,["back_url"])],64)}var be=E(ee,[["render",le]]);export{be as default};