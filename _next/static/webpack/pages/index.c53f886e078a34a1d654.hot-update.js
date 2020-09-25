webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/GiphyResults.js":
/*!****************************************!*\
  !*** ./src/components/GiphyResults.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-infinite-scroller */ \"./node_modules/react-infinite-scroller/index.js\");\n/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _GiphyContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GiphyContext */ \"./src/components/GiphyContext.js\");\nvar _this = undefined,\n    _jsxFileName = \"/home/max/Documents/runlevel/jobsearch/signal/giphybro/src/components/GiphyResults.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar GiphyResults = function GiphyResults(_ref) {\n  _s();\n\n  var styles = _ref.styles;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_GiphyContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n      results = _useContext.results,\n      nextPage = _useContext.nextPage;\n\n  var parseResults = function parseResults(R) {\n    return R.map(function (_ref2) {\n      var title = _ref2.title,\n          bitly_url = _ref2.bitly_url,\n          _ref2$images = _ref2.images,\n          mp4 = _ref2$images.original.mp4,\n          _ref2$images$fixed_wi = _ref2$images.fixed_width,\n          url = _ref2$images$fixed_wi.url,\n          width = _ref2$images$fixed_wi.width,\n          height = _ref2$images$fixed_wi.height;\n      return __jsx(\"div\", {\n        key: mp4,\n        className: styles.loading,\n        style: {\n          width: \"\".concat(width, \"px\"),\n          height: \"\".concat(height, \"px\")\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 5\n        }\n      }, __jsx(\"a\", {\n        href: mp4,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 7\n        }\n      }, __jsx(\"img\", {\n        src: url,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 9\n        }\n      })));\n    });\n  };\n\n  return __jsx(\"div\", {\n    className: styles.results,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 10\n    }\n  }, __jsx(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    pageStart: 0,\n    loadMore: nextPage,\n    hasMore: true,\n    loader: __jsx(\"div\", {\n      className: \"loader\",\n      key: 0,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 15\n      }\n    }, \"Loading ...\"),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, results && parseResults(results)));\n};\n\n_s(GiphyResults, \"S0lsPTSF1djBWsfXTuLxZsix2vU=\");\n\n_c = GiphyResults;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GiphyResults);\n\nvar _c;\n\n$RefreshReg$(_c, \"GiphyResults\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2lwaHlSZXN1bHRzLmpzPzFhMWMiXSwibmFtZXMiOlsiR2lwaHlSZXN1bHRzIiwic3R5bGVzIiwidXNlQ29udGV4dCIsIkdpcGh5Q29udGV4dCIsInJlc3VsdHMiLCJuZXh0UGFnZSIsInBhcnNlUmVzdWx0cyIsIlIiLCJtYXAiLCJ0aXRsZSIsImJpdGx5X3VybCIsImltYWdlcyIsIm1wNCIsIm9yaWdpbmFsIiwiZml4ZWRfd2lkdGgiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsb0JBQ0hDLHdEQUFVLENBQUNDLHFEQUFELENBRFA7QUFBQSxNQUN6QkMsT0FEeUIsZUFDekJBLE9BRHlCO0FBQUEsTUFDaEJDLFFBRGdCLGVBQ2hCQSxRQURnQjs7QUFFakMsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsQ0FBQztBQUFBLFdBQUlBLENBQUMsQ0FBQ0MsR0FBRixDQUFNO0FBQUEsVUFBRUMsS0FBRixTQUFFQSxLQUFGO0FBQUEsVUFBU0MsU0FBVCxTQUFTQSxTQUFUO0FBQUEsK0JBQW9CQyxNQUFwQjtBQUFBLFVBQXNDQyxHQUF0QyxnQkFBNEJDLFFBQTVCLENBQXNDRCxHQUF0QztBQUFBLCtDQUE0Q0UsV0FBNUM7QUFBQSxVQUF5REMsR0FBekQseUJBQXlEQSxHQUF6RDtBQUFBLFVBQThEQyxLQUE5RCx5QkFBOERBLEtBQTlEO0FBQUEsVUFBcUVDLE1BQXJFLHlCQUFxRUEsTUFBckU7QUFBQSxhQUM5QjtBQUNFLFdBQUcsRUFBRUwsR0FEUDtBQUVFLGlCQUFTLEVBQUVYLE1BQU0sQ0FBQ2lCLE9BRnBCO0FBR0UsYUFBSyxFQUFFO0FBQ0xGLGVBQUssWUFBS0EsS0FBTCxPQURBO0FBRUxDLGdCQUFNLFlBQUtBLE1BQUw7QUFGRCxTQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FRRTtBQUFHLFlBQUksRUFBRUwsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBSyxXQUFHLEVBQUVHLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBUkYsQ0FEOEI7QUFBQSxLQUFOLENBQUo7QUFBQSxHQUF0Qjs7QUFlQSxTQUFPO0FBQUssYUFBUyxFQUFFZCxNQUFNLENBQUNHLE9BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHTCxNQUFDLDhEQUFEO0FBQ0UsYUFBUyxFQUFFLENBRGI7QUFFRSxZQUFRLEVBQUVDLFFBRlo7QUFHRSxXQUFPLEVBQUUsSUFIWDtBQUlFLFVBQU0sRUFBRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQXdCLFNBQUcsRUFBRSxDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0QsT0FBTyxJQUFJRSxZQUFZLENBQUNGLE9BQUQsQ0FOMUIsQ0FISyxDQUFQO0FBY0QsQ0EvQkQ7O0dBQU1KLFk7O0tBQUFBLFk7QUFpQ1NBLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvR2lwaHlSZXN1bHRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSW5maW5pdGVTY3JvbGwgZnJvbSAncmVhY3QtaW5maW5pdGUtc2Nyb2xsZXInXG5pbXBvcnQgR2lwaHlDb250ZXh0IGZyb20gJy4vR2lwaHlDb250ZXh0J1xuXG5cbmNvbnN0IEdpcGh5UmVzdWx0cyA9ICh7c3R5bGVzfSkgPT4ge1xuICBjb25zdCB7IHJlc3VsdHMsIG5leHRQYWdlIH0gPSB1c2VDb250ZXh0KEdpcGh5Q29udGV4dCk7XG4gIGNvbnN0IHBhcnNlUmVzdWx0cyA9IFIgPT4gUi5tYXAoKHt0aXRsZSwgYml0bHlfdXJsLCBpbWFnZXM6e29yaWdpbmFsOnttcDR9LCBmaXhlZF93aWR0aDp7dXJsLCB3aWR0aCwgaGVpZ2h0fX19KSA9PiBcbiAgICA8ZGl2IFxuICAgICAga2V5PXttcDR9IFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGluZ30gXG4gICAgICBzdHlsZT17e1xuICAgICAgICB3aWR0aDogYCR7d2lkdGh9cHhgLCBcbiAgICAgICAgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8YSBocmVmPXttcDR9PlxuICAgICAgICA8aW1nIHNyYz17dXJsfS8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIClcblxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXN1bHRzfT5cbiAgICB7LypyZXN1bHRzICYmIHBhcnNlUmVzdWx0cyhyZXN1bHRzKSovfVxuXG4gICAgPEluZmluaXRlU2Nyb2xsXG4gICAgICBwYWdlU3RhcnQ9ezB9XG4gICAgICBsb2FkTW9yZT17bmV4dFBhZ2V9XG4gICAgICBoYXNNb3JlPXt0cnVlfVxuICAgICAgbG9hZGVyPXs8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiIGtleT17MH0+TG9hZGluZyAuLi48L2Rpdj59XG4gICAgPlxuICAgICAge3Jlc3VsdHMgJiYgcGFyc2VSZXN1bHRzKHJlc3VsdHMpfVxuICAgIDwvSW5maW5pdGVTY3JvbGw+XG5cbiAgICB7Lyo8YnV0dG9uIG9uQ2xpY2s9e25leHRQYWdlfT5uZXh0PC9idXR0b24+Ki99XG4gIDwvZGl2PlxufVxuXG5leHBvcnQgZGVmYXVsdCBHaXBoeVJlc3VsdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GiphyResults.js\n");

/***/ })

})