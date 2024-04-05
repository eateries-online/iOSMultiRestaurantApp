import{_ as m,Q as p,m as i,p as c,S as f,f as t,s as l,a8 as g,a9 as n,ap as w,a2 as _,X as u,q as y,R as D,aw as C,bA as W}from"./index.30bcee2d.js";import{Q as d}from"./QItemLabel.b935a34d.js";import{Q as S}from"./QList.d8ad41f7.js";import{Q as b}from"./QInnerLoading.1dad5a80.js";import{u as Q}from"./CartStore.fe06611f.js";const k={name:"WalletComponents",props:["cart_updated"],data(){return{use_wallet:!1,data:[],loading:!1,message:""}},setup(){const e=p(),a=Q();return{DataStorePersisted:e,CartStore:a}},mounted(){this.getCartWallet()},computed:{canUseWallet(){return Object.keys(this.data).length>0&&this.data.balance_raw>0},getData(){return this.data}},watch:{cart_updated(e,a){e==!1&&this.use_wallet&&this.applyDigitalWallet(!0)}},methods:{getCartWallet(){this.loading=!0,i.fetchDataByTokenPost("getCartWallet","cart_uuid="+i.getStorage("cart_uuid")+"&currency_code="+this.DataStorePersisted.getUseCurrency()).then(e=>{this.data=e.details,this.use_wallet=e.details.use_wallet,this.use_wallet&&this.applyDigitalWallet(this.use_wallet)}).catch(e=>{this.data=[],this.use_wallet=!1}).then(e=>{this.loading=!1})},applyDigitalWallet(e){this.loading=!0;let a=e?1:0;i.fetchDataByTokenPost("applyDigitalWallet","cart_uuid="+i.getStorage("cart_uuid")+"&currency_code="+this.DataStorePersisted.getUseCurrency()+"&use_wallet="+a+"&amount_to_pay="+this.CartStore.cart_total.raw).then(s=>{a?this.message=s.msg:this.message="",this.$emit("afterApplywallet",s.details)}).catch(s=>{this.use_wallet=!1,this.message="",i.notify("dark",s,"error",this.$q)}).then(s=>{this.loading=!1})}}},V={class:"relative-position"},v={class:"q-pa-sm bg-grey-2 radius10 text-dark"};function B(e,a,s,P,r,o){return c(),f("div",V,[t(S,null,{default:l(()=>[t(g,{tag:"label"},{default:l(()=>[t(n,{avatar:"",top:""},{default:l(()=>[t(w,{color:"secondary",name:"o_account_balance_wallet"})]),_:1}),t(n,null,{default:l(()=>[t(d,null,{default:l(()=>[_(u(o.getData.balance),1)]),_:1}),t(d,{lines:"2",caption:"",class:"font11"},{default:l(()=>[_(u(e.$t("Digital Wallet Balance")),1)]),_:1}),r.message?(c(),y(d,{key:0,caption:""},{default:l(()=>[D("div",v,u(r.message),1)]),_:1})):C("",!0)]),_:1}),t(n,{side:""},{default:l(()=>[t(W,{modelValue:r.use_wallet,"onUpdate:modelValue":[a[0]||(a[0]=h=>r.use_wallet=h),o.applyDigitalWallet],val:"1",disable:!o.canUseWallet},null,8,["modelValue","disable","onUpdate:modelValue"])]),_:1})]),_:1})]),_:1}),t(b,{showing:r.loading,color:"primary",size:"md"},null,8,["showing"])])}var A=m(k,[["render",B]]);export{A as default};
