webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/GiphyContext.js":
/*!****************************************!*\
  !*** ./src/components/GiphyContext.js ***!
  \****************************************/
/*! exports provided: GiphyProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GiphyProvider\", function() { return GiphyProvider; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/config */ \"./node_modules/next/dist/next-server/lib/runtime-config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/max/Documents/runlevel/jobsearch/signal/giphybro/src/components/GiphyContext.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar _getConfig = next_config__WEBPACK_IMPORTED_MODULE_3___default()(),\n    giphyToken = _getConfig.publicRuntimeConfig.giphyToken;\n\nvar TheContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nvar GiphyProvider = function GiphyProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      keywords = _useState[0],\n      setKeywords = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      results = _useState2[0],\n      setResults = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0),\n      offset = _useState3[0],\n      setOffset = _useState3[1];\n\n  var limit = 50;\n\n  var callGiphy = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(api) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(api);\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }));\n\n    return function callGiphy(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var apiGiphy = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(api) {\n      var data;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return callGiphy(api);\n\n            case 2:\n              data = _context2.sent;\n              alert(typeof results); // setResults(offset === 0 ? data : results.concat(data))\n\n            case 4:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function apiGiphy(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var trendingGiphy = function trendingGiphy() {\n    apiGiphy(\"http://api.giphy.com/v1/gifs/trending?limit=\".concat(limit, \"&api_key=\").concat(giphyToken, \"&offset=\").concat(offset));\n  };\n\n  var searchGiphy = function searchGiphy() {\n    apiGiphy(\"http://api.giphy.com/v1/gifs/search?limit=\".concat(limit, \"&api_key=\").concat(giphyToken, \"&offset=\").concat(offset, \"&q=\").concat(keywords));\n  };\n\n  var pageGiphy = function pageGiphy() {\n    keywords === '' ? trendingGiphy() : searchGiphy();\n  };\n\n  var nextPage = function nextPage() {\n    var newOffset = offset + limit;\n    setOffset(newOffset);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(trendingGiphy, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(keywords === '' ? trendingGiphy : searchGiphy, [keywords]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(pageGiphy, [offset]);\n  return __jsx(TheContext.Provider, {\n    value: {\n      keywords: keywords,\n      results: results,\n      setKeywords: setKeywords,\n      setResults: setResults,\n      nextPage: nextPage,\n      setOffset: setOffset\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 10\n    }\n  }, children);\n};\n\n_s(GiphyProvider, \"kkfJtr0FEG5poh8pDJhYlRGLMkY=\");\n\n_c = GiphyProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TheContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"GiphyProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2lwaHlDb250ZXh0LmpzPzQxMmMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwiZ2lwaHlUb2tlbiIsInB1YmxpY1J1bnRpbWVDb25maWciLCJUaGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkdpcGh5UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwia2V5d29yZHMiLCJzZXRLZXl3b3JkcyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibGltaXQiLCJjYWxsR2lwaHkiLCJhcGkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJhcGlHaXBoeSIsImRhdGEiLCJhbGVydCIsInRyZW5kaW5nR2lwaHkiLCJzZWFyY2hHaXBoeSIsInBhZ2VHaXBoeSIsIm5leHRQYWdlIiwibmV3T2Zmc2V0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O2lCQUVnREEsa0RBQVMsRTtJQUExQkMsVSxjQUF2QkMsbUIsQ0FBdUJELFU7O0FBQy9CLElBQU1FLFVBQVUsZ0JBQUdDLDJEQUFhLENBQUMsRUFBRCxDQUFoQztBQUVPLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0I7QUFBQTs7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQUMsRUFBRCxDQURFO0FBQUEsTUFDcENDLFFBRG9DO0FBQUEsTUFDMUJDLFdBRDBCOztBQUFBLG1CQUVaRixzREFBUSxDQUFDLEVBQUQsQ0FGSTtBQUFBLE1BRXBDRyxPQUZvQztBQUFBLE1BRTNCQyxVQUYyQjs7QUFBQSxtQkFHZEosc0RBQVEsQ0FBQyxDQUFELENBSE07QUFBQSxNQUdwQ0ssTUFIb0M7QUFBQSxNQUc1QkMsU0FINEI7O0FBSTNDLE1BQU1DLEtBQUssR0FBRyxFQUFkOztBQUNBLE1BQU1DLFNBQVM7QUFBQSxpTUFBRyxpQkFBTUMsR0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRUlDLEtBQUssQ0FBQ0QsR0FBRCxDQUZUOztBQUFBO0FBRVJFLGlCQUZRO0FBQUE7QUFBQSxxQkFHREEsR0FBRyxDQUFDQyxJQUFKLEVBSEM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFLZEMscUJBQU8sQ0FBQ0MsS0FBUjs7QUFMYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFUTixTQUFTO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBUUEsTUFBTU8sUUFBUTtBQUFBLGlNQUFHLGtCQUFNTixHQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0lELFNBQVMsQ0FBQ0MsR0FBRCxDQURiOztBQUFBO0FBQ1RPLGtCQURTO0FBRWZDLG1CQUFLLENBQUMsT0FBT2QsT0FBUixDQUFMLENBRmUsQ0FHZjs7QUFIZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFSWSxRQUFRO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBS0EsTUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQUNILFlBQVEsdURBQWdEUixLQUFoRCxzQkFBaUViLFVBQWpFLHFCQUFzRlcsTUFBdEYsRUFBUjtBQUF3RyxHQUFySTs7QUFDQSxNQUFNYyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUNKLFlBQVEscURBQThDUixLQUE5QyxzQkFBK0RiLFVBQS9ELHFCQUFvRlcsTUFBcEYsZ0JBQWdHSixRQUFoRyxFQUFSO0FBQW9ILEdBQS9JOztBQUNBLE1BQU1tQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCbkIsWUFBUSxLQUFLLEVBQWIsR0FBa0JpQixhQUFhLEVBQS9CLEdBQW9DQyxXQUFXLEVBQS9DO0FBQ0QsR0FGRDs7QUFHQSxNQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQ3JCLFFBQU1DLFNBQVMsR0FBR2pCLE1BQU0sR0FBR0UsS0FBM0I7QUFDQUQsYUFBUyxDQUFDZ0IsU0FBRCxDQUFUO0FBQ0QsR0FIRDs7QUFLQUMseURBQVMsQ0FBQ0wsYUFBRCxFQUFnQixFQUFoQixDQUFUO0FBQ0FLLHlEQUFTLENBQUN0QixRQUFRLEtBQUssRUFBYixHQUFrQmlCLGFBQWxCLEdBQWtDQyxXQUFuQyxFQUFnRCxDQUFDbEIsUUFBRCxDQUFoRCxDQUFUO0FBQ0FzQix5REFBUyxDQUFDSCxTQUFELEVBQVksQ0FBQ2YsTUFBRCxDQUFaLENBQVQ7QUFFQSxTQUFPLE1BQUMsVUFBRCxDQUFZLFFBQVo7QUFBcUIsU0FBSyxFQUFFO0FBQUNKLGNBQVEsRUFBUkEsUUFBRDtBQUFXRSxhQUFPLEVBQVBBLE9BQVg7QUFBb0JELGlCQUFXLEVBQVhBLFdBQXBCO0FBQWlDRSxnQkFBVSxFQUFWQSxVQUFqQztBQUE2Q2lCLGNBQVEsRUFBUkEsUUFBN0M7QUFBdURmLGVBQVMsRUFBVEE7QUFBdkQsS0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNKUCxRQURJLENBQVA7QUFHRCxDQW5DTTs7R0FBTUQsYTs7S0FBQUEsYTtBQXFDRUYseUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HaXBoeUNvbnRleHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGdldENvbmZpZyBmcm9tICduZXh0L2NvbmZpZydcblxuY29uc3QgeyBwdWJsaWNSdW50aW1lQ29uZmlnOiB7IGdpcGh5VG9rZW4gfSB9ID0gZ2V0Q29uZmlnKClcbmNvbnN0IFRoZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxuXG5leHBvcnQgY29uc3QgR2lwaHlQcm92aWRlciA9ICh7Y2hpbGRyZW59KSA9PiB7XG4gIGNvbnN0IFtrZXl3b3Jkcywgc2V0S2V5d29yZHMgXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0cyBdID0gdXNlU3RhdGUoW10pXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldCBdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgbGltaXQgPSA1MFxuICBjb25zdCBjYWxsR2lwaHkgPSBhc3luYyBhcGkgPT4ge1xuICAgIHRyeXtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGFwaSlcbiAgICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpXG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgIH1cbiAgfVxuICBjb25zdCBhcGlHaXBoeSA9IGFzeW5jIGFwaSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNhbGxHaXBoeShhcGkpXG4gICAgYWxlcnQodHlwZW9mKHJlc3VsdHMpKVxuICAgIC8vIHNldFJlc3VsdHMob2Zmc2V0ID09PSAwID8gZGF0YSA6IHJlc3VsdHMuY29uY2F0KGRhdGEpKVxuICB9XG4gIGNvbnN0IHRyZW5kaW5nR2lwaHkgPSAoKSA9PiB7YXBpR2lwaHkoYGh0dHA6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvdHJlbmRpbmc/bGltaXQ9JHtsaW1pdH0mYXBpX2tleT0ke2dpcGh5VG9rZW59Jm9mZnNldD0ke29mZnNldH1gKX1cbiAgY29uc3Qgc2VhcmNoR2lwaHkgPSAoKSA9PiB7YXBpR2lwaHkoYGh0dHA6Ly9hcGkuZ2lwaHkuY29tL3YxL2dpZnMvc2VhcmNoP2xpbWl0PSR7bGltaXR9JmFwaV9rZXk9JHtnaXBoeVRva2VufSZvZmZzZXQ9JHtvZmZzZXR9JnE9JHtrZXl3b3Jkc31gKX1cbiAgY29uc3QgcGFnZUdpcGh5ID0gKCkgPT4ge1xuICAgIGtleXdvcmRzID09PSAnJyA/IHRyZW5kaW5nR2lwaHkoKSA6IHNlYXJjaEdpcGh5KClcbiAgfVxuICBjb25zdCBuZXh0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdPZmZzZXQgPSBvZmZzZXQgKyBsaW1pdFxuICAgIHNldE9mZnNldChuZXdPZmZzZXQpXG4gIH1cblxuICB1c2VFZmZlY3QodHJlbmRpbmdHaXBoeSwgW10pO1xuICB1c2VFZmZlY3Qoa2V5d29yZHMgPT09ICcnID8gdHJlbmRpbmdHaXBoeSA6IHNlYXJjaEdpcGh5LCBba2V5d29yZHNdKTtcbiAgdXNlRWZmZWN0KHBhZ2VHaXBoeSwgW29mZnNldF0pO1xuXG4gIHJldHVybiA8VGhlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2tleXdvcmRzLCByZXN1bHRzLCBzZXRLZXl3b3Jkcywgc2V0UmVzdWx0cywgbmV4dFBhZ2UsIHNldE9mZnNldH19PlxuICAgIHtjaGlsZHJlbn1cbiAgPC9UaGVDb250ZXh0LlByb3ZpZGVyPlxufVxuXG5leHBvcnQgZGVmYXVsdCBUaGVDb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GiphyContext.js\n");

/***/ })

})