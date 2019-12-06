module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/icons/AppStore.js":
/*!**********************************!*\
  !*** ./assets/icons/AppStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_appStore_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/appStore.png */ "./assets/images/appStore.png");
/* harmony import */ var _images_appStore_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_appStore_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\AppStore.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AppStore = props => {
  return __jsx("img", {
    src: _images_appStore_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "App Store",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AppStore);

/***/ }),

/***/ "./assets/icons/ArrowDownSmall.js":
/*!****************************************!*\
  !*** ./assets/icons/ArrowDownSmall.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\ArrowDownSmall.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const ArrowDownSmall = props => {
  return __jsx("svg", {
    width: "8",
    height: "6",
    viewBox: "0 0 8 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M8 1.45716C8 1.17591 7.77344 0.942871 7.5 0.942871H0.5C0.226562 0.942871 0 1.17591 0 1.45716C0 1.59376 0.0546875 1.72233 0.148438 1.81876L3.64844 5.41876C3.74219 5.51519 3.86719 5.57144 4 5.57144C4.13281 5.57144 4.25781 5.51519 4.35156 5.41876L7.85156 1.81876C7.94531 1.72233 8 1.59376 8 1.45716Z",
    fill: "#333333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ArrowDownSmall);

/***/ }),

/***/ "./assets/icons/GooglePlay.js":
/*!************************************!*\
  !*** ./assets/icons/GooglePlay.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_googlePlay_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/googlePlay.png */ "./assets/images/googlePlay.png");
/* harmony import */ var _images_googlePlay_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_googlePlay_png__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\GooglePlay.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const GooglePlay = props => {
  return __jsx("img", {
    src: _images_googlePlay_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    alt: "Google Play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (GooglePlay);

/***/ }),

/***/ "./assets/icons/JoyStick.js":
/*!**********************************!*\
  !*** ./assets/icons/JoyStick.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\JoyStick.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const JoyStick = props => {
  return __jsx("svg", {
    width: "28",
    height: "16",
    viewBox: "0 0 28 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M12.2352 8.88234C12.2352 9.1305 12.0422 9.32351 11.7941 9.32351H9.147V11.9706C9.147 12.2187 8.95399 12.4117 8.70583 12.4117H6.94112C6.69296 12.4117 6.49994 12.2187 6.49994 11.9706V9.32351H3.85288C3.60472 9.32351 3.41171 9.1305 3.41171 8.88234V7.11763C3.41171 6.86947 3.60472 6.67646 3.85288 6.67646H6.49994V4.0294C6.49994 3.78124 6.69296 3.58822 6.94112 3.58822H8.70583C8.95399 3.58822 9.147 3.78124 9.147 4.0294V6.67646H11.7941C12.0422 6.67646 12.2352 6.86947 12.2352 7.11763V8.88234ZM20.1764 9.76469C20.1764 10.7436 19.3906 11.5294 18.4117 11.5294C17.4328 11.5294 16.647 10.7436 16.647 9.76469C16.647 8.78583 17.4328 7.99998 18.4117 7.99998C19.3906 7.99998 20.1764 8.78583 20.1764 9.76469ZM23.7058 6.23528C23.7058 7.21414 22.92 7.99998 21.9411 7.99998C20.9623 7.99998 20.1764 7.21414 20.1764 6.23528C20.1764 5.25642 20.9623 4.47057 21.9411 4.47057C22.92 4.47057 23.7058 5.25642 23.7058 6.23528ZM27.2352 7.99998C27.2352 4.09833 24.0781 0.941162 20.1764 0.941162H7.82347C3.92182 0.941162 0.764648 4.09833 0.764648 7.99998C0.764648 11.9016 3.92182 15.0588 7.82347 15.0588C9.61575 15.0588 11.2426 14.3833 12.4834 13.2941H15.5165C16.7573 14.3833 18.3841 15.0588 20.1764 15.0588C24.0781 15.0588 27.2352 11.9016 27.2352 7.99998Z",
    fill: "#FF671D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (JoyStick);

/***/ }),

/***/ "./assets/icons/OpenPositionIcon.js":
/*!******************************************!*\
  !*** ./assets/icons/OpenPositionIcon.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\OpenPositionIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const OpenPositionsIcon = props => {
  return __jsx("svg", {
    width: "182",
    height: "142",
    viewBox: "0 0 182 142",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("circle", {
    cx: "97.8341",
    cy: "68.34",
    r: "68.3399",
    fill: "#EEEEEE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("path", {
    d: "M75.0198 34.9144C76.4904 35.7857 77.9897 34.7563 78.69 33.4792C77.7911 32.9655 75.7094 31.7416 74.5732 30.9557C74.1536 31.8069 73.6003 34.0735 75.0198 34.9144Z",
    fill: "#FFB82F",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("path", {
    d: "M53.2332 78.4111C55.0315 76.6127 57.9091 71.2174 57.9091 71.2174H68.3399L65.4624 78.4111H53.2332Z",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("path", {
    d: "M64.3834 78.4111C66.5415 72.2965 57.9092 71.2174 57.9092 71.2174H68.34L65.4625 78.4111H64.3834Z",
    fill: "#B1B1B1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("path", {
    d: "M81.7686 42.8025H42.195C41.358 42.8025 40.6977 43.5142 40.7603 44.3488L42.7026 70.2461C42.7589 70.9968 43.3844 71.5772 44.1373 71.5772H84.0346C84.8787 71.5772 85.5415 70.8539 85.4679 70.0131L83.2019 44.1158C83.1369 43.3727 82.5146 42.8025 81.7686 42.8025Z",
    fill: "#AEAEAE",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("path", {
    d: "M80.5005 43.8815H43.9744C43.1444 43.8815 42.4865 44.5819 42.5385 45.4102L43.666 63.3944C43.7135 64.1526 44.3422 64.7431 45.1019 64.7431H81.8922C82.7305 64.7431 83.3913 64.0292 83.3267 63.1934L81.935 45.2092C81.877 44.4599 81.2521 43.8815 80.5005 43.8815Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("rect", {
    x: "45.3201",
    y: "78.4111",
    width: "97.1146",
    height: "3.59684",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("path", {
    d: "M55.0316 76.9724H77.6917V78.4111H53.2332L55.0316 76.9724Z",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("rect", {
    y: "127.328",
    width: "138.838",
    height: "6.47431",
    fill: "#15495D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("rect", {
    x: "23.739",
    y: "78.4111",
    width: "21.581",
    height: "3.59684",
    fill: "#9C9C9C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("rect", {
    x: "52.5139",
    y: "82.0079",
    width: "45.3202",
    height: "2.87747",
    transform: "rotate(90 52.5139 82.0079)",
    fill: "#9C9C9C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("rect", {
    x: "41.0039",
    y: "82.0079",
    width: "45.3202",
    height: "2.1581",
    transform: "rotate(90 41.0039 82.0079)",
    fill: "#727272",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("path", {
    d: "M47.4783 78.4112C48.2576 76.063 53.3231 73.3235 56.8301 78.4112H47.4783Z",
    fill: "#005170",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("path", {
    d: "M47.4783 78.4112C48.0777 76.65 50.5356 74.5954 53.2332 78.4112H47.4783Z",
    fill: "#1E7698",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("rect", {
    x: "116.538",
    y: "82.0079",
    width: "45.3202",
    height: "2.87747",
    transform: "rotate(90 116.538 82.0079)",
    fill: "#9C9C9C",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("rect", {
    x: "128.047",
    y: "82.0079",
    width: "45.3202",
    height: "2.1581",
    transform: "rotate(90 128.047 82.0079)",
    fill: "#727272",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("rect", {
    x: "63.3042",
    y: "115.482",
    width: "118.696",
    height: "22.9241",
    rx: "1.01885",
    fill: "#3E3E3E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("rect", {
    x: "71.9644",
    y: "88.9918",
    width: "50.4329",
    height: "25.4712",
    rx: "1.01885",
    fill: "#292929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("rect", {
    x: "123.416",
    y: "88.9918",
    width: "50.4329",
    height: "25.4712",
    rx: "1.01885",
    fill: "#292929",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("rect", {
    x: "63.3042",
    y: "112.425",
    width: "118.696",
    height: "3.05654",
    rx: "1.01885",
    fill: "#5E5E5E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("rect", {
    x: "65.8513",
    y: "97.5238",
    width: "20.3769",
    height: "20.3769",
    rx: "1.01885",
    transform: "rotate(-26.3406 65.8513 97.5238)",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("rect", {
    width: "20.3769",
    height: "20.3769",
    rx: "1.01885",
    transform: "matrix(-0.980183 -0.198092 -0.198092 0.980183 177.6 94.165)",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("rect", {
    x: "63.3042",
    y: "106.822",
    width: "16.3015",
    height: "8.6602",
    rx: "1.01885",
    fill: "#5E5E5E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx("rect", {
    x: "165.698",
    y: "106.822",
    width: "16.3015",
    height: "8.6602",
    rx: "1.01885",
    fill: "#5E5E5E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }), __jsx("rect", {
    x: "64.8325",
    y: "138.406",
    width: "15.7921",
    height: "3.05654",
    fill: "#121212",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }), __jsx("rect", {
    x: "164.679",
    y: "138.406",
    width: "15.7921",
    height: "3.05654",
    fill: "#121212",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), __jsx("path", {
    d: "M109.344 67.6206H122.292L120.854 78.4111H110.782L109.344 67.6206Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }), __jsx("path", {
    d: "M115.066 61.8904C115.342 63.8068 115.085 65.1214 113.079 65.4553C112.777 65.5056 112.483 65.3289 112.386 65.0379C111.728 63.0474 112.704 61.8302 114.269 61.3554C114.641 61.2422 115.011 61.505 115.066 61.8904Z",
    fill: "#2B4F5E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("path", {
    d: "M104.887 60.4284C106.41 59.2332 107.678 58.8009 108.968 60.3729C109.162 60.6098 109.156 60.9528 108.952 61.1813C107.555 62.745 106.013 62.5055 104.821 61.3865C104.537 61.12 104.581 60.6688 104.887 60.4284Z",
    fill: "#2B4F5E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("path", {
    d: "M117.224 61.8904C117.501 63.8068 117.243 65.1214 115.237 65.4553C114.935 65.5056 114.641 65.3289 114.545 65.0379C113.886 63.0474 114.863 61.8302 116.427 61.3554C116.799 61.2422 117.169 61.505 117.224 61.8904Z",
    fill: "#2B4F5E",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("path", {
    d: "M119.382 61.8904C119.659 63.8068 119.401 65.1214 117.395 65.4553C117.093 65.5056 116.799 65.3289 116.703 65.0379C116.044 63.0474 117.021 61.8302 118.585 61.3554C118.957 61.2422 119.327 61.505 119.382 61.8904Z",
    fill: "#244653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("path", {
    d: "M122.26 62.6098C122.536 64.5262 122.279 65.8408 120.273 66.1747C119.971 66.225 119.677 66.0482 119.58 65.7573C118.922 63.7667 119.898 62.5496 121.463 62.0747C121.835 61.9616 122.204 62.2244 122.26 62.6098Z",
    fill: "#244653",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("path", {
    d: "M108.625 64.7432H123.012V67.6206H108.625V64.7432Z",
    fill: "#FFA056",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M119.775 51.0752C120.356 58.6299 118.528 63.2184 117.257 64.7432H116.538C117.665 63.3905 119.985 58.4833 119.415 51.0752H119.775Z",
    fill: "#15495D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M122.652 56.4705C123.012 61.506 121.405 63.2184 120.134 64.7432H119.415C120.542 63.3905 122.652 62.5851 122.652 56.4705Z",
    fill: "#15495D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M113.368 56.8146C113.477 59.2376 113.607 61.9094 114.379 64.743H114.02C112.941 61.8656 112.755 59.2223 112.644 56.7767C112.603 55.8701 112.564 54.9983 112.492 54.1631C112.227 51.0625 109.344 46.3992 108.984 46.0396C109.597 46.6526 112.935 50.9078 113.209 54.1017C113.285 54.9873 113.326 55.8897 113.368 56.8146Z",
    fill: "#15495D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M115.883 63.1542C115.862 63.6794 115.841 64.1987 115.818 64.7432H115.099C115.122 64.1951 115.144 63.6419 115.165 63.1122C115.475 55.3045 116.041 49.4907 119.775 41.004C117.257 49.6364 116.194 55.3461 115.883 63.1542Z",
    fill: "#15495D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }), __jsx("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M110.916 60.2448C111.808 60.8703 112.576 62.3752 112.941 64.7431H112.221C111.866 62.4353 111.57 61.4174 110.783 60.7866C110.446 60.5167 110.063 60.4269 109.703 60.4269C109.344 60.4269 108.825 60.8021 108.624 61.1463C108.22 61.8396 108.109 63.4537 108.624 65.1028C109.137 66.7421 110.063 67.9803 110.783 69.0594C111.502 70.1384 112.332 71.1173 112.332 71.1173C110.05 68.9263 108.797 66.8305 108.242 65.0528C107.689 63.2849 107.819 61.8005 108.359 60.8752C108.63 60.4101 109.017 60.0707 109.484 59.9448C109.958 59.8172 110.459 59.9244 110.916 60.2448Z",
    fill: "#15495D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }), __jsx("path", {
    d: "M120.862 43.2343C118.96 43.477 117.774 43.9722 118.005 45.5302C118.049 45.8247 118.309 46.0345 118.606 46.0389C120.663 46.0695 121.544 45.0822 121.572 43.8174C121.581 43.4448 121.231 43.1871 120.862 43.2343Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }), __jsx("path", {
    d: "M119.423 47.5505C117.522 47.7932 116.335 48.2884 116.566 49.8463C116.61 50.1409 116.87 50.3506 117.168 50.355C119.224 50.3857 120.106 49.3984 120.134 48.1336C120.142 47.7609 119.793 47.5033 119.423 47.5505Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }), __jsx("path", {
    d: "M119.403 51.8689C117.004 52.1724 115.512 52.7963 115.871 54.8732C115.922 55.1684 116.181 55.3801 116.481 55.3885C119.097 55.4621 120.168 54.1324 120.134 52.4569C120.126 52.0811 119.776 51.8217 119.403 51.8689Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }), __jsx("path", {
    d: "M110.097 61.3792C112.021 61.598 113.227 62.1807 113.042 64.2055C113.014 64.5107 112.768 64.7502 112.462 64.7695C110.37 64.9018 109.44 63.6484 109.377 62.0149C109.363 61.6258 109.71 61.3352 110.097 61.3792Z",
    fill: "#3A6474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx("path", {
    d: "M112.145 69.0424C110.212 69.1412 108.926 68.7637 108.778 66.7358C108.756 66.4302 108.959 66.1537 109.258 66.0846C111.3 65.6118 112.423 66.6962 112.752 68.2975C112.83 68.6789 112.534 69.0225 112.145 69.0424Z",
    fill: "#3A6474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("path", {
    d: "M113.498 53.9586C113.835 55.6253 114.372 56.6437 115.796 56.3642C116.09 56.3065 116.287 56.0323 116.27 55.7331C116.169 53.916 115.211 53.1809 114.039 53.2115C113.663 53.2213 113.424 53.5902 113.498 53.9586Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }), __jsx("path", {
    d: "M115.129 43.9779C117.04 44.2887 118.217 44.9286 117.935 46.9421C117.892 47.2456 117.635 47.4731 117.329 47.4777C115.232 47.5095 114.364 46.213 114.38 44.5783C114.383 44.1889 114.745 43.9154 115.129 43.9779Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }), __jsx("path", {
    d: "M109.329 49.1115C110.537 48.7795 111.422 48.8636 111.872 50.0775C111.978 50.3649 111.844 50.6854 111.565 50.8125C110.345 51.3686 109.444 50.8935 108.933 49.9649C108.745 49.6239 108.953 49.2147 109.329 49.1115Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }), __jsx("path", {
    d: "M113.119 49.4437C111.776 50.8383 111.218 52.0561 112.651 53.4981C112.867 53.7155 113.209 53.7436 113.457 53.5636C115.154 52.332 115.072 50.7737 114.079 49.4749C113.843 49.1655 113.389 49.1633 113.119 49.4437Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }), __jsx("path", {
    d: "M110.357 52.667C112.239 53.1222 113.364 53.8496 112.929 55.8359C112.864 56.1353 112.591 56.3425 112.285 56.3239C110.192 56.1963 109.424 54.8375 109.564 53.2087C109.598 52.8208 109.979 52.5755 110.357 52.667Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }), __jsx("path", {
    d: "M111.254 72.295C110.114 71.5581 109.542 70.7894 110.217 69.5553C110.365 69.2864 110.693 69.1742 110.974 69.2967C112.309 69.8786 112.56 70.9504 112.16 72.0265C112.024 72.3915 111.581 72.5063 111.254 72.295Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), __jsx("path", {
    d: "M107.399 69.0495C106.603 67.2844 106.487 65.9498 108.322 65.0739C108.599 64.9419 108.93 65.0304 109.103 65.2833C110.287 67.0138 109.685 68.4537 108.314 69.3429C107.987 69.5548 107.559 69.4044 107.399 69.0495Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }), __jsx("path", {
    d: "M113.838 55.918C112.495 57.3126 111.937 58.5303 113.37 59.9724C113.586 60.1897 113.928 60.2178 114.176 60.0378C115.873 58.8063 115.791 57.2479 114.798 55.9491C114.562 55.6398 114.109 55.6375 113.838 55.918Z",
    fill: "#4B7B8D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }), __jsx("path", {
    d: "M111.077 59.1413C112.959 59.5964 114.084 60.3239 113.649 62.3101C113.583 62.6095 113.31 62.8168 113.004 62.7981C110.911 62.6705 110.144 61.3117 110.284 59.683C110.317 59.2951 110.698 59.0498 111.077 59.1413Z",
    fill: "#4B7B8D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }), __jsx("path", {
    d: "M105.352 65.7202C105.005 63.8152 105.214 62.492 107.206 62.0845C107.507 62.0231 107.807 62.1889 107.914 62.4761C108.646 64.441 107.714 65.6933 106.169 66.2255C105.8 66.3523 105.422 66.1032 105.352 65.7202Z",
    fill: "#4B7B8D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }), __jsx("path", {
    d: "M106.023 58.4091C106.79 60.1871 107.697 61.173 109.581 60.4088C109.865 60.2937 110.023 59.9893 109.953 59.6909C109.474 57.6497 108.005 57.1229 106.423 57.536C106.046 57.6344 105.869 58.0515 106.023 58.4091Z",
    fill: "#4B7B8D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }), __jsx("path", {
    d: "M117.377 57.261C118.93 58.4175 119.68 59.5277 118.501 61.1845C118.324 61.4342 117.991 61.5178 117.717 61.3807C115.841 60.443 115.668 58.8921 116.435 57.4486C116.618 57.1048 117.065 57.0285 117.377 57.261Z",
    fill: "#4B7B8D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }), __jsx("path", {
    d: "M114.5 60.1385C116.053 61.2949 116.802 62.4051 115.624 64.0619C115.446 64.3117 115.113 64.3952 114.839 64.2582C112.964 63.3204 112.791 61.7695 113.558 60.326C113.741 59.9822 114.187 59.9059 114.5 60.1385Z",
    fill: "#3A6474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("path", {
    d: "M122.959 55.4266C122.784 57.3549 122.229 58.5741 120.201 58.4343C119.895 58.4132 119.65 58.1732 119.624 57.8678C119.444 55.7788 120.676 54.8211 122.308 54.7214C122.696 54.6977 122.995 55.0389 122.959 55.4266Z",
    fill: "#3A6474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), __jsx("path", {
    d: "M120.476 61.5589C118.542 61.6552 117.301 62.1602 117.358 64.1927C117.367 64.499 117.596 64.7536 117.9 64.7923C119.98 65.0571 120.988 63.8652 121.154 62.2389C121.193 61.8516 120.865 61.5395 120.476 61.5589Z",
    fill: "#4B7B8D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }), __jsx("path", {
    d: "M109.238 45.7758C110.313 46.1695 110.928 46.7077 110.64 47.8501C110.565 48.1473 110.27 48.3336 109.969 48.2742C108.769 48.0371 108.336 47.2108 108.428 46.2455C108.465 45.8579 108.872 45.642 109.238 45.7758Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), __jsx("path", {
    d: "M109.03 50.9868C110.682 50.5011 111.878 50.5703 112.45 52.2774C112.547 52.568 112.415 52.8867 112.14 53.0222C110.473 53.8439 109.265 53.156 108.622 51.8509C108.45 51.5016 108.657 51.0966 109.03 50.9868Z",
    fill: "#77B5CD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }), __jsx("path", {
    d: "M110.094 55.507C112.007 55.8049 113.189 56.4368 112.92 58.4522C112.879 58.756 112.624 58.9852 112.317 58.9919C110.221 59.0378 109.344 57.7471 109.349 56.1124C109.35 55.7231 109.71 55.4471 110.094 55.507Z",
    fill: "#77B5CD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }), __jsx("path", {
    d: "M113.121 47.4316C113.43 48.763 113.306 49.7187 111.953 50.138C111.661 50.2287 111.347 50.0808 111.23 49.7975C110.67 48.4422 111.24 47.4918 112.283 46.9944C112.634 46.8268 113.032 47.0523 113.121 47.4316Z",
    fill: "#77B5CD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), __jsx("path", {
    d: "M109.078 64.4312C107.961 63.6437 107.417 62.848 108.148 61.6345C108.306 61.372 108.639 61.2733 108.915 61.4069C110.234 62.0461 110.442 63.1343 109.995 64.1998C109.844 64.5588 109.397 64.6555 109.078 64.4312Z",
    fill: "#77B5CD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }), __jsx("path", {
    d: "M114.895 48.0781C116.657 48.8811 117.624 49.8084 116.821 51.6764C116.7 51.958 116.392 52.1098 116.095 52.0336C114.065 51.5122 113.568 50.0327 114.014 48.4599C114.12 48.0853 114.541 47.9166 114.895 48.0781Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }), __jsx("path", {
    d: "M119.479 40.5137C120.338 41.6138 120.634 42.5507 119.557 43.5171C119.329 43.7217 118.982 43.7193 118.756 43.5116C117.655 42.4969 117.778 41.3731 118.534 40.4679C118.784 40.1691 119.239 40.2067 119.479 40.5137Z",
    fill: "#5892A8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }), __jsx("path", {
    d: "M49.996 61.8657L48.917 50.3558H60.7786L61.8656 61.8657H49.996Z",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }), __jsx("path", {
    d: "M45.2214 48.1977L44.9604 45.3202H79.85L79.9959 48.1977H45.2214Z",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }), __jsx("path", {
    d: "M62.2973 55.3914L61.8657 50.3558H67.7645L68.34 55.3914H62.2973Z",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }), __jsx("path", {
    d: "M63.0166 61.8657L62.585 56.8301H68.4838L69.0593 61.8657H63.0166Z",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }), __jsx("path", {
    d: "M69.4909 55.3914L69.0593 50.3558H74.9581L75.5336 55.3914H69.4909Z",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }), __jsx("path", {
    d: "M70.2102 61.8657L69.7786 56.8301H75.6774L76.2529 61.8657H70.2102Z",
    fill: "#C4C4C4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }), __jsx("rect", {
    width: "0.716798",
    height: "22.9375",
    transform: "matrix(0.709642 -0.704563 0.709642 0.704563 84.2534 23.5248)",
    fill: "#1E2C49",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }), __jsx("rect", {
    width: "0.716798",
    height: "22.9375",
    transform: "matrix(0.709642 -0.704563 0.709642 0.704563 82.7273 25.0399)",
    fill: "#1E2C49",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), __jsx("rect", {
    width: "0.719024",
    height: "35.7282",
    transform: "matrix(0.966388 0.257089 -0.260559 0.965458 102.108 43.7322)",
    fill: "#1E2C49",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("rect", {
    width: "0.719024",
    height: "35.7282",
    transform: "matrix(0.966388 0.257089 -0.260559 0.965458 99.9497 43.7322)",
    fill: "#1E2C49",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "101.431",
    cy: "41.7234",
    r: "2.87747",
    fill: "#535A61",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), __jsx("circle", {
    cx: "101.431",
    cy: "41.7234",
    r: "1.43874",
    fill: "#1E2C49",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }), __jsx("path", {
    d: "M82.3189 21.4972L79.4902 25.8973L82.008 27.6957L84.8747 23.2363C85.0822 22.9136 84.9999 22.4849 84.6878 22.262L83.3421 21.3008C83.0076 21.0618 82.5412 21.1513 82.3189 21.4972Z",
    fill: "#535A61",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), __jsx("path", {
    d: "M80.9289 26.2569C77.2022 24.0208 73.3756 26.6166 71.5771 29.8538C74.4546 31.6522 78.4111 34.17 82.008 36.3281C83.087 34.17 84.5258 28.4151 80.9289 26.2569Z",
    fill: "#1E7698",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }), __jsx("path", {
    d: "M92.0789 76.9725C87.7627 76.9725 86.324 77.6919 86.324 78.4113L97.8339 78.4112C97.8339 77.6919 96.3951 76.9725 92.0789 76.9725Z",
    fill: "#1E7698",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }), __jsx("g", {
    style: {
      mixBlendMode: 'hard-light'
    },
    opacity: "0.4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("path", {
    d: "M75.1738 78.4111L82.0078 36.3281L71.577 29.8538L26.2568 78.4111H75.1738Z",
    fill: "#FFE5A4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OpenPositionsIcon);

/***/ }),

/***/ "./assets/images/appStore.png":
/*!************************************!*\
  !*** ./assets/images/appStore.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/images/games/CookieCrash.jpg":
/*!*********************************************!*\
  !*** ./assets/images/games/CookieCrash.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/CookieCrash-1b49a894f93e604986c47399fa8972b2.jpg";

/***/ }),

/***/ "./assets/images/games/gameIcon.png":
/*!******************************************!*\
  !*** ./assets/images/games/gameIcon.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/images/gamesImage.jpg":
/*!**************************************!*\
  !*** ./assets/images/gamesImage.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/gamesImage-dc4a70163575921b8b9e8c3da6cc5c30.jpg";

/***/ }),

/***/ "./assets/images/googlePlay.png":
/*!**************************************!*\
  !*** ./assets/images/googlePlay.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./assets/images/placeholder.jpg":
/*!***************************************!*\
  !*** ./assets/images/placeholder.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAGAAjoDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+iCgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP/Z"

/***/ }),

/***/ "./assets/images/seoImg.jpg":
/*!**********************************!*\
  !*** ./assets/images/seoImg.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/seoImg-b698363503df36f005356fa7b52bc1ac.jpg";

/***/ }),

/***/ "./assets/sass/index.scss":
/*!********************************!*\
  !*** ./assets/sass/index.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Breadcrumb.js":
/*!**********************************!*\
  !*** ./components/Breadcrumb.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\Breadcrumb.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Breadcrumb = ({
  items = []
}) => {
  return __jsx("nav", {
    className: "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("ul", {
    className: "breadcrumb-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, items.map((item, index, array) => {
    return __jsx("li", {
      className: "breadcrumb-item breadcrumb-item--active",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: undefined
    }, index === array.length - 1 ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: undefined
    }, __jsx("a", {
      className: "breadcrumb-link breadcrumb-link--active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, item.name)) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.slug,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: undefined
    }, __jsx("a", {
      className: "breadcrumb-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: undefined
    }, item.name)));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Breadcrumb);

/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LinkSmoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LinkSmoothScroll */ "./components/LinkSmoothScroll.js");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.scss */ "./components/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo/Logo */ "./components/Logo/Logo.js");
/* harmony import */ var _SocialBlock_Socials_Facebook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SocialBlock/Socials/Facebook */ "./components/SocialBlock/Socials/Facebook.js");
/* harmony import */ var _SocialBlock_Socials_Twitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SocialBlock/Socials/Twitter */ "./components/SocialBlock/Socials/Twitter.js");
/* harmony import */ var _SocialBlock_Socials_Google__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../SocialBlock/Socials/Google */ "./components/SocialBlock/Socials/Google.js");
/* harmony import */ var _SocialBlock_Socials_Linkedin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SocialBlock/Socials/Linkedin */ "./components/SocialBlock/Socials/Linkedin.js");
/* harmony import */ var _HotPanel_HotPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../HotPanel/HotPanel */ "./components/HotPanel/HotPanel.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\Footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const Footer = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_HotPanel_HotPanel__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("section", {
    className: "joinUs",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-auto mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("h2", {
    className: "joinUs-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Ready to join us?"), __jsx("div", {
    className: "joinUs-separator",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), __jsx(_LinkSmoothScroll__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/career/#job-openings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("a", {
    className: "btn btn--secondaryInverse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, "see open positions")))))), __jsx("footer", {
    className: "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("div", {
    className: "footer-logoWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "footer-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))), __jsx("nav", {
    className: "col-lg-8 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx("div", {
    className: "row footerMenu-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-6 col-md-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, __jsx("ul", {
    className: "menu menu footerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu-item footerMenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/advertisers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, "Advertisers"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/advertisers/#why-softgames",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Why SOFTGAMES?"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/advertisers/#brands",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, "Brands"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/advertisers/#join-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, "Join us to tell your story")))), __jsx("ul", {
    className: "menu footerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu-item footerMenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/developers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, "Developers"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/developers/#global-reach",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, "Global Reach"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/developers/#better-monetization",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Better Monetization"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/developers/#publish-with-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, "Publish with us"))))), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }, __jsx("ul", {
    className: "menu footerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu-item footerMenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/publishers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  }, "Publishers"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/publishers/#games-affiliate",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: undefined
  }, "Games Affiliate Program"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/publishers/#why-softgames",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, "Why SOFTGAMES?"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/publishers/#our-partners",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: undefined
  }, "Our partners"))))), __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx("ul", {
    className: "menu footerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu-item footerMenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/career",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "Career"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/career/#job-openings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, "Job Openings"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/career/#culture-values",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: undefined
  }, "Culture & Values"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/career/#application-process",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, "Application Process"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/career/#benefits",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, "Benefits"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/career/#global-offices",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: undefined
  }, "Global Offices"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/career/#FAQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, "FAQ"))))))), __jsx("div", {
    className: "col-6 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, __jsx("ul", {
    className: "menu footerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu-item footerMenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: undefined
  }, "Company"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/company/#about-us",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, "About"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/company/#our-story",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, "Our Story"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/company/#management",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, "Management"))), __jsx("li", {
    className: "menu-item footerMenu-subitem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/company/#press-room",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-sublink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, "Press Room")))), __jsx("ul", {
    className: "menu footerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu-item footerMenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/games",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, "Games"))), __jsx("li", {
    className: "menu-item footerMenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/news",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, __jsx("a", {
    className: "footerMenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: undefined
  }, "News")))))))), __jsx("div", {
    className: "row justify-content-between footerBottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-8 col-lg-6 order-1 order-md-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: undefined
  }, __jsx("p", {
    className: "footer-copyright",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: undefined
  }, "\xA9 ", new Date().getFullYear(), " SOFTGAMES"), __jsx("ul", {
    className: "footerBottom-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/imprint/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }, "Imprint"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/terms-of-use",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  }, "Terms of Use"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/privacy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: undefined
  }, "Privacy"))), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/cookie-information",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: undefined
  }, "Cookie Information"))))), __jsx("div", {
    className: "col-md-4 col-lg-3 col-xl-2 order-0 order-md-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  }, __jsx("ul", {
    className: "footer-socials",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: undefined
  }, __jsx(_SocialBlock_Socials_Facebook__WEBPACK_IMPORTED_MODULE_5__["default"], {
    link: "https://www.google.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: undefined
  }, __jsx(_SocialBlock_Socials_Twitter__WEBPACK_IMPORTED_MODULE_6__["default"], {
    link: "https://www.google.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: undefined
  }, __jsx(_SocialBlock_Socials_Google__WEBPACK_IMPORTED_MODULE_7__["default"], {
    link: "https://www.google.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  })), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, __jsx(_SocialBlock_Socials_Linkedin__WEBPACK_IMPORTED_MODULE_8__["default"], {
    link: "https://www.google.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/Footer.scss":
/*!***************************************!*\
  !*** ./components/Footer/Footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/GameCard/GameCard.scss":
/*!*******************************************!*\
  !*** ./components/GameCard/GameCard.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/GameCard/GameCard2.js":
/*!******************************************!*\
  !*** ./components/GameCard/GameCard2.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GameCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameCard.scss */ "./components/GameCard/GameCard.scss");
/* harmony import */ var _GameCard_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_GameCard_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_JoyStick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/JoyStick */ "./assets/icons/JoyStick.js");
/* harmony import */ var _assets_icons_GooglePlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/GooglePlay */ "./assets/icons/GooglePlay.js");
/* harmony import */ var _assets_icons_AppStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/icons/AppStore */ "./assets/icons/AppStore.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\GameCard\\GameCard2.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GameCard = ({
  link,
  googlePlayLink,
  appStoreLink,
  img,
  title,
  icon
}) => {
  return __jsx("div", {
    className: "gameCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "gameCard-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    src: img,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "gameCard-overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    href: link,
    className: "btn btn--primaryInverse btn--withIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx(_assets_icons_JoyStick__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), "click to play"), __jsx("div", {
    className: "gameCard-platforms",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    href: googlePlayLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(_assets_icons_GooglePlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("a", {
    href: appStoreLink,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_assets_icons_AppStore__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  })))), __jsx("div", {
    className: "gameCard-meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("img", {
    className: "gameCard-icon",
    src: icon,
    alt: title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("h4", {
    className: "gameCard-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, title))));
};

/* harmony default export */ __webpack_exports__["default"] = (GameCard);

/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../NavLink */ "./components/NavLink.js");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.scss */ "./components/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Logo_Logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Logo/Logo */ "./components/Logo/Logo.js");
/* harmony import */ var _assets_icons_ArrowDownSmall__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/ArrowDownSmall */ "./assets/icons/ArrowDownSmall.js");
/* harmony import */ var _assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/sass/index.scss */ "./assets/sass/index.scss");
/* harmony import */ var _assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_sass_index_scss__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\Header\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Header = props => {
  const {
    0: isMenuOpen,
    1: setIsMenuOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const burgerClasses = ['header-burger', isMenuOpen ? 'open' : null];
  const menuClasses = ['header-nav', isMenuOpen ? 'open' : null];
  const overlayClasses = ['overlay', isMenuOpen ? 'open' : null];

  const onBurgerClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onOverlayClick = () => {
    setIsMenuOpen(false);
  };

  return __jsx("header", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx(_Logo_Logo__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "header-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("div", {
    className: burgerClasses.join(' '),
    onClick: onBurgerClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  })), __jsx("nav", {
    className: menuClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("ul", {
    className: "menu header-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, __jsx("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeClassName: "selected",
    href: "/games",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, "Games"))), __jsx("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeClassName: "selected",
    href: "/company",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }, __jsx("a", {
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, "Company"))), __jsx("li", {
    className: "menu-item menu-dropdown d-none d-lg-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("span", {
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Partner up ", __jsx(_assets_icons_ArrowDownSmall__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  })), __jsx("ul", {
    className: "submenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, __jsx("li", {
    className: "submenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/advertisers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, __jsx("a", {
    className: "submenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, "Advertisers"))), __jsx("li", {
    className: "submenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/publishers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("a", {
    className: "submenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, "Publishers"))), __jsx("li", {
    className: "submenu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/developers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("a", {
    className: "submenu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, "Developers"))))), __jsx("li", {
    className: "menu-item d-lg-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/advertisers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, __jsx("a", {
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, "Advertisers"))), __jsx("li", {
    className: "menu-item d-lg-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/publishers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }, __jsx("a", {
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, "Publishers"))), __jsx("li", {
    className: "menu-item d-lg-none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/developers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("a", {
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, "Developers"))), __jsx("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: undefined
  }, __jsx(_NavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeClassName: "selected",
    href: "/career",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("a", {
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: undefined
  }, "Career"))), __jsx("li", {
    className: "menu-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("a", {
    href: "https://softgames.ein-des-ein.com",
    className: "menu-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, "News")))), __jsx("div", {
    className: overlayClasses.join(' '),
    onClick: onOverlayClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Header/Header.scss":
/*!***************************************!*\
  !*** ./components/Header/Header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/HotPanel/HotPanel.js":
/*!*****************************************!*\
  !*** ./components/HotPanel/HotPanel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ModalContext */ "./components/ModalContext.js");
/* harmony import */ var _HotPanel_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HotPanel.scss */ "./components/HotPanel/HotPanel.scss");
/* harmony import */ var _HotPanel_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HotPanel_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/apiEndpoints */ "./utils/apiEndpoints.js");
/* harmony import */ var _assets_icons_OpenPositionIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/icons/OpenPositionIcon */ "./assets/icons/OpenPositionIcon.js");
/* harmony import */ var _LinkSmoothScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../LinkSmoothScroll */ "./components/LinkSmoothScroll.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\HotPanel\\HotPanel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const HotPanel = props => {
  const {
    0: positions,
    1: setPositions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    openModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ModalContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const CancelToken = axios__WEBPACK_IMPORTED_MODULE_3___default.a.CancelToken;
    const source = CancelToken.source();

    const loadData = () => {
      try {
        axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_utils_apiEndpoints__WEBPACK_IMPORTED_MODULE_4__["default"].positions, {
          cancelToken: source.token
        }).then(({
          data: {
            offers: positions
          }
        }) => {
          setPositions(positions);
        });
      } catch (error) {
        if (axios__WEBPACK_IMPORTED_MODULE_3___default.a.isCancel(error)) {
          console.log("cancelled");
        } else {
          throw error;
        }
      }
    };

    loadData();
    return () => {
      source.cancel();
    };
  }, []);
  return __jsx("div", {
    className: "hotPanel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx("button", {
    className: "hotPanel-positions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, positions.length ? __jsx("span", {
    className: "hotPanel-positionsCounter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, positions.length) : null, "open positions", __jsx(_LinkSmoothScroll__WEBPACK_IMPORTED_MODULE_6__["default"], {
    href: "/career/#job-openings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx("a", {
    className: "hotPanel-positionsBadge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("div", {
    className: "hotPanel-positionsInfo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, positions.length ? __jsx("h4", {
    className: "hotPanel-positionsCounter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, positions.length) : null, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: undefined
  }, "open positions")), __jsx(_assets_icons_OpenPositionIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  })))), __jsx("button", {
    className: "hotPanel-contactUs",
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, "contact us"));
};

