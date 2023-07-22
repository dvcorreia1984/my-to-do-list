(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>d});var t=r(537),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"/* src/styles.css */\n\nbody {\n  background-color: #f6f6f6;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n  font-size: 34px;\n  margin: 0;\n}\n\nform {\n  padding: 2px;\n}\n\nh2 {\n  font-size: 1rem;\n}\n\nimg {\n  height: 20px;\n  width: 20px;\n}\n\ni {\n  color: lightgray;\n}\n\ninput {\n  padding: 0;\n  width: 70vw;\n}\n\ndiv#todoHeading {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid lightgray;\n  padding: 15px 10px;\n}\n\ndiv#todo {\n  justify-content: space-around;\n}\n\n.fas {\n  font-size: 1rem;\n}\n\n.todo-item {\n  display: flex;\n  font-size: medium;\n  padding: 15px 10px;\n  flex-direction: row;\n  border: 1px solid lightgray;\n}\n\n.todo-item i.fa.fa-trash {\n  color: lightgray;\n  visibility: hidden;\n}\n\n.todo-item:hover {\n  background-color: lightyellow;\n}\n\n.todo-item:hover i.fa.fa-trash {\n  visibility: visible;\n  color: grey;\n  font-size: medium;\n}\n\n.todo-item:hover i.fa.fa-trash:hover {\n  visibility: visible;\n  color: red;\n  font-size: larger;\n  cursor: pointer;\n}\n\ndiv#wrapper {\n  width: 80vw;\n  background-color: white;\n  margin: 10vw;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\ndiv#addList {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  color: grey;\n  font-style: italic;\n  font-size: medium;\n  border: 1px solid lightgray;\n  padding: 15px 10px;\n}\n\ndiv#clear {\n  display: flex;\n  justify-content: center;\n  border: 1px solid lightgray;\n  color: grey;\n  align-items: center;\n  padding: 20px;\n  font-size: medium;\n  background-color: #f6f6f6;\n}\n\n.checkbox {\n  padding-right: 10px;\n}\n\n.description {\n  flex-grow: 2;\n}\n\ninput#formInput {\n  border: none;\n  padding: 15px 10px;\n}\n\nbutton#formButton {\n  padding: 5px;\n}\n\n.delete {\n  padding-right: 10px;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,mBAAmB;;AAEnB;EACE,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;EACjC,eAAe;EACf,SAAS;AACX;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,4EAA4E;AAC9E;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,kBAAkB;EAClB,iBAAiB;EACjB,2BAA2B;EAC3B,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,2BAA2B;EAC3B,WAAW;EACX,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB",sourcesContent:["/* src/styles.css */\r\n\r\nbody {\r\n  background-color: #f6f6f6;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 34px;\r\n  margin: 0;\r\n}\r\n\r\nform {\r\n  padding: 2px;\r\n}\r\n\r\nh2 {\r\n  font-size: 1rem;\r\n}\r\n\r\nimg {\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\ni {\r\n  color: lightgray;\r\n}\r\n\r\ninput {\r\n  padding: 0;\r\n  width: 70vw;\r\n}\r\n\r\ndiv#todoHeading {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border: 1px solid lightgray;\r\n  padding: 15px 10px;\r\n}\r\n\r\ndiv#todo {\r\n  justify-content: space-around;\r\n}\r\n\r\n.fas {\r\n  font-size: 1rem;\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  font-size: medium;\r\n  padding: 15px 10px;\r\n  flex-direction: row;\r\n  border: 1px solid lightgray;\r\n}\r\n\r\n.todo-item i.fa.fa-trash {\r\n  color: lightgray;\r\n  visibility: hidden;\r\n}\r\n\r\n.todo-item:hover {\r\n  background-color: lightyellow;\r\n}\r\n\r\n.todo-item:hover i.fa.fa-trash {\r\n  visibility: visible;\r\n  color: grey;\r\n  font-size: medium;\r\n}\r\n\r\n.todo-item:hover i.fa.fa-trash:hover {\r\n  visibility: visible;\r\n  color: red;\r\n  font-size: larger;\r\n  cursor: pointer;\r\n}\r\n\r\ndiv#wrapper {\r\n  width: 80vw;\r\n  background-color: white;\r\n  margin: 10vw;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\ndiv#addList {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  color: grey;\r\n  font-style: italic;\r\n  font-size: medium;\r\n  border: 1px solid lightgray;\r\n  padding: 15px 10px;\r\n}\r\n\r\ndiv#clear {\r\n  display: flex;\r\n  justify-content: center;\r\n  border: 1px solid lightgray;\r\n  color: grey;\r\n  align-items: center;\r\n  padding: 20px;\r\n  font-size: medium;\r\n  background-color: #f6f6f6;\r\n}\r\n\r\n.checkbox {\r\n  padding-right: 10px;\r\n}\r\n\r\n.description {\r\n  flex-grow: 2;\r\n}\r\n\r\ninput#formInput {\r\n  border: none;\r\n  padding: 15px 10px;\r\n}\r\n\r\nbutton#formButton {\r\n  padding: 5px;\r\n}\r\n\r\n.delete {\r\n  padding-right: 10px;\r\n}\r\n"],sourceRoot:""}]);const d=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(a[c]=!0)}for(var s=0;s<n.length;s++){var A=[].concat(n[s]);t&&a[A[0]]||(void 0!==i&&(void 0===A[5]||(A[1]="@layer".concat(A[5].length>0?" ".concat(A[5]):""," {").concat(A[1],"}")),A[5]=i),r&&(A[2]?(A[1]="@media ".concat(A[2]," {").concat(A[1],"}"),A[2]=r):A[2]=r),o&&(A[4]?(A[1]="@supports (".concat(A[4],") {").concat(A[1],"}"),A[4]=o):A[4]="".concat(o)),e.push(A))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],d=0;d<n.length;d++){var c=n[d],s=t.base?c[0]+t.base:c[0],A=i[s]||0,l="".concat(s," ").concat(A);i[s]=A+1;var p=r(l),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,t);t.byIndex=d,e.splice(d,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var d=r(i[a]);e[d].references--}for(var c=t(n,o),s=0;s<i.length;s++){var A=r(i[s]);0===e[A].references&&(e[A].updater(),e.splice(A,1))}i=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var o=t.length-1;o>-1&&!n;)n=t[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),d=r(565),c=r.n(d),s=r(216),A=r.n(s),l=r(589),p=r.n(l),u=r(426),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=A(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const m=r.p+"eeb3887d7b053b4a5d69.svg";var g=document.createElement("div");g.id="todoHeading",document.getElementById("wrapper").appendChild(g);var E=document.createElement("h2");E.innerHTML="Today's To Do",document.getElementById("todoHeading").appendChild(E);var v=document.createElement("i");v.className="fas fa-sync-alt",document.getElementById("todoHeading").appendChild(v);var y=document.createElement("div");y.id="form-container",document.getElementById("wrapper").appendChild(y);var B=document.createElement("form");B.id="form",document.getElementById("form-container").appendChild(B);var h=document.createElement("input");h.id="formInput",h.type="text",h.placeholder="Add to your list...",h.value="",document.getElementById("form").appendChild(h);var C=document.createElement("button");C.id="formButton",C.type="submit",document.getElementById("form").appendChild(C);var b=new Image;b.src=m,document.getElementById("formButton").appendChild(b);var x=document.createElement("form");x.id="todo",x.className="todo",document.getElementById("wrapper").appendChild(x);var w=document.createElement("div");function k(){var n=document.getElementById("todo");n.innerHTML="",z.sort((function(n,e){return n.index-e.index})),z.forEach((function(e){var r=document.createElement("div");r.className="todo-item",r.innerHTML='\n      <div class="checkbox"><i class="fa-regular fa-square"></i></div>\n      <div class="description" contenteditable="true">'.concat(e.description,'</div>\n      <div id="delete" class="delete"><i class="fa fa-trash" aria-hidden="true"></i></div>\n      <div class="elipsis"><i class="fa-solid fa-ellipsis-vertical"></i></div>\n    '),n.appendChild(r)}))}function I(n){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},I(n)}function S(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,(void 0,o=function(n,e){if("object"!==I(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==I(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(t.key),"symbol"===I(o)?o:String(o)),t)}var o}function j(n,e,r){return e&&S(n.prototype,e),r&&S(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}w.id="clear",w.innerHTML="Clear all completed!",document.getElementById("wrapper").appendChild(w);var T=j((function n(e,r,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.completed=e,this.description=r,this.index=t})),z=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];function L(n){if(n.target.classList.contains("fa-trash")){var e=n.target.closest(".todo-item");if(e){var r=parseInt(e.id,10);z.splice(r-1,1),z.forEach((function(n,e){n.index=e+1})),localStorage.setItem("tasks",JSON.stringify(z)),k()}}}document.addEventListener("DOMContentLoaded",(function(){var n,e;n=document.getElementById("formInput"),document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault();var r=n.value.trim();if(""!==r){var t=new T(!1,r,z.length+1);z.push(t),localStorage.setItem("tasks",JSON.stringify(z)),localStorage.setItem("newTask",JSON.stringify(t)),n.value="",k()}})),k(),(e=document.getElementById("todo")).removeEventListener("click",L),e.addEventListener("click",L)}))})()})();
//# sourceMappingURL=bundle.js.map