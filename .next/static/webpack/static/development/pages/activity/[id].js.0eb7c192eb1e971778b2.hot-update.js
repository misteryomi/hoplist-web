webpackHotUpdate("static/development/pages/activity/[id].js",{

/***/ "./pages/activity/[id].js":
/*!********************************!*\
  !*** ./pages/activity/[id].js ***!
  \********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ \"./node_modules/reactstrap/es/index.js\");\n/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ \"./node_modules/@fortawesome/free-regular-svg-icons/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.es.js\");\n/* harmony import */ var _components_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Icon */ \"./components/Icon.js\");\n/* harmony import */ var _components_ShareModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ShareModal */ \"./components/ShareModal.js\");\n/* harmony import */ var _components_DownloadBtns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/DownloadBtns */ \"./components/DownloadBtns.js\");\n/* harmony import */ var react_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-avatar */ \"./node_modules/react-avatar/es/index.js\");\n/* harmony import */ var react_flutterwave_rave__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-flutterwave-rave */ \"./node_modules/react-flutterwave-rave/build/index.js\");\n/* harmony import */ var react_flutterwave_rave__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_flutterwave_rave__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _components_JoinForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/JoinForm */ \"./components/JoinForm.js\");\n/* harmony import */ var mdi_react_ShieldCheckIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! mdi-react/ShieldCheckIcon */ \"./node_modules/mdi-react/ShieldCheckIcon.js\");\n/* harmony import */ var mdi_react_ShieldCheckIcon__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(mdi_react_ShieldCheckIcon__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Share */ \"./components/Share.js\");\n/* harmony import */ var _components_SocialLinks__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/SocialLinks */ \"./components/SocialLinks.js\");\nvar _jsxFileName = \"/Users/clicks/Documents/Apps/hoplist-web/pages/activity/[id].js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  var data = _ref.data;\n  console.log({\n    data: data\n  });\n\n  if (!data.status) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }\n    }, \"An error occured\");\n  }\n\n  var activity = data.data;\n  return __jsx(\"div\", {\n    className: \"activity-details\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 5\n    }\n  }, activity.images.length > 0 && __jsx(\"div\", {\n    className: \"activity-image\",\n    style: {\n      backgroundImage: \"url('\" + activity.images[0] + \"')\"\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }), __jsx(\"h4\", {\n    \"class\": \"mt-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, \"You are invited to join\"), __jsx(\"h1\", {\n    className: \"activity-title mb-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, activity.title), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    md: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 12\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"date-time\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 15\n    }\n  }, __jsx(_components_Icon__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    icon: _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_3__[\"faCalendar\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 17\n    }\n  }), \" \\xA0 \\xA0 \", moment__WEBPACK_IMPORTED_MODULE_13___default()(activity.dateTime).format('dddd DD MMM, HH:MM a')), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 21\n    }\n  }), __jsx(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 15\n    }\n  }), __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 15\n    }\n  }, \"About this activity\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 15\n    }\n  }, activity.description), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }), __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 20\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    md: 2,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 17\n    }\n  }, __jsx(react_avatar__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    size: \"80\",\n    color: \"#FC4A1A\",\n    src: activity.user.profileImage,\n    round: true,\n    name: \"\".concat(activity.user.firstName, \" \").concat(activity.user.lastName),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 19\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    md: \"1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 17\n    }\n  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 17\n    }\n  }, __jsx(\"br\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 17\n    }\n  }), __jsx(\"h3\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 19\n    }\n  }, \"\".concat(activity.user.firstName, \" \").concat(activity.user.lastName)), __jsx(\"span\", {\n    className: \"text-gray\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 19\n    }\n  }, \"Creator\"))), __jsx(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }), __jsx(\"h4\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 15\n    }\n  }, \"Share with friends\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 15\n    }\n  }, \"You can share this activity with your friends via:\"), __jsx(_components_Share__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    url: \"#\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 15\n    }\n  })), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    md: 6,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 12\n    }\n  }, __jsx(_components_JoinForm__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n    activity_id: activity._id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }))), __jsx(\"hr\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"footer\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }\n  }, \"Try something new with your community today\"), __jsx(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }\n  }, \"Download the App\"), __jsx(_components_DownloadBtns__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    inverse: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  })), __jsx(\"div\", {\n    \"class\": \"m-4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 9\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Row\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 13\n    }\n  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    md: \"10\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 15\n    }\n  }, __jsx(\"a\", {\n    href: \"/privacy\",\n    className: \"text-dark mr-3\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }, \"Privacy\"), __jsx(\"a\", {\n    href: \"/terms\",\n    className: \"text-dark\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }, \"Terms of use\")), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_2__[\"Col\"], {\n    md: \"2\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 15\n    }\n  }, __jsx(_components_SocialLinks__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n    url: \"https://hoplist.co/activity/\".concat(activity._id),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 19\n    }\n  })))));\n}\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hY3Rpdml0eS8uanM/N2EzMCJdLCJuYW1lcyI6WyJIb21lIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJhY3Rpdml0eSIsImltYWdlcyIsImxlbmd0aCIsImJhY2tncm91bmRJbWFnZSIsInRpdGxlIiwiZmFDYWxlbmRhciIsIm1vbWVudCIsImRhdGVUaW1lIiwiZm9ybWF0IiwiZGVzY3JpcHRpb24iLCJ1c2VyIiwicHJvZmlsZUltYWdlIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJfaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFZSxTQUFTQSxJQUFULE9BQXNCO0FBQUEsTUFBUEMsSUFBTyxRQUFQQSxJQUFPO0FBR25DQyxTQUFPLENBQUNDLEdBQVIsQ0FBWTtBQUFDRixRQUFJLEVBQUpBO0FBQUQsR0FBWjs7QUFLQSxNQUFHLENBQUNBLElBQUksQ0FBQ0csTUFBVCxFQUFpQjtBQUNmLFdBQVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFBUjtBQUNEOztBQUVELE1BQU1DLFFBQVEsR0FBR0osSUFBSSxDQUFDQSxJQUF0QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0JDLE1BQWhCLEdBQXlCLENBQXpCLElBQ0M7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBZ0MsU0FBSyxFQUFFO0FBQUNDLHFCQUFlLEVBQUUsVUFBU0gsUUFBUSxDQUFDQyxNQUFULENBQWdCLENBQWhCLENBQVQsR0FBNEI7QUFBOUMsS0FBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVB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QUE7QUFBQSxJQURKLENBTEYsQ0FGSixDQXZESixDQURGO0FBd0VEO0tBckZ1Qm5CLEkiLCJmaWxlIjoiLi9wYWdlcy9hY3Rpdml0eS9baWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCwgQnV0dG9uLCBBbGVydCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuaW1wb3J0IHsgZmFIZWFydCwgZmFDb21tZW50QWx0LCBmYUNhbGVuZGFyLCBmYUNsb2NrIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtcmVndWxhci1zdmctaWNvbnMnO1xuaW1wb3J0IHsgZmFTaGFyZSwgZmFTaGFyZUFsdCwgZmFTaGllbGRBbHQsIGZhU2hpZWxkVmlydXMsIGZhU2VhcmNoTG9jYXRpb24sIGZhTWFwTWFya2VkLCBmYU1hcE1hcmtlZEFsdCwgZmFNYXBQaW4sIGZhTWFwTWFya2VyLCBmYU1hcE1hcmtlckFsdCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQgSWNvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ljb24nO1xuaW1wb3J0IFNoYXJlTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TaGFyZU1vZGFsJztcbmltcG9ydCBEb3dubG9hZEJ0bnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Eb3dubG9hZEJ0bnMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdyZWFjdC1hdmF0YXInO1xuaW1wb3J0IFJhdmUgZnJvbSAncmVhY3QtZmx1dHRlcndhdmUtcmF2ZSdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgSm9pbkZvcm0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Kb2luRm9ybSc7XG5pbXBvcnQgU2hpZWxkQ2hlY2tJY29uIGZyb20gJ21kaS1yZWFjdC9TaGllbGRDaGVja0ljb24nO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL3V0aWxzL2F4aW9zJztcbmltcG9ydCBTaGFyZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NoYXJlJztcbmltcG9ydCBTb2NpYWxMaW5rcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NvY2lhbExpbmtzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7ZGF0YX0pIHtcblxuXG4gIGNvbnNvbGUubG9nKHtkYXRhfSlcblxuXG5cblxuICBpZighZGF0YS5zdGF0dXMpIHtcbiAgICByZXR1cm4gKDxkaXY+QW4gZXJyb3Igb2NjdXJlZDwvZGl2PiApXG4gIH1cblxuICBjb25zdCBhY3Rpdml0eSA9IGRhdGEuZGF0YTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWRldGFpbHNcIj5cbiAgICAgIHthY3Rpdml0eS5pbWFnZXMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aXZpdHktaW1hZ2VcIiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogXCJ1cmwoJ1wiKyBhY3Rpdml0eS5pbWFnZXNbMF0rXCInKVwifX0+PC9kaXY+XG4gICAgICApfVxuXG4gICAgICAgIDxoNCBjbGFzcz1cIm10LTRcIj5Zb3UgYXJlIGludml0ZWQgdG8gam9pbjwvaDQ+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJhY3Rpdml0eS10aXRsZSBtYi00XCI+e2FjdGl2aXR5LnRpdGxlfTwvaDE+XG5cbiAgICAgICAgPFJvdz5cbiAgICAgICAgICAgPENvbCBtZD17Nn0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXRpbWVcIj5cbiAgICAgICAgICAgICAgICA8SWNvbiBpY29uPXtmYUNhbGVuZGFyfSAvPiAmbmJzcDsgJm5ic3A7IHttb21lbnQoYWN0aXZpdHkuZGF0ZVRpbWUpLmZvcm1hdCgnZGRkZCBERCBNTU0sIEhIOk1NIGEnKX1cbiAgICAgICAgICAgICAgPC9kaXY+PGJyLz5cbiAgICAgICAgICAgICAgPGhyLz5cbiAgICAgICAgICAgICAgPGg0PkFib3V0IHRoaXMgYWN0aXZpdHk8L2g0PlxuICAgICAgICAgICAgICA8cD57YWN0aXZpdHkuZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsyfT5cbiAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT1cIjgwXCIgY29sb3I9XCIjRkM0QTFBXCIgc3JjPXthY3Rpdml0eS51c2VyLnByb2ZpbGVJbWFnZX0gcm91bmQgbmFtZT17YCR7YWN0aXZpdHkudXNlci5maXJzdE5hbWV9ICR7YWN0aXZpdHkudXNlci5sYXN0TmFtZX1gfSAgLz5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICA8Q29sIG1kPVwiMVwiLz5cbiAgICAgICAgICAgICAgICA8Q29sPiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICA8aDM+e2Ake2FjdGl2aXR5LnVzZXIuZmlyc3ROYW1lfSAke2FjdGl2aXR5LnVzZXIubGFzdE5hbWV9YH08L2gzPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5XCI+Q3JlYXRvcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgPC9Sb3c+ICBcblxuICAgICAgICAgICAgICA8aHIvPlxuXG4gICAgICAgICAgICAgIDxoND5TaGFyZSB3aXRoIGZyaWVuZHM8L2g0PlxuICAgICAgICAgICAgICA8cD5Zb3UgY2FuIHNoYXJlIHRoaXMgYWN0aXZpdHkgd2l0aCB5b3VyIGZyaWVuZHMgdmlhOjwvcD5cblxuICAgICAgICAgICAgICA8U2hhcmUgdXJsPVwiI1wiIC8+XG4gICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgPENvbCBtZD17Nn0+IFxuICAgICAgICAgICAgICA8Sm9pbkZvcm0gYWN0aXZpdHlfaWQ9e2FjdGl2aXR5Ll9pZH0gLz5cbiAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPGhyLz5cblxuXG5cbiAgICAgICAgXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxoMj5Ucnkgc29tZXRoaW5nIG5ldyB3aXRoIHlvdXIgY29tbXVuaXR5IHRvZGF5PC9oMj5cbiAgICAgICAgICAgIDxwPkRvd25sb2FkIHRoZSBBcHA8L3A+XG5cbiAgICAgICAgICAgIDxEb3dubG9hZEJ0bnMgaW52ZXJzZSAvPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtLTRcIj5cblxuICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgPENvbCBtZD1cIjEwXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcml2YWN5XCIgY2xhc3NOYW1lPVwidGV4dC1kYXJrIG1yLTNcIj5Qcml2YWN5PC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvdGVybXNcIiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmtcIj5UZXJtcyBvZiB1c2U8L2E+XG4gICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICA8Q29sIG1kPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgPFNvY2lhbExpbmtzIHVybD17YGh0dHBzOi8vaG9wbGlzdC5jby9hY3Rpdml0eS8ke2FjdGl2aXR5Ll9pZH1gfSAvPlxuICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgIDwvUm93PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyhjdHgpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoYC9hY3Rpdml0aWVzLyR7Y3R4LnBhcmFtcy5pZH1gKVxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmRhdGE7XG5cbiAgcmV0dXJuIHsgcHJvcHM6IHtkYXRhOiBqc29ufSB9XG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcbiAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MoJy9hY3Rpdml0aWVzJylcbiAgY29uc3QgYWN0aXZpdGllcyA9IGF3YWl0IHJlcy5kYXRhLmRhdGFcblxuICBjb25zb2xlLmxvZyhyZXMpO1xuICAvLyBHZXQgdGhlIHBhdGhzIHdlIHdhbnQgdG8gcHJlLXJlbmRlciBiYXNlZCBvbiBwb3N0c1xuICBjb25zdCBwYXRocyA9IGFjdGl2aXRpZXMubGVuZ3RoID4gMCAmJiBhY3Rpdml0aWVzLm1hcCgoYWN0aXZpdHkpID0+ICh7XG4gICAgcGFyYW1zOiB7IGlkOiBhY3Rpdml0eS5faWQgfSxcbiAgfSkpXG5cbiAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXG4gIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/activity/[id].js\n");

/***/ })

})