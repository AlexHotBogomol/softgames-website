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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./assets/icons/DropDownDown.js":
/*!**************************************!*\
  !*** ./assets/icons/DropDownDown.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\DropDownDown.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DropDownDown = props => {
  return __jsx("svg", {
    width: "12",
    height: "7",
    viewBox: "0 0 12 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M11.6491 1.35246C11.6491 0.977462 11.347 0.666748 10.9824 0.666748L1.64909 0.666748C1.28451 0.666748 0.982422 0.977462 0.982422 1.35246C0.982422 1.5346 1.05534 1.70603 1.18034 1.8346L5.847 6.6346C5.972 6.76317 6.13867 6.83817 6.31575 6.83817C6.49284 6.83817 6.6595 6.76317 6.7845 6.6346L11.4512 1.8346C11.5762 1.70603 11.6491 1.5346 11.6491 1.35246Z",
    fill: "#333333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DropDownDown);

/***/ }),

/***/ "./assets/icons/DropDownUp.js":
/*!************************************!*\
  !*** ./assets/icons/DropDownUp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\DropDownUp.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const DropDownUp = props => {
  return __jsx("svg", {
    width: "12",
    height: "7",
    viewBox: "0 0 12 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M0.372397 5.64754C0.372397 6.02254 0.67448 6.33325 1.03906 6.33325L10.3724 6.33325C10.737 6.33325 11.0391 6.02254 11.0391 5.64754C11.0391 5.4654 10.9661 5.29397 10.8411 5.1654L6.17448 0.365401C6.04948 0.23683 5.88281 0.16183 5.70573 0.16183C5.52865 0.16183 5.36198 0.23683 5.23698 0.365401L0.570313 5.1654C0.445313 5.29397 0.372397 5.4654 0.372397 5.64754Z",
    fill: "#333333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DropDownUp);

/***/ }),

/***/ "./assets/icons/GlassDoor.js":
/*!***********************************!*\
  !*** ./assets/icons/GlassDoor.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\GlassDoor.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const GlassDoor = props => {
  return __jsx("svg", {
    width: "150",
    height: "116",
    viewBox: "0 0 150 116",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M17.392 92.9584H13.8213C13.6172 92.9584 13.4472 93.1279 13.4472 93.3312V95.2291C12.529 93.7718 10.6927 92.5856 8.21017 92.5856C4.23138 92.5856 0.762695 95.6019 0.762695 100.923C0.762695 106.244 4.06135 109.192 8.3802 109.192C10.6927 109.192 12.529 108.209 13.5492 106.718V107.735C13.5492 110.04 12.427 111.87 8.78829 111.87C6.95192 111.87 5.48963 111.294 4.26539 110.141C4.09536 109.972 3.8233 110.04 3.72128 110.209L2.08896 112.886C1.88492 113.225 1.91893 113.429 2.02095 113.53C3.68728 114.988 5.79569 115.835 8.92431 115.835C15.7257 115.835 17.7321 112.073 17.7321 107.938V93.2634C17.7661 93.1279 17.596 92.9584 17.392 92.9584ZM9.40041 105.329C6.98593 105.329 5.18357 103.6 5.18357 101.025C5.18357 98.4488 6.95192 96.7203 9.40041 96.7203C11.8149 96.7203 13.6172 98.381 13.6172 101.025C13.6172 103.668 11.8489 105.329 9.40041 105.329ZM25.5536 86.9258V108.718C25.5536 108.921 25.3836 109.091 25.1795 109.091H21.6088C21.4048 109.091 21.2347 108.921 21.2347 108.718V86.9258C21.2347 86.7224 21.4048 86.553 21.6088 86.553H25.1795C25.3836 86.553 25.5536 86.7224 25.5536 86.9258ZM36.1297 92.6195C32.729 92.6195 30.1785 93.7379 29.0563 95.9408C28.9883 96.1103 29.0563 96.3137 29.1583 96.3814L31.7428 98.2116C31.9129 98.3132 32.1169 98.2793 32.2189 98.1099C32.9331 96.822 34.5314 96.3814 36.0957 96.3814C38.0001 96.3814 38.9182 97.0931 38.9182 98.0082V98.2793C38.9182 98.6521 38.7142 98.8555 38.0681 98.9233L33.6472 99.2961C30.6886 99.5672 28.4782 101.397 28.4782 104.346C28.4782 107.294 30.7566 109.362 33.9193 109.362C36.4698 109.362 38.0681 108.142 38.8842 106.82V108.65C38.8842 108.853 39.0543 109.023 39.2583 109.023H42.829C43.0331 109.023 43.2031 108.853 43.2031 108.65V99.0927C43.1691 94.6869 40.8226 92.6195 36.1297 92.6195ZM38.9182 102.584C38.9182 104.346 37.456 105.905 35.2115 105.905C33.7152 105.905 32.9331 105.193 32.9331 104.176C32.9331 103.261 33.6472 102.617 34.9395 102.414L38.9182 101.94V102.584ZM60.1385 104.176C60.1385 107.837 57.4519 109.396 53.1671 109.396C50.2085 109.396 47.658 108.582 46.1957 106.989C46.0937 106.888 46.0937 106.65 46.1957 106.515L48.2361 103.871C48.3381 103.702 48.6102 103.702 48.7802 103.871C49.8684 104.99 51.5347 105.634 53.5752 105.634C54.7654 105.634 55.7176 105.295 55.7176 104.414C55.7176 103.566 54.8674 103.329 52.1469 102.753C49.7664 102.279 46.8078 101.194 46.8078 97.7032C46.8078 94.4835 49.3923 92.5856 53.6092 92.5856C56.4317 92.5856 58.4041 93.4329 59.7984 94.7208C59.9684 94.8224 59.9684 95.0597 59.8664 95.1952L57.928 97.7371C57.826 97.9065 57.5539 97.9404 57.4519 97.8049C56.4657 96.9576 54.9014 96.4153 53.3371 96.4153C51.9768 96.4153 51.2967 96.8559 51.2967 97.5337C51.2967 98.3471 52.1469 98.5505 55.0034 99.1605C57.758 99.7705 60.1385 100.821 60.1385 104.176ZM76.5297 104.176C76.5297 107.837 73.8432 109.396 69.5583 109.396C66.5997 109.396 64.0492 108.582 62.5869 106.989C62.4849 106.888 62.4849 106.65 62.5869 106.515L64.6273 103.871C64.7294 103.702 65.0014 103.702 65.1714 103.871C66.2597 104.99 67.926 105.634 69.9664 105.634C71.1566 105.634 72.1088 105.295 72.1088 104.414C72.1088 103.566 71.2587 103.329 68.5381 102.753C66.1576 102.279 63.1991 101.194 63.1991 97.7032C63.1991 94.4835 65.7836 92.5856 70.0004 92.5856C72.823 92.5856 74.7954 93.4329 76.1896 94.7208C76.3597 94.8224 76.3597 95.0597 76.2576 95.1952L74.3193 97.7371C74.2172 97.9065 73.9452 97.9404 73.8432 97.8049C72.857 96.9576 71.2927 96.4153 69.7283 96.4153C68.3681 96.4153 67.6879 96.8559 67.6879 97.5337C67.6879 98.3471 68.5381 98.5505 71.3947 99.1605C74.1492 99.7705 76.5297 100.821 76.5297 104.176ZM95.4714 86.553H91.9007C91.6967 86.553 91.5267 86.7224 91.5267 86.9258V95.3308C90.4385 93.7718 88.6021 92.5856 86.1196 92.5856C82.1748 92.5856 78.8421 95.6019 78.8421 101.025C78.8421 106.447 82.1748 109.463 86.1876 109.463C88.5681 109.463 90.4044 108.447 91.5267 106.786V108.684C91.5267 108.887 91.6967 109.057 91.9007 109.057H95.4714C95.6755 109.057 95.8455 108.887 95.8455 108.684V86.8919C95.8455 86.7224 95.6755 86.553 95.4714 86.553ZM87.4799 105.329C85.0654 105.329 83.263 103.6 83.263 101.025C83.263 98.4488 85.0314 96.7203 87.4799 96.7203C89.8603 96.7203 91.6967 98.381 91.6967 101.025C91.6967 103.668 89.8603 105.329 87.4799 105.329ZM107.136 92.5856C102.171 92.5856 98.464 95.9747 98.464 101.025C98.464 106.04 102.171 109.463 107.136 109.463C112.101 109.463 115.807 106.074 115.807 101.025C115.807 96.0086 112.135 92.5856 107.136 92.5856ZM107.136 105.261C104.721 105.261 102.817 103.532 102.817 100.957C102.817 98.381 104.721 96.6526 107.136 96.6526C109.55 96.6526 111.455 98.381 111.455 100.957C111.421 103.6 109.55 105.261 107.136 105.261ZM126.86 92.5856C121.895 92.5856 118.188 95.9747 118.188 101.025C118.188 106.04 121.895 109.463 126.86 109.463C131.825 109.463 135.531 106.074 135.531 101.025C135.565 96.0086 131.825 92.5856 126.86 92.5856ZM126.86 105.261C124.445 105.261 122.541 103.532 122.541 100.957C122.541 98.381 124.445 96.6526 126.86 96.6526C129.274 96.6526 131.179 98.381 131.179 100.957C131.145 103.6 129.308 105.261 126.86 105.261ZM149.474 93.3312C149.474 93.1618 149.372 92.9923 149.202 92.8906C148.862 92.7212 148.386 92.6195 147.366 92.6195C145.087 92.6195 143.115 93.7379 142.231 95.568V93.2973C142.231 93.094 142.061 92.9245 141.857 92.9245H138.456C138.252 92.9245 138.082 93.094 138.082 93.2973V108.684C138.082 108.887 138.252 109.057 138.456 109.057H142.027C142.231 109.057 142.401 108.887 142.401 108.684V101.804C142.401 98.7538 144.543 97.1948 147.366 97.1948C148.012 97.1948 148.658 97.3643 148.998 97.4659C149.202 97.5337 149.44 97.3643 149.44 97.127L149.474 93.3312Z",
    fill: "#0CAA41",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("path", {
    d: "M90.0306 0.0966797C95.4717 0.0966797 99.9605 4.50254 99.9605 9.99292H60.2747V50.5268C60.2747 50.7302 60.1047 50.8996 59.9006 50.8996H50.7188C50.5148 50.8996 50.3447 50.7302 50.3447 50.5268V9.99292C50.3447 4.57032 54.7656 0.0966797 60.2747 0.0966797H90.0306ZM90.0306 59.4063H50.3447C50.3447 64.8289 54.7656 69.3025 60.2747 69.3025H89.9966C95.4377 69.3025 99.9265 64.8967 99.9265 59.4063V18.8046C99.9265 18.6013 99.7565 18.4318 99.5525 18.4318H90.3707C90.1666 18.4318 89.9966 18.6013 89.9966 18.8046L90.0306 59.4063Z",
    fill: "#0CAA41",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("path", {
    d: "M100.946 67.9806V68.184H100.572V69.2007H100.3V68.184H99.9258V67.9806H100.946ZM101.796 68.6584C101.796 68.6923 101.796 68.6923 101.83 68.7262C101.83 68.7601 101.83 68.7601 101.864 68.794C101.864 68.7601 101.864 68.7601 101.898 68.7262C101.898 68.7262 101.898 68.6923 101.932 68.6584L102.272 68.0145C102.272 67.9806 102.306 67.9806 102.306 67.9806H102.34H102.544V69.2346H102.306V68.4212L102.34 68.2518L101.966 68.9635C101.932 68.9974 101.932 69.0312 101.864 69.0312H101.83C101.796 69.0312 101.762 68.9974 101.728 68.9635L101.354 68.2518V68.3873V69.1668H101.116V67.9128H101.32C101.354 67.9128 101.354 67.9128 101.354 67.9128L101.388 67.9467L101.796 68.6584Z",
    fill: "#0CAA41",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (GlassDoor);

/***/ }),

