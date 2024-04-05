import{_ as q,P as w,m as n,as as g,p as k,S as V,f as o,s as t,a3 as Q,F as $,V as c,a2 as u,X as a,R as m,aV as i,a8 as y,bc as S,bd as v,a9 as f,ap as h}from"./index.30bcee2d.js";import{Q as I}from"./QToolbarTitle.80059bbe.js";import{Q as C}from"./QToolbar.8b90f7d3.js";import{Q as F}from"./QHeader.b4bada8e.js";import{Q as d}from"./QSpace.274cde1f.js";import{Q as U}from"./QImg.4e876ad6.js";import{Q as P}from"./QItemLabel.b935a34d.js";import{Q as T}from"./QSelect.a5140148.js";import{Q as z}from"./QForm.ab8a2cd2.js";import{Q as D}from"./QPage.f04658ef.js";import{u as B}from"./ClientStore.5dffc3bb.js";import"./QResizeObserver.3c3b4a7a.js";import"./QChip.9a5e9391.js";import"./QMenu.3f2e45b1.js";import"./selection.c88e3f6c.js";import"./rtl.b51694b1.js";import"./format.2bc25e5f.js";const G={name:"GuestInformation",data(){return{loading:!1,field_type:"password",field_type1:"password",first_name:"",last_name:"",email_address:"",password:"",cpassword:"",mobile_number:"",mobile_prefix:"",options:[],inner_loading:!1,redirect:""}},setup(){const e=w(),l=B();return{DataStore:e,ClientStore:l}},created(){this.redirect=this.$route.query.redirect},computed:{FieldIcon(){return this.field_type==="password"?"eva-eye-outline":"eva-eye-off-outline"},FieldIcon1(){return this.field_type1==="password"?"eva-eye-outline":"eva-eye-off-outline"}},watch:{DataStore:{immediate:!0,deep:!0,handler(e,l){Object.keys(e.phone_default_data).length>0&&(this.mobile_prefix="+"+e.phone_default_data.phonecode)}}},methods:{onSubmit(){const e={first_name:this.first_name,last_name:this.last_name,email_address:this.email_address,password:this.password,cpassword:this.cpassword,mobile_prefix:this.mobile_prefix,mobile_number:this.mobile_number,local_id:n.getStorage("place_id")};this.loading=!0,n.fetchDataPost("registerGuestUser",e).then(l=>{n.notify("light-green",l.msg,"check_circle",this.$q),typeof l.details.uuid!="undefined"&&l.details.uuid!==null?this.$router.push({path:"/account/verify",query:{uuid:l.details.uuid,redirect:this.redirect}}):(g.setUser(l.details.user_data),g.setToken(l.details.user_token),this.ClientStore.user_settings=l.details.user_settings,typeof this.redirect!="undefined"&&this.redirect!==null?this.$router.push(this.redirect):this.$router.push("/home"))}).catch(l=>{n.notify("dark",l,null,this.$q)}).then(l=>{this.loading=!1})}}},N={class:"full-width q-pa-md"},A={class:"text-weight-bold q-ma-none"},E={class:"text-weight-bold q-ma-none"},L={class:"text-caption"};function R(e,l,j,_,r,p){return k(),V($,null,[o(F,{reveal:"","reveal-offset":"50",class:Q({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:t(()=>[o(C,null,{default:t(()=>[o(c,{onClick:l[0]||(l[0]=s=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),o(I,{class:"text-weight-bold"},{default:t(()=>[u(a(e.$t("Continue as guest")),1)]),_:1})]),_:1})]),_:1},8,["class"]),o(D,{class:"flex flex-center"},{default:t(()=>[m("div",N,[m("h5",A,a(e.$t("Guest information")),1),o(d,{class:"q-pa-sm"}),o(z,{onSubmit:p.onSubmit},{default:t(()=>[o(i,{modelValue:r.first_name,"onUpdate:modelValue":l[1]||(l[1]=s=>r.first_name=s),label:e.$t("First name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[s=>s&&s.length>0||this.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),o(i,{modelValue:r.last_name,"onUpdate:modelValue":l[2]||(l[2]=s=>r.last_name=s),label:e.$t("Last name"),outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[s=>s&&s.length>0||this.$t("This field is required")]},null,8,["modelValue","label","bg-color","label-color","rules"]),o(i,{modelValue:r.mobile_number,"onUpdate:modelValue":l[4]||(l[4]=s=>r.mobile_number=s),mask:"##############",outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless",rules:[s=>s&&s.length>0||this.$t("This field is required")]},{prepend:t(()=>[o(T,{dense:"",modelValue:r.mobile_prefix,"onUpdate:modelValue":l[3]||(l[3]=s=>r.mobile_prefix=s),options:_.DataStore.phone_prefix_data,onFilter:e.filterFn,behavior:"dialog","input-debounce":"700",style:{border:"none"},"emit-value":"",borderlessx:"",class:"myq-field"},{option:t(({itemProps:s,opt:b})=>[o(y,S(v(s)),{default:t(()=>[o(f,{avatar:""},{default:t(()=>[o(U,{src:b.flag,style:{height:"15px","max-width":"20px"}},null,8,["src"])]),_:2},1024),o(f,null,{default:t(()=>[o(P,null,{default:t(()=>[u(a(b.label),1)]),_:2},1024)]),_:2},1024)]),_:2},1040)]),"no-option":t(()=>[o(y,null,{default:t(()=>[o(f,{class:"text-grey"},{default:t(()=>[u(a(e.$t("No results")),1)]),_:1})]),_:1})]),_:1},8,["modelValue","options","onFilter"])]),_:1},8,["modelValue","bg-color","label-color","rules"]),m("h5",E,[u(a(e.$t("Create Account "))+" ",1),m("span",L,"("+a(e.$t("optional"))+")",1)]),o(d,{class:"q-pa-sm"}),o(i,{modelValue:r.email_address,"onUpdate:modelValue":l[5]||(l[5]=s=>r.email_address=s),label:e.$t("Email address"),outlined:"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},null,8,["modelValue","label","bg-color","label-color"]),o(d,{class:"q-pa-sm"}),o(i,{modelValue:r.password,"onUpdate:modelValue":l[7]||(l[7]=s=>r.password=s),type:r.field_type,label:e.$t("Password"),outlined:"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},{append:t(()=>[o(h,{onClick:l[6]||(l[6]=s=>r.field_type=r.field_type=="password"?"text":"password"),name:p.FieldIcon,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["modelValue","type","label","bg-color","label-color"]),o(d,{class:"q-pa-sm"}),o(i,{type:r.field_type1,modelValue:r.cpassword,"onUpdate:modelValue":l[9]||(l[9]=s=>r.cpassword=s),label:e.$t("Confirm Password"),outlined:"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},{append:t(()=>[o(h,{onClick:l[8]||(l[8]=s=>r.field_type1=r.field_type1=="password"?"text":"password"),name:p.FieldIcon1,color:"grey",class:"cursor-pointer"},null,8,["name"])]),_:1},8,["type","modelValue","label","bg-color","label-color"]),o(d,{class:"q-pa-sm"}),o(c,{loading:r.loading,type:"submit",label:e.$t("Continue"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"])]),_:1},8,["onSubmit"])])]),_:1})],64)}var ie=q(G,[["render",R]]);export{ie as default};