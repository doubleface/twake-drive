"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/NavContent.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NavContent: () => (NavContent)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var cozy_ui_transpiled_react_Avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Avatar/index.js");
/* ESM import */var cozy_ui_transpiled_react_Badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Badge/index.js");
/* ESM import */var cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");
/* ESM import */var _modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/navigation/navComponents.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();





const NavContent = (param)=>{
    let { icon, badgeContent, label } = param;
    _s();
    const { isDesktop } = (0,cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const { NavIcon, NavText } = (0,_modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_2__.getNavComponents)();
    if (badgeContent) {
        if (isDesktop) {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavIcon, {
                        icon: icon
                    }, void 0, false, {
                        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                        lineNumber: 27,
                        columnNumber: 20
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavText, {
                        children: label
                    }, void 0, false, {
                        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Avatar__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        color: "var(--errorColor)",
                        textColor: "var(--white)",
                        size: "xs",
                        className: "u-ml-auto u-mr-1",
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                            style: {
                                fontSize: '11px',
                                lineHeight: '1rem'
                            },
                            children: badgeContent > 99 ? '99+' : badgeContent
                        }, void 0, false, {
                            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                            lineNumber: 35,
                            columnNumber: 13
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true);
        } else {
            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Badge__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        badgeContent: badgeContent,
                        color: "error",
                        withBorder: false,
                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavIcon, {
                            icon: icon
                        }, void 0, false, {
                            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                            lineNumber: 46,
                            columnNumber: 15
                        }, undefined)
                    }, void 0, false, {
                        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, undefined),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavText, {
                        children: label
                    }, void 0, false, {
                        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, undefined)
                ]
            }, void 0, true);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            icon && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavIcon, {
                icon: icon
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                lineNumber: 57,
                columnNumber: 16
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavText, {
                children: label
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavContent.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, undefined)
        ]
    }, void 0, true);
};
_s(NavContent, "5NUdrMHE6FfmIwRycm/+4+A42jg=", false, function() {
    return [
        cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_3__["default"]
    ];
});
_c = NavContent;

var _c;
$RefreshReg$(_c, "NavContent");

function $RefreshSig$() {
  return $ReactRefreshRuntime$.createSignatureFunctionForTransform();
}
function $RefreshReg$(type, id) {
  $ReactRefreshRuntime$.register(type, module.id + "_" + id);
}
Promise.resolve().then(function() {
  $ReactRefreshRuntime$.refresh(module.id, module.hot);
});


}),

},function(__webpack_require__) {
// webpack/runtime/get_full_hash
(() => {
__webpack_require__.h = () => ("ad0a2fa1ca8dfb8b")
})();

}
);
//# sourceMappingURL=main.c234e38ff697a835.hot-update.js.map