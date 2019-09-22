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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_blog_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/blog/blog */ \"./src/scripts/blog/blog.js\");\n\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/scripts/blog/blog.js":
/*!**********************************!*\
  !*** ./src/scripts/blog/blog.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_RequestApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/RequestApi */ \"./src/scripts/services/RequestApi.js\");\n/* harmony import */ var _services_PostsService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/PostsService */ \"./src/scripts/blog/services/PostsService.js\");\n\r\n\r\n\r\nconst reqApi = new _services_RequestApi__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\r\nreqApi.getAll('posts')\r\n.then(dataPosts => new _services_PostsService__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('blogContent', 3, dataPosts))\n\n//# sourceURL=webpack:///./src/scripts/blog/blog.js?");

/***/ }),

/***/ "./src/scripts/blog/services/PostsService.js":
/*!***************************************************!*\
  !*** ./src/scripts/blog/services/PostsService.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _services_Render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/Render */ \"./src/scripts/services/Render.js\");\n\r\n\r\nclass PostsService extends _services_Render__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor(name, count, data){\r\n        super()\r\n        let itemsData = this.getItemsData(data, count)\r\n        super.render(name, itemsData)\r\n    }\r\n    \r\n    getItemsData(data, count){\r\n        let posts = this.getSortByRatingPosts(data).slice(0, count)\r\n        return posts.map(el => {\r\n            return {\r\n                id: el.id,\r\n                style: \"blog__content__item\",\r\n                elements: [\r\n                    {\r\n                        type: \"img\",\r\n                        style: \"blog__content__item__image\",\r\n                        value: el.imgLink\r\n                    },\r\n                    {\r\n                        type: \"subHdr\",\r\n                        style: \"blog__content__item__header\",\r\n                        value: el.title\r\n                    },\r\n                    {\r\n                        type: \"txt\",\r\n                        style: \"blog__content__item__date\",\r\n                        value: el.date\r\n                    },\r\n                    {\r\n                        type: \"txt\",\r\n                        style: \"blog__content__item__rating\",\r\n                        value: el.rating\r\n                    },\r\n                    {\r\n                        type: \"txt\",\r\n                        style: \"blog__content__item__text\",\r\n                        value: el.text\r\n                    },\r\n                    {\r\n                        type: \"txt\",\r\n                        style: \"blog__content__item__topics\",\r\n                        value: el.topics.join(', ')\r\n                    },\r\n                    {\r\n                        type: \"btn\",\r\n                        style: \"blog__content__item__button\",\r\n                        value: \"read more\"\r\n                    },\r\n                ]\r\n            }\r\n        })\r\n    }\r\n\r\n    getSortByRatingPosts(posts) {\r\n        if(!posts.length) throw new Error('no posts')\r\n        let averageRating = this.calculateAverageRating(posts)\r\n        return averageRating.sort((a, b) => { return b.rating - a.rating })\r\n    }\r\n\r\n    calculateAverageRating(arr) {\r\n        return arr.map(el => {\r\n            return {\r\n                ...el,\r\n                rating: this.getAverage(el.ratings),\r\n            }\r\n        })\r\n    }\r\n\r\n    getAverage(arr) {\r\n        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsService);\n\n//# sourceURL=webpack:///./src/scripts/blog/services/PostsService.js?");

/***/ }),

/***/ "./src/scripts/services/Render.js":
/*!****************************************!*\
  !*** ./src/scripts/services/Render.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Render {\r\n    render(name, items){\r\n        let comp = document.getElementById(name)\r\n        for(let item of items){\r\n            comp.append(this.createItem(item))\r\n        }\r\n    }\r\n\r\n    createItem(item){\r\n        let div = document.createElement('div')\r\n        div.id = String(item.id)\r\n        div.className = item.style\r\n        item.elements.forEach(el => {\r\n            let type = el.type\r\n            switch (type) {\r\n                case 'img':\r\n                    div.append(this.createImg(el.value, el.style))\r\n                    break\r\n                case 'subHdr':\r\n                    div.append(this.createSubHeader(el.value, el.style))\r\n                    break\r\n                case 'txt':\r\n                    div.append(this.createText(el.value, el.style))\r\n                    break\r\n                case 'btn':\r\n                    div.append(this.createBtn(el.value, el.style))\r\n                    break\r\n                default:\r\n                    throw new Error('unknown type!')\r\n            }\r\n        })\r\n        return div\r\n    }\r\n\r\n    createImg(src, cls){\r\n        let img = document.createElement('img')\r\n        img.className = cls\r\n        img.src = src\r\n        img.alt = 'image'\r\n        return img\r\n    }\r\n    \r\n    createSubHeader(txt, cls){\r\n        let h4 = document.createElement('h4')\r\n        h4.className = `sub-header ${cls}`\r\n        h4.innerHTML = txt\r\n        return h4\r\n    }\r\n\r\n    createText(txt, cls){\r\n        let p = document.createElement('p')\r\n        p.className = cls\r\n        p.innerHTML = txt\r\n        return p\r\n    }\r\n\r\n    createBtn(txt, cls){\r\n        let btn = document.createElement('button')\r\n        btn.className = `btn btn-style ${cls}`\r\n        btn.innerHTML = txt\r\n        return btn\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Render);\n\n//# sourceURL=webpack:///./src/scripts/services/Render.js?");

/***/ }),

/***/ "./src/scripts/services/RequestApi.js":
/*!********************************************!*\
  !*** ./src/scripts/services/RequestApi.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/scripts/services/config.js\");\n\r\nclass RequestApi{\r\n    getAll(path){\r\n        return fetch(_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].url[path])\r\n        .then(res => res.json())\r\n        .catch(err => { throw new Error(`ERROR getAll: ${ err }`) })\r\n    }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestApi);\n\n//# sourceURL=webpack:///./src/scripts/services/RequestApi.js?");

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