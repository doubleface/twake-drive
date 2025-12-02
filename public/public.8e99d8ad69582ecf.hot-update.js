"use strict";
self["webpackHotUpdatecozy_drive"]("public", {
"./src/modules/filelist/virtualized/cells/FileNamePath.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/react-router-dom/dist/index.js");
/* ESM import */var cozy_ui_transpiled_react_MidEllipsis__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/MidEllipsis/index.js");
/* ESM import */var cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");
/* ESM import */var cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/I18n/index.js");
/* ESM import */var _styles_filelist_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/styles/filelist.styl");
/* ESM import */var _modules_filelist_cells_CertificationsIcons_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/filelist/cells/CertificationsIcons.jsx");
/* ESM import */var _modules_filelist_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/filelist/helpers.ts");
/* ESM import */var _modules_routeUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/routeUtils.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();









const FileNamePath = (param)=>{
    let { attributes, withFilePath, formattedSize, formattedUpdatedAt, parentFolderPath } = param;
    _s();
    const { isMobile } = (0,cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_6__.useBreakpoints)();
    const { t } = (0,cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_7__.useI18n)();
    const { filename, extension } = (0,_modules_filelist_helpers__WEBPACK_IMPORTED_MODULE_4__.getFileNameAndExtension)(attributes, t);
    if (!withFilePath) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: _styles_filelist_styl__WEBPACK_IMPORTED_MODULE_2__["default"]["fil-file-infos"],
            children: [
                `${formattedUpdatedAt}${formattedSize ? ` - ${formattedSize}` : ''}`,
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_filelist_cells_CertificationsIcons_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    attributes: attributes
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/filelist/virtualized/cells/FileNamePath.jsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/filelist/virtualized/cells/FileNamePath.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, undefined);
    }
    if (isMobile) {
        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: _styles_filelist_styl__WEBPACK_IMPORTED_MODULE_2__["default"]["fil-file-description"],
            title: filename + extension,
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_MidEllipsis__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    className: _styles_filelist_styl__WEBPACK_IMPORTED_MODULE_2__["default"]["fil-file-description--path"],
                    text: parentFolderPath
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/filelist/virtualized/cells/FileNamePath.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_filelist_cells_CertificationsIcons_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    attributes: attributes
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/filelist/virtualized/cells/FileNamePath.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/filelist/virtualized/cells/FileNamePath.jsx",
            lineNumber: 36,
            columnNumber: 7
        }, undefined);
    }
    const to = attributes.driveId ? (0,_modules_routeUtils__WEBPACK_IMPORTED_MODULE_5__.getSharedDrivePath)(attributes.driveId, attributes.dir_id) : getFolderPath(attributes.dir_id);
    const sharedDrivePath = (0,_modules_routeUtils__WEBPACK_IMPORTED_MODULE_5__.getSharedDrivePath)(attributes.driveId, attributes.dir_id);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: to,
        // Please do not modify the className as it is used in event handling, see FileOpener
        className: _styles_filelist_styl__WEBPACK_IMPORTED_MODULE_2__["default"]["fil-file-path"],
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_MidEllipsis__WEBPACK_IMPORTED_MODULE_8__["default"], {
            text: parentFolderPath
        }, void 0, false, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/filelist/virtualized/cells/FileNamePath.jsx",
            lineNumber: 58,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/filelist/virtualized/cells/FileNamePath.jsx",
        lineNumber: 53,
        columnNumber: 5
    }, undefined);
};
_s(FileNamePath, "URjKXg+c7aS1ifkywKcjl8mpzxE=", false, function() {
    return [
        cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_6__.useBreakpoints,
        cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_7__.useI18n
    ];
});
_c = FileNamePath;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FileNamePath);
var _c;
$RefreshReg$(_c, "FileNamePath");

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
__webpack_require__.h = () => ("ddcc034771742883")
})();

}
);
//# sourceMappingURL=public.8e99d8ad69582ecf.hot-update.js.map