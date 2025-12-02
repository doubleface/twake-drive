"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/views/Recent/index.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  RecentView: () => (RecentView),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/jsx-dev-runtime.js");
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_29__);
/* ESM import */var cozy_flags__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-flags/dist/index.browser.js");
/* ESM import */var cozy_sharing__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__("./node_modules/cozy-sharing/dist/hooks/useSharingContext.js");
/* ESM import */var cozy_sharing__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__("./node_modules/cozy-sharing/dist/providers/NativeFileSharingProvider.js");
/* ESM import */var cozy_sharing__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__("./node_modules/cozy-sharing/dist/actions/shareNative.js");
/* ESM import */var cozy_ui_transpiled_react_ActionsMenu_Actions__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/ActionsMenu/Actions/helpers.js");
/* ESM import */var cozy_ui_transpiled_react_Layout__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Layout/Layout.js");
/* ESM import */var cozy_ui_transpiled_react_providers_Alert__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Alert/index.js");
/* ESM import */var cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");
/* ESM import */var cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/I18n/index.js");
/* ESM import */var _Folder_FolderView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/views/Folder/FolderView.jsx");
/* ESM import */var _Folder_FolderViewBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/views/Folder/FolderViewBody.jsx");
/* ESM import */var _Folder_FolderViewHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/modules/views/Folder/FolderViewHeader.jsx");
/* ESM import */var _Folder_virtualized_FolderViewBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/modules/views/Folder/virtualized/FolderViewBody.jsx");
/* ESM import */var _components_useHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/useHead.jsx");
/* ESM import */var _constants_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/constants/config.js");
/* ESM import */var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/hooks/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/useDataProxyRecents'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* ESM import */var _hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/hooks/useKeyboardShortcuts.tsx");
/* ESM import */var _lib_ModalContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/lib/ModalContext.tsx");
/* ESM import */var _modules_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/modules/actions/index.js");
/* ESM import */var _modules_actions_components_addToFavorites__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/modules/actions/components/addToFavorites.tsx");
/* ESM import */var _modules_actions_components_moveTo__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./src/modules/actions/components/moveTo.jsx");
/* ESM import */var _modules_actions_components_removeFromFavorites__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./src/modules/actions/components/removeFromFavorites.tsx");
/* ESM import */var _modules_breadcrumb_components_MobileAwareBreadcrumb__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./src/modules/breadcrumb/components/MobileAwareBreadcrumb.jsx");
/* ESM import */var _modules_certifications__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./src/modules/certifications/index.jsx");
/* ESM import */var _modules_certifications_useExtraColumns__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./src/modules/certifications/useExtraColumns.jsx");
/* ESM import */var _modules_drive_AddMenu_AddMenuProvider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("./src/modules/drive/AddMenu/AddMenuProvider.jsx");
/* ESM import */var _modules_drive_FabWithAddMenuContext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__("./src/modules/drive/FabWithAddMenuContext.jsx");
/* ESM import */var _modules_drive_Toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__("./src/modules/drive/Toolbar/index.jsx");
/* ESM import */var _modules_selection_SelectionProvider__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__("./src/modules/selection/SelectionProvider.jsx");
/* ESM import */var _queries__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__("./src/queries/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");

var _s = $RefreshSig$();

































