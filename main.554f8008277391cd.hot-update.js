"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/ExternalNavItem.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExternalNavItem: () => (ExternalNavItem)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/prop-types/index.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_7__);
/* ESM import */var cozy_device_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-device-helper/dist/index.js");
/* ESM import */var cozy_intent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-intent/dist/index.js");
/* ESM import */var cozy_intent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cozy_intent__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var twake_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/twake-i18n/dist/index.js");
/* ESM import */var _modules_navigation_NavContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/navigation/NavContent.tsx");
/* ESM import */var _modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/navigation/navComponents.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();








const ExternalNavItem = (param)=>{
    let { slug, icon, label, path, clickState } = param;
    _s();
    const { t } = (0,twake_i18n__WEBPACK_IMPORTED_MODULE_4__.useI18n)();
    const client = (0,cozy_client__WEBPACK_IMPORTED_MODULE_7__.useClient)();
    const { NavLink: UINavLink, NavItem: UINavItem } = (0,_modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_6__.getNavComponents)();
    const webviewIntent = (0,cozy_intent__WEBPACK_IMPORTED_MODULE_3__.useWebviewIntent)();
    const href = (0,cozy_client__WEBPACK_IMPORTED_MODULE_7__.generateWebLink)({
        slug,
        cozyUrl: client.getStackClient().uri,
        subDomainType: client.getInstanceOptions().subdomain,
        ...path && {
            hash: path
        }
    });
    const handleClick = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{
        e.preventDefault();
        if (clickState) {
            clickState[1](undefined);
        }
        if ((0,cozy_device_helper__WEBPACK_IMPORTED_MODULE_2__.isFlagshipApp)()) {
            webviewIntent.call('openApp', href, {
                slug
            });
        } else {
            window.location.href = href;
        }
    }, [
        href,
        slug,
        webviewIntent,
        clickState
    ]);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UINavItem, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            href: href,
            onClick: handleClick,
            className: UINavLink.className,
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_NavContent__WEBPACK_IMPORTED_MODULE_5__.NavContent, {
                icon: icon,
                label: t(`Nav.item_${label}`)
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/ExternalNavItem.jsx",
                lineNumber: 43,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/ExternalNavItem.jsx",
            lineNumber: 42,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/ExternalNavItem.jsx",
        lineNumber: 41,
        columnNumber: 5
    }, undefined);
};
_s(ExternalNavItem, "A1paDk60ALpvjX/7hBrh7mg7HdY=", false, function() {
    return [
        twake_i18n__WEBPACK_IMPORTED_MODULE_4__.useI18n,
        cozy_client__WEBPACK_IMPORTED_MODULE_7__.useClient,
        cozy_intent__WEBPACK_IMPORTED_MODULE_3__.useWebviewIntent
    ];
});
_c = ExternalNavItem;
ExternalNavItem.propTypes = {
    slug: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired),
    icon: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().element.isRequired),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired),
    path: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string),
    clickState: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().array)
};

var _c;
$RefreshReg$(_c, "ExternalNavItem");

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
__webpack_require__.h = () => ("ae9e8112e01f64b0")
})();

}
);
//# sourceMappingURL=main.554f8008277391cd.hot-update.js.map