"use strict";
self["webpackHotUpdatecozy_drive"]("cozy", {
"./node_modules/cozy-dataproxy-lib/dist/dataproxy/DataProxyProvider.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useDataProxy = exports.DataProxyProvider = exports.DataProxyContext = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var Comlink = _interopRequireWildcard(__webpack_require__("./node_modules/comlink/dist/esm/comlink.mjs"));

var _react = _interopRequireWildcard(__webpack_require__("./node_modules/react/index.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyDeviceHelper = __webpack_require__("./node_modules/cozy-device-helper/dist/index.js");

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

var _cozyIntent = __webpack_require__("./node_modules/cozy-intent/dist/index.js");

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var log = (0, _cozyMinilog.default)('👷‍♂️ [DataProxyProvider]');

var noop = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            throw new Error('[DataProxy] not ready');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function noop() {
    return _ref.apply(this, arguments);
  };
}();

var defaultValue = Object.freeze({
  dataProxyServicesAvailable: false,
  ready: false,
  search: noop,
  recents: noop,
  requestLink: noop
});

var DataProxyContext = /*#__PURE__*/_react.default.createContext(defaultValue);

exports.DataProxyContext = DataProxyContext;

var useDataProxy = function useDataProxy() {
  var context = (0, _react.useContext)(DataProxyContext);

  if (!context) {
    throw new Error('useDataProxy must be used within a DataProxyProvider');
  }

  return context;
}; // See https://legacy.reactjs.org/docs/error-boundaries.html


exports.useDataProxy = useDataProxy;

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ErrorBoundary);
    _this = _super.call(this, props);
    _this.state = {
      hasError: false
    };
    return _this;
  }

  (0, _createClass2.default)(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(e) {
      log.error('[DataProxy iframe errors]', e);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props$children;

      if (this.state.hasError) {
        return null;
      }

      return (_this$props$children = this.props.children) !== null && _this$props$children !== void 0 ? _this$props$children : null;
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      return {
        hasError: true
      };
    }
  }]);
  return ErrorBoundary;
}(_react.default.Component);

var DEFAULT_OPTS = {};

var DataProxyProvider = /*#__PURE__*/_react.default.memo(function (_ref2) {
  var children = _ref2.children,
      _ref2$options = _ref2.options,
      options = _ref2$options === void 0 ? DEFAULT_OPTS : _ref2$options;
  var client = (0, _cozyClient.useClient)();
  var webviewIntent = (0, _cozyIntent.useWebviewIntent)();

  var _useState = (0, _react.useState)(),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      iframeUrl = _useState2[0],
      setIframeUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      dataProxyCom = _useState4[0],
      setDataProxyCom = _useState4[1];

  var _useState5 = (0, _react.useState)(),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      dataProxy = _useState6[0],
      setDataProxy = _useState6[1];

  var _useState7 = (0, _react.useState)(undefined),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      dataProxyServicesAvailable = _useState8[0],
      setDataProxyServicesAvailable = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      iframeVersion = _useState10[0],
      setIframeVersion = _useState10[1];

  (0, _react.useEffect)(function () {
    if (!client) {
      return;
    }

    var initIframe = /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var _result$data, _result$data$attribut, _result$data$attribut2, _result$data$attribut3, _result$data$attribut4, result;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                log.log('Initializing DataProxy intent');
                _context2.next = 4;
                return client.stackClient.fetchJSON('POST', '/intents', {
                  data: {
                    type: 'io.cozy.intents',
                    attributes: {
                      action: 'OPEN',
                      type: 'io.cozy.dataproxy',
                      permissions: ['GET']
                    }
                  }
                });

              case 4:
                result = _context2.sent;

                if ((_result$data = result.data) !== null && _result$data !== void 0 && (_result$data$attribut = _result$data.attributes) !== null && _result$data$attribut !== void 0 && (_result$data$attribut2 = _result$data$attribut.services) !== null && _result$data$attribut2 !== void 0 && (_result$data$attribut3 = _result$data$attribut2[0]) !== null && _result$data$attribut3 !== void 0 && _result$data$attribut3.href) {
                  _context2.next = 9;
                  break;
                }

                log.log('No dataproxy intent available, dataproxy features will be disabled');
                setDataProxyServicesAvailable(false);
                return _context2.abrupt("return");

              case 9:
                setIframeUrl((_result$data$attribut4 = result.data.attributes.services[0]) === null || _result$data$attribut4 === void 0 ? void 0 : _result$data$attribut4.href);
                setDataProxyServicesAvailable(true);
                _context2.next = 17;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](0);
                setDataProxyServicesAvailable(false);
                log.error('Error while initializing Search intent, dataproxy features will be disabled', _context2.t0);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 13]]);
      }));

      return function initIframe() {
        return _ref3.apply(this, arguments);
      };
    }();

    var initFlagship = /*#__PURE__*/function () {
      var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _yield$webviewIntent$, isSearchAvailable;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (webviewIntent) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return");

              case 3:
                log.log('Initializing DataProxy intent in Flagship app');
                _context3.next = 6;
                return webviewIntent.call('isAvailable', 'search');

              case 6:
                _context3.t1 = _yield$webviewIntent$ = _context3.sent;
                _context3.t0 = _context3.t1 !== null;

                if (!_context3.t0) {
                  _context3.next = 10;
                  break;
                }

                _context3.t0 = _yield$webviewIntent$ !== void 0;

              case 10:
                if (!_context3.t0) {
                  _context3.next = 14;
                  break;
                }

                _context3.t2 = _yield$webviewIntent$;
                _context3.next = 15;
                break;

              case 14:
                _context3.t2 = false;

              case 15:
                isSearchAvailable = _context3.t2;

                if (isSearchAvailable) {
                  _context3.next = 20;
                  break;
                }

                log.log('Dataproxy features will be disabled due to feature not supported by Flagship app');
                setDataProxyServicesAvailable(false);
                return _context3.abrupt("return");

              case 20:
                setDataProxyCom(function () {
                  return {
                    search: function search(_search, searchOptions) {
                      return webviewIntent === null || webviewIntent === void 0 ? void 0 : webviewIntent.call('search', _search, _objectSpread(_objectSpread({}, options), searchOptions));
                    }
                  };
                });
                setDataProxyServicesAvailable(isSearchAvailable);
                _context3.next = 28;
                break;

              case 24:
                _context3.prev = 24;
                _context3.t3 = _context3["catch"](0);
                setDataProxyServicesAvailable(false);
                log.error("Error while initializing Flagship's Search, dataproxy features will be disabled", _context3.t3);

              case 28:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[0, 24]]);
      }));

      return function initFlagship() {
        return _ref4.apply(this, arguments);
      };
    }();

    if (!(0, _cozyFlags.default)('cozy.search.enabled')) {
      log.log('Dataproxy features will be disabled due to missing feature flags');
      setDataProxyServicesAvailable(false);
      return;
    }

    if ((0, _cozyDeviceHelper.isFlagshipApp)()) {
      initFlagship();
    } else {
      initIframe();
    }
  }, [client, webviewIntent, options]);
  var onIframeLoaded = (0, _react.useCallback)(function () {
    var ifr = document.getElementById('DataProxy');
    var remote = Comlink.wrap(Comlink.windowEndpoint(ifr.contentWindow));
    setDataProxyCom(function () {
      return remote;
    });
  }, [setDataProxyCom]);
  var onReceiveMessage = (0, _react.useCallback)(function (event) {
    try {
      if (typeof event.origin !== 'string') return;
      if (!event.origin.includes('dataproxy')) return;
      var d = event === null || event === void 0 ? void 0 : event.data;

      if (d && typeof d === 'object' && d.type === 'DATAPROXYMESSAGE' && d.payload === 'READY') {
        onIframeLoaded();
      }
    } catch (e) {
      log.error('[DataProxy] onReceiveMessage error', e);
    }
  }, [onIframeLoaded]);
  (0, _react.useEffect)(function () {
    window.addEventListener('message', onReceiveMessage);
    return function () {
      window.removeEventListener('message', onReceiveMessage);
    };
  }, [onReceiveMessage]);
  (0, _react.useEffect)(function () {
    var doAsync = /*#__PURE__*/function () {
      var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var search, recents, requestLink, newDataProxy;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // Make a global search
                search = /*#__PURE__*/function () {
                  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_search2, searchOptions) {
                    var result;
                    return _regenerator.default.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            log.log('Send search query to DataProxy: ', _search2, searchOptions);
                            _context4.next = 3;
                            return dataProxyCom.search(_search2, _objectSpread(_objectSpread({}, options), searchOptions));

                          case 3:
                            result = _context4.sent;
                            return _context4.abrupt("return", result);

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function search(_x, _x2) {
                    return _ref6.apply(this, arguments);
                  };
                }();

                recents = function recents() {
                  log.log('Send recents query to DataProxy: ');
                  return dataProxyCom.recents();
                }; // Request through cozy-client


                requestLink = /*#__PURE__*/function () {
                  var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(operation, options) {
                    var _dataProxyCom$request;

                    return _regenerator.default.wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            log.log('Send request to DataProxy : ', operation);

                            if (options !== null && options !== void 0 && options.fetchPolicy) {
                              // Functions cannot be serialized and thus passed to the iframe
                              delete options.fetchPolicy;
                            }

                            return _context5.abrupt("return", (_dataProxyCom$request = dataProxyCom.requestLink) === null || _dataProxyCom$request === void 0 ? void 0 : _dataProxyCom$request.call(dataProxyCom, operation, options));

                          case 3:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function requestLink(_x3, _x4) {
                    return _ref7.apply(this, arguments);
                  };
                }();

                newDataProxy = {
                  dataProxyServicesAvailable: dataProxyServicesAvailable,
                  ready: Boolean(dataProxyCom),
                  search: search,
                  recents: recents,
                  requestLink: requestLink
                };
                client.links.forEach(function (link) {
                  if (link.registerDataProxy) {
                    // This is required as the DataProxy is not ready when the DataProxyLink is created
                    link.registerDataProxy(newDataProxy);
                  }
                });
                setDataProxy(newDataProxy);

              case 6:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function doAsync() {
        return _ref5.apply(this, arguments);
      };
    }();

    if (dataProxyCom && client !== null && client !== void 0 && client.links) {
      doAsync();
    }
  }, [dataProxyCom, client, dataProxyServicesAvailable, options]);
  var reloadIframe = (0, _react.useCallback)(function () {
    setIframeVersion(function (v) {
      return v + 1;
    });
    log.log('Reload iframe with new version ', iframeVersion);
  }, []);
  var iframeKey = "".concat(iframeUrl, "::").concat(iframeVersion); // Useful to force iframe reload when key change

  return /*#__PURE__*/_react.default.createElement(DataProxyContext.Provider, {
    value: dataProxy || defaultValue
  }, children !== null && children !== void 0 ? children : null, /*#__PURE__*/_react.default.createElement(ErrorBoundary, null, iframeUrl ? /*#__PURE__*/_react.default.createElement("iframe", {
    key: iframeKey,
    id: "DataProxy",
    src: iframeUrl,
    width: 0,
    height: 0,
    style: {
      width: 0,
      height: 0
    },
    sandbox: "allow-same-origin allow-scripts",
    onError: function onError() {
      log.error('[DataProxy] iframe load error');
      reloadIframe();
    }
  }) : null));
});