/***/ "./assets/icons/Marker.js":
/*!********************************!*\
  !*** ./assets/icons/Marker.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\Marker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Marker = props => {
  return __jsx("svg", {
    width: "12",
    height: "16",
    viewBox: "0 0 12 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M5.375 15.6875C4.875 14.9583 4.30208 14.1354 3.65625 13.2188C3.03125 12.3021 2.58333 11.6563 2.3125 11.2813C2.04167 10.9063 1.72917 10.4479 1.375 9.90625C1.02083 9.34375 0.78125 8.94792 0.65625 8.71875C0.552083 8.48958 0.427083 8.19792 0.28125 7.84375C0.15625 7.48958 0.0729167 7.1875 0.03125 6.9375C0.0104167 6.66667 0 6.35417 0 6C0 4.33333 0.583333 2.91667 1.75 1.75C2.91667 0.583333 4.33333 0 6 0C7.66667 0 9.08333 0.583333 10.25 1.75C11.4167 2.91667 12 4.33333 12 6C12 6.35417 11.9792 6.66667 11.9375 6.9375C11.9167 7.1875 11.8333 7.48958 11.6875 7.84375C11.5625 8.19792 11.4375 8.48958 11.3125 8.71875C11.2083 8.94792 10.9792 9.34375 10.625 9.90625C10.2708 10.4479 9.95833 10.9063 9.6875 11.2813C9.41667 11.6563 8.95833 12.3021 8.3125 13.2188C7.6875 14.1354 7.125 14.9583 6.625 15.6875C6.47917 15.8958 6.27083 16 6 16C5.72917 16 5.52083 15.8958 5.375 15.6875ZM4.21875 7.78125C4.71875 8.26042 5.3125 8.5 6 8.5C6.6875 8.5 7.27083 8.26042 7.75 7.78125C8.25 7.28125 8.5 6.6875 8.5 6C8.5 5.3125 8.25 4.72917 7.75 4.25C7.27083 3.75 6.6875 3.5 6 3.5C5.3125 3.5 4.71875 3.75 4.21875 4.25C3.73958 4.72917 3.5 5.3125 3.5 6C3.5 6.6875 3.73958 7.28125 4.21875 7.78125Z",
    fill: "#333333",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Marker);

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

/***/ "./assets/icons/Stars.js":
/*!*******************************!*\
  !*** ./assets/icons/Stars.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\Stars.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Stars = props => {
  return __jsx("svg", {
    width: "95",
    height: "15",
    viewBox: "0 0 95 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M14.8571 6.06236C14.8571 5.7945 14.5714 5.68736 14.3571 5.65165L9.875 4.99986L7.86607 0.93736C7.78571 0.767717 7.63393 0.571289 7.42857 0.571289C7.22321 0.571289 7.07143 0.767717 6.99107 0.93736L4.98214 4.99986L0.5 5.65165C0.276786 5.68736 0 5.7945 0 6.06236C0 6.22307 0.116071 6.37486 0.223214 6.49093L3.47321 9.65165L2.70536 14.1159C2.69643 14.1784 2.6875 14.232 2.6875 14.2945C2.6875 14.5266 2.80357 14.7409 3.0625 14.7409C3.1875 14.7409 3.30357 14.6963 3.41964 14.6338L7.42857 12.5266L11.4375 14.6338C11.5446 14.6963 11.6696 14.7409 11.7946 14.7409C12.0536 14.7409 12.1607 14.5266 12.1607 14.2945C12.1607 14.232 12.1607 14.1784 12.1518 14.1159L11.3839 9.65165L14.625 6.49093C14.7411 6.37486 14.8571 6.22307 14.8571 6.06236Z",
    fill: "#FF9C00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }), __jsx("path", {
    d: "M34.8571 6.06236C34.8571 5.7945 34.5714 5.68736 34.3571 5.65165L29.875 4.99986L27.8661 0.93736C27.7857 0.767717 27.6339 0.571289 27.4286 0.571289C27.2232 0.571289 27.0714 0.767717 26.9911 0.93736L24.9821 4.99986L20.5 5.65165C20.2768 5.68736 20 5.7945 20 6.06236C20 6.22307 20.1161 6.37486 20.2232 6.49093L23.4732 9.65165L22.7054 14.1159C22.6964 14.1784 22.6875 14.232 22.6875 14.2945C22.6875 14.5266 22.8036 14.7409 23.0625 14.7409C23.1875 14.7409 23.3036 14.6963 23.4196 14.6338L27.4286 12.5266L31.4375 14.6338C31.5446 14.6963 31.6696 14.7409 31.7946 14.7409C32.0536 14.7409 32.1607 14.5266 32.1607 14.2945C32.1607 14.232 32.1607 14.1784 32.1518 14.1159L31.3839 9.65165L34.625 6.49093C34.7411 6.37486 34.8571 6.22307 34.8571 6.06236Z",
    fill: "#FF9C00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("path", {
    d: "M54.8571 6.06236C54.8571 5.7945 54.5714 5.68736 54.3571 5.65165L49.875 4.99986L47.8661 0.93736C47.7857 0.767717 47.6339 0.571289 47.4286 0.571289C47.2232 0.571289 47.0714 0.767717 46.9911 0.93736L44.9821 4.99986L40.5 5.65165C40.2768 5.68736 40 5.7945 40 6.06236C40 6.22307 40.1161 6.37486 40.2232 6.49093L43.4732 9.65165L42.7054 14.1159C42.6964 14.1784 42.6875 14.232 42.6875 14.2945C42.6875 14.5266 42.8036 14.7409 43.0625 14.7409C43.1875 14.7409 43.3036 14.6963 43.4196 14.6338L47.4286 12.5266L51.4375 14.6338C51.5446 14.6963 51.6696 14.7409 51.7946 14.7409C52.0536 14.7409 52.1607 14.5266 52.1607 14.2945C52.1607 14.232 52.1607 14.1784 52.1518 14.1159L51.3839 9.65165L54.625 6.49093C54.7411 6.37486 54.8571 6.22307 54.8571 6.06236Z",
    fill: "#FF9C00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("path", {
    d: "M74.8571 6.06236C74.8571 5.7945 74.5714 5.68736 74.3571 5.65165L69.875 4.99986L67.8661 0.93736C67.7857 0.767717 67.6339 0.571289 67.4286 0.571289C67.2232 0.571289 67.0714 0.767717 66.9911 0.93736L64.9821 4.99986L60.5 5.65165C60.2768 5.68736 60 5.7945 60 6.06236C60 6.22307 60.1161 6.37486 60.2232 6.49093L63.4732 9.65165L62.7054 14.1159C62.6964 14.1784 62.6875 14.232 62.6875 14.2945C62.6875 14.5266 62.8036 14.7409 63.0625 14.7409C63.1875 14.7409 63.3036 14.6963 63.4196 14.6338L67.4286 12.5266L71.4375 14.6338C71.5446 14.6963 71.6696 14.7409 71.7946 14.7409C72.0536 14.7409 72.1607 14.5266 72.1607 14.2945C72.1607 14.232 72.1607 14.1784 72.1518 14.1159L71.3839 9.65165L74.625 6.49093C74.7411 6.37486 74.8571 6.22307 74.8571 6.06236Z",
    fill: "#FF9C00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("path", {
    d: "M94.8571 6.06236C94.8571 5.7945 94.5714 5.68736 94.3571 5.65165L89.875 4.99986L87.8661 0.93736C87.7857 0.767717 87.6339 0.571289 87.4286 0.571289C87.2232 0.571289 87.0714 0.767717 86.9911 0.93736L84.9821 4.99986L80.5 5.65165C80.2768 5.68736 80 5.7945 80 6.06236C80 6.22307 80.1161 6.37486 80.2232 6.49093L83.4732 9.65165L82.7054 14.1159C82.6964 14.1784 82.6875 14.232 82.6875 14.2945C82.6875 14.5266 82.8036 14.7409 83.0625 14.7409C83.1875 14.7409 83.3036 14.6963 83.4196 14.6338L87.4286 12.5266L91.4375 14.6338C91.5446 14.6963 91.6696 14.7409 91.7946 14.7409C92.0536 14.7409 92.1607 14.5266 92.1607 14.2945C92.1607 14.232 92.1607 14.1784 92.1518 14.1159L91.3839 9.65165L94.625 6.49093C94.7411 6.37486 94.8571 6.22307 94.8571 6.06236Z",
    fill: "#FF9C00",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Stars);

/***/ }),

/***/ "./assets/icons/benefits/Equipment.js":
/*!********************************************!*\
  !*** ./assets/icons/benefits/Equipment.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\Equipment.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Equipment = props => {
  return __jsx("svg", {
    width: "32",
    height: "26",
    viewBox: "0 0 32 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M30.9415 20.5545C31.1717 20.5545 31.3526 20.6368 31.4842 20.8012C31.6486 20.9328 31.7308 21.1136 31.7308 21.3439V22.1332C31.7308 22.9883 31.4184 23.7283 30.7935 24.3531C30.1686 24.978 29.4287 25.2904 28.5736 25.2904H3.3155C2.46041 25.2904 1.72043 24.978 1.09555 24.3531C0.470678 23.7283 0.158241 22.9883 0.158241 22.1332V21.3439C0.158241 21.1136 0.224017 20.9328 0.35557 20.8012C0.52001 20.6368 0.717339 20.5545 0.947556 20.5545H12.7379C12.7379 20.9163 12.9024 21.2781 13.2313 21.6399C13.5601 21.9687 13.9384 22.1332 14.3659 22.1332H17.3752C17.8356 22.1332 18.2138 22.0016 18.5098 21.7385C18.8058 21.4425 18.9702 21.0479 19.0031 20.5545H30.9415ZM28.5736 2.40032V18.9759H3.3155V2.40032C3.3155 1.74255 3.54572 1.18346 4.00615 0.723023C4.46658 0.262589 5.02568 0.0323725 5.68344 0.0323725H26.2056C26.8634 0.0323725 27.4225 0.262589 27.8829 0.723023C28.3433 1.18346 28.5736 1.74255 28.5736 2.40032ZM25.4163 15.8187V3.18963H6.47276V15.8187H25.4163Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Equipment);

/***/ }),

/***/ "./assets/icons/benefits/FlexibleWorkingHours.js":
/*!*******************************************************!*\
  !*** ./assets/icons/benefits/FlexibleWorkingHours.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\FlexibleWorkingHours.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FlexibleWorkingHours = props => {
  return __jsx("svg", {
    width: "20",
    height: "26",
    viewBox: "0 0 20 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M18.2333 0.0323725C18.5622 0.0323725 18.8417 0.147481 19.072 0.377698C19.3022 0.607914 19.4173 0.887463 19.4173 1.21634V2.00566C19.4173 2.33454 19.3022 2.61409 19.072 2.84431C18.8417 3.07452 18.5622 3.18963 18.2333 3.18963C18.2333 5.39313 17.6742 7.38286 16.556 9.15882C15.4378 10.9019 14.0072 12.0694 12.2641 12.6614C14.0072 13.2534 15.4378 14.4374 16.556 16.2133C17.6742 17.9564 18.2333 19.9297 18.2333 22.1332C18.5622 22.1332 18.8417 22.2483 19.072 22.4785C19.3022 22.7087 19.4173 22.9883 19.4173 23.3172V24.1065C19.4173 24.4353 19.3022 24.7149 19.072 24.9451C18.8417 25.1753 18.5622 25.2904 18.2333 25.2904H1.65771C1.32882 25.2904 1.04928 25.1753 0.819059 24.9451C0.588842 24.7149 0.473734 24.4353 0.473734 24.1065V23.3172C0.473734 22.9883 0.588842 22.7087 0.819059 22.4785C1.04928 22.2483 1.32882 22.1332 1.65771 22.1332C1.65771 19.9297 2.2168 17.9564 3.335 16.2133C4.45319 14.4374 5.88383 13.2534 7.6269 12.6614C6.47581 12.2667 5.43984 11.609 4.51897 10.6881C3.63099 9.76725 2.9239 8.6655 2.39769 7.38286C1.90437 6.06734 1.65771 4.6696 1.65771 3.18963C1.32882 3.18963 1.04928 3.07452 0.819059 2.84431C0.588842 2.61409 0.473734 2.33454 0.473734 2.00566V1.21634C0.473734 0.887463 0.588842 0.607914 0.819059 0.377698C1.04928 0.147481 1.32882 0.0323725 1.65771 0.0323725H18.2333ZM14.5334 18.9759C14.1059 17.7919 13.481 16.8382 12.6588 16.1147C11.8366 15.3911 10.9322 15.0293 9.94551 15.0293C8.95886 15.0293 8.05444 15.3911 7.23224 16.1147C6.41004 16.8382 5.78516 17.7919 5.35762 18.9759H14.5334ZM14.5334 6.34689C14.8952 5.36025 15.0761 4.30783 15.0761 3.18963H4.81496C4.81496 4.30783 4.99585 5.36025 5.35762 6.34689H14.5334Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FlexibleWorkingHours);

/***/ }),

/***/ "./assets/icons/benefits/Food.js":
/*!***************************************!*\
  !*** ./assets/icons/benefits/Food.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\Food.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Food = props => {
  return __jsx("svg", {
    width: "22",
    height: "26",
    viewBox: "0 0 22 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M10.9455 0.772355C11.4717 3.89672 11.7348 6.01801 11.7348 7.1362C11.7348 8.38595 11.4224 9.47126 10.7975 10.3921C10.2055 11.2801 9.38332 11.9214 8.3309 12.3161L8.97222 24.0571C9.00511 24.386 8.89 24.6656 8.6269 24.8958C8.39668 25.1589 8.11713 25.2904 7.78825 25.2904H4.63099C4.30211 25.2904 4.00612 25.1589 3.74301 24.8958C3.5128 24.6656 3.41413 24.386 3.44702 24.0571L4.08834 12.3161C3.39769 12.053 2.78926 11.6912 2.26305 11.2308C1.76973 10.7375 1.37507 10.1455 1.07908 9.45481C0.815972 8.76416 0.68442 7.99129 0.68442 7.1362C0.68442 6.01801 0.947524 3.89672 1.47373 0.772355C1.53951 0.279033 1.93417 0.0323725 2.65771 0.0323725C3.38124 0.0323725 3.7759 0.295477 3.84168 0.821687V7.82685C3.87457 7.89263 4.00612 7.92552 4.23633 7.92552C4.46655 7.92552 4.5981 7.89263 4.63099 7.82685C4.66388 7.46508 4.71321 6.70866 4.77899 5.55757C4.84476 4.3736 4.8941 3.30474 4.92699 2.35098C4.99276 1.36434 5.02565 0.854575 5.02565 0.821687C5.09143 0.295477 5.48608 0.0323725 6.20962 0.0323725C6.93316 0.0323725 7.32782 0.295477 7.39359 0.821687C7.42648 1.08479 7.55803 3.41985 7.78825 7.82685C7.82114 7.89263 7.95269 7.92552 8.18291 7.92552C8.41312 7.92552 8.54468 7.89263 8.57756 7.82685V0.821687C8.64334 0.295477 9.038 0.0323725 9.76154 0.0323725C10.4851 0.0323725 10.8797 0.279033 10.9455 0.772355ZM16.816 14.8814C15.369 13.7303 14.3659 12.4476 13.8068 11.0334C13.2477 9.61925 13.1161 8.28729 13.4121 7.03754C13.741 5.78779 14.2508 4.62026 14.9414 3.53496C15.6321 2.44965 16.4378 1.59456 17.3587 0.969683C18.3124 0.344809 19.2004 0.0323725 20.0226 0.0323725C20.3515 0.0323725 20.6311 0.147481 20.8613 0.377698C21.0915 0.607914 21.2066 0.887463 21.2066 1.21634V24.1065C21.2066 24.4353 21.0915 24.7149 20.8613 24.9451C20.6311 25.1753 20.3515 25.2904 20.0226 25.2904H17.26C16.8983 25.2904 16.6023 25.1589 16.372 24.8958C16.1418 24.6327 16.0432 24.3367 16.0761 24.0078L16.816 14.8814Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Food);

/***/ }),

/***/ "./assets/icons/benefits/FurtherTraining.js":
/*!**************************************************!*\
  !*** ./assets/icons/benefits/FurtherTraining.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\FurtherTraining.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const FurtherTraining = props => {
  return __jsx("svg", {
    width: "26",
    height: "22",
    viewBox: "0 0 26 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M7.222 0.80833L8.06065 1.59764C8.15931 1.7292 8.20864 1.87719 8.20864 2.04163C8.20864 2.17319 8.15931 2.30474 8.06065 2.43629L4.4594 5.98821L3.71942 6.77752C3.58787 6.87619 3.43987 6.92552 3.27543 6.92552C3.11099 6.92552 2.96299 6.87619 2.83144 6.77752L0.512828 4.40958C0.381276 4.31091 0.315499 4.17936 0.315499 4.01492C0.315499 3.85048 0.381276 3.70248 0.512828 3.57093L1.25281 2.83095C1.38436 2.6994 1.53236 2.63362 1.6968 2.63362C1.86124 2.63362 1.99279 2.6994 2.09146 2.83095L3.2261 3.91626L6.38335 0.80833C6.48202 0.676778 6.61357 0.611001 6.77801 0.611001C6.94245 0.611001 7.09045 0.676778 7.222 0.80833ZM7.222 8.65214L8.06065 9.49079C8.15931 9.58945 8.20864 9.72101 8.20864 9.88545C8.20864 10.0499 8.14287 10.1979 8.01132 10.3294L4.4594 13.8814L3.71942 14.6213C3.58787 14.7529 3.43987 14.8187 3.27543 14.8187C3.11099 14.8187 2.96299 14.7529 2.83144 14.6213L0.512828 12.3027C0.381276 12.1712 0.315499 12.0396 0.315499 11.9081C0.315499 11.7436 0.381276 11.5956 0.512828 11.4641L1.25281 10.6748C1.38436 10.5761 1.53236 10.5268 1.6968 10.5268C1.86124 10.5268 1.99279 10.5761 2.09146 10.6748L3.2261 11.7601L6.38335 8.65214C6.48202 8.52059 6.61357 8.45481 6.77801 8.45481C6.94245 8.45481 7.09045 8.52059 7.222 8.65214ZM1.74613 17.8773C2.23945 17.4168 2.815 17.1866 3.47276 17.1866C4.13052 17.1866 4.68962 17.4168 5.15005 17.8773C5.61048 18.3377 5.8407 18.8968 5.8407 19.5545C5.8407 20.2123 5.61048 20.7714 5.15005 21.2318C4.68962 21.6923 4.13052 21.9225 3.47276 21.9225C2.815 21.9225 2.23945 21.6923 1.74613 21.2318C1.2857 20.7714 1.05548 20.2123 1.05548 19.5545C1.05548 18.8968 1.2857 18.3377 1.74613 17.8773ZM24.7842 17.9759C25.0145 17.9759 25.1954 18.0581 25.3269 18.2226C25.4913 18.3541 25.5736 18.535 25.5736 18.7652V20.3439C25.5736 20.5741 25.4913 20.7714 25.3269 20.9359C25.1954 21.0674 25.0145 21.1332 24.7842 21.1332H10.5766C10.3464 21.1332 10.149 21.0674 9.9846 20.9359C9.85305 20.7714 9.78727 20.5741 9.78727 20.3439V18.7652C9.78727 18.535 9.85305 18.3541 9.9846 18.2226C10.149 18.0581 10.3464 17.9759 10.5766 17.9759H24.7842ZM24.7842 2.18963C25.0145 2.18963 25.1954 2.27185 25.3269 2.43629C25.4913 2.56784 25.5736 2.74873 25.5736 2.97895V4.55757C25.5736 4.78779 25.4913 4.98512 25.3269 5.14956C25.1954 5.28111 25.0145 5.34689 24.7842 5.34689H10.5766C10.3464 5.34689 10.149 5.28111 9.9846 5.14956C9.85305 4.98512 9.78727 4.78779 9.78727 4.55757V2.97895C9.78727 2.74873 9.85305 2.56784 9.9846 2.43629C10.149 2.27185 10.3464 2.18963 10.5766 2.18963H24.7842ZM24.7842 10.0828C25.0145 10.0828 25.1954 10.165 25.3269 10.3294C25.4913 10.461 25.5736 10.6419 25.5736 10.8721V12.4507C25.5736 12.6809 25.4913 12.8783 25.3269 13.0427C25.1954 13.1743 25.0145 13.24 24.7842 13.24H10.5766C10.3464 13.24 10.149 13.1743 9.9846 13.0427C9.85305 12.8783 9.78727 12.6809 9.78727 12.4507V10.8721C9.78727 10.6419 9.85305 10.461 9.9846 10.3294C10.149 10.165 10.3464 10.0828 10.5766 10.0828H24.7842Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (FurtherTraining);

/***/ }),

