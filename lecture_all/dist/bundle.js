/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_blog_RenderPosts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/blog/RenderPosts */ \"./src/scripts/blog/RenderPosts.js\");\n\r\n\r\nwindow.onload = function (){\r\n    new _scripts_blog_RenderPosts__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('blogContent', 3)\r\n}\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/scripts/blog/RenderPosts.js":
/*!*****************************************!*\
  !*** ./src/scripts/blog/RenderPosts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_PostsService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/PostsService */ \"./src/scripts/blog/services/PostsService.js\");\n\r\n\r\nclass RenderPosts extends _services_PostsService__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(nameContainer, countPosts){\r\n        super()\r\n        this.getSortByRatingPosts().then(posts => this.render(nameContainer, posts, countPosts))\r\n    }\r\n\r\n    render(nameContainer, posts, countPosts){\r\n        if(!nameContainer) throw new Error('nameContainer undefined')\r\n        if(!countPosts) throw new Error('countPosts undefined')\r\n        let container = document.getElementById(nameContainer)\r\n        for(let i = 0; i < countPosts; i++){\r\n            container.append(this.getItem(posts[i]))\r\n        }\r\n    }\r\n\r\n    getItem(data){\r\n        let div = document.createElement('div')\r\n        div.id = String(data.id)\r\n        div.className = 'blog__content__item'\r\n        div.append(this.getImg(data.imgLink, 'blog__content__item__image'))\r\n        div.append(this.getSubHeader(data.title, 'sub-header blog__content__item__header'))\r\n        div.append(this.getText(data.date, 'blog__content__item__date'))\r\n        div.append(this.getText(data.rating, 'blog__content__item__rating'))\r\n        div.append(this.getText(data.text, 'blog__content__item__text'))\r\n        div.append(this.getText(data.topics.join(', '), 'blog__content__item__topics'))\r\n        div.append(this.getBtn('read more', 'btn btn-style blog__content__item__button'))\r\n        return div\r\n    }\r\n\r\n    getImg(src, cls){\r\n        let img = document.createElement('img')\r\n        img.className = cls\r\n        img.src = src\r\n        img.alt = 'image'\r\n        return img\r\n    }\r\n    \r\n    getSubHeader(txt, cls){\r\n        let h4 = document.createElement('h4')\r\n        h4.className = cls\r\n        h4.innerHTML = txt\r\n        return h4\r\n    }\r\n\r\n    getText(txt, cls){\r\n        let p = document.createElement('p')\r\n        p.className = cls\r\n        p.innerHTML = txt\r\n        return p\r\n    }\r\n\r\n    getBtn(txt, cls){\r\n        let btn = document.createElement('button')\r\n        btn.className = cls\r\n        btn.innerHTML = txt\r\n        return btn\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderPosts);\n\n//# sourceURL=webpack:///./src/scripts/blog/RenderPosts.js?");

/***/ }),

/***/ "./src/scripts/blog/services/PostsService.js":
/*!***************************************************!*\
  !*** ./src/scripts/blog/services/PostsService.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Api */ \"./src/scripts/services/Api.js\");\n\r\n\r\nclass PostsService extends _services_Api__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    async getSortByRatingPosts() {\r\n        let posts = await super.getPosts()\r\n        if(!posts.length) throw new Error('no posts')\r\n        let averageRating = this.calculateAverageRating(posts)\r\n        return averageRating.sort((a, b) => { return b.rating - a.rating })\r\n    }\r\n    calculateAverageRating(arr) {\r\n        return arr.map(el => {\r\n            return {\r\n                id: el.id,\r\n                rating: this.getAverage(el.ratings),\r\n                topics: el.topics,\r\n                title: el.title,\r\n                date: el.date,\r\n                text: el.text,\r\n                imgLink: el.imgLink\r\n            }\r\n        })\r\n    }\r\n    getAverage(arr) {\r\n        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsService);\n\n//# sourceURL=webpack:///./src/scripts/blog/services/PostsService.js?");

/***/ }),

/***/ "./src/scripts/services/Api.js":
/*!*************************************!*\
  !*** ./src/scripts/services/Api.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/scripts/services/config.js\");\n\r\nclass Api{\r\n    async getPosts(){\r\n        try {\r\n            let res = await fetch(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].url.posts)\r\n            return await res.json()\r\n        } catch(err) {\r\n            console.log(`ERROR getPosts: ${err}`)\r\n            return []\r\n        }\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Api);\n\n//# sourceURL=webpack:///./src/scripts/services/Api.js?");

/***/ }),

/***/ "./src/scripts/services/config.js":
/*!****************************************!*\
  !*** ./src/scripts/services/config.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    url: {\r\n        posts: \"https://my-json-server.typicode.com/Vladimir-Front-Developer/EPM-FE2019/posts\"\r\n    }\r\n});\n\n//# sourceURL=webpack:///./src/scripts/services/config.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });