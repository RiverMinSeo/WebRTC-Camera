(function(){"use strict";var e={5957:function(e,t,n){var o=n(5130),r=n(6768);function l(e,t){const n=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.Wv)(n)}var a=n(1241);const s={},i=(0,a.A)(s,[["render",l]]);var c=i,u=n(4458);(0,u.k)("/WebRTC-Camera/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var d=n(1387),v=n(4232),b=n(144),f=n(782),m=n(8420);const p=e=>((0,r.Qi)("data-v-e0b0d65a"),e=e(),(0,r.jt)(),e),g={id:"screen"},k={class:"navbar fixed-top d-block",style:{"z-index":"999","background-color":"rgba(0, 0, 0, 0.5)"}},y={class:"row"},h={class:"col-sm-8"},w={class:"d-flex"},L={type:"button",class:"btn text-white"},x=p((()=>(0,r.Lk)("i",{class:"bi bi-eye-fill"},null,-1))),C={class:"col-sm-4 text-end"},R={key:0},q=p((()=>(0,r.Lk)("i",{class:"bi bi-fullscreen-exit"},null,-1))),F=[q],j={key:1},E=p((()=>(0,r.Lk)("i",{class:"bi bi-fullscreen"},null,-1))),I=[E],O=p((()=>(0,r.Lk)("i",{class:"bi bi-arrow-left-right"},null,-1))),P=p((()=>(0,r.Lk)("button",{type:"button",class:"btn text-white","data-bs-toggle":"modal","data-bs-target":"#qrcodeModal"},[(0,r.Lk)("i",{class:"bi bi-qr-code"}),(0,r.eW)(" QRCode ")],-1))),_={class:"fixed-top d-flex w-100 h-100 align-items-center justify-content-center bg-black",style:{"z-index":"1"}},z={class:"modal fade",id:"qrcodeModal",tabindex:"-1","aria-labelledby":"qrcodeModalLabel","aria-hidden":"true"},A={class:"modal-dialog modal-dialog-centered"},M={class:"modal-content"},W={class:"modal-body"},S={class:"row"},K={class:"col"},T=p((()=>(0,r.Lk)("div",{class:"col-2 ms-auto text-end"},[(0,r.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1))),X={key:0},U=["src"],V=p((()=>(0,r.Lk)("div",{class:"modal-footer justify-content-center border-0"},[(0,r.Lk)("button",{type:"button",class:"btn btn-primary","data-bs-dismiss":"modal","aria-label":"Close"},"Close")],-1)));var D={__name:"HomeView",setup(e){const t=(0,f.Pj)(),n=(0,b.KR)(null);(0,b.KR)({});const o=(0,b.KR)(null),l=(0,b.KR)(!1),a=(0,b.KR)({}),s=(0,b.KR)(!1),i=(0,r.EW)((()=>t.getters.getPeerId)),c=()=>/iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent),u=async()=>{let e={video:{width:{exact:1920},height:{exact:1080}},audio:!1};c()&&(e.video.facingMode={exact:"environment"}),console.log(e);try{const t=navigator.mediaDevices.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,n=await t(e);return n}catch(t){console.error(t)}},d=()=>{const e=document.querySelector("#screen");document.fullscreenElement?(document.webkitCancelFullscreen?document.webkitCancelFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():document.exitFullscreen(),s.value=!1):(e.webkitRequestFullscreen?e.webkitRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.msRequestFullscreen?e.msRequestFullscreen():e.requestFullscreen(),s.value=!0)};return(0,r.sV)((async()=>{const e=await u();n.value.srcObject=e,n.value.play(),o.value=await m.toDataURL(i.value);const t=new Peer(i.value);t.on("open",(e=>{})),t.on("connection",(e=>{console.log(e),e.on("close",(()=>{delete a.value[e.peer]}))})),t.on("call",(t=>{t.answer(e),a.value[t.peer]=t,t.on("close",(e=>{console.log("close")}))}))})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",g,[(0,r.Lk)("nav",k,[(0,r.Lk)("div",y,[(0,r.Lk)("div",h,[(0,r.Lk)("div",w,[(0,r.Lk)("button",L,[x,(0,r.eW)("   "+(0,v.v_)(Object.values(a.value).length),1)])])]),(0,r.Lk)("div",C,[(0,r.Lk)("button",{type:"button",class:"btn text-white",onClick:t[0]||(t[0]=e=>d())},[s.value?((0,r.uX)(),(0,r.CE)("span",R,F)):((0,r.uX)(),(0,r.CE)("span",j,I))]),(0,r.Lk)("button",{type:"button",class:"btn text-white",onClick:t[1]||(t[1]=()=>{l.value=!l.value})},[O,(0,r.eW)(" Mirror ")]),P])])]),(0,r.Lk)("div",_,[(0,r.Lk)("video",{class:(0,v.C4)(["video",[l.value?"mirror":""]]),ref_key:"videoEl",ref:n},null,2)]),(0,r.Lk)("div",z,[(0,r.Lk)("div",A,[(0,r.Lk)("div",M,[(0,r.Lk)("div",W,[(0,r.Lk)("div",S,[(0,r.Lk)("div",K," ID: "+(0,v.v_)(i.value),1),T]),o.value?((0,r.uX)(),(0,r.CE)("div",X,[(0,r.Lk)("img",{class:"w-100",src:o.value},null,8,U)])):(0,r.Q3)("",!0)]),V])])])]))}};const N=(0,a.A)(D,[["__scopeId","data-v-e0b0d65a"]]);var Q=N,G=n(3574);const B={class:"fixed-top w-100 h-100 d-flex align-items-center justify-content-center"},H=(0,r.Lk)("div",{class:"text-center"},[(0,r.Lk)("div",{class:"spinner-border text-primary mb-3",role:"status"},[(0,r.Lk)("span",{class:"visually-hidden"})]),(0,r.Lk)("div",{class:"h4 text-primary"},"Initializing...")],-1),$=[H];var J={__name:"InitializeView",setup(e){const t=(0,f.Pj)(),n=(0,d.rd)(),o=(0,d.lq)();return(0,r.sV)((()=>{let e=localStorage.getItem("myid");null==e&&(e=o.query.uuid,e=null==e?(0,G.A)():e,localStorage.setItem("myid",e)),t.commit("setPeerId",e),n.replace("/")})),(e,t)=>((0,r.uX)(),(0,r.CE)("div",B,$))}};const Y=J;var Z=Y,ee=(0,f.y$)({state:{peerId:null},getters:{getPeerId(e){return e.peerId}},mutations:{setPeerId(e,t){e.peerId=t}},actions:{},modules:{}});const te=[{path:"/",name:"home",component:Q,beforeEnter:(e,t,n)=>{const o=ee.getters["getPeerId"];if(o)n();else{const t=e.query;n({path:"/initialize",query:t})}}},{path:"/initialize",name:"initialize",component:Z}],ne=(0,d.aE)({history:(0,d.LA)("/WebRTC-Camera/"),routes:te});var oe=ne;(0,o.Ef)(c).use(ee).use(oe).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,l){if(!o){var a=1/0;for(u=0;u<e.length;u++){o=e[u][0],r=e[u][1],l=e[u][2];for(var s=!0,i=0;i<o.length;i++)(!1&l||a>=l)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(s=!1,l<a&&(a=l));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}l=l||0;for(var u=e.length;u>0&&e[u-1][2]>l;u--)e[u]=e[u-1];e[u]=[o,r,l]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,l,a=o[0],s=o[1],i=o[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(i)var u=i(n)}for(t&&t(o);c<a.length;c++)l=a[c],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return n.O(u)},o=self["webpackChunkWebRTC_Camera"]=self["webpackChunkWebRTC_Camera"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(5957)}));o=n.O(o)})();
//# sourceMappingURL=app.ed2dfcd23b436adf.js.map