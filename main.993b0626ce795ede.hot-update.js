"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
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
__webpack_require__.h = () => ("e0cdae33544f8355")
})();

}
);
//# sourceMappingURL=main.993b0626ce795ede.hot-update.js.map