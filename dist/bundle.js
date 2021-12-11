(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),o=t.n(a),i=t(645),r=t.n(i)()(o());r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Italianno&display=swap);"]),r.push([e.id,"body, html {\n    border: 0;\n    margin: 0px;\n    padding:0px;\n    height:100vh;\n}\n\nheader {\n    background-color: rgb(24, 23, 23);\n    color:white;\n    padding:10px;\n    display:flex;\n    justify-content:center;\n    flex-direction: column;\n    align-items:center;\n    font-family: 'Italianno', cursive;\n}\n\nh1 {\n    margin:0;\n    font-size:106px;\n}\n\nh2 { \n    font-size: 48px;\n}\n\nbutton {\n    background: transparent;\n    border:none;\n    color:white;\n    font-size:72px;\n    transition:0.2s;\n    margin:5px;\n    font-family: 'Italianno', cursive;\n}\n\nbutton:hover {\n    color:white;\n    text-decoration: underline;\n    transform: scale(1.05);\n}\n\n.modal {\n    display:flex;\n    justify-content: center;\n    background-color: rgb(45, 53, 88);\n    padding:10px;\n    height:20%;\n}\n\n#headchef {\n    border-radius:50%;\n    width:50%;\n}\n\n#section3 {\n    background-color: black;\n    color:white;\n    font-family: 'Italianno', cursive;\n    padding:10px;\n    display:flex;\n    align-items: center;\n    flex-direction: column;\n    font-size:32px;\n}\n\n#openingTimes {\n    font-family: 'Gideon Roman', cursive;\n    width:50%;\n    text-align:center;\n    font-size: 20px;\n    margin-bottom: 10px;\n}\n\n#section4 {\n    padding:10px;\n    background-color: rgb(45, 53, 88);\n    color:white;\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    font-family: Italianno, cursive;\n    font-size:32px;\n}\n\n.review {\n    border: 5px solid black;\n    padding:5px;\n    font-family: 'Gideon Roman', cursive;\n    font-size: 20px;\n    max-width:800px;\n}\n\n#section5 {\n    background-color: black;\n    color:white;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    font-family: Italianno, cursive;\n    font-size: 32px;\n}\n\n#section5 > img {\n    width:80%;\n    align-self: center;\n    margin:10px;\n}\n\n.container {\n    margin:20px;\n    padding:20px;\n    font-family: Italianno, cursive;\n    border: 5px solid black;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n}\n\n.itemTitle {\n    font-size:48px;\n    margin:0px;\n}\n\n.displayPicture {\n    width:300px;\n    height:300px;\n    object-fit:scale-down;\n    margin-bottom:10px;\n}\n\n.menuItem {\n    border: 2px solid black;\n    padding:5px;\n    display:flex;\n    flex-direction:column;\n    align-items:center;\n    max-width: 300px;\n    text-align:center;\n    margin:7px;\n}\n\n.container h2 {\n    font-size: 72px;\n}\n",""]);const c=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(r[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);a&&r[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},r=[],c=0;c<e.length;c++){var d=e[c],l=a.base?d[0]+a.base:d[0],s=i[l]||0,p="".concat(l," ").concat(s);i[l]=s+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=o(u,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}r.push(p)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=a(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<i.length;r++){var c=t(i[r]);n[c].references--}for(var d=a(e,o),l=0;l<i.length;l++){var s=t(i[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}i=d}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,o&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},358:(e,n,t)=>{e.exports=t.p+"36103ebfda24ed53cc9a.jpg"},339:(e,n,t)=>{e.exports=t.p+"aaccd0098d19ec0f2826.jpeg"},503:(e,n,t)=>{e.exports=t.p+"f1b657621d74bce868ca.jpg"},563:(e,n,t)=>{e.exports=t.p+"1e0ad3a67af7d6425d4f.jpeg"},94:(e,n,t)=>{e.exports=t.p+"177a8719630960f715a4.jpg"},516:(e,n,t)=>{e.exports=t.p+"01da3197dff50a00be0f.jpg"},294:(e,n,t)=>{e.exports=t.p+"466a756e434a4179699c.png"},315:(e,n,t)=>{e.exports=t.p+"eca4bcd40e004b495a19.jpeg"},480:(e,n,t)=>{e.exports=t.p+"2b78d68e97d2d04153ee.jpeg"},502:(e,n,t)=>{e.exports=t.p+"c547162dbbd2f2002047.jpg"},390:(e,n,t)=>{e.exports=t.p+"cff9e3766a2148af710d.jpeg"},151:(e,n,t)=>{e.exports=t.p+"eb2ed0e1ae6d9c244a6e.jpeg"}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),a=t(795),o=t.n(a),i=t(569),r=t.n(i),c=t(565),d=t.n(c),l=t(216),s=t.n(l),p=t(589),m=t.n(p),u=t(426),f={};f.styleTagTransform=m(),f.setAttributes=d(),f.insert=r().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=s(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;var h=t(94),g=t(294);let x=document.querySelector("#content"),v=document.createElement("div");v.setAttribute("id","main");const b=function(){y(),C(),E(),S(),x.appendChild(v)},y=function(){let e=document.createElement("div");e.classList.add("modal");const n=new Image;n.src=h,n.setAttribute("id","headchef"),e.appendChild(n),v.appendChild(e)},C=function(){let e=document.createElement("div");e.setAttribute("id","section3");let n=document.createElement("h2");n.textContent="Opening Times";let t=document.createElement("table");t.setAttribute("id","openingTimes"),w(t,["5:30pm-11:30pm","5:30pm-11:30pm","5:30pm-11:30pm","5:30pm-11:30pm","6:30pm-12:30pm","5:30pm-01:30pm","4:30pm-10:30pm"]),e.appendChild(n),e.appendChild(t),v.appendChild(e)},w=function(e,n){const t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];for(let a=0;a<t.length;a++){let o=document.createElement("tr"),i=document.createElement("td"),r=document.createElement("td");i.textContent=t[a],r.textContent=n[a],o.appendChild(i),o.appendChild(r),e.appendChild(o)}},E=function(){let e=document.createElement("div");e.setAttribute("id","section4");let n=document.createElement("h2");n.textContent="Reviews:";let t=document.createElement("div");t.classList.add("review"),t.textContent="This is absolutely the best restaurant I have ever been to. \n    At first thought, I thought salami couldn't exclusively bring\n    me the same joy as a bowl of sushi could, but 1 mouthful of each of the courses\n    just brought me extreme joy and satisfaction. The head chef really does know what he's\n    doing!- Remi",e.appendChild(n),e.appendChild(t),v.appendChild(e)},S=function(){let e=document.createElement("div");e.setAttribute("id","section5");let n=document.createElement("h2");n.textContent="Location: ";let t=new Image;t.src=g,e.appendChild(n),e.appendChild(t),v.appendChild(e)};var j=t(315),T=t(502),I=t(480),L=t(563),A=t(390),k=t(151),z=t(358),M=t(516),q=t(339),P=t(503);const R=[{name:"Salami A La Lunchable",image:j},{name:"Salami Rosettes",image:T},{name:"Salami Rollups",image:I}],N=[{name:"Salami Sushi",image:k},{name:"Salami Pizza",image:L},{name:"Salami Sandwich",image:A}],O=[{name:"Beef and Salami Lasagna Cake",image:M},{name:"Chocolate Salami",image:z}],Z=[{name:"Hennesy",image:q},{name:"Priorat Wine",image:P}],F=function(e,n,t){const a=document.createElement("div");a.classList.add("menuItem");const o=document.createElement("h3");o.textContent=e,o.classList.add("itemTitle");const i=new Image;i.src=n,i.classList.add("displayPicture"),a.appendChild(o),a.appendChild(i),t.appendChild(a)};!function(){let e=document.createElement("header"),n=document.createElement("h1");n.textContent="La Salamia";let t=document.createElement("nav"),a=document.createElement("button");a.textContent="Home",a.setAttribute("id","home");let o=document.createElement("button");o.textContent="Menu",o.setAttribute("id","menu");let i=document.createElement("button");i.textContent="Contact Us",i.setAttribute("id","contact"),t.appendChild(a),t.appendChild(o),t.appendChild(i),e.appendChild(n),e.appendChild(t),x.appendChild(e)}(),b();let H=document.querySelector("#home"),D=document.querySelector("#menu");document.querySelector("#contact");const G=function(){let e=document.querySelector("#main");for(;e.firstChild;)e.removeChild(e.firstChild)};H.addEventListener("click",(()=>{G(),b()})),D.addEventListener("click",(()=>{G(),function(){const e=document.createElement("div");e.classList.add("container");const n=document.createElement("h2");n.textContent="Appetisers",e.appendChild(n);for(let n=0;n<R.length;n++)F(R[n].name,R[n].image,e);document.querySelector("#main").appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("container");const n=document.createElement("h2");n.textContent="Mains",e.appendChild(n);for(let n=0;n<N.length;n++)F(N[n].name,N[n].image,e);document.querySelector("#main").appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("container");const n=document.createElement("h2");n.textContent="Desserts",e.appendChild(n);for(let n=0;n<O.length;n++)F(O[n].name,O[n].image,e);document.querySelector("#main").appendChild(e)}(),function(){const e=document.createElement("div");e.classList.add("container");const n=document.createElement("h2");n.textContent="Drinks",e.appendChild(n);for(let n=0;n<Z.length;n++)F(Z[n].name,Z[n].image,e);document.querySelector("#main").appendChild(e)}()}))})()})();