"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/loading",{

/***/ "(app-pages-browser)/./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/styles/Main.module.css */ \"(app-pages-browser)/./app/styles/Main.module.css\");\n/* harmony import */ var _app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst ProgressBar = ()=>{\n    _s();\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const timer = setInterval(()=>{\n            setProgress((prevProgress)=>prevProgress >= 100 ? 0 : prevProgress + 10);\n        }, 600);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().loadingContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().loadingBar),\n                style: {\n                    width: progress + \"%\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/imac/Desktop/dawri-asada9a/components/ProgressBar.js\",\n                lineNumber: 17,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().loadingText),\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/imac/Desktop/dawri-asada9a/components/ProgressBar.js\",\n                lineNumber: 18,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().loadingText),\n                children: [\n                    progress,\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imac/Desktop/dawri-asada9a/components/ProgressBar.js\",\n                lineNumber: 19,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().loadingText),\n                children: [\n                    progress,\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imac/Desktop/dawri-asada9a/components/ProgressBar.js\",\n                lineNumber: 20,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_app_styles_Main_module_css__WEBPACK_IMPORTED_MODULE_2___default().loadingText),\n                children: [\n                    progress,\n                    \"%\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/imac/Desktop/dawri-asada9a/components/ProgressBar.js\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/imac/Desktop/dawri-asada9a/components/ProgressBar.js\",\n        lineNumber: 16,\n        columnNumber: 10\n    }, undefined);\n};\n_s(ProgressBar, \"ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=\");\n_c = ProgressBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressBar);\nvar _c;\n$RefreshReg$(_c, \"ProgressBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFDTTtBQUVsRCxNQUFNRyxjQUFjOztJQUNsQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFFekNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTU0sUUFBUUMsWUFBWTtZQUN4QkYsWUFBWSxDQUFDRyxlQUNYQSxnQkFBZ0IsTUFBTSxJQUFJQSxlQUFlO1FBRTdDLEdBQUc7SUFDTCxHQUFHLEVBQUU7SUFDTCxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBV1IscUZBQXVCOzswQkFDNUMsOERBQUNPO2dCQUFJQyxXQUFXUiwrRUFBaUI7Z0JBQUVXLE9BQU87b0JBQUVDLE9BQU9WLFdBQVc7Z0JBQUk7Ozs7OzswQkFDbEUsOERBQUNLO2dCQUFJQyxXQUFXUixnRkFBa0I7MEJBQUU7Ozs7OzswQkFDcEMsOERBQUNPO2dCQUFJQyxXQUFXUixnRkFBa0I7O29CQUFHRTtvQkFBUzs7Ozs7OzswQkFDOUMsOERBQUNLO2dCQUFJQyxXQUFXUixnRkFBa0I7O29CQUFHRTtvQkFBUzs7Ozs7OzswQkFDOUMsOERBQUNLO2dCQUFJQyxXQUFXUixnRkFBa0I7O29CQUFHRTtvQkFBUzs7Ozs7Ozs7Ozs7OztBQUVsRDtHQWpCTUQ7S0FBQUE7QUFtQk4sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcz82YmRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9hcHAvc3R5bGVzL01haW4ubW9kdWxlLmNzc1wiXG5cbmNvbnN0IFByb2dyZXNzQmFyID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBzZXRQcm9ncmVzcygocHJldlByb2dyZXNzKSA9PlxuICAgICAgICBwcmV2UHJvZ3Jlc3MgPj0gMTAwID8gMCA6IHByZXZQcm9ncmVzcyArIDEwXG4gICAgICApO1xuICAgIH0sIDYwMCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGluZ0NvbnRhaW5lcn0+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nQmFyfSBzdHlsZT17eyB3aWR0aDogcHJvZ3Jlc3MgKyBcIiVcIiB9fT48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdUZXh0fT5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkaW5nVGV4dH0+e3Byb2dyZXNzfSU8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmdUZXh0fT57cHJvZ3Jlc3N9JTwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGluZ1RleHR9Pntwcm9ncmVzc30lPC9kaXY+XG4gIDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsInByZXZQcm9ncmVzcyIsImRpdiIsImNsYXNzTmFtZSIsImxvYWRpbmdDb250YWluZXIiLCJsb2FkaW5nQmFyIiwic3R5bGUiLCJ3aWR0aCIsImxvYWRpbmdUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ProgressBar.js\n"));

/***/ })

});