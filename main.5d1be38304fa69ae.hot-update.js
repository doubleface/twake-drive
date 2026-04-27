"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/Nav.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Nav: () => (Nav),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var cozy_flags__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-flags/dist/index.browser.js");
/* ESM import */var cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icon/index.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_ClockOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/ClockOutline.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_Cloud2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/Cloud2.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_CloudSync__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/CloudSync.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_Star__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/Star.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_Trash__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/Trash.js");
/* ESM import */var cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");
/* ESM import */var _modules_navigation_ExternalNavItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/navigation/ExternalNavItem.jsx");
/* ESM import */var _modules_navigation_FavoriteList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/navigation/FavoriteList.tsx");
/* ESM import */var _modules_navigation_NavContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/navigation/NavContext.jsx");
/* ESM import */var _modules_navigation_NavItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/navigation/NavItem.jsx");
/* ESM import */var _modules_navigation_SharingsNavItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/navigation/SharingsNavItem.jsx");
/* ESM import */var _modules_navigation_components_ExternalDrivesList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/modules/navigation/components/ExternalDrivesList.tsx");
/* ESM import */var _modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/modules/navigation/navComponents.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();
















const Nav = ()=>{
    _s();
    const clickState = (0,_modules_navigation_NavContext__WEBPACK_IMPORTED_MODULE_5__.useNavContext)();
    const { isDesktop } = (0,cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_10__["default"])();
    const { Nav: NavComponent } = (0,_modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_9__.getNavComponents)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavComponent, {
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_NavItem__WEBPACK_IMPORTED_MODULE_6__.NavItem, {
                to: "/folder",
                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    icon: cozy_ui_transpiled_react_Icons_Cloud2__WEBPACK_IMPORTED_MODULE_12__["default"]
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                    lineNumber: 29,
                    columnNumber: 15
                }, void 0),
                label: "drive",
                rx: /\/(folder|nextcloud)(\/.*)?/,
                clickState: clickState
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, undefined),
            !isDesktop ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_NavItem__WEBPACK_IMPORTED_MODULE_6__.NavItem, {
                to: "/favorites",
                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    icon: cozy_ui_transpiled_react_Icons_Star__WEBPACK_IMPORTED_MODULE_13__["default"]
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, void 0),
                label: "favorites",
                rx: /\/favorites(\/.*)?/,
                clickState: clickState
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                lineNumber: 35,
                columnNumber: 9
            }, undefined) : null,
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_NavItem__WEBPACK_IMPORTED_MODULE_6__.NavItem, {
                to: "/recent",
                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    icon: cozy_ui_transpiled_react_Icons_ClockOutline__WEBPACK_IMPORTED_MODULE_14__["default"]
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                    lineNumber: 45,
                    columnNumber: 15
                }, void 0),
                label: "recent",
                rx: /\/recent(\/.*)?/,
                clickState: clickState
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_SharingsNavItem__WEBPACK_IMPORTED_MODULE_7__.SharingsNavItem, {
                clickState: clickState
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                lineNumber: 50,
                columnNumber: 7
            }, undefined),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_NavItem__WEBPACK_IMPORTED_MODULE_6__.NavItem, {
                to: "/trash",
                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    icon: cozy_ui_transpiled_react_Icons_Trash__WEBPACK_IMPORTED_MODULE_15__["default"]
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                    lineNumber: 53,
                    columnNumber: 15
                }, void 0),
                label: "trash",
                rx: /\/trash(\/.*)?/,
                clickState: clickState
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, undefined),
            (0,cozy_flags__WEBPACK_IMPORTED_MODULE_2__["default"])('settings.migration.enabled') && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_ExternalNavItem__WEBPACK_IMPORTED_MODULE_3__.ExternalNavItem, {
                slug: "settings",
                icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Icon__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    icon: cozy_ui_transpiled_react_Icons_CloudSync__WEBPACK_IMPORTED_MODULE_16__["default"]
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, void 0),
                label: "migration",
                path: "/migration",
                clickState: clickState
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                lineNumber: 59,
                columnNumber: 9
            }, undefined),
            isDesktop ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_FavoriteList__WEBPACK_IMPORTED_MODULE_4__.FavoriteList, {
                clickState: clickState
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                lineNumber: 67,
                columnNumber: 20
            }, undefined) : null,
            isDesktop ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_components_ExternalDrivesList__WEBPACK_IMPORTED_MODULE_8__.ExternalDrives, {
                clickState: clickState,
                className: "u-mt-half"
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
                lineNumber: 69,
                columnNumber: 9
            }, undefined) : null
        ]
    }, void 0, true, {
        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/Nav.jsx",
        lineNumber: 26,
        columnNumber: 5
    }, undefined);
};
_s(Nav, "+XbBj2LRPoejOoMK8ZGz739JWFQ=", false, function() {
    return [
        _modules_navigation_NavContext__WEBPACK_IMPORTED_MODULE_5__.useNavContext,
        cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_10__["default"]
    ];
});
_c = Nav;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);
var _c;
$RefreshReg$(_c, "Nav");

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
"./src/modules/navigation/navComponents.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  getNavComponents: () => (getNavComponents)
});
/* ESM import */var cozy_flags__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/cozy-flags/dist/index.browser.js");
/* ESM import */var cozy_ui_transpiled_react_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Nav/index.js");
/* ESM import */var cozy_ui_transpiled_react_NavNext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/NavNext/index.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



const isNewSidebarEnabled = ()=>Boolean((0,cozy_flags__WEBPACK_IMPORTED_MODULE_0__["default"])('drive.new-sidebar.enabled'));
const getNavComponents = ()=>{
    const useNewSidebar = isNewSidebarEnabled();
    return {
        Nav: useNewSidebar ? cozy_ui_transpiled_react_NavNext__WEBPACK_IMPORTED_MODULE_1__["default"] : cozy_ui_transpiled_react_Nav__WEBPACK_IMPORTED_MODULE_2__["default"],
        NavDesktopDropdown: useNewSidebar ? cozy_ui_transpiled_react_NavNext__WEBPACK_IMPORTED_MODULE_1__.NavDesktopDropdown : cozy_ui_transpiled_react_Nav__WEBPACK_IMPORTED_MODULE_2__.NavDesktopDropdown,
        NavIcon: useNewSidebar ? cozy_ui_transpiled_react_NavNext__WEBPACK_IMPORTED_MODULE_1__.NavIcon : cozy_ui_transpiled_react_Nav__WEBPACK_IMPORTED_MODULE_2__.NavIcon,
        NavItem: useNewSidebar ? cozy_ui_transpiled_react_NavNext__WEBPACK_IMPORTED_MODULE_1__.NavItem : cozy_ui_transpiled_react_Nav__WEBPACK_IMPORTED_MODULE_2__.NavItem,
        NavLink: useNewSidebar ? cozy_ui_transpiled_react_NavNext__WEBPACK_IMPORTED_MODULE_1__.NavLink : cozy_ui_transpiled_react_Nav__WEBPACK_IMPORTED_MODULE_2__.NavLink,
        NavText: useNewSidebar ? cozy_ui_transpiled_react_NavNext__WEBPACK_IMPORTED_MODULE_1__.NavText : cozy_ui_transpiled_react_Nav__WEBPACK_IMPORTED_MODULE_2__.NavText
    };
};

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
__webpack_require__.h = () => ("554f8008277391cd")
})();

}
);
//# sourceMappingURL=main.5d1be38304fa69ae.hot-update.js.map