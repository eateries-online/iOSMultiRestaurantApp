import{Q as f}from"./QSkeleton.8077f081.js";import{_ as w,P as S,m as c,n as u,p as s,S as a,F as n,U as p,R as i,f as l,q as m,s as r,aa as y,X as g,V as k,aw as C}from"./index.30bcee2d.js";import{S as q,a as D}from"./swiper-slide.7721ccad.js";/* empty css                   */const v={name:"CuisineCarousel",props:["design"],components:{Swiper:q,SwiperSlide:D},setup(){return{DataStore:S()}},data(){return{slide:0,data:[],loading:!0}},mounted(){this.DataStore.hasDataCuisine()||this.DataStore.CuisineList()},methods:{CuisineList(){this.loading=!0,c.CuisineList(4,"").then(e=>{this.data=e.details.data,this.$emit("afterGetdata",e.details.data_raw)}).catch(e=>{c.notify("red-5",e,"error_outline",this.$q)}).then(e=>{this.loading=!1})}}},x={key:0,class:"row q-gutter-sm items-center"},B={class:"row items-center no-wrap full-width"},V=["src"],Q={class:"text-center ellipsis font13 q-pl-sm",style:{"max-width":"70px"}};function $(e,L,P,o,N,z){const _=u("swiper-slide"),h=u("swiper");return o.DataStore.loading_cuisine?(s(),a("div",x,[(s(),a(n,null,p(3,t=>i("div",{key:t,class:"col"},[l(f,{type:"QBtn",class:"full-width",height:"50px"})])),64))])):(s(),a(n,{key:1},[o.DataStore.cuisine?(s(),m(h,{key:0,slidesPerView:2.3,spaceBetween:10,onSwiper:e.onSwiper,class:"q-mb-md"},{default:r(()=>[(s(!0),a(n,null,p(o.DataStore.cuisine,(t,d)=>(s(),m(_,{key:t,class:"row"},{default:r(()=>[l(k,{color:d<=0?"primary":e.$q.dark.mode?"grey600":"mygrey",unelevated:"","no-caps":"","text-color":d<=0?"white":e.$q.dark.mode?"grey300":"dark",class:"radius8 fit q-pa-sm",size:"sm",to:{name:"feed",query:{query:"all",cuisine_id:t.cuisine_id,cuisine_name:t.cuisine_name}}},{default:r(()=>[i("div",B,[l(y,{size:"30px"},{default:r(()=>[i("img",{src:t.url_icon},null,8,V)]),_:2},1024),i("div",Q,g(t.cuisine_name),1)])]),_:2},1032,["color","text-color","to"])]),_:2},1024))),128))]),_:1},8,["slidesPerView","onSwiper"])):C("",!0)],64))}var G=w(v,[["render",$]]);export{G as default};
