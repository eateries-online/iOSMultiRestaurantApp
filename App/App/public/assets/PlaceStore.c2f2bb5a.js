import{H as a,m as t}from"./index.30bcee2d.js";const d=a("placeStore",{state:()=>({data:[],address:""}),actions:{getPlace(){const e=t.getStorage("place_data");typeof e!="undefined"&&e!==null?(this.address=e.address.formatted_address,this.data=e):(this.data=[],this.address="")}}});export{d as u};
