(()=>{var e={131:()=>{function e(o){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(o)}var o;o=jQuery,window.RRZELegal=function(){"use strict";var t,n="#RRZELegalBanner input[type='checkbox']",a="#RRZELegalBanner",i="#RRZELegalBannerWrap",r="#RRZELegalBanner input[type='checkbox'][name='cookieGroup[]']",c="._rrzelegal-btn-switch-status",s="data-rrzelegal-cookie-uid",l="data-rrzelegal-cookie-consent-history",d=".RRZELegal",u={},h={},g={},p={},k={scriptBlockerId:{},jsHandle:{}},f=!1,v={consents:{},expires:null,uid:"anonymous",version:null},m="rrze-legal-consent",b={consentSaved:null,codeUnblocked:null,codeUnblockedAfterConsent:null},y=null,x=!1,C=null;function z(e,o){if(o){var t=o.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'),n=Array.from(t).filter((function(e){return 0!==e.offsetHeight})),a=n[0],i=n[n.length-1];("Tab"===e.key||9===e.keyCode)&&(e.shiftKey?document.activeElement===a&&(e.preventDefault(),i.focus()):document.activeElement===i&&(e.preventDefault(),a.focus()))}}function L(e){e.addEventListener("keydown",(function(o){return z(o,e)}),!0)}function R(e){e.removeEventListener("keydown",(function(o){return z(o,e)}),!0)}function w(){o(a).attr("aria-modal",!1)}var O=function(i){o(a).attr("aria-modal",!0),o("body").addClass("rrzelegal-position-fix"),L(document.querySelector(".cookie-box")),void 0===i&&(i=!1);var c=o(r),s=null;Object.keys(v.consents).length?(o("[data-rrzelegal-cookie-group]").each((function(){-1===Object.keys(v.consents).indexOf(this.dataset.rrzelegalCookieGroup)&&o(this).addClass("rrzelegal-hide")})),c.length&&"1"===t.boxLayoutAdvanced&&c.each((function(){s=this.value,"string"==typeof this.dataset.rrzelegalCookieCheckbox&&("object"==e(v.consents[s])?o(this).prop("checked",!0):o(this).prop("checked",!1))}))):c.length&&c.each((function(){s=this.value,"1"===t.boxLayoutAdvanced&&"1"===t.ignorePreSelectStatus&&!1===f&&"essential"!==s&&(o(this).prop("checked",!1),o(n+"[name='cookies["+s+"][]']").prop("checked",!1).trigger("change"))})),t.blockContent?(o("#RRZELegalBanner > div").addClass("_rrzelegal-block-content"),t.animation?(o("#RRZELegalBanner > div").addClass("_rrzelegal-bg-animation"),setTimeout((function(){o("#RRZELegalBanner > div").addClass("_rrzelegal-bg-dark")}),25)):o("#RRZELegalBanner > div").addClass("_rrzelegal-bg-dark")):o("._rrzelegal-"+t.boxLayout+"-wrap").addClass("_rrzelegal-position-fixed"),o("#RRZELegalBanner > div").css("display",""),o("#RRZELegalBanner > div").addClass("show-cookie-box");var l=o("#RRZELegalBanner > div")[0];return l.offsetWidth,l.offsetHeight,o("#BannerSaveButton")[0].focus({preventScroll:!0}),C=o("._rrzelegal-"+t.boxLayout+"-wrap")[0].offsetWidth+"px",!0},E=function(){return w(),R(document.querySelector(".cookie-box")),t.animation&&(o("#RRZELegalBanner ._rrzelegal-"+t.boxLayout).removeClass("delay-1s "),o("#RRZELegalBanner ._rrzelegal-"+t.boxLayout).removeClass(t.animationIn),o("#RRZELegalBanner ._rrzelegal-"+t.boxLayout).addClass(t.animationOut)),o("#RRZELegalBanner > div").addClass("rrzelegal-hide"),t.blockContent?o("#RRZELegalBanner > div").removeClass("_rrzelegal-bg-dark"):o("._rrzelegal-"+t.boxLayout+"-wrap").addClass("_rrzelegal-position-fixed"),setTimeout((function(){o("._rrzelegal-"+t.boxLayout+"-wrap").removeAttr("style"),o("._rrzelegal-"+t.boxLayout+" .cookie-box .container").removeAttr("style"),o("._rrzelegal-"+t.boxLayout+" .cookie-preference .container").removeAttr("style"),t.animation&&(o("._rrzelegal-"+t.boxLayout).removeClass("_rrzelegal-animated"),o("._rrzelegal-"+t.boxLayout).removeClass("delay-1s"),o("._rrzelegal-"+t.boxLayout).removeClass(t.animationIn),o("._rrzelegal-"+t.boxLayout).removeClass(t.animationOut)),o("#RRZELegalBanner > div").removeClass("show-cookie-box"),t.blockContent&&o("#RRZELegalBanner > div").removeClass("_rrzelegal-block-content")}),t.animation?1e3:0),o("body").removeClass("rrzelegal-position-fix"),!0},S=function(){R(document.querySelector(".cookie-box")),L(document.querySelector(".cookie-preference"));var e=o(r),a=null;e.length&&e.each((function(){a=this.value,Object.keys(v.consents).length?!1===f&&(void 0!==v.consents[a]?(o(this).prop("checked",!0),o(this).trigger("change"),o(n+"[name='cookies["+a+"][]']").each((function(){-1!==v.consents[a].indexOf(this.value)?o(this).prop("checked",!0):o(this).prop("checked",!1),o(this).trigger("change")}))):(o(this).prop("checked",!1),o(this).trigger("change"),o(n+"[name='cookies["+a+"][]']").prop("checked",!1).trigger("change"))):("1"===t.ignorePreSelectStatus&&!1===f&&(o(this).prop("checked",!1),o("#RRZELegalBanner [data-rrzelegal-cookie-group='"+this.value+"']").addClass("rrzelegal-hide")),o(this).trigger("change"),o(n+"[name='cookies["+a+"][]']").each((function(){"1"===t.ignorePreSelectStatus&&!1===f&&o(this).prop("checked",!1),o(this).trigger("change")})))})),o("._rrzelegal-"+t.boxLayout+" .cookie-box .container").animate({height:0,opacity:0},(function(){o("._rrzelegal-"+t.boxLayout+" .cookie-box").attr("aria-hidden",!0),o("._rrzelegal-"+t.boxLayout+" .cookie-preference").attr("aria-hidden",!1),o("#CookiePrefSave")[0].focus({preventScroll:!0}),o("._rrzelegal-"+t.boxLayout+"-wrap").animate({width:"100vw",maxWidth:"box"===t.boxLayout?"768px":"100%"},"box"===t.boxLayout?400:0,(function(){var e=o("._rrzelegal-"+t.boxLayout+" .cookie-preference .container")[0].scrollHeight;o("._rrzelegal-"+t.boxLayout+" .cookie-preference .container").animate({height:"80vh",maxHeight:e,opacity:1})}))}))},B=function(){R(document.querySelector(".cookie-preference")),o("._rrzelegal-"+t.boxLayout+" .cookie-preference .container").animate({height:0,opacity:0},(function(){o("._rrzelegal-"+t.boxLayout+" .cookie-box").attr("aria-hidden",!1),o("._rrzelegal-"+t.boxLayout+" .cookie-preference").attr("aria-hidden",!0),o("._rrzelegal-"+t.boxLayout+"-wrap").animate({maxWidth:"box"===t.boxLayout?C:"100%"},"box"===t.boxLayout?400:0,(function(){var e=o("._rrzelegal-"+t.boxLayout+" .cookie-box .container")[0].scrollHeight+"px";o("._rrzelegal-"+t.boxLayout+" .cookie-box .container").animate({height:e,opacity:1})})),o("#BannerSaveButton")[0].focus()}))},_=function(e){return void 0!==e&&e.preventDefault(),o("._rrzelegal-"+t.boxLayout+" .cookie-preference .container a[data-cookie-back]").css("display","none"),o("._rrzelegal-"+t.boxLayout+" .cookie-preference .container a[data-cookie-back] + span._rrzelegal-separator").css("display","none"),o("._rrzelegal-"+t.boxLayout+" .cookie-box .container").css("height",0),o("._rrzelegal-"+t.boxLayout+" .cookie-box .container").css("opacity",0),o("._rrzelegal-"+t.boxLayout+"-wrap").css({width:"100vw",maxWidth:"box"===t.boxLayout?"768px":"100%"}),O(!1),setTimeout((function(){S()}),500),!0},j=function(){var e=o(r),t=null;e.length&&e.each((function(){t=this.value,o(this).prop("checked",!0),o(this).trigger("change"),o(n+"[name='cookies["+t+"][]']").each((function(){o(this).prop("checked",!0),o(this).trigger("change")}))})),Z(),E()},I=function(){o(document).on("click",r,(function(){f=!0,this.checked?(o(n+"[name='cookies["+this.value+"][]']").prop("checked",!0).trigger("change"),o(r+"[value='"+this.value+"']").prop("checked",!0),o("#RRZELegalBanner [data-rrzelegal-cookie-group='"+this.value+"']").length&&o("#RRZELegalBanner [data-rrzelegal-cookie-group='"+this.value+"']").removeClass("rrzelegal-hide")):(o(n+"[name='cookies["+this.value+"][]']").prop("checked",!1).trigger("change"),o(r+"[value='"+this.value+"']").prop("checked",!1),o("#RRZELegalBanner [data-rrzelegal-cookie-group='"+this.value+"']").length&&o("#RRZELegalBanner [data-rrzelegal-cookie-group='"+this.value+"']").addClass("rrzelegal-hide"))}))},D=function(){o(document).on("click",n+"[name^='cookies']",(function(){f=!0,this.checked&&(o(r+"[value='"+this.dataset.cookieGroup+"']").prop("checked",!0).trigger("change"),o("#RRZELegalBanner [data-rrzelegal-cookie-group='"+this.dataset.cookieGroup+"']").length&&o("#RRZELegalBanner [data-rrzelegal-cookie-group='"+this.dataset.cookieGroup+"']").removeClass("rrzelegal-hide"))}))},T=function(){!0===this.checked?(o(this).parent().parent().children(c).children().last().css("display","none"),o(this).parent().parent().children(c).children().first().css("display","inline-block")):(o(this).parent().parent().children(c).children().first().css("display","none"),o(this).parent().parent().children(c).children().last().css("display","inline-block"))},Z=function(){var e={essential:t.cookies.essential},a=o(r+":checked"),i=o(n+"[name^='cookies']:checked");if(a.length&&(a.each((function(){this.value.length&&new RegExp(/^[a-z-_]{3,}$/).test(this.value)&&"essential"!==this.value&&(e[this.value]=[])})),i.length&&i.each((function(){this.value.length&&"string"==typeof this.dataset.cookieGroup&&new RegExp(/^[a-z-_]{3,}$/).test(this.value)&&new RegExp(/^[a-z-_]{3,}$/).test(this.dataset.cookieGroup)&&e[this.dataset.cookieGroup].push(this.value)}))),Object.keys(v.consents).length)for(var c in v.consents)if(void 0!==e[c])for(var s in v.consents[c])-1===e[c].indexOf(v.consents[c][s])&&V(l);else if(void 0!==u[c])for(var l in u[c])V(l);if(Object.keys(v.consents).length)for(var c in v.consents)if(void 0!==e[c])for(var s in v.consents[c])-1===e[c].indexOf(v.consents[c][s])&&F(c,v.consents[c][s]);else if(void 0!==u[c])for(var l in u[c])F(c,l);P(e,!1),"1"!==t.reloadAfterConsent&&(q(),W(),$(),document.dispatchEvent(b.codeUnblockedAfterConsent),document.dispatchEvent(b.codeUnblocked))},U=function(){var e=!1;return"string"==typeof v.version&&(v.version===t.cookieVersion?e=!0:v.consents={}),e},A=function(){if(document.cookie.length)for(var e=document.cookie.split(";"),o=0;o<e.length;o++)try{e[o]=decodeURIComponent(e[o]);var n=e[o].split("="),a=void 0!==n[0]?n[0].trim():"",i=void 0!==n[1]?n[1].trim():"";if(a===m){var r=JSON.parse(decodeURIComponent(i));void 0!==r.domainPath?r.domainPath===t.cookieDomain+t.cookiePath&&(v=r):v=r}}catch(t){console.log("The cookie is spoiled:"),console.dir(e[o]),console.dir(t)}return v},P=function(e,o){var n={},a="",i=[],r=t.cookieLifetime;if(1===Object.keys(e).length&&void 0!==t.cookieLifetimeEssentialOnly&&(r=t.cookieLifetimeEssentialOnly),!1===o||!1===U()){var c=new Date;c.setTime(c.getTime()+24*parseInt(r)*60*60*1e3),a=c.toUTCString()}else a=v.expires;n.consents=e,n.domainPath=t.cookieDomain+t.cookiePath,n.expires=a,n.uid=v.uid,n.version=t.cookieVersion,void 0===n.consents.essential&&(n.consents.essential=t.cookies.essential);var s=!0;1===Object.keys(e).length?(n.uid="anonymous",("anonymous"!==v.uid||1===Object.keys(v.consents).length)&&(s=!1)):"anonymous"===v.uid?(n.uid=M(),1===Object.keys(v.consents).length&&(s=!1)):"anonymous"!==v.uid&&(s=!1),i.push("rrze-legal-consent="+encodeURIComponent(JSON.stringify(n))),""!==t.cookieDomain&&""===t.automaticCookieDomainAndPath&&i.push("domain="+t.cookieDomain),i.push("path="+t.cookiePath),i.push("expires="+a),i.push("SameSite=Lax"),t.cookieSecure&&i.push("secure"),document.cookie=i.join(";"),A(),oe(s),ne(s),document.dispatchEvent(b.consentSaved)},N=function(e,o,n){var a,i="",r=[],c="",s=new Date;return null==o||!1===o?""!==t.cookieDomain&&""===t.automaticCookieDomainAndPath&&(i=t.cookieDomain):i=o,void 0===n&&(n=!1),a=function(e,o){var t={name:"",value:""};if(void 0===o&&(o=!1),o&&(e=e.replace("*","")),document.cookie.length)for(var n=document.cookie.split(";"),a=0;a<n.length;a++)try{n[a]=decodeURIComponent(n[a]);var i=n[a].split("="),r=void 0!==i[0]?i[0].trim():"",c=void 0!==i[1]?i[1].trim():"";o?-1!==r.indexOf(e)&&(t.name=r,t.value=c):r===e&&(t.name=r,t.value=c)}catch(e){console.log("The cookie is spoiled:"),console.dir(n[a]),console.dir(e)}return t}(e,n),a.name.length&&(r.push(a.name+"="),""!==i&&r.push("domain="+i),r.push("path="+t.cookiePath),s.setTime(s.getTime()-864e5),c=s.toUTCString(),r.push("expires="+c),document.cookie=r.join(";")),!0},H=function(e,o){return function(e,o){"string"==typeof e&&e.length&&new RegExp(/^[a-z-_]{3,}$/).test(e)&&(void 0===v.consents[e]&&(v.consents[e]=[]),"string"==typeof o&&new RegExp(/^[a-z-_]{3,}$/).test(o)&&-1===v.consents[e].indexOf(o)&&v.consents[e].push(o)),P(v.consents,!0)}(e,o),!0},G=function(e,o){return function(e,o){if("string"==typeof e&&e.length&&new RegExp(/^[a-z-_]{3,}$/).test(e)){var t=!0;"string"==typeof o&&new RegExp(/^[a-z-_]{3,}$/).test(o)&&void 0!==v.consents[e]&&-1!==v.consents[e].indexOf(o)&&(v.consents[e].splice(v.consents[e].indexOf(o),1),t=!1),!0===t&&void 0!==v.consents[e]&&delete v.consents[e]}Object.keys(v.consents).length&&P(v.consents,!0)}(e,o),V(o),F(e,o),!0},J=function(e){var o=!1;for(var t in v.consents)-1!==v.consents[t].indexOf(e)&&(o=!0);return o},M=function(){function o(){var o="";if("object"==e(window.crypto)){var t=0,n=new Uint32Array(4);for(window.crypto.getRandomValues(n);t<4;t++)o+="abcdefhgihjklmnopqrstuvwxyz0123456789"[n[t]%37]}else o=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return o}return o()+o()+"-"+o()+o()+"-"+o()+o()+"-"+o()+o()},q=function(){for(var e in v.consents)for(var t in v.consents[e]){var n=v.consents[e][t];void 0!==u[e]&&void 0!==u[e][n]&&void 0!==u[e][n].optInJS&&(o("body").append(ee(u[e][n].optInJS)),u[e][n].optInJS="")}},W=function(){o("[data-rrzelegal-cookie-type='cookie-group']").each((function(){var e;void 0!==v.consents[this.dataset.rrzelegalCookieId]&&(e="javascript"===t.bannerIntegration?ee(this.firstChild.innerHTML):ee(this.innerHTML),o(this).prev().length?o(this).prev().after(e):o(this).parent().prepend(e),this.parentNode.removeChild(this))}))},$=function(){o("[data-rrzelegal-cookie-type='cookie']").each((function(){for(var e in v.consents){var n;-1!==v.consents[e].indexOf(this.dataset.rrzelegalCookieId)&&(n="javascript"===t.bannerIntegration?ee(this.firstChild.innerHTML):ee(this.innerHTML),o(this).prev().length?o(this).prev().after(n):o(this).parent().prepend(n),this.parentNode.removeChild(this))}}))},V=function(e){null===y&&(y=[],x=!0),y.push(e)},F=function(e,t){if(void 0!==u[e]&&void 0!==u[e][t]&&void 0!==u[e][t].optOutJS){var n=ee(u[e][t].optOutJS);void 0!==u[e][t].settings.asyncOptOutCode&&"1"===u[e][t].settings.asyncOptOutCode||(n+="<script>window.RRZELegal.optOutDone('"+t+"')<\/script>"),o("body").append(n),u[e][t].optOutJS=""}},K=function(e){e.preventDefault();var n,a=o(this).parents(".RRZELegal");if(n=a.find("[data-rrzelegal-cookie-type='content-blocker']")[0].dataset.rrzelegalCookieId)for(var i in o("[data-rrzelegal-cookie-type='content-blocker'][data-rrzelegal-cookie-id='"+n+"']").each((function(){Q(o(this).parents(".RRZELegal"))})),t.cookies)-1!==t.cookies[i].indexOf(n)&&H(i,n);else Q(a)},Q=function(e){var o=e.find("[data-rrzelegal-cookie-type='content-blocker']"),n="";if(o.length){var a;n=o[0].dataset.rrzelegalCookieId,void 0!==h[n].settings.executeGlobalCodeBeforeUnblocking&&"1"===h[n].settings.executeGlobalCodeBeforeUnblocking&&void 0===g[n]&&(h[n].global(h[n]),g[n]=!0),a="javascript"===t.bannerIntegration?ee(o[0].firstChild.innerHTML):ee(o[0].innerHTML);var i=setInterval((function(){var o=!0;if(void 0!==p[n]){var t;if(void 0!==p[n].scriptBlockerId)for(t in p[n].scriptBlockerId)!0!==Y(p[n].scriptBlockerId[t],"scriptBlockerId")&&(o=!1);if(void 0!==p[n].scriptBlockerId)for(t in p[n].jsHandle)!0!==Y(p[n].jsHandle[t],"jsHandle")&&(o=!1)}!0===o&&(clearInterval(i),e.prev().length?e.prev().after(a):e.parent().prepend(a),void 0!==h[n].settings.executeGlobalCodeBeforeUnblocking&&"0"!==h[n].settings.executeGlobalCodeBeforeUnblocking||void 0===g[n]&&(h[n].global(h[n]),g[n]=!0),h[n].init(e.prev()[0],h[n]),e[0].parentNode.removeChild(e[0]))}),50)}},X=function e(t,n,a){var i=o(t)[0];if(void 0!==i){var r=document.createElement("script");if(""!==i.id&&(r.id=i.id),""!==i.className&&(r.className=i.className),""!==i.dataset)for(var c in i.dataset)if(-1===c.indexOf("rrzelegal")){var s=c.split(/(?=[A-Z])/);for(var l in s)s[l]="-"+s[l].toLowerCase();r.setAttribute("data"+s.join(""),i.dataset.hasOwnProperty(c))}"string"==typeof i.dataset.rrzelegalScriptBlockerSrc?(r.src=i.dataset.rrzelegalScriptBlockerSrc,r.onload=function(){k[a][n]--,e(t,n,a)},i.parentNode.insertBefore(r,i),i.parentNode.removeChild(i)):(r.type="text/javascript",r.innerHTML=i.innerHTML,i.parentNode.insertBefore(r,i),i.parentNode.removeChild(i),k[a][n]--,e(t,n,a))}return!0},Y=function(e,o){var t=!1;return void 0!==k[o][e]&&0===k[o][e]&&(t=!0),t},ee=function(e){return decodeURIComponent(Array.prototype.map.call(window.atob(e),(function(e){return"%"+("00"+e.charCodeAt(0).toString(16)).slice(-2)})).join(""))},oe=function(e){!1===/bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent.toLowerCase())&&o.ajax(t.ajaxURL,{type:"POST",data:{action:"banner_log_handler",type:"log",cookieData:v,essentialStatistic:e}}).done((function(){t.reloadAfterConsent&&Object.keys(v.consents).length>0&&location.reload(!0),x&&ie()}))},te=function(){o.ajax(t.ajaxURL,{type:"POST",data:{action:"banner_log_handler",type:"consent_history",uid:v.uid}}).done((function(e){(e=o.parseJSON(e)).length&&o.each(e,(function(e,t){o("["+l+"] table").append("<tr><td>"+t.stamp+"</td><td>"+t.version+"</td><td>"+t.consent+"</td></tr>")}))}))},ne=function(e){if(t.crossDomainCookie.length)for(var n in t.crossDomainCookie){var a=t.crossDomainCookie[n];o("body").append('<iframe class="rrzelegal-hide" src="'+a+"?cookieData="+encodeURIComponent(JSON.stringify(v))+"&essentialStatistic="+(e?1:0)+'"></iframe>')}},ae=function(){o(".RRZELegal [name^='rrzelegalCookie']").each((function(){J(this.value)?this.checked=!0:this.checked=!1,o(this).trigger("change")})),o(document).on("change",".RRZELegal [name^='rrzelegalCookie']",(function(){this.checked?H(this.dataset.cookieGroup,this.value):G(this.dataset.cookieGroup,this.value)}))},ie=function(){x=!1,0===y.length&&(y=null,t.reloadAfterOptOut&&window.location.reload())};return{addConsent:H,allocateScriptBlockerToContentBlocker:function(e,o,t){"scriptBlockerId"!==t&&"jsHandle"!==t||(void 0===p[e]&&(p[e]={scriptBlockerId:[],jsHandle:[]}),-1===p[e][t].indexOf(o)&&p[e][t].push(o))},callWhenLoaded:function(e,o){!function t(){!0===window.hasOwnProperty(e)?o(o):window.setTimeout(t,1e3)}()},checkCookieConsent:J,checkCookieGroupConsent:function(e){var o=!1;return void 0!==v.consents[e]&&(o=!0),o},deleteCookie:N,getCookie:A,hideBanner:E,init:function(e,n,a,c){return"about:blank"!==window.location.href&&(t=o.extend({ajaxURL:"",language:"en",animation:"1",animationDelay:"",animationIn:"fadeIn",animationOut:"fadeOut",blockContent:"",boxLayout:"box",boxLayoutAdvanced:"0",automaticCookieDomainAndPath:"",cookieDomain:"",cookiePath:"",cookieSecure:!0,cookieLifetime:"365",crossDomainCookie:[],cookieBeforeConsent:"",cookiesForBots:"1",cookieVersion:"1",hideBannerOnUrls:[],respectDoNotTrack:"",hasOnlyEssentialCookies:"",reloadAfterConsent:"",reloadAfterOptOut:"",showBanner:"1",bannerIntegration:"javascript",ignorePreSelectStatus:"1",cookies:[]},e),u=n,h=a,b.consentSaved=document.createEvent("Event"),b.consentSaved.initEvent("rrzelegal-cookie-consent-saved",!0,!0),b.codeUnblocked=document.createEvent("Event"),b.codeUnblocked.initEvent("rrzelegal-cookie-code-unblocked",!0,!0),b.codeUnblockedAfterConsent=document.createEvent("Event"),b.codeUnblockedAfterConsent.initEvent("rrzelegal-cookie-code-unblocked-after-consent",!0,!0),A(),function(){if(Object.keys(u).length)for(var e in u)if(Object.keys(u[e]).length)for(var o in u[e])if(void 0!==u[e][o].settings&&void 0!==u[e][o].settings.blockCookiesBeforeConsent&&"1"===u[e][o].settings.blockCookiesBeforeConsent&&void 0!==u[e][o].cookieNameList&&!1===J(o))for(var t in u[e][o].cookieNameList)N(t,null,-1!==t.indexOf("*")),N(t,"",-1!==t.indexOf("*"))}(),t.cookieBeforeConsent&&(null!==v.uid&&"anonymous"!==v.uid||(v.uid=M()),"function"==typeof Object&&(void 0===Object.entries&&(Object.entries=function(e){for(var o=Object.keys(e),t=o.length,n=new Array(t);t--;)n[t]=[o[t],e[o[t]]];return n}),0===Object.entries(v.consents).length&&null===v.expires&&(function(){var e={},o=[],n=t.cookieLifetimeEssentialOnly,a=new Date;a.setTime(a.getTime()+24*parseInt(n)*60*60*1e3);var i=a.toUTCString();e.consents={},e.domainPath=t.cookieDomain+t.cookiePath,e.expires=i,e.uid=v.uid,e.version=null,o.push("rrze-legal-consent="+encodeURIComponent(JSON.stringify(e))),""!==t.cookieDomain&&""===t.automaticCookieDomainAndPath&&o.push("domain="+t.cookieDomain),o.push("path="+t.cookiePath),o.push("expires="+i),o.push("SameSite=Lax"),t.cookieSecure&&o.push("secure"),document.cookie=o.join(";"),A()}(),oe(!0)))),o(i).length&&"SCRIPT"===o(i)[0].tagName&&o(i).after(o(i).html()),o(document).on("click","[data-cookie-accept]",(function(e){e.preventDefault(),Z(),E()})),o(document).on("click","[data-cookie-accept-all]",(function(e){e.preventDefault(),j()})),o(document).on("click","[data-cookie-back]",(function(e){e.preventDefault(),B()})),o(document).on("click","[data-cookie-individual]",(function(e){e.preventDefault(),S()})),o(document).on("click","[data-cookie-refuse]",(function(e){e.preventDefault();var t=[];o(r+":checked").each((function(){-1===t.indexOf(this.value)&&(o(this).trigger("click"),t.push(this.value))})),Z(),E()})),o("[data-cookie-accordion]").on("click","[data-cookie-accordion-target]",(function(){var e=o(this).closest("[data-cookie-accordion]");e.find("[data-cookie-accordion-parent]:visible").length&&(e.find("[data-cookie-accordion-status='hide']").addClass("rrzelegal-hide"),e.find("[data-cookie-accordion-status='show']").removeClass("rrzelegal-hide"),e.find("[data-cookie-accordion-parent]:visible").slideUp()),e.find("[data-cookie-accordion-parent='"+this.dataset.cookieAccordionTarget+"']:hidden").length&&(o(this).children("[data-cookie-accordion-status='show']").addClass("rrzelegal-hide"),o(this).children("[data-cookie-accordion-status='hide']").removeClass("rrzelegal-hide"),e.find("[data-cookie-accordion-parent='"+this.dataset.cookieAccordionTarget+"']").slideDown())})),I(),D(),!0===U()?(q(),W(),$(),document.dispatchEvent(b.codeUnblocked),w()):t.showBanner?0===t.hideBannerOnUrls.length||-1===t.hideBannerOnUrls.indexOf(window.location.protocol+"//"+window.location.host+window.location.pathname)?t.cookiesForBots&&/bot|googlebot|crawler|spider|robot|crawling|lighthouse/i.test(navigator.userAgent.toLowerCase())?(P(t.cookies,!1),q(),W(),$(),w(),document.dispatchEvent(b.codeUnblocked)):t.hasOnlyEssentialCookies||t.respectDoNotTrack&&void 0!==navigator.doNotTrack&&"1"===navigator.doNotTrack?(P({essential:t.cookies.essential},!1),q(),W(),$(),w(),document.dispatchEvent(b.codeUnblocked)):O(!0):(q(),W(),$(),w(),document.dispatchEvent(b.codeUnblocked)):w(),o(document).on("click","[data-rrzelegal-cookie-unblock]",K),o(document).on("click","[data-rrzelegal-cookie-preference]",_),o(document).on("click",".rrzelegal-cookie-preference",_),o(document).on("change","[data-rrzelegal-cookie-switch]",T),o(document).on("keydown",(function(e){9===e.keyCode&&o(d).addClass("_rrzelegal-keyboard")})),o(document).on("mousedown",(function(e){o(d).is(":visible")&&o(d).removeClass("_rrzelegal-keyboard")})),o("body").on("focus",".RRZELegal._rrzelegal-keyboard input[type='checkbox']",(function(e){var t=o(e.currentTarget).closest("label");t&&o(t).addClass("_rrzelegal-focused")})),o(d).on("blur","input[type='checkbox']",(function(e){var t=o(e.currentTarget).closest("label");t&&o(t).removeClass("_rrzelegal-focused")})),o("["+l+"]").length&&te(),ae(),o("["+s+"]").length&&o("["+s+"]").each((function(){o(this).html(v.uid)})),!0)},initConsentHistoryTable:te,initSwitchConsentButtonStatus:ae,openCookiePreference:_,removeConsent:G,showBanner:O,unblockContentId:function(e){o("[data-rrzelegal-cookie-type='content-blocker'][data-rrzelegal-cookie-id='"+e+"']").each((function(){Q(o(this).parents(".RRZELegal"))}))},unblockScriptBlockerId:function(e){var t="[data-rrzelegal-script-blocker-id='"+e+"']";return o(t).length&&(k.scriptBlockerId[e]=o(t).length,X(t,e,"scriptBlockerId")),!0},unblockScriptBlockerJSHandle:function(e){var t="[data-rrzelegal-script-blocker-js-handle='"+e+"']";return o(t).length&&(k.jsHandle[e]=o(t).length,X(t,e,"jsHandle")),!0},optOutDone:function(e){null!==y?y.length!==(y=y.filter((function(o,t,n){return o!==e}))).length?0!==y.length||x||(y=null,t.reloadAfterOptOut&&window.location.reload()):console.log('No opt out found for cookie "'+e+'"'):console.log("No opt out has been initialized")}}}()}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return t.d(o,{a:o}),o},t.d=(e,o)=>{for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{"use strict";t(131)})()})();
//# sourceMappingURL=banner.js.map