exports.DataProxyProvider = DataProxyProvider;
DataProxyProvider.displayName = 'DataProxyProvider';

}),
"./node_modules/cozy-dataproxy-lib/dist/search/SearchEngine.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SearchEngine = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

var _cozyRealtime = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-realtime/dist/index.browser.js"));

var _consts = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/consts.js");

var _client = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/client.js");

var _normalizeSearchResult = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/normalizeSearchResult.js");

var _utils = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/utils.js");

var _indexDocs = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/indexDocs.js");

var _queries = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/queries/index.js");

var _storage = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/storage.js");

var _types = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/types.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var log = (0, _cozyMinilog.default)('🗂️ [Indexing]');

var SearchEngine = /*#__PURE__*/function () {
  function SearchEngine(client, storage, performanceApi) {
    var _this = this;

    var engineOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    (0, _classCallCheck2.default)(this, SearchEngine);
    (0, _defineProperty2.default)(this, "client", void 0);
    (0, _defineProperty2.default)(this, "searchIndexes", void 0);
    (0, _defineProperty2.default)(this, "debouncedReplication", void 0);
    (0, _defineProperty2.default)(this, "isLocalSearch", void 0);
    (0, _defineProperty2.default)(this, "storage", void 0);
    (0, _defineProperty2.default)(this, "performanceApi", void 0);
    (0, _defineProperty2.default)(this, "engineOptions", void 0);
    (0, _defineProperty2.default)(this, "sharedDrivesRealtimes", void 0);
    this.client = client;
    this.searchIndexes = {};
    this.storage = storage;
    this.performanceApi = performanceApi !== null && performanceApi !== void 0 ? performanceApi : _cozyClient.defaultPerformanceApi;
    this.engineOptions = _objectSpread({
      shouldInit: true
    }, engineOptions);
    this.sharedDrivesRealtimes = {};
    this.isLocalSearch = !!(0, _client.getPouchLink)(this.client);
    log.info('Use local data on trusted device: ', this.isLocalSearch);

    this.debouncedReplication = function () {
      var pouchLink = (0, _client.getPouchLink)(client);

      if (pouchLink) {
        pouchLink.startReplicationWithDebounce();
      }
    };

    if (this.client.isLogged) {
      this.afterLogin();
    } else {
      this.client.on('login', function () {
        _this.afterLogin();
      });
    }
  }

  (0, _createClass2.default)(SearchEngine, [{
    key: "afterLogin",
    value: function afterLogin() {
      if (this.engineOptions.shouldInit) {
        void this.init();
      } // Use replication events to have up-to-date search indexes, based on local data


      this.handleReplicationEvents();
    }
  }, {
    key: "indexDocumentsAtInit",
    value: function () {
      var _indexDocumentsAtInit = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var markName, lastExportDate, doctypes, _iterator, _step, doctype, searchIndex;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (this.client) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                log.info('Initialize indexes...');
                markName = this.performanceApi.mark('indexDocuments');
                _context.next = 6;
                return (0, _storage.getExportDate)(this.storage);

              case 6:
                lastExportDate = _context.sent;

                if (!(!lastExportDate || !this.isLocalSearch)) {
                  _context.next = 30;
                  break;
                }

                // No persisted index: let's create them
                doctypes = _consts.SEARCHABLE_DOCTYPES.concat(this.getSharedDrivesDoctypes());
                _iterator = _createForOfIteratorHelper(doctypes);
                _context.prev = 10;

                _iterator.s();

              case 12:
                if ((_step = _iterator.n()).done) {
                  _context.next = 20;
                  break;
                }

                doctype = _step.value;
                _context.next = 16;
                return this.indexDocsForSearch(doctype);

              case 16:
                searchIndex = _context.sent;

                if (searchIndex) {
                  this.searchIndexes[doctype] = searchIndex;
                }

              case 18:
                _context.next = 12;
                break;

              case 20:
                _context.next = 25;
                break;

              case 22:
                _context.prev = 22;
                _context.t0 = _context["catch"](10);

                _iterator.e(_context.t0);

              case 25:
                _context.prev = 25;

                _iterator.f();

                return _context.finish(25);

              case 28:
                _context.next = 32;
                break;

              case 30:
                _context.next = 32;
                return this.initSearchWithIndexImport();

              case 32:
                this.performanceApi.measure({
                  markName: markName,
                  category: 'Search'
                });

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 22, 25, 28]]);
      }));

      function indexDocumentsAtInit() {
        return _indexDocumentsAtInit.apply(this, arguments);
      }

      return indexDocumentsAtInit;
    }()
  }, {
    key: "handleReplicationEvents",
    value: function handleReplicationEvents() {
      var _this2 = this;

      if (!this.isLocalSearch) {
        // Nothing to do here, we do not want to replicate for non-local search
        return;
      }

      var startReplicationTime = 0,
          endReplicationTime = 0;
      this.client.on('pouchlink:doctypesync:end', /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(doctype) {
          var normalizedDoctype, searchIndex;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  normalizedDoctype = (0, _utils.normalizeDoctype)(doctype);

                  if (!(0, _types.isSearchedDoctype)(normalizedDoctype)) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 4;
                  return _this2.indexDocsForSearch(doctype);

                case 4:
                  searchIndex = _context2.sent;

                  if (searchIndex) {
                    _this2.searchIndexes[doctype] = searchIndex;
                  }

                case 6:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      this.client.on('pouchlink:sync:start', function () {
        log.debug('Started pouch replication');
        startReplicationTime = performance.now();
      });
      this.client.on('pouchlink:sync:end', /*#__PURE__*/(0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                log.debug('Ended pouch replication');
                endReplicationTime = performance.now();

                if (startReplicationTime > 0) {
                  // Log only if the start replication event was correctly get
                  log.debug("Replication took ".concat((endReplicationTime - startReplicationTime).toFixed(2), " ms"));
                }

                if (!(Object.keys(_this2.searchIndexes).length < 1)) {
                  _context3.next = 7;
                  break;
                }

                log.info('No search index found: start indexing'); // This happens at first replication, so init the indexes

                _context3.next = 7;
                return _this2.indexDocumentsAtInit();

              case 7:
                // Save up-to-date index on storage to be later imported
                void (0, _storage.exportSearchIndexes)(_this2.storage, _this2.searchIndexes);

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      })));
    }
  }, {
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var realtimePlugin, pouchLink, sharedDrivesDoctypes, _iterator2, _step2, sharedDrivesDoctype, driveId;

        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // Ensure login is done before plugin register
                realtimePlugin = _cozyRealtime.RealtimePlugin;

                if (!this.client.plugins[realtimePlugin.pluginName]) {
                  this.client.registerPlugin(realtimePlugin, {});
                } // Realtime subscription


                this.handleUpdatedOrCreatedDoc = this.handleUpdatedOrCreatedDoc.bind(this);
                this.handleDeletedDoc = this.handleDeletedDoc.bind(this);
                this.subscribeDoctype(this.client, _consts.FILES_DOCTYPE);
                this.subscribeDoctype(this.client, _consts.CONTACTS_DOCTYPE);
                this.subscribeDoctype(this.client, _consts.APPS_DOCTYPE);
                pouchLink = (0, _client.getPouchLink)(this.client);

                if (pouchLink) {
                  sharedDrivesDoctypes = pouchLink.getSharedDriveDoctypes();
                  _iterator2 = _createForOfIteratorHelper(sharedDrivesDoctypes);

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      sharedDrivesDoctype = _step2.value;
                      driveId = sharedDrivesDoctype.split('-').pop();

                      if (driveId) {
                        this.addSharedDriveRealtime(driveId);
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                if (this.isLocalSearch) {
                  this.debouncedReplication();
                } // The document indexing should be performed once everything is setup


                _context4.next = 12;
                return this.indexDocumentsAtInit();

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "addSharedDrive",
    value: function addSharedDrive(driveId) {
      this.addSharedDriveRealtime(driveId);

      if (this.isLocalSearch) {
        this.debouncedReplication();
      }
    }
  }, {
    key: "removeSharedDrive",
    value: function removeSharedDrive(driveId) {
      var _this$sharedDrivesRea;

      (_this$sharedDrivesRea = this.sharedDrivesRealtimes[driveId]) === null || _this$sharedDrivesRea === void 0 ? void 0 : _this$sharedDrivesRea.stop();
      delete this.sharedDrivesRealtimes[driveId];

      if (this.searchIndexes && this.searchIndexes["".concat(_consts.SHARED_DRIVE_FILES_DOCTYPE, "-").concat(driveId)]) {
        delete this.searchIndexes["".concat(_consts.SHARED_DRIVE_FILES_DOCTYPE, "-").concat(driveId)];
      }

      void (0, _storage.exportSearchIndexes)(this.storage, this.searchIndexes);
    }
  }, {
    key: "addSharedDriveRealtime",
    value: function addSharedDriveRealtime(sharedDriveId) {
      var realtime = new _cozyRealtime.default({
        client: this.client,
        sharedDriveId: sharedDriveId
      });
      this.subscribeDoctype(this.client, _consts.FILES_DOCTYPE, realtime, sharedDriveId);
      this.sharedDrivesRealtimes[sharedDriveId] = realtime;
    }
  }, {
    key: "subscribeDoctype",
    value: function subscribeDoctype(client, doctype, realtime, sharedDriveId) {
      var _this3 = this;

      /* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/unbound-method */
      var realtimeInstance = realtime ? realtime : client.plugins.realtime;
      realtimeInstance.subscribe('created', doctype, function (doc) {
        return _this3.handleUpdatedOrCreatedDoc(doc, sharedDriveId);
      });
      realtimeInstance.subscribe('updated', doctype, function (doc) {
        return _this3.handleUpdatedOrCreatedDoc(doc, sharedDriveId);
      });
      realtimeInstance.subscribe('deleted', doctype, function (doc) {
        return _this3.handleDeletedDoc(doc, sharedDriveId);
      });
      /* eslint-enable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/unbound-method */
    }
  }, {
    key: "handleUpdatedOrCreatedDoc",
    value: function handleUpdatedOrCreatedDoc(doc, sharedDriveId) {
      var _this$searchIndexes;

      var doctype = sharedDriveId ? "".concat(_consts.SHARED_DRIVE_FILES_DOCTYPE, "-").concat(sharedDriveId) : doc._type;

      if (!doctype || !(0, _types.isSearchedDoctype)((0, _utils.normalizeDoctype)(doctype)) || (0, _types.isTrashedSharedDrive)(doc, sharedDriveId)) {
        return;
      }

      var searchIndex = (_this$searchIndexes = this.searchIndexes) === null || _this$searchIndexes === void 0 ? void 0 : _this$searchIndexes[doctype];

      if (!searchIndex) {
        // No index yet: it will be done by querying the local db after first replication
        return;
      }

      log.debug('[REALTIME] Update doc from index after update : ', doc._id);

      if (this.isLocalSearch) {
        this.debouncedReplication();
      }

      (0, _indexDocs.indexSingleDoc)(searchIndex.index, doc);
    }
  }, {
    key: "handleDeletedDoc",
    value: function handleDeletedDoc(doc, sharedDriveId) {
      var _this$searchIndexes2;

      var doctype = sharedDriveId ? "".concat(_consts.SHARED_DRIVE_FILES_DOCTYPE, "-").concat(sharedDriveId) : doc._type;

      if (!doctype || !(0, _types.isSearchedDoctype)((0, _utils.normalizeDoctype)(doctype)) || (0, _types.isInSharedDrivesDir)(doc)) {
        return;
      }

      var searchIndex = (_this$searchIndexes2 = this.searchIndexes) === null || _this$searchIndexes2 === void 0 ? void 0 : _this$searchIndexes2[doctype];

      if (!searchIndex) {
        // No index yet: it will be done by querying the local db after first replication
        return;
      }

      log.debug('[REALTIME] Remove doc from index after update : ', doc._id);
      this.searchIndexes[doctype].index.remove(doc._id);

      if (this.isLocalSearch) {
        this.debouncedReplication();
      }
    }
    /**
     * Initialize indexes by:
     *  - importing persisted indexes
     *  - Requesting remote changes if the indexes are stale
     *  - Query the local database to load the redux store
     */

  }, {
    key: "initSearchWithIndexImport",
    value: function () {
      var _initSearchWithIndexImport = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var startImport, endImport, _iterator3, _step3, doctype, searchIndex, newSearchIndex;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                startImport = performance.now();
                _context5.next = 3;
                return (0, _storage.importSearchIndexes)(this.storage);

              case 3:
                this.searchIndexes = _context5.sent;
                endImport = performance.now();

                if ((0, _utils.isDebug)()) {
                  log.debug("Index import took ".concat((endImport - startImport).toFixed(2), " ms"));
                }

                _iterator3 = _createForOfIteratorHelper(_consts.SEARCHABLE_DOCTYPES);
                _context5.prev = 7;

                _iterator3.s();

              case 9:
                if ((_step3 = _iterator3.n()).done) {
                  _context5.next = 22;
                  break;
                }

                doctype = _step3.value;
                searchIndex = this.searchIndexes[doctype];

                if (searchIndex) {
                  _context5.next = 17;
                  break;
                }

                _context5.next = 15;
                return this.indexDocsForSearch(doctype);

              case 15:
                newSearchIndex = _context5.sent;

                if (newSearchIndex) {
                  this.searchIndexes[doctype] = newSearchIndex;
                }

              case 17:
                _context5.next = 19;
                return (0, _indexDocs.indexOnChanges)(this, this.searchIndexes[doctype], doctype);

              case 19:
                // The doctype needs some extra treatment to initialize everything correctly
                void (0, _indexDocs.initDoctypeAfterIndexImport)(this.client, doctype);

              case 20:
                _context5.next = 9;
                break;

              case 22:
                _context5.next = 27;
                break;

              case 24:
                _context5.prev = 24;
                _context5.t0 = _context5["catch"](7);

                _iterator3.e(_context5.t0);

              case 27:
                _context5.prev = 27;

                _iterator3.f();

                return _context5.finish(27);

              case 30:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[7, 24, 27, 30]]);
      }));

      function initSearchWithIndexImport() {
        return _initSearchWithIndexImport.apply(this, arguments);
      }

      return initSearchWithIndexImport;
    }()
  }, {
    key: "buildSearchIndex",
    value: function buildSearchIndex(doctype, docs) {
      var startTimeIndex = performance.now();
      var flexsearchIndex = (0, _indexDocs.initSearchIndex)(doctype);
      (0, _indexDocs.indexAllDocs)(flexsearchIndex, docs);
      var endTimeIndex = performance.now();
      log.debug("Create ".concat(doctype, " index took ").concat((endTimeIndex - startTimeIndex).toFixed(2), " ms"));
      return flexsearchIndex;
    }
  }, {
    key: "getLocalLastSeq",
    value: function () {
      var _getLocalLastSeq = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(doctype) {
        var pouchLink, info;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!this.isLocalSearch) {
                  _context6.next = 11;
                  break;
                }

                pouchLink = (0, _client.getPouchLink)(this.client);

                if (!pouchLink) {
                  _context6.next = 8;
                  break;
                }

                _context6.next = 5;
                return pouchLink.getDbInfo(doctype);

              case 5:
                _context6.t0 = _context6.sent;
                _context6.next = 9;
                break;

              case 8:
                _context6.t0 = null;

              case 9:
                info = _context6.t0;
                return _context6.abrupt("return", (info === null || info === void 0 ? void 0 : info.update_seq) || 0);

              case 11:
                return _context6.abrupt("return", -1);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getLocalLastSeq(_x2) {
        return _getLocalLastSeq.apply(this, arguments);
      }

      return getLocalLastSeq;
    }()
  }, {
    key: "initialIndexation",
    value: function () {
      var _initialIndexation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(doctype) {
        var docs, index, lastSeq;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return (0, _queries.queryLocalOrRemoteDocs)(this.client, doctype, {
                  isLocalSearch: this.isLocalSearch
                });

              case 2:
                docs = _context7.sent;

                if (!(docs.length < 1)) {
                  _context7.next = 5;
                  break;
                }

                return _context7.abrupt("return", null);

              case 5:
                index = this.buildSearchIndex(doctype, docs);
                _context7.next = 8;
                return this.getLocalLastSeq(doctype);

              case 8:
                lastSeq = _context7.sent;
                this.searchIndexes[doctype] = {
                  index: index,
                  lastSeq: lastSeq,
                  lastUpdated: new Date().toISOString()
                };
                return _context7.abrupt("return", this.searchIndexes[doctype]);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function initialIndexation(_x3) {
        return _initialIndexation.apply(this, arguments);
      }

      return initialIndexation;
    }()
  }, {
    key: "incrementalIndexation",
    value: function () {
      var _incrementalIndexation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(doctype, searchIndex) {
        var updatedSearchIndex;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return (0, _indexDocs.indexOnChanges)(this, searchIndex, doctype);

              case 2:
                updatedSearchIndex = _context8.sent;
                return _context8.abrupt("return", updatedSearchIndex);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function incrementalIndexation(_x4, _x5) {
        return _incrementalIndexation.apply(this, arguments);
      }

      return incrementalIndexation;
    }()
  }, {
    key: "indexDocsForSearch",
    value: function () {
      var _indexDocsForSearch = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(doctype) {
        var markeNameIndex, searchIndex, startIndexing, index, endIndexing;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                markeNameIndex = this.performanceApi.mark("indexDocsForSearch ".concat(doctype));
                searchIndex = this.searchIndexes[doctype];
                startIndexing = performance.now();

                if (searchIndex) {
                  _context9.next = 12;
                  break;
                }

                _context9.next = 6;
                return this.initialIndexation(doctype);

              case 6:
                index = _context9.sent;

                if (index) {
                  _context9.next = 10;
                  break;
                }

                this.performanceApi.measure({
                  markName: markeNameIndex,
                  measureName: "".concat(markeNameIndex, " initial indexation"),
                  category: 'Search'
                });
                return _context9.abrupt("return", null);

              case 10:
                _context9.next = 15;
                break;

              case 12:
                _context9.next = 14;
                return this.incrementalIndexation(doctype, searchIndex);

              case 14:
                index = _context9.sent;

              case 15:
                endIndexing = performance.now();

                if ((0, _utils.isDebug)()) {
                  log.debug("Indexing ".concat(doctype, " took ").concat((endIndexing - startIndexing).toFixed(2), " ms"));
                }

                this.performanceApi.measure({
                  markName: markeNameIndex,
                  measureName: "".concat(markeNameIndex, " incremental indexation"),
                  category: 'Search'
                });
                return _context9.abrupt("return", index);

              case 19:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function indexDocsForSearch(_x6) {
        return _indexDocsForSearch.apply(this, arguments);
      }

      return indexDocsForSearch;
    }()
  }, {
    key: "search",
    value: function () {
      var _search = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(query, options) {
        var pouchLink, currentDoctypes, optionsDoctypes, sharedDrivesDoctypes, markeNameIndex, allResults, dedupResults, enrichedResults, sortedResults, results, normResults, _iterator4, _step4, res, normalizedRes, output;

        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(!this.searchIndexes || Object.keys(this.searchIndexes).length < 1)) {
                  _context10.next = 3;
                  break;
                }

                // The indexing might be running but not finished yet
                log.warn('[SEARCH] No search index available');
                return _context10.abrupt("return", null);

              case 3:
                pouchLink = (0, _client.getPouchLink)(this.client);
                currentDoctypes = (pouchLink === null || pouchLink === void 0 ? void 0 : pouchLink.doctypes) || [];
                this.cleanIndexes(currentDoctypes);
                optionsDoctypes = (options === null || options === void 0 ? void 0 : options.doctypes) || [];

                if (optionsDoctypes.includes(_consts.FILES_DOCTYPE) || optionsDoctypes.length === 0) {
                  sharedDrivesDoctypes = Object.keys(this.searchIndexes).filter(function (doctype) {
                    return doctype.includes(_consts.SHARED_DRIVE_FILES_DOCTYPE);
                  });
                  optionsDoctypes.push.apply(optionsDoctypes, (0, _toConsumableArray2.default)(sharedDrivesDoctypes));
                }

                markeNameIndex = this.performanceApi.mark('search');
                allResults = this.searchOnIndexes(query, optionsDoctypes);
                dedupResults = this.deduplicateAndFlatten(allResults);
                _context10.next = 13;
                return (0, _normalizeSearchResult.enrichResultsWithDocs)(this.client, dedupResults);

              case 13:
                enrichedResults = _context10.sent;
                sortedResults = this.sortSearchResults(enrichedResults, optionsDoctypes);
                results = this.limitSearchResults(sortedResults);
                normResults = [];
                _iterator4 = _createForOfIteratorHelper(results);

                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    res = _step4.value;
                    normalizedRes = (0, _normalizeSearchResult.normalizeSearchResult)(this.client, res, query);
                    normResults.push(normalizedRes);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }

                output = normResults.filter(function (res) {
                  return res.title;
                });
                this.performanceApi.measure({
                  markName: markeNameIndex,
                  category: 'Search'
                });
                return _context10.abrupt("return", output);

              case 22:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function search(_x7, _x8) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "searchOnIndexes",
    value: function searchOnIndexes(query, searchOnDoctypes) {
      var _this4 = this;

      var searchResults = [];

      var _loop = function _loop(key) {
        var doctype = key; // XXX - Should not be necessary

        var isSearchOnDoctypesDefined = searchOnDoctypes.length > 0;

        if (searchOnDoctypes && isSearchOnDoctypesDefined && !searchOnDoctypes.includes(doctype)) {
          // Search only on specified doctypes
          return "continue";
        }

        var index = _this4.searchIndexes[doctype];

        if (!index) {
          log.warn('[SEARCH] No search index available for ', doctype);
          return "continue";
        } // XXX - The limit is specified twice because of a flexsearch inconstency
        // that does not enforce the limit if only given in second argument, and
        // does not return the correct type is only given in third options
        //
        // XXX - The given limit here is arbitrary because flexsearch enforce it on matching
        // field, which can cause issue related to the sort: if we search on name+path for files,
        // and limit on 100, the 101th result on name will be skipped, but might appear on path,
        // which will make it appear in the search results, but in incorrect order.
        //
        // Search result example:
        // [
        //   {
        //       "field": "displayName",
        //       "result": [
        //           "604627c6bafee013ec5f27f7f72029f6"
        //       ]
        //   },
        //   {
        //       "field": "fullname",
        //       "result": [
        //           "604627c6bafee013ec5f27f7f72029f6", "604627c6bafee013ec5f27f3f714568"
        //       ]
        //   }
        // ]


        var FLEXSEARCH_LIMIT = 10000;
        var indexResults = index.index.search(query, FLEXSEARCH_LIMIT, {
          limit: FLEXSEARCH_LIMIT,
          enrich: false
        });
        var newResults = indexResults.map(function (res) {
          return _objectSpread(_objectSpread({}, res), {}, {
            doctype: doctype
          });
        });
        searchResults = searchResults.concat(newResults);
      };

      for (var key in this.searchIndexes) {
        var _ret = _loop(key);

        if (_ret === "continue") continue;
      }

      return searchResults;
    }
  }, {
    key: "deduplicateAndFlatten",
    value: function deduplicateAndFlatten(searchResults) {
      var combinedResults = searchResults.flatMap(function (item) {
        return item.result.map(function (id) {
          return {
            id: id.toString(),
            // Because of flexsearch Id typing
            doctype: item.doctype,
            field: item.field
          };
        });
      });
      var resultMap = new Map();
      combinedResults.forEach(function (_ref3) {
        var id = _ref3.id,
            field = _ref3.field,
            doctype = _ref3.doctype;

        if (resultMap.has(id)) {
          var _resultMap$get;

          (_resultMap$get = resultMap.get(id)) === null || _resultMap$get === void 0 ? void 0 : _resultMap$get.fields.push(field);
        } else {
          resultMap.set(id, {
            id: id,
            fields: [field],
            doctype: doctype
          });
        }
      });
      return (0, _toConsumableArray2.default)(resultMap.values());
    }
  }, {
    key: "compareStrings",
    value: function compareStrings(str1, str2) {
      if (!str1 && !str2) {
        return 0;
      } else if (!str1) {
        return 1;
      } else if (!str2) {
        return -1;
      }

      return str1.localeCompare(str2, undefined, {
        numeric: true
      });
    }
  }, {
    key: "sortSearchResults",
    value: function sortSearchResults(searchResults, doctypesOrder) {
      var _this5 = this;

      return searchResults.sort(function (a, b) {
        var doctypeComparison;

        if (doctypesOrder && doctypesOrder.length > 0) {
          doctypeComparison = doctypesOrder.findIndex(function (dt) {
            return dt === a.doctype;
          }) - doctypesOrder.findIndex(function (dt) {
            return dt === b.doctype;
          });
        } else {
          doctypeComparison = _consts.DOCTYPE_DEFAULT_ORDER[a.doctype] - _consts.DOCTYPE_DEFAULT_ORDER[b.doctype];
        }

        if (doctypeComparison !== 0) return doctypeComparison;

        if (a.doctype === _consts.APPS_DOCTYPE && (0, _types.isIOCozyApp)(a.doc) && (0, _types.isIOCozyApp)(b.doc)) {
          var _a$doc, _b$doc;

          return _this5.compareStrings((_a$doc = a.doc) === null || _a$doc === void 0 ? void 0 : _a$doc.slug, (_b$doc = b.doc) === null || _b$doc === void 0 ? void 0 : _b$doc.slug);
        } else if (a.doctype === _consts.CONTACTS_DOCTYPE && (0, _types.isIOCozyContact)(a.doc) && (0, _types.isIOCozyContact)(b.doc)) {
          var _a$doc2, _b$doc2;

          return _this5.compareStrings((_a$doc2 = a.doc) === null || _a$doc2 === void 0 ? void 0 : _a$doc2.displayName, (_b$doc2 = b.doc) === null || _b$doc2 === void 0 ? void 0 : _b$doc2.displayName);
        } else if (a.doctype === _consts.FILES_DOCTYPE && (0, _types.isIOCozyFile)(a.doc) && (0, _types.isIOCozyFile)(b.doc)) {
          return _this5.sortFiles(a, b);
        }

        return 0;
      });
    }
  }, {
    key: "sortFiles",
    value: function sortFiles(aRes, bRes) {
      var _aRes$doc, _bRes$doc;

      if (!(0, _types.isIOCozyFile)(aRes.doc) || !(0, _types.isIOCozyFile)(bRes.doc)) {
        return 0;
      }

      if (!aRes.fields.includes('name') || !bRes.fields.includes('name')) {
        // First, sort docs with a match on the name field
        return aRes.fields.includes('name') ? -1 : 1;
      }

      if (aRes.doc.type !== bRes.doc.type) {
        // Then, directories
        return aRes.doc.type === 'directory' ? -1 : 1;
      } // Then name


      return this.compareStrings((_aRes$doc = aRes.doc) === null || _aRes$doc === void 0 ? void 0 : _aRes$doc.name, (_bRes$doc = bRes.doc) === null || _bRes$doc === void 0 ? void 0 : _bRes$doc.name);
    }
  }, {
    key: "limitSearchResults",
    value: function limitSearchResults(searchResults) {
      var doctypesCount = {};
      return searchResults.filter(function (result) {
        var doctype = result.doctype;

        if (doctypesCount[doctype]) {
          doctypesCount[doctype] += 1;
        } else {
          doctypesCount[doctype] = 1;
        }

        return doctypesCount[doctype] <= _consts.LIMIT_DOCTYPE_SEARCH;
      });
    }
  }, {
    key: "getSharedDrivesDoctypes",
    value: function getSharedDrivesDoctypes() {
      var pouchLink = (0, _client.getPouchLink)(this.client);

      if (!pouchLink) {
        return [];
      }

      return pouchLink.doctypes.filter(function (dtype) {
        return dtype.includes(_consts.SHARED_DRIVE_FILES_DOCTYPE);
      });
    }
    /**
     * Clean up search indexes for doctypes that no longer exist
     * @param currentDoctypes - List of currently valid doctypes
     */

  }, {
    key: "cleanIndexes",
    value: function cleanIndexes(currentDoctypes) {
      var existingDoctypes = Object.keys(this.searchIndexes);
      var nonExistingDoctypes = existingDoctypes.filter(function (doctype) {
        return !currentDoctypes.includes(doctype);
      });

      var _iterator5 = _createForOfIteratorHelper(nonExistingDoctypes),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var doctype = _step5.value;
          delete this.searchIndexes[doctype];
          log.debug('[SEARCH] Delete index for non-existing doctype', doctype);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }]);
  return SearchEngine;
}();

exports.SearchEngine = SearchEngine;

}),
"./node_modules/cozy-dataproxy-lib/dist/search/consts.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.TYPE_FILE = exports.TYPE_DIRECTORY = exports.TRASH_DIR_ID = exports.SHARED_DRIVE_FILES_DOCTYPE = exports.SHARED_DRIVES_DIR_ID = exports.SEARCH_SCHEMA = exports.SEARCHABLE_DOCTYPES = exports.ROOT_DIR_ID = exports.MIN_DELAY_BEFORE_EXPORT = exports.LIMIT_DOCTYPE_SEARCH = exports.FILES_DOCTYPE = exports.DOCTYPE_DEFAULT_ORDER = exports.DATAPROXY_STORAGE_PREFIX = exports.CONTACTS_DOCTYPE = exports.APPS_DOCTYPE = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _DOCTYPE_DEFAULT_ORDE;

var SEARCHABLE_DOCTYPES = ['io.cozy.files', 'io.cozy.contacts', 'io.cozy.apps'];
exports.SEARCHABLE_DOCTYPES = SEARCHABLE_DOCTYPES;
// Attribute order matters to apply priority on matching results
var SEARCH_SCHEMA = {
  'io.cozy.files': ['name', 'path'],
  'io.cozy.contacts': ['displayName', 'fullname', 'email[]:address', 'address[]:formattedAddress', 'phone[]:number', 'cozy[]:url', 'birthday', 'company', 'jobTitle'],
  'io.cozy.apps': ['slug', 'name']
};
exports.SEARCH_SCHEMA = SEARCH_SCHEMA;
var FILES_DOCTYPE = 'io.cozy.files';
exports.FILES_DOCTYPE = FILES_DOCTYPE;
var CONTACTS_DOCTYPE = 'io.cozy.contacts';
exports.CONTACTS_DOCTYPE = CONTACTS_DOCTYPE;
var APPS_DOCTYPE = 'io.cozy.apps';
exports.APPS_DOCTYPE = APPS_DOCTYPE;
var SHARED_DRIVE_FILES_DOCTYPE = 'io.cozy.files.shareddrives';
exports.SHARED_DRIVE_FILES_DOCTYPE = SHARED_DRIVE_FILES_DOCTYPE;
var TYPE_DIRECTORY = 'directory';
exports.TYPE_DIRECTORY = TYPE_DIRECTORY;
var TYPE_FILE = 'file';
exports.TYPE_FILE = TYPE_FILE;
var ROOT_DIR_ID = 'io.cozy.files.root-dir';
exports.ROOT_DIR_ID = ROOT_DIR_ID;
var TRASH_DIR_ID = 'io.cozy.files.trash-dir';
exports.TRASH_DIR_ID = TRASH_DIR_ID;
var SHARED_DRIVES_DIR_ID = 'io.cozy.files.shared-drives-dir';
exports.SHARED_DRIVES_DIR_ID = SHARED_DRIVES_DIR_ID;
var LIMIT_DOCTYPE_SEARCH = 100;
exports.LIMIT_DOCTYPE_SEARCH = LIMIT_DOCTYPE_SEARCH;
var DOCTYPE_DEFAULT_ORDER = (_DOCTYPE_DEFAULT_ORDE = {}, (0, _defineProperty2.default)(_DOCTYPE_DEFAULT_ORDE, APPS_DOCTYPE, 0), (0, _defineProperty2.default)(_DOCTYPE_DEFAULT_ORDE, CONTACTS_DOCTYPE, 1), (0, _defineProperty2.default)(_DOCTYPE_DEFAULT_ORDE, FILES_DOCTYPE, 2), _DOCTYPE_DEFAULT_ORDE);
exports.DOCTYPE_DEFAULT_ORDER = DOCTYPE_DEFAULT_ORDER;
var DATAPROXY_STORAGE_PREFIX = '@dataproxy';
exports.DATAPROXY_STORAGE_PREFIX = DATAPROXY_STORAGE_PREFIX;
var MIN_DELAY_BEFORE_EXPORT = 5 * 60 * 1000; // 5min

exports.MIN_DELAY_BEFORE_EXPORT = MIN_DELAY_BEFORE_EXPORT;

}),
"./node_modules/cozy-dataproxy-lib/dist/search/helpers/normalizeSearchResult.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeSearchResult = exports.getCleanedFilePath = exports.enrichResultsWithDocs = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

var _consts = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/consts.js");

var _queries = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/queries/index.js");

var _types = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/types.js");

var _utils = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/utils.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var log = (0, _cozyMinilog.default)('🗂️ [Indexing]');

var normalizeSearchResult = function normalizeSearchResult(client, searchResults, query) {
  var doc = getCleanedFilePath(searchResults.doc);
  var slug = getSearchResultSlug(client, doc);
  var url = buildOpenURL(client, doc, slug);
  var secondaryUrl = buildSecondaryURL(client, doc, url);
  var title = getSearchResultTitle(doc);
  var subTitle = getSearchResultSubTitle(client, {
    fields: searchResults.fields,
    doc: doc,
    query: query
  });
  var normalizedRes = {
    doc: doc,
    slug: slug,
    title: title,
    subTitle: subTitle,
    url: url,
    secondaryUrl: secondaryUrl
  };
  return normalizedRes;
};

exports.normalizeSearchResult = normalizeSearchResult;

var getCleanedFilePath = function getCleanedFilePath(doc) {
  if (!(0, _types.isIOCozyFile)(doc)) {
    return doc;
  }

  var path = doc.path;

  if (!path) {
    // Paths should be completed for both files and directories, at indexing time
    log.warn("No path found for ".concat(doc._id, "}"));
    return doc;
  }

  var newPath = path;

  if (path.endsWith("/".concat(doc.name))) {
    // Remove the name from the path, which is added at indexing time to search on it
    newPath = path.slice(0, -doc.name.length - 1);
  }

  if (!newPath) {
    // Special case for root path
    newPath = '/';
  }

  return _objectSpread(_objectSpread({}, doc), {}, {
    path: newPath
  });
};

exports.getCleanedFilePath = getCleanedFilePath;

var getSearchResultTitle = function getSearchResultTitle(doc) {
  if ((0, _types.isIOCozyFile)(doc)) {
    return doc.name;
  }

  if ((0, _types.isIOCozyContact)(doc)) {
    return doc.displayName || doc.fullname || null;
  }

  if ((0, _types.isIOCozyApp)(doc)) {
    return doc.name;
  }

  return null;
};

var getSearchResultSubTitle = function getSearchResultSubTitle(client, params) {
  var fields = params.fields,
      doc = params.doc,
      query = params.query;

  if ((0, _types.isIOCozyFile)(doc)) {
    var _doc$path;

    return (_doc$path = doc.path) !== null && _doc$path !== void 0 ? _doc$path : null;
  }

  if ((0, _types.isIOCozyContact)(doc)) {
    var _matchingValue$toStri, _matchingValue;

    var matchingValue; // Several document fields might match a search query. Let's take the first one different from name, assuming a relevance order

    var matchingField = fields.find(function (field) {
      return field !== 'displayName' && field !== 'fullname';
    });

    if (!matchingField) {
      return null;
    }

    if (matchingField.includes('[]:')) {
      var tokens = matchingField.split('[]:');

      if (tokens.length !== 2) {
        return null;
      }

      var arrayAttributeName = tokens[0];
      var valueAttribute = tokens[1];
      var array = doc[arrayAttributeName];
      var matchingArrayItem = Array.isArray(array) && array.find(function (item) {
        var value = typeof item === 'object' && item !== null && valueAttribute in item && item[valueAttribute];
        return typeof value === 'string' && value.includes(query);
      });

      if (!matchingArrayItem) {
        return null;
      }

      matchingValue = matchingArrayItem[valueAttribute];
    } else {
      matchingValue = doc[matchingField];
    }

    return (_matchingValue$toStri = (_matchingValue = matchingValue) === null || _matchingValue === void 0 ? void 0 : _matchingValue.toString()) !== null && _matchingValue$toStri !== void 0 ? _matchingValue$toStri : null;
  }

  if (doc._type === _consts.APPS_DOCTYPE) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      var locale = client.getInstanceOptions().locale || 'en';

      if (doc.locales[locale]) {
        return doc.locales[locale].short_description;
      }
    } catch (_unused) {
      return doc.name;
    }
  }

  return null;
};

