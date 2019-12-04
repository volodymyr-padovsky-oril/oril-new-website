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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

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
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

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

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-tabs/style/react-tabs.css":
/*!******************************************************!*\
  !*** ./node_modules/react-tabs/style/react-tabs.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/actions/helper.js":
/*!*******************************!*\
  !*** ./src/actions/helper.js ***!
  \*******************************/
/*! exports provided: OPEN_SNACKBAR, CLOSE_SNACKBAR, openSnackbar, closeSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SNACKBAR", function() { return OPEN_SNACKBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SNACKBAR", function() { return CLOSE_SNACKBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSnackbar", function() { return openSnackbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSnackbar", function() { return closeSnackbar; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
const openSnackbar = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(OPEN_SNACKBAR);
const closeSnackbar = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(CLOSE_SNACKBAR);

/***/ }),

/***/ "./src/actions/message.js":
/*!********************************!*\
  !*** ./src/actions/message.js ***!
  \********************************/
/*! exports provided: SEND_GET_IN_TOUCH_MESSAGE_REQUEST, SEND_GET_IN_TOUCH_MESSAGE_SUCCESS, SEND_GET_IN_TOUCH_MESSAGE_FAILURE, sendGetInTouchMessageRequest, sendGetInTouchMessageSuccess, sendGetInTouchMessageFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_GET_IN_TOUCH_MESSAGE_REQUEST", function() { return SEND_GET_IN_TOUCH_MESSAGE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_GET_IN_TOUCH_MESSAGE_SUCCESS", function() { return SEND_GET_IN_TOUCH_MESSAGE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEND_GET_IN_TOUCH_MESSAGE_FAILURE", function() { return SEND_GET_IN_TOUCH_MESSAGE_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendGetInTouchMessageRequest", function() { return sendGetInTouchMessageRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendGetInTouchMessageSuccess", function() { return sendGetInTouchMessageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendGetInTouchMessageFailure", function() { return sendGetInTouchMessageFailure; });
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_0__);

const SEND_GET_IN_TOUCH_MESSAGE_REQUEST = 'SEND_GET_IN_TOUCH_MESSAGE_REQUEST';
const SEND_GET_IN_TOUCH_MESSAGE_SUCCESS = 'SEND_GET_IN_TOUCH_MESSAGE_SUCCESS';
const SEND_GET_IN_TOUCH_MESSAGE_FAILURE = 'SEND_GET_IN_TOUCH_MESSAGE_FAILURE';
const sendGetInTouchMessageRequest = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEND_GET_IN_TOUCH_MESSAGE_REQUEST);
const sendGetInTouchMessageSuccess = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEND_GET_IN_TOUCH_MESSAGE_SUCCESS);
const sendGetInTouchMessageFailure = Object(redux_actions__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEND_GET_IN_TOUCH_MESSAGE_FAILURE);

/***/ }),

/***/ "./src/commons/BaseTabs/index.js":
/*!***************************************!*\
  !*** ./src/commons/BaseTabs/index.js ***!
  \***************************************/
/*! exports provided: BaseTabs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseTabs", function() { return BaseTabs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/main */ "./src/commons/utils/main.js");
/* harmony import */ var _utils_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/scroll */ "./src/commons/utils/scroll.js");
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-tabs/style/react-tabs.css */ "./node_modules/react-tabs/style/react-tabs.css");
/* harmony import */ var react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_tabs_style_react_tabs_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.scss */ "./src/commons/BaseTabs/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_7__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









const CustomTab = ({
  children,
  activeClassName
}) => __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tab"], {
  className: `react-tabs__tab ${activeClassName}`
}, __jsx("div", null, __jsx("div", null, children)));

CustomTab.tabsRole = 'Tab';
class BaseTabs extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
    this.startIndex = props.startIndex || 0;
    this.state = {
      activeTab: 0,
      show: true
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.setState({
      activeTab: this.startIndex
    });
    this.tabsContainer = document.querySelector('.react-tabs');
    this.tabList = document.querySelector('.react-tabs__tab-list');
    this.tabs = document.querySelectorAll('.react-tabs__tab');
    this.div = document.createElement('div');
    this.div.classList.add('sub-template');
    const query = Object(query_string__WEBPACK_IMPORTED_MODULE_3__["parse"])(window.location.search);
    const tabIndex = this.props.tabs.findIndex(tab => tab.id === query.activeTab);

    if (tabIndex !== -1) {
      this.handleSelect(tabIndex);
    }

    Object(_utils_main__WEBPACK_IMPORTED_MODULE_4__["later"])().then(() => this.setActiveTabBorders());
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const offsetTop = window.innerWidth < 768 ? 0 : 20;

    if (this.tabsContainer) {
      const template = document.querySelector('.sub-template');
      const condition = Math.floor(this.tabsContainer.getBoundingClientRect().top > offsetTop);

      if (condition) {
        if (template) {
          this.tabList.parentNode.removeChild(template);
        }
      } else {
        if (!(typeof template != 'undefined' && template != null)) {
          this.tabList.parentNode.insertBefore(this.div, this.tabList.nextSibling);
        }
      }

      this.setState({
        show: condition
      });
    }
  }

  setActiveTabBorders() {
    const selectedTab = document.querySelector('.react-tabs__tab--selected');
    const tabsCount = this.tabs.length;
    const activeClass = 'react-tabs__tab--active';
    let selectedTabIndex = 0;

    for (let i = 0; i < this.tabs.length; i++) {
      this.tabs[i].classList.remove(activeClass);

      if (this.tabs[i] === selectedTab) {
        selectedTabIndex = i;
      }
    }

    switch (selectedTabIndex) {
      case 0:
        this.tabs[0].classList.add(activeClass);
        break;

      case tabsCount:
        this.tabs[tabsCount].classList.add(activeClass);
        break;

      default:
        selectedTab.classList.add(activeClass);
        selectedTab.previousElementSibling.classList.add(activeClass);
        break;
    }
  }

  handleSelect(index) {
    this.setState({
      activeTab: index
    });
    this.props.history.push({
      pathname: `/${this.props.pathname}`,
      search: `?activeTab=${this.props.tabs[index].id}`
    });
    Object(_utils_main__WEBPACK_IMPORTED_MODULE_4__["later"])().then(() => this.setActiveTabBorders());
    let selector = '#development';

    switch (this.props.pathname) {
      case 'services':
        selector = '#development';
        break;

      case 'portfolio':
        selector = '#products';
        break;

      default:
        break;
    }

    if (document.querySelector(selector)) {
      Object(_utils_scroll__WEBPACK_IMPORTED_MODULE_5__["scrollTo"])(selector);
    }
  }

  render() {
    return __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      onSelect: this.handleSelect,
      selectedIndex: this.state.activeTab
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabList"], {
      className: `react-tabs__tab-list ${this.state.show ? '' : 'sticky'}`
    }, this.props.tabs.map((tab, index) => __jsx(CustomTab, {
      activeClassName: this.state.activeTab === index ? 'react-tabs__tab--selected' : '',
      key: index
    }, tab.title))), this.props.tabs.map((tab, index) => __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_2__["TabPanel"], {
      key: index
    }, tab.component())));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(BaseTabs));

/***/ }),

/***/ "./src/commons/BaseTabs/index.scss":
/*!*****************************************!*\
  !*** ./src/commons/BaseTabs/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/commons/Bubble/index.js":
/*!*************************************!*\
  !*** ./src/commons/Bubble/index.js ***!
  \*************************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index.scss */ "./src/commons/Bubble/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_11__);










var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




class Bubble extends react__WEBPACK_IMPORTED_MODULE_10__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "scrolled", void 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "_isMounted", false);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(this, "initialSizes", void 0);

    this.state = _objectSpread({}, props);
  }

  componentDidMount() {
    this._isMounted = true;
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('resize', this.setBubbleSizes.bind(this));
    this.initialSizes = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_8___default()({
      size: this.state.size,
      top: this.state.top || '0px',
      left: this.state.left || '0px',
      right: this.state.right || '0px',
      bottom: this.state.bottom || '0px'
    });
    this.setBubbleSizes();
  }

  setBubbleSizes() {
    let size = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(this.initialSizes.size);

    let right = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(this.initialSizes.right);

    let left = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(this.initialSizes.left);

    let top = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(this.initialSizes.top);

    if (window.innerWidth < 430) {
      size *= 0.4;
      right *= 0.4;
      left *= 0.4;
      top *= 0.5;
    } else if (window.innerWidth < 576) {
      size *= 0.7;
      right *= 0.6;
      left *= 0.6;
      top *= 0.6;
    } else if (window.innerWidth < 768) {
      size *= 0.8;
      right *= 0.8;
      left *= 0.8;
    } else if (window.innerWidth < 1240) {
      size *= 0.8;
      right *= 0.85;
      left *= 0.85;
    }

    this.setState({
      size: size + 'px',
      right: right + 'px',
      left: left + 'px',
      top: top + 'px'
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (this._isMounted) {
      let scroll = window.pageYOffset || document.documentElement.scrollTop;

      if (!this.scrolled) {
        this.updatePosition(scroll);
      } else {
        const scrolling = this.scrolled - scroll;
        this.setPosition(scrolling);
      }

      this.scrolled = scroll;
    }
  }

  setPosition(scrolling) {
    const newPosition = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6___default()(this.state.top) + scrolling * _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_6___default()(this.state.speed) + 'px';
    this.setState({
      top: newPosition
    });
  }

  updatePosition() {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll) {
      this.setPosition(-scroll);
    }
  }

  render() {
    const styles = {
      height: this.state.size,
      width: this.state.size,
      top: this.state.top || '0px',
      left: this.state.left || '0px',
      right: this.state.right || '0px',
      bottom: this.state.bottom || '0px'
    };
    return __jsx("div", {
      className: "bubble_wrapper"
    }, __jsx("div", {
      className: "bubble",
      style: styles
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Bubble);

/***/ }),

/***/ "./src/commons/Bubble/index.scss":
/*!***************************************!*\
  !*** ./src/commons/Bubble/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/commons/Footer/index.js":
/*!*************************************!*\
  !*** ./src/commons/Footer/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.scss */ "./src/commons/Footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (props => {
  const redirect = e => {
    const elem = e.target;
    props.redirect(elem.pathname);
    window.scrollTo(0, 0);
  };

  return __jsx("footer", null, __jsx("div", {
    className: "container"
  }, __jsx("div", {
    className: "content"
  }, __jsx("div", {
    className: "nav-wrapper"
  }, __jsx("img", {
    src: "assets/icons/logo-white-nolabel.svg",
    alt: "logo",
    className: "logo-white"
  }), __jsx("nav", {
    className: "nav-footer"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/home"
  }, __jsx("a", {
    className: "nav_item",
    onClick: redirect
  }, "Home")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/portfolio"
  }, __jsx("a", {
    className: "nav_item",
    onClick: redirect
  }, "Portfolio")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog"
  }, __jsx("a", {
    className: "nav_item",
    onClick: redirect
  }, "Blog")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services"
  }, __jsx("a", {
    className: "nav_item",
    onClick: redirect
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact"
  }, __jsx("a", {
    className: "nav_item",
    onClick: redirect
  }, "Contact Us")))), __jsx("div", {
    className: "copyright"
  }, __jsx("p", null, "\xA9 2019. Oril Inc."), __jsx("p", null, "All rights reserved")))));
});

/***/ }),

/***/ "./src/commons/Footer/index.scss":
/*!***************************************!*\
  !*** ./src/commons/Footer/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/commons/Form/index.js":
/*!***********************************!*\
  !*** ./src/commons/Form/index.js ***!
  \***********************************/
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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/commons/Form/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _actions_message__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/message */ "./src/actions/message.js");








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }






class Form extends react__WEBPACK_IMPORTED_MODULE_8__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "handleInputChange", state => {
      const formErrors = {
        name: '',
        email: '',
        message: ''
      };
      this.setState(_objectSpread({}, state, {
        formErrors
      }));
      this.removeErrorClasses();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "validateName", name => {
      let nameValid = name.length > 0;

      let formErrors = _objectSpread({}, this.state.formErrors);

      formErrors.name = nameValid ? null : 'Name is required';
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a(resolve => {
        this.setState({
          nameValid,
          formErrors
        }, () => {
          resolve();
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "validateEmail", email => {
      let emailValid = email.length > 0;

      const formErrors = _objectSpread({}, this.state.formErrors);

      formErrors.email = emailValid ? null : 'Email is required';

      if (!emailValid) {
        return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a(resolve => {
          this.setState({
            emailValid,
            formErrors
          }, () => {
            resolve();
          });
        });
      }

      emailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      formErrors.email = emailValid ? null : 'Email is invalid';
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a(resolve => {
        this.setState({
          emailValid,
          formErrors
        }, () => {
          resolve();
        });
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "validateMessage", message => {
      const messageValid = message.length > 0;

      const formErrors = _objectSpread({}, this.state.formErrors);

      formErrors.message = messageValid ? null : 'Message is required';
      return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_6___default.a(resolve => {
        this.setState({
          messageValid,
          formErrors
        }, () => {
          resolve();
        });
      });
    });

    this.nameInput = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    this.emailInput = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    this.messageInput = react__WEBPACK_IMPORTED_MODULE_8___default.a.createRef();
    this.state = {
      name: '',
      email: '',
      message: '',
      formErrors: {
        name: '',
        email: '',
        message: ''
      },
      nameValid: true,
      emailValid: true,
      messageValid: true,
      formValid: false
    };
  }

  async validateForm() {
    await this.validateName(this.state.name);
    await this.validateEmail(this.state.email);
    await this.validateMessage(this.state.message);
    this.setState({
      formValid: this.state.nameValid && this.state.emailValid && this.state.messageValid
    });
    return this.state;
  }

  hasError(valid) {
    return valid ? '' : 'invalid';
  }

  removeErrorClasses() {
    this.nameInput.current.classList.remove('invalid');
    this.emailInput.current.classList.remove('invalid');
    this.messageInput.current.classList.remove('invalid');
  }

  async onSubmit(e) {
    const {
      sendMessageRequest
    } = this.props;
    const {
      email,
      name,
      message
    } = this.state;
    e.preventDefault();
    await this.validateForm();
    const userInfo = {
      name: name,
      email: email,
      message: message
    };

    if (this.state.formValid) {
      sendMessageRequest({
        email,
        name,
        message
      });
    }

    this.setState({
      name: '',
      email: '',
      message: ''
    });
    console.log(userInfo);
  }

  render() {
    return __jsx("form", {
      onSubmit: this.onSubmit.bind(this)
    }, __jsx("div", {
      className: `input-field ${this.hasError(this.state.nameValid)}`,
      ref: this.nameInput
    }, __jsx("input", {
      type: "text",
      name: "name",
      id: "name",
      autoComplete: "off",
      value: this.state.name,
      onChange: event => this.handleInputChange({
        name: event.target.value
      }),
      className: this.state.name ? 'has-data' : null
    }), __jsx("label", {
      htmlFor: "name"
    }, "Name"), __jsx("div", {
      className: "error"
    }, this.state.formErrors.name ? this.state.formErrors.name : null)), __jsx("div", {
      className: `input-field ${this.hasError(this.state.nameValid)}`,
      ref: this.emailInput
    }, __jsx("input", {
      type: "text",
      name: "email",
      id: "email",
      autoComplete: "off",
      value: this.state.email,
      onChange: event => this.handleInputChange({
        email: event.target.value
      }),
      className: this.state.email ? 'has-data' : null
    }), __jsx("label", {
      htmlFor: "email"
    }, "E-Mail"), __jsx("div", {
      className: "error"
    }, this.state.formErrors.email ? this.state.formErrors.email : null)), __jsx("div", {
      className: `textarea-field ${this.hasError(this.state.nameValid)}`,
      ref: this.messageInput
    }, __jsx("textarea", {
      placeholder: "Message...",
      name: "message",
      value: this.state.message,
      onChange: event => this.handleInputChange({
        message: event.target.value
      }),
      className: this.state.message ? 'has-data' : null
    }), __jsx("div", {
      className: "error"
    }, this.state.formErrors.message ? this.state.formErrors.message : null)), __jsx("div", {
      className: "submit-field"
    }, __jsx("button", {
      type: "submit"
    }, "Send")));
  }

}

const mapDispatchToProps = dispatch => ({
  sendMessageRequest: message => {
    dispatch(Object(_actions_message__WEBPACK_IMPORTED_MODULE_11__["sendGetInTouchMessageRequest"])(message));
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(null, mapDispatchToProps)(Form));

/***/ }),

/***/ "./src/commons/Form/index.scss":
/*!*************************************!*\
  !*** ./src/commons/Form/index.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/commons/Header/CompanyInfo.js":
/*!*******************************************!*\
  !*** ./src/commons/Header/CompanyInfo.js ***!
  \*******************************************/
/*! exports provided: CompanyInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyInfo", function() { return CompanyInfo; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

class CompanyInfo extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "socials", [{
      link: 'https://www.linkedin.com/company/oril-software',
      name: 'LinkedIn'
    }, {
      link: 'https://www.facebook.com/orilsoftware',
      name: 'Facebook'
    }, {
      link: 'https://medium.com/oril',
      name: 'Medium'
    }, {
      link: 'https://www.instagram.com/orilsoftware',
      name: 'Instagram'
    }, {
      link: 'https://www.behance.net/oril-software',
      name: 'Behance'
    }, {
      link: 'https://twitter.com/orilsoftware',
      name: 'Twitter'
    }]);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "collapse-template__content__info"
    }, __jsx("div", null, __jsx("p", {
      className: "collapse-template__content__info--title"
    }, "Address"), __jsx("a", {
      href: "https://goo.gl/maps/PWW2kZmqFzB2",
      target: "_blank",
      rel: "noopener noreferrer",
      className: "collapse-template__content__info--text"
    }, "68 Jay Street Brooklyn, NY, 11201")), __jsx("div", null, __jsx("p", {
      className: "collapse-template__content__info--title"
    }, "Inquires & Information"), __jsx("a", {
      href: "mailto:contact@oril.co",
      className: "collapse-template__content__info--text",
      rel: "noopener noreferrer"
    }, "contact@oril.co"))), __jsx("div", {
      className: "collapse-template__content__socials"
    }, this.socials.map((item, index) => {
      return __jsx("a", {
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        key: 'social-' + index
      }, item.name);
    })), __jsx("div", {
      className: "collapse-template__content__footer"
    }, __jsx("p", null, "\xA9 2019, Oril Inc."), __jsx("p", null, "All rights reserved")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (CompanyInfo);

/***/ }),

/***/ "./src/commons/Header/index.js":
/*!*************************************!*\
  !*** ./src/commons/Header/index.js ***!
  \*************************************/
/*! exports provided: Header, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CompanyInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompanyInfo */ "./src/commons/Header/CompanyInfo.js");
/* harmony import */ var _Bubble__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Bubble */ "./src/commons/Bubble/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/commons/Header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





class Header extends react__WEBPACK_IMPORTED_MODULE_2__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "navLinks", [{
      name: 'Home',
      to: '/home',
      internal: true
    }, {
      name: 'Services',
      to: '/services',
      internal: true
    }, {
      name: 'Portfolio',
      to: '/portfolio',
      internal: true
    }, {
      name: 'Blog',
      to: 'http://52.87.212.251/',
      internal: false
    }, {
      name: 'Contact Us',
      to: '/contact',
      internal: true
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "brand", {
      name: 'ORIL',
      to: '/'
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "lastScrollTop", 0);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "NavLinks", () => this.navLinks.map((link, index) => link.internal ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: link.to,
      key: index
    }, __jsx("a", {
      className: "nav_item",
      activeClassName: "active",
      onClick: this.redirect
    }, link.name)) : __jsx("a", {
      href: link.to,
      key: index,
      className: "nav_item",
      rel: "noopener noreferrer"
    }, link.name)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "redirect", e => {
      const elem = e.target;
      this.props.redirect(elem.pathname);
      window.scrollTo(0, 0);

      if (this.state.overlayActive) {
        this.toggleHamburger();
        this.collapse();
      }
    });

    this.state = {
      overlayActive: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  init() {
    const hamburger = document.querySelector('[data-toggle="collapse"]');
    const selector = hamburger.getAttribute('data-target');
    hamburger.addEventListener('click', () => {
      collapse(selector, 'toggle');
    }, false);

    const collapse = function (selector, cmd) {
      const fnmap = {
        'toggle': 'toggle',
        'show': 'add',
        'hide': 'remove'
      };

      const targets = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(document.querySelectorAll(selector));

      targets.forEach(target => target.classList[fnmap[cmd]]('show'));
    };

    this.collapse = collapse.bind(this, selector, 'hide');

    window.onresize = () => {
      if (window.outerWidth >= 768 && this.state.overlayActive) {
        this.setState({
          overlayActive: false
        }, () => this.collapse());
      }
    };
  }

  componentDidMount() {
    this.navbar = document.querySelector('header');
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('touchmove', this.handleScroll);
    this.init();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('touchmove', this.handleScroll);
  }

  toggleHamburger() {
    this.setState({
      overlayActive: !this.state.overlayActive
    }, () => {
      document.body.style.overflow = this.state.overlayActive ? 'hidden' : '';
    });
  }

  handleScroll() {
    const scrollTop = window.scrollY;
    const navBarHeight = this.navbar.offsetHeight;
    const currentScrollTop = scrollTop;

    if (this.lastScrollTop < currentScrollTop && scrollTop > navBarHeight + navBarHeight) {
      this.navbar.classList.add('hidden');
    } else if (this.lastScrollTop > currentScrollTop && !(scrollTop <= navBarHeight)) {
      this.navbar.classList.remove('hidden');
    }

    this.lastScrollTop = currentScrollTop;
  }

  render() {
    return __jsx("header", {
      className: `${this.state.overlayActive ? 'open' : 'close'}`
    }, __jsx("div", {
      className: "container"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: this.brand.to
    }, __jsx("a", {
      onClick: this.redirect,
      className: "logo"
    }, __jsx("img", {
      src: `${this.state.overlayActive ? 'assets/icons/logo-white-nolabel.svg' : 'assets/icons/logo-gold-nolabel.svg'}`,
      alt: "logo"
    }))), __jsx("nav", null, this.NavLinks()), __jsx("div", {
      className: "button-wrapper"
    }, __jsx("a", {
      href: "https://calendly.com/oril",
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx("button", {
      className: "btn"
    }, "Free Consultation"))), __jsx("div", {
      className: "nav-wrapper"
    }, __jsx("div", {
      className: "top-block",
      "data-toggle": "collapse",
      "data-target": ".collapse",
      onClick: this.toggleHamburger.bind(this)
    }), __jsx("div", {
      className: `${this.state.overlayActive ? 'is-active' : ''} hamburger hamburger--squeeze`
    }, __jsx("div", {
      className: "hamburger-box"
    }, __jsx("div", {
      className: "hamburger-inner"
    }))))), __jsx("div", {
      className: "collapse collapse-template"
    }, __jsx("div", {
      className: "collapse-template__content"
    }, __jsx(_Bubble__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "200px",
      top: "100px",
      left: "-800px",
      speed: ".7"
    }), __jsx(_Bubble__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "500px",
      top: "1000px",
      left: "400px",
      speed: ".7"
    }), __jsx(_Bubble__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "359px",
      top: "1600px",
      left: "500px",
      speed: ".7"
    }), this.NavLinks(), __jsx("div", {
      className: "button-wrapper"
    }, __jsx("a", {
      href: "https://calendly.com/oril",
      target: "_blank",
      rel: "noopener noreferrer"
    }, __jsx("button", {
      className: "btn"
    }, "Free Consultation"))), __jsx(_CompanyInfo__WEBPACK_IMPORTED_MODULE_4__["default"], null))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/commons/Header/index.scss":
/*!***************************************!*\
  !*** ./src/commons/Header/index.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/commons/SnackBar/index.js":
/*!***************************************!*\
  !*** ./src/commons/SnackBar/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.scss */ "./src/commons/SnackBar/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/helper */ "./src/actions/helper.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Snackbar extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "state", {
      open: false,
      text: '',
      vertical: 'top',
      horizontal: 'right',
      isActive: true
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isSnackbarOpen !== nextProps.isSnackbarOpen) {
      this.setState({
        open: nextProps.isSnackbarOpen,
        text: nextProps.snackbarText
      });
    }
  }

  render() {
    const {
      open,
      text
    } = this.state;
    console.log('this.props.isSnackbarOpen', this.props.isSnackbarOpen);
    return __jsx("div", {
      className: open ? ["snackbar", "show"].join(" ") : "snackbar"
    }, text);
  }

}

const mapStateToProps = state => ({
  isSnackbarOpen: state.helper.isSnackbarOpen,
  snackbarText: state.helper.text
});

const mapDispatchToProps = dispatch => ({
  closeSnackbarPanel: () => {
    dispatch(Object(_actions_helper__WEBPACK_IMPORTED_MODULE_4__["closeSnackbar"])());
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Snackbar));

/***/ }),

/***/ "./src/commons/SnackBar/index.scss":
/*!*****************************************!*\
  !*** ./src/commons/SnackBar/index.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/commons/utils/main.js":
/*!***********************************!*\
  !*** ./src/commons/utils/main.js ***!
  \***********************************/
/*! exports provided: later */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "later", function() { return later; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

const later = (ms = 0) => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(resolve => setTimeout(resolve, ms));
};

/***/ }),

/***/ "./src/commons/utils/scroll.js":
/*!*************************************!*\
  !*** ./src/commons/utils/scroll.js ***!
  \*************************************/
/*! exports provided: scrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
function scrollTo(destination, duration = 400, callback) {
  destination = document.querySelector(destination);

  const easeOutQuad = t => t * (2 - t);

  const start = window.pageYOffset;
  const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
  const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
  const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
  const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
  const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

  if (!('requestAnimationFrame' in window)) {
    window.scroll(0, destinationOffsetToScroll);

    if (callback) {
      callback();
    }

    return;
  }

  function scroll() {
    const now = 'now' in window.performance ? performance.now() : new Date().getTime();
    const time = Math.min(1, (now - startTime) / duration);
    const timeFunction = easeOutQuad(time);
    window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

    if (window.pageYOffset === destinationOffsetToScroll) {
      if (callback) {
        callback();
      }

      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

/***/ }),

/***/ "./src/pages/components/Contacts/_styles.scss":
/*!****************************************************!*\
  !*** ./src/pages/components/Contacts/_styles.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/pages/components/Contacts/index.js":
/*!************************************************!*\
  !*** ./src/pages/components/Contacts/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../commons/Form */ "./src/commons/Form/index.js");
/* harmony import */ var _commons_Header_CompanyInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../commons/Header/CompanyInfo */ "./src/commons/Header/CompanyInfo.js");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_styles.scss */ "./src/pages/components/Contacts/_styles.scss");
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_scss__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





class Contacts extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "socials", [{
      link: 'https://www.linkedin.com/company/oril-software',
      imgSrc: 'assets/icons/linkedin.svg',
      alt: 'linkedin'
    }, {
      link: 'https://medium.com/oril',
      imgSrc: 'assets/icons/medium.svg',
      alt: 'medium'
    }, {
      link: 'https://www.behance.net/oril-software',
      imgSrc: 'assets/icons/behance.svg',
      alt: 'behance'
    }, {
      link: 'https://www.facebook.com/orilsoftware',
      imgSrc: 'assets/icons/facebook.svg',
      alt: 'facebook'
    }, {
      link: 'https://www.instagram.com/orilsoftware',
      imgSrc: 'assets/icons/instagram.svg',
      alt: 'instagram'
    }, {
      link: 'https://twitter.com/orilsoftware',
      imgSrc: 'assets/icons/twitter.svg',
      alt: 'twitter'
    }]);

    this.state = {
      mobileMode: ""
    };
    this.toggleMobileMode = this.toggleMobileMode.bind(this);
  }

  componentDidMount() {
    this.setState({
      mobileMode: window.innerWidth < 768
    });
    window.addEventListener('resize', this.toggleMobileMode);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.toggleMobileMode);
  }

  toggleMobileMode() {
    const mobileMode = window.innerWidth < 768;

    if (this.state.mobileMode !== mobileMode) {
      this.setState({
        mobileMode
      });
    }
  }

  render() {
    return __jsx("section", {
      className: "contact"
    }, __jsx("div", {
      className: `${this.state.mobileMode ? '' : 'container'} contact__wrapper`
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "contact__form"
    }, __jsx("h2", null, "Contact Us"), __jsx("p", null, "Send us a short message and our team will get back to you within 24 hours"))), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "contact__info"
    }, __jsx("div", {
      className: "contact__info__block contact__info__block--border"
    }, __jsx("p", null, "Inquires & Information"), __jsx("a", {
      href: "mailto:contact@oril.co"
    }, "contact@oril.co")), __jsx("div", {
      className: "contact__info__block"
    }, __jsx("p", null, "Address"), __jsx("a", {
      href: "https://goo.gl/maps/PWW2kZmqFzB2",
      target: "blank"
    }, "68 Jay Street Brooklyn, NY, 11201")), __jsx("div", {
      className: "contact__info__block contact__info__block--border"
    }, __jsx("p", null, "Join the Team"), __jsx("a", {
      href: "mailto:join@oril.co"
    }, "join@oril.co")), __jsx("div", {
      className: "contact__info__socials"
    }, this.socials.map((item, index) => {
      return __jsx("a", {
        href: item.link,
        target: "_blank",
        rel: "noopener noreferrer",
        key: index
      }, __jsx("img", {
        src: item.imgSrc,
        alt: item.alt
      }));
    })))), __jsx("div", {
      className: "container"
    }, __jsx(_commons_Header_CompanyInfo__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ }),

/***/ "./src/pages/components/Home/components/Banner/Banner.js":
/*!***************************************************************!*\
  !*** ./src/pages/components/Home/components/Banner/Banner.js ***!
  \***************************************************************/
/*! exports provided: Banner, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Banner", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Banner extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "home__banner"
    }, __jsx("div", {
      className: "container home__banner__block"
    }, __jsx("div", {
      className: "wrapper"
    }, __jsx("div", {
      id: "border_wrap"
    }, __jsx("img", {
      src: "/assets/img/oril_banner.svg",
      alt: ""
    }))), __jsx("div", {
      className: "home__banner__slogan"
    }, __jsx("img", {
      src: "/assets/img/oril_banner_title.svg",
      alt: ""
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/pages/components/Home/components/Home.js":
/*!******************************************************!*\
  !*** ./src/pages/components/Home/components/Home.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Banner_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Banner/Banner */ "./src/pages/components/Home/components/Banner/Banner.js");
/* harmony import */ var _Products_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Products/Products */ "./src/pages/components/Home/components/Products/Products.js");
/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Services/Services */ "./src/pages/components/Home/components/Services/Services.js");
/* harmony import */ var _WeAre_WeAre__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WeAre/WeAre */ "./src/pages/components/Home/components/WeAre/WeAre.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Home extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChangePage", path => {
      this.setState({
        path
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, __jsx("main", {
      className: "home"
    }, __jsx(_Banner_Banner__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Products_Products__WEBPACK_IMPORTED_MODULE_3__["default"], null), __jsx(_Services_Services__WEBPACK_IMPORTED_MODULE_4__["default"], {
      redirect: this.onChangePage
    }), __jsx(_WeAre_WeAre__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/components/Home/components/Products/Products.js":
/*!*******************************************************************!*\
  !*** ./src/pages/components/Home/components/Products/Products.js ***!
  \*******************************************************************/
/*! exports provided: Products, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Products", function() { return Products; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Products extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "products", [{
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
  }

  render() {
    return __jsx("section", {
      className: "home__products"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "1300px",
      top: "1000px",
      left: "660px",
      speed: "0.2"
    }), __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "320px",
      top: "560px",
      left: "-1300px",
      speed: "0.8"
    }), __jsx("h3", null, "Products We Build"), __jsx("div", {
      className: "container"
    }, this.products.map((product, index) => {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: `/services?activeTab=${product.name}`,
        key: index
      }, __jsx("a", {
        rel: "noopener noreferrer",
        className: "link-block"
      }, __jsx("img", {
        src: "assets/icons/products-" + product.name + ".svg",
        alt: product.name
      }), __jsx("span", null, product.content)));
    })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/portfolio"
    }, __jsx("button", {
      className: "btn"
    }, "Featured Products")));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Products);

/***/ }),

/***/ "./src/pages/components/Home/components/Services/Services.js":
/*!*******************************************************************!*\
  !*** ./src/pages/components/Home/components/Services/Services.js ***!
  \*******************************************************************/
/*! exports provided: Services, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Services extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "redirect", e => {
      const elem = e.target;
      this.props.redirect(elem.pathname);
      window.scrollTo(0, 0);
    });
  }

  render() {
    return __jsx("section", {
      className: "home__services"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "420px",
      top: "1550px",
      left: "-650px",
      speed: "0.8"
    }), __jsx("h3", null, "Services"), __jsx("div", {
      className: "container"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: "/services",
        search: "?section=design"
      }
    }, __jsx("a", {
      rel: "noopener noreferrer",
      onClick: this.redirect.bind(this)
    }, __jsx("div", {
      className: "home__services__flex-row"
    }, __jsx("img", {
      src: "assets/img/uxui.jpg",
      alt: "uxui"
    }), __jsx("div", null, __jsx("div", null, __jsx("h4", null, "UI/UX Design")), __jsx("p", null, "Creative designs that make your innovation simple to use"))))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: "/services",
        search: "?section=development"
      }
    }, __jsx("a", {
      rel: "noopener noreferrer",
      onClick: this.redirect.bind(this)
    }, __jsx("div", {
      className: "home__services__flex-row"
    }, __jsx("img", {
      src: "assets/img/product-development.jpg",
      alt: "product development"
    }), __jsx("div", null, __jsx("div", null, __jsx("h4", null, "Product Development")), __jsx("p", null, "Scalable state-of-the-art products")))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./src/pages/components/Home/components/WeAre/WeAre.js":
/*!*************************************************************!*\
  !*** ./src/pages/components/Home/components/WeAre/WeAre.js ***!
  \*************************************************************/
/*! exports provided: params, WeAre, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "params", function() { return params; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeAre", function() { return WeAre; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");
/* harmony import */ var _workers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./workers */ "./src/pages/components/Home/components/WeAre/workers.js");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const params = {
  autoHeight: true,
  width: 555,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
};
class WeAre extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "home__we-are",
      id: "we-are"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "420px",
      top: "3150px",
      right: "-1700px",
      speed: "0.8"
    }), __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "800px",
      top: "2150px",
      left: "-1300px",
      speed: "0.5"
    }), __jsx("h3", null, "Who we are"), __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "home__we-are__text-wrapper"
    }, __jsx("p", {
      className: "intro-text"
    }, "We are a diverse team of professionals who are passionate about digital products"), __jsx("div", {
      className: "our-credo"
    }, __jsx("h4", null, "Our Credo"), __jsx("p", {
      className: "ul-item"
    }, "Increasing World\u2019s Efficiency")), __jsx("div", {
      className: "our-values"
    }, __jsx("h4", null, "Our Values"), __jsx("p", {
      className: "ul-item"
    }, "Team is the foundation"), __jsx("p", {
      className: "ul-item"
    }, "Keep exploring"), __jsx("p", {
      className: "ul-item"
    }, "Be a part of solution"), __jsx("p", {
      className: "ul-item"
    }, "Prioritizing time"), __jsx("p", {
      className: "ul-item"
    }, "Products that break limits"))), __jsx("div", {
      className: "home__we-are__our-images"
    }, __jsx(react_id_swiper__WEBPACK_IMPORTED_MODULE_3___default.a, params, _workers__WEBPACK_IMPORTED_MODULE_2__["workersPages"].map((workers, index) => __jsx("div", {
      key: 'slide-' + index
    }, workers.map((worker, index) => {
      const animal_src = "assets/img/" + worker.animal + ".png";
      const photoStyles = {
        backgroundImage: "url(assets/img/" + worker.photo + ".jpg)",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
      };
      return __jsx("div", {
        className: "card",
        key: 'card-' + index
      }, __jsx("div", {
        className: "card__front"
      }, __jsx("img", {
        src: animal_src,
        alt: worker.animal
      })), __jsx("div", {
        className: "card__back",
        style: photoStyles
      }, __jsx("div", {
        className: "card__back__desc"
      }, __jsx("span", null, worker.name), __jsx("span", null, worker.position))));
    })))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (WeAre);

/***/ }),

/***/ "./src/pages/components/Home/components/WeAre/workers.js":
/*!***************************************************************!*\
  !*** ./src/pages/components/Home/components/WeAre/workers.js ***!
  \***************************************************************/
/*! exports provided: workersPages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workersPages", function() { return workersPages; });
const firstPage = [{
  animal: 'team-16',
  photo: '9',
  name: 'Roman Havrylyuk',
  position: 'CEO'
}, {
  animal: 'team-5',
  photo: '7',
  name: 'Natalie Havrylyuk',
  position: 'Business Development Manager'
}, {
  animal: 'team-10',
  photo: '20',
  name: 'Zorian Fedoryga',
  position: 'Lead Software Engineer'
}, {
  animal: 'team-13',
  photo: '3',
  name: 'Katia Tsybulska',
  position: 'HR / Recruiter'
}, {
  animal: 'team-1',
  photo: '8',
  name: 'Nazar Solnichok',
  position: 'Project Manager'
}, {
  animal: 'team-11',
  photo: '5',
  name: 'Maria Synenka',
  position: 'Project Manager'
}, {
  animal: 'team-6',
  photo: '18',
  name: 'Ihor Kosandiak',
  position: 'Lead Software Engineer'
}, {
  animal: 'team-15',
  photo: '21',
  name: 'Ihor Sokolyk',
  position: 'Lead Software Engineer'
}, {
  animal: 'team-9',
  photo: '4',
  name: 'Lisa Burdeniuk',
  position: 'UI/UX designer'
}];
const secondPage = [{
  animal: 'team-2',
  photo: '19',
  name: 'Alexander Panchuk',
  position: 'Software Engineer'
}, {
  animal: 'team-4',
  photo: '17',
  name: 'Sasha Bryk',
  position: 'Software Engineer'
}, {
  animal: 'team-7',
  photo: '13',
  name: 'Volodymyr Padovskyi',
  position: 'Software Engineer'
}, {
  animal: 'team-8',
  photo: '10',
  name: 'Eugenii Samarskyi',
  position: 'Software Engineer'
}, {
  animal: 'team-21',
  photo: '14',
  name: 'Olesia Dovbush',
  position: 'Software Engineer'
}, {
  animal: 'team-12',
  photo: '12',
  name: 'Vyacheslav Perfilyev',
  position: 'Software Engineer'
}, {
  animal: 'team-14',
  photo: '2',
  name: 'Vitalii Demydiuk',
  position: 'Software Engineer'
}, {
  animal: 'team-17',
  photo: '15',
  name: 'Oleh Kravets',
  position: 'Graphic Designer'
}, {
  animal: 'team-18',
  photo: '11',
  name: 'Volodymyr Chornyi',
  position: 'Software Engineer'
}];
const thirdPage = [{
  animal: 'team-19',
  photo: '16',
  name: 'Serhii Yavorskyi',
  position: 'Software Engineer'
}, {
  animal: 'team-20',
  photo: '1',
  name: 'Vitalii Vototskyi',
  position: 'Software Engineer'
}, {
  animal: 'team-22',
  photo: '22',
  name: 'Anna Rurych',
  position: 'QA Software Engineer'
}, {
  animal: 'team-23',
  photo: '23',
  name: 'Oleksandr Kutenets',
  position: 'Lead Generation Manager'
}];
const workersPages = [firstPage, secondPage, thirdPage];

/***/ }),

/***/ "./src/pages/components/Home/index.js":
/*!********************************************!*\
  !*** ./src/pages/components/Home/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Home */ "./src/pages/components/Home/components/Home.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _components_Home__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/components/Portfolio/components/Portfolio.js":
/*!****************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/Portfolio.js ***!
  \****************************************************************/
/*! exports provided: Portfolio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Portfolio", function() { return Portfolio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PortfolioIntro_PortfolioIntro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PortfolioIntro/PortfolioIntro */ "./src/pages/components/Portfolio/components/PortfolioIntro/PortfolioIntro.js");
/* harmony import */ var _Projects_Projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects/Projects */ "./src/pages/components/Portfolio/components/Projects/Projects.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _commons_utils_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../commons/utils/scroll */ "./src/commons/utils/scroll.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Portfolio extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const query = Object(query_string__WEBPACK_IMPORTED_MODULE_3__["parse"])(window.location.search);
    query.activeTab ? Object(_commons_utils_scroll__WEBPACK_IMPORTED_MODULE_4__["scrollTo"])('#products') : window.scrollTo(0, 0);
  }

  render() {
    return __jsx("section", {
      className: "portfolio"
    }, __jsx(_PortfolioIntro_PortfolioIntro__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_Projects_Projects__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/PortfolioBlockchain/PortfolioBlockchain.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/PortfolioBlockchain/PortfolioBlockchain.js ***!
  \**********************************************************************************************/
/*! exports provided: PortfolioBlockchain, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioBlockchain", function() { return PortfolioBlockchain; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _our_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../our-projects */ "./src/pages/components/Portfolio/our-projects.js");
/* harmony import */ var _Slides_Slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Slides/Slides */ "./src/pages/components/Portfolio/components/Slides/Slides.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class PortfolioBlockchain extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slides", [_our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].scroogeBot]);
  }

  render() {
    return __jsx(_Slides_Slides__WEBPACK_IMPORTED_MODULE_3__["Slides"], {
      slides: this.slides
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (PortfolioBlockchain);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/PortfolioIntro/PortfolioIntro.js":
/*!************************************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/PortfolioIntro/PortfolioIntro.js ***!
  \************************************************************************************/
/*! exports provided: PortfolioIntro, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioIntro", function() { return PortfolioIntro; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class PortfolioIntro extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "portfolio__intro"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "portfolio__intro__text"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "481px",
      top: "270px",
      left: "-450px",
      speed: "0.5"
    }), __jsx("h2", null, "Our Portfolio"), __jsx("p", null, "See some of the most recent Products we built...")), __jsx("div", {
      className: "portfolio__intro__image"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "388px",
      top: "390px",
      left: "-370px",
      speed: "0.7"
    }), __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "500px",
      top: "340px",
      left: "10px",
      speed: "0.3"
    }), __jsx("img", {
      src: "assets/img/hero.png",
      alt: "hero"
    }))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (PortfolioIntro);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/PortfolioIoT/PortfolioIoT.js":
/*!********************************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/PortfolioIoT/PortfolioIoT.js ***!
  \********************************************************************************/
/*! exports provided: PortfolioIoT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioIoT", function() { return PortfolioIoT; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _our_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../our-projects */ "./src/pages/components/Portfolio/our-projects.js");
/* harmony import */ var _Slides_Slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Slides/Slides */ "./src/pages/components/Portfolio/components/Slides/Slides.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class PortfolioIoT extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slides", [_our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].nuravine, _our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].cc, _our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].vicki]);
  }

  render() {
    return __jsx(_Slides_Slides__WEBPACK_IMPORTED_MODULE_3__["Slides"], {
      slides: this.slides
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (PortfolioIoT);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/PortfolioLifestyleAndFitness/PortfolioLifestyleAndFitness.js":
/*!****************************************************************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/PortfolioLifestyleAndFitness/PortfolioLifestyleAndFitness.js ***!
  \****************************************************************************************************************/
/*! exports provided: PortfolioLifestyleAndFitness, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioLifestyleAndFitness", function() { return PortfolioLifestyleAndFitness; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _our_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../our-projects */ "./src/pages/components/Portfolio/our-projects.js");
/* harmony import */ var _Slides_Slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Slides/Slides */ "./src/pages/components/Portfolio/components/Slides/Slides.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class PortfolioLifestyleAndFitness extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slides", [_our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].as, _our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].laced]);
  }

  render() {
    return __jsx(_Slides_Slides__WEBPACK_IMPORTED_MODULE_3__["Slides"], {
      slides: this.slides
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (PortfolioLifestyleAndFitness);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/PortfolioMarketplace/PortfolioMarketplace.js":
/*!************************************************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/PortfolioMarketplace/PortfolioMarketplace.js ***!
  \************************************************************************************************/
/*! exports provided: PortfolioMarketplace, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioMarketplace", function() { return PortfolioMarketplace; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _our_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../our-projects */ "./src/pages/components/Portfolio/our-projects.js");
/* harmony import */ var _Slides_Slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Slides/Slides */ "./src/pages/components/Portfolio/components/Slides/Slides.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class PortfolioMarketplace extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slides", [_our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].gowago, _our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].rialto, _our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].hoozeOn, _our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].myn]);
  }

  render() {
    return __jsx(_Slides_Slides__WEBPACK_IMPORTED_MODULE_3__["Slides"], {
      slides: this.slides
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (PortfolioMarketplace);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/PortfolioOther/PortfolioOther.js":
/*!************************************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/PortfolioOther/PortfolioOther.js ***!
  \************************************************************************************/
/*! exports provided: PortfolioOther, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioOther", function() { return PortfolioOther; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _our_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../our-projects */ "./src/pages/components/Portfolio/our-projects.js");
/* harmony import */ var _Slides_Slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Slides/Slides */ "./src/pages/components/Portfolio/components/Slides/Slides.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class PortfolioOther extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slides", [_our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].greenVision, _our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].stick, _our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].plusDelta]);
  }

  render() {
    return __jsx(_Slides_Slides__WEBPACK_IMPORTED_MODULE_3__["Slides"], {
      slides: this.slides
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (PortfolioOther);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/PortfolioRealEstate/PortfolioRealEstate.js":
/*!**********************************************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/PortfolioRealEstate/PortfolioRealEstate.js ***!
  \**********************************************************************************************/
/*! exports provided: PortfolioRealEstate, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioRealEstate", function() { return PortfolioRealEstate; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _our_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../our-projects */ "./src/pages/components/Portfolio/our-projects.js");
/* harmony import */ var _Slides_Slides__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Slides/Slides */ "./src/pages/components/Portfolio/components/Slides/Slides.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class PortfolioRealEstate extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "slides", [_our_projects__WEBPACK_IMPORTED_MODULE_2__["project"].sparkOffer]);
  }

  render() {
    return __jsx(_Slides_Slides__WEBPACK_IMPORTED_MODULE_3__["Slides"], {
      slides: this.slides
    });
  }

}
/* harmony default export */ __webpack_exports__["default"] = (PortfolioRealEstate);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/Projects/Projects.js":
/*!************************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/Projects/Projects.js ***!
  \************************************************************************/
/*! exports provided: Projects, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Projects", function() { return Projects; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_BaseTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/BaseTabs */ "./src/commons/BaseTabs/index.js");
/* harmony import */ var _PortfolioLifestyleAndFitness_PortfolioLifestyleAndFitness__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../PortfolioLifestyleAndFitness/PortfolioLifestyleAndFitness */ "./src/pages/components/Portfolio/components/PortfolioLifestyleAndFitness/PortfolioLifestyleAndFitness.js");
/* harmony import */ var _PortfolioOther_PortfolioOther__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PortfolioOther/PortfolioOther */ "./src/pages/components/Portfolio/components/PortfolioOther/PortfolioOther.js");
/* harmony import */ var _PortfolioIoT_PortfolioIoT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PortfolioIoT/PortfolioIoT */ "./src/pages/components/Portfolio/components/PortfolioIoT/PortfolioIoT.js");
/* harmony import */ var _PortfolioRealEstate_PortfolioRealEstate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../PortfolioRealEstate/PortfolioRealEstate */ "./src/pages/components/Portfolio/components/PortfolioRealEstate/PortfolioRealEstate.js");
/* harmony import */ var _PortfolioBlockchain_PortfolioBlockchain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../PortfolioBlockchain/PortfolioBlockchain */ "./src/pages/components/Portfolio/components/PortfolioBlockchain/PortfolioBlockchain.js");
/* harmony import */ var _PortfolioMarketplace_PortfolioMarketplace__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../PortfolioMarketplace/PortfolioMarketplace */ "./src/pages/components/Portfolio/components/PortfolioMarketplace/PortfolioMarketplace.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








class Projects extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabs", [{
      id: 'marketplace',
      title: 'Marketplace',
      component: () => __jsx(_PortfolioMarketplace_PortfolioMarketplace__WEBPACK_IMPORTED_MODULE_8__["default"], null)
    }, {
      id: 'lifestyle-and-fitness',
      title: 'Lifestyle & Fitness',
      component: () => __jsx(_PortfolioLifestyleAndFitness_PortfolioLifestyleAndFitness__WEBPACK_IMPORTED_MODULE_3__["default"], null)
    }, {
      id: 'iot',
      title: 'IoT',
      component: () => __jsx(_PortfolioIoT_PortfolioIoT__WEBPACK_IMPORTED_MODULE_5__["default"], null)
    }, // { id: 'real-estate', title: 'Real estate', component: () => <PortfolioRealEstate/> },
    {
      id: 'blockchain',
      title: 'Blockchain',
      component: () => __jsx(_PortfolioBlockchain_PortfolioBlockchain__WEBPACK_IMPORTED_MODULE_7__["default"], null)
    }, {
      id: 'other',
      title: 'Other',
      component: () => __jsx(_PortfolioOther_PortfolioOther__WEBPACK_IMPORTED_MODULE_4__["default"], null)
    }]);
  }

  render() {
    return __jsx("section", {
      className: "portfolio__projects",
      id: "products"
    }, __jsx("div", {
      className: "container"
    }, __jsx(_commons_BaseTabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tabs: this.tabs,
      pathname: "portfolio"
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/Slide/Slide.js":
/*!******************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/Slide/Slide.js ***!
  \******************************************************************/
/*! exports provided: Slide, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slide", function() { return Slide; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Slide extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("div", {
      className: "slide"
    }, __jsx("div", {
      className: "slide__header"
    }, __jsx("div", {
      className: "logo"
    }, __jsx("img", {
      src: `assets/img/${this.props.data.logo.name}${this.props.data.logo.extension}`,
      alt: this.props.data.logo.name
    })), __jsx("a", {
      href: this.props.data.link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "title"
    }, this.props.data.title), __jsx("div", {
      className: "tags"
    }, this.props.data.tags.map((tag, index) => __jsx("span", {
      key: `tag-${index}`
    }, tag)))), __jsx("div", {
      className: "slide__content"
    }, __jsx("div", {
      className: "left"
    }, __jsx("p", {
      className: "text"
    }, this.props.data.text), this.props.data.info && __jsx("div", {
      className: "info"
    }, this.props.data.info.map((item, index) => {
      return __jsx("div", {
        key: `info-${index}`
      }, __jsx("p", {
        className: "info__title"
      }, item.value), __jsx("p", {
        className: "info__text"
      }, item.text));
    }))), __jsx("div", {
      className: "right"
    }, __jsx("img", {
      src: `assets/img/${this.props.data.img.name}${this.props.data.img.extension}`,
      alt: this.props.data.img.name
    }))), this.props.data.customer && __jsx("div", {
      className: "slide__footer"
    }, __jsx("div", {
      className: "customer"
    }, __jsx("img", {
      src: `assets/icons/${this.props.data.customer.img.name}${this.props.data.customer.img.extension}`,
      alt: this.props.data.customer.img.name
    }), __jsx("div", null, __jsx("p", null, this.props.data.customer.firstName, " ", this.props.data.customer.lastName), __jsx("p", null, this.props.data.customer.position))), __jsx("div", {
      className: "feedback"
    }, this.props.data.customer.feedback)));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Slide);

/***/ }),

/***/ "./src/pages/components/Portfolio/components/Slides/Slides.js":
/*!********************************************************************!*\
  !*** ./src/pages/components/Portfolio/components/Slides/Slides.js ***!
  \********************************************************************/
/*! exports provided: Slides, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slides", function() { return Slides; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-id-swiper */ "react-id-swiper");
/* harmony import */ var react_id_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_id_swiper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../slider-config */ "./src/slider-config.js");
/* harmony import */ var _Slide_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Slide/Slide */ "./src/pages/components/Portfolio/components/Slide/Slide.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Slides extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "slider-wrapper"
    }, this.props.slides.map((slide, index) => __jsx("div", {
      key: 'slide-' + index
    }, __jsx(_Slide_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: slide
    })))), __jsx("div", {
      className: "slider-mobile-wrapper"
    }, this.props.slides.map((slide, index) => __jsx("div", {
      key: 'slide-' + index
    }, __jsx(_Slide_Slide__WEBPACK_IMPORTED_MODULE_3__["default"], {
      data: slide
    })))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Slides);

/***/ }),

/***/ "./src/pages/components/Portfolio/our-projects.js":
/*!********************************************************!*\
  !*** ./src/pages/components/Portfolio/our-projects.js ***!
  \********************************************************/
/*! exports provided: project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "project", function() { return project; });
const project = {
  // IoT
  nuravine: {
    logo: {
      name: 'nuravine-logo',
      extension: '.png'
    },
    title: 'Nuravine',
    link: 'https://www.nuravine.com/',
    tags: ['#WebApp', '#USA', '#Automation'],
    text: 'Environmental Automation Made Simple. Understand and optimize your hydroponic reservoir from afar with monitoring and control of pH, EC, Water Temp, and DO',
    info: [{
      value: 'Grow-NY',
      text: 'finalist'
    }],
    img: {
      name: 'nuravine',
      extension: '.png'
    },
    customer: {
      img: {
        name: 'logan',
        extension: '.jpeg'
      },
      firstName: 'Adrian',
      lastName: 'Logan',
      position: 'CEO of Nuravine',
      feedback: `
                “This team provides quick and quality work. They were able
                to quickly turn our ideas into a functioning and professional dashboard”
            `
    }
  },
  cc: {
    logo: {
      name: 'connected-copper',
      extension: '.png'
    },
    title: 'Connected Copper',
    link: 'http://connectedcopper.com/',
    tags: ['#WebApp', '#Mobile', '#USA'],
    text: 'An enterprise focused cloud platform serves as the central hub for your globally distributed devices and mobile applications. Gain control and visibility into your new IoT product fleet',
    img: {
      name: 'cc',
      extension: '.png'
    },
    info: [{
      value: 'IBM',
      text: 'proud startup partner of IBM'
    }, {
      value: 'One',
      text: 'custom designed chipset'
    }]
  },
  vicki: {
    logo: {
      name: 'vicki-logo',
      extension: '.png'
    },
    title: 'VICKI',
    link: 'https://getvicki.com/',
    tags: ['#MobileApp', '#iOS', '#Android', '#Retail'],
    text: `
            VICKI is an IoT self-checkout solution for retail. Powered by artificial intelligence and other advanced technologies, VICKI is a modern replacement for traditional vending experiences and the first retail solution to leverage AI at the point-of-sale. She takes the POS experience to the next level in an Amazon and Google world
        `,
    info: [{
      value: '1,000+',
      text: 'vending machines'
    }, {
      value: 'AI-Powered',
      text: 'intelligent item purchase detection'
    }, {
      value: 'Cross Platform',
      text: 'Android & iOS'
    }, {
      value: '+70% Engagement',
      text: 'led by a reward system'
    }],
    img: {
      name: 'vicki',
      extension: '.png'
    },
    customer: {
      img: {
        name: 'propati',
        extension: '.jpeg'
      },
      firstName: 'Dom',
      lastName: 'Propati',
      position: 'CSO of ViaTouch Media',
      feedback: `
                “The collaboration is effective, and ORIL always delivers on time. Precise and professional, they provide useful insights, clear documentation, and appropriate tools for the tasks at hand”
            `
    }
  },
  // Realestate
  sparkOffer: {
    logo: {
      name: 'sparkoffer-logo',
      extension: '.png'
    },
    title: 'SparkOffer',
    link: 'https://www.sparkoffer.com/',
    tags: ['#Wep', '#Realestate', '#Platform'],
    text: `
            A platform that helps to interact and make real estate binding offers,
            with or without the assistance of a buyer’s agent. SparkOffer provides a
            PropTech process that offers an all-inclusive, secure and transparent means
            for home buyers to interact directly with sellers.
        `,
    img: {
      name: 'sparkoffer',
      extension: '.png'
    }
  },
  // Blockchain
  scroogeBot: {
    logo: {
      name: 'scroogebot-logo',
      extension: '.png'
    },
    title: 'Scrooge Bot',
    link: 'https://scroogebot.co/',
    tags: ['#Wep', '#Dashboard', '#Bot', '#Crypto'],
    text: `
            Scrooge Bot handles trading for you. Simply connect Scrooge Bot 
            to your Binance account and watch your assets grow

        `,
    info: [{
      value: '5-15%',
      text: 'average monthly asset growth'
    }],
    img: {
      name: 'scroogebot',
      extension: '.png'
    }
  },
  // Lifestyle & Fitness
  as: {
    logo: {
      name: 'activesoul-logo',
      extension: '.png'
    },
    title: 'ActiveSoul',
    link: 'https://www.activesoul.us/',
    tags: ['#MobileApp', '#iOS', '#Android', '#Fitness'],
    text: `
            ActiveSoul brings fitness enthusiasts, wellness providers, and 1000's of health clubs together in a brand new way. Book fitness classes, register for events, create challenges, and track your fitness activity - all in one application
        `,
    info: [{
      value: '30,000+',
      text: 'health clubs'
    }, {
      value: '300+',
      text: 'wearable devices integrated'
    }, {
      value: '6,000+',
      text: 'running events'
    }, {
      value: '250,000+',
      text: 'fitness classes'
    }],
    img: {
      name: 'activesoul',
      extension: '.png'
    }
  },
  laced: {
    logo: {
      name: 'laced-logo',
      extension: '.png'
    },
    title: 'LACED',
    link: 'https://laced-app.com/',
    tags: ['#MobileApp', '#WebApp', '#Sneakers', '#Auction'],
    text: `
            LACED is a mobile app for online sneaker auctions where you can buy bids and participate by placing a bid. You can claim a reward in the loyalty section. Bid small and win big
        `,
    info: [{
      value: 'Featured',
      text: 'in top fashion magazines'
    }, {
      value: '70,000+',
      text: 'users'
    }, {
      value: '1,000+',
      text: 'collectable items sold'
    }],
    img: {
      name: 'laced',
      extension: '.png'
    },
    customer: {
      img: {
        name: 'lozano',
        extension: '.jpeg'
      },
      firstName: 'Sean',
      lastName: 'Lozano',
      position: 'CEO of LACED',
      feedback: `
                “ORIL's platform was intuitive and user-friendly. The client's business gained 50,000 customers in its first year. Communicative and transparent, their developers worked quickly and precisely“
            `
    }
  },
  // Marketplace
  myn: {
    logo: {
      name: 'myn-logo',
      extension: '.png'
    },
    title: 'Match Your Need',
    link: 'https://matchyourneed.com/',
    tags: ['#WebApp', '#Charity', '#Social'],
    text: `
            Match Your Need is a generosity marketplace. It makes matched between those with a need and those with a heart and means to fulfill it based on multiple criteria, including user preferences and geography
        `,
    info: [{
      value: '600+',
      text: 'needs matched'
    }, {
      value: '20+',
      text: 'San Diego non-profits involved'
    }, {
      value: 'One',
      text: 'act of kindness, one big difference'
    }],
    img: {
      name: 'myn',
      extension: '.png'
    }
  },
  gowago: {
    logo: {
      name: 'gowago-logo',
      extension: '.png'
    },
    title: 'GOWAGO',
    link: 'https://gowago.ch/en/',
    tags: ['#WebApp', '#E-commerce', '#Auto', '#Swiss'],
    text: `
            GOWAGO is Switzerland's first car leasing comparison service and the digital car marketplace of the future. Find the right leasing deal and apply online, saving you time and money
        `,
    info: [{
      value: '10,000',
      text: 'cars on the platform'
    }, {
      value: '1,000+',
      text: 'happy car owners'
    }],
    img: {
      name: 'gowago',
      extension: '.png'
    }
  },
  hoozeOn: {
    logo: {
      name: 'hoozeon-logo',
      extension: '.png'
    },
    title: 'HoozeOn',
    link: 'https://www.hoozeon.us/',
    tags: ['#MobileApp', '#iOS', '#Android', '#Social'],
    text: `
            A platform that provides hospitality owners real-time information of their service staff and allows service staff to connect with all the guests that they serve. HoozeOn allows guests to feel empowered and happy by connecting them with the people they enjoy the most
        `,
    info: [{
      value: '5.0',
      text: 'rating on AppStore'
    }, {
      value: 'Cross Platform',
      text: 'Android & iOS'
    }],
    img: {
      name: 'hoozeon',
      extension: '.png'
    }
  },
  rialto: {
    logo: {
      name: 'rialto-logo',
      extension: '.png'
    },
    title: 'Rialto',
    link: 'https://rialtocuration.com/',
    tags: ['#WebApp', '#Fintech', '#Platform'],
    text: `
            Rialto platform curates the entrepreneurial landscape, providing exceptional founders and investment firms with 360° insight into the connections most worth their time
        `,
    info: [{
      value: '100+',
      text: 'curated startups'
    }, {
      value: 'Countless',
      text: 'startup-investor connections'
    }],
    img: {
      name: 'rialto',
      extension: '.png'
    }
  },
  riceToRiches: {
    logo: {
      name: 'ricetoriches-logo',
      extension: '.png'
    },
    title: 'Rice to Riches',
    link: 'https://www.ricetoriches.com/',
    tags: ['#Web', '#E-commerce', '#Catering'],
    text: `
            E-commerce website for selling rice puddings, based on Shopify platform.
            Also there is a custom administrator panel for automation delivery process via FedEx shipping company.
        `,
    info: [{
      value: '70%',
      text: 'customers use iOS or Android app'
    }, {
      value: '4.8',
      text: 'rating an AppStore'
    }, {
      value: '11.245',
      text: 'monthly active users'
    }],
    img: {
      name: 'ricetoriches',
      extension: '.png'
    },
    customer: {
      img: {
        name: 'testiomonial-default',
        extension: '.svg'
      },
      firstName: 'Adrian',
      lastName: 'Logan',
      position: 'CEO of Rice to Riches',
      feedback: `
                “This team provides quick and quality work.
                They were able to quickly turn ourideas into a functioning and professional dashboard.”
            `
    }
  },
  // Other
  greenVision: {
    logo: {
      name: 'gv-logo',
      extension: '.png'
    },
    title: 'GreenVision',
    link: 'https://greenvision-energy.com/',
    tags: ['#WebApp', '#Mobile', '#Environment'],
    text: `
            GreenVision is a platform that allows anyone to envision their future without Carbon Dioxide emissions: both on the scale of personal home and on the US scale
        `,
    info: [{
      value: 'One',
      text: 'saved planet'
    }, {
      value: '1,000+',
      text: 'informed households'
    }],
    img: {
      name: 'gv',
      extension: '.png'
    },
    customer: {
      img: {
        name: 'kuntz',
        extension: '.jpeg'
      },
      firstName: 'Lauren',
      lastName: 'Kuntz',
      position: 'CEO of GreenVision',
      feedback: `
                "The website was used at three seminars right after it was completed, proving to be a hit among the audiences who praised its ease of use and informational value. Overall, ORIL is a highly-involved vendor that offered consistent status updates and valuable input while implementing changes promptly"
            `
    }
  },
  stick: {
    logo: {
      name: 'stick-logo',
      extension: '.png'
    },
    title: 'Stick',
    link: 'https://www.stick.ai/',
    tags: ['#Web', '#AI', '#Presentation'],
    text: `
            Create beautiful slides easily. Stick uses Al to transform typed text into stunning visual presentations for you. The application uses AI technologies to dynamically suggest images that match the slide’s content and place them in a proper place on the slide. As a user, you have a great experience and don’t waste time searching the internet for the right icons
        `,
    info: [{
      value: 'AI-Powered',
      text: 'AI image recommendation'
    }, {
      value: '1,000+',
      text: 'decks created'
    }],
    img: {
      name: 'stick',
      extension: '.png'
    },
    customer: {
      img: {
        name: 'mckee',
        extension: '.jpeg'
      },
      firstName: 'Alli McKee',
      lastName: '',
      position: 'CEO at Stick',
      feedback: `
                “Thank you for your great work and for going above and beyond on a regular basis.
                This has been a challenging project and you have continued to put in your best
                effort and then some. Thank you!”
            `
    }
  },
  plusDelta: {
    logo: {
      name: 'plusdelta-logo',
      extension: '.png'
    },
    title: 'PlusDelta',
    link: 'https://plusdelta.app/',
    tags: ['#WebApp', '#Social', "#Platform"],
    text: `
            Contribute and gather feedback on meetings and events on PlusDelta platform. It helps small or large teams' executives to laymen collaboratively plan, understand, communicate, and measure their projects and performance
        `,
    info: [{
      value: '1,000+',
      text: 'meetings conducted'
    }, {
      value: '10,000+',
      text: 'notes noted and votes voted'
    }],
    img: {
      name: 'plusdelta',
      extension: '.png'
    },
    customer: {
      img: {
        name: 'moore',
        extension: '.png'
      },
      firstName: 'Steven',
      lastName: 'Moore',
      position: 'CEO of PlusDelta',
      feedback: `
                “Internal stakeholders are pleased with the product, which has been praised after a limited launch. ORIL adapted to internal systems and provided excellent technical value. Customers can expect an organized partner capable of producing powerful yet accessible solutions”
            `
    }
  }
};

/***/ }),

/***/ "./src/pages/components/Services/components/Blockchain/Blockchain.js":
/*!***************************************************************************!*\
  !*** ./src/pages/components/Services/components/Blockchain/Blockchain.js ***!
  \***************************************************************************/
/*! exports provided: Blockchain, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blockchain", function() { return Blockchain; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Blockchain extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deliverables", [{
      title: 'Trading Bot',
      img: 'deliv-bot'
    }, {
      title: 'Wallet',
      img: 'deliv-market'
    }, {
      title: 'Smart Contracts',
      img: 'deliv-contract'
    }, {
      title: 'Custom Blockchain Solutions',
      img: 'deliv-solution'
    }, {
      title: 'Documentation',
      img: 'deliv-documentation'
    }, {
      title: 'Source code',
      img: 'deliv-sourcecode'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "services", [{
      img: 'services-logo-typescript-java',
      name: 'Java',
      link: 'https://www.java.com/en/'
    }, {
      img: 'services-logo-typescript-node',
      name: 'Node JS',
      link: 'https://nodejs.org/en/'
    }, {
      img: 'services-logo-ethereum',
      name: 'Ethereum',
      link: 'https://www.ethereum.org/'
    }, {
      img: 'services-logo-binance',
      name: 'Binance',
      link: 'https://www.binance.com/en'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "products", [{
      img: 'scroogebot-logo',
      link: 'https://scroogebot.co/'
    }, {
      img: 'kings-logo',
      link: 'http://cryptokings.com/'
    }]);
  }

  render() {
    return __jsx("section", {
      className: "services__blockchain"
    }, __jsx("div", {
      className: "container"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "1089px",
      top: "1850px",
      left: "-400px",
      speed: ".2"
    }), __jsx("h3", {
      className: "tab-title"
    }, "Blockchain"), __jsx("p", {
      className: "text"
    }, "Blockchain is not only an innovative technology but is also a revolutionary approach to how our daily transactions are processed and stored. Blockchain adoption grows each day due to its committed community that contributes to the infrastructure and tools that make Blockchain\u2019s application a no-brainer in many industries"), __jsx("div", {
      className: "services__approach"
    }, __jsx("h4", null, "Our Approach"), __jsx("div", {
      className: "approach-text"
    }, __jsx("div", null, "Domain Research"), __jsx("div", null, "Product planning"), __jsx("div", null, "Implementation & Delivery"), __jsx("div", null, "Maintenance & Support")), __jsx("img", {
      src: "assets/icons/approach-group-web.svg",
      alt: "group-web"
    })), __jsx("div", {
      className: "services__deliverables"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "735px",
      top: "800px",
      left: "920px",
      speed: ".2"
    }), __jsx("h4", null, "Deliverables"), __jsx("div", null, this.deliverables.map((deliverable, index) => __jsx("div", {
      key: 'deliverable-' + index,
      className: "link-block"
    }, __jsx("img", {
      src: 'assets/icons/' + deliverable.img + '.svg',
      alt: deliverable.img
    }), __jsx("span", null, deliverable.title))))), __jsx("div", {
      className: "services__technologies"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "407px",
      top: "990px",
      left: "-1800px",
      speed: ".2"
    }), __jsx("h4", null, "Technologies"), __jsx("div", null, this.services.map((service, index) => __jsx("a", {
      href: service.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'technology-' + index
    }, __jsx("div", null, __jsx("img", {
      src: 'assets/img/' + service.img + '.png',
      alt: service.img
    })), __jsx("span", null, service.name))))), __jsx("div", {
      className: "services__products"
    }, __jsx("h4", null, "Featured Products"), __jsx("div", null, this.products.map((product, index) => __jsx("a", {
      href: product.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'product-' + index
    }, __jsx("img", {
      src: 'assets/img/' + product.img + '.png',
      alt: product.img,
      title: product.link
    })))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Blockchain);

/***/ }),

/***/ "./src/pages/components/Services/components/Design/Design.js":
/*!*******************************************************************!*\
  !*** ./src/pages/components/Services/components/Design/Design.js ***!
  \*******************************************************************/
/*! exports provided: Design, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Design", function() { return Design; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Design extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "blocks", [{
      title: 'Research',
      titleOnNewLine: true,
      text: `
                Driven by human-centered design approach, our clients’ product idea
                and users behavior patterns are the subject of analysis and investigation
            `
    }, {
      title: 'Best practices',
      titleOnNewLine: true,
      text: `
                We use Agile methodology and Design Sprint to provide step-by-step delivery of concepts ready to use
            `
    }, {
      title: 'Integration',
      titleOnNewLine: true,
      text: `
                As designers, we care about development and this helps our clients execute complex web and mobile
                applications, turning them into beautiful and impactful products
            `
    }, {
      title: "Users' feedback",
      titleOnNewLine: true,
      text: `
                Whatever your target audience is, it’s important to perform usability testing and gather users' opinions
                on a product release to make continuous UX
            `
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deliverables", [{
      title: 'UI Designs',
      img: 'deliv-ui'
    }, {
      title: 'UI Style Guides',
      img: 'deliv-guide'
    }, {
      title: 'UX Artefacts',
      img: 'deliv-artefacts'
    }, {
      title: 'Interactive Prototypes',
      img: 'deliv-prototype'
    }, {
      title: 'Logotype + Brand Identity',
      img: 'deliv-brand'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "services", [{
      img: 'services-logo-sketch',
      name: 'Sketch',
      link: 'https://www.sketch.com/'
    }, {
      img: 'services-logo-figma',
      name: 'Figma',
      link: 'https://www.figma.com/'
    }, {
      img: 'services-logo-photoshop',
      name: 'Adobe Photoshop',
      link: 'https://www.adobe.com/products/photoshop.html'
    }, {
      img: 'services-logo-illustrator',
      name: 'Adobe Illustrator',
      link: 'https://www.adobe.com/products/illustrator.html'
    }, {
      img: 'services-logo-zeplin',
      name: 'Zeplin',
      link: 'https://zeplin.io/'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "products", [{
      img: 'nuravine-logo',
      link: 'https://www.nuravine.com/'
    }, {
      img: 'gv-logo',
      link: 'https://greenvision-energy.com/'
    }, {
      img: 'connected-copper',
      link: 'https://connectedcopper.com/'
    }]);
  }

  render() {
    return __jsx("section", {
      className: "services__design",
      id: "design"
    }, __jsx("div", {
      className: "container"
    }, __jsx("h2", null, __jsx("span", null, "01"), "UX/UI Design"), __jsx("div", {
      className: "services__desc"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "284px",
      top: "365px",
      left: "-1280px",
      speed: ".2"
    }), __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "1441px",
      top: "1100px",
      left: "740px",
      speed: ".2"
    }), __jsx("h3", null, "Thoughtful User Interfaces for All Kind of Products"), __jsx("p", null, "Interactive prototyping, explicit UI/UX design, and branding with clear message for your web, desktop, mobile, smartwatch, and IoT products. This is how we\u2019re becoming advocates of actual user needs and business goals"), __jsx("div", {
      className: "services__ul-list"
    }, this.blocks.map((item, index) => __jsx("div", {
      className: "list-item",
      key: index
    }, __jsx("div", {
      className: "list-style"
    }), __jsx("div", null, item.title ? __jsx("span", {
      className: item.titleOnNewLine ? 'block' : null
    }, item.title) : null, item.text))))), __jsx("div", {
      className: "services__approach"
    }, __jsx("h4", null, "Our Approach"), __jsx("div", {
      className: "approach-text"
    }, __jsx("div", null, "Analyse"), __jsx("div", null, "Prototype"), __jsx("div", null, "Design"), __jsx("div", null, "Test")), __jsx("img", {
      src: "assets/icons/approach-group-design.svg",
      alt: "group-design"
    })), __jsx("div", {
      className: "services__deliverables"
    }, __jsx("h4", null, "Deliverables"), __jsx("div", null, this.deliverables.map((deliverable, index) => __jsx("div", {
      key: 'deliverable-' + index,
      className: "link-block"
    }, __jsx("img", {
      src: 'assets/icons/' + deliverable.img + '.svg',
      alt: deliverable.img
    }), __jsx("span", null, deliverable.title))))), __jsx("div", {
      className: "services__technologies"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "1089px",
      top: "1740px",
      left: "920px",
      speed: ".2"
    }), __jsx("h4", null, "Technologies"), __jsx("div", null, this.services.map((service, index) => __jsx("a", {
      href: service.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'technology-' + index
    }, __jsx("div", null, __jsx("img", {
      src: 'assets/img/' + service.img + '.png',
      alt: service.img
    })), __jsx("span", null, service.name))))), __jsx("div", {
      className: "services__products"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "216px",
      top: "340px",
      left: "-910px",
      speed: ".1"
    }), __jsx("h4", null, "Featured Products"), __jsx("div", null, this.products.map((product, index) => __jsx("a", {
      href: product.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'product-' + index
    }, __jsx("img", {
      src: 'assets/img/' + product.img + '.png',
      alt: product.img,
      title: product.link
    })))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Design);

/***/ }),

/***/ "./src/pages/components/Services/components/Development/Development.js":
/*!*****************************************************************************!*\
  !*** ./src/pages/components/Services/components/Development/Development.js ***!
  \*****************************************************************************/
