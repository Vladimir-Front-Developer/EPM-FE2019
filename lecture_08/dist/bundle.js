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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_blog_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/blog/blog */ \"./src/scripts/blog/blog.js\");\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/blog/BlogElements.js":
/*!******************************************!*\
  !*** ./src/scripts/blog/BlogElements.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _RandomPosts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RandomPosts */ \"./src/scripts/blog/RandomPosts.js\");\n\r\n\r\nfunction BlogElements(params) {\r\n    // RandomPosts.call(this, this.getPosts)\r\n    this.params = params\r\n    this.render = function() {\r\n        let dataPosts = this.getPosts(this.params)\r\n        let container = document.getElementById(this.params.nameContainer)\r\n        for(let i = 0; i < this.params.renderCount; i++){\r\n            container.append(this.getItem(dataPosts[i], i))\r\n        }\r\n    }\r\n    this.getItem = function(item, idxImg) {\r\n        const DATE_MOCK = '15 Jan, 2015'\r\n        const TEXT_MOCK = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla, cum enim ex tenetur nobis earum eius pariatur quas error.'\r\n        const IMGS_MOCK = ['./images/image_16.png', './images/image_14.png', '/images/image_15.png']\r\n        let blogItem = document.createElement('div')\r\n        blogItem.id = String(item.id)\r\n        blogItem.className = 'blog__content__item'\r\n        blogItem.append(this.getImg(IMGS_MOCK[idxImg] || './images/image_16.png'))\r\n        blogItem.append(this.getTitle(item.title))\r\n        blogItem.append(this.getDate(DATE_MOCK))\r\n        blogItem.append(this.getRating(item.rating))\r\n        blogItem.append(this.getText(TEXT_MOCK))\r\n        blogItem.append(this.getTopic(item.topics))\r\n        blogItem.append(this.getBtn())\r\n        return blogItem\r\n    }\r\n    this.getImg = function(imgSrc) {\r\n        let imgComp = document.createElement('img')\r\n        imgComp.className = 'blog__content__item__image'\r\n        imgComp.src = imgSrc\r\n        imgComp.alt = 'iamge'\r\n        return imgComp\r\n    }\r\n    this.getTitle = function(title) {\r\n        let titleComp = document.createElement('h4')\r\n        titleComp.className = 'sub-header blog__content__item__header'\r\n        titleComp.innerHTML = title\r\n        return titleComp\r\n    }\r\n    this.getDate = function(date) {\r\n        let dateComp = document.createElement('p')\r\n        dateComp.className = 'blog__content__item__date'\r\n        dateComp.innerHTML = date\r\n        return date\r\n    }\r\n    this.getRating = function(rating) {\r\n        let ratingComp = document.createElement('p')\r\n        ratingComp.className = 'blog__content__item__rating'\r\n        ratingComp.innerHTML = `rating: ${rating}`\r\n        return ratingComp\r\n    }\r\n    this.getText = function(text) {\r\n        let textComp = document.createElement('p')\r\n        textComp.className = 'blog__content__item__text'\r\n        textComp.innerHTML = text\r\n        return textComp\r\n    }\r\n    this.getTopic = function(topics) {\r\n        let topicsComp = document.createElement('p')\r\n        topicsComp.className = 'blog__content__item__topics'\r\n        topicsComp.innerHTML = topics.join(', ')\r\n        return topicsComp\r\n    }\r\n    this.getBtn = function() {\r\n        let btn = document.createElement('button')\r\n        btn.className = 'btn btn-style blog__content__item__button'\r\n        btn.innerHTML = 'read more'\r\n        return btn\r\n    }\r\n}\r\n// Оставил чтобы разобрать на следующем занятии\r\n// Object.assign(BlogElements.prototype, {\r\n//     render: function(nameContainer, dataPosts, renderCount) {\r\n//         let container = document.getElementById(nameContainer)\r\n//         for(let i = 0; i < renderCount; i++){\r\n//             container.append(this.getItem(dataPosts[i], i))\r\n//         }\r\n//     },\r\n//     getItem: function(item, idxImg) {\r\n//         const DATE_MOCK = '15 Jan, 2015'\r\n//         const TEXT_MOCK = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla, cum enim ex tenetur nobis earum eius pariatur quas error.'\r\n//         const IMGS_MOCK = ['./images/image_16.png', './images/image_14.png', '/images/image_15.png']\r\n//         let blogItem = document.createElement('div')\r\n//         blogItem.id = String(item.id)\r\n//         blogItem.className = 'blog__content__item'\r\n//         blogItem.append(this.getImg(IMGS_MOCK[idxImg] || './images/image_16.png'))\r\n//         blogItem.append(this.getTitle(item.title))\r\n//         blogItem.append(this.getDate(DATE_MOCK))\r\n//         blogItem.append(this.getRating(item.rating))\r\n//         blogItem.append(this.getText(TEXT_MOCK))\r\n//         blogItem.append(this.getTopics(item.topics))\r\n//         blogItem.append(this.getBtn())\r\n//         return blogItem\r\n//     },\r\n//     getImg: function(imgSrc) {\r\n//         let imgComp = document.createElement('img')\r\n//         imgComp.className = 'blog__content__item__image'\r\n//         imgComp.src = imgSrc\r\n//         imgComp.alt = 'iamge'\r\n//         return imgComp\r\n//     },\r\n//     getTitle: function(title) {\r\n//         let titleComp = document.createElement('h4')\r\n//         titleComp.className = 'sub-header blog__content__item__header'\r\n//         titleComp.innerHTML = title\r\n//         return titleComp\r\n//     },\r\n//     getDate: function(date) {\r\n//         let dateComp = document.createElement('p')\r\n//         dateComp.className = 'blog__content__item__date'\r\n//         dateComp.innerHTML = date\r\n//         return date\r\n//     },\r\n//     getRating: function(rating) {\r\n//         let ratingComp = document.createElement('p')\r\n//         ratingComp.className = 'blog__content__item__rating'\r\n//         ratingComp.innerHTML = `rating: ${rating}`\r\n//         return ratingComp\r\n//     },\r\n//     getText: function(text) {\r\n//         let textComp = document.createElement('p')\r\n//         textComp.className = 'blog__content__item__text'\r\n//         textComp.innerHTML = text\r\n//         return textComp\r\n//     },\r\n//     getTopics: function(topics) {\r\n//         let topicsComp = document.createElement('p')\r\n//         topicsComp.className = 'blog__content__item__topics'\r\n//         topicsComp.innerHTML = topics.join(', ')\r\n//         return topicsComp\r\n//     },\r\n//     getBtn: function() {\r\n//         let btn = document.createElement('button')\r\n//         btn.className = 'btn btn-style blog__content__item__button'\r\n//         btn.innerHTML = 'read more'\r\n//         return btn\r\n//     },\r\n// })\r\n\r\nBlogElements.prototype = Object.create(_RandomPosts__WEBPACK_IMPORTED_MODULE_0__[\"default\"].prototype)\r\nBlogElements.prototype.constructor = _RandomPosts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogElements);\n\n//# sourceURL=webpack:///./src/scripts/blog/BlogElements.js?");