/***/ "./assets/icons/benefits/HomeOffice.js":
/*!*********************************************!*\
  !*** ./assets/icons/benefits/HomeOffice.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\HomeOffice.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const HomeOffice = props => {
  return __jsx("svg", {
    width: "30",
    height: "23",
    viewBox: "0 0 30 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M16.5241 0.709666V6.92552H3.15512C4.43776 4.98512 6.11505 3.45582 8.187 2.33763C10.259 1.18654 12.5118 0.611001 14.9455 0.611001C15.4388 0.611001 15.965 0.64389 16.5241 0.709666ZM5.47373 8.50415V14.8187H0.737847C0.737847 12.6152 1.23117 10.5103 2.21781 8.50415H5.47373ZM18.1028 0.956327C21.7862 1.81142 24.6639 3.80115 26.7359 6.92552H18.1028V0.956327ZM24.4173 14.8187V8.50415H27.6732C28.6598 10.5103 29.1532 12.6152 29.1532 14.8187H24.4173ZM21.26 17.9759C21.26 17.5155 21.1942 16.9893 21.0627 16.3973H29.1532V21.1332C29.1532 21.5607 28.9887 21.9225 28.6598 22.2185C28.3639 22.5474 28.0021 22.7118 27.5745 22.7118H21.26V17.9759ZM22.8387 8.50415V14.8187H20.372C19.8129 13.8649 19.0565 13.1085 18.1028 12.5494C17.149 11.9574 16.0966 11.6614 14.9455 11.6614C13.7944 11.6614 12.742 11.9574 11.7883 12.5494C10.8345 13.1085 10.0781 13.8649 9.51897 14.8187H7.05236V8.50415H22.8387ZM0.737847 21.1332V16.3973H8.82832C8.69677 16.9893 8.63099 17.5155 8.63099 17.9759V22.7118H2.31648C1.88893 22.7118 1.51072 22.5474 1.18184 22.2185C0.885844 21.9225 0.737847 21.5607 0.737847 21.1332ZM11.5909 14.6213C12.5118 13.7005 13.63 13.24 14.9455 13.24C16.261 13.24 17.3792 13.7005 18.3001 14.6213C19.221 15.5422 19.6814 16.6604 19.6814 17.9759V22.7118H10.2096V17.9759C10.2096 16.6604 10.6701 15.5422 11.5909 14.6213Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomeOffice);

/***/ }),

/***/ "./assets/icons/benefits/Languages.js":
/*!********************************************!*\
  !*** ./assets/icons/benefits/Languages.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\Languages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Languages = props => {
  return __jsx("svg", {
    width: "32",
    height: "17",
    viewBox: "0 0 32 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M7.65771 7.67476L8.20036 9.54938H6.32574L6.86839 7.67476L7.26305 6.0468C7.42749 6.73745 7.55904 7.2801 7.65771 7.67476ZM30.5478 0.76826C30.8767 0.76826 31.1563 0.883368 31.3865 1.11358C31.6167 1.3438 31.7318 1.62335 31.7318 1.95223V15.3706C31.7318 15.6995 31.6167 15.979 31.3865 16.2092C31.1563 16.4394 30.8767 16.5545 30.5478 16.5545H16.7348V0.76826H30.5478ZM29.3639 6.68812V5.8988C29.3639 5.50415 29.1665 5.30682 28.7719 5.30682H25.6146V4.5175C25.6146 4.12285 25.4173 3.92552 25.0226 3.92552H24.2333C23.8387 3.92552 23.6413 4.12285 23.6413 4.5175V5.30682H20.4841C20.0894 5.30682 19.8921 5.50415 19.8921 5.8988V6.68812C19.8921 7.08278 20.0894 7.2801 20.4841 7.2801H26.1079C25.8119 7.97075 25.3186 8.67785 24.628 9.40139C24.332 9.07251 24.0524 8.72718 23.7893 8.36541C23.5591 8.06942 23.296 8.02009 23 8.21742L22.6547 8.41474L22.3094 8.61207C21.9476 8.84229 21.8818 9.12184 22.112 9.45072C22.4409 9.87826 22.7862 10.3058 23.148 10.7334C22.7533 11.0293 22.3258 11.3253 21.8654 11.6213C21.5365 11.8187 21.4707 12.0818 21.668 12.4106L22.0627 13.1013C22.26 13.4631 22.5396 13.5288 22.9013 13.2986C23.4933 12.9369 24.0689 12.5258 24.628 12.0653C25.1542 12.4929 25.7462 12.904 26.4039 13.2986C26.7328 13.5288 26.9959 13.4631 27.1932 13.1013L27.5879 12.4106C27.7852 12.0818 27.7194 11.8187 27.3906 11.6213C26.963 11.3582 26.5355 11.0622 26.1079 10.7334C27.1604 9.58227 27.8674 8.43119 28.2292 7.2801H28.7719C29.1665 7.2801 29.3639 7.08278 29.3639 6.68812ZM0.159218 1.95223C0.159218 1.62335 0.274326 1.3438 0.504543 1.11358C0.73476 0.883368 1.01431 0.76826 1.34319 0.76826H15.1562V16.5545H1.34319C1.01431 16.5545 0.73476 16.4394 0.504543 16.2092C0.274326 15.979 0.159218 15.6995 0.159218 15.3706V1.95223ZM3.06982 12.608C3.03693 12.7395 3.03693 12.8711 3.06982 13.0026C3.1027 13.1013 3.16848 13.2 3.26714 13.2986C3.36581 13.3644 3.48092 13.3973 3.61247 13.3973H4.74711C5.0431 13.3973 5.24043 13.2493 5.33909 12.9533L5.78308 11.424H8.74301L9.187 12.9533C9.28567 13.2493 9.483 13.3973 9.77899 13.3973H10.9136C11.111 13.3973 11.259 13.3151 11.3576 13.1506C11.4892 12.9862 11.5221 12.8053 11.4563 12.608L8.64435 4.27084C8.54568 4.00774 8.34836 3.87619 8.05236 3.87619H6.47373C6.17774 3.87619 5.98041 4.00774 5.88175 4.27084L3.06982 12.608Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Languages);

/***/ }),

/***/ "./assets/icons/benefits/Parties.js":
/*!******************************************!*\
  !*** ./assets/icons/benefits/Parties.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\Parties.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Parties = props => {
  return __jsx("svg", {
    width: "30",
    height: "26",
    viewBox: "0 0 30 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M15.3895 22.9225C15.9486 22.9225 16.409 23.1034 16.7708 23.4651C17.1655 23.8598 17.3628 24.3367 17.3628 24.8958C17.3628 25.1589 17.2312 25.2904 16.9681 25.2904H5.12841C4.8653 25.2904 4.73375 25.1589 4.73375 24.8958C4.73375 24.3367 4.91464 23.8598 5.27641 23.4651C5.67106 23.1034 6.14794 22.9225 6.70704 22.9225H9.46964V16.756L1.1325 8.41884C0.770735 8.02418 0.688515 7.58019 0.885844 7.08687C1.08317 6.59355 1.46139 6.34689 2.02048 6.34689H20.0761C20.6352 6.34689 21.0134 6.59355 21.2107 7.08687C21.408 7.58019 21.3258 8.02418 20.964 8.41884L12.6269 16.756V22.9225H15.3895ZM22.0987 0.0323725C24.072 0.0323725 25.7493 0.723023 27.1306 2.10432C28.5119 3.48562 29.2025 5.16292 29.2025 7.1362C29.2025 9.10949 28.5119 10.7868 27.1306 12.1681C25.7493 13.5494 24.072 14.24 22.0987 14.24C20.7831 14.24 19.5498 13.8947 18.3988 13.2041L20.1747 11.4281C20.7996 11.7241 21.4409 11.8721 22.0987 11.8721C23.4142 11.8721 24.5324 11.4117 25.4533 10.4908C26.3741 9.56992 26.8346 8.45173 26.8346 7.1362C26.8346 5.82068 26.3741 4.70248 25.4533 3.78162C24.5324 2.86075 23.4142 2.40032 22.0987 2.40032C21.2436 2.40032 20.4543 2.61409 19.7307 3.04163C19.0072 3.46918 18.4316 4.04472 18.0041 4.76826H15.4388C15.9322 3.35407 16.7872 2.21943 18.0041 1.36434C19.221 0.476362 20.5858 0.0323725 22.0987 0.0323725Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Parties);

/***/ }),

/***/ "./assets/icons/benefits/Relocation.js":
/*!*********************************************!*\
  !*** ./assets/icons/benefits/Relocation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\Relocation.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Relocation = props => {
  return __jsx("svg", {
    width: "30",
    height: "23",
    viewBox: "0 0 30 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M14.6002 6.33353C14.7317 6.26776 14.8633 6.23487 14.9948 6.23487C15.1264 6.23487 15.2579 6.26776 15.3895 6.33353L24.4666 13.832V21.9225C24.4666 22.1527 24.3844 22.3336 24.22 22.4651C24.0884 22.6296 23.9075 22.7118 23.6773 22.7118H18.1521C17.9219 22.7118 17.7246 22.6296 17.5601 22.4651C17.4286 22.3007 17.3628 22.1198 17.3628 21.9225V17.1866C17.3628 17.0551 17.3299 16.9235 17.2641 16.7919C17.1983 16.6604 17.0997 16.5617 16.9681 16.496C16.8366 16.4302 16.705 16.3973 16.5735 16.3973H13.4162C13.186 16.3973 12.9887 16.4795 12.8242 16.644C12.6927 16.7755 12.6269 16.9564 12.6269 17.1866V21.9225C12.6269 22.1198 12.5447 22.3007 12.3802 22.4651C12.2487 22.6296 12.0678 22.7118 11.8376 22.7118H6.31238C6.08216 22.7118 5.88484 22.6296 5.7204 22.4651C5.58884 22.3336 5.52307 22.1527 5.52307 21.9225V13.832L14.6002 6.33353ZM29.0052 11.4147C29.1367 11.5463 29.2025 11.7107 29.2025 11.9081C29.2025 12.0396 29.1532 12.1547 29.0545 12.2534L27.8212 13.7827C27.6896 13.9471 27.5417 14.0293 27.3772 14.0293C27.2128 14.0293 27.0812 13.98 26.9826 13.8814L15.3895 4.31091C15.2579 4.24514 15.1264 4.21225 14.9948 4.21225C14.8633 4.21225 14.7317 4.24514 14.6002 4.31091L3.00713 13.8814C2.90846 13.98 2.79335 14.0293 2.6618 14.0293C2.46447 14.0293 2.30003 13.9471 2.16848 13.7827L0.935176 12.2534C0.836512 12.1547 0.787179 12.0396 0.787179 11.9081C0.787179 11.7107 0.852956 11.5463 0.984508 11.4147L13.4655 1.15366C13.926 0.791886 14.4357 0.611001 14.9948 0.611001C15.5539 0.611001 16.0473 0.791886 16.4748 1.15366L20.9147 4.80423V1.20299C20.9147 1.03855 20.964 0.906994 21.0627 0.80833C21.1942 0.676778 21.3422 0.611001 21.5067 0.611001H24.2693C24.4337 0.611001 24.5653 0.676778 24.6639 0.80833C24.7955 0.906994 24.8613 1.03855 24.8613 1.20299V8.06016L29.0052 11.4147Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Relocation);

/***/ }),

