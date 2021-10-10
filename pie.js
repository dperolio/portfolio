console.log('i like pie!');
window.pie = 'pie';
const style = document.createElement('style');
style.appendChild(document.createTextNode(`* { color: teal; }`));
document.body.appendChild(style);

console.log(window.webpackJsonp);

(function(){"use strict";function p(){var e=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!e||!indexedDB.databases)return Promise.resolve();var n;return new Promise(function(o){var t=function(){return indexedDB.databases().finally(o)};n=setInterval(t,100),t()}).finally(function(){return clearInterval(n)})}function a(e){return new Promise((n,o)=>{e.oncomplete=e.onsuccess=()=>n(e.result),e.onabort=e.onerror=()=>o(e.error)})}function f(e,n){const o=p().then(()=>{const t=indexedDB.open(e);return t.onupgradeneeded=()=>t.result.createObjectStore(n),a(t)});return(t,i)=>o.then(l=>i(l.transaction(n,t).objectStore(n)))}let s;function d(){return s||(s=f("keyval-store","keyval")),s}function m(e,n=d()){return n("readonly",o=>a(o.get(e)))}function g(e,n,o=d()){return o("readwrite",t=>(t.put(n,e),a(t.transaction)))}console.log("will it?"),console.log("i like cheese"),g("hello","world").then(()=>console.log("It worked!")).catch(e=>console.log("It failed!",e)),m("hello").then(e=>console.log(e));class h extends HTMLElement{constructor(){super();const n=this.attachShadow({mode:"open"}),o=document.createElement("span");o.setAttribute("class","wrapper");const t=document.createElement("span");t.setAttribute("class","icon"),t.setAttribute("tabindex",0);const i=document.createElement("span");i.setAttribute("class","info");const l=this.getAttribute("data-text");i.textContent=l;let c;this.hasAttribute("img")?c=this.getAttribute("img"):c="img/default.png";const u=document.createElement("img");u.src=c,t.appendChild(u);const r=document.createElement("style");console.log(r.isConnected),r.textContent=`
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `,n.appendChild(r),console.log(r.isConnected),n.appendChild(o),o.appendChild(t),o.appendChild(i)}}customElements.define("popup-info",h)})();