/*! exports provided: Development, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Development", function() { return Development; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_BaseTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/BaseTabs */ "./src/commons/BaseTabs/index.js");
/* harmony import */ var _Web_Web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Web/Web */ "./src/pages/components/Services/components/Web/Web.js");
/* harmony import */ var _Mobile_Mobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Mobile/Mobile */ "./src/pages/components/Services/components/Mobile/Mobile.js");
/* harmony import */ var _IoT_IoT__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../IoT/IoT */ "./src/pages/components/Services/components/IoT/IoT.js");
/* harmony import */ var _Blockchain_Blockchain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Blockchain/Blockchain */ "./src/pages/components/Services/components/Blockchain/Blockchain.js");
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







class Development extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "tabs", [{
      id: 'web',
      title: 'Web',
      component: () => __jsx(_Web_Web__WEBPACK_IMPORTED_MODULE_3__["default"], null)
    }, {
      id: 'mobile',
      title: 'Mobile',
      component: () => __jsx(_Mobile_Mobile__WEBPACK_IMPORTED_MODULE_4__["default"], null)
    }, {
      id: 'iot',
      title: 'IoT',
      component: () => __jsx(_IoT_IoT__WEBPACK_IMPORTED_MODULE_5__["default"], null)
    }, {
      id: 'blockchain',
      title: 'Blockchain',
      component: () => __jsx(_Blockchain_Blockchain__WEBPACK_IMPORTED_MODULE_6__["default"], null)
    }]);
  }

  render() {
    return __jsx("section", {
      className: "services__development",
      id: "development"
    }, __jsx("div", {
      className: "container"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: "517px",
      top: "1220px",
      left: "-980px",
      speed: ".4"
    }), __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: "267px",
      top: "2020px",
      left: "-1620px",
      speed: ".8"
    }), __jsx("h2", null, __jsx("span", null, "02"), "Product Development"), __jsx(_commons_BaseTabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tabs: this.tabs,
      pathname: "services"
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Development);

/***/ }),

/***/ "./src/pages/components/Services/components/Intro/Intro.js":
/*!*****************************************************************!*\
  !*** ./src/pages/components/Services/components/Intro/Intro.js ***!
  \*****************************************************************/
/*! exports provided: Intro, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commons_utils_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../commons/utils/scroll */ "./src/commons/utils/scroll.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Intro extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return __jsx("section", {
      className: "services__intro"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "services__intro__text"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "1030px",
      top: "560px",
      left: "-960px",
      speed: ".5"
    }), __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "266px",
      top: "220px",
      left: "100px",
      speed: ".7"
    }), __jsx("h2", null, "Build your product with us"), __jsx("p", null, "No matter what stage you are at, ", __jsx("b", null, "Idea"), " or a ", __jsx("b", null, "Working Product"), ", we can help you visualize, build, deliver, and improve your Product")), __jsx("div", {
      className: "services__intro__categories"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "315px",
      top: "250px",
      left: "350px",
      speed: ".3"
    }), __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "315px",
      top: "250px",
      left: "-760px",
      speed: ".3"
    }), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: {
        pathname: "/services",
        search: "?section=design"
      },
      onClick: () => Object(_commons_utils_scroll__WEBPACK_IMPORTED_MODULE_3__["scrollTo"])('#design')
    }, __jsx("div", {
      className: "services__intro__categories__design"
    }, __jsx("img", {
      src: "assets/img/uxui.svg",
      alt: "product development"
    }), __jsx("span", null, "UI/UX Design"))), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
      to: {
        pathname: "/services",
        search: "?section=development"
      },
      onClick: () => Object(_commons_utils_scroll__WEBPACK_IMPORTED_MODULE_3__["scrollTo"])('#development')
    }, __jsx("div", {
      className: "services__intro__categories__development"
    }, __jsx("img", {
      src: "assets/img/pd.svg",
      alt: "product development"
    }), __jsx("span", null, "Product Development"))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Intro);

/***/ }),

/***/ "./src/pages/components/Services/components/IoT/IoT.js":
/*!*************************************************************!*\
  !*** ./src/pages/components/Services/components/IoT/IoT.js ***!
  \*************************************************************/
/*! exports provided: IoT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IoT", function() { return IoT; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class IoT extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "services", [{
      img: 'services-logo-mqtt',
      name: 'MQTT',
      link: 'http://mqtt.org/'
    }, {
      img: 'services-logo-amazon-iot',
      name: 'Amazon IoT',
      link: 'https://aws.amazon.com/iot/'
    }, {
      img: 'services-logo-ibm-iot',
      name: 'IBM IoT',
      link: 'https://www.ibm.com/internet-of-things'
    }, {
      img: 'services-logo-c++',
      name: 'C++',
      link: 'https://isocpp.org/'
    }, {
      img: 'services-logo-typescript-java',
      name: 'Java',
      link: 'https://www.java.com/en/'
    }, {
      img: 'services-logo-typescript-node',
      name: 'Node JS',
      link: 'https://nodejs.org/en/'
    }, {
      img: 'services-logo-typescript-react',
      name: 'React JS',
      link: 'https://reactjs.org/'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deliverables", [{
      title: 'Web/Mobile App',
      img: 'deliv-webmobile'
    }, {
      title: 'Firmware',
      img: 'deliv-firmware'
    }, {
      title: 'Admin Dashboard',
      img: 'deliv-dashboard'
    }, {
      title: 'Documentation',
      img: 'deliv-documentation'
    }, {
      title: 'Source code',
      img: 'deliv-sourcecode'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "products", [{
      img: 'nuravine-logo',
      link: 'https://www.nuravine.com/'
    }, {
      img: 'connected-copper',
      link: 'https://connectedcopper.com/'
    }, {
      img: 'babybrezza-logo',
      link: 'https://babybrezza.com/'
    }]);
  }

  render() {
    return __jsx("section", {
      className: "services__iot"
    }, __jsx("div", {
      className: "container"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "1089px",
      top: "1850px",
      left: "-400px",
      speed: ".2"
    }), __jsx("h3", {
      className: "tab-title"
    }, "IoT"), __jsx("p", {
      className: "text"
    }, "\u201CBreathe life into objects around you and make them Smart. The Internet of things (IoT) has exploded during the recent days, and of all emerging technologies, such as artificial intelligence and robotics, it is expected to have the most significant impact on the industrial economy", __jsx("a", {
      href: "http://info.forbes.com/rs/790-SNV-353/images/Hitachi+IoT+Report.pdf",
      className: "link"
    }, " (Forbes Insights report)")), __jsx("div", {
      className: "services__approach"
    }, __jsx("h4", null, "Our Approach"), __jsx("div", {
      className: "approach-text"
    }, __jsx("div", null, "Domain Research"), __jsx("div", null, "Product planning"), __jsx("div", null, "Implementation & Delivery"), __jsx("div", null, "Maintenance & Support")), __jsx("img", {
      src: "assets/icons/approach-group-web.svg",
      alt: "group-web"
    })), __jsx("div", {
      className: "services__deliverables"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "735px",
      top: "800px",
      left: "920px",
      speed: ".2"
    }), __jsx("h4", null, "Deliverables"), __jsx("div", null, this.deliverables.map((deliverable, index) => __jsx("div", {
      key: 'deliverable-' + index,
      className: "link-block"
    }, __jsx("img", {
      src: 'assets/icons/' + deliverable.img + '.svg',
      alt: deliverable.img
    }), __jsx("span", null, deliverable.title))))), __jsx("div", {
      className: "services__technologies"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "407px",
      top: "990px",
      left: "-1800px",
      speed: ".2"
    }), __jsx("h4", null, "Technologies"), __jsx("div", null, this.services.map((service, index) => __jsx("a", {
      href: service.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'technology-' + index
    }, __jsx("div", null, __jsx("img", {
      src: 'assets/img/' + service.img + '.png',
      alt: service.img
    })), __jsx("span", null, service.name))))), __jsx("div", {
      className: "services__products"
    }, __jsx("h4", null, "Featured Products"), __jsx("div", null, this.products.map((product, index) => __jsx("a", {
      href: product.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'product-' + index
    }, __jsx("img", {
      src: 'assets/img/' + product.img + '.png',
      alt: product.img,
      title: product.link
    })))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (IoT);

/***/ }),

/***/ "./src/pages/components/Services/components/Mobile/Mobile.js":
/*!*******************************************************************!*\
  !*** ./src/pages/components/Services/components/Mobile/Mobile.js ***!
  \*******************************************************************/
/*! exports provided: Mobile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mobile", function() { return Mobile; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Mobile extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "blocks", [{
      titleOnNewLine: false,
      text: 'A Mobile App often serves a very narrow purpose, so the functionality is tailored to that purpose'
    }, {
      name: 'Personalization.',
      titleOnNewLine: false,
      text: 'a smartphone is typically used by a single individual, so an application can be tailored to their preferences'
    }, {
      name: 'Always with you.',
      titleOnNewLine: false,
      text: 'People take their smartphones with them wherever they go'
    }, {
      name: 'Notifications',
      titleOnNewLine: false,
      text: 'allow you to get alerts and information updates in real time'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "choises", [{
      title: 'E-Commerce',
      text: 'Sell creatively in a few hits',
      img: 'mobile-commerce'
    }, {
      title: 'Media',
      text: 'Connect people and content wherever they are',
      img: 'mobile-media'
    }, {
      title: 'Lifestyle and Fitness',
      text: 'Exercice, plan events, and stay healthy on the go',
      img: 'mobile-lifestyle-and-fitness'
    }, {
      title: 'Productivity and Utility',
      text: 'Be more efficient in your day-to-day business activities',
      img: 'mobile-productivity'
    }, {
      title: 'IoT and Automation',
      text: 'Control and monitor your surroundings with a few hits',
      img: 'mobile-iot'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "services", [{
      img: 'services-logo-typescript-angular',
      name: 'Angular',
      link: 'https://angular.io/'
    }, {
      img: 'services-logo-typescript-react',
      name: 'React',
      link: 'https://facebook.github.io/react-native/'
    }, {
      img: 'services-logo-typescript-react',
      name: 'React Native',
      link: 'https://facebook.github.io/react-native/'
    }, {
      img: 'services-logo-ionic',
      name: 'Ionic',
      link: 'https://ionicframework.com/'
    }, {
      img: 'services-logo-typescript',
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/'
    }, {
      img: 'services-logo-typescript-node',
      name: 'Node JS',
      link: 'https://nodejs.org/en/'
    }, {
      img: 'services-logo-mongodb',
      name: 'MongoDB',
      link: 'https://www.mongodb.com/'
    }, {
      img: 'services-logo-mysql',
      name: 'MySQL',
      link: 'https://www.mysql.com/'
    }, {
      img: 'services-logo-firebase',
      name: 'FireBase',
      link: 'https://firebase.google.com/?gclid=EAIaIQobChMI1YWZo4aw5QIV0OeaCh02QgJyEAAYASAAEgJ2j_D_BwE'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deliverables", [{
      title: 'Mobile App',
      img: 'deliv-mobile'
    }, {
      title: 'Admin Dashboard',
      img: 'deliv-dashboard'
    }, {
      title: 'Documentation',
      img: 'deliv-documentation'
    }, {
      title: 'Source code',
      img: 'deliv-sourcecode'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "products", [{
      img: 'laced-logo',
      link: 'https://laced-app.com/'
    }, {
      img: 'hoozeon-logo',
      link: 'https://www.hoozeon.us/'
    }, {
      img: 'activesoul-logo',
      link: 'https://www.activesoul.us/'
    }, {
      img: 'vicki-logo',
      link: 'https://getvicki.com/'
    }, {
      img: 'connected-copper',
      link: 'https://connectedcopper.com/'
    }]);
  }

  render() {
    return __jsx("section", {
      className: "services__mobile"
    }, __jsx("div", {
      className: "container"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "1089px",
      top: "1850px",
      left: "-400px",
      speed: ".2"
    }), __jsx("h3", {
      className: "tab-title"
    }, "Mobile"), __jsx("p", {
      className: "text"
    }, "Mobile Apps came into play in early 2000s and have become more popular each other. Today, Mobile Apps generate the majority of internet traffic and increasingly become the #1 place to shop, find information, socialize, communicate, navigate, play, even bank, and so much more, for many people. This astonishing user adoption is achieved due to a number of factors:"), __jsx("div", {
      className: "services__ul-list"
    }, this.blocks.map((item, index) => __jsx("div", {
      className: "list-item",
      key: index
    }, __jsx("div", {
      className: "list-style"
    }), __jsx("div", null, __jsx("span", {
      className: item.titleOnNewLine ? 'block' : null
    }, item.name), " ", item.text)))), __jsx("div", {
      className: "services__choices"
    }, __jsx("h4", null, "Great choice for"), __jsx("div", {
      className: "choices-list"
    }, this.choises.map((choice, index) => __jsx("div", {
      className: "list-item",
      key: index
    }, __jsx("img", {
      src: `assets/icons/` + choice.img + '.svg',
      alt: choice.img
    }), __jsx("div", null, __jsx("p", null, choice.title), __jsx("p", null, choice.text)))))), __jsx("div", {
      className: "services__approach"
    }, __jsx("h4", null, "Our Approach"), __jsx("div", {
      className: "approach-text"
    }, __jsx("div", null, "Domain Research"), __jsx("div", null, "Product planning"), __jsx("div", null, "Implementation & Delivery"), __jsx("div", null, "Maintenance & Support")), __jsx("img", {
      src: "assets/icons/approach-group-web.svg",
      alt: "group-web"
    })), __jsx("div", {
      className: "services__deliverables"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "735px",
      top: "800px",
      left: "920px",
      speed: ".2"
    }), __jsx("h4", null, "Deliverables"), __jsx("div", null, this.deliverables.map((deliverable, index) => __jsx("div", {
      key: 'deliverable-' + index,
      className: "link-block"
    }, __jsx("img", {
      src: 'assets/icons/' + deliverable.img + '.svg',
      alt: deliverable.img
    }), __jsx("span", null, deliverable.title))))), __jsx("div", {
      className: "services__technologies"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "407px",
      top: "990px",
      left: "-1800px",
      speed: ".2"
    }), __jsx("h4", null, "Technologies"), __jsx("div", null, this.services.map((service, index) => __jsx("a", {
      href: service.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'technology-' + index
    }, __jsx("div", null, __jsx("img", {
      src: 'assets/img/' + service.img + '.png',
      alt: service.img
    })), __jsx("span", null, service.name))))), __jsx("div", {
      className: "services__products"
    }, __jsx("h4", null, "Featured Products"), __jsx("div", null, this.products.map((product, index) => __jsx("a", {
      href: product.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'product-' + index
    }, __jsx("img", {
      src: 'assets/img/' + product.img + '.png',
      alt: product.img,
      title: product.link
    })))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Mobile);

/***/ }),

