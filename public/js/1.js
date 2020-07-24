(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/Dashboard/Index.js":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Dashboard/Index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/Layout */ "./resources/js/shared/Layout.js");



var Index = function Index(_ref) {
  var fName = _ref.fName,
      lName = _ref.lName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Index"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Hello ", "".concat(fName, " ").concat(lName), ", welcome to your first Inertia app!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./resources/js/shared/Layout.js":
/*!***************************************!*\
  !*** ./resources/js/shared/Layout.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);


function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = title;
  }, [title]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/about"
  }, "About"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    href: "/contact"
  }, "Contact")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", null, children));
}

/***/ })

}]);