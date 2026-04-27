"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/NavLink.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NavLink: () => (NavLink)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/classnames/index.js");
/* ESM import */var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/prop-types/index.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* ESM import */var _modules_navigation_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/navigation/helpers.js");
/* ESM import */var _modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/navigation/navComponents.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();






/**
 * Like react-router NavLink but sets the lastClicked state (passed in props)
 * to have a faster change of active (not waiting for the route to completely
 * change).
 */ const NavLink = (param)=>{
    let { children, to, rx, clickState: [lastClicked, setLastClicked] } = param;
    _s();
    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
    const pathname = lastClicked ? lastClicked : location.pathname;
    const isActive = (0,_modules_navigation_helpers__WEBPACK_IMPORTED_MODULE_3__.navLinkMatch)(rx, to, pathname);
    const { NavLink: UINavLink } = (0,_modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_4__.getNavComponents)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: {
            outline: 'none'
        },
        onClick: (e)=>{
            if (!to) e.preventDefault();
            setLastClicked(to);
        },
        href: `#${to}`,
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(UINavLink.className, isActive ? UINavLink.activeClassName : null),
        children: children
    }, void 0, false, {
        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavLink.jsx",
        lineNumber: 25,
        columnNumber: 5
    }, undefined);
};
_s(NavLink, "pkHmaVRPskBaU4tMJuJJpV42k1I=", false, function() {
    return [
        react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation
    ];
});
_c = NavLink;
NavLink.propTypes = {
    children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired),
    to: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    rx: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape(RegExp)
};

var _c;
$RefreshReg$(_c, "NavLink");

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
__webpack_require__.h = () => ("a5a4b1089ba56607")
})();

}
);
//# sourceMappingURL=main.0df50fd337e42001.hot-update.js.map