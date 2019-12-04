webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/components/Home/components/Products/Products.js":
/*!*******************************************************************!*\
  !*** ./src/pages/components/Home/components/Products/Products.js ***!
  \*******************************************************************/
/*! exports provided: Products, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);







var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var Products =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Products, _Component);

  function Products() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Products);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Products)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "products", [{
      name: 'web',
      content: 'Web'
    }, {
      name: 'mobile',
      content: 'Mobile'
    }, {
      name: 'iot',
      content: 'IoT'
    }, {
      name: 'blockchain',
      content: 'Blockchain'
    }]);

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Products, [{
    key: "render",
    value: function render() {
      return __jsx("section", {
        className: "home__products"
      }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "1300px",
        top: "1000px",
        left: "660px",
        speed: "0.2"
      }), __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: "320px",
        top: "560px",
        left: "-1300px",
        speed: "0.8"
      }), __jsx("h3", null, "Products We Build"), __jsx("div", {
        className: "container"
      }, this.products.map(function (product, index) {
        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/services?activeTab=".concat(product.name),
          key: index
        }, __jsx("a", {
          rel: "noopener noreferrer",
          className: "link-block"
        }, __jsx("img", {
          src: "assets/icons/products-" + product.name + ".svg",
          alt: product.name
        }), __jsx("span", null, product.content)));
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/portfolio"
      }, __jsx("button", {
        className: "btn"
      }, "Featured Products")));
    }
  }]);

  return Products;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);
/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ })

})
//# sourceMappingURL=index.js.7ff22a3b7ad18c03d51f.hot-update.js.map