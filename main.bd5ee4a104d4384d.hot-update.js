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
    const [fallbackData, setFallbackData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const [fallbackStatus, setFallbackStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('loading');
    const [fallbackError, setFallbackError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const dataProxy = (0,cozy_dataproxy_lib__WEBPACK_IMPORTED_MODULE_1__.useDataProxy)();
    const client = (0,cozy_client__WEBPACK_IMPORTED_MODULE_4__.useClient)();
    const fallbackQueryExecutedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const recentQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_queries__WEBPACK_IMPORTED_MODULE_3__.buildRecentQuery)(), []);
    // Use useMemo to create stable references for comparison
    const fallbackDataLength = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>Array.isArray(fallbackData) ? fallbackData.length : 0, [
        fallbackData
    ]);
    const fallbackDataId = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        var _fallbackData_;
        if (!Array.isArray(fallbackData) || fallbackData.length === 0) return null;
        // Use first item's _id as a stable identifier for the dataset
        return ((_fallbackData_ = fallbackData[0]) === null || _fallbackData_ === void 0 ? void 0 : _fallbackData_._id) || null;
    }, [
        fallbackData
    ]);
    // Track previous values to avoid unnecessary updates
    const prevDataRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const prevStatusRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const prevErrorRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
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
                _lib_logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn('Error fetching recents from dataproxy', err);
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
    // Execute fallback query only once when useFallback becomes true
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!useFallback || !client || fallbackQueryExecutedRef.current) {
            return;
        }
        fallbackQueryExecutedRef.current = true;
        setFallbackStatus('loading');
        setFallbackError(null);
        const executeFallbackQuery = async ()=>{
            try {
                const result = await client.query(recentQuery.definition(), recentQuery.options);
                setFallbackData(result.data || []);
                setFallbackStatus('loaded');
            } catch (err) {
                _lib_logger__WEBPACK_IMPORTED_MODULE_2__["default"].warn('Error fetching recents from fallback query', err);
                setFallbackError(err);
                setFallbackStatus('error');
            }
        };
        executeFallbackQuery();
    }, [
        useFallback,
        client,
        recentQuery
    ]);
    // Use fallback query result if dataProxy failed or is not available
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!useFallback) {
            return;
        }
        // Check if status changed
        const statusChanged = fallbackStatus !== prevStatusRef.current;
        if (fallbackStatus === 'loaded' && fallbackData) {
            // Check if data actually changed by comparing length and first item ID
            const dataChanged = !prevDataRef.current || prevDataRef.current.length !== fallbackDataLength || prevDataRef.current.id !== fallbackDataId;
            if (statusChanged || dataChanged) {
                prevDataRef.current = {
                    length: fallbackDataLength,
                    id: fallbackDataId
                };
                prevStatusRef.current = fallbackStatus;
                setData(fallbackData);
                setFetchStatus('loaded');
                setError(null);
            }
            return;
        }
        if (fallbackStatus === 'error') {
            // Check if error actually changed
            const errorChanged = fallbackError !== prevErrorRef.current || statusChanged;
            if (errorChanged) {
                prevErrorRef.current = fallbackError;
                prevStatusRef.current = fallbackStatus;
                setFetchStatus('error');
                setError(fallbackError);
            }
            return;
        }
        if (fallbackStatus === 'loading' && statusChanged) {
            prevStatusRef.current = fallbackStatus;
            setFetchStatus('loading');
        }
    }, [
        useFallback,
        fallbackStatus,
        fallbackData,
        fallbackError,
        fallbackDataLength,
        fallbackDataId
    ]);
    return {
        data,
        fetchStatus,
        error
    };
};
_s(useDataProxyRecents, "UgBNW6knCO+Kz8fFx5JM/TNLmTg=", false, function() {
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
__webpack_require__.h = () => ("c53c695dfdb6cbf5")
})();

}
);
//# sourceMappingURL=main.bd5ee4a104d4384d.hot-update.js.map