/***/ "./src/pages/components/Services/components/Services.js":
/*!**************************************************************!*\
  !*** ./src/pages/components/Services/components/Services.js ***!
  \**************************************************************/
/*! exports provided: Services, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Intro_Intro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Intro/Intro */ "./src/pages/components/Services/components/Intro/Intro.js");
/* harmony import */ var _Design_Design__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Design/Design */ "./src/pages/components/Services/components/Design/Design.js");
/* harmony import */ var _Development_Development__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Development/Development */ "./src/pages/components/Services/components/Development/Development.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _commons_utils_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../commons/utils/scroll */ "./src/commons/utils/scroll.js");
/* harmony import */ var _commons_utils_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../commons/utils/main */ "./src/commons/utils/main.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







class Services extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    const query = Object(query_string__WEBPACK_IMPORTED_MODULE_4__["parse"])(window.location.search);

    if (query.activeTab) {
      Object(_commons_utils_main__WEBPACK_IMPORTED_MODULE_6__["later"])().then(() => Object(_commons_utils_scroll__WEBPACK_IMPORTED_MODULE_5__["scrollTo"])('#development'));
    }

    switch (query.section) {
      case 'design':
        Object(_commons_utils_main__WEBPACK_IMPORTED_MODULE_6__["later"])().then(() => Object(_commons_utils_scroll__WEBPACK_IMPORTED_MODULE_5__["scrollTo"])('#design'));
        break;

      case 'development':
        Object(_commons_utils_main__WEBPACK_IMPORTED_MODULE_6__["later"])().then(() => Object(_commons_utils_scroll__WEBPACK_IMPORTED_MODULE_5__["scrollTo"])('#development'));
        break;

      default:
        break;
    }
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx("section", {
      className: "services"
    }, __jsx(_Intro_Intro__WEBPACK_IMPORTED_MODULE_1__["default"], null), __jsx(_Design_Design__WEBPACK_IMPORTED_MODULE_2__["default"], null), __jsx(_Development_Development__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./src/pages/components/Services/components/Web/Web.js":
/*!*************************************************************!*\
  !*** ./src/pages/components/Services/components/Web/Web.js ***!
  \*************************************************************/
/*! exports provided: Web, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Web", function() { return Web; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _commons_Bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../commons/Bubble */ "./src/commons/Bubble/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Web extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "blocks", [{
      text: `
                A single Web Application is available on all types of platforms (Mobile, Web, iOS, Windows, Linux)
                and provides a smooth uniform experience
            `
    }, {
      text: `
                A Web Application is accessible everywhere 
            `
    }, {
      text: `
                A Web Browser is the only app you require. No need to install anything else to use your Web App            `
    }, {
      text: `
                A Web App reduces cost because it eliminates the need to develop and test for various devices
            `
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "choises", [{
      title: 'Businesses and Operational',
      text: 'E-Commerce, CRM, ERP',
      img: 'web-business'
    }, {
      title: 'Reporting and Analytics',
      text: 'Dashboards, Reports, Charts',
      img: 'web-reporting'
    }, {
      title: 'Graphic',
      text: 'Graphic & Design, Detailed Views',
      img: 'web-heavy-duty'
    }, {
      title: 'Content',
      text: 'Blog, Video, Business Information',
      img: 'web-content'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "services", [{
      img: 'services-logo-typescript-angular',
      name: 'Angular',
      link: 'https://angular.io/'
    }, {
      img: 'services-logo-typescript-react',
      name: 'React',
      link: 'https://reactjs.org/'
    }, {
      img: 'services-logo-typescript',
      name: 'TypeScript',
      link: 'https://www.typescriptlang.org/'
    }, {
      img: 'services-logo-typescript-java',
      name: 'Java',
      link: 'https://www.java.com/en/'
    }, {
      img: 'services-logo-typescript-node',
      name: 'Node JS',
      link: 'https://nodejs.org/en/'
    }, {
      img: 'services-logo-mongodb',
      name: 'MongoDB',
      link: 'https://www.mongodb.com/'
    }, {
      img: 'services-logo-mysql',
      name: 'MySQL',
      link: 'https://www.mysql.com/'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "deliverables", [{
      title: 'Web App',
      img: 'deliv-web'
    }, {
      title: 'Admin Dashboard',
      img: 'deliv-dashboard'
    }, {
      title: 'Documentation',
      img: 'deliv-documentation'
    }, {
      title: 'Source Code',
      img: 'deliv-sourcecode'
    }]);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "products", [{
      img: 'myn-logo',
      link: 'https://matchyourneed.com/'
    }, {
      img: 'sparkoffer-logo',
      link: 'https://www.sparkoffer.com/'
    }, {
      img: 'connected-copper',
      link: 'https://connectedcopper.com/'
    }, {
      img: 'gv-logo',
      link: 'https://greenvision-energy.com/'
    }]);
  }

  render() {
    return __jsx("section", {
      className: "services__web"
    }, __jsx("div", {
      className: "container"
    }, __jsx("h3", {
      className: "tab-title"
    }, "Web"), __jsx("p", {
      className: "text"
    }, "The use of Web Applications has boomed since the early days of the internet. Today you almost certainly need a Web Application to operate an online business. There\u2019s simply no other solution that is as efficient and easy to use. Web Apps have been the #1 choice for countless businesses for a number of reasons:"), __jsx("div", {
      className: "services__ul-list"
    }, this.blocks.map((item, index) => __jsx("div", {
      className: "list-item",
      key: index
    }, __jsx("div", {
      className: "list-style"
    }), __jsx("div", null, item.title ? __jsx("span", {
      className: item.titleOnNewLine ? 'block' : null
    }, item.title) : null, item.text)))), __jsx("div", {
      className: "services__choices"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "350px",
      top: "1400px",
      left: "-270px",
      speed: ".4"
    }), __jsx("h4", null, "Great choice for such products"), __jsx("div", {
      className: "choices-list"
    }, this.choises.map((choice, index) => __jsx("div", {
      className: "list-item",
      key: index
    }, __jsx("img", {
      src: `assets/icons/` + choice.img + '.svg',
      alt: choice.img
    }), __jsx("div", null, __jsx("p", null, choice.title), __jsx("p", null, choice.text)))))), __jsx("div", {
      className: "services__approach"
    }, __jsx("h4", null, "Our Approach"), __jsx("div", {
      className: "approach-text"
    }, __jsx("div", null, "Domain Research"), __jsx("div", null, "Product planning"), __jsx("div", null, "Implementation & Delivery"), __jsx("div", null, "Maintenance & Support")), __jsx("img", {
      src: "assets/icons/approach-group-web.svg",
      alt: "group-web"
    })), __jsx("div", {
      className: "services__deliverables"
    }, __jsx("h4", null, "Deliverables"), __jsx("div", null, this.deliverables.map((deliverable, index) => __jsx("div", {
      key: 'deliverable-' + index,
      className: "link-block"
    }, __jsx("img", {
      src: 'assets/icons/' + deliverable.img + '.svg',
      alt: deliverable.img
    }), __jsx("span", null, deliverable.title))))), __jsx("div", {
      className: "services__technologies"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "1089px",
      top: "1740px",
      left: "920px",
      speed: ".2"
    }), __jsx("h4", null, "Technologies"), __jsx("div", null, this.services.map((service, index) => __jsx("a", {
      href: service.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'technology-' + index
    }, __jsx("div", null, __jsx("img", {
      src: 'assets/img/' + service.img + '.png',
      alt: service.img
    })), __jsx("span", null, service.name))))), __jsx("div", {
      className: "services__products"
    }, __jsx(_commons_Bubble__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "306px",
      top: "1315px",
      left: "-1380px",
      speed: ".2"
    }), __jsx("h4", null, "Featured Products"), __jsx("div", null, this.products.map((product, index) => __jsx("a", {
      href: product.link,
      target: "_blank",
      rel: "noopener noreferrer",
      key: 'product-' + index
    }, __jsx("img", {
      src: 'assets/img/' + product.img + '.png',
      alt: product.img,
      title: product.link
    })))))));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Web);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _commons_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commons/Header */ "./src/commons/Header/index.js");
/* harmony import */ var _commons_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../commons/Footer */ "./src/commons/Footer/index.js");
/* harmony import */ var _components_Contacts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Contacts */ "./src/pages/components/Contacts/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../routes */ "./src/routes/index.js");
/* harmony import */ var _commons_SnackBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../commons/SnackBar */ "./src/commons/SnackBar/index.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/pages/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_9__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







 // import {Route, Switch, Redirect} from "react-router-dom";

 // import Home from "./Home/components/Home";
// import Services from "./Services/components/Services";
// import Portfolio from "./Portfolio/components/Portfolio";

class Index extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "onChangePage", path => {
      this.setState({
        path
      });
    });
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_commons_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
      redirect: this.onChangePage
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/components/contacts"
    }, __jsx("div", {
      className: "menu"
    }, "contacts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/testing"
    }, __jsx("div", {
      className: "menu"
    }, "test2")), Object(_routes__WEBPACK_IMPORTED_MODULE_6__["default"])(), __jsx(_components_Contacts__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(_commons_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/pages/index.scss":
/*!******************************!*\
  !*** ./src/pages/index.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_components_Portfolio_components_Portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/components/Portfolio/components/Portfolio */ "./src/pages/components/Portfolio/components/Portfolio.js");
/* harmony import */ var _pages_components_Services_components_Services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/components/Services/components/Services */ "./src/pages/components/Services/components/Services.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_components_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/components/Home */ "./src/pages/components/Home/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






/* harmony default export */ __webpack_exports__["default"] = (() => __jsx("div", {
  className: "App"
}, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_pages_components_Home__WEBPACK_IMPORTED_MODULE_5__["default"], null), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/services",
  component: _pages_components_Services_components_Services__WEBPACK_IMPORTED_MODULE_3__["default"]
}))));

/***/ }),

/***/ "./src/slider-config.js":
/*!******************************!*\
  !*** ./src/slider-config.js ***!
  \******************************/
/*! exports provided: params */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "params", function() { return params; });
const params = {
  autoHeight: true,
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  mousewheel: {
    sensitivity: 2,
    releaseOnEdges: true
  },
  touchReleaseOnEdges: true
};

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./src/pages/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/volodymyr/Documents/oril-new-website/src/pages/index.js */"./src/pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

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

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

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

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-id-swiper":
/*!**********************************!*\
  !*** external "react-id-swiper" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-id-swiper");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

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
//# sourceMappingURL=index.js.map