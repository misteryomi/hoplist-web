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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__("oL/c");

// CONCATENATED MODULE: ./components/Navbar.js
var __jsx = external_react_default.a.createElement;



const PageNavbar = props => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(external_react_["useState"])(false);
  const {
    0: showSidebar,
    1: setShowSidebar
  } = Object(external_react_["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  return __jsx("div", {
    className: "_navbar"
  }, __jsx(external_reactstrap_["Navbar"], {
    color: "faded",
    light: true,
    expand: "md"
  }, __jsx(external_reactstrap_["Container"], null, __jsx(external_reactstrap_["NavbarBrand"], {
    href: "/",
    className: "logo"
  }, "Hoplist"), __jsx(external_reactstrap_["NavbarToggler"], {
    onClick: toggle
  }), __jsx(external_reactstrap_["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, __jsx(external_reactstrap_["Nav"], {
    className: "ml-auto",
    navbar: true
  }, __jsx(external_reactstrap_["NavItem"], null, __jsx(external_reactstrap_["NavLink"], {
    href: "/"
  }, "Feedback / Support")), __jsx(external_reactstrap_["NavItem"], null, __jsx(external_reactstrap_["NavLink"], {
    href: "/"
  }, "FAQs")))))));
};

/* harmony default export */ var Navbar = (PageNavbar);
// CONCATENATED MODULE: ./components/Layout.js

var Layout_jsx = external_react_default.a.createElement;




const Layout = props => Layout_jsx("div", null, Layout_jsx(head_default.a, null, Layout_jsx("title", null, "Hoplist"), Layout_jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width"
}), Layout_jsx("link", {
  rel: "stylesheet",
  href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css",
  integrity: "sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk",
  crossOrigin: "anonymous"
}), Layout_jsx("link", {
  href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",
  rel: "stylesheet",
  integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",
  crossorigin: "anonymous"
}), Layout_jsx("script", {
  src: "https://rave-api-v2.herokuapp.com/flwv3-pug/getpaidx/api/flwpbf-inline.js"
})), Layout_jsx("div", {
  style: {
    marginBottom: 20
  }
}, Layout_jsx(Navbar, null)), Layout_jsx(external_reactstrap_["Container"], null, props.children));

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: external "react-toast-notifications"
var external_react_toast_notifications_ = __webpack_require__("C1xe");

// EXTERNAL MODULE: ./theme/style.scss
var style = __webpack_require__("uuGP");

// CONCATENATED MODULE: ./components/Toast.js
var Toast_jsx = external_react_default.a.createElement;




const Toast = ({
  content,
  title
}) => {
  const {
    addToast
  } = Object(external_react_toast_notifications_["useToasts"])();
  console.log({
    content
  });
  return Toast_jsx(external_reactstrap_["Button"], {
    className: "btn btn-success",
    onClick: () => addToast('Link copied successfully!', {
      appearance: 'success',
      autoDismiss: true
    })
  }, title);
};

/* harmony default export */ var components_Toast = (Toast);
// CONCATENATED MODULE: ./pages/_app.js

var _app_jsx = external_react_default.a.createElement;
// import App from 'next/app'





function MyApp({
  Component,
  pageProps
}) {
  return _app_jsx(components_Layout, null, _app_jsx(external_react_toast_notifications_["ToastProvider"], {
    autoDismiss: true,
    autoDismissTimeout: 3000 // components={{ Toast: ToastDisplay }}
    ,
    placement: "top-center"
  }, _app_jsx(Component, pageProps)));
} // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }


/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "C1xe":
/***/ (function(module, exports) {

module.exports = require("react-toast-notifications");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "oL/c":
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "uuGP":
/***/ (function(module, exports) {



/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });