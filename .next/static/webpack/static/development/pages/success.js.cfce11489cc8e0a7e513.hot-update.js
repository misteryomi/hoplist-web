webpackHotUpdate("static/development/pages/success.js",{

/***/ "./components/Share.js":
/*!*****************************!*\
  !*** ./components/Share.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toast-notifications */ \"./node_modules/react-toast-notifications/dist/index.js\");\n/* harmony import */ var react_toast_notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-copy-to-clipboard */ \"./node_modules/react-copy-to-clipboard/lib/index.js\");\n/* harmony import */ var react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_copy_to_clipboard__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ \"./components/Icon.js\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"./node_modules/@fortawesome/free-brands-svg-icons/index.es.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/clicks/Documents/Apps/hoplist-web/components/Share.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar shareOptions = [{\n  name: 'Facebook',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faFacebook\"],\n  link: 'https://www.facebook.com/sharer.php?u='\n}, {\n  name: 'Twitter',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faTwitter\"],\n  link: 'https://twitter.com/share?url='\n}, {\n  name: 'WhatsApp',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faWhatsapp\"],\n  link: \"https://api.whatsapp.com/send?text=\"\n}, {\n  name: 'Instagram',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faInstagram\"],\n  link: 'https://www.facebook.com/sharer.php?u='\n}, {\n  name: 'LinkedIn',\n  icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__[\"faLinkedin\"],\n  link: 'https://www.linkedin.com/shareArticle?url='\n}];\n\nvar Share = function Share(props) {\n  _s();\n\n  var buttonLabel = props.buttonLabel,\n      className = props.className;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      modal = _useState[0],\n      setModal = _useState[1];\n\n  var toggle = function toggle() {\n    return setModal(!modal);\n  };\n\n  var _useToasts = Object(react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__[\"useToasts\"])(),\n      addToast = _useToasts.addToast;\n\n  var handleCopy = function handleCopy() {\n    setModal(false);\n    addToast('Link copied successfully!', {\n      appearance: 'success',\n      autoDismiss: true\n    });\n  };\n\n  return __jsx(\"div\", {\n    style: {\n      marginLeft: 10\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 5\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, shareOptions.map(function (option, index) {\n    return __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n      md: 1,\n      key: index,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 21\n      }\n    }, __jsx(\"a\", {\n      href: \"\".concat(option.link).concat(props.url),\n      target: \"_blank\",\n      \"class\": \"social-share\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 25\n      }\n    }, __jsx(\"div\", {\n      \"class\": \"social-share-icon\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 29\n      }\n    }, __jsx(\"div\", {\n      \"class\": \"icon-container\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 33\n      }\n    }, __jsx(_Icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      icon: option.icon,\n      fixedWidth: false,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 37\n      }\n    })))));\n  })));\n};\n\n_s(Share, \"x14M2dd3s0aA8UQwwd3JS44a04o=\", false, function () {\n  return [react_toast_notifications__WEBPACK_IMPORTED_MODULE_2__[\"useToasts\"]];\n});\n\n_c = Share;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Share);\n\nvar _c;\n\n$RefreshReg$(_c, \"Share\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NoYXJlLmpzP2ViY2QiXSwibmFtZXMiOlsic2hhcmVPcHRpb25zIiwibmFtZSIsImljb24iLCJmYUZhY2Vib29rIiwibGluayIsImZhVHdpdHRlciIsImZhV2hhdHNhcHAiLCJmYUluc3RhZ3JhbSIsImZhTGlua2VkaW4iLCJTaGFyZSIsInByb3BzIiwiYnV0dG9uTGFiZWwiLCJjbGFzc05hbWUiLCJ1c2VTdGF0ZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJ0b2dnbGUiLCJ1c2VUb2FzdHMiLCJhZGRUb2FzdCIsImhhbmRsZUNvcHkiLCJhcHBlYXJhbmNlIiwiYXV0b0Rpc21pc3MiLCJtYXJnaW5MZWZ0IiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJ1cmwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsWUFBWSxHQUFHLENBQ2pCO0FBQ0lDLE1BQUksRUFBRSxVQURWO0FBRUlDLE1BQUksRUFBRUMsNkVBRlY7QUFHSUMsTUFBSSxFQUFFO0FBSFYsQ0FEaUIsRUFNakI7QUFDSUgsTUFBSSxFQUFFLFNBRFY7QUFFSUMsTUFBSSxFQUFFRyw0RUFGVjtBQUdJRCxNQUFJLEVBQUU7QUFIVixDQU5pQixFQVdqQjtBQUNJSCxNQUFJLEVBQUUsVUFEVjtBQUVJQyxNQUFJLEVBQUVJLDZFQUZWO0FBR0lGLE1BQUksRUFBRTtBQUhWLENBWGlCLEVBZ0JqQjtBQUNJSCxNQUFJLEVBQUUsV0FEVjtBQUVJQyxNQUFJLEVBQUVLLDhFQUZWO0FBR0lILE1BQUksRUFBRTtBQUhWLENBaEJpQixFQXFCakI7QUFDSUgsTUFBSSxFQUFFLFVBRFY7QUFFSUMsTUFBSSxFQUFFTSw2RUFGVjtBQUdJSixNQUFJLEVBQUU7QUFIVixDQXJCaUIsQ0FBckI7O0FBNEJBLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BRXJCQyxXQUZxQixHQUluQkQsS0FKbUIsQ0FFckJDLFdBRnFCO0FBQUEsTUFHckJDLFNBSHFCLEdBSW5CRixLQUptQixDQUdyQkUsU0FIcUI7O0FBQUEsa0JBTUdDLHNEQUFRLENBQUMsS0FBRCxDQU5YO0FBQUEsTUFNaEJDLEtBTmdCO0FBQUEsTUFNVEMsUUFOUzs7QUFRdkIsTUFBTUMsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxXQUFNRCxRQUFRLENBQUMsQ0FBQ0QsS0FBRixDQUFkO0FBQUEsR0FBZjs7QUFSdUIsbUJBU0ZHLDJFQUFTLEVBVFA7QUFBQSxNQVNmQyxRQVRlLGNBU2ZBLFFBVGU7O0FBV3ZCLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkJKLFlBQVEsQ0FBQyxLQUFELENBQVI7QUFDQUcsWUFBUSxDQUFDLDJCQUFELEVBQThCO0FBQ2xDRSxnQkFBVSxFQUFFLFNBRHNCO0FBRWxDQyxpQkFBVyxFQUFFO0FBRnFCLEtBQTlCLENBQVI7QUFJRCxHQU5EOztBQVFBLFNBQ0U7QUFBSyxTQUFLLEVBQUU7QUFBQ0MsZ0JBQVUsRUFBRTtBQUFiLEtBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNRLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJdEIsWUFBWSxDQUFDdUIsR0FBYixDQUFpQixVQUFDQyxNQUFELEVBQVNDLEtBQVQ7QUFBQSxXQUNiLE1BQUMsOENBQUQ7QUFBSyxRQUFFLEVBQUUsQ0FBVDtBQUFZLFNBQUcsRUFBRUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUcsVUFBSSxZQUFLRCxNQUFNLENBQUNwQixJQUFaLFNBQW1CTSxLQUFLLENBQUNnQixHQUF6QixDQUFQO0FBQXVDLFlBQU0sRUFBQyxRQUE5QztBQUF1RCxlQUFNLGNBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSTtBQUFLLGVBQU0sbUJBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJO0FBQUssZUFBTSxnQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyw2Q0FBRDtBQUFNLFVBQUksRUFBRUYsTUFBTSxDQUFDdEIsSUFBbkI7QUFBeUIsZ0JBQVUsRUFBRSxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosQ0FESixDQURKLENBREosQ0FEYTtBQUFBLEdBQWpCLENBSEosQ0FEUixDQURGO0FBc0JELENBekNEOztHQUFNTyxLO1VBU2lCUSxtRTs7O0tBVGpCUixLO0FBMkNTQSxvRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvU2hhcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIE1vZGFsLCBNb2RhbEhlYWRlciwgTW9kYWxCb2R5LCBNb2RhbEZvb3RlciB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgQWxlcnQsIEZvcm0sIFJvdywgQ29sLCBGb3JtR3JvdXAsIExhYmVsLCBJbnB1dCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgdXNlVG9hc3RzIH0gZnJvbSAncmVhY3QtdG9hc3Qtbm90aWZpY2F0aW9ucydcbmltcG9ydCB7Q29weVRvQ2xpcGJvYXJkfSBmcm9tICdyZWFjdC1jb3B5LXRvLWNsaXBib2FyZCc7XG5pbXBvcnQgSWNvbiBmcm9tICcuL0ljb24nO1xuaW1wb3J0IHsgZmFUd2l0dGVyLCBmYUZhY2Vib29rLCBmYVdoYXRzYXBwLCBmYUluc3RhZ3JhbSwgZmFMaW5rZWRpbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnXG5cbmNvbnN0IHNoYXJlT3B0aW9ucyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdGYWNlYm9vaycsXG4gICAgICAgIGljb246IGZhRmFjZWJvb2sgLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnVHdpdHRlcicsXG4gICAgICAgIGljb246IGZhVHdpdHRlcixcbiAgICAgICAgbGluazogJ2h0dHBzOi8vdHdpdHRlci5jb20vc2hhcmU/dXJsPScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdXaGF0c0FwcCcsXG4gICAgICAgIGljb246IGZhV2hhdHNhcHAsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD1cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ0luc3RhZ3JhbScsXG4gICAgICAgIGljb246IGZhSW5zdGFncmFtLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci5waHA/dT0nLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnTGlua2VkSW4nLFxuICAgICAgICBpY29uOiBmYUxpbmtlZGluLFxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL3NoYXJlQXJ0aWNsZT91cmw9JyxcbiAgICB9LFxuXVxuXG5jb25zdCBTaGFyZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgYnV0dG9uTGFiZWwsXG4gICAgY2xhc3NOYW1lXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBbbW9kYWwsIHNldE1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdHMoKVxuXG4gIGNvbnN0IGhhbmRsZUNvcHkgPSAoKSA9PiB7XG4gICAgc2V0TW9kYWwoZmFsc2UpO1xuICAgIGFkZFRvYXN0KCdMaW5rIGNvcGllZCBzdWNjZXNzZnVsbHkhJywge1xuICAgICAgICBhcHBlYXJhbmNlOiAnc3VjY2VzcycsXG4gICAgICAgIGF1dG9EaXNtaXNzOiB0cnVlLFxuICAgICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17e21hcmdpbkxlZnQ6IDEwfX0+XG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIHsvKiA8Q29sIG1kPXsxfSAvPiAqL31cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaGFyZU9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MX0ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgJHtvcHRpb24ubGlua30ke3Byb3BzLnVybH1gfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cInNvY2lhbC1zaGFyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtc2hhcmUtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGljb249e29wdGlvbi5pY29ufSBmaXhlZFdpZHRoPXtmYWxzZX0gLz4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtvcHRpb24ubmFtZX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXJlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Share.js\n");

/***/ })

})