var getSearchResultSlug = function getSearchResultSlug(client, doc) {
  if ((0, _types.isIOCozyFile)(doc)) {
    if (_cozyClient.models.file.isNote(doc)) {
      var _doc$cozyMetadata;

      var cozyUrl = client.getStackClient().uri;
      var createdOn = (_doc$cozyMetadata = doc.cozyMetadata) === null || _doc$cozyMetadata === void 0 ? void 0 : _doc$cozyMetadata.createdOn;
      var isSharedNote = createdOn && createdOn !== "".concat(cozyUrl, "/"); // In case of a shared note, the cozyURL must be the one from the instance who the created it,
      // and should include the docID coming from this instance.
      // As we do not have this info, we need to first open the note on Drive, which will handle it
      // and make the correct redirection.

      return isSharedNote ? 'drive' : 'notes';
    }

    return 'drive';
  }

  if ((0, _types.isIOCozyContact)(doc)) {
    return 'contacts';
  }

  if ((0, _types.isIOCozyApp)(doc)) {
    return doc.slug;
  }

  return null;
};

var buildOpenURL = function buildOpenURL(client, doc, slug) {
  // TODO: extract some of this common logic with Drive  in cozy-client
  var urlHash = '';

  if ((0, _types.isIOCozyFile)(doc)) {
    var isDir = doc.type === _consts.TYPE_DIRECTORY;
    var dirId = isDir ? doc._id : doc.dir_id;
    var folderURLHash = "/folder/".concat(dirId);

    if (_cozyClient.models.file.isNote(doc)) {
      // A note might be opened by Drive if it is shared
      urlHash = slug === 'notes' ? "/n/".concat(doc._id) : "/note/".concat(doc._id);
    } else if (_cozyClient.models.file.shouldBeOpenedByOnlyOffice(doc)) {
      urlHash = "/onlyoffice/".concat(doc._id, "?redirectLink=drive").concat(folderURLHash);
    } else if (isDir) {
      urlHash = folderURLHash;
    } else {
      urlHash = "".concat(folderURLHash, "/file/").concat(doc._id);
    }

    if ((0, _types.isIOCozySharedDriveFile)(doc)) {
      urlHash = "/shareddrive/".concat(doc.driveId, "/").concat(dirId);

      if (doc.type === _consts.TYPE_FILE) {
        urlHash += "/file/".concat(doc._id);
      }
    }
  }

  if ((0, _types.isIOCozyContact)(doc)) {
    urlHash = "/".concat(doc._id);
  }

  if (!slug) {
    return null;
  }

  return (0, _cozyClient.generateWebLink)({
    cozyUrl: client.getStackClient().uri,
    slug: slug,
    subDomainType: client.getInstanceOptions().subdomain,
    hash: urlHash,
    pathname: '',
    searchParams: []
  });
};

