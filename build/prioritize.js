(()=>{var e={645:()=>{rrzelegalCookiePrioritized=function(){"use strict";var e=rrzelegalCookiePrioritized,o={},t=!1,r=document.createDocumentFragment(),i={prioritizedCodeUnblocked:null};i.prioritizedCodeUnblocked=document.createEvent("Event"),i.prioritizedCodeUnblocked.initEvent("rrzelegal-cookie-prioritized-code-unblocked",!0,!0);var n,d=function(e){var o=e.split("<script");for(var t in o)if(-1!==o[t].indexOf("script>")){o[t]="<script"+o[t];var i=document.createElement("div"),n=document.createRange();n.selectNodeContents(i);var d=n.createContextualFragment(o[t]);i.appendChild(d),r.appendChild(i.firstElementChild)}};if(document.cookie.length){for(var a=document.cookie.split(";"),c=0;c<a.length;c++)try{a[c]=decodeURIComponent(a[c]);var l=a[c].split("="),s=void 0!==l[0]?l[0].trim():"",p=void 0!==l[1]?l[1].trim():"";if("rrzelegal-cookie"===s){var v=JSON.parse(decodeURIComponent(p));void 0!==v.domainPath&&v.domainPath===e.domain+e.path&&(o=v)}}catch(e){console.log("The cookie is spoiled:"),console.dir(a[c]),console.dir(e)}if(e.bots&&/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent.toLowerCase())&&(t=!0),Object.keys(o).length>0&&o.version===e.version&&(t=!0),t){for(var u in o.consents)for(var m in o.consents[u]){var g=o.consents[u][m];void 0!==e.optInJS[u]&&void 0!==e.optInJS[u][g]&&(d((n=e.optInJS[u][g],decodeURIComponent(Array.prototype.map.call(window.atob(n),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join("")))),delete e.optInJS[u][g])}document.getElementsByTagName("head")[0].appendChild(r),document.dispatchEvent(i.prioritizedCodeUnblocked)}}return e}(rrzelegalCookiePrioritized)}},o={};function t(r){var i=o[r];if(void 0!==i)return i.exports;var n=o[r]={exports:{}};return e[r](n,n.exports,t),n.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";t(645)})()})();
//# sourceMappingURL=prioritize.js.map