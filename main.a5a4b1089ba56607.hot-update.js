"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/components/ExternalDriveListItem.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  ExternalDriveListItem: () => (ExternalDriveListItem)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* ESM import */var cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/cozy-client/dist/models/file.js");
/* ESM import */var cozy_ui_transpiled_react_Icons_FileTypeServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Icons/FileTypeServer.js");
/* ESM import */var cozy_ui_transpiled_react_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js");
/* ESM import */var _FileLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/navigation/components/FileLink.tsx");
/* ESM import */var _modules_navigation_hooks_useFileLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/navigation/hooks/useFileLink.tsx");
/* ESM import */var _modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/navigation/navComponents.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();







const ExternalDriveListItem = (param)=>{
    let { file, setLastClicked } = param;
    _s();
    const { NavIcon, NavLink, NavItem } = (0,_modules_navigation_navComponents__WEBPACK_IMPORTED_MODULE_4__.getNavComponents)();
    const { link } = (0,_modules_navigation_hooks_useFileLink__WEBPACK_IMPORTED_MODULE_3__.useFileLink)(file, {
        forceFolderPath: false
    });
    const { filename } = (0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_5__.splitFilename)(file);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FileLink__WEBPACK_IMPORTED_MODULE_2__.FileLink, {
            link: link,
            className: NavLink.className,
            onClick: ()=>setLastClicked(undefined),
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavIcon, {
                    icon: cozy_ui_transpiled_react_Icons_FileTypeServer__WEBPACK_IMPORTED_MODULE_6__["default"]
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/components/ExternalDriveListItem.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    variant: "inherit",
                    color: "inherit",
                    noWrap: true,
                    children: filename
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/components/ExternalDriveListItem.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/components/ExternalDriveListItem.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, undefined)
    }, file._id, false, {
        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/navigation/components/ExternalDriveListItem.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, undefined);
};
_s(ExternalDriveListItem, "ZOMT3BzMOnaaVo9tt85M5Fhow0Y=", false, function() {
    return [
        _modules_navigation_hooks_useFileLink__WEBPACK_IMPORTED_MODULE_3__.useFileLink
    ];
});
_c = ExternalDriveListItem;

var _c;
$RefreshReg$(_c, "ExternalDriveListItem");

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
__webpack_require__.h = () => ("993b0626ce795ede")
})();

}
);
//# sourceMappingURL=main.a5a4b1089ba56607.hot-update.js.map