"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/World",{

/***/ "./pages/World.jsx":
/*!*************************!*\
  !*** ./pages/World.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ World; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SliderWorld__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SliderWorld */ \"./components/SliderWorld.jsx\");\n/* harmony import */ var react_gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-gsap */ \"./node_modules/react-gsap/dist/react-gsap.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction World() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"worldWrap\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_gsap__WEBPACK_IMPORTED_MODULE_3__.Tween, {\n                from: {\n                    y: \"5vh\",\n                    opacity: 0\n                },\n                duration: 3,\n                ease: \"elastic.out(1, 0.5)\",\n                delay: 0.5,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"worldTitle\",\n                    src: \"img/world.png\",\n                    width: \"180px\"\n                }, void 0, false, {\n                    fileName: \"/Users/hi-wolfy_1/Desktop/code/euclidClone/euclide_running/pages/World.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hi-wolfy_1/Desktop/code/euclidClone/euclide_running/pages/World.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"bottomMascot\",\n                src: \"img/mascot7.png\"\n            }, void 0, false, {\n                fileName: \"/Users/hi-wolfy_1/Desktop/code/euclidClone/euclide_running/pages/World.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hi-wolfy_1/Desktop/code/euclidClone/euclide_running/pages/World.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n};\n_c = World;\nvar _c;\n$RefreshReg$(_c, \"World\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Xb3JsZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQzBCO0FBQ2pCO0FBRW5CLFFBQVEsQ0FBQ0csS0FBSyxHQUFHLENBQUM7SUFDL0IsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBVzs7d0ZBQ3ZCSCw2Q0FBSztnQkFDSkksSUFBSSxFQUFFLENBQUM7b0JBQUNDLENBQUMsRUFBRSxDQUFLO29CQUFFQyxPQUFPLEVBQUUsQ0FBQztnQkFBQyxDQUFDO2dCQUM5QkMsUUFBUSxFQUFFLENBQUM7Z0JBQ1hDLElBQUksRUFBQyxDQUFxQjtnQkFDMUJDLEtBQUssRUFBRSxHQUFHO3NHQUVUQyxDQUFHO29CQUFDUCxTQUFTLEVBQUMsQ0FBWTtvQkFBQ1EsR0FBRyxFQUFDLENBQWU7b0JBQUNDLEtBQUssRUFBQyxDQUFPOzs7Ozs7Ozs7Ozt3RkFJOURGLENBQUc7Z0JBQUNQLFNBQVMsRUFBQyxDQUFjO2dCQUFDUSxHQUFHLEVBQUMsQ0FBaUI7Ozs7Ozs7Ozs7OztBQUd6RCxDQUFDO0tBaEJ1QlYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Xb3JsZC5qc3g/ZDU2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU2xpZGVyV29ybGQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2xpZGVyV29ybGRcIjtcbmltcG9ydCB7IFR3ZWVuIH0gZnJvbSBcInJlYWN0LWdzYXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV29ybGQoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3b3JsZFdyYXBcIj5cbiAgICAgIDxUd2VlblxuICAgICAgICBmcm9tPXt7IHk6IFwiNXZoXCIsIG9wYWNpdHk6IDAgfX1cbiAgICAgICAgZHVyYXRpb249ezN9XG4gICAgICAgIGVhc2U9XCJlbGFzdGljLm91dCgxLCAwLjUpXCJcbiAgICAgICAgZGVsYXk9ezAuNX1cbiAgICAgID5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ3b3JsZFRpdGxlXCIgc3JjPVwiaW1nL3dvcmxkLnBuZ1wiIHdpZHRoPVwiMTgwcHhcIiAvPlxuICAgICAgPC9Ud2Vlbj5cbiAgICAgIHsvKiA8U2xpZGVyV29ybGQgLz4gKi99XG5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYm90dG9tTWFzY290XCIgc3JjPVwiaW1nL21hc2NvdDcucG5nXCIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlNsaWRlcldvcmxkIiwiVHdlZW4iLCJXb3JsZCIsImRpdiIsImNsYXNzTmFtZSIsImZyb20iLCJ5Iiwib3BhY2l0eSIsImR1cmF0aW9uIiwiZWFzZSIsImRlbGF5IiwiaW1nIiwic3JjIiwid2lkdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/World.jsx\n");

/***/ })

});