/***/ }),

/***/ "./src/scripts/blog/RandomPosts.js":
/*!*****************************************!*\
  !*** ./src/scripts/blog/RandomPosts.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction RandomPosts(postsParams){ this.params = postsParams }\r\n\r\nObject.assign(RandomPosts.prototype, {\r\n    getPosts: function (postsParams) {\r\n        this.params = postsParams\r\n        if(!this.params || !postsParams) throw new Error('no argument passed! {countPosts, ratingParams, topicsParams}')\r\n        let { countPosts, ratingParams, topicsParams } = this.params\r\n        let dataPosts = new Array(countPosts).fill('item', 0, countPosts).map((el, idx) => {\r\n            return {\r\n                id: idx++,\r\n                title: `Title ${idx++}`,\r\n                ratings: this.getRandomRatings(ratingParams),\r\n                topics: this.getTopics(topicsParams)\r\n            }\r\n        })\r\n        return this.searchByRating(dataPosts)\r\n    },\r\n    getRandomRatings: function (ratingParams) {\r\n        this.params.ratingParams = ratingParams\r\n        if(!this.params.ratingParams) throw new Error('no argument passed! {countRatings, min, max}')\r\n        let { countRatings, min, max } = ratingParams\r\n        return new Array(countRatings).fill('item', 0, countRatings).map(() => {\r\n            return this.getRandomInt(min, max)\r\n        })\r\n    },\r\n    getTopics: function (topicsParams) {\r\n        this.params.topicsParams = topicsParams\r\n        if(!this.params.topicsParams) throw new Error('no argument passed! {min, max}')\r\n        let countTopics = this.getRandomInt(topicsParams.min, topicsParams.max)\r\n        return new Array(countTopics).fill('i', 0, countTopics).map((el, idx) => {\r\n            return `#Topic${ idx++ }`\r\n        })\r\n    },\r\n    getRandomInt: function (min, max) {\r\n        return Math.floor(Math.random() * (max - min)) + min\r\n    },\r\n    searchByRating: function (items) {\r\n        let averageRating = this.calculateAverageRating(items)\r\n        return averageRating.sort((a, b) => { return b.rating - a.rating })\r\n    },\r\n    calculateAverageRating: function (items) {\r\n        return items.map(el => {\r\n            return {\r\n                id: el.id,\r\n                rating: this.getAverage(el.ratings),\r\n                topics: el.topics,\r\n                title: el.title\r\n            }\r\n        })\r\n    },\r\n    getAverage: function (arr) {\r\n        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)\r\n    },\r\n})\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RandomPosts);\n\n//# sourceURL=webpack:///./src/scripts/blog/RandomPosts.js?");

/***/ }),

/***/ "./src/scripts/blog/blog.js":
/*!**********************************!*\
  !*** ./src/scripts/blog/blog.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _BlogElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogElements */ \"./src/scripts/blog/BlogElements.js\");\n\r\n\r\nwindow.onload = function (){\r\n    const PARAMS_RANDOM_POST = {\r\n        nameContainer: 'blogContent',\r\n        renderCount: 3,\r\n        countPosts: 30,\r\n        ratingParams: {\r\n            countRatings: 10,\r\n            min: 1,\r\n            max: 1000\r\n        },\r\n        topicsParams: {\r\n            min: 1,\r\n            max: 20\r\n        }\r\n    }\r\n    let blogElements1 = new _BlogElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"](PARAMS_RANDOM_POST)\r\n    let blogElements2 = new _BlogElements__WEBPACK_IMPORTED_MODULE_0__[\"default\"](PARAMS_RANDOM_POST)\r\n    blogElements1.render(PARAMS_RANDOM_POST)\r\n    blogElements2.render(PARAMS_RANDOM_POST)\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/blog/blog.js?");

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