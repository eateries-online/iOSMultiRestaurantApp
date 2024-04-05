import{Q as h}from"./QSpace.274cde1f.js";import{_ as p,m as d,p as _,q as f,s as a,f as t,V as r,a5 as u,R as l,X as m,a$ as y,bB as w,a4 as b,ax as g}from"./index.30bcee2d.js";import{Q as x}from"./QToolbar.8b90f7d3.js";const C={name:"BankComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,credentials:[]}},methods:{showPaymentForm(){this.show_modal=!0,this.setCredentials()},close(){this.show_modal=!1},closePayment(){this.$emit("afterCancelPayment")},setCredentials(){typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(this.credentials=this.payment_credentials[this.payment_code])},onSubmit(){const i={merchant_id:this.credentials.merchant_id,payment_code:this.payment_code};this.loading=!0,d.SavedPaymentProvider(i).then(e=>{this.close(),this.$emit("afterAddpayment")}).catch(e=>{d.notify("dark",e,"error",this.$q)}).then(e=>{this.loading=!1})}}},Q={class:"text-weight-bold no-margin"},v={class:"q-ma-sm"},k={class:"font12"};function B(i,e,o,S,s,c){return _(),f(g,{modelValue:s.show_modal,"onUpdate:modelValue":e[2]||(e[2]=n=>s.show_modal=n),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:a(()=>[t(b,{style:{width:"500px","max-width":"80vw"}},{default:a(()=>[t(x,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:a(()=>[t(h),t(r,{onClick:e[0]||(e[0]=n=>s.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),t(u,{class:"q-pa-md"},{default:a(()=>[l("h5",Q,m(o.title),1),l("div",v,[l("p",k,m(o.label.notes),1)])]),_:1}),t(y,{spaced:""}),t(w,null,{default:a(()=>[t(r,{label:o.label.submit,loading:s.loading,onClick:e[1]||(e[1]=n=>c.onSubmit()),unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])}var A=p(C,[["render",B]]);export{A as default};
