"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/hooks/useRecentFiles.jsx": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": () => (__WEBPACK_DEFAULT_EXPORT__)
});
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_4__);
/* ESM import */var cozy_dataproxy_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/index.js");
/* ESM import */var _lib_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/lib/logger.js");
/* ESM import */var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/queries/index.ts");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");
var _s = $RefreshSig$();





const useDataProxyRecents = ()=>{
    _s();
    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
    const [fetchStatus, setFetchStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('loading');
    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const dataProxy = (0,cozy_dataproxy_lib__WEBPACK_IMPORTED_MODULE_1__.useDataProxy)();
    const client = (0,cozy_client__WEBPACK_IMPORTED_MODULE_4__.useClient)();
    const recentQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_queries__WEBPACK_IMPORTED_MODULE_3__.buildRecentQuery)(), []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchRecents = async ()=>{
            setFetchStatus('loading');
            setError(null);
            // Try dataProxy first if available
            if (dataProxy.dataProxyServicesAvailable) {
                try {
                    const data = await dataProxy.recents();
                    setData(data || []);
                    setFetchStatus('loaded');
                    return;
                } catch (err) {
                    _lib_logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn('Error fetching recents from dataproxy', err);
                // Fall through to fallback query
                }
            }
            // Fallback to client query on error or if dataProxy is not available
            if (client) {
                try {
                    const result = await client.fetchQueryAndGetFromState({
                        definition: recentQuery.definition(),
                        options: recentQuery.options
                    });
                    console.log('result', result);
                    setData((result === null || result === void 0 ? void 0 : result.data) || []);
                    setFetchStatus('loaded');
                } catch (err) {
                    _lib_logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn('Error fetching recents from fallback query', err);
                    setError(err);
                    setFetchStatus('error');
                }
            } else {
                setError(new Error('Client not available'));
                setFetchStatus('error');
            }
        };
        fetchRecents();
    }, [
        dataProxy,
        client,
        recentQuery
    ]);
    return {
        data,
        fetchStatus,
        error
    };
};
_s(useDataProxyRecents, "U2omV3vAB8AVj3RMgGDx3RXlLOI=", false, function() {
    return [
        cozy_dataproxy_lib__WEBPACK_IMPORTED_MODULE_1__.useDataProxy,
        cozy_client__WEBPACK_IMPORTED_MODULE_4__.useClient
    ];
});
/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDataProxyRecents);

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
__webpack_require__.h = () => ("79dd2fca38693f68")
})();

}
);
//# sourceMappingURL=main.d74a33dedfd07df4.hot-update.js.map