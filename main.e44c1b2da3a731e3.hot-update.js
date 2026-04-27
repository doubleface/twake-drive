"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/FavoriteListItem.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  FavoriteListItem: () => (FavoriteListItem)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/cozy-client/dist/models/file.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_File__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/File.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_FileTypeServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/FileTypeServer.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_Folder__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/Folder.js");
/* ESM import */var cozy_ui_transpiled_react_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js");
/* ESM import */var _components_FileLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/navigation/components/FileLink.tsx");
/* ESM import */var _modules_navigation_hooks_useFileLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/navigation/hooks/useFileLink.tsx");
/* ESM import */var _modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/navigation/navComponents.ts");
/* ESM import */var _modules_nextcloud_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/nextcloud/helpers.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();










const makeIcon = (file)=>(0,_modules_nextcloud_helpers__WEBPACK_IMPORTED_MODULE_5__.isNextcloudShortcut)(file) ? cozy_ui_transpiled_react_Icons_FileTypeServer__WEBPACK_IMPORTED_MODULE_6__["default"] : (0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_7__.isDirectory)(file) ? cozy_ui_transpiled_react_Icons_Folder__WEBPACK_IMPORTED_MODULE_8__["default"] : cozy_ui_transpiled_react_Icons_File__WEBPACK_IMPORTED_MODULE_9__["default"];
const FavoriteListItem = (param)=>{
    let { file, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    clickState: [lastClicked, setLastClicked] } = param;
    _s();
    const { NavIcon, NavLink, NavItem } = (0,_modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_4__.getNavComponents)();
    const { link } = (0,_modules_navigation_hooks_useFileLink__WEBPACK_IMPORTED_MODULE_3__.useFileLink)(file, {
        forceFolderPath: (0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_7__.isNote)(file) || (0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_7__.isOnlyOfficeFile)(file) ? false : true
    });
    const { filename } = (0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_7__.splitFilename)(file);
    const ItemIcon = makeIcon(file);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_FileLink__WEBPACK_IMPORTED_MODULE_2__.FileLink, {
            link: link,
            className: NavLink.className,
            onClick: ()=>setLastClicked(undefined),
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavIcon, {
                    icon: ItemIcon
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/FavoriteListItem.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    className: "u-fz-small",
                    variant: "inherit",
                    color: "inherit",
                    noWrap: true,
                    children: filename
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/FavoriteListItem.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/FavoriteListItem.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, undefined)
    }, file._id, false, {
        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/FavoriteListItem.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, undefined);
};
_s(FavoriteListItem, "ZOMT3BzMOnaaVo9tt85M5Fhow0Y=", false, function() {
    return [
        _modules_navigation_hooks_useFileLink__WEBPACK_IMPORTED_MODULE_3__.useFileLink
    ];
});
_c = FavoriteListItem;

var _c;
$RefreshReg$(_c, "FavoriteListItem");

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
__webpack_require__.h = () => ("c234e38ff697a835")
})();

}
);
//# sourceMappingURL=main.e44c1b2da3a731e3.hot-update.js.map