/* harmony default export */ __webpack_exports__["default"] = (HotPanel);

/***/ }),

/***/ "./components/HotPanel/HotPanel.scss":
/*!*******************************************!*\
  !*** ./components/HotPanel/HotPanel.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ "./components/Footer/Footer.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\Layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = ({
  children
}) => {
  return __jsx("div", {
    className: "app",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("main", {
    id: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, children), __jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LinkSmoothScroll.js":
/*!****************************************!*\
  !*** ./components/LinkSmoothScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LinkSmoothScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/smoothScroll */ "./utils/smoothScroll.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\LinkSmoothScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // this HOC is taken from https://github.com/zeit/next.js/blob/master/lib/link.js and modified

class LinkSmoothScroll extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.linkClicked = this.linkClicked.bind(this);
  }

  linkClicked(e) {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(this.props.href).then(() => {
      return Object(_utils_smoothScroll__WEBPACK_IMPORTED_MODULE_2__["default"])(this.props.href);
    }).then(() => {
      this.props.done && this.props.done();
    }).catch(err => {
      this.props.onError && this.props.onError(err);
      console.error(err);
    });
  }

  render() {
    let {
      children
    } = this.props;

    if (typeof children === 'string') {
      children = __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, children);
    }

    const child = react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(children);
    const props = {
      onClick: this.linkClicked
    };

    if (child.type === 'a' && !('href' in child.props)) {
      props.href = this.props.href;
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, props);
  }

}

