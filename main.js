(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Italianno&display=swap);"]),i.push([n.id,"body, html {\n    border: 0;\n    margin: 0px;\n    padding:0px;\n    height:100vh;\n}\n\nheader {\n    background-color: rgb(24, 23, 23);\n    color:white;\n    padding:10px;\n    display:flex;\n    justify-content:center;\n    flex-direction: column;\n    align-items:center;\n    font-family: 'Italianno', cursive;\n}\n\nh1 {\n    margin:0;\n    font-size:106px;\n}\n\n\nbutton {\n    background: transparent;\n    border:none;\n    color:white;\n    font-size:72px;\n    transition:0.2s;\n    margin:5px;\n    font-family: 'Italianno', cursive;\n}\n\nbutton:hover {\n    color:white;\n    text-decoration: underline;\n    transform: scale(1.05);\n}\n\n.modal {\n    display:flex;\n    justify-content: center;\n    background-color: rgb(45, 53, 88);\n    padding:10px;\n    height:20%;\n}\n\n#headchef {\n    border-radius:50%;\n    width:50%;\n}\n\n#section3 {\n    background-color: black;\n    color:white;\n    font-family: 'Italianno', cursive;\n    padding:10px;\n    display:flex;\n    align-items: center;\n    flex-direction: column;\n    font-size:32px;\n}\n\n#openingTimes {\n    font-family: 'Gideon Roman', cursive;\n    width:50%;\n    text-align:center;\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n\n#section4 {\n    padding:10px;\n    background-color: rgb(45, 53, 88);\n    color:white;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Italianno, cursive;\n    font-size:32px;\n}\n\n.review {\n    border: 5px solid black;\n    padding:5px;\n    font-family: 'Gideon Roman', cursive;\n    font-size: 20px;\n    max-width:800px;\n}\n\n#section5 {\n    background-color: black;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    font-family: Italianno, cursive;\n    font-size: 32px;\n}\n\n#section5 > img {\n    width:80%;\n    align-self: center;\n    margin:10px;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=r.base?l[0]+r.base:l[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=r(n,o),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),l=t.n(c),s=t(216),d=t.n(s),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;let h=document.querySelector("#content");!function(){let n=document.createElement("header"),e=document.createElement("h1");e.textContent="La Salamia";let t=document.createElement("nav"),r=document.createElement("button");r.textContent="Home";let o=document.createElement("button");o.textContent="Menu";let a=document.createElement("button");a.textContent="Contact Us",t.appendChild(r),t.appendChild(o),t.appendChild(a),n.appendChild(e),n.appendChild(t),h.appendChild(n)}(),function(){let n=document.createElement("div");n.classList.add("modal");let e=document.createElement("img");e.src="/images/la-salamiarama.jpg",e.setAttribute("id","headchef"),n.appendChild(e),h.appendChild(n)}()})()})();