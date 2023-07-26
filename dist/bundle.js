(()=>{"use strict";var n={426:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(537),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"/* src/styles.css */\n\nbody {\n  background-color: #caf0f8;\n  flex-direction: column;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n  font-size: 34px;\n  margin: 0;\n}\n\nform {\n  background-color: #caf0f8;\n  padding: 2px;\n}\n\nh2 {\n  color: #90e0ef;\n  font-size: 1.5rem;\n}\n\nimg {\n  height: 20px;\n  width: 20px;\n}\n\ni {\n  color: #90e0ef;\n}\n\ninput {\n  border: none;\n  outline: none;\n  padding: 0;\n  width: 70vw;\n}\n\ndiv#todoHeading {\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  background-color: #0077b6;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #0077b6;\n  padding: 15px 10px;\n  color: #caf0f8;\n}\n\ndiv#todo {\n  justify-content: space-around;\n}\n\n.fas {\n  color: #caf0f8;\n  font-size: 1rem;\n}\n\n.todo-item {\n  color: #90e0ef;\n  background-color: #0077b6;\n  display: flex;\n  font-size: medium;\n  padding: 15px 10px;\n  margin-bottom: 5px;\n  flex-direction: row;\n  border: 2px solid #0077b6;\n  border-radius: 10px;\n}\n\n.todo-item i.fa.fa-trash {\n  visibility: hidden;\n}\n\n.todo-item:hover {\n  color: #90e0ef;\n  background-color: #03045e;\n}\n\n.todo-item:hover i.fa.fa-trash {\n  visibility: visible;\n  color: orange;\n  font-size: medium;\n}\n\n.todo-item:hover i.fa.fa-trash:hover {\n  visibility: visible;\n  color: orange;\n  font-size: larger;\n  cursor: pointer;\n}\n\ndiv#wrapper {\n  border-radius: 10px;\n  width: 80vw;\n  background-color: #caf0f8;\n  margin: 10vw;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\ndiv#addList {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  color: #03045e;\n  font-style: italic;\n  font-size: medium;\n  border: 1px solid #90e0ef;\n  padding: 15px 10px;\n}\n\nbutton#clear {\n  border: 1px solid #0077b6;\n  border-radius: 10px;\n  background-color: #0077b6;\n  display: flex;\n  width: 100%;\n  height: 50px;\n  justify-content: center;\n  align-items: center;\n  color: #90e0ef;\n  font-weight: 600;\n  font-size: large;\n}\n\nbutton#clear:hover {\n  cursor: pointer;\n  font-size: x-large;\n  background-color: orange;\n  color: #03045e;\n  border: 1px solid orange;\n}\n\n.checkbox {\n  padding-right: 10px;\n}\n\n.description {\n  border: none;\n  outline: none;\n  flex-grow: 2;\n}\n\ninput#formInput {\n  border: none;\n  outline: none;\n  font-weight: 600;\n  color: #03045e;\n  background-color: #caf0f8;\n  padding: 15px 10px;\n}\n\nbutton#formButton {\n  color: #caf0f8;\n  background-color: #0077b6;\n  border-radius: 5px;\n  padding: 7px;\n  border: none;\n}\n\n.delete {\n  padding-right: 10px;\n}\n\ninput#checkbox {\n  width: 20px;\n}\n\n.checkbox-container {\n  display: flex;\n  width: 20px;\n  padding-right: 10px;\n}\n","",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA,mBAAmB;;AAEnB;EACE,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;EACnB,iCAAiC;EACjC,eAAe;EACf,SAAS;AACX;;AAEA;EACE,yBAAyB;EACzB,YAAY;AACd;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,UAAU;EACV,WAAW;AACb;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;EAC7B,yBAAyB;EACzB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,8BAA8B;EAC9B,yBAAyB;EACzB,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,yBAAyB;AAC3B;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;EACnB,aAAa;EACb,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,WAAW;EACX,yBAAyB;EACzB,YAAY;EACZ,4EAA4E;AAC9E;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,cAAc;EACd,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,yBAAyB;EACzB,aAAa;EACb,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,wBAAwB;EACxB,cAAc;EACd,wBAAwB;AAC1B;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,cAAc;EACd,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;AACrB",sourcesContent:["/* src/styles.css */\r\n\r\nbody {\r\n  background-color: #caf0f8;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  font-family: 'Roboto', sans-serif;\r\n  font-size: 34px;\r\n  margin: 0;\r\n}\r\n\r\nform {\r\n  background-color: #caf0f8;\r\n  padding: 2px;\r\n}\r\n\r\nh2 {\r\n  color: #90e0ef;\r\n  font-size: 1.5rem;\r\n}\r\n\r\nimg {\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n\r\ni {\r\n  color: #90e0ef;\r\n}\r\n\r\ninput {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0;\r\n  width: 70vw;\r\n}\r\n\r\ndiv#todoHeading {\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  background-color: #0077b6;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border: 1px solid #0077b6;\r\n  padding: 15px 10px;\r\n  color: #caf0f8;\r\n}\r\n\r\ndiv#todo {\r\n  justify-content: space-around;\r\n}\r\n\r\n.fas {\r\n  color: #caf0f8;\r\n  font-size: 1rem;\r\n}\r\n\r\n.todo-item {\r\n  color: #90e0ef;\r\n  background-color: #0077b6;\r\n  display: flex;\r\n  font-size: medium;\r\n  padding: 15px 10px;\r\n  margin-bottom: 5px;\r\n  flex-direction: row;\r\n  border: 2px solid #0077b6;\r\n  border-radius: 10px;\r\n}\r\n\r\n.todo-item i.fa.fa-trash {\r\n  visibility: hidden;\r\n}\r\n\r\n.todo-item:hover {\r\n  color: #90e0ef;\r\n  background-color: #03045e;\r\n}\r\n\r\n.todo-item:hover i.fa.fa-trash {\r\n  visibility: visible;\r\n  color: orange;\r\n  font-size: medium;\r\n}\r\n\r\n.todo-item:hover i.fa.fa-trash:hover {\r\n  visibility: visible;\r\n  color: orange;\r\n  font-size: larger;\r\n  cursor: pointer;\r\n}\r\n\r\ndiv#wrapper {\r\n  border-radius: 10px;\r\n  width: 80vw;\r\n  background-color: #caf0f8;\r\n  margin: 10vw;\r\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\ndiv#addList {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: row;\r\n  color: #03045e;\r\n  font-style: italic;\r\n  font-size: medium;\r\n  border: 1px solid #90e0ef;\r\n  padding: 15px 10px;\r\n}\r\n\r\nbutton#clear {\r\n  border: 1px solid #0077b6;\r\n  border-radius: 10px;\r\n  background-color: #0077b6;\r\n  display: flex;\r\n  width: 100%;\r\n  height: 50px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: #90e0ef;\r\n  font-weight: 600;\r\n  font-size: large;\r\n}\r\n\r\nbutton#clear:hover {\r\n  cursor: pointer;\r\n  font-size: x-large;\r\n  background-color: orange;\r\n  color: #03045e;\r\n  border: 1px solid orange;\r\n}\r\n\r\n.checkbox {\r\n  padding-right: 10px;\r\n}\r\n\r\n.description {\r\n  border: none;\r\n  outline: none;\r\n  flex-grow: 2;\r\n}\r\n\r\ninput#formInput {\r\n  border: none;\r\n  outline: none;\r\n  font-weight: 600;\r\n  color: #03045e;\r\n  background-color: #caf0f8;\r\n  padding: 15px 10px;\r\n}\r\n\r\nbutton#formButton {\r\n  color: #caf0f8;\r\n  background-color: #0077b6;\r\n  border-radius: 5px;\r\n  padding: 7px;\r\n  border: none;\r\n}\r\n\r\n.delete {\r\n  padding-right: 10px;\r\n}\r\n\r\ninput#checkbox {\r\n  width: 20px;\r\n}\r\n\r\n.checkbox-container {\r\n  display: flex;\r\n  width: 20px;\r\n  padding-right: 10px;\r\n}\r\n"],sourceRoot:""}]);const c=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],r=n[3];if(!r)return e;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],d=t.base?A[0]+t.base:A[0],l=i[d]||0,s="".concat(d," ").concat(l);i[d]=l+1;var p=r(s),u={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var f=o(u,t);t.byIndex=c,e.splice(c,0,{identifier:s,updater:f,references:1})}a.push(s)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);e[c].references--}for(var A=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=A}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{var n=r(379),e=r.n(n),t=r(795),o=r.n(t),i=r(569),a=r.n(i),c=r(565),A=r.n(c),d=r(216),l=r.n(d),s=r(589),p=r.n(s),u=r(426),f={};function m(){var n=document.getElementById("todo");n.innerHTML="",j.sort((function(n,e){return n.index-e.index})),j.forEach((function(e){var r=document.createElement("div");r.className="todo-item",r.innerHTML='\n      <div class="checkbox-container">\n        <input type="checkbox" id="checkbox_'.concat(e.index,'" class="checkbox">\n      </div>\n      <div class="description" contenteditable="true">').concat(e.description,'</div>\n      <div id="delete" class="delete">\n        <i class="fa fa-trash" aria-hidden="true"></i>\n      </div>\n      <div class="elipsis">\n        <i class="fa-solid fa-ellipsis-vertical"></i>\n      </div>\n    '),n.appendChild(r);var t=r.querySelector("#checkbox_".concat(e.index));t.addEventListener("change",(function(){if(!0===t.checked){var n=r.querySelector(".description");n.style.textDecoration="line-through",n.style.color="#BDBDBD",e.completed=!0}else{var o=r.querySelector(".description");o.style.textDecoration="none",o.style.color="#333333",e.completed=!1}localStorage.setItem("tasks",JSON.stringify(j))}))}))}f.styleTagTransform=p(),f.setAttributes=A(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var E=document.createElement("div");E.id="todoHeading",document.getElementById("wrapper").appendChild(E);var B=document.createElement("h2");B.innerHTML="Today's To Do",document.getElementById("todoHeading").appendChild(B);var b=document.createElement("i");b.className="fas fa-sync-alt",document.getElementById("todoHeading").appendChild(b);var g=document.createElement("div");g.id="form-container",document.getElementById("wrapper").appendChild(g);var C=document.createElement("form");C.id="form",document.getElementById("form-container").appendChild(C);var v=document.createElement("input");v.id="formInput",v.type="text",v.placeholder="Add to your list...",v.value="",document.getElementById("form").appendChild(v);var y=document.createElement("button");y.id="formButton",y.type="submit",document.getElementById("form").appendChild(y);var h=document.createElement("i");h.className="fas fa-plus",document.getElementById("formButton").appendChild(h);var x=document.createElement("form");x.id="todo",x.className="todo",document.getElementById("wrapper").appendChild(x);var k=document.createElement("button");function w(n){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(n)}function I(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,(void 0,o=function(n,e){if("object"!==w(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var t=r.call(n,"string");if("object"!==w(t))return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(t.key),"symbol"===w(o)?o:String(o)),t)}var o}function S(n,e,r){return e&&I(n.prototype,e),r&&I(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}k.id="clear",k.innerHTML="Clear all completed!",document.getElementById("wrapper").appendChild(k),document.getElementById("clear").addEventListener("click",(function(){j.filter((function(n){return!0===n.completed})).forEach((function(n){var e=j.indexOf(n);j.splice(e,1)})),localStorage.setItem("tasks",JSON.stringify(j)),m()}));var z=S((function n(e,r,t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.completed=e,this.description=r,this.index=t})),j=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];function Y(n){if(n.target.classList.contains("fa-trash")){var e=n.target.closest(".todo-item");if(e){var r=parseInt(e.id,10);j.splice(r-1,1),j.forEach((function(n,e){n.index=e+1})),localStorage.setItem("tasks",JSON.stringify(j)),m()}}}document.addEventListener("DOMContentLoaded",(function(){var n,e;n=document.getElementById("formInput"),document.getElementById("form").addEventListener("submit",(function(e){e.preventDefault();var r=n.value.trim();if(""!==r){var t=new z(!1,r,j.length+1);j.push(t),localStorage.setItem("tasks",JSON.stringify(j)),n.value="",m()}})),m(),(e=document.getElementById("todo")).removeEventListener("click",Y),e.addEventListener("click",Y)}))})()})();
//# sourceMappingURL=bundle.js.map