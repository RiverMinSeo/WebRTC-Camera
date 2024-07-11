(function(){"use strict";var e={3921:function(e,t,n){var o=n(5130),r=n(6768);function a(e,t){const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(n)}var i=n(1241);const l={},s=(0,i.A)(l,[["render",a]]);var c=s,u=n(4458);const d=()=>/wv/i.test(window.navigator.userAgent);d()||(0,u.k)("/WebRTC-Camera/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var v=n(1387),f=n(4232),b=n(144),m=n(782),p=n(8420);const g=e=>((0,r.Qi)("data-v-78c57737"),e=e(),(0,r.jt)(),e),w={id:"screen"},k={class:"navbar fixed-top d-block",style:{"z-index":"999","background-color":"rgba(0, 0, 0, 0.5)"}},h={class:"row"},y={class:"col-4"},x={class:"d-flex"},L={type:"button",class:"btn text-white"},C=g((()=>(0,r.Lk)("i",{class:"bi bi-eye-fill"},null,-1))),E={class:"col-8 text-end"},R={key:0},q=g((()=>(0,r.Lk)("i",{class:"bi bi-fullscreen-exit"},null,-1))),F=[q],j={key:1},I=g((()=>(0,r.Lk)("i",{class:"bi bi-fullscreen"},null,-1))),O=[I],P=g((()=>(0,r.Lk)("button",{type:"button",class:"btn text-white","data-bs-toggle":"modal","data-bs-target":"#qrcodeModal"},[(0,r.Lk)("i",{class:"bi bi-qr-code"}),(0,r.eW)(" QRCode ")],-1))),_={class:"fixed-top d-flex w-100 h-100 align-items-center justify-content-center bg-black",style:{"z-index":"1"}},z={key:0,class:"fixed-bottom w-100 text-center text-white d-flex justify-content-center align-items-center p-3"},W=g((()=>(0,r.Lk)("i",{class:"bi bi-phone-landscape h1"},null,-1))),A=g((()=>(0,r.Lk)("span",{class:"h5 ps-3"},"가로모드로 이용해주세요",-1))),M={class:"modal fade",id:"qrcodeModal",tabindex:"-1","aria-labelledby":"qrcodeModalLabel","aria-hidden":"true"},K={class:"modal-dialog modal-dialog-centered"},S={class:"modal-content"},X={class:"modal-body"},T={class:"row"},Q={class:"col"},U=g((()=>(0,r.Lk)("div",{class:"col-2 ms-auto text-end"},[(0,r.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),V={key:0},D=["src"],N=g((()=>(0,r.Lk)("div",{class:"modal-footer justify-content-center border-0"},[(0,r.Lk)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal","aria-label":"Close"},"Close")],-1)));var G={__name:"HomeView",setup(e){const t=(0,m.Pj)(),n=(0,b.KR)(null);(0,b.KR)({});const o=(0,b.KR)(null),a=(0,b.KR)(!1),i=(0,b.KR)({}),l=(0,b.KR)(!1),s=(0,b.KR)(null),c=(0,b.KR)(""),u=(0,r.EW)((()=>t.getters.getPeerId)),d=(0,r.EW)((()=>/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent))),v=(0,r.EW)((()=>/wv/i.test(window.navigator.userAgent))),g=(0,r.EW)((()=>c.value.indexOf("landscape")>-1)),q=async()=>{const e=window.screen.width,t=window.screen.height,n=window.devicePixelRatio??1;let o=Math.floor(e*n),r=Math.floor(t*n),a={video:{width:{exact:o},height:{exact:r}},audio:!1};d.value&&(a.video.aspectRatio=e/t,a.video.facingMode={exact:"environment"});try{const e=navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,t=await e(a);return t}catch(i){console.error(i)}},I=()=>{const e=document.querySelector("#screen");document.fullscreenElement?(document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.exitFullscreen(),l.value=!1):(e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.requestFullscreen(),l.value=!0)},G=e=>{c.value=e.target.screen.orientation.type};return(0,r.sV)((async()=>{window.addEventListener("orientationchange",G),c.value=window.screen.orientation.type;const e=await q();s.value=e,n.value.srcObject=e,n.value.muted=!0,n.value.play(),o.value=await p.toDataURL(u.value);const t=new Peer(u.value);t.on("open",(e=>{})),t.on("connection",(e=>{e.on("close",(()=>{delete i.value[e.peer]}))})),t.on("call",(t=>{t.answer(e),i.value[t.peer]=t,t.on("close",(e=>{console.log("close")}))}))})),(0,r.hi)((()=>{window.removeEventListener("orientationchange",G)})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",w,[(0,r.Lk)("nav",k,[(0,r.Lk)("div",h,[(0,r.Lk)("div",y,[(0,r.Lk)("div",x,[(0,r.Lk)("button",L,[C,(0,r.eW)("   "+(0,f.v_)(Object.values(i.value).length),1)])])]),(0,r.Lk)("div",E,[v.value?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("button",{key:0,type:"button",class:"btn text-white",onClick:t[0]||(t[0]=e=>I())},[l.value?((0,r.uX)(),(0,r.CE)("span",R,F)):((0,r.uX)(),(0,r.CE)("span",j,O))])),P])])]),(0,r.Lk)("div",_,[(0,r.Lk)("video",{class:(0,f.C4)(["video",[a.value?"mirror":""]]),ref_key:"videoEl",ref:n},null,2)]),!v.value&&d.value&&g.value?((0,r.uX)(),(0,r.CE)("div",z,[W,(0,r.eW)(),A])):(0,r.Q3)("",!0),(0,r.Lk)("div",M,[(0,r.Lk)("div",K,[(0,r.Lk)("div",S,[(0,r.Lk)("div",X,[(0,r.Lk)("div",T,[(0,r.Lk)("div",Q," ID: "+(0,f.v_)(u.value),1),U]),o.value?((0,r.uX)(),(0,r.CE)("div",V,[(0,r.Lk)("img",{class:"w-100",src:o.value},null,8,D)])):(0,r.Q3)("",!0)]),N])])])]))}};const B=(0,i.A)(G,[["__scopeId","data-v-78c57737"]]);var H=B,$=n(3574);const J={class:"fixed-top w-100 h-100 d-flex align-items-center justify-content-center"},Y=(0,r.Lk)("div",{class:"text-center"},[(0,r.Lk)("div",{class:"spinner-border text-primary mb-3",role:"status"},[(0,r.Lk)("span",{class:"visually-hidden"})]),(0,r.Lk)("div",{class:"h4 text-primary"},"Initializing...")],-1),Z=[Y];var ee={__name:"InitializeView",setup(e){const t=(0,m.Pj)(),n=(0,v.rd)(),o=(0,v.lq)();return(0,r.sV)((()=>{let e=localStorage.getItem("myid");null==e&&(e=o.query.uuid,e=null==e?(0,$.A)():e,localStorage.setItem("myid",e)),t.commit("setPeerId",e),n.replace("/")})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",J,Z))}};const te=ee;var ne=te,oe=(0,m.y$)({state:{peerId:null},getters:{getPeerId(e){return e.peerId}},mutations:{setPeerId(e,t){e.peerId=t}},actions:{},modules:{}});const re=[{path:"/",name:"home",component:H,beforeEnter:(e,t,n)=>{const o=oe.getters["getPeerId"];if(o)n();else{const t=e.query;n({path:"/initialize",query:t})}}},{path:"/initialize",name:"initialize",component:ne}],ae=(0,v.aE)({history:(0,v.LA)("/WebRTC-Camera/"),routes:re});var ie=ae;(0,o.Ef)(c).use(oe).use(ie).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],a=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],l=o[1],s=o[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(s)var u=s(n)}for(t&&t(o);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},o=self["webpackChunkWebRTC_Camera"]=self["webpackChunkWebRTC_Camera"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(3921)}));o=n.O(o)})();
//# sourceMappingURL=app.649189989579fa0b.js.map