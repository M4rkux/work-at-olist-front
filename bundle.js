!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/",t(t.s=0)}([function(e,n,t){"use strict";t(1);var r=t(3),o=Array.from(document.querySelectorAll("input")),c=document.querySelector(".btn-submit"),a=new RegExp(".{6,}"),i=new RegExp("(?=.*[A-Z])"),u=new RegExp("(?=.*[0-9])"),s=document.querySelector(".req-1"),l=document.querySelector(".req-2"),d=document.querySelector(".req-3"),f=document.querySelectorAll(".password-strength"),p=document.querySelector("#password"),v=document.querySelector("form");function m(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=e.checkValidity();return"password"===e.name&&n?function(e){var n=[a.test(e.value),i.test(e.value),u.test(e.value)];b(s,n[0]),b(l,n[1]),b(d,n[2]);var t=n.filter(function(e){return e}).length;f.forEach(function(e){e.classList.remove("success","error","warning")});for(var r=0;r<t;r++)switch(t){case 1:f[r].classList.add("error");break;case 2:f[r].classList.add("warning");break;case 3:f[r].classList.add("success")}}(e):"password_confirm"===e.name&&(t=t&&e.value===p.value),n&&b(e,t),t}function b(e,n){e.classList.toggle("success",n),e.classList.toggle("error",!n)}o.forEach(function(e){e.addEventListener("keyup",function(){m(this,!0),c.disabled=!o.every(function(e){return m(e)})}),e.addEventListener("change",function(){m(this,!0),c.disabled=!o.every(function(e){return m(e)})})}),v.addEventListener("submit",function(e){e.preventDefault(),c.disabled=!0,c.classList.add("loading");var n={};o.forEach(function(e){e.disabled=!0,"password_confirm"!==e.name&&(n[e.name]=e.value)}),r.AccountService.create(n).then(function(e){if(e.ok){var n=document.createElement("div");n.classList.add("confirmation"),n.innerHTML='\n    <img class="checked" src="/work-at-olist-front/imgs/checked.svg" />\n    <h4 class="subtitle">Tudo certo</h4>\n    <span>Verifique sua caixa de entrada para confirmar seu e-mail.</span>\n',v.parentNode.appendChild(n),v.parentNode.removeChild(v)}else c.disabled=!1,c.classList.remove("loading"),o.map(function(e){e.disabled=!1})})})},function(e,n,t){},,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();n.AccountService=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,null,[{key:"create",value:function(e){return window.fetch("https://5b664ca59daa3f0014cb8e7c.mockapi.io/account",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)})}}]),e}()}]);