/***/ "./assets/icons/benefits/Studio.js":
/*!*****************************************!*\
  !*** ./assets/icons/benefits/Studio.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\Studio.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Studio = props => {
  return __jsx("svg", {
    width: "32",
    height: "26",
    viewBox: "0 0 32 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M30.9415 22.1332C31.1717 22.1332 31.3526 22.199 31.4842 22.3305C31.6486 22.4949 31.7308 22.6923 31.7308 22.9225V24.5011C31.7308 24.7313 31.6486 24.9122 31.4842 25.0438C31.3526 25.2082 31.1717 25.2904 30.9415 25.2904H23.8377V6.34689H19.1018V3.18963H24.627C25.2848 3.18963 25.8439 3.43629 26.3043 3.92961C26.7647 4.39005 26.9949 4.94914 26.9949 5.60691V22.1332H30.9415ZM15.5499 0.0817046C16.0432 -0.0498478 16.4872 0.0488165 16.8818 0.377698C17.3094 0.706579 17.5232 1.13412 17.5232 1.66033V25.2904H0.947556C0.717339 25.2904 0.52001 25.2082 0.35557 25.0438C0.224017 24.9122 0.158241 24.7313 0.158241 24.5011V22.9225C0.158241 22.6923 0.224017 22.4949 0.35557 22.3305C0.52001 22.199 0.717339 22.1332 0.947556 22.1332H4.89413V4.12694C4.89413 3.76517 5.00924 3.43629 5.23945 3.1403C5.46967 2.84431 5.74922 2.64698 6.0781 2.54831L15.5499 0.0817046ZM12.3433 13.796C12.5735 14.092 12.853 14.24 13.1819 14.24C13.5108 14.24 13.7904 14.092 14.0206 13.796C14.2508 13.4672 14.3659 13.0889 14.3659 12.6614C14.3659 12.2339 14.2508 11.8721 14.0206 11.5761C13.7904 11.2472 13.5108 11.0828 13.1819 11.0828C12.853 11.0828 12.5735 11.2472 12.3433 11.5761C12.1131 11.8721 11.998 12.2339 11.998 12.6614C11.998 13.0889 12.1131 13.4672 12.3433 13.796Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Studio);

/***/ }),

/***/ "./assets/icons/benefits/TeamEvents.js":
/*!*********************************************!*\
  !*** ./assets/icons/benefits/TeamEvents.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\TeamEvents.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TeamEvents = props => {
  return __jsx("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M25.1799 2.74564C25.4759 3.04163 25.6239 3.41985 25.6239 3.88028C25.6239 4.30783 25.4759 4.6696 25.1799 4.96559L21.8253 8.32017C21.4964 8.61617 21.1182 8.76416 20.6907 8.76416C20.2631 8.76416 19.9013 8.61617 19.6053 8.32017L16.8921 10.9841C17.6156 12.1023 17.9609 13.2863 17.9281 14.536C17.9281 15.7529 17.517 16.756 16.6948 17.5453C16.2343 18.0386 15.6752 18.3839 15.0175 18.5813C14.557 18.7128 14.1624 18.9759 13.8335 19.3706C13.5375 19.7652 13.3566 20.2092 13.2908 20.7025C13.1922 21.9523 12.7317 22.9883 11.9095 23.8105C10.7584 24.9616 9.27848 25.4384 7.46964 25.2411C5.69368 25.0767 4.11505 24.3038 2.73375 22.9225C1.35245 21.5412 0.563137 19.9626 0.365808 18.1866C0.201368 16.3778 0.694689 14.8978 1.84577 13.7467C2.66798 12.9245 3.70395 12.4641 4.9537 12.3654C5.44702 12.2996 5.87457 12.1188 6.23633 11.8228C6.63099 11.4939 6.91054 11.0992 7.07498 10.6388C7.27231 9.98102 7.60119 9.42193 8.06162 8.96149C8.88383 8.13929 9.90336 7.72819 11.1202 7.72819C12.37 7.6953 13.5539 8.04063 14.6721 8.76416L17.3361 6.10023C17.0401 5.77135 16.8921 5.39313 16.8921 4.96559C16.8921 4.53804 17.0401 4.15983 17.3361 3.83095L20.6907 0.476362C20.9866 0.180369 21.3484 0.0323725 21.776 0.0323725C22.2364 0.0323725 22.6146 0.180369 22.9106 0.476362L25.1799 2.74564ZM8.9496 16.7066C9.41004 17.1671 9.96913 17.3973 10.6269 17.3973C11.2847 17.3973 11.8438 17.1671 12.3042 16.7066C12.7646 16.2462 12.9948 15.6871 12.9948 15.0293C12.9948 14.3716 12.7646 13.8125 12.3042 13.3521C11.8438 12.8916 11.2847 12.6614 10.6269 12.6614C9.96913 12.6614 9.41004 12.8916 8.9496 13.3521C8.48917 13.8125 8.25895 14.3716 8.25895 15.0293C8.25895 15.6871 8.48917 16.2462 8.9496 16.7066Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamEvents);

/***/ }),

/***/ "./assets/icons/benefits/TeamSpirit.js":
/*!*********************************************!*\
  !*** ./assets/icons/benefits/TeamSpirit.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\TeamSpirit.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TeamSpirit = props => {
  return __jsx("svg", {
    width: "32",
    height: "23",
    viewBox: "0 0 32 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M7.11505 9.14546C6.49018 9.77034 5.7502 10.0828 4.8951 10.0828C4.04001 10.0828 3.30003 9.77034 2.67516 9.14546C2.05028 8.52059 1.73785 7.78061 1.73785 6.92552C1.73785 6.07043 2.05028 5.33044 2.67516 4.70557C3.30003 4.0807 4.04001 3.76826 4.8951 3.76826C5.7502 3.76826 6.49018 4.0807 7.11505 4.70557C7.73993 5.33044 8.05236 6.07043 8.05236 6.92552C8.05236 7.78061 7.73993 8.52059 7.11505 9.14546ZM29.2159 9.14546C28.591 9.77034 27.851 10.0828 26.9959 10.0828C26.1408 10.0828 25.4008 9.77034 24.776 9.14546C24.1511 8.52059 23.8387 7.78061 23.8387 6.92552C23.8387 6.07043 24.1511 5.33044 24.776 4.70557C25.4008 4.0807 26.1408 3.76826 26.9959 3.76826C27.851 3.76826 28.591 4.0807 29.2159 4.70557C29.8407 5.33044 30.1532 6.07043 30.1532 6.92552C30.1532 7.78061 29.8407 8.52059 29.2159 9.14546ZM28.5745 11.6614C29.4296 11.6614 30.1696 11.9738 30.7945 12.5987C31.4194 13.2236 31.7318 13.9636 31.7318 14.8187V16.3973C31.7318 16.8248 31.5674 17.2031 31.2385 17.5319C30.9425 17.8279 30.5807 17.9759 30.1532 17.9759H26.8972C26.7986 17.2195 26.5848 16.496 26.2559 15.8053C25.927 15.1147 25.4995 14.5062 24.9733 13.98C24.4471 13.4209 23.8551 12.9605 23.1973 12.5987C23.8222 11.9738 24.5622 11.6614 25.4173 11.6614H28.5745ZM19.8427 10.0334C18.7574 11.1188 17.4584 11.6614 15.9455 11.6614C14.4327 11.6614 13.1336 11.1188 12.0483 10.0334C10.963 8.94814 10.4203 7.64906 10.4203 6.1362C10.4203 4.62335 10.963 3.32427 12.0483 2.23896C13.1336 1.15366 14.4327 0.611001 15.9455 0.611001C17.4584 0.611001 18.7574 1.15366 19.8427 2.23896C20.9281 3.32427 21.4707 4.62335 21.4707 6.1362C21.4707 7.64906 20.9281 8.94814 19.8427 10.0334ZM19.7441 13.24C21.3227 13.24 22.6547 13.7991 23.74 14.9173C24.8582 16.0026 25.4173 17.3346 25.4173 18.9132V20.3439C25.4173 21.0016 25.1871 21.5607 24.7266 22.0212C24.2662 22.4816 23.7071 22.7118 23.0493 22.7118H8.84168C8.18392 22.7118 7.62482 22.4816 7.16438 22.0212C6.70395 21.5607 6.47373 21.0016 6.47373 20.3439V18.9132C6.47373 17.3346 7.01639 16.0026 8.1017 14.9173C9.21989 13.7991 10.5683 13.24 12.1469 13.24H12.5909C13.6762 13.7662 14.7944 14.0293 15.9455 14.0293C17.0966 14.0293 18.2148 13.7662 19.3001 13.24H19.7441ZM8.69368 12.5987C7.70704 13.1249 6.88484 13.8649 6.22707 14.8187C5.56931 15.7724 5.15821 16.8248 4.99377 17.9759H1.73785C1.3103 17.9759 0.932088 17.8279 0.603207 17.5319C0.307214 17.2031 0.159218 16.8248 0.159218 16.3973V14.8187C0.159218 13.9636 0.471655 13.2236 1.09653 12.5987C1.7214 11.9738 2.46139 11.6614 3.31648 11.6614H6.47373C7.32882 11.6614 8.06881 11.9738 8.69368 12.5987Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TeamSpirit);

/***/ }),