/***/ }),

/***/ "./components/Logo/Logo.js":
/*!*********************************!*\
  !*** ./components/Logo/Logo.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo.scss */ "./components/Logo/Logo.scss");
/* harmony import */ var _Logo_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Logo_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\Logo\\Logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Logo = ({
  className
}) => {
  const classes = ["logo", className];
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    className: classes.join(" "),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("svg", {
    className: "logo-img",
    width: "231",
    height: "42",
    viewBox: "0 0 231 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("path", {
    className: "logo-bg",
    d: "M231 0H0V42H231V0Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M10.3645 9.09644C12.2235 7.5125 14.7956 7.23148 17.1384 7.20593C19.2521 7.25703 21.5694 7.58914 23.1229 9.19863C24.6508 10.8081 24.88 13.1585 24.7527 15.2789C22.9446 15.2789 21.162 15.2789 19.3539 15.2789C19.2775 14.0271 19.2775 12.4943 18.157 11.6767C16.8328 10.8081 14.6173 11.2424 14.0316 12.8264C13.4459 14.2059 14.0316 15.8154 15.1521 16.7096C17.5204 18.6767 20.6527 19.5198 22.8173 21.768C24.2943 23.1731 25.0583 25.2424 24.9819 27.2607C24.9819 29.4322 24.3198 31.8081 22.5117 33.1366C20.398 34.695 17.6223 34.7972 15.1011 34.7461C12.9366 34.7205 10.5682 34.0818 9.19308 32.268C7.89433 30.5052 7.79247 28.1804 7.89433 26.0599C9.72786 26.0599 11.5614 26.0599 13.4204 26.0599C13.4968 27.1585 13.4459 28.3337 13.8788 29.3556C14.5918 30.8373 16.6291 31.0928 18.0042 30.4286C19.7359 29.4067 19.7359 26.6986 18.2589 25.4213C15.7887 23.0964 12.2999 22.1512 10.0335 19.5709C8.83656 18.268 8.14899 16.5052 8.17445 14.7424C8.17445 12.6986 8.7347 10.476 10.3645 9.09644Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M101.863 10.2446C103.238 8.30301 105.632 7.40885 107.949 7.28111C110.7 7.02563 113.832 7.48549 115.818 9.60593C117.423 11.241 117.856 13.6424 117.779 15.8395C115.946 15.8651 114.087 15.8395 112.228 15.8395C112.151 14.6388 112.202 13.3359 111.464 12.314C110.725 11.2921 109.325 11.0366 108.179 11.2921C107.084 11.5475 106.396 12.5694 106.09 13.5913C105.479 15.6607 105.556 17.8322 105.505 19.9526C105.53 22.5329 105.428 25.1643 105.912 27.6935C106.116 28.8432 106.574 30.1716 107.771 30.6059C109.223 31.0913 110.776 30.7848 112.202 30.3505C112.202 28.3578 112.202 26.3906 112.202 24.4234C111.184 24.4234 110.19 24.4234 109.172 24.4234C109.172 23.0694 109.172 21.6899 109.172 20.3359C112.049 20.3359 114.902 20.3359 117.779 20.3359C117.779 24.8578 117.779 29.3797 117.779 33.876C114.087 34.5147 110.318 35.0767 106.6 34.4636C104.817 34.1826 103.009 33.4672 101.889 32.011C100.895 30.7337 100.488 29.1497 100.233 27.5658C99.7749 24.4745 99.8767 21.3578 99.9022 18.2665C99.9531 15.5329 100.233 12.5694 101.863 10.2446Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M208.386 9.17159C210.22 7.5621 212.766 7.28108 215.109 7.22998C217.274 7.28108 219.693 7.58764 221.247 9.27378C222.775 10.8577 222.953 13.2081 222.876 15.303C221.068 15.303 219.286 15.303 217.478 15.303C217.376 14.1533 217.376 12.8249 216.561 11.9307C215.721 11.0876 214.32 11.1132 213.301 11.573C212.257 12.0329 211.85 13.2847 211.952 14.3577C211.977 15.4563 212.741 16.376 213.581 17.0147C215.16 18.2154 217.019 18.9818 218.7 20.0548C220.202 21.0001 221.629 22.2008 222.393 23.8358C223.284 25.7008 223.233 27.8723 222.749 29.8139C222.316 31.5511 221.119 33.084 219.515 33.8249C217.35 34.8212 214.906 34.8212 212.563 34.7446C210.602 34.6424 208.539 33.9526 207.317 32.3176C205.967 30.5548 205.865 28.2044 205.942 26.084C207.801 26.084 209.66 26.084 211.519 26.084C211.595 27.4891 211.442 29.1752 212.588 30.2227C213.76 31.0402 215.568 31.0657 216.637 30.0438C217.58 28.9709 217.656 27.2081 216.79 26.0329C216.052 25.011 214.957 24.3468 213.887 23.6825C212.053 22.584 210.118 21.5876 208.565 20.1059C207.164 18.7774 206.247 16.938 206.247 14.9964C206.196 12.876 206.757 10.6022 208.386 9.17159Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M57.4507 7.74097C62.0346 7.74097 66.6439 7.74097 71.2532 7.74097C71.2532 9.12053 71.2532 10.4745 71.2532 11.8541C68.4774 11.8797 65.7271 11.8541 62.9768 11.8797C62.9768 14.1023 62.9768 16.3249 62.9768 18.5475C65.5998 18.5731 68.2227 18.5475 70.8712 18.5475C70.8712 19.9015 70.8712 21.2556 70.8712 22.6096C68.2482 22.6096 65.6252 22.6096 62.9768 22.6096C62.9768 26.4928 62.9768 30.376 62.9768 34.2592C61.1433 34.2592 59.3097 34.2592 57.4762 34.2592C57.4507 25.4453 57.4762 16.6059 57.4507 7.74097Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M75.888 7.74097C81.8724 7.71542 87.8314 7.74097 93.8159 7.74097C93.8159 9.22272 93.8159 10.6789 93.8159 12.1607C91.7532 12.1607 89.6904 12.1607 87.6277 12.1607C87.6277 19.5439 87.6277 26.9016 87.6277 34.2848C85.7942 34.2848 83.9606 34.2848 82.1271 34.2848C82.1271 26.9016 82.1271 19.5439 82.1271 12.1607C80.0389 12.1607 77.9762 12.1607 75.888 12.1607C75.888 10.6789 75.888 9.22272 75.888 7.74097Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M150.681 7.74097C153.66 7.74097 156.64 7.74097 159.619 7.74097C161.02 13.7446 162.37 19.7483 163.796 25.7519C165.349 19.7738 166.75 13.7446 168.227 7.74097C171.104 7.74097 173.982 7.74097 176.885 7.74097C176.885 16.5804 176.885 25.4198 176.885 34.2848C175.103 34.2848 173.32 34.2848 171.512 34.2848C171.512 31.2702 171.385 28.2556 171.512 25.241C171.588 22.9672 171.436 20.668 171.486 18.3943C171.588 16.887 171.486 15.3797 171.385 13.8724C169.755 20.6935 167.998 27.4891 166.291 34.2848C164.509 34.2848 162.726 34.2848 160.969 34.2848C159.365 27.5147 157.735 20.7446 156.156 13.9745C155.901 16.4271 156.08 18.9052 156.029 21.3578C156.029 25.6497 156.029 29.9672 156.029 34.2848C154.246 34.2848 152.438 34.2848 150.655 34.2848C150.681 25.4453 150.681 16.5804 150.681 7.74097Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M184.627 7.74097C189.465 7.74097 194.278 7.74097 199.091 7.74097C199.091 9.12053 199.091 10.5001 199.091 11.8541C196.112 11.8541 193.132 11.8541 190.178 11.8541C190.178 14.0001 190.178 16.1461 190.178 18.2921C192.929 18.2921 195.653 18.2921 198.404 18.2921C198.404 19.6461 198.404 21.0001 198.404 22.3541C195.653 22.3541 192.929 22.3541 190.178 22.3541C190.178 24.9344 190.178 27.5402 190.178 30.1205C193.234 30.1205 196.316 30.1205 199.371 30.1205C199.371 31.5001 199.371 32.8797 199.371 34.2592C194.457 34.2592 189.516 34.2592 184.601 34.2592C184.601 25.4453 184.601 16.5804 184.627 7.74097Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M50.2439 19.2884C50.2184 16.6314 50.1675 13.8723 49.0724 11.3942C48.3594 9.73363 46.9079 8.40516 45.2017 7.81757C43.088 7.10224 40.7961 7.07669 38.606 7.40881C37.1545 7.66428 35.7029 8.20078 34.6334 9.24823C33.2837 10.5001 32.6725 12.2884 32.3414 14.0511C31.8067 17.0657 32.0104 20.1059 31.9849 23.146C32.0359 25.9563 32.1377 28.9709 33.6147 31.449C34.8626 33.5183 37.2818 34.5402 39.6247 34.6679C42.0694 34.8212 44.7178 34.7446 46.806 33.3139C48.4103 32.2409 49.3016 30.4271 49.7091 28.5876C50.3967 25.573 50.1929 22.4052 50.2439 19.2884ZM44.4631 25.7008C44.3104 27.0548 44.234 28.5365 43.419 29.7117C42.6296 30.8614 40.9998 31.0657 39.8029 30.5292C38.8861 30.0949 38.3768 29.0986 38.1476 28.1278C37.6129 25.8285 37.7147 23.4526 37.6638 21.1278C37.7147 18.7519 37.6129 16.376 38.1222 14.0511C38.3514 12.9782 38.8861 11.8541 39.9557 11.4198C41.1017 11.011 42.5532 11.1643 43.3427 12.1862C44.2085 13.2847 44.3103 14.7665 44.4886 16.0949C44.6414 19.2884 44.6159 22.5073 44.4631 25.7008Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("path", {
    className: "logo-letter",
    d: "M138.126 7.76651C135.682 7.74097 133.211 7.76651 130.767 7.74097C128.322 16.5804 125.877 25.4198 123.433 34.2592C125.266 34.2848 127.1 34.2592 128.933 34.2592C129.417 32.2921 129.952 30.3249 130.436 28.3578C132.957 28.3578 135.452 28.3578 137.973 28.3578C138.457 30.3249 138.941 32.2921 139.425 34.2592C141.386 34.2592 143.347 34.2592 145.308 34.2592C142.914 25.4453 140.495 16.6059 138.126 7.76651ZM131.556 24.2702C132.346 20.4636 133.237 16.657 134.077 12.876C135.045 16.657 135.885 20.4636 136.777 24.2702C135.019 24.2702 133.288 24.2702 131.556 24.2702Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Logo/Logo.scss":
/*!***********************************!*\
  !*** ./components/Logo/Logo.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/ModalContext.js":
/*!************************************!*\
  !*** ./components/ModalContext.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ModalContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (ModalContext);

/***/ }),

/***/ "./components/NavLink.js":
/*!*******************************!*\
  !*** ./components/NavLink.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\NavLink.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




const NavLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname.includes(props.href) && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(NavLink));

/***/ }),

