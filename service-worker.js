if(!self.define){let e,r={};const s=(s,i)=>(s=new URL(s+".js",i).href,r[s]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=r,document.head.appendChild(e)}else e=s,importScripts(s),r()})).then((()=>{let e=r[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(r[o])return;let t={};const a=e=>s(e,o),c={module:{uri:o},exports:t,require:a};r[o]=Promise.all(i.map((e=>c[e]||a(e)))).then((e=>(n(...e),t)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"WebRTC-Camera"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/WebRTC-Camera/css/app.ca951ee0.css",revision:null},{url:"/WebRTC-Camera/index.html",revision:"a9107cd2f2674dbd1f2cf39f016e2232"},{url:"/WebRTC-Camera/js/app.adec10c846d9e7f6.js",revision:null},{url:"/WebRTC-Camera/js/chunk-vendors.adec10c846d9e7f6.js",revision:null},{url:"/WebRTC-Camera/manifest.json",revision:"d96077ff78b1802c526aab333adb3920"},{url:"/WebRTC-Camera/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
