import{Q as p}from"./QImg.4e876ad6.js";import{Q as o}from"./QSpace.274cde1f.js";import{_ as n,P as i,bP as l,p as d,q as c,s as f,R as e,f as a,X as s,V as m}from"./index.30bcee2d.js";import{Q as u}from"./QPage.f04658ef.js";const _={name:"UpdateApp",data(){return{app_name:"{{}}"}},setup(){return{DataStore:i()}},created(){this.$q.capacitor&&this.getApp()},computed:{getData(){return this.DataStore.appversion_data}},methods:{async getApp(){let t=await l.getInfo();t&&(this.app_name=t.name)}}},h={class:"full-width text-center"},g={class:"font16 text-weight-bold"},w={class:"text-grey font12"};function D(t,$,q,x,r,Q){return d(),c(u,{class:"q-pl-md q-pr-md flex flex-center"},{default:f(()=>[e("div",h,[a(p,{src:"update.png",fit:"fill","spinner-color":"primary",style:{"max-width":"150px"}}),a(o,{class:"q-pa-sm"}),e("div",g,s(r.app_name)+" "+s(t.$t("needs an update")),1),e("div",w,s(t.$t("To continue to use the app, download the latest version")),1),a(o,{class:"q-pa-sm"}),a(m,{outline:"",style:{color:"dark"},label:t.$t("Update"),"no-caps":"",target:"_blank",href:t.$q.platform.is.android?this.getData.android_download_url:this.getData.ios_download_url},null,8,["label","href"])])]),_:1})}var A=n(_,[["render",D]]);export{A as default};