/***/ "./assets/icons/benefits/Visa.js":
/*!***************************************!*\
  !*** ./assets/icons/benefits/Visa.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\assets\\icons\\benefits\\Visa.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Visa = props => {
  return __jsx("svg", {
    width: "23",
    height: "26",
    viewBox: "0 0 23 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, __jsx("path", {
    d: "M7.30828 8.71483C7.57139 7.10331 8.44292 5.95223 9.92289 5.26158C9.52823 6.21534 9.29802 7.36642 9.23224 8.71483H7.30828ZM7.30828 10.2935H9.23224C9.29802 11.6419 9.52823 12.793 9.92289 13.7467C8.44292 13.0561 7.57139 11.905 7.30828 10.2935ZM11.9455 14.1907C11.7153 13.9605 11.4686 13.5001 11.2055 12.8094C10.9753 12.1188 10.8438 11.2801 10.8109 10.2935H13.0801C13.0473 11.2801 12.8993 12.1188 12.6362 12.8094C12.4059 13.5001 12.1757 13.9605 11.9455 14.1907ZM10.8109 8.71483C10.8438 7.72819 10.9753 6.88954 11.2055 6.19889C11.4686 5.50824 11.7153 5.04781 11.9455 4.81759C12.0771 4.98203 12.2251 5.21225 12.3895 5.50824C12.5539 5.80423 12.7019 6.24822 12.8335 6.84021C12.965 7.39931 13.0473 8.02418 13.0801 8.71483H10.8109ZM13.9681 13.7467C14.3628 12.793 14.593 11.6419 14.6588 10.2935H16.5827C16.3196 11.905 15.4481 13.0561 13.9681 13.7467ZM21.4173 0.0323725C21.8448 0.0323725 22.2066 0.196813 22.5026 0.525694C22.8315 0.821687 22.9959 1.18346 22.9959 1.611V23.7118C22.9959 24.1394 22.8315 24.5011 22.5026 24.7971C22.2066 25.126 21.8448 25.2904 21.4173 25.2904H4.05236C3.16438 25.2904 2.40796 24.978 1.78308 24.3531C1.1911 23.7611 0.895104 23.0212 0.895104 22.1332V3.18963C0.895104 2.30165 1.1911 1.56167 1.78308 0.969683C2.40796 0.344809 3.16438 0.0323725 4.05236 0.0323725H21.4173ZM17.4707 20.5545C17.7009 20.5545 17.8818 20.4888 18.0134 20.3572C18.1778 20.1928 18.26 19.9955 18.26 19.7652C18.26 19.535 18.1778 19.3541 18.0134 19.2226C17.8818 19.0581 17.7009 18.9759 17.4707 18.9759H6.42031C6.19009 18.9759 5.99276 19.0581 5.82832 19.2226C5.69677 19.3541 5.63099 19.535 5.63099 19.7652C5.63099 19.9955 5.69677 20.1928 5.82832 20.3572C5.99276 20.4888 6.19009 20.5545 6.42031 20.5545H17.4707ZM7.45628 13.9934C8.70603 15.2102 10.2024 15.8187 11.9455 15.8187C13.6886 15.8187 15.1685 15.2102 16.3854 13.9934C17.6351 12.7436 18.26 11.2472 18.26 9.50415C18.26 7.76108 17.6351 6.28111 16.3854 5.06425C15.1685 3.8145 13.6886 3.18963 11.9455 3.18963C10.2024 3.18963 8.70603 3.8145 7.45628 5.06425C6.23942 6.28111 5.63099 7.76108 5.63099 9.50415C5.63099 11.2472 6.23942 12.7436 7.45628 13.9934ZM13.9681 5.26158C15.4481 5.95223 16.3196 7.10331 16.5827 8.71483H14.6588C14.593 7.36642 14.3628 6.21534 13.9681 5.26158Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Visa);

/***/ }),

/***/ "./assets/images/cultureImage.jpg":
/*!****************************************!*\
  !*** ./assets/images/cultureImage.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cultureImage-7f02db4417b0143e26709611affe5fb2.jpg";

/***/ }),

/***/ "./assets/images/emplPhoto.png":
/*!*************************************!*\
  !*** ./assets/images/emplPhoto.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/emplPhoto-1c17ee5ec694bc376de8dbd8ea60725c.png";

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

/***/ "./components/Accordion/Accordion.js":
/*!*******************************************!*\
  !*** ./components/Accordion/Accordion.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Accordion_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Accordion.scss */ "./components/Accordion/Accordion.scss");
/* harmony import */ var _Accordion_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Accordion_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _AccordionSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AccordionSection */ "./components/Accordion/AccordionSection.js");







var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\Accordion\\Accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





class Accordion extends react__WEBPACK_IMPORTED_MODULE_7__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onClick", label => {
      const {
        props: {
          allowMultipleOpen
        },
        state: {
          openSections
        }
      } = this;
      const isOpen = !!openSections[label];

      if (allowMultipleOpen) {
        this.setState({
          openSections: _objectSpread({}, openSections, {
            [label]: !isOpen
          })
        });
      } else {
        this.setState({
          openSections: {
            [label]: !isOpen
          }
        });
      }
    });

    const _openSections = {};
    this.props.children.forEach(child => {
      if (child.props.isOpen) {
        _openSections[child.props.label] = true;
      }
    });
    this.state = {
      openSections: _openSections
    };
  }

  render() {
    const {
      onClick,
      props: {
        children,
        subAccordion
      },
      state: {
        openSections
      }
    } = this;
    const AccordionClass = subAccordion ? 'subAccordion' : 'accordion';
    return __jsx("div", {
      className: AccordionClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, children.map((child, index) => __jsx(_AccordionSection__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: index,
      isOpen: !!openSections[child.props.label],
      label: child.props.label,
      onClick: onClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, child.props.children)));
  }

}

Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Accordion, "defaultProps", {
  allowMultipleOpen: false
});

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./components/Accordion/Accordion.scss":
/*!*********************************************!*\
  !*** ./components/Accordion/Accordion.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/Accordion/AccordionSection.js":
/*!**************************************************!*\
  !*** ./components/Accordion/AccordionSection.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_DropDownUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/DropDownUp */ "./assets/icons/DropDownUp.js");
/* harmony import */ var _assets_icons_DropDownDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/icons/DropDownDown */ "./assets/icons/DropDownDown.js");

var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\Accordion\\AccordionSection.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class AccordionSection extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onClick", () => {
      this.props.onClick(this.props.label);
    });
  }

  render() {
    const {
      onClick,
      props: {
        isOpen,
        label,
        children
      }
    } = this;
    return __jsx("div", {
      className: "accordionSection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, __jsx("div", {
      onClick: onClick,
      className: "accordionSection-panel",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, label, __jsx("div", {
      className: "accordionSection-icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, !isOpen && __jsx(_assets_icons_DropDownDown__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), isOpen && __jsx(_assets_icons_DropDownUp__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }))), isOpen && __jsx("div", {
      className: "accordionSection-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, children));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (AccordionSection);

/***/ }),

/***/ "./components/ArrowDown.js":
/*!*********************************!*\
  !*** ./components/ArrowDown.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\ArrowDown.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const ArrowDown = props => {
  return __jsx("div", {
    className: "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: undefined
  }, __jsx("svg", {
    className: "arrowDown",
    width: "24",
    height: "14",
    viewBox: "0 0 24 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: undefined
  }, __jsx("path", {
    d: "M13.1979 13.3919L23.302 3.28776C23.5451 3.0447 23.6666 2.74956 23.6666 2.40234C23.6666 2.05512 23.5451 1.75998 23.302 1.51693L22.1562 0.371092C21.9132 0.128036 21.618 0.00650868 21.2708 0.00650867C20.9236 -0.0282136 20.6284 0.0759531 20.3854 0.319009L12.3125 8.39193L4.23954 0.319008C3.99649 0.0759524 3.70135 -0.0282143 3.35413 0.00650788C3.0069 0.00650787 2.71176 0.128036 2.46871 0.371091L1.32288 1.51692C1.07982 1.75998 0.958292 2.05512 0.958292 2.40234C0.958292 2.74956 1.07982 3.0447 1.32288 3.28776L11.427 13.3919C11.6701 13.6697 11.9652 13.8086 12.3125 13.8086C12.6597 13.8086 12.9548 13.6697 13.1979 13.3919Z",
    fill: "#F5842D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ArrowDown);

/***/ }),

/***/ "./components/BenefitsList.js":
/*!************************************!*\
  !*** ./components/BenefitsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_benefits_Visa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/benefits/Visa */ "./assets/icons/benefits/Visa.js");
