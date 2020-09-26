webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/GiphySearch.js":
/*!***************************************!*\
  !*** ./src/components/GiphySearch.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GiphyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GiphyContext */ \"./src/components/GiphyContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/max/Documents/runlevel/job search/giphybro/src/components/GiphySearch.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n // no input box, just start typing\n\nvar GiphySearch = function GiphySearch(_ref) {\n  _s();\n\n  var styles = _ref.styles;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_GiphyContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      keywords = _useContext.keywords,\n      setKeywords = _useContext.setKeywords;\n\n  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    return inputRef.current.focus();\n  });\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 10\n    }\n  }, __jsx(\"input\", {\n    style: {\n      display: 'none'\n    },\n    type: \"text\",\n    ref: inputRef,\n    value: keywords,\n    onChange: function onChange(_ref2) {\n      var value = _ref2.target.value;\n      return setKeywords(value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }), __jsx(\"h1\", {\n    className: styles.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, keywords));\n};\n\n_s(GiphySearch, \"IIi2OnEzkpUlTVqIo4wOccH4Npw=\");\n\n_c = GiphySearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GiphySearch);\n\nvar _c;\n\n$RefreshReg$(_c, \"GiphySearch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2lwaHlTZWFyY2guanM/MGNkZiJdLCJuYW1lcyI6WyJHaXBoeVNlYXJjaCIsInN0eWxlcyIsInVzZUNvbnRleHQiLCJHaXBoeUNvbnRleHQiLCJrZXl3b3JkcyIsInNldEtleXdvcmRzIiwiaW5wdXRSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiZm9jdXMiLCJkaXNwbGF5IiwidmFsdWUiLCJ0YXJnZXQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLG9CQUNFQyx3REFBVSxDQUFDQyxxREFBRCxDQURaO0FBQUEsTUFDeEJDLFFBRHdCLGVBQ3hCQSxRQUR3QjtBQUFBLE1BQ2RDLFdBRGMsZUFDZEEsV0FEYzs7QUFFaEMsTUFBTUMsUUFBUSxHQUFHQyxvREFBTSxFQUF2QjtBQUNBQyx5REFBUyxDQUFDO0FBQUEsV0FBTUYsUUFBUSxDQUFDRyxPQUFULENBQWlCQyxLQUFqQixFQUFOO0FBQUEsR0FBRCxDQUFUO0FBRUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUw7QUFBTyxTQUFLLEVBQUU7QUFBQ0MsYUFBTyxFQUFDO0FBQVQsS0FBZDtBQUFnQyxRQUFJLEVBQUMsTUFBckM7QUFBNEMsT0FBRyxFQUFFTCxRQUFqRDtBQUEyRCxTQUFLLEVBQUVGLFFBQWxFO0FBQTRFLFlBQVEsRUFBRTtBQUFBLFVBQVVRLEtBQVYsU0FBRUMsTUFBRixDQUFVRCxLQUFWO0FBQUEsYUFBb0JQLFdBQVcsQ0FBQ08sS0FBRCxDQUEvQjtBQUFBLEtBQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSyxFQUdMO0FBQUksYUFBUyxFQUFFWCxNQUFNLENBQUNhLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1YsUUFESCxDQUhLLENBQVA7QUFPRCxDQVpEOztHQUFNSixXOztLQUFBQSxXO0FBY1NBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvR2lwaHlTZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHaXBoeUNvbnRleHQgZnJvbSAnLi9HaXBoeUNvbnRleHQnXG5cbi8vIG5vIGlucHV0IGJveCwganVzdCBzdGFydCB0eXBpbmdcblxuY29uc3QgR2lwaHlTZWFyY2ggPSAoe3N0eWxlc30pID0+IHtcbiAgY29uc3QgeyBrZXl3b3Jkcywgc2V0S2V5d29yZHMgfSA9IHVzZUNvbnRleHQoR2lwaHlDb250ZXh0KTtcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4gaW5wdXRSZWYuY3VycmVudC5mb2N1cygpIClcblxuICByZXR1cm4gPGRpdj5cblxuICAgIDxpbnB1dCBzdHlsZT17e2Rpc3BsYXk6J25vbmUnfX0gdHlwZT0ndGV4dCcgcmVmPXtpbnB1dFJlZn0gdmFsdWU9e2tleXdvcmRzfSBvbkNoYW5nZT17KHt0YXJnZXQ6e3ZhbHVlfX0pPT5zZXRLZXl3b3Jkcyh2YWx1ZSl9Lz5cbiAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAge2tleXdvcmRzfVxuICAgIDwvaDE+XG4gIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXBoeVNlYXJjaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GiphySearch.js\n");

/***/ })

})