const desktopExtraColumnsNames = [
    'carbonCopy',
    'electronicSafe'
];
const mobileExtraColumnsNames = [];
const RecentView = ()=>{
    _s();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useNavigate)();
    const { pathname } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useLocation)();
    const { t, lang } = (0,cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_27__.useI18n)();
    const { isMobile } = (0,cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_28__["default"])();
    const client = (0,cozy_client__WEBPACK_IMPORTED_MODULE_29__.useClient)();
    const { pushModal, popModal } = (0,_lib_ModalContext__WEBPACK_IMPORTED_MODULE_13__.useModalContext)();
    const { isSelectionBarVisible, toggleSelectAllItems, isSelectAll } = (0,_modules_selection_SelectionProvider__WEBPACK_IMPORTED_MODULE_24__.useSelectionContext)();
    const sharingContext = (0,cozy_sharing__WEBPACK_IMPORTED_MODULE_30__.useSharingContext)();
    const { allLoaded, refresh, isOwner, byDocId } = sharingContext;
    const { isNativeFileSharingAvailable, shareFilesNative } = (0,cozy_sharing__WEBPACK_IMPORTED_MODULE_31__.useNativeFileSharing)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
    (0,_components_useHead__WEBPACK_IMPORTED_MODULE_8__["default"])();
    const { showAlert } = (0,cozy_ui_transpiled_react_providers_Alert__WEBPACK_IMPORTED_MODULE_32__.useAlert)();
    const [sortOrder, setSortOrder, isSettingsLoaded] = (0,_hooks__WEBPACK_IMPORTED_MODULE_10__.useFolderSort)(_constants_config__WEBPACK_IMPORTED_MODULE_9__.RECENT_FOLDER_ID);
    const extraColumnsNames = (0,_modules_certifications__WEBPACK_IMPORTED_MODULE_19__.makeExtraColumnsNamesFromMedia)({
        isMobile,
        desktopExtraColumnsNames,
        mobileExtraColumnsNames
    });
    const extraColumns = (0,_modules_certifications_useExtraColumns__WEBPACK_IMPORTED_MODULE_20__.useExtraColumns)({
        columnsNames: extraColumnsNames,
        queryBuilder: _queries__WEBPACK_IMPORTED_MODULE_25__.buildRecentWithMetadataAttributeQuery
    });
    const dataProxyRecentsResult = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/useDataProxyRecents'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    (0,_hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_12__.useKeyboardShortcuts)({
        client,
        items: (dataProxyRecentsResult === null || dataProxyRecentsResult === void 0 ? void 0 : dataProxyRecentsResult.data) || [],
        sharingContext,
        allowCopy: false,
        pushModal,
        popModal,
        refresh
    });
    const actionsOptions = {
        client,
        t,
        lang,
        pushModal,
        popModal,
        refresh,
        dispatch,
        navigate,
        pathname,
        hasWriteAccess: true,
        canMove: true,
        isPublic: false,
        allLoaded,
        showAlert,
        isOwner,
        byDocId,
        isMobile,
        isNativeFileSharingAvailable,
        shareFilesNative,
        selectAll: ()=>toggleSelectAllItems(dataProxyRecentsResult.data),
        isSelectAll
    };
    const actions = (0,cozy_ui_transpiled_react_ActionsMenu_Actions__WEBPACK_IMPORTED_MODULE_33__.makeActions)([
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.selectAllItems,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.share,
        cozy_sharing__WEBPACK_IMPORTED_MODULE_34__.shareNative,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.download,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.hr,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.rename,
        _modules_actions_components_moveTo__WEBPACK_IMPORTED_MODULE_16__.moveTo,
        _modules_actions_components_addToFavorites__WEBPACK_IMPORTED_MODULE_15__.addToFavorites,
        _modules_actions_components_removeFromFavorites__WEBPACK_IMPORTED_MODULE_17__.removeFromFavorites,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.infos,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.hr,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.versions,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.hr,
        _modules_actions__WEBPACK_IMPORTED_MODULE_14__.trash
    ], actionsOptions);
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Folder_FolderView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(cozy_ui_transpiled_react_Layout__WEBPACK_IMPORTED_MODULE_35__.Content, {
            className: isMobile ? '' : 'u-pt-1',
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Folder_FolderViewHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_breadcrumb_components_MobileAwareBreadcrumb__WEBPACK_IMPORTED_MODULE_18__.MobileAwareBreadcrumb, {
                            path: [
                                {
                                    name: t('breadcrumb.title_recent')
                                }
                            ]
                        }, void 0, false, {
                            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
                            lineNumber: 144,
                            columnNumber: 11
                        }, undefined),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_drive_Toolbar__WEBPACK_IMPORTED_MODULE_23__["default"], {
                            canUpload: false,
                            canCreateFolder: false
                        }, void 0, false, {
                            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, undefined)
                    ]
                }, void 0, true, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, undefined),
                (0,cozy_flags__WEBPACK_IMPORTED_MODULE_3__["default"])('drive.virtualization.enabled') && !isMobile ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Folder_virtualized_FolderViewBody__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    actions: actions,
                    queryResults: [
                        dataProxyRecentsResult
                    ],
                    withFilePath: true,
                    extraColumns: extraColumns,
                    orderProps: {
                        sortOrder,
                        setOrder: setSortOrder,
                        isSettingsLoaded
                    }
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
                    lineNumber: 148,
                    columnNumber: 11
                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Folder_FolderViewBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
                    actions: actions,
                    queryResults: [
                        dataProxyRecentsResult
                    ],
                    canSort: false,
                    withFilePath: true,
                    extraColumns: extraColumns
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
                    lineNumber: 160,
                    columnNumber: 11
                }, undefined),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_router_dom__WEBPACK_IMPORTED_MODULE_26__.Outlet, {}, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, undefined),
                isMobile && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_drive_AddMenu_AddMenuProvider__WEBPACK_IMPORTED_MODULE_21__["default"], {
                    canCreateFolder: true,
                    canUpload: true,
                    disabled: false,
                    displayedFolder: null,
                    isSelectionBarVisible: isSelectionBarVisible,
                    isPublic: false,
                    refreshFolderContent: ()=>{},
                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modules_drive_FabWithAddMenuContext__WEBPACK_IMPORTED_MODULE_22__["default"], {
                        noSidebar: false
                    }, void 0, false, {
                        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
                        lineNumber: 179,
                        columnNumber: 13
                    }, undefined)
                }, void 0, false, {
                    fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
                    lineNumber: 170,
                    columnNumber: 11
                }, undefined)
            ]
        }, void 0, true, {
            fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
            lineNumber: 142,
            columnNumber: 7
        }, undefined)
    }, void 0, false, {
        fileName: "/home/doubleface/Workspace/cozy-drive/src/modules/views/Recent/index.jsx",
        lineNumber: 141,
        columnNumber: 5
    }, undefined);
};
_s(RecentView, "NVLDFoqVebR/T7xOKO5FBd7bT4E=", false, function() {
    return [
        react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useNavigate,
        react_router_dom__WEBPACK_IMPORTED_MODULE_26__.useLocation,
        cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_27__.useI18n,
        cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_28__["default"],
        cozy_client__WEBPACK_IMPORTED_MODULE_29__.useClient,
        _lib_ModalContext__WEBPACK_IMPORTED_MODULE_13__.useModalContext,
        _modules_selection_SelectionProvider__WEBPACK_IMPORTED_MODULE_24__.useSelectionContext,
        cozy_sharing__WEBPACK_IMPORTED_MODULE_30__.useSharingContext,
        cozy_sharing__WEBPACK_IMPORTED_MODULE_31__.useNativeFileSharing,
        react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch,
        _components_useHead__WEBPACK_IMPORTED_MODULE_8__["default"],
        cozy_ui_transpiled_react_providers_Alert__WEBPACK_IMPORTED_MODULE_32__.useAlert,
        _hooks__WEBPACK_IMPORTED_MODULE_10__.useFolderSort,
        _modules_certifications_useExtraColumns__WEBPACK_IMPORTED_MODULE_20__.useExtraColumns,
        Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/hooks/useDataProxyRecents'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
        _hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_12__.useKeyboardShortcuts
    ];
});
_c = RecentView;
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentView);
var _c;
$RefreshReg$(_c, "RecentView");

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
__webpack_require__.h = () => ("672b8b81b65d485f")
})();

}
);
//# sourceMappingURL=main.3a4a58f98555ff61.hot-update.js.map