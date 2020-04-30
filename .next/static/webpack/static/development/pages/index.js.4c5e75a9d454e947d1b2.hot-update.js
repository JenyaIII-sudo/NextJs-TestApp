webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Prices.js":
/*!******************************!*\
  !*** ./components/Prices.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/home/evgeni/Desktop/bitzprice-master/components/Prices.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Prices = function Prices() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currency: "USD"
  }),
      coins = _useState[0],
      setCoins = _useState[1];

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("ul", {
    className: "list-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("li", {
    className: "list-group-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "Bitcoin rate for ", _this.props.bpi[_this.state.currency].description, " :", __jsx("span", {
    className: "badge badge-primary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, _this.props.bpi[_this.state.currency].code), __jsx("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, _this.props.bpi[_this.state.currency].rate))), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx("select", {
    onChange: function onChange(e) {
      return _this.setState({
        currency: e.target.value
      });
    },
    className: "form-control",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("option", {
    value: "USD",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "USD"), __jsx("option", {
    value: "GBP",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "GBP"), __jsx("option", {
    value: "EUR",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "EUR")));
};

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
false

})
//# sourceMappingURL=index.js.4c5e75a9d454e947d1b2.hot-update.js.map