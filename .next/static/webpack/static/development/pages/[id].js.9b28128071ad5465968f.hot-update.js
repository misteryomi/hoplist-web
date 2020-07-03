webpackHotUpdate("static/development/pages/[id].js",{

/***/ "./components/Share.js":
/*!*****************************!*\
  !*** ./components/Share.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/clicks/Documents/Apps/hoplist-web/components/Share.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar shareOptions = [{\n  name: 'Facebook',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faFacebook\"],\n  link: 'http://facebook.com/#'\n}, {\n  name: 'Twitter',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faTwitter\"],\n  link: '#'\n}, {\n  name: 'WhatsApp',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faWhatsapp\"],\n  link: '#'\n}, {\n  name: 'Instagram',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faInstagram\"],\n  link: '#'\n}, {\n  name: 'LinkedIn',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faLinkedin\"],\n  link: '#'\n}];\n\nvar Share = function Share(props) {\n  _s();\n\n  var buttonLabel = props.buttonLabel,\n      className = props.className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var toggle = function toggle() {\n    return setModal(!modal);\n  };\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  var handleCopy = function handleCopy() {\n    setModal(false);\n    addToast('Link copied successfully!', {\n      appearance: 'success',\n      autoDismiss: true\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n    md: 1,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }), shareOptions.map(function (option, index) {\n    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      md: 2,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      href: option.link,\n      target: \"_blank\",\n      \"class\": \"social-share\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 25\n      }\n    }, __jsx(\"div\", {\n      \"class\": \"social-share-icon\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 29\n      }\n    }, __jsx(\"div\", {\n      \"class\": \"icon-container\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 33\n      }\n    }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      icon: option.icon,\n      fixedWidth: false,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 37\n      }\n    }))), option.name));\n  })), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 13\n    }\n  }), __jsx(\"h4\", {\n    className: \"text-left\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }\n  }, \"Copy Link\"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    inline: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 13\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"FormGroup\"], {\n    style: {\n      width: '80%'\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 17\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n    type: \"text\",\n    style: {\n      width: '100%'\n    },\n    name: \"password\",\n    id: \"link\",\n    placeholder: props.url,\n    disabled: true,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 21\n    }\n  })), ' ', __jsx(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__[\"CopyToClipboard\"], {\n    text: props.url,\n    onCopy: handleCopy,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 17\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    color: \"dark\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 17\n    }\n  }, \"Copy\"))), __jsx(\"hr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(Share, \"x14M2dd3s0aA8UQwwd3JS44a04o=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__[\"useToasts\"]];\n});\n\n_c = Share;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);\n\nvar _c;\n\n$RefreshReg$(_c, \"Share\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NoYXJlLmpzP2ViY2QiXSwibmFtZXMiOlsic2hhcmVPcHRpb25zIiwibmFtZSIsImljb24iLCJmYUZhY2Vib29rIiwibGluayIsImZhVHdpdHRlciIsImZhV2hhdHNhcHAiLCJmYUluc3RhZ3JhbSIsImZhTGlua2VkaW4iLCJTaGFyZSIsInByb3BzIiwiYnV0dG9uTGFiZWwiLCJjbGFzc05hbWUiLCJ1c2VTdGF0ZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJ0b2dnbGUiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsImhhbmRsZUNvcHkiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJtYXAiLCJvcHRpb24iLCJpbmRleCIsIndpZHRoIiwidXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBRyxDQUNqQjtBQUNJQyxNQUFJLEVBQUUsVUFEVjtBQUVJQyxNQUFJLEVBQUVDLDZFQUZWO0FBR0lDLE1BQUksRUFBRTtBQUhWLENBRGlCLEVBTWpCO0FBQ0lILE1BQUksRUFBRSxTQURWO0FBRUlDLE1BQUksRUFBRUcsNEVBRlY7QUFHSUQsTUFBSSxFQUFFO0FBSFYsQ0FOaUIsRUFXakI7QUFDSUgsTUFBSSxFQUFFLFVBRFY7QUFFSUMsTUFBSSxFQUFFSSw2RUFGVjtBQUdJRixNQUFJLEVBQUU7QUFIVixDQVhpQixFQWdCakI7QUFDSUgsTUFBSSxFQUFFLFdBRFY7QUFFSUMsTUFBSSxFQUFFSyw4RUFGVjtBQUdJSCxNQUFJLEVBQUU7QUFIVixDQWhCaUIsRUFxQmpCO0FBQ0lILE1BQUksRUFBRSxVQURWO0FBRUlDLE1BQUksRUFBRU0sNkVBRlY7QUFHSUosTUFBSSxFQUFFO0FBSFYsQ0FyQmlCLENBQXJCOztBQTRCQSxJQUFNSyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUVy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RDtBQUFRLFNBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEQSxDQU5KLENBcEJSLEVBaUNRO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ1IsQ0FERjtBQXFDRCxDQXhERDs7R0FBTVYsSztVQVNpQlEsbUU7OztLQVRqQlIsSztBQTBEU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NoYXJlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnV0dG9uLCBNb2RhbCwgTW9kYWxIZWFkZXIsIE1vZGFsQm9keSwgTW9kYWxGb290ZXIgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IEFsZXJ0LCBGb3JtLCBSb3csIENvbCwgRm9ybUdyb3VwLCBMYWJlbCwgSW5wdXQgfSBmcm9tICdyZWFjdHN0cmFwJztcbmltcG9ydCB7IHVzZVRvYXN0cyB9IGZyb20gJ3JlYWN0LXRvYXN0LW5vdGlmaWNhdGlvbnMnXG5pbXBvcnQge0NvcHlUb0NsaXBib2FyZH0gZnJvbSAncmVhY3QtY29weS10by1jbGlwYm9hcmQnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9JY29uJztcbmltcG9ydCB7IGZhVHdpdHRlciwgZmFGYWNlYm9vaywgZmFXaGF0c2FwcCwgZmFJbnN0YWdyYW0sIGZhTGlua2VkaW4gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJ1xuXG5jb25zdCBzaGFyZU9wdGlvbnMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnRmFjZWJvb2snLFxuICAgICAgICBpY29uOiBmYUZhY2Vib29rICxcbiAgICAgICAgbGluazogJ2h0dHA6Ly9mYWNlYm9vay5jb20vIycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdUd2l0dGVyJyxcbiAgICAgICAgaWNvbjogZmFUd2l0dGVyLFxuICAgICAgICBsaW5rOiAnIycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdXaGF0c0FwcCcsXG4gICAgICAgIGljb246IGZhV2hhdHNhcHAsXG4gICAgICAgIGxpbms6ICcjJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0luc3RhZ3JhbScsXG4gICAgICAgIGljb246IGZhSW5zdGFncmFtLFxuICAgICAgICBsaW5rOiAnIycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdMaW5rZWRJbicsXG4gICAgICAgIGljb246IGZhTGlua2VkaW4sXG4gICAgICAgIGxpbms6ICcjJyxcbiAgICB9LFxuXVxuXG5jb25zdCBTaGFyZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYnV0dG9uTGFiZWwsXG4gICAgY2xhc3NOYW1lXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxuXG4gIGNvbnN0IGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoZmFsc2UpO1xuICAgIGFkZFRvYXN0KCdMaW5rIGNvcGllZCBzdWNjZXNzZnVsbHkhJywge1xuICAgICAgICBhcHBlYXJhbmNlOiAnc3VjY2VzcycsXG4gICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlLFxuICAgICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgPENvbCBtZD17MX0gLz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaGFyZU9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17Mn0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtvcHRpb24ubGlua30gdGFyZ2V0PVwiX2JsYW5rXCIgY2xhc3M9XCJzb2NpYWwtc2hhcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsLXNoYXJlLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImljb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtvcHRpb24uaWNvbn0gZml4ZWRXaWR0aD17ZmFsc2V9IC8+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb24ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8aHIvPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPkNvcHkgTGluazwvaDQ+XG4gICAgICAgICAgICA8Rm9ybSBpbmxpbmUgPlxuICAgICAgICAgICAgICAgIDxGb3JtR3JvdXAgc3R5bGU9e3t3aWR0aDogJzgwJSd9fSA+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319ICBuYW1lPVwicGFzc3dvcmRcIiBpZD1cImxpbmtcIiBwbGFjZWhvbGRlcj17cHJvcHMudXJsfSBkaXNhYmxlZC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICB7LyogPFRvYXN0IHRpdGxlPVwiQ29weVwiIGNvbnRlbnQ9XCJMaW5rIGNvcGllZCB0byBjbGlwYm9hcmRcIi8+ICovfVxuICAgICAgICAgICAgICAgIDxDb3B5VG9DbGlwYm9hcmQgdGV4dD17cHJvcHMudXJsfSBvbkNvcHk9e2hhbmRsZUNvcHl9PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJkYXJrXCI+XG4gICAgICAgICAgICAgICAgICAgIENvcHlcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0NvcHlUb0NsaXBib2FyZD5cbiAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgPGhyLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Share.js\n");

/***/ })

})