var buildSecondaryURL = function buildSecondaryURL(client, doc, url) {
  if (!(0, _types.isIOCozyFile)(doc) || !url) {
    return null;
  }

  var folderURLHash = "/folder/".concat(doc.dir_id);

  if ((0, _types.isIOCozySharedDriveFile)(doc)) {
    folderURLHash = "/shareddrive/".concat(doc.driveId, "/").concat(doc.dir_id); // FIXME this url hash for shared drives should be in cozy-client
  }

  return (0, _cozyClient.generateWebLink)({
    cozyUrl: client.getStackClient().uri,
    slug: 'drive',
    subDomainType: client.getInstanceOptions().subdomain,
    hash: folderURLHash,
    pathname: '',
    searchParams: []
  });
};

var enrichResultsWithDocs = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(client, results) {
    var _docs;

    var enrichedResults, resultsByDoctype, docs, _i, _Object$keys, doctype, ids, startQuery, fromStore, queryDocs, endQuery, docsMap, filteredResults, _iterator, _step, _res$id, res, id, doc;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            enrichedResults = (0, _toConsumableArray2.default)(results); // Group by doctype

            resultsByDoctype = results.reduce(function (acc, _ref2) {
              var id = _ref2.id,
                  doctype = _ref2.doctype;

              if (!acc[doctype]) {
                acc[doctype] = [];
              }

              acc[doctype].push(id);
              return acc;
            }, {});
            docs = [];
            _i = 0, _Object$keys = Object.keys(resultsByDoctype);

          case 4:
            if (!(_i < _Object$keys.length)) {
              _context.next = 18;
              break;
            }

            doctype = _Object$keys[_i];
            ids = resultsByDoctype[doctype];
            startQuery = performance.now();
            fromStore = false; // We used to query from store as it was much more efficient, but now we query directly from PouchDB
            // which should be fast enough after performances improvements in cozy-pouch-link

            _context.next = 11;
            return (0, _queries.queryDocsByIds)(client, doctype, ids, {
              fromStore: false
            });

          case 11:
            queryDocs = _context.sent;
            endQuery = performance.now();
            docs = docs.concat(queryDocs);

            if ((0, _utils.isDebug)()) {
              log.debug("Query took ".concat((endQuery - startQuery).toFixed(2), " ms to retrieve ").concat(ids.length, " ").concat(doctype, " from store: ").concat(fromStore));
            }

          case 15:
            _i++;
            _context.next = 4;
            break;

          case 18:
            docsMap = new Map((_docs = docs) === null || _docs === void 0 ? void 0 : _docs.map(function (doc) {
              return [doc._id, doc];
            }));
            filteredResults = [];
            _iterator = _createForOfIteratorHelper(enrichedResults);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                res = _step.value;
                id = (_res$id = res.id) === null || _res$id === void 0 ? void 0 : _res$id.toString(); // Because of flexsearch Id typing

                doc = docsMap.get(id);

                if (!doc) {
                  // TODO: remove missing docs from search index
                  log.error("".concat(id, " is found in search but not in local data"));
                } else {
                  res.doc = doc;
                  filteredResults.push(res);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return _context.abrupt("return", filteredResults);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function enrichResultsWithDocs(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.enrichResultsWithDocs = enrichResultsWithDocs;

}),
"./node_modules/cozy-dataproxy-lib/dist/search/helpers/utils.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizeDoctype = exports.isDebug = void 0;

var _cozyFlags = _interopRequireDefault(__webpack_require__("./node_modules/cozy-flags/dist/index.browser.js"));

var _consts = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/consts.js");

var isDebug = function isDebug() {
  return Boolean((0, _cozyFlags.default)('debug'));
};

exports.isDebug = isDebug;

var normalizeDoctype = function normalizeDoctype(doctype) {
  if (doctype && doctype.includes(_consts.SHARED_DRIVE_FILES_DOCTYPE)) {
    return _consts.FILES_DOCTYPE;
  }

  return doctype;
};

exports.normalizeDoctype = normalizeDoctype;

}),
"./node_modules/cozy-dataproxy-lib/dist/search/indexDocs.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.initSearchIndex = exports.initDoctypeAfterIndexImport = exports.indexSingleDoc = exports.indexOnChanges = exports.indexAllDocs = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _flexsearch = _interopRequireDefault(__webpack_require__("./node_modules/flexsearch/dist/flexsearch.bundle.module.min.js"));

var _consts = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/consts.js");

var _client = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/client.js");

var _getSearchEncoder = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/getSearchEncoder.js");

var _normalizeApp = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/normalizeApp.js");

var _normalizeFile = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/normalizeFile.js");

var _utils = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/utils.js");

var _queries = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/queries/index.js");

var _types = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/types.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var initSearchIndex = function initSearchIndex(doctype) {
  var fieldsToIndex = _consts.SEARCH_SCHEMA[(0, _utils.normalizeDoctype)(doctype)];

  var flexsearchIndex = new _flexsearch.default.Document({
    tokenize: 'reverse',
    // See https://github.com/nextapps-de/flexsearch?tab=readme-ov-file#tokenizer
    encode: (0, _getSearchEncoder.getSearchEncoder)(),
    // @ts-expect-error minlength is not described by Flexsearch types but exists
    minlength: 2,
    document: {
      id: '_id',
      index: fieldsToIndex,
      store: false // Use redux store to get docs

    }
  });
  return flexsearchIndex;
};

exports.initSearchIndex = initSearchIndex;