/***/ "./components/SeoBlock.js":
/*!********************************!*\
  !*** ./components/SeoBlock.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ModalContext */ "./components/ModalContext.js");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-html-parser */ "react-html-parser");
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\SeoBlock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const SeoBlock = ({
  heading,
  image,
  content,
  withButton
}) => {
  const {
    openModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_ModalContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return __jsx("section", {
    className: "simpleBlock seo withIllustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, heading ? __jsx("h2", {
    className: "simpleBlock-title seo-title withGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(heading)) : null, content ? __jsx("div", {
    className: "simpleBlock-description seo-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react_html_parser__WEBPACK_IMPORTED_MODULE_2___default()(content)) : null, withButton ? __jsx("button", {
    className: "btn btn--primary contactUsBtn",
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Contact Us") : null), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, image ? __jsx("div", {
    className: "seo-img withGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("img", {
    src: image,
    alt: "Softgames",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })) : null))));
};

/* harmony default export */ __webpack_exports__["default"] = (SeoBlock);

/***/ }),

/***/ "./components/SocialBlock/Socials/Facebook.js":
/*!****************************************************!*\
  !*** ./components/SocialBlock/Socials/Facebook.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\SocialBlock\\Socials\\Facebook.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Facebook = ({
  className,
  link
}) => {
  return __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("g", {
    clipPath: "url(#clip0)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("rect", {
    x: "0.375",
    y: "0.7052",
    width: "40.8828",
    height: "40.8828",
    rx: "20.4414",
    fill: "#4267B2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("path", {
    d: "M22.1813 34.7741V22.3417H26.3544L26.9791 17.4966H22.1813V14.4031C22.1813 13.0004 22.5709 12.0443 24.5826 12.0443L27.1483 12.0431V7.70975C26.7043 7.65092 25.1814 7.51904 23.4096 7.51904C19.7105 7.51904 17.178 9.77688 17.178 13.9235V17.4967H12.9941V22.3418H17.1779V34.7742L22.1813 34.7741Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })), __jsx("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("clipPath", {
    id: "clip0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("rect", {
    width: "40.8828",
    height: "40.8828",
    fill: "white",
    transform: "translate(0.375 0.7052)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Facebook);

/***/ }),

