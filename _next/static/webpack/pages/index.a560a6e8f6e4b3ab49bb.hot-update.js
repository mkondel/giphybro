webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/GiphyResults.js":
/*!****************************************!*\
  !*** ./src/components/GiphyResults.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-infinite-scroller */ \"./node_modules/react-infinite-scroller/index.js\");\n/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GiphyContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GiphyContext */ \"./src/components/GiphyContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/max/Documents/runlevel/job search/giphybro/src/components/GiphyResults.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar GiphyResults = function GiphyResults(_ref) {\n  _s();\n\n  var styles = _ref.styles;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_GiphyContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      results = _useContext.results,\n      nextPage = _useContext.nextPage;\n\n  var parseResults = function parseResults(R) {\n    return R.map(function (_ref2) {\n      var title = _ref2.title,\n          bitly_url = _ref2.bitly_url,\n          _ref2$images = _ref2.images,\n          mp4 = _ref2$images.original.mp4,\n          _ref2$images$fixed_he = _ref2$images.fixed_height_downsampled,\n          url = _ref2$images$fixed_he.url,\n          width = _ref2$images$fixed_he.width,\n          height = _ref2$images$fixed_he.height;\n      return __jsx(\"div\", {\n        key: mp4,\n        className: styles.loading,\n        style: {\n          width: \"\".concat(width, \"px\"),\n          height: \"\".concat(height, \"px\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 5\n        }\n      }, __jsx(\"a\", {\n        href: mp4,\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 7\n        }\n      }));\n    });\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }, __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: styles.results,\n    pageStart: 0,\n    loadMore: nextPage,\n    hasMore: true,\n    initialLoad: false,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, results && parseResults(results)));\n};\n\n_s(GiphyResults, \"S0lsPTSF1djBWsfXTuLxZsix2vU=\");\n\n_c = GiphyResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GiphyResults);\n\nvar _c;\n\n$RefreshReg$(_c, \"GiphyResults\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2lwaHlSZXN1bHRzLmpzPzFhMWMiXSwibmFtZXMiOlsiR2lwaHlSZXN1bHRzIiwic3R5bGVzIiwidXNlQ29udGV4dCIsIkdpcGh5Q29udGV4dCIsInJlc3VsdHMiLCJuZXh0UGFnZSIsInBhcnNlUmVzdWx0cyIsIlIiLCJtYXAiLCJ0aXRsZSIsImJpdGx5X3VybCIsImltYWdlcyIsIm1wNCIsIm9yaWdpbmFsIiwiZml4ZWRfaGVpZ2h0X2Rvd25zYW1wbGVkIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFjO0FBQUE7O0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZOztBQUFBLG9CQUNIQyx3REFBVSxDQUFDQyxxREFBRCxDQURQO0FBQUEsTUFDekJDLE9BRHlCLGVBQ3pCQSxPQUR5QjtBQUFBLE1BQ2hCQyxRQURnQixlQUNoQkEsUUFEZ0I7O0FBRWpDLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEdBQUYsQ0FBTTtBQUFBLFVBQUVDLEtBQUYsU0FBRUEsS0FBRjtBQUFBLFVBQVNDLFNBQVQsU0FBU0EsU0FBVDtBQUFBLCtCQUFvQkMsTUFBcEI7QUFBQSxVQUFzQ0MsR0FBdEMsZ0JBQTRCQyxRQUE1QixDQUFzQ0QsR0FBdEM7QUFBQSwrQ0FBNENFLHdCQUE1QztBQUFBLFVBQXNFQyxHQUF0RSx5QkFBc0VBLEdBQXRFO0FBQUEsVUFBMkVDLEtBQTNFLHlCQUEyRUEsS0FBM0U7QUFBQSxVQUFrRkMsTUFBbEYseUJBQWtGQSxNQUFsRjtBQUFBLGFBQzlCO0FBQ0UsV0FBRyxFQUFFTCxHQURQO0FBRUUsaUJBQVMsRUFBRVgsTUFBTSxDQUFDaUIsT0FGcEI7QUFHRSxhQUFLLEVBQUU7QUFDTEYsZUFBSyxZQUFLQSxLQUFMLE9BREE7QUFFTEMsZ0JBQU0sWUFBS0EsTUFBTDtBQUZELFNBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQVFFO0FBQUcsWUFBSSxFQUFFTCxHQUFUO0FBQWMsY0FBTSxFQUFDLFFBQXJCO0FBQThCLFdBQUcsRUFBQyxxQkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVJGLENBRDhCO0FBQUEsS0FBTixDQUFKO0FBQUEsR0FBdEI7O0FBZUEsU0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0wsTUFBQyw4REFBRDtBQUNFLGFBQVMsRUFBRVgsTUFBTSxDQUFDRyxPQURwQjtBQUVFLGFBQVMsRUFBRSxDQUZiO0FBR0UsWUFBUSxFQUFFQyxRQUhaO0FBSUUsV0FBTyxFQUFFLElBSlg7QUFLRSxlQUFXLEVBQUUsS0FMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0dELE9BQU8sSUFBSUUsWUFBWSxDQUFDRixPQUFELENBUDFCLENBREssQ0FBUDtBQVdELENBNUJEOztHQUFNSixZOztLQUFBQSxZO0FBOEJTQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0dpcGh5UmVzdWx0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEluZmluaXRlU2Nyb2xsIGZyb20gJ3JlYWN0LWluZmluaXRlLXNjcm9sbGVyJ1xuaW1wb3J0IEdpcGh5Q29udGV4dCBmcm9tICcuL0dpcGh5Q29udGV4dCdcblxuXG5jb25zdCBHaXBoeVJlc3VsdHMgPSAoe3N0eWxlc30pID0+IHtcbiAgY29uc3QgeyByZXN1bHRzLCBuZXh0UGFnZSB9ID0gdXNlQ29udGV4dChHaXBoeUNvbnRleHQpO1xuICBjb25zdCBwYXJzZVJlc3VsdHMgPSBSID0+IFIubWFwKCh7dGl0bGUsIGJpdGx5X3VybCwgaW1hZ2VzOntvcmlnaW5hbDp7bXA0fSwgZml4ZWRfaGVpZ2h0X2Rvd25zYW1wbGVkOnt1cmwsIHdpZHRoLCBoZWlnaHR9fX0pID0+IFxuICAgIDxkaXYgXG4gICAgICBrZXk9e21wNH0gXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgd2lkdGg6IGAke3dpZHRofXB4YCwgXG4gICAgICAgIGhlaWdodDogYCR7aGVpZ2h0fXB4YCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGEgaHJlZj17bXA0fSB0YXJnZXQ9J19ibGFuaycgcmVsPSdub29wZW5lciBub3JlZmVycmVyJz5cbiAgICAgICAgey8qPGltZyBzcmM9e3VybH0vPiovfVxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICApXG5cbiAgcmV0dXJuIDxkaXY+XG4gICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHRzfVxuICAgICAgcGFnZVN0YXJ0PXswfVxuICAgICAgbG9hZE1vcmU9e25leHRQYWdlfVxuICAgICAgaGFzTW9yZT17dHJ1ZX1cbiAgICAgIGluaXRpYWxMb2FkPXtmYWxzZX1cbiAgICA+XG4gICAgICB7cmVzdWx0cyAmJiBwYXJzZVJlc3VsdHMocmVzdWx0cyl9XG4gICAgPC9JbmZpbml0ZVNjcm9sbD5cbiAgPC9kaXY+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpcGh5UmVzdWx0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/GiphyResults.js\n");

/***/ })

})