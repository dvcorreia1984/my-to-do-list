(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(537),i=r.n(t),o=r(645),a=r.n(o)()(i());a.push([n.id,"/* src/styles.css */\n\nbody {\n  background-color: #f6f6f6;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n  font-size: 34px;\n  margin: 0;\n}\n\nh2 {\n  font-size: 1rem;\n}\n\nimg {\n  width: 15px;\n}\n\ni {\n  color: lightgray;\n}\n\ndiv#todoHeading {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid lightgray;\n  padding: 15px 10px;\n}\n\ndiv#todo {\n  justify-content: space-around;\n}\n\n.fas {\n  font-size: 1rem;\n}\n\n.todo-item {\n  display: flex;\n  font-size: medium;\n  padding: 15px 10px;\n  flex-direction: row;\n  border: 1px solid lightgray;\n}\n\ndiv#wrapper {\n  width: 80vw;\n  background-color: white;\n  margin: 10vw;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\ndiv#addList {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  color: grey;\n  font-style: italic;\n  font-size: medium;\n  border: 1px solid lightgray;\n  padding: 15px 10px;\n}\n\ndiv#clear {\n  display: flex;\n  justify-content: center;\n  border: 1px solid lightgray;\n  color: grey;\n  align-items: center;\n  padding: 20px;\n  font-size: medium;\n  background-color: #f6f6f6;\n}\n\n.checkbox {\n  padding-right: 10px;\n}\n\n.description {\n  flex-grow: 2;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,mBAAmB;;AAEnB;EACE,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;EACjC,eAAe;EACf,SAAS;AACX;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,4EAA4E;AAC9E;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd",sourcesContent:["/* src/styles.css */\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 34px;\r\n  margin: 0;\r\n}\r\n\r\nh2 {\r\n  font-size: 1rem;\r\n}\r\n\r\nimg {\r\n  width: 15px;\r\n}\r\n\r\ni {\r\n  color: lightgray;\r\n}\r\n\r\ndiv#todoHeading {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border: 1px solid lightgray;\r\n  padding: 15px 10px;\r\n}\r\n\r\ndiv#todo {\r\n  justify-content: space-around;\r\n}\r\n\r\n.fas {\r\n  font-size: 1rem;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  font-size: medium;\r\n  padding: 15px 10px;\r\n  flex-direction: row;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\ndiv#wrapper {\r\n  width: 80vw;\r\n  background-color: white;\r\n  margin: 10vw;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\ndiv#addList {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  color: grey;\r\n  font-style: italic;\r\n  font-size: medium;\r\n  border: 1px solid lightgray;\r\n  padding: 15px 10px;\r\n}\r\n\r\ndiv#clear {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid lightgray;\r\n  color: grey;\r\n  align-items: center;\r\n  padding: 20px;\r\n  font-size: medium;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.checkbox {\r\n  padding-right: 10px;\r\n}\r\n\r\n.description {\r\n  flex-grow: 2;\r\n}\r\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var A=[].concat(n[d]);t&&a[A[0]]||(void 0!==o&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=o),r&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=r):A[2]=r),i&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=i):A[4]="".concat(i)),e.push(A))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),o="/*# ".concat(i," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],A=o[d]||0,l="".concat(d," ").concat(A);o[d]=A+1;var p=r(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=i(u,t);t.byIndex=c,e.splice(c,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var c=r(o[a]);e[c].references--}for(var s=t(n,i),d=0;d<o.length;d++){var A=r(o[d]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}o=s}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var i=t.length-1;i>-1&&!n;)n=t[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),i=r.n(t),o=r(569),a=r.n(o),c=r(565),s=r.n(c),d=r(216),A=r.n(d),l=r(589),p=r.n(l),u=r(426),f={};f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=A(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const m=r.p+"eeb3887d7b053b4a5d69.svg";var g=[{completed:!1,description:"Add tickbox",index:4},{completed:!1,description:"Do laundry",index:2},{completed:!1,description:"Take out trash",index:3},{completed:!1,description:"Make dinner",index:1}],B=document.getElementById("todo");document.getElementById("addList");var E=new Image;E.src=m,document.getElementById("addList").appendChild(E),B.innerHTML="",g.sort((function(n,e){return n.index-e.index})),g.forEach((function(n){var e=document.createElement("div");e.className="todo-item",e.innerHTML='\n      <div class="checkbox"><i class="fa-regular fa-square"></i></div>\n      <div class="description">'.concat(n.description,'</div>\n      <div class="elipsis"><i class="fa-solid fa-ellipsis-vertical"></i></div>\n    '),B.appendChild(e)}))})()})();
//# sourceMappingURL=bundle71c6f14a8ea0a657ad52.js.map