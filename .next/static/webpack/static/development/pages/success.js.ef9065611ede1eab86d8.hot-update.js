webpackHotUpdate("static/development/pages/success.js",{

/***/ "./pages/success.js":
/*!**************************!*\
  !*** ./pages/success.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Icon */ \"./components/Icon.js\");\n/* harmony import */ var _components_ShareModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ShareModal */ \"./components/ShareModal.js\");\n/* harmony import */ var _components_DownloadBtns__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/DownloadBtns */ \"./components/DownloadBtns.js\");\n/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-avatar */ \"./node_modules/react-avatar/es/index.js\");\n/* harmony import */ var react_flutterwave_rave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-flutterwave-rave */ \"./node_modules/react-flutterwave-rave/build/index.js\");\n/* harmony import */ var react_flutterwave_rave__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_flutterwave_rave__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_JoinModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/JoinModal */ \"./components/JoinModal.js\");\n/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Share */ \"./components/Share.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/axios */ \"./utils/axios.js\");\n/* harmony import */ var _utils_axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_utils_axios__WEBPACK_IMPORTED_MODULE_15__);\n\n\nvar _jsxFileName = \"/Users/clicks/Documents/Apps/hoplist-web/pages/success.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction Success(_ref) {\n  var data = _ref.data,\n      query = _ref.query;\n\n  if (!data.status) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 13\n      }\n    }, \"An error occured\");\n  }\n\n  var ticket = data.data;\n  return __jsx(\"div\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"/static/images/hooray.png\",\n    style: {\n      width: 150\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    className: \"mt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n    md: \"8\",\n    className: \"mx-auto\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }\n  }, \"Hooray! Successful!!\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }\n  }, \"You've successfully joined \", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 43\n    }\n  }, ticket.activity.title), \", the details of the activity has been sent to \", __jsx(\"strong\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 130\n    }\n  }, ticket.email)), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }\n  }, \"You can share this activity for your friends on\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"col-md-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  }, __jsx(_components_Share__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    nocap: true,\n    url: \"https://www.hoplist.co/activity/\".concat(ticket.activityId),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 15\n    }\n  }))))));\n}\n\n_c = Success;\n\nSuccess.getInitialProps = /*#__PURE__*/function () {\n  var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {\n    var query, res, json;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            query = _ref2.query;\n            _context.next = 3;\n            return _utils_axios__WEBPACK_IMPORTED_MODULE_15___default()(\"/tickets/\".concat(query.ticket));\n\n          case 3:\n            res = _context.sent;\n            _context.next = 6;\n            return res.data;\n\n          case 6:\n            json = _context.sent;\n            return _context.abrupt(\"return\", {\n              data: json,\n              query: query\n            });\n\n          case 8:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Success);\n\nvar _c;\n\n$RefreshReg$(_c, \"Success\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zdWNjZXNzLmpzP2FmNzMiXSwibmFtZXMiOlsiU3VjY2VzcyIsImRhdGEiLCJxdWVyeSIsInN0YXR1cyIsInRpY2tldCIsIndpZHRoIiwiYWN0aXZpdHkiLCJ0aXRsZSIsImVtYWlsIiwiYWN0aXZpdHlJZCIsImdldEluaXRpYWxQcm9wcyIsImF4aW9zIiwicmVzIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsT0FBVCxPQUFnQztBQUFBLE1BQWRDLElBQWMsUUFBZEEsSUFBYztBQUFBLE1BQVJDLEtBQVEsUUFBUkEsS0FBUTs7QUFHOUIsTUFBRyxDQUFDRCxJQUFJLENBQUNFLE1BQVQsRUFBaUI7QUFDZixXQUFRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBQVI7QUFDRDs7QUFDRCxNQUFNQyxNQUFNLEdBQUdILElBQUksQ0FBQ0EsSUFBcEI7QUFFQSxTQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJO0FBQUssT0FBRyxFQUFDLDJCQUFUO0FBQXFDLFNBQUssRUFBRTtBQUFDSSxXQUFLLEVBQUU7QUFBUixLQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFLSSxNQUFDLDhDQUFEO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsOENBQUQ7QUFBSyxNQUFFLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxTQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU0QsTUFBTSxDQUFDRSxRQUFQLENBQWdCQyxLQUF6QixDQUE5QixxREFBcUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTSCxNQUFNLENBQUNJLEtBQWhCLENBQXJILENBSEYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVEQUxGLEVBT0UsTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFNLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMERBQUQ7QUFBTyxTQUFLLE1BQVo7QUFBYSxPQUFHLDRDQUFxQ0osTUFBTSxDQUFDSyxVQUE1QyxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FEQSxDQVBGLENBREYsQ0FMSixDQURGO0FBMEJEOztLQWxDUVQsTzs7QUFvQ1RBLE9BQU8sQ0FBQ1UsZUFBUjtBQUFBLCtMQUEwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBUVIsaUJBQVIsU0FBUUEsS0FBUjtBQUFBO0FBQUEsbUJBQ05TLG9EQUFLLG9CQUFhVCxLQUFLLENBQUNFLE1BQW5CLEVBREM7O0FBQUE7QUFDbEJRLGVBRGtCO0FBQUE7QUFBQSxtQkFFTEEsR0FBRyxDQUFDWCxJQUZDOztBQUFBO0FBRWxCWSxnQkFGa0I7QUFBQSw2Q0FHakI7QUFBRVosa0JBQUksRUFBRVksSUFBUjtBQUFjWCxtQkFBSyxFQUFMQTtBQUFkLGFBSGlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQTFCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1lRixzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3N1Y2Nlc3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sLCBCdXR0b24sIEFsZXJ0IH0gZnJvbSAncmVhY3RzdHJhcCc7XG5pbXBvcnQgeyBmYUhlYXJ0LCBmYUNvbW1lbnRBbHQsIGZhQ2FsZW5kYXIsIGZhQ2xvY2sgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1yZWd1bGFyLXN2Zy1pY29ucyc7XG5pbXBvcnQgeyBmYVNoYXJlLCBmYVNoYXJlQWx0LCBmYVNoaWVsZEFsdCwgZmFTaGllbGRWaXJ1cywgZmFTZWFyY2hMb2NhdGlvbiwgZmFNYXBNYXJrZWQsIGZhTWFwTWFya2VkQWx0LCBmYU1hcFBpbiwgZmFNYXBNYXJrZXIsIGZhTWFwTWFya2VyQWx0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBJY29uIGZyb20gJy4uL2NvbXBvbmVudHMvSWNvbic7XG5pbXBvcnQgU2hhcmVNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlTW9kYWwnO1xuaW1wb3J0IERvd25sb2FkQnRucyBmcm9tICcuLi9jb21wb25lbnRzL0Rvd25sb2FkQnRucyc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ3JlYWN0LWF2YXRhcic7XG5pbXBvcnQgUmF2ZSBmcm9tICdyZWFjdC1mbHV0dGVyd2F2ZS1yYXZlJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBKb2luTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9Kb2luTW9kYWwnO1xuaW1wb3J0IFNoYXJlIGZyb20gJy4uL2NvbXBvbmVudHMvU2hhcmUnO1xuaW1wb3J0IGF4aW9zIGZyb20gJy4uL3V0aWxzL2F4aW9zJztcblxuXG5mdW5jdGlvbiBTdWNjZXNzKHtkYXRhLCBxdWVyeX0pIHtcblxuICBcbiAgaWYoIWRhdGEuc3RhdHVzKSB7XG4gICAgcmV0dXJuICg8ZGl2PkFuIGVycm9yIG9jY3VyZWQ8L2Rpdj4gKVxuICB9XG4gIGNvbnN0IHRpY2tldCA9IGRhdGEuZGF0YTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cblxuXG4gICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaG9vcmF5LnBuZ1wiIHN0eWxlPXt7d2lkdGg6IDE1MH19IC8+XG5cbiAgICAgICAgPFJvdyBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgPENvbCBtZD1cIjhcIiBjbGFzc05hbWU9XCJteC1hdXRvXCI+XG4gICAgICAgICAgICA8aDM+SG9vcmF5ISBTdWNjZXNzZnVsISE8L2gzPlxuXG4gICAgICAgICAgICA8cD5Zb3UndmUgc3VjY2Vzc2Z1bGx5IGpvaW5lZCA8c3Ryb25nPnt0aWNrZXQuYWN0aXZpdHkudGl0bGV9PC9zdHJvbmc+LCB0aGUgZGV0YWlscyBvZiB0aGUgYWN0aXZpdHkgaGFzIGJlZW4gc2VudCB0byA8c3Ryb25nPnt0aWNrZXQuZW1haWx9PC9zdHJvbmc+PC9wPlxuXG4gICAgICAgICAgICA8cD5Zb3UgY2FuIHNoYXJlIHRoaXMgYWN0aXZpdHkgZm9yIHlvdXIgZnJpZW5kcyBvbjwvcD5cblxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8U2hhcmUgbm9jYXAgdXJsPXtgaHR0cHM6Ly93d3cuaG9wbGlzdC5jby9hY3Rpdml0eS8ke3RpY2tldC5hY3Rpdml0eUlkfWB9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgICAgPC9Db2w+XG4gICAgICAgIDwvUm93PlxuXG5cbiAgICAgPC9kaXY+XG4gIClcbn1cblxuU3VjY2Vzcy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe3F1ZXJ5fSkgPT4ge1xuICBjb25zdCByZXMgPSBhd2FpdCBheGlvcyhgL3RpY2tldHMvJHtxdWVyeS50aWNrZXR9YClcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5kYXRhXG4gIHJldHVybiB7IGRhdGE6IGpzb24sIHF1ZXJ5IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3VjY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/success.js\n");

/***/ })

})