!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){e.exports=function(){return new Worker(n.p+"ee067bf89f740f801882.worker.js")}},function(e,t,n){e.exports=function(){return new Worker(n.p+"804da6dd7c88ccf69f89.worker.js")}},function(e,t,n){"use strict";n.r(t);const r=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),a=Symbol("Comlink.releaseProxy"),s=new WeakSet,i=new Map([["proxy",{canHandle:e=>e&&e[r],serialize(e){const{port1:t,port2:n}=new MessageChannel;return function e(t,n=self){n.addEventListener("message",(function o(a){if(!a||!a.data)return;const{id:i,type:u,path:l}=Object.assign({path:[]},a.data),f=(a.data.argumentList||[]).map(m);let g;try{const n=l.slice(0,-1).reduce((e,t)=>e[t],t),o=l.reduce((e,t)=>e[t],t);switch(u){case 0:g=o;break;case 1:n[l.slice(-1)[0]]=m(a.data.value),g=!0;break;case 2:g=o.apply(n,f);break;case 3:g=function(e){return Object.assign(e,{[r]:!0})}(new o(...f));break;case 4:{const{port1:n,port2:r}=new MessageChannel;e(t,r),g=function(e,t){return p.set(e,t),e}(n,[n])}break;case 5:g=void 0}}catch(e){g=e,s.add(e)}Promise.resolve(g).catch(e=>(s.add(e),e)).then(e=>{const[t,r]=d(e);n.postMessage(Object.assign(Object.assign({},t),{id:i}),r),5===u&&(n.removeEventListener("message",o),c(n))})})),n.start&&n.start()}(e,t),[n,[n]]},deserialize:e=>(e.start(),u(e))}],["throw",{canHandle:e=>s.has(e),serialize(e){const t=e instanceof Error;let n=e;return t&&(n={isError:t,message:e.message,stack:e.stack}),[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error,e);throw e}}]]);function c(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function u(e,t){return function e(t,n=[],r=function(){}){let s=!1;const i=new Proxy(r,{get(r,o){if(l(s),o===a)return()=>g(t,{type:5,path:n.map(e=>e.toString())}).then(()=>{c(t),s=!0});if("then"===o){if(0===n.length)return{then:()=>i};const e=g(t,{type:0,path:n.map(e=>e.toString())}).then(m);return e.then.bind(e)}return e(t,[...n,o])},set(e,r,o){l(s);const[a,i]=d(o);return g(t,{type:1,path:[...n,r].map(e=>e.toString()),value:a},i).then(m)},apply(r,a,i){l(s);const c=n[n.length-1];if(c===o)return g(t,{type:4}).then(m);if("bind"===c)return e(t,n.slice(0,-1));const[u,p]=f(i);return g(t,{type:2,path:n.map(e=>e.toString()),argumentList:u},p).then(m)},construct(e,r){l(s);const[o,a]=f(r);return g(t,{type:3,path:n.map(e=>e.toString()),argumentList:o},a).then(m)}});return i}(e,[],t)}function l(e){if(e)throw new Error("Proxy has been released and is not useable")}function f(e){const t=e.map(d);return[t.map(e=>e[0]),(n=t.map(e=>e[1]),Array.prototype.concat.apply([],n))];var n}const p=new WeakMap;function d(e){for(const[t,n]of i)if(n.canHandle(e)){const[r,o]=n.serialize(e);return[{type:3,name:t,value:r},o]}return[{type:0,value:e},p.get(e)||[]]}function m(e){switch(e.type){case 3:return i.get(e.name).deserialize(e.value);case 0:return e.value}}function g(e,t,n){return new Promise(r=>{const o=new Array(4).fill(0).map(()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16)).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===o&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:o},t),n)})}var h=n(0),y=n.n(h),b=n(1),w=n.n(b);let v="";const M=Math.pow(10,11),k=Math.floor(Math.log(M)/Math.LN10),S=Number.MAX_VALUE;Math.floor(Math.sqrt(S));function j(e,t,n){var r=0;for(r=1;r<e;r++)t[r]=null;t[0]=n}function x(e){var t=!0;for(let n=0;n<e.length;n++)if(e[n]){t=!1;break}return t}function A(e,t,n){let r=0;for(let o=e-1;o>=0;o--)t[o]+=Number(n[o])+Number(r),t[o]<M?r=0:(r=1,t[o]=Number(t[o])-Number(M))}function E(e,t,n){for(let r=e-1;r>=0;r--)t[r]-=n[r],t[r]<0&&r>0&&(t[r]+=M,t[r-1]--)}function O(e,t,n){let r=0;for(let o=e-1;o>=0;o--){let e=t[o]*n;e+=r,e>=M?(r=Math.floor(e/M),e-=r*M):r=0,t[o]=e}}function N(e,t,n,r){let o=0;for(let a=0;a<e;a++){const e=Number(t[a])+Number(o*M),s=Math.floor(e/n);o=e-s*n,r[a]=s}}var P=function(e){const t=new Array(10),n=new Array(10),r=Math.ceil(1+e/k),o=new Array(r),a=new Array(r),s=new Array(r),i=new Array(r);function c(e,t,n){const r=e*e;let o=3,c=0;for(j(t,n,0),j(t,s,1),N(t,s,e,s),A(t,n,s);!x(s);)N(t,s,r,s),N(t,s,o,i),c?A(t,n,i):E(t,n,i),o+=2,c=1-c;v+="aArctan="+a+"<br>"}const u=new Date;e=Number(e)+5,n[0]=4,n[1]=-1,n[2]=0,t[0]=5,t[1]=239,t[2]=0,j(r,o,0),j(r,s,0),j(r,i,0);for(var l=0;0!=n[l];l++)c(t[l],r,a),O(r,a,Math.abs(n[l])),n[l]>0?A(r,o,a):E(r,o,a);O(r,o,4);let f="";for(l=0;l<o.length;l++){if(o[l]=String(o[l]),o[l].length<k&&0!=l)for(;o[l].length<k;)o[l]="0"+o[l];f+=o[l]}return(new Date).getTime(),u.getTime(),f.slice(0,e)};!async function(){const{add:e}=u(new y.a),t=await e(1,3);console.log(t);const n=u(new w.a),r=document.querySelector("#btnmain"),o=document.querySelector("#btnworker"),a=document.querySelector("#put-pi-here");let s=0;setInterval(()=>window.pie.style.transform=`rotate(${(s+=10)%360}deg)`,10),r.onclick=()=>{a.textContent="working...",window.requestIdleCallback(()=>{a.textContent="3."+P(3e4).slice(1)})},o.onclick=async()=>{a.textContent="working...",a.textContent="3."+(await n(3e4)).slice(1)}}()}]);