import{_ as P,l as E,t as Q,bz as B,m as b,n as I,p as r,q as A,s as m,f as o,S as _,a4 as $,a5 as R,a3 as j,R as l,a6 as U,V,X as d,bR as F,aw as O,U as L,F as k,a2 as v,a7 as G,a8 as H,a9 as S,ab as X,bA as Y,aV as J,ax as K}from"./index.30bcee2d.js";import{Q as W}from"./QCircularProgress.f57ffd5b.js";import{Q as Z}from"./QImg.4e876ad6.js";import{Q as z}from"./QItemLabel.b935a34d.js";import{Q as ee}from"./QList.d8ad41f7.js";import{Q as te}from"./QSelect.a5140148.js";import{Q as ie}from"./QSpace.274cde1f.js";import{Q as se}from"./QBtnGroup.d73b976b.js";import{C as oe}from"./ClosePopup.da855ff7.js";import{u as ae}from"./CartStore.fe06611f.js";import{u as ne}from"./FavoriteStore.20024f5d.js";import{u as le}from"./DeliverySched.7aa22819.js";import"./format.2bc25e5f.js";import"./QChip.9a5e9391.js";import"./QMenu.3f2e45b1.js";import"./selection.c88e3f6c.js";import"./rtl.b51694b1.js";const T=function(e){return typeof e=="undefined"||e===null||e===""||e==="null"||e==="undefined"},re={name:"ItemDetails",props:["slug","money_config","currency_code"],components:{FavsItem:E(()=>Q(()=>import("./FavsItem.7b70b004.js"),["assets/FavsItem.7b70b004.js","assets/index.30bcee2d.js","assets/index.aba08127.css"])),NumberFormat:E(()=>Q(()=>import("./NumberFormat.fc712318.js"),["assets/NumberFormat.fc712318.js","assets/index.30bcee2d.js","assets/index.aba08127.css"])),ItemGallery:E(()=>Q(()=>import("./ItemGallery.e0a068de.js"),["assets/ItemGallery.e0a068de.js","assets/swiper.min.b39a1361.css","assets/QImg.4e876ad6.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/swiper-slide.7721ccad.js"])),ShareComponents:E(()=>Q(()=>import("./ShareComponents.37533c0a.js"),["assets/ShareComponents.37533c0a.js","assets/index.30bcee2d.js","assets/index.aba08127.css","assets/index.55d50e28.js"]))},setup(){const e=ae(),t=ne(),u=le();return{CartStore:e,FavoriteStore:t,schedStore:u}},data(){return{item_dialog:!1,loading:!0,loading_add:!1,item_qty:1,items:[],item_size_id:0,size_data:[],size_datas:[],cooking_ref:0,cooking_data:[],ingredients:[],ingredients_data:[],addons:{},special_instructions:"",transaction_type:"",if_sold_out:"",sold_out_options:[],item_total:0,disabled_cart:!0,slide_items:0,favorites:[],restaurant_name:"",merchant_id:"",data_cat_id:"",data_item_token:"",merchantSlug:"",item_gallery:[],image_featured:"",deep_link:""}},created(){this.deep_link=B.api_base_url},mounted(){this.merchantSlug=this.slug},watch:{addons:{handler(e,t){this.ItemSummary()},deep:!0},item_size_id(){this.ItemSummary()},cooking_ref(){this.ItemSummary()},ingredients(){this.ItemSummary()},item_qty(){this.ItemSummary()},ingredients_data:{handler(e,t){this.ingredients=[],Object.keys(this.ingredients_data).length>0&&Object.entries(this.ingredients_data).forEach(([u,g])=>{g.onOff&&this.ingredients.push(g.value)})},deep:!0}},methods:{isClickable(e){return e.multi_option==="multiple"?"":"label"},isRipple(e){return e.multi_option!=="multiple"},resetData(){this.item_qty=1,this.items=[],this.item_size_id=0,this.size_data=[],this.size_datas=[],this.cooking_ref=0,this.cooking_data=[],this.ingredients=[],this.ingredients_data=[],this.addons={},this.special_instructions="",this.transaction_type="",this.if_sold_out="",this.sold_out_options=[],this.item_total=0,this.disabled_cart=!0,this.slide_items=0,this.data_cat_id="",this.data_item_token="",this.image_featured=""},showItem2(e,t){typeof t!="undefined"&&t!==null&&(this.merchantSlug=t,this.showItem(e))},showItem(e){this.resetData(),this.item_dialog=!0,this.loading=!0,this.data_cat_id=e.cat_id,this.data_item_token=e.item_uuid,typeof this.merchantSlug!="undefined"&&this.merchantSlug!==null&&b.getMenuItem(e.cat_id,e.item_uuid,this.merchantSlug,this.currency_code).then(t=>{this.merchant_id=t.details.merchant_id,this.restaurant_name=t.details.restaurant_name,this.items=t.details.data.items,this.size_datas=t.details.data.items.price;const u=t.details.sold_out_options;this.if_sold_out=t.details.default_sold_out_options;const g=t.details.data.items.price,s=t.details.data.meta?t.details.data.meta.cooking_ref:{},y=t.details.data.meta?t.details.data.meta_details.cooking_ref:{},a=t.details.data.meta?t.details.data.meta.ingredients:{},q=t.details.data.meta?t.details.data.meta_details.ingredients:{};this.item_gallery=t.details.data.meta?t.details.data.meta.item_gallery:{};const p=t.details.data?t.details.data.addons:{},c=t.details.data?t.details.data.addon_items:{};Object.keys(u).length>0&&Object.entries(u).forEach(([h,i])=>{this.sold_out_options.push({label:i,value:h})}),Object.keys(g).length>0&&(Object.entries(g).forEach(([h,i])=>{i.discount<=0?this.size_data.push({label:i.size_name+" "+i.pretty_price,value:parseInt(i.item_size_id)}):this.size_data.push({label:i.size_name+" "+i.pretty_price_after_discount,value:parseInt(i.item_size_id)})}),this.item_size_id=parseInt(Object.keys(g)[0])),typeof s!="undefined"&&s!==null&&s.length>0&&Object.entries(s).forEach(([h,i])=>{this.cooking_data.push({label:y[i].meta_name,value:y[i].meta_id})}),typeof a!="undefined"&&a!==null&&a.length>0&&Object.entries(a).forEach(([h,i])=>{q[i]&&this.ingredients_data.push({label:q[i].meta_name,value:q[i].meta_id,onOff:!!this.items.ingredients_preselected})}),console.log(this.items.item_addons),Object.keys(this.items.item_addons).length>0&&Object.entries(this.items.item_addons).forEach(([h,i])=>{const n=[];Object.entries(i).forEach(([f,x])=>{if(!b.empty(p[h])&&!b.empty(p[h][x])){const C=p[h][x],D=[];Object.entries(C.sub_items).forEach(([Pe,w])=>{if(c[w]){const N=c[w];c[w].checked=!1,c[w].disabled=!1,c[w].qty=1,D.push(N)}});const M={subcat_id:C.subcat_id,subcategory_name:C.subcategory_name,subcategory_description:C.subcategory_description,multi_option:C.multi_option,multi_option_min:C.multi_option_min,multi_option_value:C.multi_option_value,require_addon:C.require_addon,pre_selected:C.pre_selected,sub_items_checked:"",sub_items:D};n.push(M)}}),this.addons[h]=n})}).catch(t=>{b.notify("red-5",t,"error_outline",this.$q),this.item_dialog=!1}).then(t=>{this.loading=!1})},ItemSummary(){let e=0;const t=[],u=[];let g=[],s=[];if(!T(this.size_datas[this.item_size_id])){const a=this.size_datas[this.item_size_id];a.discount>0?e+=this.item_qty*parseFloat(a.price_after_discount):e+=this.item_qty*parseFloat(a.price)}T(this.addons[this.item_size_id])||this.addons[this.item_size_id].forEach((a,q)=>{if(a.require_addon==="1"&&t.push(a.subcat_id),a.multi_option==="custom"){let p=0;const c=a.multi_option_value;let h=a.multi_option_min;c>0&&g.push({subcat_id:a.subcat_id,min:h,max:c});const i=[],n=[];a.sub_items.forEach((f,x)=>{f.checked===!0?(p++,e+=this.item_qty*parseFloat(f.price),u.push(a.subcat_id)):i.push(x),f.disabled===!0&&n.push(x)}),s[a.subcat_id]={total:p},p>=c?i.forEach((f,x)=>{a.sub_items[f].disabled=!0}):n.forEach((f,x)=>{a.sub_items[f].disabled=!1})}else if(a.multi_option==="one")a.sub_items.forEach((p,c)=>{p.sub_item_id===a.sub_items_checked&&(e+=this.item_qty*parseFloat(p.price),u.push(a.subcat_id))});else if(a.multi_option==="multiple"){let p=a.multi_option_min;const c=a.multi_option_value;c>0&&g.push({subcat_id:a.subcat_id,min:p,max:c});let h=0;a.sub_items.forEach((i,n)=>{i.checked===!0&&(e+=i.qty*parseFloat(i.price),h+=i.qty,u.push(a.subcat_id))}),s[a.subcat_id]={total:h},console.log("TotalMultiQty=>"+h),h>=c?a.sub_items.forEach((i,n)=>{i.disabled=!0}):a.sub_items.forEach((i,n)=>{i.disabled=!1})}}),this.item_total=e;let y=!0;if(t.length>0&&t.forEach((a,q)=>{if(u.includes(a)===!1)return y=!1,!1}),this.items.cooking_ref_required&&(this.cooking_ref>0?y=!0:y=!1),Object.keys(g).length>0){let a,q;Object.entries(g).forEach(([p,c])=>{a=parseInt(c.min),s[c.subcat_id]&&(q=parseInt(s[c.subcat_id].total)),q>0&&a>q&&(y=!1)})}this.items.not_for_sale&&(y=!1),y?this.disabled_cart=!1:this.disabled_cart=!0},CheckaddCartItems(){console.log("CheckaddCartItems");let e="",t="";if(console.log(this.CartStore.cart_merchant),console.log(this.CartStore.cart_merchant.merchant_id),console.log(this.CartStore.cart_merchant.restaurant_name),b.empty(this.CartStore.cart_merchant)||(e=this.CartStore.cart_merchant.merchant_id,t=this.CartStore.cart_merchant.restaurant_name),console.log(e+"=>"+this.merchant_id),b.empty(e))this.AddToCart();else if(e!==this.merchant_id){let u=this.$t("Your order contains items from {{restaurant_name}}. Create a new order to add items.");u=u.replace("{{restaurant_name}}",t),this.$q.dialog({title:this.$t("Create new order?"),message:u,persistent:!0,position:"standard",transitionShow:"fade",transitionHide:"fade",ok:{unelevated:!0,color:"primary",rounded:!1,"text-color":"white",size:"md",label:this.$t("New order"),"no-caps":!0,class:"radius8"},cancel:{unelevated:!0,rounded:!1,color:"mygrey","text-color":"black",size:"md",label:this.$t("Cancel"),"no-caps":!0,class:"radius8"}}).onOk(()=>{this.clearCart()}).onCancel(()=>{}).onDismiss(()=>{})}else this.AddToCart()},clearCart(){const e=b.getStorage("cart_uuid");b.clearCart(e).then(t=>{this.AddToCart()}).catch(t=>{b.notify("red-5",t,"error_outline",this.$q)}).then(t=>{})},AddToCart(){const e=[];this.ingredients.length>0&&this.ingredients.forEach((s,y)=>{e.push({meta_id:s,checked:!0,meta_name:""})});const t={cooking_ref:[{meta_id:this.cooking_ref,checked:this.cooking_ref,meta_name:""}],ingredients:e},u=b.getStorage("cart_uuid"),g={slug:this.merchantSlug,cart_uuid:u,cat_id:this.data_cat_id,item_size_id:this.item_size_id,item_token:this.data_item_token,item_qty:this.item_qty,special_instructions:this.special_instructions,if_sold_out:this.if_sold_out.value,transaction_type:this.schedStore.transaction_type,meta:t,item_addons:T(this.addons[this.item_size_id])?[]:this.addons[this.item_size_id]};this.loading_add=!0,b.AddToCart(g).then(s=>{T(u)&&b.setStorage("cart_uuid",s.details.cart_uuid),this.$emit("afterAdditems"),this.item_dialog=!1}).catch(s=>{b.notify("negative",s,"error_outline",this.$q)}).then(s=>{this.loading_add=!1})},afterSavefav(e){e.save_item=!e.save_item,this.FavoriteStore.getItemFavorites(this.slug)},setActive(e,t){e.onOff?(this.ingredients_data[t].color="mygrey",this.ingredients_data[t].text_color="dark",this.ingredients_data[t].onOff=!1):(this.ingredients_data[t].color="primary",this.ingredients_data[t].text_color="white",this.ingredients_data[t].onOff=!0)},afterSelectimage(e){this.image_featured=e}}},de={key:0,class:"text-center flex flex-center",style:{height:"200px"}},me={class:"q-pa-sm absolute-top-right"},_e={class:"row items-center q-mb-sm"},ce={class:"col"},ue={class:"line-normal ellipsis-2-lines text-h6"},he=["innerHTML"],pe={class:"text-right col-5 q-gutter-sm"},fe={class:"ellipsis-3-lines text-grey text-body2 line-normal"},ge=["innerHTML"],ye={class:"q-mb-sm"},ke={class:"font13 text-weight-bold no-margin line-normal q-pb-sm"},be={key:0,class:"q-mb-sm"},ve={class:"font13 text-weight-bold no-margin line-normal"},qe={key:0,class:"text-red font12 text-weight-medium q-mb-sm"},Ce={key:1,class:"text-grey font12 text-weight-medium q-mb-sm"},Se={key:1,class:"q-mb-sm"},Ve={class:"font13 text-weight-bold no-margin line-normal"},xe={class:"text-grey font12 text-weight-medium q-mb-sm"},ze={class:"text-weight-bold"},we={class:""},Ie={key:0,class:"q-ml-sm text-red"},Oe={key:1,class:"q-ml-sm"},Ee={key:0,class:"row items-center justify-center"},Qe={class:"col no-padding text-center"},Ae={class:"col no-padding text-center"},Te={class:"col no-padding text-center"},je={key:1},Fe={class:"text-weight-bold font13 q-mt-sm"},De={class:"text-weight-bold font13 q-mt-sm"},$e={class:"col-5"},Re={class:"col-7"},Ue={class:"row justify-between items-center fit"},Le={class:"text-weight-medium font17"},Me={class:"text-weight-bold font16"};function Ne(e,t,u,g,s,y){const a=I("FavsItem"),q=I("ShareComponents"),p=I("ItemGallery"),c=I("DIV"),h=I("NumberFormat");return r(),A(K,{modelValue:s.item_dialog,"onUpdate:modelValue":t[8]||(t[8]=i=>s.item_dialog=i),position:"bottom"},{default:m(()=>[o($,{class:"rounded-borders-top"},{default:m(()=>[s.loading?(r(),_("div",de,[o(W,{indeterminate:"",rounded:"",size:"md",color:"secondary",class:"q-ma-md"})])):(r(),A(c,{key:1},{default:m(()=>[o($,{class:"no-shadow"},{default:m(()=>[o(R,{class:j(["no-wrap q-pa-none bg-mygreyx relative-position bn",{"bg-grey600 ":e.$q.dark.mode,"bg-mygrey ":!e.$q.dark.mode}]),style:{"border-bottom-right-radius":"25px","border-bottom-left-radius":"25px"}},{default:m(()=>[o(Z,{src:this.image_featured?this.image_featured:s.items.url_image,"placeholder-src":"placeholder.png",style:{height:"180px"},fit:"cover","spinner-color":"primary","spinner-size":"xs"},null,8,["src"]),l("div",me,[U(o(V,{icon:"close",color:e.$q.dark.mode?"primary":"grey",flat:"",round:"",dense:""},null,8,["color"]),[[oe]])])]),_:1},8,["class"]),o(R,null,{default:m(()=>[l("div",_e,[l("div",ce,[l("div",ue,[l("span",{innerHTML:s.items.item_name},null,8,he)])]),l("div",pe,[o(a,{ref:"favs",layout:1,item_token:s.items.item_token,cat_id:s.items.cat_id,active:s.items.save_item,onAfterSavefav:t[0]||(t[0]=i=>y.afterSavefav(s.items))},null,8,["item_token","cat_id","active"]),o(q,{title:s.items.item_name,text:s.items.item_description,dialogTitle:e.$t("Share"),url:s.deep_link+"/item/"+s.items.item_token,layout:2},null,8,["title","text","dialogTitle","url"])])]),l("p",fe,[l("span",{innerHTML:s.items.item_description},null,8,ge)]),o(p,{item_gallery:s.item_gallery,onAfterSelectimage:y.afterSelectimage},null,8,["item_gallery","onAfterSelectimage"]),l("div",ye,[l("div",ke,d(e.$t("Size")),1),o(F,{modelValue:s.item_size_id,"onUpdate:modelValue":t[1]||(t[1]=i=>s.item_size_id=i),options:s.size_data,inline:""},null,8,["modelValue","options"])]),s.cooking_data.length>0?(r(),_("div",be,[l("div",ve,d(e.$t("Cooking Reference")),1),s.items.cooking_ref_required?(r(),_("div",qe," ("+d(e.$t("Required"))+") ",1)):(r(),_("div",Ce,d(e.$t("Optional")),1)),o(F,{modelValue:s.cooking_ref,"onUpdate:modelValue":t[2]||(t[2]=i=>s.cooking_ref=i),options:s.cooking_data,inline:""},null,8,["modelValue","options"])])):O("",!0),s.ingredients_data.length>0?(r(),_("div",Se,[l("div",Ve,d(e.$t("Ingredients")),1),l("div",xe,d(e.$t("Optional")),1),o(F,{modelValue:s.ingredients,"onUpdate:modelValue":t[3]||(t[3]=i=>s.ingredients=i),options:s.ingredients_data,inline:"",type:"checkbox","checked-icon":"check_box","unchecked-icon":"square"},null,8,["modelValue","options"])])):O("",!0),s.addons[s.item_size_id]?(r(!0),_(k,{key:2},L(s.addons[s.item_size_id],i=>(r(),A(c,{key:i.subcat_id,class:"q-mb-md"},{default:m(()=>[l("div",{class:j(["row justify-between items-center font13 no-margin line-normal q-pa-sm",{"bg-grey600 ":e.$q.dark.mode,"bg-mygrey ":!e.$q.dark.mode}])},[l("div",null,[l("div",ze,d(i.subcategory_name),1),i.multi_option==="one"?(r(),_(k,{key:0},[v(d(e.$t("Select 1")),1)],64)):i.multi_option==="multiple"?(r(),_(k,{key:1},[i.multi_option_min>0?(r(),_(k,{key:0},[v(d(e.$t("Select minimum {min} to maximum {max}",{min:i.multi_option_min,max:i.multi_option_value})),1)],64)):(r(),_(k,{key:1},[v(d(e.$t("Choose up to"))+" "+d(i.multi_option_value),1)],64))],64)):i.multi_option==="custom"?(r(),_(k,{key:2},[i.multi_option_min>0?(r(),_(k,{key:0},[v(d(e.$t("Select minimum {min} to maximum {max}",{min:i.multi_option_min,max:i.multi_option_value})),1)],64)):(r(),_(k,{key:1},[v(d(e.$t("Choose up to"))+" "+d(i.multi_option_value),1)],64))],64)):O("",!0)]),l("div",we,[i.require_addon==1?(r(),_("span",Ie,"("+d(e.$t("Required"))+")",1)):(r(),_("span",Oe,"("+d(e.$t("Optional"))+")",1))])],2),o(ee,null,{default:m(()=>[(r(!0),_(k,null,L(i.sub_items,n=>U((r(),A(H,{key:n.sub_item_id,tag:i.multi_option==="multiple"?"div":"label"},{default:m(()=>[i.multi_option==="one"?(r(),_(k,{key:0},[o(S,{avatar:""},{default:m(()=>[o(X,{modelValue:i.sub_items_checked,"onUpdate:modelValue":f=>i.sub_items_checked=f,val:n.sub_item_id,color:"primary",size:"md"},null,8,["modelValue","onUpdate:modelValue","val"])]),_:2},1024),o(S,null,{default:m(()=>[o(z,null,{default:m(()=>[v(d(n.sub_item_name),1)]),_:2},1024)]),_:2},1024),o(S,{side:""},{default:m(()=>[o(z,{caption:""},{default:m(()=>[v(d(n.pretty_price),1)]),_:2},1024)]),_:2},1024)],64)):i.multi_option==="custom"?(r(),_(k,{key:1},[o(S,{avatar:""},{default:m(()=>[o(Y,{modelValue:n.checked,"onUpdate:modelValue":f=>n.checked=f,val:n.sub_item_id,label:"",disable:n.disabled,color:"primary",size:"md"},null,8,["modelValue","onUpdate:modelValue","val","disable"])]),_:2},1024),o(S,null,{default:m(()=>[o(z,null,{default:m(()=>[v(d(n.sub_item_name),1)]),_:2},1024)]),_:2},1024),o(S,{side:""},{default:m(()=>[o(z,{caption:""},{default:m(()=>[v(d(n.pretty_price),1)]),_:2},1024)]),_:2},1024)],64)):i.multi_option==="multiple"?(r(),_(k,{key:2},[o(S,{side:!n.checked},{default:m(()=>[n.checked==!0?(r(),_("div",Ee,[l("div",Qe,[o(V,{onClick:f=>n.qty>1?n.qty--:n.checked=!1,round:"",unelevated:"",dense:"",size:"11px",color:"primary",icon:"remove"},null,8,["onClick"])]),l("div",Ae,d(n.qty),1),l("div",Te,[o(V,{onClick:f=>n.qty++,round:"",unelevated:"",dense:"",size:"11px",color:"primary",icon:"add",disabled:n.disabled},null,8,["onClick","disabled"])])])):(r(),_("div",je,[o(V,{onClick:f=>n.checked=!0,round:"",unelevated:"",dense:"",size:"11px",color:"grey-4",icon:"add",disabled:n.disabled},null,8,["onClick","disabled"])]))]),_:2},1032,["side"]),o(S,null,{default:m(()=>[o(z,null,{default:m(()=>[v(d(n.sub_item_name),1)]),_:2},1024)]),_:2},1024),o(S,{side:""},{default:m(()=>[o(z,{caption:""},{default:m(()=>[v(d(n.pretty_price),1)]),_:2},1024)]),_:2},1024)],64)):O("",!0)]),_:2},1032,["tag"])),[[G]])),128))]),_:2},1024)]),_:2},1024))),128)):O("",!0),l("div",Fe,d(e.$t("Special Instructions")),1),o(J,{modelValue:s.special_instructions,"onUpdate:modelValue":t[4]||(t[4]=i=>s.special_instructions=i),autogrow:"",outlined:"",class:"q-pa-none"},null,8,["modelValue"]),l("div",De,d(e.$t("If sold out")),1),o(te,{outlined:"",dense:"",modelValue:s.if_sold_out,"onUpdate:modelValue":t[5]||(t[5]=i=>s.if_sold_out=i),options:s.sold_out_options,color:"secondary",class:"q-mb-md","transition-show":"scale","transition-hide":"scale"},null,8,["modelValue","options"]),o(ie,{class:"q-pa-xl"}),l("div",{class:j(["fixed-bottom q-pa-sm border-grey-top row",{"bg-dark":e.$q.dark.mode,"bg-white":!e.$q.dark.mode}])},[l("div",$e,[o(se,{unelevated:"",class:"radius8"},{default:m(()=>[o(V,{onClick:t[6]||(t[6]=i=>s.item_qty>1?s.item_qty--:1),color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"grey",icon:"o_remove",size:"md",dense:"",class:"q-pa-sm"},null,8,["color","text-color"]),o(V,{color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"dark",dense:"",label:s.item_qty,class:"no-pointer-events text-weight-medium",style:{"min-width":"30px"}},null,8,["color","text-color","label"]),o(V,{onClick:t[7]||(t[7]=i=>s.item_qty++),color:e.$q.dark.mode?"grey600":"mygrey","text-color":e.$q.dark.mode?"grey300":"grey",icon:"o_add",size:"md",dense:"",class:"q-pa-sm"},null,8,["color","text-color"])]),_:1})]),l("div",Re,[o(V,{unelevated:"",color:"primary","text-color":"white",class:"fit radius8 q-pa-sm","no-caps":"",onClick:y.CheckaddCartItems,disable:s.disabled_cart,loading:s.loading_add,size:"md",dense:""},{default:m(()=>[l("div",Ue,[l("div",Le,[s.items.not_for_sale?(r(),_(k,{key:0},[v(d(e.$t("Not for sale")),1)],64)):(r(),_(k,{key:1},[v(d(e.$t("Add to cart")),1)],64))]),l("div",Me,[o(h,{amount:s.item_total,money_config:u.money_config},null,8,["amount","money_config"])])])]),_:1},8,["onClick","disable","loading"])])],2)]),_:1})]),_:1})]),_:1}))]),_:1})]),_:1},8,["modelValue"])}var rt=P(re,[["render",Ne]]);export{rt as default};