/* harmony import */ var _assets_icons_benefits_Relocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/benefits/Relocation */ "./assets/icons/benefits/Relocation.js");
/* harmony import */ var _assets_icons_benefits_Languages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/benefits/Languages */ "./assets/icons/benefits/Languages.js");
/* harmony import */ var _assets_icons_benefits_FurtherTraining__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/benefits/FurtherTraining */ "./assets/icons/benefits/FurtherTraining.js");
/* harmony import */ var _assets_icons_benefits_FlexibleWorkingHours__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/benefits/FlexibleWorkingHours */ "./assets/icons/benefits/FlexibleWorkingHours.js");
/* harmony import */ var _assets_icons_benefits_HomeOffice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/benefits/HomeOffice */ "./assets/icons/benefits/HomeOffice.js");
/* harmony import */ var _assets_icons_benefits_TeamSpirit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/benefits/TeamSpirit */ "./assets/icons/benefits/TeamSpirit.js");
/* harmony import */ var _assets_icons_benefits_Equipment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/benefits/Equipment */ "./assets/icons/benefits/Equipment.js");
/* harmony import */ var _assets_icons_benefits_Food__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/benefits/Food */ "./assets/icons/benefits/Food.js");
/* harmony import */ var _assets_icons_benefits_Parties__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/benefits/Parties */ "./assets/icons/benefits/Parties.js");
/* harmony import */ var _assets_icons_benefits_TeamEvents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/benefits/TeamEvents */ "./assets/icons/benefits/TeamEvents.js");
/* harmony import */ var _assets_icons_benefits_Studio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/icons/benefits/Studio */ "./assets/icons/benefits/Studio.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\BenefitsList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const benefits = [{
  icon: __jsx(_assets_icons_benefits_Visa__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }),
  title: "Visa",
  description: `Our visa assistance service guides you through the whole
          process and helps with tips and tricks to get the approvals
          and your visa as fast as possible.`
}, {
  icon: __jsx(_assets_icons_benefits_Relocation__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }),
  title: "Relocation",
  description: `We support your move to Berlin with e.g. flat hunting, paper
          work like local registration, setting up bank accounts etc.`
}, {
  icon: __jsx(_assets_icons_benefits_Languages__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }),
  title: "Language classes",
  description: `We pay your German lessons so you can order food auf Deutsch
          very fast and go right up to perfecting your business
          vocabulary.`
}, {
  icon: __jsx(_assets_icons_benefits_FurtherTraining__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }),
  title: "Further training",
  description: `A personal learning budget to spend on learning and
          development, including books, workshops, etc.`
}, {
  icon: __jsx(_assets_icons_benefits_FlexibleWorkingHours__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }),
  title: "Flexible working hours",
  description: `Productive hours differ individually. That’s why you're
          welcome to show up in the office whenever you're ready for
          it.`
}, {
  icon: __jsx(_assets_icons_benefits_HomeOffice__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }),
  title: "Home office",
  description: `Need to watch the kids or wait for a handicraftsman? No
          problem - we also offer the opportunity for home office.`
}, {
  icon: __jsx(_assets_icons_benefits_TeamSpirit__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: undefined
  }),
  title: "Team spirit",
  description: `Beyond our amazing parties and company events, the team
          further organizes activities themselves such as playing
          soccer together, a cooking group, a Japanese learning group,
          and much more.`
}, {
  icon: __jsx(_assets_icons_benefits_Equipment__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }),
  title: "Equipment",
  description: `Choose between the latest MacBooks or Windows Laptops at
          your choice. Furthermore our office features the latest
          projectors, cameras, testing devices, monitors - you name
          it.`
}, {
  icon: __jsx(_assets_icons_benefits_Food__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }),
  title: "Fresh fruits, snacks and drinks",
  description: `Enjoy fresh fruits, free coffee and a fully stocked fridge
          with cold Water, Juices, Coke, Club Mate, Beer etc. For the
          sweet-toothed we have snacks, chocolate and chips of course.`
}, {
  icon: __jsx(_assets_icons_benefits_Parties__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }),
  title: "Epic company parties",
  description: `Regular company parties to celebrate, including Carnival,
          Summer Party, Oktoberfest, Christmas Party`
}, {
  icon: __jsx(_assets_icons_benefits_TeamEvents__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }),
  title: "Team events",
  description: `We have regular Casual Fridays, Board Game Nights, Pub
          Quizzes, Team lunches, Company breakfasts and much more …`
}, {
  icon: __jsx(_assets_icons_benefits_Studio__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }),
  title: "Studio",
  description: `A super modern office with state of the art tech, based in
          the center of Berlin, quickly to reach from all destinations
          thanks to the excellent public transport connections.`
}];

const BenefitsList = props => {
  return __jsx("ul", {
    className: "benefits-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, benefits.map((benefit, index) => __jsx("li", {
    className: "benefits-item",
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: undefined
  }, __jsx("div", {
    className: "benefits-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, benefit.icon), __jsx("h5", {
    className: "benefits-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, benefit.title), __jsx("p", {
    className: "benefits-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, benefit.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (BenefitsList);

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

/***/ "./components/DropdownIndicator.js":
/*!*****************************************!*\
  !*** ./components/DropdownIndicator.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_DropDownUp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/DropDownUp */ "./assets/icons/DropDownUp.js");
/* harmony import */ var _assets_icons_DropDownDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/DropDownDown */ "./assets/icons/DropDownDown.js");

var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\DropdownIndicator.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const DropdownIndicator = props => {
  return react_select__WEBPACK_IMPORTED_MODULE_2__["components"].DropdownIndicator && __jsx(react_select__WEBPACK_IMPORTED_MODULE_2__["components"].DropdownIndicator, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.selectProps.menuIsOpen ? __jsx(_assets_icons_DropDownUp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }) : __jsx(_assets_icons_DropDownDown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (DropdownIndicator);

/***/ }),

/***/ "./components/FAQ/FAQ.js":
/*!*******************************!*\
  !*** ./components/FAQ/FAQ.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FAQ_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FAQ.scss */ "./components/FAQ/FAQ.scss");
/* harmony import */ var _FAQ_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FAQ_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Accordion/Accordion */ "./components/Accordion/Accordion.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\FAQ\\FAQ.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const FAQ = ({
  id
}) => {
  return __jsx("section", {
    className: "faq",
    id: id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h2", {
    className: "faq-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "FAQ"), __jsx(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("div", {
    label: "I. How does the relocation process work?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, "We help you with your relocation, from the Visa process till your apartment registration. Our HR team will give advice and support during the whole process step by step."), __jsx(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subAccordion: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    label: "1.Visa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), __jsx("div", {
    label: "2. Finding a flat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), __jsx("div", {
    label: "3. Paperwork",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))), __jsx("div", {
    label: "II. How long does the Visa process last?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."), __jsx(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__["default"], {
    subAccordion: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, __jsx("div", {
    label: "1.Visa",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), __jsx("div", {
    label: "2. Finding a flat",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), __jsx("div", {
    label: "3. Paperwork",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))), __jsx("div", {
    label: "III. What will my earnings after deductions be?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), __jsx("div", {
    label: "IV. Can I bring my family?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), __jsx("div", {
    label: "V. Which kind of Visa do I have to apply for?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")), __jsx("div", {
    label: "VI. Costs (Flat etc.)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (FAQ);

/***/ }),

/***/ "./components/FAQ/FAQ.scss":
/*!*********************************!*\
  !*** ./components/FAQ/FAQ.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./components/PositionCard/PositionCard.js":
/*!*************************************************!*\
  !*** ./components/PositionCard/PositionCard.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PositionCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PositionCard.scss */ "./components/PositionCard/PositionCard.scss");
/* harmony import */ var _PositionCard_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PositionCard_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_icons_Marker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/icons/Marker */ "./assets/icons/Marker.js");
var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\components\\PositionCard\\PositionCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const PositionCard = ({
  title,
  department,
  location,
  url
}) => {
  return __jsx("a", {
    href: url,
    target: "_blank",
    rel: "noreferrer noopener",
    className: "positionCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("p", {
    className: "accentText positionCard-category",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, department ? department : "Other Department"), __jsx("h4", {
    className: "positionCard-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, title), __jsx("p", {
    className: "positionCard-location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, location ? __jsx(_assets_icons_Marker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }) : null, location ? location : null));
};

/* harmony default export */ __webpack_exports__["default"] = (PositionCard);

/***/ }),

/***/ "./components/PositionCard/PositionCard.scss":
/*!***************************************************!*\
  !*** ./components/PositionCard/PositionCard.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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

/***/ "./pages/career.js":
/*!*************************!*\
  !*** ./pages/career.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_apiEndpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/apiEndpoints */ "./utils/apiEndpoints.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _utils_Helper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/Helper */ "./utils/Helper.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_LinkSmoothScroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/LinkSmoothScroll */ "./components/LinkSmoothScroll.js");
/* harmony import */ var _components_Breadcrumb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Breadcrumb */ "./components/Breadcrumb.js");
/* harmony import */ var _components_DropdownIndicator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/DropdownIndicator */ "./components/DropdownIndicator.js");
/* harmony import */ var _components_PositionCard_PositionCard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PositionCard/PositionCard */ "./components/PositionCard/PositionCard.js");
/* harmony import */ var _components_BenefitsList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/BenefitsList */ "./components/BenefitsList.js");
/* harmony import */ var _components_ArrowDown__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/ArrowDown */ "./components/ArrowDown.js");
/* harmony import */ var _assets_icons_Stars__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../assets/icons/Stars */ "./assets/icons/Stars.js");
/* harmony import */ var _assets_icons_GlassDoor__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../assets/icons/GlassDoor */ "./assets/icons/GlassDoor.js");
/* harmony import */ var _assets_images_seoImg_jpg__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../assets/images/seoImg.jpg */ "./assets/images/seoImg.jpg");
/* harmony import */ var _assets_images_seoImg_jpg__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_images_seoImg_jpg__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../assets/images/cultureImage.jpg */ "./assets/images/cultureImage.jpg");
/* harmony import */ var _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_images_emplPhoto_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/images/emplPhoto.png */ "./assets/images/emplPhoto.png");
/* harmony import */ var _assets_images_emplPhoto_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_images_emplPhoto_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _components_FAQ_FAQ__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../components/FAQ/FAQ */ "./components/FAQ/FAQ.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");








var _jsxFileName = "C:\\Users\\Bogomol\\Desktop\\softgames\\pages\\career.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




















const cultureSlides = [{
  image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
  caption: "Fresh fruits, snacks and drinks"
}, {
  image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
  caption: "Fresh fruits, snacks and drinks"
}, {
  image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
  caption: "Fresh fruits, snacks and drinks"
}];
const employeeStories = [{
  quote: "I was one of the first to join Softgames. Amazing to see this company grow and to develop together with it.",
  employeeName: "Claudia Winkel",
  employeeDepartment: "Finance",
  employeePhoto: _assets_images_emplPhoto_png__WEBPACK_IMPORTED_MODULE_24___default.a
}, {
  quote: "I was one of the first to join Softgames. Amazing to see this company grow and to develop together with it.",
  employeeName: "Claudia Winkel",
  employeeDepartment: "Finance",
  employeePhoto: _assets_images_emplPhoto_png__WEBPACK_IMPORTED_MODULE_24___default.a
}, {
  quote: "I was one of the first to join Softgames. Amazing to see this company grow and to develop together with it.",
  employeeName: "Claudia Winkel",
  employeeDepartment: "Finance",
  employeePhoto: _assets_images_emplPhoto_png__WEBPACK_IMPORTED_MODULE_24___default.a
}];
const offices = [{
  location: "Berlin, Germany",
  department: "HQ, Game Development",
  slides: [{
    image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
    caption: "Softgames"
  }, {
    image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
    caption: "Softgames"
  }, {
    image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
    caption: "Softgames"
  }]
}, {
  location: "Toronto, Canada",
  department: "Game Development",
  slides: [{
    image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
    caption: "Softgames"
  }, {
    image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
    caption: "Softgames"
  }, {
    image: _assets_images_cultureImage_jpg__WEBPACK_IMPORTED_MODULE_23___default.a,
    caption: "Softgames"
  }]
}];
const selectOptions = {
  components: {
    DropdownIndicator: _components_DropdownIndicator__WEBPACK_IMPORTED_MODULE_16__["default"]
  },
  styles: {
    option: (provided, state) => _objectSpread({}, provided, {
      color: "#333333",
      backgroundColor: state.isSelected ? "#EEEEEE" : state.isFocused ? "#EEEEEE" : "#fffff",
      border: "none",
      transition: "0.2s",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#EEEEEE"
      }
    }),
    control: provided => _objectSpread({}, provided, {
      border: "none",
      boxShadow: "none",
      cursor: "pointer"
    })
  }
};

