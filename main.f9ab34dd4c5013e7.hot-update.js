"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/FavoriteList.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FavoriteList: () => (FavoriteList)
});
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/core-js/modules/es.iterator.constructor.js");
/* ESM import */var core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* ESM import */var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/core-js/modules/es.iterator.map.js");
/* ESM import */var core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_iterator_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_8__);
/* ESM import */var twake_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/twake-i18n/dist/index.js");
/* ESM import */var _modules_navigation_FavoriteListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/navigation/FavoriteListItem.tsx");
/* ESM import */var _modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/navigation/navComponents.ts");
/* ESM import */var _queries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/queries/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");



var _s = $RefreshSig$();






const FavoriteList = (param)=>{
    let { clickState } = param;
    _s();
    const { t } = (0,twake_i18n__WEBPACK_IMPORTED_MODULE_4__.useI18n)();
    const { NavDesktopDropdown } = (0,_modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_6__.getNavComponents)();
    const favoritesQuery = (0,_queries__WEBPACK_IMPORTED_MODULE_7__.buildFavoritesQuery)({
        sortAttribute: 'name',
        sortOrder: 'desc'
    });
    const favoritesResult = (0,cozy_client__WEBPACK_IMPORTED_MODULE_8__.useQuery)(favoritesQuery.definition, favoritesQuery.options);
    if (favoritesResult.data && favoritesResult.data.length > 0) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(NavDesktopDropdown, {
            label: t('Nav.item_favorites'),
            children: favoritesResult.data.map((file)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_modules_navigation_FavoriteListItem__WEBPACK_IMPORTED_MODULE_5__.FavoriteListItem, {
                    file: file,
                    clickState: clickState
                }, file._id, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/FavoriteList.tsx",
                    lineNumber: 33,
                    columnNumber: 11
                }, undefined))
        }, void 0, false, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/FavoriteList.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, undefined);
    }
    return null;
};
_s(FavoriteList, "nX1qUflKRg2wieGMuqeAY4vOfVY=", false, function() {
    return [
        twake_i18n__WEBPACK_IMPORTED_MODULE_4__.useI18n,
        cozy_client__WEBPACK_IMPORTED_MODULE_8__.useQuery
    ];
});
_c = FavoriteList;

var _c;
$RefreshReg$(_c, "FavoriteList");

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
__webpack_require__.h = () => ("e44c1b2da3a731e3")
})();

}
);
//# sourceMappingURL=main.f9ab34dd4c5013e7.hot-update.js.map