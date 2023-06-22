"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movies/[id]/page",{

/***/ "(app-client)/./app/movies/[id]/page.jsx":
/*!**********************************!*\
  !*** ./app/movies/[id]/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_getMovies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/getMovies */ \"(app-client)/./utils/getMovies.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst page = async (param)=>{\n    let { params } = param;\n    const header = params.id.replace(/-/g, \" \");\n    const movies = await (0,_utils_getMovies__WEBPACK_IMPORTED_MODULE_2__.getMovies)(header, \"movie\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"movies_header\",\n                children: header\n            }, void 0, false, {\n                fileName: \"/home/daniel/Documents/code along/React/movie-watch/app/movies/[id]/page.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            console.log(movies),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"movies\",\n                children: movies.map((movie, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 movie\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                src: \"https://image.tmdb.org/t/p/w500/\" + movie.poster_path,\n                                className: \"movie_img\",\n                                width: \"250\",\n                                height: \"300\",\n                                alt: movie.title\n                            }, void 0, false, {\n                                fileName: \"/home/daniel/Documents/code along/React/movie-watch/app/movies/[id]/page.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"movie_desc\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"movie_name\",\n                                        children: [\n                                            \"TITLE : \",\n                                            movie.title\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/daniel/Documents/code along/React/movie-watch/app/movies/[id]/page.jsx\",\n                                        lineNumber: 26,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"movie_date\",\n                                        children: [\n                                            \"REALSE DATE : \",\n                                            movie.release_date\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/daniel/Documents/code along/React/movie-watch/app/movies/[id]/page.jsx\",\n                                        lineNumber: 27,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/daniel/Documents/code along/React/movie-watch/app/movies/[id]/page.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"/home/daniel/Documents/code along/React/movie-watch/app/movies/[id]/page.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            }, void 0, false, {\n                fileName: \"/home/daniel/Documents/code along/React/movie-watch/app/movies/[id]/page.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/daniel/Documents/code along/React/movie-watch/app/movies/[id]/page.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL21vdmllcy9baWRdL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUMrQjtBQUNjO0FBRTdDLE1BQU1FLE9BQU87UUFBTyxFQUFFQyxNQUFNLEVBQUU7SUFDNUIsTUFBTUMsU0FBU0QsT0FBT0UsR0FBR0MsUUFBUSxNQUFNO0lBRXZDLE1BQU1DLFNBQVMsTUFBTU4sMkRBQVNBLENBQUNHLFFBQVE7SUFFdkMscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBaUJMOzs7Ozs7WUFDOUJPLFFBQVFDLElBQUlMOzBCQUNiLDhEQUFDQztnQkFBSUMsV0FBVTswQkFDWkYsT0FBT00sSUFBSSxDQUFDQyxPQUFPQztvQkFDbEIscUJBQ0UsOERBQUNQO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1QsbURBQUtBO2dDQUNKZ0IsS0FBSyxxQ0FBcUNGLE1BQU1HO2dDQUNoRFIsV0FBVTtnQ0FDVlMsT0FBTTtnQ0FDTkMsUUFBTztnQ0FDUEMsS0FBS04sTUFBTU87Ozs7OzswQ0FFYiw4REFBQ2I7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDQzt3Q0FBR0QsV0FBVTs7NENBQWE7NENBQVNLLE1BQU1POzs7Ozs7O2tEQUMxQyw4REFBQ1g7d0NBQUdELFdBQVU7OzRDQUFhOzRDQUNWSyxNQUFNUTs7Ozs7Ozs7Ozs7Ozs7dUJBWE1QOzs7OztnQkFpQnJDOzs7Ozs7Ozs7Ozs7QUFJUjtBQUVBLCtEQUFlYixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tb3ZpZXMvW2lkXS9wYWdlLmpzeD9mN2YwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBnZXRNb3ZpZXMgfSBmcm9tIFwiQHV0aWxzL2dldE1vdmllc1wiO1xuXG5jb25zdCBwYWdlID0gYXN5bmMgKHsgcGFyYW1zIH0pID0+IHtcbiAgY29uc3QgaGVhZGVyID0gcGFyYW1zLmlkLnJlcGxhY2UoLy0vZywgXCIgXCIpO1xuXG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IGdldE1vdmllcyhoZWFkZXIsIFwibW92aWVcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICA8aDIgY2xhc3NOYW1lPVwibW92aWVzX2hlYWRlclwiPntoZWFkZXJ9PC9oMj5cbiAgICAgIHtjb25zb2xlLmxvZyhtb3ZpZXMpfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZXNcIj5cbiAgICAgICAge21vdmllcy5tYXAoKG1vdmllLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgbW92aWVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgc3JjPXtcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL3c1MDAvXCIgKyBtb3ZpZS5wb3N0ZXJfcGF0aH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtb3ZpZV9pbWdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMjUwXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMDBcIlxuICAgICAgICAgICAgICAgIGFsdD17bW92aWUudGl0bGV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWVfZGVzY1wiPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb3ZpZV9uYW1lXCI+VElUTEUgOiB7bW92aWUudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW92aWVfZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgUkVBTFNFIERBVEUgOiB7bW92aWUucmVsZWFzZV9kYXRlfVxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgey8qIDxoMiBjbGFzc05hbWU9XCJtb3ZpZV9vdmVydmlld1wiPlJFQUxTRSBEQVRFIDoge21vdmllLmZpcnN0X2Fpcl9kYXRlfTwvaDI+ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sIm5hbWVzIjpbIkltYWdlIiwiZ2V0TW92aWVzIiwicGFnZSIsInBhcmFtcyIsImhlYWRlciIsImlkIiwicmVwbGFjZSIsIm1vdmllcyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIm1vdmllIiwiaW5kZXgiLCJzcmMiLCJwb3N0ZXJfcGF0aCIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwidGl0bGUiLCJyZWxlYXNlX2RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/movies/[id]/page.jsx\n"));

/***/ })

});