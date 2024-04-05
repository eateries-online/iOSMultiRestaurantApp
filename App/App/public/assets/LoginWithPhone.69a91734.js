import{_ as y,P as w,bz as h,m as a,as as u,p as k,S as q,f as o,s,a3 as Q,F as S,V as n,R as i,X as d,aV as b,a8 as g,bc as v,bd as V,a9 as m,a2 as p,ap as $,bA as x}from"./index.30bcee2d.js";import{Q as I}from"./QToolbarTitle.80059bbe.js";import{Q as P}from"./QToolbar.8b90f7d3.js";import{Q as F}from"./QHeader.b4bada8e.js";import{Q as D}from"./QImg.4e876ad6.js";import{Q as T}from"./QItemLabel.b935a34d.js";import{Q as z}from"./QSelect.a5140148.js";import{Q as C}from"./QForm.ab8a2cd2.js";import{Q as L}from"./QPage.f04658ef.js";import"./QResizeObserver.3c3b4a7a.js";import"./QChip.9a5e9391.js";import"./QMenu.3f2e45b1.js";import"./selection.c88e3f6c.js";import"./rtl.b51694b1.js";import"./format.2bc25e5f.js";const U={name:"LoginPage",data(){return{mobile_number:"",mobile_prefix:"",password:"",field_type:"password",loading:!1,redirect:"",google_client_id:"",facebook_app_id:"",remember:!1,dont_have_account:this.$t("Don't have an account?")}},components:{},setup(){return{DataStore:w()}},mounted(){this.redirect=this.$route.query.redirect,this.google_client_id=h.google_client_id,this.facebook_app_id=h.facebook_app_id},computed:{FieldIcon(){return this.field_type==="password"?"eva-eye-outline":"eva-eye-off-outline"},hasSocialLogin(){return!a.empty(this.google_client_id)||!a.empty(this.facebook_app_id)}},watch:{DataStore:{immediate:!0,deep:!0,handler(e,l){Object.keys(e.phone_default_data).length>0&&(this.mobile_prefix="+"+e.phone_default_data.phonecode)}}},methods:{onSubmit(){this.loading=!0,a.fetchData("userLoginPhone",{mobile_prefix:this.mobile_prefix,mobile_number:this.mobile_number,password:this.password,local_id:a.getStorage("place_id")}).then(e=>{a.notify("light-green",e.msg,"check_circle",this.$q),u.setUser(e.details.user_data),u.setToken(e.details.user_token),u.setStorage("user_settings",e.details.user_settings);const l=a.getStorage("place_id");typeof l!="undefined"&&l!==null?typeof this.redirect!="undefined"&&this.redirect!==null?this.$router.push(this.redirect):this.$router.push("/home"):this.$router.push("/location")}).catch(e=>{a.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}},B=p("Sigin With Phone"),N={class:"full-width q-pa-md"},R={class:"text-weight-bold"},A={class:"text-weight-medium q-ma-none"},E={class:"row"},W={class:"col"},j={class:"col text-right"},H={class:"text-center q-pa-sm"};function M(e,l,O,_,r,c){return k(),q(S,null,[o(F,{reveal:"","reveal-offset":"50",class:Q({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:s(()=>[o(P,null,{default:s(()=>[o(n,{onClick:l[0]||(l[0]=t=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(I,{class:"text-weight-bold"},{default:s(()=>[B]),_:1})]),_:1})]),_:1},8,["class"]),o(L,{padding:"",class:"flex flex-center"},{default:s(()=>[i("div",N,[i("h5",R,d(e.$t("Let's Sign You In")),1),i("p",A,d(e.$t("Enter your phone number and password for sigin.")),1),o(n,{flat:"",label:r.dont_have_account,"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/signup"},null,8,["label"]),o(C,{onSubmit:c.onSubmit},{default:s(()=>[o(b,{modelValue:r.mobile_number,"onUpdate:modelValue":l[2]||(l[2]=t=>r.mobile_number=t),mask:"##############",outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[t=>t&&t.length>0||this.$t("This field is required")]},{prepend:s(()=>[o(z,{dense:"",modelValue:r.mobile_prefix,"onUpdate:modelValue":l[1]||(l[1]=t=>r.mobile_prefix=t),options:_.DataStore.phone_prefix_data,onFilter:e.filterFn,behavior:"dialog","input-debounce":"700",style:{border:"none"},"emit-value":"",borderless:"",class:"myq-field"},{option:s(({itemProps:t,opt:f})=>[o(g,v(V(t)),{default:s(()=>[o(m,{avatar:""},{default:s(()=>[o(D,{src:f.flag,style:{height:"15px","max-width":"20px"}},null,8,["src"])]),_:2},1024),o(m,null,{default:s(()=>[o(T,null,{default:s(()=>[p(d(f.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":s(()=>[o(g,null,{default:s(()=>[o(m,{class:"text-grey"},{default:s(()=>[p(d(e.$t("No results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"])]),_:1},8,["modelValue","bg-color","label-color","rules"]),o(b,{modelValue:r.password,"onUpdate:modelValue":l[4]||(l[4]=t=>r.password=t),type:r.field_type,outlined:"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",label:e.$t("Password"),"lazy-rules":"",rules:[t=>t&&t.length>0||this.$t("This field is required")]},{append:s(()=>[o($,{onClick:l[3]||(l[3]=t=>r.field_type=r.field_type=="password"?"text":"password"),name:c.FieldIcon,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue","type","bg-color","label-color","label","rules"]),i("div",E,[i("div",W,[o(x,{dense:"",modelValue:r.remember,"onUpdate:modelValue":l[5]||(l[5]=t=>r.remember=t),label:e.$t("Remember Me"),color:"primary"},null,8,["modelValue","label"])]),i("div",j,[o(n,{flat:"",label:e.$t("Forgot Password?"),"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/forgotpass"},null,8,["label"])])]),o(n,{loading:r.loading,type:"submit",label:e.$t("Sign In"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"]),i("div",H,[o(n,{flat:"",label:e.$t("Continue as guest"),"no-caps":"",class:"q-pa-none text-weight-bold min-height",color:"secondary",to:"/home",replace:""},null,8,["label"])])]),_:1},8,["onSubmit"])])]),_:1})],64)}var de=y(U,[["render",M]]);export{de as default};