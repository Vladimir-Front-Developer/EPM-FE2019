!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0);var n={url:{posts:"https://my-json-server.typicode.com/Vladimir-Front-Developer/EPM-FE2019/posts"}};var a=class{render(e,t){let r=document.getElementById(e);for(let e of t)r.append(this.createItem(e))}createItem(e){let t=document.createElement("div");return t.id=String(e.id),t.className=e.style,e.elements.forEach(e=>{switch(e.type){case"img":t.append(this.createImg(e.value,e.style));break;case"subHdr":t.append(this.createSubHeader(e.value,e.style));break;case"txt":t.append(this.createText(e.value,e.style));break;case"btn":t.append(this.createBtn(e.value,e.style));break;default:throw new Error("unknown type!")}}),t}createImg(e,t){let r=document.createElement("img");return r.className=t,r.src=e,r.alt="image",r}createSubHeader(e,t){let r=document.createElement("h4");return r.className=`sub-header ${t}`,r.innerHTML=e,r}createText(e,t){let r=document.createElement("p");return r.className=t,r.innerHTML=e,r}createBtn(e,t){let r=document.createElement("button");return r.className=`btn btn-style ${t}`,r.innerHTML=e,r}};var l=class extends a{constructor(e,t,r){super();let n=this.getItemsData(r,t);super.render(e,n)}getItemsData(e,t){return this.getSortByRatingPosts(e).slice(0,t).map(e=>({id:e.id,style:"blog__content__item",elements:[{type:"img",style:"blog__content__item__image",value:e.imgLink},{type:"subHdr",style:"blog__content__item__header",value:e.title},{type:"txt",style:"blog__content__item__date",value:e.date},{type:"txt",style:"blog__content__item__rating",value:e.rating},{type:"txt",style:"blog__content__item__text",value:e.text},{type:"txt",style:"blog__content__item__topics",value:e.topics.join(", ")},{type:"btn",style:"blog__content__item__button",value:"read more"}]}))}getSortByRatingPosts(e){if(!e.length)throw new Error("no posts");return this.calculateAverageRating(e).sort((e,t)=>t.rating-e.rating)}calculateAverageRating(e){return e.map(e=>({...e,rating:this.getAverage(e.ratings)}))}getAverage(e){return Math.floor(e.reduce((e,t)=>e+t)/e.length)}};(new class{getAll(e){return fetch(n.url[e]).then(e=>e.json()).catch(e=>{throw new Error(`ERROR getAll: ${e}`)})}}).getAll("posts").then(e=>new l("blogContent",3,e))}]);