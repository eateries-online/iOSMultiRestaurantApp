import{_ as p,m as u,p as l,S as n,f as t,s as r,a3 as f,F as h,V as d,a2 as g,X as o,R as m,q as b,aV as k}from"./index.30bcee2d.js";import{Q as y}from"./QToolbarTitle.80059bbe.js";import{Q as q}from"./QToolbar.8b90f7d3.js";import{Q as w}from"./QHeader.b4bada8e.js";import{Q}from"./QForm.ab8a2cd2.js";import{Q as $}from"./QSpace.274cde1f.js";import{Q as T}from"./QPage.f04658ef.js";import"./QResizeObserver.3c3b4a7a.js";const v={name:"ForgotPassword",data(){return{loading:!1,email:"",password:"",steps:1,data:[],maxCounter:20,counter:this.maxCounter,timer:void 0}},watch:{counter(e,a){e<=0&&this.stopTimer()}},beforeUnmount(){this.stopTimer()},methods:{onSubmit(){this.loading=!0,u.requestResetPassword(this.email).then(e=>{this.steps=2,this.startTimer(),this.data=e}).catch(e=>{u.notify("negative",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})},stopTimer(){clearInterval(this.timer)},startTimer(){this.stopTimer(),this.counter=this.maxCounter,this.timer=setInterval(()=>{this.counter--},1e3)},resendEmail(){this.loading=!0,u.resendResetEmail(this.data.details.uuid).then(e=>{this.steps=2,this.startTimer()}).catch(e=>{u.notify("red-5",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})}}},C={class:"full-width q-pa-md"},_={class:"text-weight-bold"},V={key:0,class:"text-weight-medium q-ma-none"},E={key:1,class:"rounded-borders border-green q-pa-sm"},P={key:3},S={key:1,class:"font11 q-ma-none"};function F(e,a,R,B,s,c){return l(),n(h,null,[t(w,{class:f({"bg-mydark text-white":e.$q.dark.mode,"bg-white text-dark":!e.$q.dark.mode})},{default:r(()=>[t(q,null,{default:r(()=>[t(d,{onClick:a[0]||(a[0]=i=>e.$router.back()),flat:"",round:"",dense:"",icon:"las la-angle-left",class:"q-mr-sm",color:e.$q.dark.mode?"white":"dark"},null,8,["color"]),t(y,{class:"text-weight-bold"},{default:r(()=>[g(o(e.$t("Forgot Password")),1)]),_:1})]),_:1})]),_:1},8,["class"]),t(T,{padding:"",class:"flex flex-center"},{default:r(()=>[m("div",C,[m("h5",_,o(e.$t("Let's Get your account back"))+"!",1),s.steps==1?(l(),n("p",V,o(e.$t("Enter your email to receive instructions for resetting your password.")),1)):(l(),n("p",E,o(s.data.msg),1)),t(d,{flat:"",label:e.$t("Already have an account?"),"no-caps":"",class:"q-pa-none text-weight-bold min-height q-mb-md",color:"secondary",to:"/user/login"},null,8,["label"]),s.steps==1?(l(),b(Q,{key:2,onSubmit:c.onSubmit},{default:r(()=>[t(k,{modelValue:s.email,"onUpdate:modelValue":a[1]||(a[1]=i=>s.email=i),label:e.$t("Email"),rules:[i=>i&&i.length>0||this.$t("This field is required")],outlined:"","lazy-rules":"","bg-color":e.$q.dark.mode?"grey600":"input","label-color":e.$q.dark.mode?"grey300":"grey",borderless:"",class:"input-borderless"},null,8,["modelValue","label","rules","bg-color","label-color"]),t(d,{loading:s.loading,type:"submit",label:e.$t("Reset Password"),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["loading","label"])]),_:1},8,["onSubmit"])):(l(),n("div",P,[t($,{class:"q-pa-xs"}),s.counter===0?(l(),n(h,{key:0},[t(d,{onClick:c.resendEmail,flat:"",dense:"",color:"myblue","no-caps":"",class:"font13 q-ma-none"},{default:r(()=>[m("u",null,o(e.$t("Resend reset email")),1)]),_:1},8,["onClick"]),t(d,{onClick:a[2]||(a[2]=i=>s.steps=1),flat:"",dense:"",color:"secondary","no-caps":"",class:"font13 q-ma-none"},{default:r(()=>[m("u",null,o(e.$t("Enter email again")),1)]),_:1})],64)):(l(),n("p",S,[m("u",null,o(e.$t("Resend Code in"))+" "+o(s.counter),1)]))]))])]),_:1})],64)}var H=p(v,[["render",F]]);export{H as default};