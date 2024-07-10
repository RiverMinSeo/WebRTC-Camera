(function(){"use strict";var e={6799:function(e,t,n){var o=n(5130),r=n(6768);function l(e,t){const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(n)}var a=n(1241);const i={},s=(0,a.A)(i,[["render",l]]);var c=s,u=n(4458);(0,u.k)("/WebRTC-Camera/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n(1387),v=n(4232),f=n(144),b=n(782),m=n(8420);const g=e=>((0,r.Qi)("data-v-a60aa614"),e=e(),(0,r.jt)(),e),p={id:"screen"},k={class:"navbar fixed-top d-block",style:{"z-index":"999","background-color":"rgba(0, 0, 0, 0.5)"}},w={class:"row"},h={class:"col-4"},y={class:"d-flex"},L={type:"button",class:"btn text-white"},x=g((()=>(0,r.Lk)("i",{class:"bi bi-eye-fill"},null,-1))),C={class:"col-8 text-end"},R={key:0},E=g((()=>(0,r.Lk)("i",{class:"bi bi-fullscreen-exit"},null,-1))),q=[E],F={key:1},j=g((()=>(0,r.Lk)("i",{class:"bi bi-fullscreen"},null,-1))),I=[j],O=g((()=>(0,r.Lk)("button",{type:"button",class:"btn text-white","data-bs-toggle":"modal","data-bs-target":"#qrcodeModal"},[(0,r.Lk)("i",{class:"bi bi-qr-code"}),(0,r.eW)(" QRCode ")],-1))),P={class:"fixed-top d-flex w-100 h-100 align-items-center justify-content-center bg-black",style:{"z-index":"1"}},_={class:"modal fade",id:"qrcodeModal",tabindex:"-1","aria-labelledby":"qrcodeModalLabel","aria-hidden":"true"},z={class:"modal-dialog modal-dialog-centered"},W={class:"modal-content"},A={class:"modal-body"},M={class:"row"},S={class:"col"},T=g((()=>(0,r.Lk)("div",{class:"col-2 ms-auto text-end"},[(0,r.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),X={key:0},K=["src"],V=g((()=>(0,r.Lk)("div",{class:"modal-footer justify-content-center border-0"},[(0,r.Lk)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal","aria-label":"Close"},"Close")],-1)));var N={__name:"HomeView",setup(e){const t=(0,b.Pj)(),n=(0,f.KR)(null);(0,f.KR)({});const o=(0,f.KR)(null),l=(0,f.KR)(!1),a=(0,f.KR)({}),i=(0,f.KR)(!1),s=(0,r.EW)((()=>t.getters.getPeerId)),c=(0,r.EW)((()=>/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent))),u=(0,r.EW)((()=>/wv/i.test(window.navigator.userAgent))),d=async()=>{const e=window.screen.width,t=window.screen.height,n=window.devicePixelRatio,o=Math.floor(e*n),r=Math.floor(t*n);console.log(`videoWidth: ${o}`),console.log(`videoHeight: ${r}`);let l={video:{width:{exact:o},height:{exact:r}},audio:!1};c.value&&(l.video.facingMode={exact:"environment"});try{const e=navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,t=await e(l);let n=t.getVideoTracks()[0].getSettings();return console.log(JSON.stringify(n)),t}catch(a){console.error(a)}},g=()=>{const e=document.querySelector("#screen");document.fullscreenElement?(document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.exitFullscreen(),i.value=!1):(e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.requestFullscreen(),i.value=!0)};return(0,r.sV)((async()=>{const e=await d();n.value.srcObject=e,n.value.play(),o.value=await m.toDataURL(s.value);const t=new Peer(s.value);t.on("open",(e=>{})),t.on("connection",(e=>{e.on("close",(()=>{delete a.value[e.peer]}))})),t.on("call",(t=>{t.answer(e),a.value[t.peer]=t,t.on("close",(e=>{console.log("close")}))}))})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",p,[(0,r.Lk)("nav",k,[(0,r.Lk)("div",w,[(0,r.Lk)("div",h,[(0,r.Lk)("div",y,[(0,r.Lk)("button",L,[x,(0,r.eW)("   "+(0,v.v_)(Object.values(a.value).length),1)])])]),(0,r.Lk)("div",C,[u.value?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",{key:0,type:"button",class:"btn text-white",onClick:t[0]||(t[0]=e=>g())},[i.value?((0,r.uX)(),(0,r.CE)("span",R,q)):((0,r.uX)(),(0,r.CE)("span",F,I))])),O])])]),(0,r.Lk)("div",P,[(0,r.Lk)("video",{class:(0,v.C4)(["video",[l.value?"mirror":""]]),ref_key:"videoEl",ref:n},null,2)]),(0,r.Lk)("div",_,[(0,r.Lk)("div",z,[(0,r.Lk)("div",W,[(0,r.Lk)("div",A,[(0,r.Lk)("div",M,[(0,r.Lk)("div",S," ID: "+(0,v.v_)(s.value),1),T]),o.value?((0,r.uX)(),(0,r.CE)("div",X,[(0,r.Lk)("img",{class:"w-100",src:o.value},null,8,K)])):(0,r.Q3)("",!0)]),V])])])]))}};const Q=(0,a.A)(N,[["__scopeId","data-v-a60aa614"]]);var U=Q,D=n(3574);const $={class:"fixed-top w-100 h-100 d-flex align-items-center justify-content-center"},G=(0,r.Lk)("div",{class:"text-center"},[(0,r.Lk)("div",{class:"spinner-border text-primary mb-3",role:"status"},[(0,r.Lk)("span",{class:"visually-hidden"})]),(0,r.Lk)("div",{class:"h4 text-primary"},"Initializing...")],-1),H=[G];var B={__name:"InitializeView",setup(e){const t=(0,b.Pj)(),n=(0,d.rd)(),o=(0,d.lq)();return(0,r.sV)((()=>{let e=localStorage.getItem("myid");null==e&&(e=o.query.uuid,e=null==e?(0,D.A)():e,localStorage.setItem("myid",e)),t.commit("setPeerId",e),n.replace("/")})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",$,H))}};const J=B;var Y=J,Z=(0,b.y$)({state:{peerId:null},getters:{getPeerId(e){return e.peerId}},mutations:{setPeerId(e,t){e.peerId=t}},actions:{},modules:{}});const ee=[{path:"/",name:"home",component:U,beforeEnter:(e,t,n)=>{const o=Z.getters["getPeerId"];if(o)n();else{const t=e.query;n({path:"/initialize",query:t})}}},{path:"/initialize",name:"initialize",component:Y}],te=(0,d.aE)({history:(0,d.LA)("/WebRTC-Camera/"),routes:ee});var ne=te;(0,o.Ef)(c).use(Z).use(ne).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,l){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],l=e[u][2];for(var i=!0,s=0;s<o.length;s++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(i=!1,l<a&&(a=l));if(i){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,r,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,l,a=o[0],i=o[1],s=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(s)var u=s(n)}for(t&&t(o);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self["webpackChunkWebRTC_Camera"]=self["webpackChunkWebRTC_Camera"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(6799)}));o=n.O(o)})();
//# sourceMappingURL=app.545f6ba945a0354e.js.map