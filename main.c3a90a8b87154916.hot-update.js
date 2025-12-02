"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/hooks/useDataProxyRecents.jsx": (function (module, __webpack_exports__, __webpack_require__) {
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
    const [useFallback, setUseFallback] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const dataProxy = (0,cozy_dataproxy_lib__WEBPACK_IMPORTED_MODULE_1__.useDataProxy)();
    // Memoize the query to avoid recreating it on every render
    const recentQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_queries__WEBPACK_IMPORTED_MODULE_3__.buildRecentQuery)(), []);
    const fallbackQueryResult = (0,cozy_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)(recentQuery.definition, recentQuery.options);
    // Track previous values to avoid unnecessary updates
    const prevFallbackDataLengthRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    const prevFallbackStatusRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const prevFallbackErrorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const fetchRecents = async ()=>{
            setFetchStatus('loading');
            setError(null);
            try {
                const data = await dataProxy.recents();
                setData(data || []);
                setFetchStatus('loaded');
                setUseFallback(false);
            } catch (err) {
                _lib_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error('Error fetching recents', err);
                setError(err);
                setUseFallback(true);
            }
        };
        if (dataProxy.dataProxyServicesAvailable) {
            fetchRecents();
        } else {
            setUseFallback(true);
        }
    }, [
        dataProxy
    ]);
    // Use fallback query result if dataProxy failed or is not available
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!useFallback) {
            return;
        }
        const fallbackData = fallbackQueryResult.data;
        const fallbackStatus = fallbackQueryResult.fetchStatus;
        const fallbackError = fallbackQueryResult.error;
        // Compare array length and status to detect actual changes
        const dataLength = Array.isArray(fallbackData) ? fallbackData.length : 0;
        const hasDataChanged = fallbackData && (dataLength !== prevFallbackDataLengthRef.current || fallbackStatus !== prevFallbackStatusRef.current);
        // Only update if values have actually changed
        if (fallbackStatus === 'loaded' && hasDataChanged) {
            prevFallbackDataLengthRef.current = dataLength;
            prevFallbackStatusRef.current = fallbackStatus;
            setData(fallbackData || []);
            setFetchStatus('loaded');
            setError(null);
            return;
        }
        if (fallbackStatus === 'error' && (fallbackStatus !== prevFallbackStatusRef.current || fallbackError !== prevFallbackErrorRef.current)) {
            prevFallbackStatusRef.current = fallbackStatus;
            prevFallbackErrorRef.current = fallbackError;
            setFetchStatus('error');
            setError(fallbackError);
            return;
        }
        if (fallbackStatus === 'loading' && fallbackStatus !== prevFallbackStatusRef.current) {
            prevFallbackStatusRef.current = fallbackStatus;
            setFetchStatus('loading');
        }
    }, [
        useFallback,
        fallbackQueryResult.data,
        fallbackQueryResult.fetchStatus,
        fallbackQueryResult.error
    ]);
    return {
        data,
        fetchStatus,
        error
    };
};
_s(useDataProxyRecents, "V1xR7LojrMaMfqud3ubS3Psxvc4=", false, function() {
    return [
        cozy_dataproxy_lib__WEBPACK_IMPORTED_MODULE_1__.useDataProxy,
        cozy_client__WEBPACK_IMPORTED_MODULE_4__.useQuery
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
__webpack_require__.h = () => ("24199c1709a6e71e")
})();

}
);
//# sourceMappingURL=main.c3a90a8b87154916.hot-update.js.map