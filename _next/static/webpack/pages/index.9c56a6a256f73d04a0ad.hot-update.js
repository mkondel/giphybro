webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/GiphyContext.js":
/*!****************************************!*\
  !*** ./src/components/GiphyContext.js ***!
  \****************************************/
/*! exports provided: GiphyProvider, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GiphyProvider\", function() { return GiphyProvider; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/config */ \"./node_modules/next/dist/next-server/lib/runtime-config.js\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/max/Documents/runlevel/jobsearch/signal/giphybro/src/components/GiphyContext.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nvar _getConfig = next_config__WEBPACK_IMPORTED_MODULE_4___default()(),\n    giphyToken = _getConfig.publicRuntimeConfig.giphyToken;\n\nvar TheContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__[\"createContext\"])({});\nvar GiphyProvider = function GiphyProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(''),\n      keywords = _useState[0],\n      setKeywords = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      results = _useState2[0],\n      setResults = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(0),\n      offset = _useState3[0],\n      setOffset = _useState3[1];\n\n  var limit = 50;\n\n  var callGiphy = /*#__PURE__*/function () {\n    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(api) {\n      var res;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return fetch(api);\n\n            case 3:\n              res = _context.sent;\n              _context.next = 6;\n              return res.json();\n\n            case 6:\n              return _context.abrupt(\"return\", _context.sent);\n\n            case 9:\n              _context.prev = 9;\n              _context.t0 = _context[\"catch\"](0);\n              console.error(_context.t0);\n\n            case 12:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 9]]);\n    }));\n\n    return function callGiphy(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  var apiGiphy = /*#__PURE__*/function () {\n    var _ref3 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(api) {\n      var _yield$callGiphy, data, newResults;\n\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return callGiphy(api);\n\n            case 2:\n              _yield$callGiphy = _context2.sent;\n              data = _yield$callGiphy.data;\n              newResults = results.data = [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(results.data), Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(data));\n              setResults(offset === 0 ? data : newResults);\n\n            case 6:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function apiGiphy(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  var trendingGiphy = function trendingGiphy() {\n    apiGiphy(\"http://api.giphy.com/v1/gifs/trending?limit=\".concat(limit, \"&api_key=\").concat(giphyToken, \"&offset=\").concat(offset));\n  };\n\n  var searchGiphy = function searchGiphy() {\n    apiGiphy(\"http://api.giphy.com/v1/gifs/search?limit=\".concat(limit, \"&api_key=\").concat(giphyToken, \"&offset=\").concat(offset, \"&q=\").concat(keywords));\n  };\n\n  var pageGiphy = function pageGiphy() {\n    keywords === '' ? trendingGiphy() : searchGiphy();\n  };\n\n  var nextPage = function nextPage() {\n    var newOffset = offset + limit;\n    setOffset(newOffset);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(trendingGiphy, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(keywords === '' ? trendingGiphy : searchGiphy, [keywords]);\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(pageGiphy, [offset]);\n  return __jsx(TheContext.Provider, {\n    value: {\n      keywords: keywords,\n      results: results,\n      setKeywords: setKeywords,\n      setResults: setResults,\n      nextPage: nextPage,\n      setOffset: setOffset\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 10\n    }\n  }, children);\n};\n\n_s(GiphyProvider, \"kkfJtr0FEG5poh8pDJhYlRGLMkY=\");\n\n_c = GiphyProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TheContext);\n\nvar _c;\n\n$RefreshReg$(_c, \"GiphyProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2lwaHlDb250ZXh0LmpzPzQxMmMiXSwibmFtZXMiOlsiZ2V0Q29uZmlnIiwiZ2lwaHlUb2tlbiIsInB1YmxpY1J1bnRpbWVDb25maWciLCJUaGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkdpcGh5UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwia2V5d29yZHMiLCJzZXRLZXl3b3JkcyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwib2Zmc2V0Iiwic2V0T2Zmc2V0IiwibGltaXQiLCJjYWxsR2lwaHkiLCJhcGkiLCJmZXRjaCIsInJlcyIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJhcGlHaXBoeSIsImRhdGEiLCJuZXdSZXN1bHRzIiwidHJlbmRpbmdHaXBoeSIsInNlYXJjaEdpcGh5IiwicGFnZUdpcGh5IiwibmV4dFBhZ2UiLCJuZXdPZmZzZXQiLCJ1c2VFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztpQkFFZ0RBLGtEQUFTLEU7SUFBMUJDLFUsY0FBdkJDLG1CLENBQXVCRCxVOztBQUMvQixJQUFNRSxVQUFVLGdCQUFHQywyREFBYSxDQUFDLEVBQUQsQ0FBaEM7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDLEVBQUQsQ0FERTtBQUFBLE1BQ3BDQyxRQURvQztBQUFBLE1BQzFCQyxXQUQwQjs7QUFBQSxtQkFFWkYsc0RBQVEsQ0FBQyxFQUFELENBRkk7QUFBQSxNQUVwQ0csT0FGb0M7QUFBQSxNQUUzQkMsVUFGMkI7O0FBQUEsbUJBR2RKLHNEQUFRLENBQUMsQ0FBRCxDQUhNO0FBQUEsTUFHcENLLE1BSG9DO0FBQUEsTUFHNUJDLFNBSDRCOztBQUkzQyxNQUFNQyxLQUFLLEdBQUcsRUFBZDs7QUFDQSxNQUFNQyxTQUFTO0FBQUEsaU1BQUcsaUJBQU1DLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUVJQyxLQUFLLENBQUNELEdBQUQsQ0FGVDs7QUFBQTtBQUVSRSxpQkFGUTtBQUFBO0FBQUEscUJBR0RBLEdBQUcsQ0FBQ0MsSUFBSixFQUhDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBS2RDLHFCQUFPLENBQUNDLEtBQVI7O0FBTGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVE4sU0FBUztBQUFBO0FBQUE7QUFBQSxLQUFmOztBQVFBLE1BQU1PLFFBQVE7QUFBQSxpTUFBRyxrQkFBTU4sR0FBTjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTUQsU0FBUyxDQUFDQyxHQUFELENBRGY7O0FBQUE7QUFBQTtBQUNSTyxrQkFEUSxvQkFDUkEsSUFEUTtBQUVUQyx3QkFGUyxHQUVJZCxPQUFPLENBQUNhLElBQVIsMEdBQW1CYixPQUFPLENBQUNhLElBQTNCLGdHQUFvQ0EsSUFBcEMsRUFGSjtBQUdmWix3QkFBVSxDQUFDQyxNQUFNLEtBQUssQ0FBWCxHQUFlVyxJQUFmLEdBQXNCQyxVQUF2QixDQUFWOztBQUhlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVJGLFFBQVE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFLQSxNQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQ0gsWUFBUSx1REFBZ0RSLEtBQWhELHNCQUFpRWIsVUFBakUscUJBQXNGVyxNQUF0RixFQUFSO0FBQXdHLEdBQXJJOztBQUNBLE1BQU1jLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQ0osWUFBUSxxREFBOENSLEtBQTlDLHNCQUErRGIsVUFBL0QscUJBQW9GVyxNQUFwRixnQkFBZ0dKLFFBQWhHLEVBQVI7QUFBb0gsR0FBL0k7O0FBQ0EsTUFBTW1CLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEJuQixZQUFRLEtBQUssRUFBYixHQUFrQmlCLGFBQWEsRUFBL0IsR0FBb0NDLFdBQVcsRUFBL0M7QUFDRCxHQUZEOztBQUdBLE1BQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDckIsUUFBTUMsU0FBUyxHQUFHakIsTUFBTSxHQUFHRSxLQUEzQjtBQUNBRCxhQUFTLENBQUNnQixTQUFELENBQVQ7QUFDRCxHQUhEOztBQUtBQyx5REFBUyxDQUFDTCxhQUFELEVBQWdCLEVBQWhCLENBQVQ7QUFDQUsseURBQVMsQ0FBQ3RCLFFBQVEsS0FBSyxFQUFiLEdBQWtCaUIsYUFBbEIsR0FBa0NDLFdBQW5DLEVBQWdELENBQUNsQixRQUFELENBQWhELENBQVQ7QUFDQXNCLHlEQUFTLENBQUNILFNBQUQsRUFBWSxDQUFDZixNQUFELENBQVosQ0FBVDtBQUVBLFNBQU8sTUFBQyxVQUFELENBQVksUUFBWjtBQUFxQixTQUFLLEVBQUU7QUFBQ0osY0FBUSxFQUFSQSxRQUFEO0FBQVdFLGFBQU8sRUFBUEEsT0FBWDtBQUFvQkQsaUJBQVcsRUFBWEEsV0FBcEI7QUFBaUNFLGdCQUFVLEVBQVZBLFVBQWpDO0FBQTZDaUIsY0FBUSxFQUFSQSxRQUE3QztBQUF1RGYsZUFBUyxFQUFUQTtBQUF2RCxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0pQLFFBREksQ0FBUDtBQUdELENBbkNNOztHQUFNRCxhOztLQUFBQSxhO0FBcUNFRix5RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0dpcGh5Q29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gJ25leHQvY29uZmlnJ1xuXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWc6IHsgZ2lwaHlUb2tlbiB9IH0gPSBnZXRDb25maWcoKVxuY29uc3QgVGhlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXG5cbmV4cG9ydCBjb25zdCBHaXBoeVByb3ZpZGVyID0gKHtjaGlsZHJlbn0pID0+IHtcbiAgY29uc3QgW2tleXdvcmRzLCBzZXRLZXl3b3JkcyBdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtyZXN1bHRzLCBzZXRSZXN1bHRzIF0gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW29mZnNldCwgc2V0T2Zmc2V0IF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBsaW1pdCA9IDUwXG4gIGNvbnN0IGNhbGxHaXBoeSA9IGFzeW5jIGFwaSA9PiB7XG4gICAgdHJ5e1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYXBpKVxuICAgICAgcmV0dXJuIGF3YWl0IHJlcy5qc29uKClcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgfVxuICB9XG4gIGNvbnN0IGFwaUdpcGh5ID0gYXN5bmMgYXBpID0+IHtcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBjYWxsR2lwaHkoYXBpKVxuICAgIGNvbnN0IG5ld1Jlc3VsdHMgPSByZXN1bHRzLmRhdGEgPSBbLi4ucmVzdWx0cy5kYXRhLCAuLi5kYXRhXVxuICAgIHNldFJlc3VsdHMob2Zmc2V0ID09PSAwID8gZGF0YSA6IG5ld1Jlc3VsdHMpXG4gIH1cbiAgY29uc3QgdHJlbmRpbmdHaXBoeSA9ICgpID0+IHthcGlHaXBoeShgaHR0cDovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy90cmVuZGluZz9saW1pdD0ke2xpbWl0fSZhcGlfa2V5PSR7Z2lwaHlUb2tlbn0mb2Zmc2V0PSR7b2Zmc2V0fWApfVxuICBjb25zdCBzZWFyY2hHaXBoeSA9ICgpID0+IHthcGlHaXBoeShgaHR0cDovL2FwaS5naXBoeS5jb20vdjEvZ2lmcy9zZWFyY2g/bGltaXQ9JHtsaW1pdH0mYXBpX2tleT0ke2dpcGh5VG9rZW59Jm9mZnNldD0ke29mZnNldH0mcT0ke2tleXdvcmRzfWApfVxuICBjb25zdCBwYWdlR2lwaHkgPSAoKSA9PiB7XG4gICAga2V5d29yZHMgPT09ICcnID8gdHJlbmRpbmdHaXBoeSgpIDogc2VhcmNoR2lwaHkoKVxuICB9XG4gIGNvbnN0IG5leHRQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld09mZnNldCA9IG9mZnNldCArIGxpbWl0XG4gICAgc2V0T2Zmc2V0KG5ld09mZnNldClcbiAgfVxuXG4gIHVzZUVmZmVjdCh0cmVuZGluZ0dpcGh5LCBbXSk7XG4gIHVzZUVmZmVjdChrZXl3b3JkcyA9PT0gJycgPyB0cmVuZGluZ0dpcGh5IDogc2VhcmNoR2lwaHksIFtrZXl3b3Jkc10pO1xuICB1c2VFZmZlY3QocGFnZUdpcGh5LCBbb2Zmc2V0XSk7XG5cbiAgcmV0dXJuIDxUaGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7a2V5d29yZHMsIHJlc3VsdHMsIHNldEtleXdvcmRzLCBzZXRSZXN1bHRzLCBuZXh0UGFnZSwgc2V0T2Zmc2V0fX0+XG4gICAge2NoaWxkcmVufVxuICA8L1RoZUNvbnRleHQuUHJvdmlkZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRoZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/GiphyContext.js\n");

/***/ })

})