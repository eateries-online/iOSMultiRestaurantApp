import{Q as n,H as _,m as a}from"./index.30bcee2d.js";const r=n(),g=_("menu",{state:()=>({data_info:{},data_share:[],open_at:{},opening_hours:{},money_config:[],maps_config:[],loadin_info:!0,data_charge_type:{},data_estimation:{},data_distance:{},loading_menu:!0,data_category:{},data_items:{},data_gallery:{},gallery_images:{},data_similar_items:{},loading_similar_items:!1,items_not_available:[],category_not_available:[],merchant_uuid:"",restaurant_slug:"",booking_settings:[],dish:[]}),persist:!0,getters:{isBookingEnabled(t){return t.booking_settings.booking_enabled},getBookingTc(t){return t.booking_settings.booking_reservation_terms},getBookingCustomMessage(t){return t.booking_settings.booking_reservation_custom_message},allowChooseTable(t){return t.booking_settings.allowed_choose_table},isBookingCaptcha(t){return t.booking_settings.captcha_enabled}},actions:{getMerchantInfo(t,i){this.loadin_info=!0,this.data_info=[],this.data_charge_type=[],this.data_estimation=[],this.data_distance=[],this.opening_hours=[],this.open_at=[],this.data_gallery=[],this.merchant_uuid="",this.booking_enabled=!1,a.getMerchantInfo(t,a.getStorage("place_id"),i).then(e=>{this.data_info[t]=e.details.data,this.data_charge_type[t]=e.details.charge_type,this.data_estimation[t]=e.details.estimation,this.data_distance[t]=e.details.distance,this.opening_hours[t]=e.details.opening_hours,this.open_at[t]=e.details.open_at,this.data_gallery[t]=e.details.gallery,this.money_config=e.details.config,this.merchant_uuid=e.details.data.merchant_uuid,this.booking_settings=e.details.booking_settings;let s=[];Object.keys(e.details.gallery).length>0&&(Object.entries(e.details.gallery).forEach(([l,o])=>{s.push(o.image_url)}),this.gallery_images[t]=s)}).catch(e=>{this.data_info=[]}).then(e=>{this.loadin_info=!1})},geStoreMenu(t,i){this.loading_menu=!0,this.data_items=[],this.data_category=[],this.items_not_available=[],a.geStoreMenu(t,i).then(e=>{this.data_category[t]=e.details.data.category,this.data_items[t]=e.details.data.items,this.items_not_available=e.details.data.items_not_available,this.category_not_available=e.details.data.category_not_available,this.dish=e.details.data.dish}).catch(e=>{this.data_items=[],this.data_category=[]}).then(e=>{this.loading_menu=!1})},getSimilarItems(t){this.loading_similar_items=!0,a.fetchDataPost("SimilarItems","merchant_id="+t+"&currency_code="+r.use_currency_code).then(i=>{console.log(i),this.data_similar_items[t]=i.details.data}).catch(i=>{this.data_similar_items={}}).then(i=>{this.loading_similar_items=!1})}}});export{g as u};