/***/ "./components/SocialBlock/Socials/Google.js":
/*!**************************************************!*\
  !*** ./components/SocialBlock/Socials/Google.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\SocialBlock\\Socials\\Google.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Google = ({
  className,
  link
}) => {
  return __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("rect", {
    x: "0.98877",
    y: "0.7052",
    width: "40.8828",
    height: "40.8828",
    rx: "20.4414",
    fill: "#EA4335",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("path", {
    d: "M31.1838 17.2046C32.0537 17.2046 32.9232 17.2046 33.797 17.2046C33.8018 18.0789 33.8102 18.9575 33.8149 19.8314C34.6888 19.8401 35.5675 19.8445 36.4417 19.8489C36.4417 20.7232 36.4417 21.5927 36.4417 22.467C35.5679 22.4713 34.6892 22.4757 33.8149 22.4801C33.8062 23.3587 33.8018 24.2326 33.797 25.1113C32.9232 25.1069 32.0485 25.1113 31.179 25.1113C31.1706 24.2326 31.1706 23.3587 31.1615 22.4845C30.2876 22.4753 29.4089 22.4713 28.5347 22.4666C28.5347 21.5923 28.5347 20.7228 28.5347 19.8485C29.4089 19.8441 30.2832 19.8398 31.1615 19.831C31.1659 18.9575 31.1746 18.0789 31.1838 17.2046Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("path", {
    d: "M7.48905 21.1583C7.30886 16.4142 11.4643 12.0301 16.2131 11.9732C18.6335 11.7668 20.9882 12.7067 22.8199 14.2397C22.0686 15.0658 21.3041 15.8824 20.4875 16.6469C18.8749 15.6672 16.9335 14.9206 15.0489 15.5837C12.0092 16.4492 10.1684 20.0382 11.2932 23.0119C12.2248 26.1176 16.0023 27.822 18.9628 26.5174C20.4958 25.9684 21.5065 24.554 21.95 23.0342C20.1931 22.9992 18.4358 23.021 16.6789 22.9725C16.6745 21.9272 16.6702 20.8859 16.6745 19.8405C19.6044 19.8362 22.5387 19.8274 25.473 19.8537C25.6532 22.4149 25.2753 25.1558 23.6103 27.2114C21.3303 30.1457 17.118 31.0069 13.6913 29.8558C10.0546 28.6613 7.40989 24.9975 7.48905 21.1583Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Google);

/***/ }),

/***/ "./components/SocialBlock/Socials/Linkedin.js":
/*!****************************************************!*\
  !*** ./components/SocialBlock/Socials/Linkedin.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\SocialBlock\\Socials\\Linkedin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Linkedin = ({
  className,
  link
}) => {
  return __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("rect", {
    x: "0.795898",
    y: "0.7052",
    width: "40.8828",
    height: "40.8828",
    rx: "20.4414",
    fill: "#0077B5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("path", {
    d: "M32.5862 30.7925C31.2447 30.7605 29.9352 30.7605 28.5937 30.7925C28.3062 30.7925 28.2424 30.7286 28.2424 30.4411C28.2424 28.0776 28.2424 25.6821 28.2424 23.3186C28.2424 22.7756 28.2104 22.2326 28.0507 21.7216C27.5716 20.0607 25.6553 19.4539 24.2819 20.5718C23.5472 21.1467 23.2598 21.9452 23.2598 22.9034C23.2598 25.1392 23.2598 27.3749 23.2598 29.6107C23.2598 29.8982 23.2278 30.1856 23.2598 30.505C23.2917 30.7605 23.164 30.8244 22.9404 30.7925C21.567 30.7925 20.2255 30.7925 18.8521 30.7925C18.5966 30.7925 18.5327 30.7286 18.5327 30.4731C18.5647 28.4609 18.5647 26.4487 18.5647 24.4045C18.5647 21.9132 18.5647 19.422 18.5327 16.9626C18.5327 16.6751 18.5966 16.6113 18.8521 16.6113C20.2255 16.6113 21.567 16.6113 22.9404 16.6113C23.1959 16.6113 23.2598 16.6751 23.2598 16.9307C23.2598 17.4417 23.2598 17.9527 23.2598 18.5596C23.3556 18.4638 23.3875 18.4318 23.4195 18.3999C24.6651 16.5793 26.4218 16.0683 28.4979 16.3877C30.8934 16.771 32.4265 18.4318 32.8097 20.987C32.9056 21.5939 32.9375 22.2007 32.9375 22.8076C32.9375 25.3627 32.9375 27.886 32.9375 30.4411C32.9375 30.6967 32.8736 30.7925 32.5862 30.7925Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("path", {
    d: "M15.9778 23.7018C15.9778 25.9376 15.9778 28.1734 15.9778 30.4091C15.9778 30.6966 15.914 30.7924 15.6265 30.7924C14.285 30.7605 12.9436 30.7924 11.6021 30.7924C11.3466 30.7924 11.2827 30.7285 11.2827 30.473C11.2827 25.9695 11.2827 21.4341 11.2827 16.9306C11.2827 16.707 11.3466 16.6112 11.6021 16.6112C12.9755 16.6112 14.3489 16.6112 15.7223 16.6112C16.0098 16.6112 16.0417 16.707 16.0417 16.9625C15.9778 19.1983 15.9778 21.4341 15.9778 23.7018Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("path", {
    d: "M16.2014 12.9062C15.882 14.1838 14.5725 14.9184 13.0713 14.6629C11.4743 14.4073 10.58 12.8423 11.1549 11.3092C11.5382 10.351 12.4645 9.77609 13.6462 9.80803C15.4349 9.77609 16.6166 11.2134 16.2014 12.9062Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Linkedin);

/***/ }),