const Career = props => {
  const helper = new _utils_Helper__WEBPACK_IMPORTED_MODULE_12__["default"]();
  const defaultDepartment = {
    value: "All departments",
    label: "All departments"
  };
  const defaultLocation = {
    value: "All locations",
    label: "All locations"
  };
  const {
    0: positions,
    1: setPositions
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]);
  const {
    0: filteredPositions,
    1: setFilteredPositions
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]);
  const {
    0: locations,
    1: setLocations
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]);
  const {
    0: departments,
    1: setDepartments
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])([]);
  const {
    0: selectedLocation,
    1: setSelectedLocation
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(defaultLocation);
  const {
    0: selectedDepartment,
    1: setSelectedDepartment
  } = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(defaultDepartment);
  const didMountRef = Object(react__WEBPACK_IMPORTED_MODULE_8__["useRef"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const CancelToken = axios__WEBPACK_IMPORTED_MODULE_9___default.a.CancelToken;
    const source = CancelToken.source();
    didMountRef.current = true;

    const loadData = () => {
      try {
        axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(_utils_apiEndpoints__WEBPACK_IMPORTED_MODULE_10__["default"].positions, {
          cancelToken: source.token
        }).then(({
          data: {
            offers: positions
          }
        }) => {
          const locations = [],
                departments = [];
          positions.forEach(position => {
            if (!locations.some(loc => {
              return loc.value === position.location;
            })) {
              locations.push({
                value: position.location || "Other Location",
                label: position.location || "Other Location"
              });
            }

            if (!departments.some(depart => {
              return depart.value === position.department;
            })) {
              departments.push({
                value: position.department || "Other Department",
                label: position.department || "Other Department"
              });
            }
          });
          setPositions(positions);
          setFilteredPositions(positions);
          setLocations(locations);
          setDepartments(departments);
        });
      } catch (error) {
        if (axios__WEBPACK_IMPORTED_MODULE_9___default.a.isCancel(error)) {
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
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(() => {
    const filteredPositionsByLocation = selectedLocation.value === defaultLocation.value ? positions : helper.getFilteredPostsByTerm(positions, "location", selectedLocation.value);
    const filteredPositions = selectedDepartment.value === defaultDepartment.value ? filteredPositionsByLocation : helper.getFilteredPostsByTerm(filteredPositionsByLocation, "department", selectedDepartment.value, "Other Department");
    setFilteredPositions(filteredPositions);
  }, [selectedLocation.value, selectedDepartment.value]);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_26__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: undefined
  }, __jsx(_components_Breadcrumb__WEBPACK_IMPORTED_MODULE_15__["default"], {
    items: [{
      name: "Home",
      slug: "/"
    }, {
      name: "Career",
      slug: "/career"
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: undefined
  })))), __jsx("section", {
    className: "simpleBlock aboutUsBlock joinUsBlock withIllustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: undefined
  }, __jsx("div", {
    className: "aboutUsBlock-img withGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: undefined
  }, __jsx("img", {
    src: _assets_images_seoImg_jpg__WEBPACK_IMPORTED_MODULE_22___default.a,
    alt: "Softgames",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: undefined
  }))), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, __jsx("h2", {
    className: "simpleBlock-title joinUsBlock-title h2--big",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: undefined
  }, "Join", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: undefined
  }), "Our Team!"), __jsx("p", {
    className: "simpleBlock-description joinUsBlock-description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }, "Become a part of our success story and change the way people discover, play and share mobile games today."), __jsx(_components_LinkSmoothScroll__WEBPACK_IMPORTED_MODULE_14__["default"], {
    href: "/career/#job-openings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: undefined
  }, __jsx("a", {
    className: "btn btn--primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: undefined
  }, "Open Positions")))))), __jsx(_components_LinkSmoothScroll__WEBPACK_IMPORTED_MODULE_14__["default"], {
    href: "/career/#job-openings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: undefined
  }, __jsx(_components_ArrowDown__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: undefined
  }))), __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-7 offset-lg-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, __jsx("div", {
    className: "employerCard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, __jsx("div", {
    className: "employerCard-imgWrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, __jsx(_assets_icons_GlassDoor__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: undefined
  })), __jsx("div", {
    className: "employerCard-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: undefined
  }, __jsx(_assets_icons_Stars__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: undefined
  }), __jsx("h5", {
    className: "employerCard-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: undefined
  }, "SOFTGAMES is a superstar employer according to Glassdoor")))))), __jsx("div", {
    id: "job-openings",
    className: "openPositions",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, __jsx("h2", {
    className: "openPositions-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }, "Open Positions"), __jsx("div", {
    className: "filterbar openPositions-filterbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  }, "Jobs available in"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
    options: [defaultLocation, ...locations],
    className: "filterbar-select-location-container",
    classNamePrefix: "filterbar-select",
    value: selectedLocation,
    onChange: newLocation => {
      setSelectedLocation(newLocation);
    }
  }, selectOptions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  })), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: undefined
  }, "and in"), __jsx(react_select__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__["default"])({
    options: [defaultDepartment, ...departments],
    className: "filterbar-select-department-container",
    classNamePrefix: "filterbar-select",
    value: selectedDepartment,
    onChange: newDepartment => {
      setSelectedDepartment(newDepartment);
    }
  }, selectOptions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }))))), __jsx("div", {
    id: "openPositions",
    className: "row latestPositions-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313
    },
    __self: undefined
  }, filteredPositions.length ? filteredPositions.map(position => {
    return __jsx("div", {
      className: "col-md-6 col-xl-4",
      key: position.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317
      },
      __self: undefined
    }, __jsx(_components_PositionCard_PositionCard__WEBPACK_IMPORTED_MODULE_17__["default"], {
      title: position.title,
      department: position.department,
      location: position.location,
      url: position.careers_url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318
      },
      __self: undefined
    }));
  }) : __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: undefined
  }, __jsx("h2", {
    className: "mx-auto text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: undefined
  }, "no positions"))))), __jsx("section", {
    id: "culture-values",
    className: "culture",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, __jsx("h2", {
    className: "culture-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: undefined
  }, "Culture & Values"))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-10 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: "slider slider3 culture-slider",
    customPaging: function (i) {
      return __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }, __jsx("img", {
        src: cultureSlides[i].image,
        alt: cultureSlides[i].caption,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        __self: this
      }));
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349
    },
    __self: undefined
  }, cultureSlides.map((slide, index) => {
    return __jsx("div", {
      className: "slider3-slide",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: undefined
    }, __jsx("img", {
      src: slide.image,
      alt: slide.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: undefined
    }), __jsx("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372
      },
      __self: undefined
    }, slide.caption));
  })))))), __jsx("section", {
    id: "application-process",
    className: "employeeStories",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: undefined
  }, __jsx("h2", {
    className: "employeeStories-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: undefined
  }, "Employee Stories"))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-10 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: "slider slider2 employeeStories-slider",
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390
    },
    __self: undefined
  }, employeeStories.map((slide, index) => {
    return __jsx("div", {
      className: "slider2-slide",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401
      },
      __self: undefined
    }, __jsx("div", {
      className: "employeeStories-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402
      },
      __self: undefined
    }, __jsx("div", {
      className: "employeeStories-quote",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403
      },
      __self: undefined
    }, slide.quote), __jsx("div", {
      className: "employeeStories-employee",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 406
      },
      __self: undefined
    }, __jsx("div", {
      className: "employeeStories-photoWrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 407
      },
      __self: undefined
    }, __jsx("img", {
      src: slide.employeePhoto,
      alt: slide.employeeName,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 408
      },
      __self: undefined
    })), __jsx("div", {
      className: "employeeStories-meta",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413
      },
      __self: undefined
    }, __jsx("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414
      },
      __self: undefined
    }, slide.employeeName, ","), __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415
      },
      __self: undefined
    }, slide.employeeDepartment)))));
  })))))), __jsx("section", {
    id: "benefits",
    className: "benefits withIllustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: undefined
  }, __jsx("h2", {
    className: "benefits-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: undefined
  }, "Benefits"), __jsx("p", {
    className: "benefits-subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: undefined
  }, "Working and living in Germany has many advantages as e.g. a high job security, great work-life balance and one of the best universal health care systems in the world!"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: undefined
  }, "Further our Berlin team benefits from:"))), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: undefined
  }, __jsx(_components_BenefitsList__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: undefined
  }))))), __jsx("section", {
    id: "global-offices",
    className: "offices withIllustration",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 447
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 449
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-8 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: undefined
  }, __jsx("h2", {
    className: "offices-heading withGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 451
    },
    __self: undefined
  }, "Global Offices"), __jsx("p", {
    className: "offices-subheading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 452
    },
    __self: undefined
  }, "SOFTGAMES is made up of individuals from 25+ different countries. We believe in proactive, independent teams with the freedom to take initiative, challenge the status quo, and bring solutions to improve what they think is best for their players, our games and the company at large."))), offices.map((office, index) => __jsx("div", {
    className: "row office",
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463
    },
    __self: undefined
  }, __jsx("h4", {
    className: "office-location",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 464
    },
    __self: undefined
  }, office.location), __jsx("p", {
    className: "office-department",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 467
    },
    __self: undefined
  }, office.department)), __jsx("div", {
    className: "col-md-10 mx-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: undefined
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_11___default.a, {
    className: "slider slider3 culture-slider",
    customPaging: function (i) {
      return __jsx("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 476
        },
        __self: this
      }, __jsx("img", {
        src: office.slides[i].image,
        alt: office.slides[i].caption,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 477
        },
        __self: this
      }));
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 472
    },
    __self: undefined
  }, office.slides.map((slide, index) => {
    return __jsx("div", {
      className: "office-slide",
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493
      },
      __self: undefined
    }, __jsx("img", {
      src: slide.image,
      alt: slide.caption,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494
      },
      __self: undefined
    }));
  }))))))), __jsx(_components_FAQ_FAQ__WEBPACK_IMPORTED_MODULE_25__["default"], {
    id: "FAQ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Career);

/***/ }),

/***/ "./utils/Helper.js":
/*!*************************!*\
  !*** ./utils/Helper.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");


class Helper {
  constructor() {
    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "formatDate", date => {
      const newDate = new Date(Date.parse(date));
      return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear().toString().slice(2, 4)}`;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deleteEmptyPTags", string => string.replace(/<p>&nbsp;<\/p>/gi, ""));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "getFilteredPostsByTerm", (posts, term, value, defaultValue) => {
      return posts.filter(postItem => {
        if (value === defaultValue && !postItem[term]) {
          return postItem;
        }

        if (postItem[term] === value) {
          return postItem;
        }
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Helper);

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

/***/ 8:
/*!*******************************!*\
  !*** multi ./pages/career.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Bogomol\Desktop\softgames\pages\career.js */"./pages/career.js");


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

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

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

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

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
//# sourceMappingURL=career.js.map