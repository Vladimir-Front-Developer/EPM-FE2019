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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_blog_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/blog/blog */ \"./src/scripts/blog/blog.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/blog/blog.js":
/*!**********************************!*\
  !*** ./src/scripts/blog/blog.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getBlogData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBlogData */ \"./src/scripts/blog/getBlogData.js\");\n/* harmony import */ var _renderBlogItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderBlogItems */ \"./src/scripts/blog/renderBlogItems.js\");\n\n\nwindow.onload = function (){\n    var blogContentComp = document.getElementById('blogContent')\n    let blogData = Object(_getBlogData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n    Object(_renderBlogItems__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(blogData, blogContentComp)\n}\n\n//# sourceURL=webpack:///./src/scripts/blog/blog.js?");

/***/ }),

/***/ "./src/scripts/blog/getBlogData.js":
/*!*****************************************!*\
  !*** ./src/scripts/blog/getBlogData.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (){\n    let data = []\n    let id = 0\n    const getItemsBlog = () => {\n        id++\n        let ratings = getRatings()\n        let topics = getTopics()\n        let title = `Title${id}`\n        data.push({\n            id: id,\n            ratings: ratings,\n            topics: topics,\n            title: title\n        })\n        if(id === 30) return\n        else getItemsBlog()\n    }\n    \n    const getRatings = () => {\n        let ratings = []\n        const getRandomRatings = (min, max) => {\n            let lengthArr = ratings.length\n            ratings.push(getRandomInt(min, max))\n            if(lengthArr < 9) getRandomRatings(1, 1000)\n            else return\n        }\n        getRandomRatings(1, 1000)\n        return ratings\n    }\n    \n    const getTopics = () => {\n        let topics = []\n        let numTopics = getRandomInt(1, 20)\n        let num = 0\n        const getTopicItems = () => {\n            if(topics.length < numTopics) {\n                num++\n                topics.push(`Topic${num}`)\n                getTopicItems()\n            } else return\n        }\n        getTopicItems()\n        return topics\n    }\n    \n    const getRandomInt = (min, max) => {\n        return Math.floor(Math.random() * (max - min)) + min\n    }\n    \n    const getAverage = (arr) => {\n        return Math.floor(arr.reduce((a, b) => a + b) / arr.length)\n    }\n    \n    const calculateAverageRating = (items) => {\n        return items.map(el => {\n            return {\n                id: el.id,\n                rating: getAverage(el.ratings),\n                topics: el.topics,\n                title: el.title\n            }\n        })\n    }\n    \n    const searchByRating = (items) => {\n        let averageRating = calculateAverageRating(items)\n        return averageRating.sort((a, b) => { return b.rating - a.rating })\n    }\n\n    getItemsBlog()\n\n    return searchByRating(data)\n});\n\n//# sourceURL=webpack:///./src/scripts/blog/getBlogData.js?");

/***/ }),

/***/ "./src/scripts/blog/renderBlogItems.js":
/*!*********************************************!*\
  !*** ./src/scripts/blog/renderBlogItems.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (items, component){\n    const getBlogItem = (item, imgSrc) => {\n        let blogItem = document.createElement('div')\n        blogItem.id = String(item.id)\n        blogItem.className = 'blog__content__item'\n        // blogItem.tabIndex = '0'\n        blogItem.append(getBlogImg(imgSrc))\n        blogItem.append(getBlogTitle(item.title))\n        const dateMock = '15 Jan, 2015'\n        blogItem.append(getBlogDate(dateMock))\n        blogItem.append(getBlogRating(item.rating))\n        const textMock = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A nulla, cum enim ex tenetur nobis earum eius pariatur quas error.'\n        blogItem.append(getBlogText(textMock))\n        blogItem.append(getBlogTopics(item.topics))\n        blogItem.append(getBlogBtn())\n        return blogItem\n    }\n\n    const getBlogImg = (imgSrc) => {\n        const imgComp = document.createElement('img')\n        imgComp.className = 'blog__content__item__image'\n        imgComp.src = imgSrc\n        imgComp.alt = 'iamge'\n        return imgComp\n    }\n\n    const getBlogTitle = (title) => {\n        const titleComp = document.createElement('h4')\n        titleComp.className = 'sub-header blog__content__item__header'\n        titleComp.innerHTML = title\n        return titleComp\n    }\n    const getBlogDate = (date) => {\n        const dateComp = document.createElement('p')\n        dateComp.className = 'blog__content__item__date'\n        dateComp.innerHTML = date\n        return date\n    }\n\n    const getBlogRating = (rating) => {\n        const ratingComp = document.createElement('p')\n        ratingComp.className = 'blog__content__item__rating'\n        ratingComp.innerHTML = `rating: ${rating}`\n        return ratingComp\n    }\n\n    const getBlogText = (text) => {\n        const textComp = document.createElement('p')\n        textComp.className = 'blog__content__item__text'\n        textComp.innerHTML = text\n        return textComp\n    }\n\n    const getBlogTopics = (topics) => {\n        const topicsComp = document.createElement('p')\n        topicsComp.className = 'blog__content__item__topics'\n        topicsComp.innerHTML = topics.join(', ')\n        return topicsComp\n    }\n\n    const getBlogBtn = () => {\n        const btn = document.createElement('button')\n        btn.className = 'btn btn-style blog__content__item__button'\n        btn.innerHTML = 'read more'\n        return btn\n    }\n\n    const renderItems = (items) => {\n        component.append(getBlogItem(items[0], './images/image_16.png'))\n        component.append(getBlogItem(items[1], './images/image_14.png'))\n        component.append(getBlogItem(items[2], './images/image_15.png'))\n    }\n\n    renderItems(items)\n});\n\n//# sourceURL=webpack:///./src/scripts/blog/renderBlogItems.js?");

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