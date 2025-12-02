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
    const recentQuery = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>(0,_queries__WEBPACK_IMPORTED_MODULE_3__.buildRecentQuery)(), []);
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
        // Skip if fallback is not needed, client is not available, or query already executed
        if (!useFallback || !client || fallbackData !== null || fallbackError !== null) {
            return;
        }
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
        recentQuery,
        fallbackData,
        fallbackError
    ]);
    // Use fallback query result if dataProxy failed or is not available
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!useFallback) {
            return;
        }
        if (fallbackStatus === 'loaded' && fallbackData) {
            setData(fallbackData);
            setFetchStatus('loaded');
            setError(null);
            return;
        }
        if (fallbackStatus === 'error') {
            setFetchStatus('error');
            setError(fallbackError);
            return;
        }
        if (fallbackStatus === 'loading') {
            setFetchStatus('loading');
        }
    }, [
        useFallback,
        fallbackStatus,
        fallbackData,
        fallbackError
    ]);
    return {
        data,
        fetchStatus,
        error
    };
};
_s(useDataProxyRecents, "wHItF4MsjsAx+UQuxOjUX7IlcCc=", false, function() {
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
__webpack_require__.h = () => ("fbc8e0d92d48d8b5")
})();

}
);
//# sourceMappingURL=main.f24f851503f37b44.hot-update.js.map