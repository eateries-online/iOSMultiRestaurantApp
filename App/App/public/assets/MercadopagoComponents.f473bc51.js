import{Q as _}from"./QSpace.274cde1f.js";import{_ as $,m as o,p as C,S as P,f as s,s as n,a4 as g,V as h,a5 as f,R as d,X as m,aV as l,a$ as b,bB as v,ax as q,a6 as S,F as x}from"./index.30bcee2d.js";import{Q as w}from"./QToolbar.8b90f7d3.js";import{Q as B}from"./QSelect.a5140148.js";import{Q as k}from"./QForm.ab8a2cd2.js";import{C as Q}from"./ClosePopup.da855ff7.js";import{l as M}from"./index.4f152a18.js";import"./QChip.9a5e9391.js";import"./QItemLabel.b935a34d.js";import"./QMenu.3f2e45b1.js";import"./selection.c88e3f6c.js";import"./rtl.b51694b1.js";import"./format.2bc25e5f.js";let c;const U={name:"MercadopagoComponents",props:["title","label","payment_code","payment_credentials"],data(){return{show_modal:!1,data:[],loading:!1,credentials:[],identification_type_list:[],identification_type:"DNI",identification_number:"12334566",credit_card_number:"5031755734530604",expiry_date:"11/22",cvv:"123",card_name:"basti",customer_id:"",payment_uuid:"",order_uuid:"",modal_cvv:!1,card_number:"",verify_cvv:"123",jwt_data:[],card_id:""}},methods:{showPaymentForm(){this.show_modal=!0,this.setCredentials(),this.includeScript(!0)},close(){this.show_modal=!1},closePayment(){this.$emit("afterCancelPayment")},setCredentials(){typeof this.payment_credentials[this.payment_code]!="undefined"&&this.payment_credentials[this.payment_code]!==null&&(this.credentials=this.payment_credentials[this.payment_code])},includeScript(e){M("https://sdk.mercadopago.com/js/v2").then(()=>{e&&(this.initPayment(),this.createCustomer())}).catch(()=>{o.notify("negative","failed loading script","error_outline",this.$q)})},initPayment(){c=new MercadoPago(this.credentials.attr1),this.identification_type_list=[],c.getIdentificationTypes().then(e=>{Object.entries(e).forEach(([t,a])=>{this.identification_type_list.push({label:a.name,value:a.id})})}).catch(e=>{o.notify("dark",e.message,"error",this.$q)})},createCustomer(){const e={payment_code:this.payment_code,merchant_id:this.credentials.merchant_id,merchant_type:this.credentials.merchant_type};this.loading=!0,o.MercadopagoCustomer(e).then(t=>{this.customer_id=t.details.customer_id}).catch(t=>{o.notify("dark",t,"error",this.$q)}).then(t=>{this.loading=!1})},onSubmit(){var e=this.expiry_date,t=e.split("/"),a=t[0],p=t[1];const u=this.credit_card_number.replace(/ /g,"");this.is_loading=!0,c.createCardToken({cardNumber:u,cardholderName:this.card_name,cardExpirationMonth:a,cardExpirationYear:p,securityCode:this.cvv,identificationType:this.identification_type,identificationNumber:this.identification_number}).then(i=>{this.AddCard(i)}).catch(i=>{if(this.is_loading=!1,typeof i.message!="undefined"&&i.message!==null)o.notify("negative",i.message,"error_outline",this.$q);else{let y;y.forEach((V,J)=>{y+=V.message}),o.notify("dark",y,"error",this.$q)}})},AddCard(e){let t={payment_code:this.payment_code,merchant_id:this.credentials.merchant_id,merchant_type:this.credentials.merchant_type,id:e.id,card_name:this.card_name,customer_id:this.customer_id};this.loading=!0,o.MercadopagoAddcard(t).then(a=>{this.close(),this.$emit("afterAddpayment")}).catch(a=>{o.notify("dark",a,"error",this.$q)}).then(a=>{this.loading=!1})},PaymentRender(e){this.payment_uuid=e.payment_uuid,this.order_uuid=e.order_uuid;let t={payment_uuid:this.payment_uuid};o.showLoadingBox(this.$t("Processing payment")+"<br/>"+this.$t("don't close this window"),this.$q),o.MercadopagoGetcard(t).then(a=>{this.card_number=a.details.card_number,this.card_id=a.details.card_id,this.includeScript(!1),this.setCredentials(),this.modal_cvv=!0}).catch(a=>{o.notify("dark",a,"error",this.$q)}).then(a=>{o.hideLoadingBox(this.$q)})},SubmitPayment(){this.loading=!0,c=new MercadoPago(this.credentials.attr2),c.createCardToken({cardId:this.card_id,securityCode:this.verify_cvv}).then(e=>{this.loading=!1,o.empty(this.jwt_data)?this.capturePayment(e.id):this.processPayment(e.id)}).catch(e=>{if(this.loading=!1,typeof e.message!="undefined"&&e.message!==null)o.notify("negative",e.message,"error_outline",this.$q);else{let t;e.forEach((a,p)=>{t+=a.message}),o.notify("dark",t,"error",this.$q)}})},capturePayment(e){var t={payment_code:this.payment_code,merchant_id:this.credentials.merchant_id,merchant_type:this.credentials.merchant_type,order_uuid:this.order_uuid,cart_uuid:o.getStorage("cart_uuid"),payment_uuid:this.payment_uuid,card_token:e};o.showLoadingBox("Processing payment..<br/>don't close this window",this.$q),o.MercadopagoCapturePayment(t).then(a=>{this.$emit("afterPayment",a.details)}).catch(a=>{o.notify("dark",a,"error",this.$q)}).then(a=>{o.hideLoadingBox(this.$q)})},Dopayment(e,t){this.jwt_data=e,o.showLoadingBox(this.$t("Processing payment")+"<br/>"+this.$t("don't close this window"),this.$q),o.fetchDataByTokenPostPayment("MercadopagoGetcardid",{payment_uuid:t.payment_uuid}).then(a=>{this.setCredentials(),this.includeScript(),this.card_number=a.details.card_number,this.card_id=a.details.card_id,this.error=[],this.$emit("closePayment"),this.modal_cvv=!0}).catch(a=>{o.notify("dark",a,"error",this.$q)}).then(a=>{o.hideLoadingBox(this.$q)})},processPayment(e){o.showLoadingBox(this.$t("Processing payment")+"<br/>"+this.$t("don't close this window"),this.$q),o.fetchDataByTokenPostPayment("MercadopagoProcesspayment",{card_token:e,data:this.jwt_data}).then(t=>{this.$emit("afterSuccessfulpayment",t.details)}).catch(t=>{o.notify("dark",t,"error",this.$q)}).then(t=>{o.hideLoadingBox(this.$q)})}}},E={class:"text-weight-bold no-margin"},L={class:"q-ma-sm"},T={class:"font12"},D={class:"column q-col-gutter-sm"},I={class:"row q-col-gutter-md"},N={class:"col"},j={class:"col"},A={class:"row q-col-gutter-md"},z={class:"col-12"},F={class:"row q-col-gutter-md"},G={class:"col"},R={class:"col"},O={class:"text-weight-bold no-margin"},X={class:"q-ma-sm"},Y={class:"font12"};function H(e,t,a,p,r,u){return C(),P(x,null,[s(q,{modelValue:r.show_modal,"onUpdate:modelValue":t[7]||(t[7]=i=>r.show_modal=i),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:n(()=>[s(g,{style:{width:"500px","max-width":"80vw"}},{default:n(()=>[s(w,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:n(()=>[s(_),s(h,{onClick:t[0]||(t[0]=i=>r.show_modal=!1),color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"})]),_:1}),s(k,{onSubmit:u.onSubmit},{default:n(()=>[s(f,{class:"q-pa-md"},{default:n(()=>[d("h5",E,m(a.title),1),d("div",L,[d("p",T,m(a.label.notes),1)]),d("div",D,[s(l,{dense:"","bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"primary",outlined:"",modelValue:r.credit_card_number,"onUpdate:modelValue":t[1]||(t[1]=i=>r.credit_card_number=i),label:e.$t("Card number"),rules:[i=>i&&i.length>0||"this field is required"],mask:"#### #### #### ####"},null,8,["bg-color","color","modelValue","label","rules"])]),d("div",I,[d("div",N,[s(l,{dense:"","bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"primary",outlined:"",modelValue:r.expiry_date,"onUpdate:modelValue":t[2]||(t[2]=i=>r.expiry_date=i),label:e.$t("Exp. date"),class:"no-margin",rules:[i=>i&&i.length>0||"this field is required"],mask:"##/##"},null,8,["bg-color","color","modelValue","label","rules"])]),d("div",j,[s(l,{dense:"","bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"primary",outlined:"",modelValue:r.cvv,"onUpdate:modelValue":t[3]||(t[3]=i=>r.cvv=i),label:e.$t("Security Code"),class:"no-margin",rules:[i=>i&&i.length>0||"this field is required"],mask:"####"},null,8,["bg-color","color","modelValue","label","rules"])])]),d("div",A,[d("div",z,[s(l,{dense:"","bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"primary",outlined:"",modelValue:r.card_name,"onUpdate:modelValue":t[4]||(t[4]=i=>r.card_name=i),class:"no-margin",label:e.$t("Card name"),rules:[i=>i&&i.length>0||"this field is required"]},null,8,["bg-color","color","modelValue","label","rules"])])]),d("div",F,[d("div",G,[s(B,{modelValue:r.identification_type,"onUpdate:modelValue":t[5]||(t[5]=i=>r.identification_type=i),options:r.identification_type_list,label:e.$t("Identitification Type"),dense:"",outlined:"","bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"primary"},null,8,["modelValue","options","label","bg-color","color"])]),d("div",R,[s(l,{dense:"","bg-color":e.$q.dark.mode?"grey600":"mygrey",color:e.$q.dark.mode?"grey300":"primary",outlined:"",modelValue:r.identification_number,"onUpdate:modelValue":t[6]||(t[6]=i=>r.identification_number=i),label:e.$t("Identification Number"),class:"no-margin",rules:[i=>i&&i.length>0||"this field is required"],mask:"####"},null,8,["bg-color","color","modelValue","label","rules"])])])]),_:1}),s(b,{spaced:""}),s(v,null,{default:n(()=>[s(h,{type:"submit",label:a.label.submit,loading:r.loading,unelevated:"","no-caps":"",color:"primary text-white",class:"full-width text-weight-bold",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"]),s(q,{modelValue:r.modal_cvv,"onUpdate:modelValue":t[9]||(t[9]=i=>r.modal_cvv=i),persistent:"","transition-show":"fade","transition-hide":"fade"},{default:n(()=>[s(g,{style:{width:"500px","max-width":"80vw"}},{default:n(()=>[s(w,{class:"text-primary top-toolbar q-pl-md",dense:""},{default:n(()=>[s(_),S(s(h,{color:"white",square:"",unelevated:"","text-color":"grey",icon:"las la-times",dense:"","no-caps":"",size:"sm",class:"border-grey radius8"},null,512),[[Q]])]),_:1}),s(k,{onSubmit:u.SubmitPayment},{default:n(()=>[s(f,{class:"q-pa-md"},{default:n(()=>[d("h5",O,m(e.$t("Verification")),1),d("div",X,[d("p",Y,m(e.$t("Enter CVV for card"))+" "+m(r.card_number),1)]),s(l,{dense:"","bg-color":"mygrey",color:"warning",outlined:"",modelValue:r.verify_cvv,"onUpdate:modelValue":t[8]||(t[8]=i=>r.verify_cvv=i),label:e.$t("Security Code"),class:"no-margin",rules:[i=>i&&i.length>0||this.$t("this field is required")],mask:"####"},null,8,["modelValue","label","rules"])]),_:1}),s(b,{spaced:""}),s(v,null,{default:n(()=>[s(h,{type:"submit",label:a.label.submit_form,loading:r.loading,color:"primary","text-color":"white",unelevated:"",class:"fit","no-caps":"",size:"lg"},null,8,["label","loading"])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1},8,["modelValue"])],64)}var me=$(U,[["render",H]]);export{me as default};