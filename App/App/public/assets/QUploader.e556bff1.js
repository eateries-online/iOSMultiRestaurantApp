import{r as q,c as y,g as oe,al as re,ao as ne,ag as ce,h as v,ad as pe,ae as ve,bm as fe,x as _e,bC as me,w as ge,I as Fe,d as he,bD as be,bE as ye,Z as ae,ap as qe,V as te,u as Se,bF as ze}from"./index.30bcee2d.js";import{Q as xe}from"./QCircularProgress.f57ffd5b.js";import{h as le}from"./format.2bc25e5f.js";function M(u,g,o,l){const r=[];return u.forEach(f=>{l(f)===!0?r.push(f):g.push({failedPropValidation:o,file:f})}),r}function H(u){u&&u.dataTransfer&&(u.dataTransfer.dropEffect="copy"),ne(u)}const Ue={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},we=["rejected"];function ke({editable:u,dnd:g,getFileInput:o,addFilesToQueue:l}){const{props:r,emit:f,proxy:C}=oe(),x=q(null),I=y(()=>r.accept!==void 0?r.accept.split(",").map(t=>(t=t.trim(),t==="*"?"*/":(t.endsWith("/*")&&(t=t.slice(0,t.length-1)),t.toUpperCase()))):null),E=y(()=>parseInt(r.maxFiles,10)),R=y(()=>parseInt(r.maxTotalSize,10));function T(t){if(u.value)if(t!==Object(t)&&(t={target:null}),t.target!==null&&t.target.matches('input[type="file"]')===!0)t.clientX===0&&t.clientY===0&&re(t);else{const h=o();h&&h!==t.target&&h.click(t)}}function j(t){u.value&&t&&l(null,t)}function L(t,h,P,O){let i=Array.from(h||t.target.files);const p=[],z=()=>{p.length!==0&&f("rejected",p)};if(r.accept!==void 0&&I.value.indexOf("*/")===-1&&(i=M(i,p,"accept",s=>I.value.some(m=>s.type.toUpperCase().startsWith(m)||s.name.toUpperCase().endsWith(m))),i.length===0))return z();if(r.maxFileSize!==void 0){const s=parseInt(r.maxFileSize,10);if(i=M(i,p,"max-file-size",m=>m.size<=s),i.length===0)return z()}if(r.multiple!==!0&&i.length!==0&&(i=[i[0]]),i.forEach(s=>{s.__key=s.webkitRelativePath+s.lastModified+s.name+s.size}),O===!0){const s=P.map(m=>m.__key);i=M(i,p,"duplicate",m=>s.includes(m.__key)===!1)}if(i.length===0)return z();if(r.maxTotalSize!==void 0){let s=O===!0?P.reduce((m,w)=>m+w.size,0):0;if(i=M(i,p,"max-total-size",m=>(s+=m.size,s<=R.value)),i.length===0)return z()}if(typeof r.filter=="function"){const s=r.filter(i);i=M(i,p,"filter",m=>s.includes(m))}if(r.maxFiles!==void 0){let s=O===!0?P.length:0;if(i=M(i,p,"max-files",()=>(s++,s<=E.value)),i.length===0)return z()}if(z(),i.length!==0)return i}function e(t){H(t),g.value!==!0&&(g.value=!0)}function _(t){ne(t),(t.relatedTarget!==null||ce.is.safari!==!0?t.relatedTarget!==x.value:document.elementsFromPoint(t.clientX,t.clientY).includes(x.value)===!1)===!0&&(g.value=!1)}function S(t){H(t);const h=t.dataTransfer.files;h.length!==0&&l(null,h),g.value=!1}function c(t){if(g.value===!0)return v("div",{ref:x,class:`q-${t}__dnd absolute-full`,onDragenter:H,onDragover:H,onDragleave:_,onDrop:S})}return Object.assign(C,{pickFiles:T,addFiles:j}),{pickFiles:T,addFiles:j,onDragover:e,onDragleave:_,processFiles:L,getDndNode:c,maxFilesNumber:E,maxTotalSizeNumber:R}}function ue(u){return(u*100).toFixed(2)+"%"}const Be={...pe,...Ue,label:String,color:String,textColor:String,square:Boolean,flat:Boolean,bordered:Boolean,noThumbnails:Boolean,autoUpload:Boolean,hideUploadBtn:Boolean,disable:Boolean,readonly:Boolean},ie=[...we,"start","finish","added","removed"];function Ce(u,g){const o=oe(),{props:l,slots:r,emit:f,proxy:C}=o,{$q:x}=C,I=ve(l,x);function E(a,d,F){if(a.__status=d,d==="idle"){a.__uploaded=0,a.__progress=0,a.__sizeLabel=le(a.size),a.__progressLabel="0.00%";return}if(d==="failed"){C.$forceUpdate();return}a.__uploaded=d==="uploaded"?a.size:F,a.__progress=d==="uploaded"?1:Math.min(.9999,a.__uploaded/a.size),a.__progressLabel=ue(a.__progress),C.$forceUpdate()}const R=y(()=>l.disable!==!0&&l.readonly!==!0),T=q(!1),j=q(null),L=q(null),e={files:q([]),queuedFiles:q([]),uploadedFiles:q([]),uploadedSize:q(0),updateFileStatus:E,isAlive:()=>fe(o)===!1},{pickFiles:_,addFiles:S,onDragover:c,onDragleave:t,processFiles:h,getDndNode:P,maxFilesNumber:O,maxTotalSizeNumber:i}=ke({editable:R,dnd:T,getFileInput:K,addFilesToQueue:Z});Object.assign(e,u({props:l,slots:r,emit:f,helpers:e,exposeApi:a=>{Object.assign(e,a)}})),e.isBusy===void 0&&(e.isBusy=q(!1));const p=q(0),z=y(()=>p.value===0?0:e.uploadedSize.value/p.value),s=y(()=>ue(z.value)),m=y(()=>le(p.value)),w=y(()=>R.value===!0&&e.isUploading.value!==!0&&(l.multiple===!0||e.queuedFiles.value.length===0)&&(l.maxFiles===void 0||e.files.value.length<O.value)&&(l.maxTotalSize===void 0||p.value<i.value)),n=y(()=>R.value===!0&&e.isBusy.value!==!0&&e.isUploading.value!==!0&&e.queuedFiles.value.length!==0);_e(me,V);const D=y(()=>"q-uploader column no-wrap"+(I.value===!0?" q-uploader--dark q-dark":"")+(l.bordered===!0?" q-uploader--bordered":"")+(l.square===!0?" q-uploader--square no-border-radius":"")+(l.flat===!0?" q-uploader--flat no-shadow":"")+(l.disable===!0?" disabled q-uploader--disable":"")+(T.value===!0?" q-uploader--dnd":"")),N=y(()=>"q-uploader__header"+(l.color!==void 0?` bg-${l.color}`:"")+(l.textColor!==void 0?` text-${l.textColor}`:""));ge(e.isUploading,(a,d)=>{d===!1&&a===!0?f("start"):d===!0&&a===!1&&f("finish")});function A(){l.disable===!1&&(e.abort(),e.uploadedSize.value=0,p.value=0,G(),e.files.value=[],e.queuedFiles.value=[],e.uploadedFiles.value=[])}function U(){l.disable===!1&&Y(["uploaded"],()=>{e.uploadedFiles.value=[]})}function W(){Y(["idle","failed"],({size:a})=>{p.value-=a,e.queuedFiles.value=[]})}function Y(a,d){if(l.disable===!0)return;const F={files:[],size:0},k=e.files.value.filter(b=>a.indexOf(b.__status)===-1?!0:(F.size+=b.size,F.files.push(b),b.__img!==void 0&&window.URL.revokeObjectURL(b.__img.src),!1));F.files.length!==0&&(e.files.value=k,d(F),f("removed",F.files))}function X(a){l.disable||(a.__status==="uploaded"?e.uploadedFiles.value=e.uploadedFiles.value.filter(d=>d.__key!==a.__key):a.__status==="uploading"?a.__abort():p.value-=a.size,e.files.value=e.files.value.filter(d=>d.__key!==a.__key?!0:(d.__img!==void 0&&window.URL.revokeObjectURL(d.__img.src),!1)),e.queuedFiles.value=e.queuedFiles.value.filter(d=>d.__key!==a.__key),f("removed",[a]))}function G(){e.files.value.forEach(a=>{a.__img!==void 0&&window.URL.revokeObjectURL(a.__img.src)})}function K(){return L.value||j.value.getElementsByClassName("q-uploader__input")[0]}function Z(a,d){const F=h(a,d,e.files.value,!0),k=K();k!=null&&(k.value=""),F!==void 0&&(F.forEach(b=>{if(e.updateFileStatus(b,"idle"),p.value+=b.size,l.noThumbnails!==!0&&b.type.toUpperCase().startsWith("IMAGE")){const ee=new Image;ee.src=window.URL.createObjectURL(b),b.__img=ee}}),e.files.value=e.files.value.concat(F),e.queuedFiles.value=e.queuedFiles.value.concat(F),f("added",F),l.autoUpload===!0&&e.upload())}function J(){n.value===!0&&e.upload()}function $(a,d,F){if(a===!0){const k={type:"a",key:d,icon:x.iconSet.uploader[d],flat:!0,dense:!0};let b;return d==="add"?(k.onClick=_,b=V):k.onClick=F,v(te,k,b)}}function V(){return v("input",{ref:L,class:"q-uploader__input overflow-hidden absolute-full",tabindex:-1,type:"file",title:"",accept:l.accept,multiple:l.multiple===!0?"multiple":void 0,capture:l.capture,onMousedown:re,onClick:_,onChange:Z})}function se(){return r.header!==void 0?r.header(Q):[v("div",{class:"q-uploader__header-content column"},[v("div",{class:"flex flex-center no-wrap q-gutter-xs"},[$(e.queuedFiles.value.length!==0,"removeQueue",W),$(e.uploadedFiles.value.length!==0,"removeUploaded",U),e.isUploading.value===!0?v(ae,{class:"q-uploader__spinner"}):null,v("div",{class:"col column justify-center"},[l.label!==void 0?v("div",{class:"q-uploader__title"},[l.label]):null,v("div",{class:"q-uploader__subtitle"},[m.value+" / "+s.value])]),$(w.value,"add"),$(l.hideUploadBtn===!1&&n.value===!0,"upload",e.upload),$(e.isUploading.value,"clear",e.abort)])])]}function de(){return r.list!==void 0?r.list(Q):e.files.value.map(a=>v("div",{key:a.__key,class:"q-uploader__file relative-position"+(l.noThumbnails!==!0&&a.__img!==void 0?" q-uploader__file--img":"")+(a.__status==="failed"?" q-uploader__file--failed":a.__status==="uploaded"?" q-uploader__file--uploaded":""),style:l.noThumbnails!==!0&&a.__img!==void 0?{backgroundImage:'url("'+a.__img.src+'")'}:null},[v("div",{class:"q-uploader__file-header row flex-center no-wrap"},[a.__status==="failed"?v(qe,{class:"q-uploader__file-status",name:x.iconSet.type.negative,color:"negative"}):null,v("div",{class:"q-uploader__file-header-content col"},[v("div",{class:"q-uploader__title"},[a.name]),v("div",{class:"q-uploader__subtitle row items-center no-wrap"},[a.__sizeLabel+" / "+a.__progressLabel])]),a.__status==="uploading"?v(xe,{value:a.__progress,min:0,max:1,indeterminate:a.__progress===0}):v(te,{round:!0,dense:!0,flat:!0,icon:x.iconSet.uploader[a.__status==="uploaded"?"done":"clear"],onClick:()=>{X(a)}})])]))}Fe(()=>{e.isUploading.value===!0&&e.abort(),e.files.value.length!==0&&G()});const Q={};for(const a in e)he(e[a])===!0?be(Q,a,()=>e[a].value):Q[a]=e[a];return Object.assign(Q,{upload:J,reset:A,removeUploadedFiles:U,removeQueuedFiles:W,removeFile:X,pickFiles:_,addFiles:S}),ye(Q,{canAddFiles:()=>w.value,canUpload:()=>n.value,uploadSizeLabel:()=>m.value,uploadProgressLabel:()=>s.value}),g({...e,upload:J,reset:A,removeUploadedFiles:U,removeQueuedFiles:W,removeFile:X,pickFiles:_,addFiles:S,canAddFiles:w,canUpload:n,uploadSizeLabel:m,uploadProgressLabel:s}),()=>{const a=[v("div",{class:N.value},se()),v("div",{class:"q-uploader__list scroll"},de()),P("uploader")];e.isBusy.value===!0&&a.push(v("div",{class:"q-uploader__overlay absolute-full flex flex-center"},[v(ae)]));const d={ref:j,class:D.value};return w.value===!0&&Object.assign(d,{onDragover:c,onDragleave:t}),v("div",d,a)}}const Ee=()=>!0;function Re(u){const g={};return u.forEach(o=>{g[o]=Ee}),g}const je=Re(ie);var Le=({name:u,props:g,emits:o,injectPlugin:l})=>Se({name:u,props:{...Be,...g},emits:ze(o)===!0?{...je,...o}:[...ie,...o],setup(r,{expose:f}){return Ce(l,f)}});function B(u){return typeof u=="function"?u:()=>u}const Pe={url:[Function,String],method:{type:[Function,String],default:"POST"},fieldName:{type:[Function,String],default:()=>u=>u.name},headers:[Function,Array],formFields:[Function,Array],withCredentials:[Function,Boolean],sendRaw:[Function,Boolean],batch:[Function,Boolean],factory:Function},Oe=["factoryFailed","uploaded","failed","uploading"];function Te({props:u,emit:g,helpers:o}){const l=q([]),r=q([]),f=q(0),C=y(()=>({url:B(u.url),method:B(u.method),headers:B(u.headers),formFields:B(u.formFields),fieldName:B(u.fieldName),withCredentials:B(u.withCredentials),sendRaw:B(u.sendRaw),batch:B(u.batch)})),x=y(()=>f.value>0),I=y(()=>r.value.length!==0);let E;function R(){l.value.forEach(e=>{e.abort()}),r.value.length!==0&&(E=!0)}function T(){const e=o.queuedFiles.value.slice(0);o.queuedFiles.value=[],C.value.batch(e)?j(e):e.forEach(_=>{j([_])})}function j(e){if(f.value++,typeof u.factory!="function"){L(e,{});return}const _=u.factory(e);if(!_)g("factoryFailed",new Error("QUploader: factory() does not return properly"),e),f.value--;else if(typeof _.catch=="function"&&typeof _.then=="function"){r.value.push(_);const S=c=>{o.isAlive()===!0&&(r.value=r.value.filter(t=>t!==_),r.value.length===0&&(E=!1),o.queuedFiles.value=o.queuedFiles.value.concat(e),e.forEach(t=>{o.updateFileStatus(t,"failed")}),g("factoryFailed",c,e),f.value--)};_.then(c=>{E===!0?S(new Error("Aborted")):o.isAlive()===!0&&(r.value=r.value.filter(t=>t!==_),L(e,c))}).catch(S)}else L(e,_||{})}function L(e,_){const S=new FormData,c=new XMLHttpRequest,t=(n,D)=>_[n]!==void 0?B(_[n])(D):C.value[n](D),h=t("url",e);if(!h){console.error("q-uploader: invalid or no URL specified"),f.value--;return}const P=t("formFields",e);P!==void 0&&P.forEach(n=>{S.append(n.name,n.value)});let O=0,i=0,p=0,z=0,s;c.upload.addEventListener("progress",n=>{if(s===!0)return;const D=Math.min(z,n.loaded);o.uploadedSize.value+=D-p,p=D;let N=p-i;for(let A=O;N>0&&A<e.length;A++){const U=e[A];if(N>U.size)N-=U.size,O++,i+=U.size,o.updateFileStatus(U,"uploading",U.size);else{o.updateFileStatus(U,"uploading",N);return}}},!1),c.onreadystatechange=()=>{c.readyState<4||(c.status&&c.status<400?(o.uploadedFiles.value=o.uploadedFiles.value.concat(e),e.forEach(n=>{o.updateFileStatus(n,"uploaded")}),g("uploaded",{files:e,xhr:c})):(s=!0,o.uploadedSize.value-=p,o.queuedFiles.value=o.queuedFiles.value.concat(e),e.forEach(n=>{o.updateFileStatus(n,"failed")}),g("failed",{files:e,xhr:c})),f.value--,l.value=l.value.filter(n=>n!==c))},c.open(t("method",e),h),t("withCredentials",e)===!0&&(c.withCredentials=!0);const m=t("headers",e);m!==void 0&&m.forEach(n=>{c.setRequestHeader(n.name,n.value)});const w=t("sendRaw",e);e.forEach(n=>{o.updateFileStatus(n,"uploading",0),w!==!0&&S.append(t("fieldName",n),n,n.name),n.xhr=c,n.__abort=()=>{c.abort()},z+=n.size}),g("uploading",{files:e,xhr:c}),l.value.push(c),w===!0?c.send(new Blob(e)):c.send(S)}return{isUploading:x,isBusy:I,abort:R,upload:T}}var De={name:"QUploader",props:Pe,emits:Oe,injectPlugin:Te},Qe=Le(De);export{Qe as Q};
