"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/hooks/useFileLink.tsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  useFileLink: () => (useFileLink)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/react-router/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_7__);
/* ESM import */var cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/Breakpoints/index.js");
/* ESM import */var _lib_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/path.js");
/* ESM import */var _modules_navigation_hooks_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/navigation/hooks/helpers.ts");
/* ESM import */var _modules_public_PublicProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/public/PublicProvider.tsx");
/* ESM import */var _modules_routeUtils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/modules/routeUtils.js");
/* ESM import */var _modules_views_OnlyOffice_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/modules/views/OnlyOffice/helpers.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _s = $RefreshSig$();









/**
 * useFileLink computes the link to open a file.
 *
 * forceFolderPath is used to force `/folder` in the path
 *
 * To categories files requires different logic for the moment we can distinguishing 10 different cases. You can find the full list in the computeFileType function.
 *
 * Based on this category, we can compute the path to open the file. This path is relative so in case it will be used inside Drive we need to resolve it to use it inside generateWebLink. To work with relative path allows us to use the same logic for both cases (eg. recent, sharing pages)
 *
 * After we will make two types of links:
 * - to: will be used to open the file inside Drive as it based on react-router-dom convention
 * - href: which is regular href that can be used inside a link
 *
 * The first one is useful for link inside Drive and the second one for link outside of external application (eg. Notes, Nextcloud) or that will be opened in a new tab be default.
 *
 */ const useFileLink = function(file) {
    let { forceFolderPath } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    _s();
    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();
    const { pathname } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();
    const client = (0,cozy_client__WEBPACK_IMPORTED_MODULE_7__.useClient)();
    const { isDesktop } = (0,cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"])();
    const isOfficeEnabled = (0,_modules_views_OnlyOffice_helpers__WEBPACK_IMPORTED_MODULE_5__.isOfficeEnabled)(isDesktop);
    const { isPublic } = (0,_modules_public_PublicProvider__WEBPACK_IMPORTED_MODULE_3__.usePublicContext)();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    const cozyUrl = client === null || client === void 0 ? void 0 : client.getStackClient().uri;
    const type = (0,_modules_navigation_hooks_helpers__WEBPACK_IMPORTED_MODULE_2__.computeFileType)(file, {
        isOfficeEnabled,
        isPublic,
        cozyUrl
    });
    const app = (0,_modules_navigation_hooks_helpers__WEBPACK_IMPORTED_MODULE_2__.computeApp)(type);
    const path = (0,_modules_navigation_hooks_helpers__WEBPACK_IMPORTED_MODULE_2__.computePath)(file, {
        type,
        pathname,
        isPublic
    });
    const shouldBeOpenedInNewTab = type === 'shortcut' || type === 'nextcloud-file';
    const currentURL = new URL(window.location.href);
    const currentPathname = currentURL.pathname;
    const currentSearchParams = currentURL.searchParams;
    // we use relative path because by default react-router-dom will use the structure of routes
    // each level of the path don't have a route but we want to move relatively to the path
    // to have more explanation : https://reactrouter.com/en/main/components/link#relative
    let to = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useResolvedPath)(path, {
        relative: forceFolderPath ? 'route' : 'path'
    });
    if (forceFolderPath && !shouldBeOpenedInNewTab) {
        to = {
            ...to,
            pathname: (type === 'directory' ? '/folder' : (0,_modules_routeUtils__WEBPACK_IMPORTED_MODULE_4__.getFolderPath)(file.dir_id)) + to.pathname
        };
    }
    // we need to merge the searchParams of the current url and the new one created in computed path
    // for example, to keep the sharecode in public context
    const searchParams = new URLSearchParams({
        ...Object.fromEntries(currentSearchParams.entries()),
        ...Object.fromEntries(new URLSearchParams(to.search).entries())
    });
    // nextcloud-file is a special case because Nextcloud are not in cozy ecosystem
    // so we open their link directly
    const href = type === 'nextcloud-file' ? path : (0,cozy_client__WEBPACK_IMPORTED_MODULE_7__.generateWebLink)({
        slug: app,
        cozyUrl,
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        subDomainType: client === null || client === void 0 ? void 0 : client.getInstanceOptions().subdomain,
        // Inside notes, we need to add / at the end of /public/ or /preview/ to avoid 409 error
        pathname: type === 'public-note-same-instance' ? (0,_lib_path__WEBPACK_IMPORTED_MODULE_1__.joinPath)(currentPathname, '') : currentPathname,
        searchParams: searchParams,
        hash: to.pathname
    });
    const openLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((evt)=>{
        if (evt.ctrlKey || evt.metaKey || evt.shiftKey || shouldBeOpenedInNewTab) {
            window.open(href, '_blank');
        } else if (app === 'drive') {
            navigate(to);
        } else {
            window.location.href = href;
        }
    }, [
        app,
        href,
        navigate,
        to,
        shouldBeOpenedInNewTab
    ]);
    return {
        link: {
            app,
            href,
            to,
            openInNewTab: shouldBeOpenedInNewTab
        },
        openLink
    };
};
_s(useFileLink, "Bz/HkCBtsdaZ5Z9qyyXzAa4shDM=", false, function() {
    return [
        react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate,
        react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation,
        cozy_client__WEBPACK_IMPORTED_MODULE_7__.useClient,
        cozy_ui_transpiled_react_providers_Breakpoints__WEBPACK_IMPORTED_MODULE_8__["default"],
        _modules_public_PublicProvider__WEBPACK_IMPORTED_MODULE_3__.usePublicContext,
        react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useResolvedPath
    ];
});


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
__webpack_require__.h = () => ("55c0ff717dac1570")
})();

}
);
//# sourceMappingURL=main.7a65ce8999683ba5.hot-update.js.map