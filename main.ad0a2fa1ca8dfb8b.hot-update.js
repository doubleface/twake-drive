"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/NavItem.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  NavItem: () => (NavItem)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/prop-types/index.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var twake_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/twake-i18n/dist/index.js");
/* ESM import */var _modules_navigation_NavContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/navigation/NavContent.tsx");
/* ESM import */var _modules_navigation_NavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/navigation/NavLink.jsx");
/* ESM import */var _modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/navigation/navComponents.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();






/**
 * Renders a navigation item with optional badge content and support for shared links.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.to] - The path to navigate to when the item is clicked.
 * @param {string|Object} [props.icon] - The icon to display next to the label.
 * @param {string} [props.label] - The text label for the navigation item.
 * @param {string} [props.forcedLabel] - The forced text label for the navigation item (optional).
 * @param {RegExp} [props.rx] - A RegExp to modify the path dynamically (optional).
 * @param {Object} [props.clickState] - State to be passed to the NavLink on click (optional).
 * @param {number} [props.badgeContent] - Content of the badge to display (optional).
 * @param {boolean} [props.secondary=false] - Whether to apply secondary styling to the nav item (optional).
 * @returns {JSX.Element} The rendered navigation item component.
 */ const NavItem = (param)=>{
    let { to, icon, label, rx, clickState, badgeContent, secondary, forcedLabel } = param;
    _s();
    const { t } = (0,twake_i18n__WEBPACK_IMPORTED_MODULE_2__.useI18n)();
    const { NavItem: UINavItem } = (0,_modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_5__.getNavComponents)();
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(UINavItem, {
        secondary: secondary,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_NavLink__WEBPACK_IMPORTED_MODULE_4__.NavLink, {
            to: to,
            rx: rx,
            clickState: clickState,
            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_navigation_NavContent__WEBPACK_IMPORTED_MODULE_3__.NavContent, {
                icon: icon,
                label: forcedLabel ?? t(`Nav.item_${label}`),
                badgeContent: badgeContent
            }, void 0, false, {
                fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavItem.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, undefined)
        }, void 0, false, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavItem.jsx",
            lineNumber: 40,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/NavItem.jsx",
        lineNumber: 39,
        columnNumber: 5
    }, undefined);
};
_s(NavItem, "82N5KF9nLzZ6+2WH7KIjzIXRkLw=", false, function() {
    return [
        twake_i18n__WEBPACK_IMPORTED_MODULE_2__.useI18n
    ];
});
_c = NavItem;
NavItem.propTypes = {
    to: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    icon: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([
        (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
        (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)
    ]),
    label: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    forcedLabel: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
    rx: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape(RegExp),
    badgeContent: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().number)
};

var _c;
$RefreshReg$(_c, "NavItem");

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
__webpack_require__.h = () => ("0df50fd337e42001")
})();

}
);
//# sourceMappingURL=main.ad0a2fa1ca8dfb8b.hot-update.js.map