var indexAllDocs = function indexAllDocs(flexsearchIndex, docs) {
  var _iterator = _createForOfIteratorHelper(docs),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var doc = _step.value;

      if (shouldIndexDoc(doc)) {
        flexsearchIndex.add(doc);
      } else {
        // Should not index doc: remove it from index if it exists
        flexsearchIndex.remove(doc._id);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return flexsearchIndex;
};

exports.indexAllDocs = indexAllDocs;

var indexSingleDoc = function indexSingleDoc(flexsearchIndex, doc) {
  if (shouldIndexDoc(doc)) {
    flexsearchIndex.add(doc);
  } else {
    // Should not index doc: remove it from index if it exists
    flexsearchIndex.remove(doc._id);
  }
};

exports.indexSingleDoc = indexSingleDoc;

var indexOnChanges = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(searchEngine, searchIndex, doctype) {
    var pouchLink, lastSeq, changes, _iterator2, _step2, change, normalizedDoc;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            pouchLink = (0, _client.getPouchLink)(searchEngine.client);

            if (!(!searchEngine.isLocalSearch || !pouchLink)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", searchIndex);

          case 3:
            lastSeq = (searchIndex === null || searchIndex === void 0 ? void 0 : searchIndex.lastSeq) || 0;
            _context.next = 6;
            return pouchLink.getChanges(doctype, {
              include_docs: true,
              since: lastSeq
            });

          case 6:
            changes = _context.sent;
            _iterator2 = _createForOfIteratorHelper(changes.results);

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                change = _step2.value;

                if (change.deleted) {
                  searchIndex.index.remove(change.id);
                } else {
                  normalizedDoc = _objectSpread(_objectSpread({}, change.doc), {}, {
                    _type: doctype
                  });
                  indexSingleDoc(searchIndex.index, normalizedDoc);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            searchIndex.lastSeq = changes.last_seq;
            searchIndex.lastUpdated = new Date().toISOString();
            return _context.abrupt("return", searchIndex);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function indexOnChanges(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.indexOnChanges = indexOnChanges;

var initDoctypeAfterIndexImport = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(client, doctype) {
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _queries.queryLocalOrRemoteDocs)(client, doctype, {
              isLocalSearch: true
            });

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function initDoctypeAfterIndexImport(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.initDoctypeAfterIndexImport = initDoctypeAfterIndexImport;

var shouldIndexDoc = function shouldIndexDoc(doc) {
  if ((0, _types.isIOCozyFile)(doc)) {
    return (0, _normalizeFile.shouldKeepFile)(doc);
  }

  if ((0, _types.isIOCozyApp)(doc)) {
    return (0, _normalizeApp.shouldKeepApp)(doc);
  }

  return true;
};

}),
"./node_modules/cozy-dataproxy-lib/dist/search/queries/index.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.queryLocalOrRemoteDocs = exports.queryFilesForSearch = exports.queryDocsByIds = exports.queryDocById = exports.queryAllDocs = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _cozyMinilog = _interopRequireDefault(__webpack_require__("./node_modules/cozy-minilog/dist/web/index.js"));

var _consts = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/consts.js");

var _normalizeFile = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/normalizeFile.js");

var _utils = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/helpers/utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

var log = (0, _cozyMinilog.default)('🗂️ [Indexing]');

var defaultFetchPolicy = _cozyClient.fetchPolicies.olderThan(5 * 60 * 1000); // 5 min


var queryFilesForSearch = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(client) {
    var resp, files, folders, filteredFiles, normalizedFiles;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.getStackClient().fetchJSON('GET', '/data/io.cozy.files/_all_docs?Fields=_id,trashed,dir_id,name,path,type,mime,class,metadata.title,metadata.version&DesignDocs=false&include_docs=true');

          case 2:
            resp = _context.sent;
            files = resp.rows.map(function (row) {
              return _objectSpread({
                id: row.id
              }, row.doc);
            });
            folders = files.filter(function (file) {
              return file.type === _consts.TYPE_DIRECTORY;
            });
            filteredFiles = files.filter(function (file) {
              return (0, _normalizeFile.shouldKeepFile)(file);
            });
            normalizedFiles = filteredFiles.map(function (file) {
              return (0, _normalizeFile.normalizeFileWithFolders)(folders, file);
            });
            return _context.abrupt("return", normalizedFiles);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function queryFilesForSearch(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.queryFilesForSearch = queryFilesForSearch;

var queryAllDocs = function queryAllDocs(client, doctype) {
  var queryOpts = {
    as: "".concat(doctype, "/all"),
    fetchPolicies: defaultFetchPolicy
  };
  return client.queryAll((0, _cozyClient.Q)(doctype).limitBy(null), queryOpts);
};

exports.queryAllDocs = queryAllDocs;

var queryDocById = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(client, doctype, id) {
    var queryOpts, resp;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            queryOpts = {
              as: "".concat(doctype, "/").concat(id),
              fetchPolicy: defaultFetchPolicy,
              singleDocData: true
            };
            _context2.next = 3;
            return client.query((0, _cozyClient.Q)(doctype).getById(id), queryOpts);

          case 3:
            resp = _context2.sent;
            return _context2.abrupt("return", resp.data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function queryDocById(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.queryDocById = queryDocById;

var queryDocsByIds = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(client, doctype, ids) {
    var _ref4,
        _ref4$fromStore,
        fromStore,
        allDocs,
        docs,
        resp,
        _args3 = arguments;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref4 = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : {}, _ref4$fromStore = _ref4.fromStore, fromStore = _ref4$fromStore === void 0 ? false : _ref4$fromStore;

            if (!fromStore) {
              _context3.next = 5;
              break;
            }

            // This used to be more efficient than querying by id, but should be fixed now
            // See https://github.com/cozy/cozy-client/issues/1591
            allDocs = client.getCollectionFromState(doctype);
            docs = allDocs.filter(function (doc) {
              return doc._id && ids.includes(doc._id);
            });
            return _context3.abrupt("return", docs);

          case 5:
            _context3.next = 7;
            return client.query((0, _cozyClient.Q)(doctype).getByIds(ids));

          case 7:
            resp = _context3.sent;
            return _context3.abrupt("return", resp.data);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function queryDocsByIds(_x5, _x6, _x7) {
    return _ref3.apply(this, arguments);
  };
}();

exports.queryDocsByIds = queryDocsByIds;

var queryLocalOrRemoteDocs = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(client, doctype, _ref5) {
    var isLocalSearch, docs, startTimeQ, endTimeQ;
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            isLocalSearch = _ref5.isLocalSearch;
            docs = [];
            startTimeQ = performance.now();

            if (!(!isLocalSearch && doctype === _consts.FILES_DOCTYPE)) {
              _context4.next = 9;
              break;
            }

            _context4.next = 6;
            return queryFilesForSearch(client);

          case 6:
            docs = _context4.sent;
            _context4.next = 12;
            break;

          case 9:
            _context4.next = 11;
            return queryAllDocs(client, doctype);

          case 11:
            docs = _context4.sent;

          case 12:
            endTimeQ = performance.now();

            if ((0, _utils.isDebug)()) {
              log.debug("Query ".concat(docs.length, " ").concat(doctype, " took ").concat((endTimeQ - startTimeQ).toFixed(2), " ms"));
            }

            return _context4.abrupt("return", docs);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function queryLocalOrRemoteDocs(_x8, _x9, _x10) {
    return _ref6.apply(this, arguments);
  };
}();

exports.queryLocalOrRemoteDocs = queryLocalOrRemoteDocs;

}),
"./node_modules/cozy-dataproxy-lib/dist/search/types.js": (function (__unused_webpack_module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isTrashedSharedDrive = exports.isSearchedDoctype = exports.isInSharedDrivesDir = exports.isIOCozySharedDriveFile = exports.isIOCozyFile = exports.isIOCozyContact = exports.isIOCozyApp = void 0;

var _consts = __webpack_require__("./node_modules/cozy-dataproxy-lib/dist/search/consts.js");

var isIOCozyFile = function isIOCozyFile(doc) {
  return doc._type === _consts.FILES_DOCTYPE || doc.driveId !== undefined; // FIXME find a way to add the right doctype in the result
};

exports.isIOCozyFile = isIOCozyFile;

var isIOCozySharedDriveFile = function isIOCozySharedDriveFile(doc) {
  return doc.driveId !== undefined;
};

exports.isIOCozySharedDriveFile = isIOCozySharedDriveFile;

var isIOCozyContact = function isIOCozyContact(doc) {
  return doc._type === _consts.CONTACTS_DOCTYPE;
};

exports.isIOCozyContact = isIOCozyContact;

var isIOCozyApp = function isIOCozyApp(doc) {
  return doc._type === _consts.APPS_DOCTYPE;
};

exports.isIOCozyApp = isIOCozyApp;
var searchedDoctypes = Object.keys(_consts.SEARCH_SCHEMA);

var isSearchedDoctype = function isSearchedDoctype(doctype) {
  if (!doctype) {
    return false;
  }

  return searchedDoctypes.includes(doctype);
};

exports.isSearchedDoctype = isSearchedDoctype;

var isTrashedSharedDrive = function isTrashedSharedDrive(doc, sharedDriveId) {
  return !!sharedDriveId && doc.restore_path === '/Drives';
};

exports.isTrashedSharedDrive = isTrashedSharedDrive;

var isInSharedDrivesDir = function isInSharedDrivesDir(doc) {
  return doc.dir_id === _consts.SHARED_DRIVES_DIR_ID;
};

exports.isInSharedDrivesDir = isInSharedDrivesDir;

}),

});
//# sourceMappingURL=cozy.db2f0827446a6f34.hot-update.js.map