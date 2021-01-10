(()=>{"use strict";var e={563:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,'body{background-color:#f2f2f2}.contents{height:98vh;width:98vw}.clock{height:100%;width:100%}.digital-clock,.donut-text{font-family:"Roboto","Helvetica",sans-serif;font-weight:bold}.digital-clock{fill:#333}.hhmmss{font-size:64px}.YYYYMMDD{font-size:36px}.WWW{font-size:24px}.donut-background{opacity:.1}.donut-foreground{opacity:1}.donut-text{font-size:18;text-transform:capitalize}.donut-text-color-dark{fill:#333}.donut-text-color-light{fill:#f2f2f2}.month-color{fill:#324258}.date-color{fill:#31527d}.hour-color{fill:#3161a3}.minute-color{fill:#3071c8}.second-color{fill:#2f80ed}',""]);const i=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},379:(e,t,n)=>{var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],o=0;o<e.length;o++){var c=e[o],u=t.base?c[0]+t.base:c[0],s=n[u]||0,l="".concat(u," ").concat(s);n[u]=s+1;var d=a(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==d?(i[d].references++,i[d].updater(f)):i.push({identifier:l,updater:h(f,t),references:1}),r.push(l)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=l(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var g=null,m=0;function h(e,t){var n,r,o;if(t.singleton){var i=m++;n=g||(g=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=c(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=u}}}}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{var e=n(379),t=n.n(e),r=n(563);t()(r.Z,{insert:"head",singleton:!1}),r.Z.locals,n.p,n.p,n.p;var o=document.querySelector("#hhmmss"),i=document.querySelector("#YYYYMMDD"),a=document.querySelector("#WWW");function c(){!function(e){if(o&&i&&a){var t=o.getBBox(),n=i.getBBox();i.setAttribute("y",(t.y+t.height+n.height+10).toString(10)),n=i.getBBox();var r=a.getBBox();a.setAttribute("y",(n.y+n.height+r.height+10).toString(10))}}()}var u=document.querySelector("#month-foreground"),s=document.querySelector("#date-foreground"),l=document.querySelector("#hour-foreground"),d=document.querySelector("#minute-foreground"),f=document.querySelector("#second-foreground");function g(e,t){return"M 0 0\n            L 0 -"+e+"\n            A "+e+" "+e+" 0 "+(t>.5?1:0)+" 1 "+-e*Math.cos(2*Math.PI*t+Math.PI/2)+" "+-e*Math.sin(2*Math.PI*t+Math.PI/2)+"\n            Z"}var m=document.getElementById("hh"),h=document.getElementById("mm"),p=document.getElementById("ss"),v=document.getElementById("YYYY"),y=document.getElementById("MM"),b=document.getElementById("DD"),w=document.getElementById("WWW");function T(e,t){var n=e.toString(10);return n.length>=t?n:("0".repeat(t)+n).slice(-t)}function M(){var e=new Date;!function(e){m&&(m.innerHTML=T(e.getHours(),2)),h&&(h.innerHTML=T(e.getMinutes(),2)),p&&(p.innerHTML=T(e.getSeconds(),2)),v&&(v.innerHTML=T(e.getFullYear(),4)),y&&(y.innerHTML=T(e.getMonth()+1,2)),b&&(b.innerHTML=T(e.getDate(),2)),w&&(w.innerHTML=""+["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()])}(e),c(),function(e){var t=e.getMinutes(),n=e.getHours(),r=e.getDate(),o=e.getMonth(),i=e.getFullYear(),a=new Date(i+1,0).getTime()-new Date(i,0).getTime(),c=new Date(i,o+1).getTime()-new Date(i,o).getTime(),m=new Date(i,o,r+1).getTime()-new Date(i,o,r).getTime(),h=new Date(i,o,r,n+1).getTime()-new Date(i,o,r,n).getTime(),p=new Date(i,o,r,n,t+1).getTime()-new Date(i,o,r,n,t).getTime();!function(e,t){if(u){var n=e/t;u.setAttribute("d",g(300,n))}}(e.getTime()-new Date(i,0).getTime(),a),function(e,t){if(s){var n=e/t;s.setAttribute("d",g(275,n))}}(e.getTime()-new Date(i,o).getTime(),c),function(e,t){if(l){var n=e/t;l.setAttribute("d",g(250,n))}}(e.getTime()-new Date(i,o,r).getTime(),m),function(e,t){if(d){var n=e/t;d.setAttribute("d",g(225,n))}}(e.getTime()-new Date(i,o,r,n).getTime(),h),function(e,t){if(f){var n=e/t;f.setAttribute("d",g(200,n))}}(e.getTime()-new Date(i,o,r,n,t).getTime(),p)}(e),requestAnimationFrame(M)}document.addEventListener("DOMContentLoaded",(function(){c(),o&&i&&a&&(o.setAttribute("y",(parseInt(o.getAttribute("y")||"0",10)+-5).toString(10)),i.setAttribute("y",(parseInt(i.getAttribute("y")||"0",10)+-5).toString(10)),a.setAttribute("y",(parseInt(a.getAttribute("y")||"0",10)+-5).toString(10))),M()}),!1)})()})();