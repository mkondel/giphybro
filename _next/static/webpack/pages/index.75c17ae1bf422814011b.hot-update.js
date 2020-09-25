webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/GiphySearch.js":
/*!***************************************!*\
  !*** ./src/components/GiphySearch.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _GiphyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GiphyContext */ \"./src/components/GiphyContext.js\");\n/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-trap-react */ \"./node_modules/focus-trap-react/dist/focus-trap-react.js\");\n/* harmony import */ var focus_trap_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(focus_trap_react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/home/max/Documents/runlevel/job search/giphybro/src/components/GiphySearch.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar style = {\n  left: '100vw',\n  position: 'fixed'\n};\n\nvar handleInput = function handleInput(value, keyCode, keywords) {\n  console.log('handleInput()', value, keyCode, keywords);\n\n  if (value && value !== '' && !keyCode) {\n    return keywords + value;\n  } else if ((!value || value === '') && keyCode) {\n    switch (keyCode) {\n      case 8:\n        // 8 is Backspace\n        return keywords.slice(0, keywords.length - 1);\n        break;\n\n      case 27:\n        // 27 is ESC\n        return '';\n        break;\n    }\n  } else {\n    return keywords;\n  }\n}; // no input box, just start typing\n\n\nvar GiphySearch = function GiphySearch(_ref) {\n  _s();\n\n  var styles = _ref.styles;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_GiphyContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n      keywords = _useContext.keywords,\n      setKeywords = _useContext.setKeywords; // const updateKeywords = ({target:{value}}) => setKeywords(keywords+value)\n\n\n  var updateKeywords = function updateKeywords(e) {\n    var keyCode = e.keyCode,\n        value = e.target.value;\n    setKeywords(handleInput(value, keyCode, keywords));\n  };\n\n  return __jsx(focus_trap_react__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 10\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    style: style,\n    type: \"text\",\n    autoFocus: true,\n    value: \"\",\n    onChange: updateKeywords,\n    onKeyUp: updateKeywords,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }\n  })));\n};\n\n_s(GiphySearch, \"u3vr8jbgBnSP21fhvvLjI8oCWro=\");\n\n_c = GiphySearch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GiphySearch);\n\nvar _c;\n\n$RefreshReg$(_c, \"GiphySearch\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvR2lwaHlTZWFyY2guanM/MGNkZiJdLCJuYW1lcyI6WyJzdHlsZSIsImxlZnQiLCJwb3NpdGlvbiIsImhhbmRsZUlucHV0IiwidmFsdWUiLCJrZXlDb2RlIiwia2V5d29yZHMiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJsZW5ndGgiLCJHaXBoeVNlYXJjaCIsInN0eWxlcyIsInVzZUNvbnRleHQiLCJHaXBoeUNvbnRleHQiLCJzZXRLZXl3b3JkcyIsInVwZGF0ZUtleXdvcmRzIiwiZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxLQUFLLEdBQUc7QUFDWkMsTUFBSSxFQUFFLE9BRE07QUFFWkMsVUFBUSxFQUFFO0FBRkUsQ0FBZDs7QUFLQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLFFBQWpCLEVBQThCO0FBQ2hEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSixLQUE3QixFQUFvQ0MsT0FBcEMsRUFBNkNDLFFBQTdDOztBQUVBLE1BQUdGLEtBQUssSUFBSUEsS0FBSyxLQUFLLEVBQW5CLElBQXlCLENBQUNDLE9BQTdCLEVBQXFDO0FBQ25DLFdBQU9DLFFBQVEsR0FBR0YsS0FBbEI7QUFDRCxHQUZELE1BRU0sSUFBRyxDQUFDLENBQUNBLEtBQUQsSUFBVUEsS0FBSyxLQUFLLEVBQXJCLEtBQTRCQyxPQUEvQixFQUF1QztBQUMzQyxZQUFPQSxPQUFQO0FBQ0UsV0FBSyxDQUFMO0FBQVU7QUFDUixlQUFPQyxRQUFRLENBQUNHLEtBQVQsQ0FBZSxDQUFmLEVBQWtCSCxRQUFRLENBQUNJLE1BQVQsR0FBa0IsQ0FBcEMsQ0FBUDtBQUNBOztBQUNGLFdBQUssRUFBTDtBQUFVO0FBQ1IsZUFBTyxFQUFQO0FBQ0E7QUFOSjtBQVFELEdBVEssTUFTRDtBQUNILFdBQU9KLFFBQVA7QUFDRDtBQUNGLENBakJELEMsQ0FtQkE7OztBQUNBLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQWM7QUFBQTs7QUFBQSxNQUFaQyxNQUFZLFFBQVpBLE1BQVk7O0FBQUEsb0JBQ0VDLHdEQUFVLENBQUNDLHFEQUFELENBRFo7QUFBQSxNQUN4QlIsUUFEd0IsZUFDeEJBLFFBRHdCO0FBQUEsTUFDZFMsV0FEYyxlQUNkQSxXQURjLEVBRWhDOzs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUFDLENBQUMsRUFBSTtBQUFBLFFBQ25CWixPQURtQixHQUNRWSxDQURSLENBQ25CWixPQURtQjtBQUFBLFFBQ0ZELEtBREUsR0FDUWEsQ0FEUixDQUNWQyxNQURVLENBQ0ZkLEtBREU7QUFFMUJXLGVBQVcsQ0FBQ1osV0FBVyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBaUJDLFFBQWpCLENBQVosQ0FBWDtBQUVELEdBSkQ7O0FBTUEsU0FBTyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxTQUFLLEVBQUVOLEtBRFQ7QUFFRSxRQUFJLEVBQUMsTUFGUDtBQUdFLGFBQVMsTUFIWDtBQUlFLFNBQUssRUFBQyxFQUpSO0FBS0UsWUFBUSxFQUFFZ0IsY0FMWjtBQU1FLFdBQU8sRUFBRUEsY0FOWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FESyxDQUFQO0FBWUQsQ0F0QkQ7O0dBQU1MLFc7O0tBQUFBLFc7QUF3QlNBLDBFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvR2lwaHlTZWFyY2guanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBHaXBoeUNvbnRleHQgZnJvbSAnLi9HaXBoeUNvbnRleHQnXG5pbXBvcnQgRm9jdXNUcmFwIGZyb20gJ2ZvY3VzLXRyYXAtcmVhY3QnXG5cbmNvbnN0IHN0eWxlID0ge1xuICBsZWZ0OiAnMTAwdncnLFxuICBwb3NpdGlvbjogJ2ZpeGVkJyxcbn1cblxuY29uc3QgaGFuZGxlSW5wdXQgPSAodmFsdWUsIGtleUNvZGUsIGtleXdvcmRzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdoYW5kbGVJbnB1dCgpJywgdmFsdWUsIGtleUNvZGUsIGtleXdvcmRzKVxuXG4gIGlmKHZhbHVlICYmIHZhbHVlICE9PSAnJyAmJiAha2V5Q29kZSl7XG4gICAgcmV0dXJuIGtleXdvcmRzICsgdmFsdWVcbiAgfWVsc2UgaWYoKCF2YWx1ZSB8fCB2YWx1ZSA9PT0gJycpICYmIGtleUNvZGUpe1xuICAgIHN3aXRjaChrZXlDb2RlKXtcbiAgICAgIGNhc2UgODogICAvLyA4IGlzIEJhY2tzcGFjZVxuICAgICAgICByZXR1cm4ga2V5d29yZHMuc2xpY2UoMCwga2V5d29yZHMubGVuZ3RoIC0gMSlcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDI3OiAgLy8gMjcgaXMgRVNDXG4gICAgICAgIHJldHVybiAnJ1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1lbHNle1xuICAgIHJldHVybiBrZXl3b3Jkc1xuICB9XG59XG5cbi8vIG5vIGlucHV0IGJveCwganVzdCBzdGFydCB0eXBpbmdcbmNvbnN0IEdpcGh5U2VhcmNoID0gKHtzdHlsZXN9KSA9PiB7XG4gIGNvbnN0IHsga2V5d29yZHMsIHNldEtleXdvcmRzIH0gPSB1c2VDb250ZXh0KEdpcGh5Q29udGV4dCk7XG4gIC8vIGNvbnN0IHVwZGF0ZUtleXdvcmRzID0gKHt0YXJnZXQ6e3ZhbHVlfX0pID0+IHNldEtleXdvcmRzKGtleXdvcmRzK3ZhbHVlKVxuXG4gIGNvbnN0IHVwZGF0ZUtleXdvcmRzID0gZSA9PiB7XG4gICAgY29uc3Qge2tleUNvZGUsIHRhcmdldDp7dmFsdWV9fSA9IGVcbiAgICBzZXRLZXl3b3JkcyhoYW5kbGVJbnB1dCh2YWx1ZSwga2V5Q29kZSwga2V5d29yZHMpKVxuICAgIFxuICB9XG5cbiAgcmV0dXJuIDxGb2N1c1RyYXA+XG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dCBcbiAgICAgICAgc3R5bGU9e3N0eWxlfSBcbiAgICAgICAgdHlwZT0ndGV4dCcgXG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICB2YWx1ZT0nJ1xuICAgICAgICBvbkNoYW5nZT17dXBkYXRlS2V5d29yZHN9XG4gICAgICAgIG9uS2V5VXA9e3VwZGF0ZUtleXdvcmRzfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgPC9Gb2N1c1RyYXA+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpcGh5U2VhcmNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/GiphySearch.js\n");

/***/ })

})