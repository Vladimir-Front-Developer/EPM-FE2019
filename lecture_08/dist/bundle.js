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

/***/ "./src/scripts/blog/blog.js":
/*!**********************************!*\
  !*** ./src/scripts/blog/blog.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getBlogData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlogData */ \"./src/scripts/blog/getBlogData.js\");\n/* harmony import */ var _renderBlogItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBlogItems */ \"./src/scripts/blog/renderBlogItems.js\");\n\r\n\r\nwindow.onload = function (){\r\n    var blogContentComp = document.getElementById('blogContent')\r\n    let blogData = Object(_getBlogData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    Object(_renderBlogItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(blogData, blogContentComp)\r\n}\n\n//# sourceURL=webpack:///./src/scripts/blog/blog.js?");

/***/ }),

/***/ "./src/scripts/blog/getBlogData.js":
/*!*****************************************!*\
  !*** ./src/scripts/blog/getBlogData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (){\r\n    let data = []\r\n    let id = 0\r\n    const getItemsBlog = () => {\r\n        id++\r\n        let ratings = getRatings()\r\n        let topics = getTopics()\r\n        let title = `Title${id}`\r\n        data.push({\r\n            id: id,\r\n            ratings: ratings,\r\n            topics: topics,\r\n            title: title\r\n        })\r\n        if(id === 30) return\r\n        else getItemsBlog()\r\n    }\r\n    \r\n    const getRatings = () => {\r\n        let ratings = []\r\n        const getRandomRatings = (min, max) => {\r\n            let lengthArr = ratings.length\r\n            ratings.push(getRandomInt(min, max))\r\n            if(lengthArr < 9) getRandomRatings(1, 1000)\r\n            else return\r\n        }\r\n        getRandomRatings(1, 1000)\r\n        return ratings\r\n    }\r\n    \r\n    const getTopics = () => {\r\n        let topics = []\r\n        let numTopics = getRandomInt(1, 20)\r\n        let num = 0\r\n        const getTopicItems = () => {\r\n            if(topics.length < numTopics) {\r\n                num++\r\n                topics.push(`Topic${num}`)\r\n                getTopicItems()\r\n            } else return\r\n        }\r\n        getTopicItems()\r\n        return topics\r\n    }\r\n    \r\n    const getRandomInt = (min, max) => {\r\n        return Math.floor(Math.random() * (max - min)) + min\r\n    }\r\n    \r\n    const getAverage = (arr) => {\r\n        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)\r\n    }\r\n    \r\n    const calculateAverageRating = (items) => {\r\n        return items.map(el => {\r\n            return {\r\n                id: el.id,\r\n                rating: getAverage(el.ratings),\r\n                topics: el.topics,\r\n                title: el.title\r\n            }\r\n        })\r\n    }\r\n    \r\n    const searchByRating = (items) => {\r\n        let averageRating = calculateAverageRating(items)\r\n        return averageRating.sort((a, b) => { return b.rating - a.rating })\r\n    }\r\n\r\n    getItemsBlog()\r\n\r\n    return searchByRating(data)\r\n});\n\n//# sourceURL=webpack:///./src/scripts/blog/getBlogData.js?");

/***/ }),

/***/ "./src/scripts/blog/renderBlogItems.js":
/*!*********************************************!*\
  !*** ./src/scripts/blog/renderBlogItems.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (items, component){\r\n    const getBlogItem = (item, imgSrc) => {\r\n        let blogItem = document.createElement('div')\r\n        blogItem.id = String(item.id)\r\n        blogItem.className = 'blog__content__item'\r\n        // blogItem.tabIndex = '0'\r\n        blogItem.append(getBlogImg(imgSrc))\r\n        blogItem.append(getBlogTitle(item.title))\r\n        const dateMock = '15 Jan, 2015'\r\n        blogItem.append(getBlogDate(dateMock))\r\n        blogItem.append(getBlogRating(item.rating))\r\n        const textMock = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla, cum enim ex tenetur nobis earum eius pariatur quas error.'\r\n        blogItem.append(getBlogText(textMock))\r\n        blogItem.append(getBlogTopics(item.topics))\r\n        blogItem.append(getBlogBtn())\r\n        return blogItem\r\n    }\r\n\r\n    const getBlogImg = (imgSrc) => {\r\n        const imgComp = document.createElement('img')\r\n        imgComp.className = 'blog__content__item__image'\r\n        imgComp.src = imgSrc\r\n        imgComp.alt = 'iamge'\r\n        return imgComp\r\n    }\r\n\r\n    const getBlogTitle = (title) => {\r\n        const titleComp = document.createElement('h4')\r\n        titleComp.className = 'sub-header blog__content__item__header'\r\n        titleComp.innerHTML = title\r\n        return titleComp\r\n    }\r\n    const getBlogDate = (date) => {\r\n        const dateComp = document.createElement('p')\r\n        dateComp.className = 'blog__content__item__date'\r\n        dateComp.innerHTML = date\r\n        return date\r\n    }\r\n\r\n    const getBlogRating = (rating) => {\r\n        const ratingComp = document.createElement('p')\r\n        ratingComp.className = 'blog__content__item__rating'\r\n        ratingComp.innerHTML = `rating: ${rating}`\r\n        return ratingComp\r\n    }\r\n\r\n    const getBlogText = (text) => {\r\n        const textComp = document.createElement('p')\r\n        textComp.className = 'blog__content__item__text'\r\n        textComp.innerHTML = text\r\n        return textComp\r\n    }\r\n\r\n    const getBlogTopics = (topics) => {\r\n        const topicsComp = document.createElement('p')\r\n        topicsComp.className = 'blog__content__item__topics'\r\n        topicsComp.innerHTML = topics.join(', ')\r\n        return topicsComp\r\n    }\r\n\r\n    const getBlogBtn = () => {\r\n        const btn = document.createElement('button')\r\n        btn.className = 'btn btn-style blog__content__item__button'\r\n        btn.innerHTML = 'read more'\r\n        return btn\r\n    }\r\n\r\n    const renderItems = (items) => {\r\n        component.append(getBlogItem(items[0], './images/image_16.png'))\r\n        component.append(getBlogItem(items[1], './images/image_14.png'))\r\n        component.append(getBlogItem(items[2], './images/image_15.png'))\r\n    }\r\n\r\n    renderItems(items)\r\n});\n\n//# sourceURL=webpack:///./src/scripts/blog/renderBlogItems.js?");

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