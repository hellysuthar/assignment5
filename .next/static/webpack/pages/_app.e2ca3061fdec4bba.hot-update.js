"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/MainNav.jsx":
/*!********************************!*\
  !*** ./components/MainNav.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MainNav; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap/Button */ \"./node_modules/react-bootstrap/esm/Button.js\");\n/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap/Container */ \"./node_modules/react-bootstrap/esm/Container.js\");\n/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap/Form */ \"./node_modules/react-bootstrap/esm/Form.js\");\n/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap/Nav */ \"./node_modules/react-bootstrap/esm/Nav.js\");\n/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap/Navbar */ \"./node_modules/react-bootstrap/esm/Navbar.js\");\n/* harmony import */ var react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/NavDropdown */ \"./node_modules/react-bootstrap/esm/NavDropdown.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jotai */ \"./node_modules/jotai/esm/index.mjs\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store */ \"./store.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction MainNav() {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [searchText, setSearchText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [searchHistory, setSearchHistory] = (0,jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_4__.searchHistoryAtom);\n    // When the user clicks on the search button, the form is submitted and the app redirects the user to the custom URL requested\n    const handleSubmit = (event)=>{\n        event.preventDefault();\n        setIsExpanded(false);\n        if (searchText.trim() != \"\") {\n            let queryString = \"title=true&q=\".concat(searchText);\n            setSearchHistory((searchHistory)=>[\n                    ...searchHistory,\n                    queryString\n                ]);\n            router.push(\"/artwork?title=true&q=\".concat(searchText));\n        }\n        setSearchText(\"\");\n        console.log(searchText);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                expand: \"lg\",\n                className: \"bg-dark navbar-dark fixed-top nav-bar\",\n                expanded: isExpanded,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Brand, {\n                            children: \"Aryan Khurana\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Toggle, {\n                            onClick: ()=>setIsExpanded(!isExpanded),\n                            \"aria-controls\": \"navbarScroll\"\n                        }, void 0, false, {\n                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_6__[\"default\"].Collapse, {\n                            id: \"navbarScroll\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    className: \"me-auto my-2 my-lg-0\",\n                                    style: {\n                                        maxHeight: \"100px\"\n                                    },\n                                    navbarScroll: true,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\",\n                                            passHref: true,\n                                            legacyBehavior: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Link, {\n                                                active: router.pathname === \"/\",\n                                                onClick: ()=>setIsExpanded(false),\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 64\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/search\",\n                                            passHref: true,\n                                            legacyBehavior: true,\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Link, {\n                                                active: router.pathname === \"/search\",\n                                                onClick: ()=>setIsExpanded(false),\n                                                children: \"Advanced Search\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 70\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 21\n                                }, this),\n                                \"\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    className: \"d-flex\",\n                                    onSubmit: handleSubmit,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_9__[\"default\"].Control, {\n                                            onChange: (e)=>{\n                                                setSearchText(e.target.value);\n                                            },\n                                            type: \"search\",\n                                            placeholder: \"Search\",\n                                            className: \"me-2\",\n                                            \"aria-label\": \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 25\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            type: \"submit\",\n                                            variant: \"outline-success\",\n                                            children: \"Search\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 21\n                                }, this),\n                                \"\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                        title: \"User Name\",\n                                        id: \"basic-nav-dropdown\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/favourites\",\n                                                passHref: true,\n                                                legacyBehavior: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Link, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Item, {\n                                                        active: router.pathname === \"/favourites\",\n                                                        onClick: ()=>setIsExpanded(false),\n                                                        href: \"#action/3.1\",\n                                                        children: \"Favourites\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 84\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 74\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 25\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                href: \"/history\",\n                                                passHref: true,\n                                                legacyBehavior: true,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_8__[\"default\"].Link, {\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_NavDropdown__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Item, {\n                                                        active: router.pathname === \"/history\",\n                                                        onClick: ()=>setIsExpanded(false),\n                                                        href: \"#action/3.2\",\n                                                        children: \"History\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                                        lineNumber: 54,\n                                                        columnNumber: 81\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                                    lineNumber: 54,\n                                                    columnNumber: 71\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 25\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                lineNumber: 61,\n                columnNumber: 19\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/aryan-khurana/Desktop/WEB422-Learning-and-Assignments/Assignments/Assignment-05/a05-app/components/MainNav.jsx\",\n                lineNumber: 61,\n                columnNumber: 25\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MainNav, \"s9QFGg5NU8W64RL5ThVndQ4l4Xc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        jotai__WEBPACK_IMPORTED_MODULE_5__.useAtom\n    ];\n});\n_c = MainNav;\nvar _c;\n$RefreshReg$(_c, \"MainNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixPQUFPK0IsYUFBYTt3REFBWVgsU0FBUyxJQUFNaEIsY0FBYzt3REFBUXVCLE1BQUs7a0VBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU90TCw4REFBQ2lCOzs7OzswQkFBSyw4REFBQ0E7Ozs7OzBCQUFLLDhEQUFDQTs7Ozs7OztBQUd6QjtHQW5Ed0I3Qzs7UUFDTEgsa0RBQVNBO1FBR29CQywwQ0FBT0E7OztLQUovQkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluTmF2LmpzeD80NzA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0J1dHRvbic7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Db250YWluZXInO1xuaW1wb3J0IEZvcm0gZnJvbSAncmVhY3QtYm9vdHN0cmFwL0Zvcm0nO1xuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcbmltcG9ydCBOYXZiYXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdmJhcic7XG5pbXBvcnQgTmF2RHJvcGRvd24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdkRyb3Bkb3duJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VBdG9tIH0gZnJvbSAnam90YWknO1xuaW1wb3J0IHsgc2VhcmNoSGlzdG9yeUF0b20gfSBmcm9tICdAL3N0b3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbk5hdigpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbIHNlYXJjaFRleHQsIHNldFNlYXJjaFRleHQgXSA9IHVzZVN0YXRlKCcnKTtcbiAgICBjb25zdCBbIGlzRXhwYW5kZWQsIHNldElzRXhwYW5kZWQgXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbIHNlYXJjaEhpc3RvcnksIHNldFNlYXJjaEhpc3RvcnkgXSA9IHVzZUF0b20oc2VhcmNoSGlzdG9yeUF0b20pO1xuXG4gICAgLy8gV2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIHNlYXJjaCBidXR0b24sIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBhbmQgdGhlIGFwcCByZWRpcmVjdHMgdGhlIHVzZXIgdG8gdGhlIGN1c3RvbSBVUkwgcmVxdWVzdGVkXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNldElzRXhwYW5kZWQoZmFsc2UpO1xuICAgICAgICBpZiAoc2VhcmNoVGV4dC50cmltKCkgIT0gJycpIHtcbiAgICAgICAgICAgIGxldCBxdWVyeVN0cmluZyA9IGB0aXRsZT10cnVlJnE9JHtzZWFyY2hUZXh0fWA7XG4gICAgICAgICAgICBzZXRTZWFyY2hIaXN0b3J5KHNlYXJjaEhpc3RvcnkgPT4gWy4uLnNlYXJjaEhpc3RvcnksIHF1ZXJ5U3RyaW5nXSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChgL2FydHdvcms/dGl0bGU9dHJ1ZSZxPSR7c2VhcmNoVGV4dH1gKTtcbiAgICAgICAgfVxuICAgICAgICBzZXRTZWFyY2hUZXh0KCcnKTtcbiAgICAgICAgY29uc29sZS5sb2coc2VhcmNoVGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgZXhwYW5kPVwibGdcIiBjbGFzc05hbWU9XCJiZy1kYXJrIG5hdmJhci1kYXJrIGZpeGVkLXRvcCBuYXYtYmFyXCIgZXhwYW5kZWQ9e2lzRXhwYW5kZWR9PlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQnJhbmQ+QXJ5YW4gS2h1cmFuYTwvTmF2YmFyLkJyYW5kPlxuICAgICAgICAgICAgICAgICAgICA8TmF2YmFyLlRvZ2dsZSBvbkNsaWNrPXsoKSA9PiBzZXRJc0V4cGFuZGVkKCFpc0V4cGFuZGVkKX0gYXJpYS1jb250cm9scz1cIm5hdmJhclNjcm9sbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxOYXZiYXIuQ29sbGFwc2UgaWQ9XCJuYXZiYXJTY3JvbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtZS1hdXRvIG15LTIgbXktbGctMFwiIHN0eWxlPXt7IG1heEhlaWdodDogJzEwMHB4JyB9fSBuYXZiYXJTY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPjxOYXYuTGluayBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvXCJ9IG9uQ2xpY2s9eygpID0+IHNldElzRXhwYW5kZWQoZmFsc2UpfT5Ib21lPC9OYXYuTGluaz48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaFwiIHBhc3NIcmVmIGxlZ2FjeUJlaGF2aW9yPjxOYXYuTGluayBhY3RpdmU9e3JvdXRlci5wYXRobmFtZSA9PT0gXCIvc2VhcmNoXCJ9IG9uQ2xpY2s9eygpID0+IHNldElzRXhwYW5kZWQoZmFsc2UpfT5BZHZhbmNlZCBTZWFyY2g8L05hdi5MaW5rPjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG5cbiAgICAgICAgICAgICAgICAgICAgey8qIEZvcm0gdXNlcyB0aGUgaWRlYSBvZiBjb250cm9sbGVkIGNvbXBvbmVudHMgYW5kIGtlZXBzIHRyYWNrIG9mIHN0YXRlICovfVxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiZC1mbGV4XCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sIG9uQ2hhbmdlPXsoZSkgPT4ge3NldFNlYXJjaFRleHQoZS50YXJnZXQudmFsdWUpfX0gdHlwZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgY2xhc3NOYW1lPVwibWUtMlwiIGFyaWEtbGFiZWw9XCJTZWFyY2hcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdzdWJtaXQnIHZhcmlhbnQ9XCJvdXRsaW5lLXN1Y2Nlc3NcIj5TZWFyY2g8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtPiZuYnNwO1xuXG4gICAgICAgICAgICAgICAgICAgIDxOYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2RHJvcGRvd24gdGl0bGU9XCJVc2VyIE5hbWVcIiBpZD1cImJhc2ljLW5hdi1kcm9wZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXZvdXJpdGVzXCIgcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+PE5hdi5MaW5rPjxOYXZEcm9wZG93bi5JdGVtIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9mYXZvdXJpdGVzXCJ9IG9uQ2xpY2s9eygpID0+IHNldElzRXhwYW5kZWQoZmFsc2UpfSBocmVmPVwiI2FjdGlvbi8zLjFcIj5GYXZvdXJpdGVzPC9OYXZEcm9wZG93bi5JdGVtPjwvTmF2Lkxpbms+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9oaXN0b3J5XCIgcGFzc0hyZWYgbGVnYWN5QmVoYXZpb3I+PE5hdi5MaW5rPjxOYXZEcm9wZG93bi5JdGVtIGFjdGl2ZT17cm91dGVyLnBhdGhuYW1lID09PSBcIi9oaXN0b3J5XCJ9IG9uQ2xpY2s9eygpID0+IHNldElzRXhwYW5kZWQoZmFsc2UpfSBocmVmPVwiI2FjdGlvbi8zLjJcIj5IaXN0b3J5PC9OYXZEcm9wZG93bi5JdGVtPjwvTmF2Lkxpbms+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZEcm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L05hdmJhci5Db2xsYXBzZT5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvTmF2YmFyPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+PGJyIC8+IFxuICAgICAgICA8Lz5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiRm9ybSIsIk5hdiIsIk5hdmJhciIsIk5hdkRyb3Bkb3duIiwiTGluayIsInVzZVJvdXRlciIsInVzZUF0b20iLCJzZWFyY2hIaXN0b3J5QXRvbSIsIk1haW5OYXYiLCJyb3V0ZXIiLCJzZWFyY2hUZXh0Iiwic2V0U2VhcmNoVGV4dCIsImlzRXhwYW5kZWQiLCJzZXRJc0V4cGFuZGVkIiwic2VhcmNoSGlzdG9yeSIsInNldFNlYXJjaEhpc3RvcnkiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInF1ZXJ5U3RyaW5nIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJleHBhbmQiLCJjbGFzc05hbWUiLCJleHBhbmRlZCIsIkJyYW5kIiwiVG9nZ2xlIiwib25DbGljayIsImFyaWEtY29udHJvbHMiLCJDb2xsYXBzZSIsImlkIiwic3R5bGUiLCJtYXhIZWlnaHQiLCJuYXZiYXJTY3JvbGwiLCJocmVmIiwicGFzc0hyZWYiLCJsZWdhY3lCZWhhdmlvciIsImFjdGl2ZSIsInBhdGhuYW1lIiwib25TdWJtaXQiLCJDb250cm9sIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhcmlhLWxhYmVsIiwidmFyaWFudCIsInRpdGxlIiwiSXRlbSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MainNav.jsx\n"));

/***/ })

});