/***/ "./components/SocialBlock/Socials/Twitter.js":
/*!***************************************************!*\
  !*** ./components/SocialBlock/Socials/Twitter.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\SocialBlock\\Socials\\Twitter.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Twitter = ({
  className,
  link
}) => {
  return __jsx("a", {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("svg", {
    width: "42",
    height: "42",
    viewBox: "0 0 42 42",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("rect", {
    x: "0.182129",
    y: "0.7052",
    width: "40.8828",
    height: "40.8828",
    rx: "20.4414",
    fill: "#1DA1F2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }), __jsx("path", {
    d: "M30.6418 16.7282C30.6418 16.9518 30.6418 17.1754 30.6418 17.367C30.6418 23.9785 25.5953 31.6121 16.3967 31.6121C13.554 31.6121 10.935 30.7817 8.69922 29.3763C9.08249 29.4083 9.49771 29.4402 9.88099 29.4402C12.2126 29.4402 14.3845 28.6417 16.1092 27.3003C13.9054 27.2683 12.0529 25.7991 11.446 23.8188C11.7654 23.8827 12.0529 23.9147 12.4042 23.9147C12.8514 23.9147 13.2985 23.8508 13.7137 23.723C11.4141 23.2759 9.68935 21.2637 9.68935 18.8363C9.68935 18.8043 9.68935 18.8043 9.68935 18.7724C10.3601 19.1556 11.1266 19.3792 11.9571 19.4112C10.6156 18.5169 9.72129 16.9838 9.72129 15.2271C9.72129 14.3008 9.97681 13.4385 10.392 12.7038C12.8514 15.7381 16.5564 17.7184 20.7085 17.9419C20.6127 17.5906 20.5808 17.1754 20.5808 16.7921C20.5808 14.0134 22.8165 11.7776 25.5953 11.7776C27.0326 11.7776 28.3421 12.3844 29.2364 13.3426C30.3862 13.1191 31.4403 12.7038 32.4304 12.1289C32.0471 13.3107 31.2486 14.2689 30.2265 14.9077C31.2486 14.7799 32.2068 14.5244 33.1011 14.1092C32.4623 15.1313 31.6319 16.0256 30.6418 16.7282Z",
    fill: "white",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Twitter);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/games.js":
/*!************************!*\
  !*** ./pages/games.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ModalContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ModalContext */ "./components/ModalContext.js");
/* harmony import */ var _components_GameCard_GameCard2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GameCard/GameCard2 */ "./components/GameCard/GameCard2.js");
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var _components_SeoBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SeoBlock */ "./components/SeoBlock.js");
/* harmony import */ var _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/games/CookieCrash.jpg */ "./assets/images/games/CookieCrash.jpg");
/* harmony import */ var _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/games/gameIcon.png */ "./assets/images/games/gameIcon.png");
/* harmony import */ var _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_images_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/placeholder.jpg */ "./assets/images/placeholder.jpg");
/* harmony import */ var _assets_images_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_seoImg_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/seoImg.jpg */ "./assets/images/seoImg.jpg");
/* harmony import */ var _assets_images_seoImg_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_seoImg_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_gamesImage_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/gamesImage.jpg */ "./assets/images/gamesImage.jpg");
/* harmony import */ var _assets_images_gamesImage_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_gamesImage_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\pages\\games.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











const games = [{
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 1",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 2",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 3",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 4",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 5",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 6",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 7",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 8",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 9",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 10",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 11",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 12",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 13",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}, {
  link: "https://www.google.com",
  googlePlayLink: "https://www.google.com",
  appStoreLink: "https://www.google.com",
  image: _assets_images_games_CookieCrash_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: "Cookie Crush 14",
  icon: _assets_images_games_gameIcon_png__WEBPACK_IMPORTED_MODULE_6___default.a
}];
const seoBlockData = {
  heading: "Seo Title",
  image: _assets_images_seoImg_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
  content: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia laborum.</p>`,
  contactUsBtn: true
};

const Games = props => {
  const {
    openModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_components_ModalContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: undefined
  }, __jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: [{
      name: "Home",
      slug: "/"
    }, {
      name: "Games",
      slug: "/games"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: undefined
  })))), __jsx("section", {
    className: "games withIllustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-9 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx("h1", {
    className: "games-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: undefined
  }, "Games"), __jsx("p", {
    className: "games-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx("div", {
    className: "games-grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, games.map((game, index) => {
    return __jsx(_components_GameCard_GameCard2__WEBPACK_IMPORTED_MODULE_2__["default"], {
      link: game.link,
      key: index,
      googlePlayLink: game.googlePlayLink,
      appStoreLink: game.appStoreLink,
      img: game.image,
      title: game.title,
      icon: game.icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170
      },
      __self: undefined
    });
  })))))), __jsx("section", {
    className: "simpleBlock moreGamesBlock withIllustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: undefined
  }, __jsx("h2", {
    className: "simpleBlock-title moreGamesBlock-title withGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, "On the lookout for more ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, "amazing HTML5 Games?")), __jsx("p", {
    className: "simpleBlock-description moreGamesBlock-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: undefined
  }, "Our games affiliate program provides you with easy and instant access to the best HTML5 games."), __jsx("a", {
    href: "https://publishers.softgames.com/en/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn--primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: undefined
  }, "Browse all HTML5 Games")), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_images_placeholder_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Softgames",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }))))), __jsx("section", {
    className: "simpleBlock participateBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_images_gamesImage_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Softgames",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-lg-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: undefined
  }, __jsx("h2", {
    className: "simpleBlock-title participateBlock-title withGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: undefined
  }, "Participate")), __jsx("p", {
    className: "simpleBlock-description participateBlock-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, "We are always on the lookout for talents who share the same passion as us. Ready for your next challenge?"), __jsx("button", {
    className: "btn btn--primary",
    onClick: openModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  }, "contact us"))))), __jsx(_components_SeoBlock__WEBPACK_IMPORTED_MODULE_4__["default"], {
    heading: seoBlockData.heading,
    image: seoBlockData.image,
    content: seoBlockData.content,
    withButton: seoBlockData.contactUsBtn,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Games);

/***/ }),

/***/ "./utils/apiEndpoints.js":
/*!*******************************!*\
  !*** ./utils/apiEndpoints.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _domain = "https://softgames.ein-des-ein.com";
const _base = `${_domain}/wp-json/better-rest-endpoints/v1`;
const endPoints = {
  news: `${_base}/blog/`,
  positions: "https://softgames.recruitee.com/api/offers/"
};
/* harmony default export */ __webpack_exports__["default"] = (endPoints);

/***/ }),

/***/ "./utils/smoothScroll.js":
/*!*******************************!*\
  !*** ./utils/smoothScroll.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2__);




// Get the top position of an element in the document
const getTop = function (element, start) {
  // return value of html.getBoundingClientRect().top ... IE : 0, other browsers : -pageYOffset
  if (element.nodeName === 'HTML') return -start;
  return element.getBoundingClientRect().top + start;
}; // ease in out function thanks to:
// http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/


const easeInOutCubic = function (t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}; // calculate the scroll position we should be in
// given the start and end point of the scroll
// the time elapsed from the beginning of the scroll
// and the total duration of the scroll (default 500ms)


const position = function (start, end, elapsed, duration) {
  if (elapsed > duration) return end;
  return start + (end - start) * easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
  // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
}; // we use requestAnimationFrame to be called by the browser before every repaint
// if the first argument is an element then scroll to the top of this element
// if the first argument is numeric then scroll to this location
// if the callback exist, it is called when the scrolling is finished
// if context is set then scroll that element, else scroll window


const smoothScroll = function (el, duration, callback, context) {
  duration = duration || 500;
  context = context || window;
  const start = context.scrollTop || window.pageYOffset;
  let end;

  if (typeof el === 'number') {
    end = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_2___default()(el) - 60;
  } else {
    end = getTop(el, start) - 60;
  }

  const clock = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();

  const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
    window.setTimeout(fn, 15);
  };

  const step = function () {
    const elapsed = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()() - clock;

    if (context !== window) {
      context.scrollTop = position(start, end, elapsed, duration);
    } else {
      window.scroll(0, position(start, end, elapsed, duration));
    }

    if (elapsed > duration) {
      if (typeof callback === 'function') {
        callback(el);
      }
    } else {
      requestAnimationFrame(step);
    }
  };

  step();
};

/* harmony default export */ __webpack_exports__["default"] = (url => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
    const pattern = /^(\/#.+)|(.+(\/#.+))$/;

    if (pattern.test(url)) {
      const hash = pattern.exec(url).filter(item => item).pop();
      const id = hash.replace(/\/?#/, '');
      const el = document.getElementById(id);

      if (el) {
        smoothScroll(el, 600, resolve);
        return;
      }
    }

    reject(new Error('Error: hash in URL is invalid or element not found!'));
  });
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/games.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bogomol\Desktop\softgames\pages\games.js */"./pages/games.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-html-parser":
/*!************************************!*\
  !*** external "react-html-parser" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=games.js.map