"use strict";
self["webpackHotUpdatecozy_drive"]("cozy", {
"./node_modules/cozy-pouch-link/dist/CozyPouchLink.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = exports.getReplicationURL = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/inherits.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var _pouchdbBrowser = _interopRequireDefault(__webpack_require__("./node_modules/pouchdb-browser/lib/index.es.js"));

var _pouchdbFind = _interopRequireDefault(__webpack_require__("./node_modules/pouchdb-find/lib/index-browser.es.js"));

var _defaults = _interopRequireDefault(__webpack_require__("./node_modules/lodash/defaults.js"));

var _zipWith = _interopRequireDefault(__webpack_require__("./node_modules/lodash/zipWith.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/lodash/debounce.js"));

var _omit = _interopRequireDefault(__webpack_require__("./node_modules/lodash/omit.js"));

var _helpers = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/helpers.js"));

var jsonapi = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-pouch-link/dist/jsonapi.js"));

var _PouchManager = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/PouchManager.js"));

var _localStorage = __webpack_require__("./node_modules/cozy-pouch-link/dist/localStorage.js");

var _logger = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/logger.js"));

var _adapter = __webpack_require__("./node_modules/cozy-pouch-link/dist/migrations/adapter.js");

var _platformWeb = __webpack_require__("./node_modules/cozy-pouch-link/dist/platformWeb.js");

var _utils = __webpack_require__("./node_modules/cozy-pouch-link/dist/utils.js");

var _errors = __webpack_require__("./node_modules/cozy-pouch-link/dist/errors.js");

var _pouchdb = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/db/pouchdb/pouchdb.js"));

var _helpers2 = __webpack_require__("./node_modules/cozy-pouch-link/dist/db/helpers.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

_pouchdbBrowser.default.plugin(_pouchdbFind.default);

var parseMutationResult = function parseMutationResult(original, res) {
  if (!res.ok) {
    throw new Error('Pouch response is not OK');
  }

  return _objectSpread(_objectSpread({}, original), (0, _omit.default)(res, 'ok'));
};

var DEFAULT_OPTIONS = {
  replicationInterval: 30 * 1000
};
var DEFAULT_DEBOUNCE_DELAY = 10 * 1000;
var MAX_DEBOUNCE_DELAY = 600 * 1000;

var addBasicAuth = function addBasicAuth(url, basicAuth) {
  return url.replace('//', "//".concat(basicAuth));
};
/**
 * Constructs the replication URL for a given doctype and replication options.
 *
 * @param {string} uri - The base URI of the Cozy instance.
 * @param {Object} token - The authentication token object, must have a toBasicAuth() method.
 * @param {string} doctype - The doctype for which to construct the replication URL.
 * @param {Object} [replicationOptions] - Additional replication options.
 * @param {string} [replicationOptions.driveId] - If present, indicates replication is for a shared drive and which one.
 * @returns {string} The fully constructed replication URL.
 */


var _getReplicationURL = function getReplicationURL(uri, token, doctype, replicationOptions) {
  var basicAuth = token.toBasicAuth();
  var authenticatedURL = addBasicAuth(uri, basicAuth);

  if (replicationOptions !== null && replicationOptions !== void 0 && replicationOptions.driveId) {
    return "".concat(authenticatedURL, "/sharings/drives/").concat(replicationOptions === null || replicationOptions === void 0 ? void 0 : replicationOptions.driveId);
  }

  return "".concat(authenticatedURL, "/data/").concat(doctype);
};

exports.getReplicationURL = _getReplicationURL;

var doNothing = function doNothing(operation) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
};
/**
 * @typedef {import('cozy-client/src/types').CozyClientDocument & { cozyPouchData: any }} CozyPouchDocument *
 * @typedef {"idle"|"replicating"} ReplicationStatus
 */

/**
 * @typedef {object} PouchLinkOptions
 * @property {boolean} initialSync Whether or not a replication process should be started. Default is false
 * @property {boolean} periodicSync Whether or not the replication should be periodic. Default is true
 * @property {number} [syncDebounceDelayInMs] Debounce delay (in ms) when calling `startReplicationWithDebounce()` method. Should be used only when periodicSync is false. Default is 10 seconds
 * @property {number} [syncDebounceMaxDelayInMs] The maximum duration (in ms) the `startReplicationWithDebounce()` method can be delayed. Should be used only when periodicSync is false. Default is 10 minutes
 * @property {number} [replicationInterval] Milliseconds between periodic replications
 * @property {string[]} doctypes Doctypes to replicate
 * @property {boolean} isReadOnly Whether or not the link is read-only and should forward any write operation
 * @property {Record<string, object>} doctypesReplicationOptions A mapping from doctypes to replication options. All pouch replication options can be used, as well as the "strategy" option that determines which way the replication is done (can be "sync", "fromRemote" or "toRemote")
 * @property {import('./types').LinkPlatform} platform Platform specific adapters and methods
 * @property {import('cozy-client/src/performances/types').PerformanceAPI} [performanceApi] - The performance API that can be used to measure performances
 */

/**
 * Link to be passed to a `CozyClient` instance to support CouchDB. It instantiates
 * PouchDB collections for each doctype that it supports and knows how
 * to respond to queries and mutations.
 */


var PouchLink = /*#__PURE__*/function (_CozyLink) {
  (0, _inherits2.default)(PouchLink, _CozyLink);

  var _super = _createSuper(PouchLink);

  /**
   * constructor - Initializes a new PouchLink
   *
   * @param {PouchLinkOptions} [opts={}]
   */
  function PouchLink(opts) {
    var _options$platform;

    var _this;

    (0, _classCallCheck2.default)(this, PouchLink);
    var options = (0, _defaults.default)({}, opts, DEFAULT_OPTIONS);
    _this = _super.call(this, options);
    var doctypes = options.doctypes,
        doctypesReplicationOptions = options.doctypesReplicationOptions,
        periodicSync = options.periodicSync,
        initialSync = options.initialSync,
        syncDebounceDelayInMs = options.syncDebounceDelayInMs,
        syncDebounceMaxDelayInMs = options.syncDebounceMaxDelayInMs,
        performanceApi = options.performanceApi;
    _this.options = options;

    if (!doctypes) {
      throw new Error("PouchLink must be instantiated with doctypes it manages. Ex: ['io.cozy.bills']");
    }

    _this.doctypes = doctypes;
    _this.doctypesReplicationOptions = doctypesReplicationOptions;
    _this.indexes = {};
    _this.storage = new _localStorage.PouchLocalStorage(((_options$platform = options.platform) === null || _options$platform === void 0 ? void 0 : _options$platform.storage) || _platformWeb.platformWeb.storage);
    _this.initialSync = initialSync !== null && initialSync !== void 0 ? initialSync : false;
    _this.periodicSync = periodicSync !== null && periodicSync !== void 0 ? periodicSync : true;
    /** @type {Record<string, ReplicationStatus>} - Stores replication states per doctype */

    _this.replicationStatus = _this.replicationStatus || {};
    /** @private */

    _this.startReplicationDebounced = (0, _debounce.default)(_this._startReplication, syncDebounceDelayInMs || DEFAULT_DEBOUNCE_DELAY, {
      maxWait: syncDebounceMaxDelayInMs || MAX_DEBOUNCE_DELAY,
      leading: true
    });
    /** @type {import('cozy-client/src/performances/types').PerformanceAPI} */

    _this.performanceApi = performanceApi || _cozyClient.defaultPerformanceApi;
    return _this;
  }
  /**
   * Return the PouchDB adapter name.
   * Should be IndexedDB for newest adapters.
   *
   * @param {import('./types').LocalStorage} localStorage Methods to access local storage
   * @returns {Promise<string>} The adapter name
   */


  (0, _createClass2.default)(PouchLink, [{
    key: "getReplicationURL",

    /**
     * Get the authenticated replication URL for a specific doctype
     *
     * @param {string} doctype - The document type to replicate (e.g., 'io.cozy.files')
     * @param {object} [replicationOptions={}] - Replication options
     * @param {string} [replicationOptions.driveId] - The ID of the shared drive to replicate (for shared drives)
     * @returns {string} The authenticated replication URL
     */
    value: function getReplicationURL(doctype, replicationOptions) {
      var url = this.client && this.client.stackClient.uri;
      var token = this.client && this.client.stackClient.token;

      if (!token) {
        throw new Error("Can't get replication URL since the stack client doesn't have a token");
      }

      if (!url) {
        throw new Error("Can't get replication URL since the stack client doesn't have a URI");
      }

      return _getReplicationURL(url, token, doctype, replicationOptions);
    }
  }, {
    key: "registerClient",
    value: function () {
      var _registerClient = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(client) {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.client = client;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function registerClient(_x) {
        return _registerClient.apply(this, arguments);
      }

      return registerClient;
    }()
    /**
     * Migrate the current adapter
     *
     * @typedef {object} MigrationParams
     * @property {string} [fromAdapter] - The current adapter type, e.g. 'idb'
     * @property {string} [toAdapter] - The new adapter type, e.g. 'indexeddb'
     * @property {string} [url] - The Cozy URL
     * @property {Array<object>} [plugins] - The PouchDB plugins
     *
     * @param {MigrationParams} params - Migration params
     */

  }, {
    key: "migrateAdapter",
    value: function () {
      var _migrateAdapter = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref) {
        var fromAdapter, toAdapter, url, plugins, _iterator, _step, plugin, doctypes, _i, _Object$keys, doctype, prefix, dbName;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                fromAdapter = _ref.fromAdapter, toAdapter = _ref.toAdapter, url = _ref.url, plugins = _ref.plugins;
                _context2.prev = 1;
                _iterator = _createForOfIteratorHelper(plugins);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    plugin = _step.value;

                    _pouchdbBrowser.default.plugin(plugin);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _context2.next = 6;
                return this.storage.getPersistedSyncedDoctypes();

              case 6:
                doctypes = _context2.sent;
                _i = 0, _Object$keys = Object.keys(doctypes);

              case 8:
                if (!(_i < _Object$keys.length)) {
                  _context2.next = 19;
                  break;
                }

                doctype = _Object$keys[_i];
                prefix = (0, _utils.getPrefix)(url);
                dbName = (0, _utils.getDatabaseName)(prefix, doctype);
                _context2.next = 14;
                return (0, _adapter.migratePouch)({
                  dbName: dbName,
                  fromAdapter: fromAdapter,
                  toAdapter: toAdapter
                });

              case 14:
                _context2.next = 16;
                return this.storage.destroyWarmedUpQueries();

              case 16:
                _i++;
                _context2.next = 8;
                break;

              case 19:
                _context2.next = 21;
                return this.storage.persistAdapterName('indexeddb');

              case 21:
                _context2.next = 26;
                break;

              case 23:
                _context2.prev = 23;
                _context2.t0 = _context2["catch"](1);
                console.error('PouchLink: PouchDB migration failed. ', _context2.t0);

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 23]]);
      }));

      function migrateAdapter(_x2) {
        return _migrateAdapter.apply(this, arguments);
      }

      return migrateAdapter;
    }()
  }, {
    key: "onLogin",
    value: function () {
      var _onLogin = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _this$options,
            _this$options$pouch,
            _this$options$pouch$o,
            _this$options$platfor,
            _this2 = this;

        var markName, prefix, shouldDestroyDatabases, adapterName;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (this.client) {
                  _context3.next = 3;
                  break;
                }

                _logger.default.warn("PouchLink: no client registered, can't login");

                return _context3.abrupt("return");

              case 3:
                markName = this.performanceApi.mark('onLogin');
                prefix = (0, _utils.getPrefix)(this.client.stackClient.uri);
                shouldDestroyDatabases = this.pouches && this.pouches.options && this.pouches.options.prefix !== prefix;

                if (!shouldDestroyDatabases) {
                  _context3.next = 16;
                  break;
                }

                if (true) {
                  _logger.default.info('PouchLink: URI changed, destroy pouches');
                }

                _context3.prev = 8;
                _context3.next = 11;
                return this.pouches.destroy();

              case 11:
                _context3.next = 16;
                break;

              case 13:
                _context3.prev = 13;
                _context3.t0 = _context3["catch"](8);

                _logger.default.warn('Error while destroying pouch DBs', _context3.t0);

              case 16:
                if (prefix) {
                  _context3.next = 18;
                  break;
                }

                throw new Error('PouchLink: Prefix is required');

              case 18:
                if (true) {
                  _logger.default.log('Create pouches with ' + prefix + ' prefix');
                }

                adapterName = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$pouch = _this$options.pouch) === null || _this$options$pouch === void 0 ? void 0 : (_this$options$pouch$o = _this$options$pouch.options) === null || _this$options$pouch$o === void 0 ? void 0 : _this$options$pouch$o.adapter;

                if (!adapterName) {
                  _context3.next = 26;
                  break;
                }

                _context3.next = 23;
                return this.storage.getAdapterName();

              case 23:
                if (_context3.sent) {
                  _context3.next = 26;
                  break;
                }

                _context3.next = 26;
                return this.storage.persistAdapterName(adapterName);

              case 26:
                this.queryEngine = ((_this$options$platfor = this.options.platform) === null || _this$options$platfor === void 0 ? void 0 : _this$options$platfor.queryEngine) || _pouchdb.default;
                this.pouches = new _PouchManager.default(this.doctypes, {
                  pouch: this.options.pouch,
                  getReplicationURL: this.getReplicationURL.bind(this),
                  doctypesReplicationOptions: this.doctypesReplicationOptions,
                  onError: function onError(err) {
                    return _this2.onSyncError(err);
                  },
                  onSync: this.handleOnSync.bind(this),
                  onDoctypeSyncStart: this.handleDoctypeSyncStart.bind(this),
                  onDoctypeSyncEnd: this.handleDoctypeSyncEnd.bind(this),
                  prefix: prefix,
                  executeQuery: this.executeQuery.bind(this),
                  platform: this.options.platform,
                  queryEngine: this.queryEngine,
                  client: this.client
                });
                _context3.next = 30;
                return this.pouches.init();

              case 30:
                if (this.client && this.initialSync) {
                  this.startReplication();
                }

                this.performanceApi.measure({
                  markName: markName,
                  category: 'CozyPouchLink'
                });

              case 32:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[8, 13]]);
      }));

      function onLogin() {
        return _onLogin.apply(this, arguments);
      }

      return onLogin;
    }()
  }, {
    key: "reset",
    value: function () {
      var _reset = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.pouches) {
                  _context4.next = 3;
                  break;
                }

                _context4.next = 3;
                return this.pouches.destroy();

              case 3:
                this.pouches = null;
                this.client = null;

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function reset() {
        return _reset.apply(this, arguments);
      }

      return reset;
    }()
    /**
     * Receives PouchDB updates (documents grouped by doctype).
     * Normalizes the data (.id -> ._id, .rev -> _rev).
     * Passes the data to the client and to the onSync handler.
     *
     * Emits an event (pouchlink:sync:end) when the sync (all doctypes) is done
     */

  }, {
    key: "handleOnSync",
    value: function handleOnSync(doctypeUpdates) {
      var _this3 = this;

      var doctypes = doctypeUpdates && Object.keys(doctypeUpdates);

      if (doctypes) {
        doctypes.forEach(function (doctype) {
          if (doctype) {
            (0, jsonapi.normalizeDocs)(_this3.client, doctype, doctypeUpdates[doctype]);
          }
        });
      }

      if (this.client) {
        this.client.setData(doctypeUpdates);
      }

      if (this.options.onSync) {
        this.options.onSync.call(this, doctypeUpdates);
      }

      if (true) {
        _logger.default.info('Pouch synced');
      }

      this.client.emit('pouchlink:sync:end');
    }
  }, {
    key: "handleDoctypeSyncStart",
    value: function handleDoctypeSyncStart(doctype) {
      this.replicationStatus[doctype] = 'replicating';
      this.client.emit('pouchlink:doctypesync:start', doctype);
    }
  }, {
    key: "handleDoctypeSyncEnd",
    value: function handleDoctypeSyncEnd(doctype) {
      this.replicationStatus[doctype] = 'idle';
      this.client.emit('pouchlink:doctypesync:end', doctype);
    }
    /**
     * @private
     */

  }, {
    key: "_startReplication",
    value: function _startReplication() {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$waitForReplicat = _ref2.waitForReplications,
          waitForReplications = _ref2$waitForReplicat === void 0 ? true : _ref2$waitForReplicat;

      this.client.emit('pouchlink:sync:start');

      if (this.periodicSync) {
        // FIXME: this API is kind of weird, one should be able to manually replicate
        // even if a periodicSync is enabled
        this.pouches.startReplicationLoop();
      } else {
        this.pouches.replicateOnce({
          waitForReplications: waitForReplications
        });
      }

      if (this.options.onStartReplication) {
        this.options.onStartReplication.apply(this);
      }
    }
    /**
     * User of the link can call this to start ongoing replications.
     * Typically, it can be used when the application regains focus.
     *
     * Emits pouchlink:sync:start event when the replication begins
     *
     * @public
     *
     * @param {object} options - The options
     * @param {boolean|null} [options.waitForReplications=true] - Whether the others replication process should be waited
     * @returns {void}
     */

  }, {
    key: "startReplication",
    value: function startReplication() {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$waitForReplicat = _ref3.waitForReplications,
          waitForReplications = _ref3$waitForReplicat === void 0 ? true : _ref3$waitForReplicat;

      if (!waitForReplications) {
        this.startReplicationDebounced.cancel();
      }

      return this._startReplication({
        waitForReplications: waitForReplications
      });
    }
    /**
     * Debounced version of startReplication() method
     *
     * Debounce delay can be configured through constructor's `syncDebounceDelayInMs` option
     *
     * @public
     * @param {object} options - The options
     * @param {boolean|null} [options.waitForReplications=true] - Whether the others replication process should be waited
     * @returns {void}
     */

  }, {
    key: "startReplicationWithDebounce",
    value: function startReplicationWithDebounce() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$waitForReplicat = _ref4.waitForReplications,
          waitForReplications = _ref4$waitForReplicat === void 0 ? true : _ref4$waitForReplicat;

      if (this.periodicSync) {
        throw new Error('createDebounceableReplication cannot be called when periodic sync is configured');
      }

      return this.startReplicationDebounced({
        waitForReplications: waitForReplications
      });
    }
    /**
     * User of the link can call this to stop ongoing replications.
     * Typically, it can be used when the applications loses focus.
     *
     * Emits pouchlink:sync:stop event
     *
     * @public
     * @returns {void}
     */

  }, {
    key: "stopReplication",
    value: function stopReplication() {
      this.pouches.stopReplicationLoop();

      if (this.options.onStopReplication) {
        this.options.onStopReplication.apply(this);
      }

      this.client.emit('pouchlink:sync:stop');
    }
  }, {
    key: "onSyncError",
    value: function () {
      var _onSyncError = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(error) {
        var oldToken, newToken;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!(0, _errors.isExpiredTokenError)(error)) {
                  _context5.next = 18;
                  break;
                }

                _context5.prev = 1;
                oldToken = this.client.stackClient.token;
                _context5.next = 5;
                return this.client.stackClient.refreshToken();

              case 5:
                newToken = this.client.stackClient.token;

                if (!(newToken === oldToken || !newToken)) {
                  _context5.next = 8;
                  break;
                }

                throw new Error('Refresh token failed');

              case 8:
                this.startReplication();
                return _context5.abrupt("return");

              case 12:
                _context5.prev = 12;
                _context5.t0 = _context5["catch"](1);

                _logger.default.warn('Could not refresh token, replication has stopped', _context5.t0);

                if (this.options.onSyncError) {
                  this.options.onSyncError.call(this, _context5.t0);
                }

              case 16:
                _context5.next = 20;
                break;

              case 18:
                _logger.default.warn('CozyPouchLink: Synchronization error', error);

                if (this.options.onSyncError) {
                  this.options.onSyncError.call(this, error);
                }

              case 20:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[1, 12]]);
      }));

      function onSyncError(_x3) {
        return _onSyncError.apply(this, arguments);
      }

      return onSyncError;
    }()
  }, {
    key: "getSyncInfo",
    value: function getSyncInfo(doctype) {
      return this.pouches.getSyncInfo(doctype);
    }
  }, {
    key: "getQueryEngineFromDoctype",
    value: function getQueryEngineFromDoctype(doctype) {
      var dbName = (0, _utils.getDatabaseName)((0, _utils.getPrefix)(this.client.stackClient.uri), doctype);
      return this.pouches.getQueryEngine(dbName, doctype);
    }
  }, {
    key: "getPouch",
    value: function getPouch(doctype) {
      var dbName = (0, _utils.getDatabaseName)((0, _utils.getPrefix)(this.client.stackClient.uri), doctype);
      return this.pouches.getPouch(dbName);
    }
  }, {
    key: "supportsOperation",
    value: function supportsOperation(operation) {
      if (this.options.readOnly && operation.mutationType) {
        return false;
      }

      var impactedDoctype = (0, _cozyClient.getDoctypeFromOperation)(operation); // If the Pouch is configured only to replicate from the remote,
      // we don't want to apply the mutation on it, but to forward
      // to the next link

      if (operation.mutationType && this.doctypesReplicationOptions && this.doctypesReplicationOptions[impactedDoctype] && this.doctypesReplicationOptions[impactedDoctype].strategy === 'fromRemote') return false;
      return !!this.getPouch(impactedDoctype);
    }
  }, {
    key: "request",
    value: function () {
      var _request = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(operation, options) {
        var result,
            forward,
            doctype,
            _args6 = arguments;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                result = _args6.length > 2 && _args6[2] !== undefined ? _args6[2] : null;
                forward = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : doNothing;

                if (!(options !== null && options !== void 0 && options.forceStack)) {
                  _context6.next = 4;
                  break;
                }

                return _context6.abrupt("return", forward(operation, options));

              case 4:
                doctype = (0, _cozyClient.getDoctypeFromOperation)(operation);

                if (this.pouches) {
                  _context6.next = 8;
                  break;
                }

                if (true) {
                  _logger.default.info("Tried to access local ".concat(doctype, " but Cozy Pouch is not initialized yet. Forwarding the operation to next link"));
                }

                return _context6.abrupt("return", forward(operation, options));

              case 8:
                if (!(this.pouches.getSyncStatus(doctype) === 'not_synced')) {
                  _context6.next = 11;
                  break;
                }

                // The doctype is not locally synced and thus cannot be requested: forward to next link
                if (true) {
                  _logger.default.info("Tried to access local ".concat(doctype, " but Cozy Pouch is not synced yet. Forwarding the operation to next link"));
                }

                return _context6.abrupt("return", forward(operation, options));

              case 11:
                _context6.next = 13;
                return this.needsToWaitWarmup(doctype);

              case 13:
                if (!_context6.sent) {
                  _context6.next = 16;
                  break;
                }

                if (true) {
                  _logger.default.info("Tried to access local ".concat(doctype, " but not warmuped yet. Forwarding the operation to next link"));
                }

                return _context6.abrupt("return", forward(operation, options));

              case 16:
                if (this.supportsOperation(operation)) {
                  _context6.next = 19;
                  break;
                }

                if (true) {
                  _logger.default.info("The doctype '".concat(doctype, "' is not supported. Forwarding the operation to next link"));
                }

                return _context6.abrupt("return", forward(operation, options));

              case 19:
                if (!operation.mutationType) {
                  _context6.next = 23;
                  break;
                }

                return _context6.abrupt("return", this.executeMutation(operation, options, result, forward));

              case 23:
                return _context6.abrupt("return", this.executeQuery(operation));

              case 24:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function request(_x4, _x5) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
    /**
     * Get PouchDB changes
     * See https://pouchdb.com/api.html#changes
     *
     * @param {string} doctype - The PouchDB database's doctype
     * @param {object} options - The changes options. See https://pouchdb.com/api.html#changes
     * @returns {Promise<import('./types').PouchDBChangesResults>} The changes
     */

  }, {
    key: "getChanges",
    value: function () {
      var _getChanges = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(doctype, options) {
        var pouch;
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (doctype) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return", null);

              case 2:
                pouch = this.getPouch(doctype);
                return _context7.abrupt("return", pouch.changes(options));

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function getChanges(_x6, _x7) {
        return _getChanges.apply(this, arguments);
      }

      return getChanges;
    }()
    /**
     * Get PouchDB database info
     * See https://pouchdb.com/api.html#database_information
     *
     * @param {string} doctype - The PouchDB database's doctype
     * @returns {Promise<import('./types').PouchDBInfo>} The db info
     */

  }, {
    key: "getDbInfo",
    value: function () {
      var _getDbInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(doctype) {
        var pouch;
        return _regenerator.default.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                if (doctype) {
                  _context8.next = 2;
                  break;
                }

                return _context8.abrupt("return", null);

              case 2:
                pouch = this.getPouch(doctype);
                return _context8.abrupt("return", pouch.info());

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getDbInfo(_x8) {
        return _getDbInfo.apply(this, arguments);
      }

      return getDbInfo;
    }()
    /**
     *   We persist in the local Pouch database all the documents that do not
     *   exist on the remote Couch database.
     *
     *   Those documents are computed by the cozy-stack then are sent to the
     *   client using JSON-API format
     */

  }, {
    key: "persistCozyData",
    value: function () {
      var _persistCozyData = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(doc) {
        var forward,
            markName,
            sanitizedDoc,
            engine,
            pouch,
            resp,
            oldDoc,
            _args9 = arguments;
        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                forward = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : doNothing;
                markName = this.performanceApi.mark('persistCozyData'); // XXX - We don't need to store `attributes` and `meta` data into the Pouch
                // database as their data already exists in the document's root, as its
                // already done by cozy-stack-client.

                sanitizedDoc = (0, jsonapi.sanitizeJsonApi)(doc);
                _context9.prev = 3;
                sanitizedDoc.cozyLocalOnly = true;
                engine = this.getQueryEngineFromDoctype(doc._type);

                if (engine.db) {
                  _context9.next = 9;
                  break;
                }

                _logger.default.warn("".concat(doc._id, " is not persisted: no database found for doctype: ").concat(doc._type));

                return _context9.abrupt("return", null);

              case 9:
                pouch = this.getPouch(doc._type);
                _context9.next = 12;
                return (0, _helpers2.getExistingDocument)(engine, sanitizedDoc._id);

              case 12:
                resp = _context9.sent;

                if (!(!(resp !== null && resp !== void 0 && resp.data) || Object.keys(resp === null || resp === void 0 ? void 0 : resp.data).length < 1)) {
                  _context9.next = 15;
                  break;
                }

                return _context9.abrupt("return", pouch.put(sanitizedDoc));

              case 15:
                oldDoc = (0, jsonapi.sanitizeJsonApi)(resp.data);

                if (!(0, _helpers2.areDocsEqual)(oldDoc, sanitizedDoc)) {
                  _context9.next = 18;
                  break;
                }

                return _context9.abrupt("return");

              case 18:
                sanitizedDoc._rev = oldDoc._rev;
                _context9.next = 21;
                return pouch.put(sanitizedDoc);

              case 21:
                _context9.next = 27;
                break;

              case 23:
                _context9.prev = 23;
                _context9.t0 = _context9["catch"](3);

                _logger.default.error("PersistCozyData failed: with ".concat(_context9.t0)); // Do nothing on catch, to avoid throwing a read query


                return _context9.abrupt("return", null);

              case 27:
                this.performanceApi.measure({
                  markName: markName,
                  category: 'CozyPouchLink'
                });

              case 28:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[3, 23]]);
      }));

      function persistCozyData(_x9) {
        return _persistCozyData.apply(this, arguments);
      }

      return persistCozyData;
    }()
    /**
     *
     * Check if there is warmup queries for this doctype
     * and return if those queries are already warmed up or not
     *
     * @param {string} doctype - Doctype to check
     * @returns {Promise<boolean>} the need to wait for the warmup
     */

  }, {
    key: "needsToWaitWarmup",
    value: function () {
      var _needsToWaitWarmup = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(doctype) {
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                if (!(this.doctypesReplicationOptions && this.doctypesReplicationOptions[doctype] && this.doctypesReplicationOptions[doctype].warmupQueries)) {
                  _context10.next = 4;
                  break;
                }

                _context10.next = 3;
                return this.pouches.areQueriesWarmedUp(doctype, this.doctypesReplicationOptions[doctype].warmupQueries);

              case 3:
                return _context10.abrupt("return", !_context10.sent);

              case 4:
                return _context10.abrupt("return", false);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function needsToWaitWarmup(_x10) {
        return _needsToWaitWarmup.apply(this, arguments);
      }

      return needsToWaitWarmup;
    }()
  }, {
    key: "hasIndex",
    value: function hasIndex(name) {
      return Boolean(this.indexes[name]);
    }
  }, {
    key: "executeQuery",
    value: function () {
      var _executeQuery = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11(_ref5) {
        var doctype, selector, sort, fields, limit, id, ids, skip, indexedFields, partialFilter, sharingId, engine, res, findSelector, findOpts;
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                doctype = _ref5.doctype, selector = _ref5.selector, sort = _ref5.sort, fields = _ref5.fields, limit = _ref5.limit, id = _ref5.id, ids = _ref5.ids, skip = _ref5.skip, indexedFields = _ref5.indexedFields, partialFilter = _ref5.partialFilter, sharingId = _ref5.sharingId;
                engine = this.getQueryEngineFromDoctype(doctype);

                if (!id) {
                  _context11.next = 8;
                  break;
                }

                _context11.next = 5;
                return engine.getById(id);

              case 5:
                res = _context11.sent;
                _context11.next = 25;
                break;

              case 8:
                if (!ids) {
                  _context11.next = 14;
                  break;
                }

                _context11.next = 11;
                return engine.getByIds(ids);

              case 11:
                res = _context11.sent;
                _context11.next = 25;
                break;

              case 14:
                if (!(!selector && !partialFilter && !fields && !sort)) {
                  _context11.next = 20;
                  break;
                }

                _context11.next = 17;
                return engine.allDocs({
                  include_docs: true,
                  limit: limit
                });

              case 17:
                res = _context11.sent;
                _context11.next = 25;
                break;

              case 20:
                findSelector = _helpers.default.normalizeFindSelector({
                  selector: selector,
                  sort: sort,
                  indexedFields: indexedFields,
                  partialFilter: partialFilter,
                  doctype: doctype,
                  sharingId: sharingId
                });
                findOpts = {
                  sort: sort,
                  selector: findSelector,
                  // same selector as Document Collection.
                  // _id is necessary for the store, and _rev is required for offline. See https://github.com/cozy/cozy-client/blob/95978d39546023920b0c01d689fed5dd41577a02/packages/cozy-client/src/CozyClient.js#L1153
                  fields: fields ? [].concat((0, _toConsumableArray2.default)(fields), ['_id', '_rev']) : undefined,
                  limit: limit,
                  skip: skip,
                  doctype: doctype
                };
                _context11.next = 24;
                return engine.find(findOpts);

              case 24:
                res = _context11.sent;

              case 25:
                if (res) {
                  _context11.next = 27;
                  break;
                }

                return _context11.abrupt("return", {
                  data: []
                });

              case 27:
                return _context11.abrupt("return", res);

              case 28:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function executeQuery(_x11) {
        return _executeQuery.apply(this, arguments);
      }

      return executeQuery;
    }()
  }, {
    key: "executeMutation",
    value: function () {
      var _executeMutation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(mutation, options, result, forward) {
        var markName, pouchRes, jsonResult;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                markName = this.performanceApi.mark('executeMutation');
                _context12.t0 = mutation.mutationType;
                _context12.next = _context12.t0 === _cozyClient.MutationTypes.CREATE_DOCUMENT ? 4 : _context12.t0 === _cozyClient.MutationTypes.CREATE_DOCUMENTS ? 8 : _context12.t0 === _cozyClient.MutationTypes.UPDATE_DOCUMENT ? 12 : _context12.t0 === _cozyClient.MutationTypes.UPDATE_DOCUMENTS ? 16 : _context12.t0 === _cozyClient.MutationTypes.DELETE_DOCUMENT ? 20 : _context12.t0 === _cozyClient.MutationTypes.DELETE_DOCUMENTS ? 24 : _context12.t0 === _cozyClient.MutationTypes.ADD_REFERENCES_TO ? 28 : 32;
                break;

              case 4:
                _context12.next = 6;
                return this.createDocument(mutation);

              case 6:
                pouchRes = _context12.sent;
                return _context12.abrupt("break", 33);

              case 8:
                _context12.next = 10;
                return this.createDocuments(mutation);

              case 10:
                pouchRes = _context12.sent;
                return _context12.abrupt("break", 33);

              case 12:
                _context12.next = 14;
                return this.updateDocument(mutation);

              case 14:
                pouchRes = _context12.sent;
                return _context12.abrupt("break", 33);

              case 16:
                _context12.next = 18;
                return this.updateDocuments(mutation);

              case 18:
                pouchRes = _context12.sent;
                return _context12.abrupt("break", 33);

              case 20:
                _context12.next = 22;
                return this.deleteDocument(mutation);

              case 22:
                pouchRes = _context12.sent;
                return _context12.abrupt("break", 33);

              case 24:
                _context12.next = 26;
                return this.deleteDocuments(mutation);

              case 26:
                pouchRes = _context12.sent;
                return _context12.abrupt("break", 33);

              case 28:
                _context12.next = 30;
                return this.addReferencesTo(mutation);

              case 30:
                pouchRes = _context12.sent;
                return _context12.abrupt("break", 33);

              case 32:
                return _context12.abrupt("return", forward(mutation, options, result));

              case 33:
                jsonResult = jsonapi.fromPouchResult({
                  res: pouchRes,
                  withRows: false,
                  doctype: (0, _cozyClient.getDoctypeFromOperation)(mutation),
                  client: this.client
                });
                this.performanceApi.measure({
                  markName: markName,
                  category: 'CozyPouchLink'
                });
                return _context12.abrupt("return", jsonResult);

              case 36:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function executeMutation(_x12, _x13, _x14, _x15) {
        return _executeMutation.apply(this, arguments);
      }

      return executeMutation;
    }()
  }, {
    key: "createDocument",
    value: function () {
      var _createDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(mutation) {
        var res;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return this.dbMethod('post', mutation);

              case 2:
                res = _context13.sent;
                return _context13.abrupt("return", parseMutationResult(mutation.document, res));

              case 4:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function createDocument(_x16) {
        return _createDocument.apply(this, arguments);
      }

      return createDocument;
    }()
  }, {
    key: "createDocuments",
    value: function () {
      var _createDocuments = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14(mutation) {
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                return _context14.abrupt("return", this.bulkMutation(mutation));

              case 1:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function createDocuments(_x17) {
        return _createDocuments.apply(this, arguments);
      }

      return createDocuments;
    }()
  }, {
    key: "updateDocument",
    value: function () {
      var _updateDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee15(mutation) {
        var res;
        return _regenerator.default.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return this.dbMethod('put', mutation);

              case 2:
                res = _context15.sent;
                return _context15.abrupt("return", parseMutationResult(mutation.document, res));

              case 4:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      function updateDocument(_x18) {
        return _updateDocument.apply(this, arguments);
      }

      return updateDocument;
    }()
  }, {
    key: "updateDocuments",
    value: function () {
      var _updateDocuments = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee16(mutation) {
        return _regenerator.default.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                return _context16.abrupt("return", this.bulkMutation(mutation));

              case 1:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function updateDocuments(_x19) {
        return _updateDocuments.apply(this, arguments);
      }

      return updateDocuments;
    }()
  }, {
    key: "deleteDocument",
    value: function () {
      var _deleteDocument = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee17(mutation) {
        var res, document;
        return _regenerator.default.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return this.dbMethod('remove', mutation);

              case 2:
                res = _context17.sent;
                document = _objectSpread(_objectSpread({}, mutation.document), {}, {
                  _id: res.id,
                  _rev: res.rev,
                  _deleted: true
                });
                return _context17.abrupt("return", parseMutationResult(document, res));

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function deleteDocument(_x20) {
        return _deleteDocument.apply(this, arguments);
      }

      return deleteDocument;
    }()
  }, {
    key: "deleteDocuments",
    value: function () {
      var _deleteDocuments = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee18(mutation) {
        var deletedDocs, deletedMutation;
        return _regenerator.default.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                deletedDocs = mutation.documents.map(function (doc) {
                  return _objectSpread(_objectSpread({}, doc), {}, {
                    _deleted: true
                  });
                });
                deletedMutation = _objectSpread(_objectSpread({}, mutation), {}, {
                  documents: deletedDocs
                });
                return _context18.abrupt("return", this.bulkMutation(deletedMutation));

              case 3:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function deleteDocuments(_x21) {
        return _deleteDocuments.apply(this, arguments);
      }

      return deleteDocuments;
    }()
  }, {
    key: "bulkMutation",
    value: function () {
      var _bulkMutation = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee19(mutation) {
        var docs, bulkResponse, bulkDocs;
        return _regenerator.default.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                docs = mutation.documents;
                _context19.next = 3;
                return this.dbMethod('bulkDocs', mutation);

              case 3:
                bulkResponse = _context19.sent;
                bulkDocs = (0, _zipWith.default)(bulkResponse, docs, function (bulkResult, originalDoc) {
                  return _objectSpread(_objectSpread({}, originalDoc), {}, {
                    _id: bulkResult.id,
                    _rev: bulkResult.rev
                  });
                });

                if (!bulkResponse.find(function (x) {
                  return !x.ok;
                })) {
                  _context19.next = 7;
                  break;
                }

                throw new _cozyClient.BulkEditError(bulkResponse, bulkDocs);

              case 7:
                return _context19.abrupt("return", bulkDocs);

              case 8:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function bulkMutation(_x22) {
        return _bulkMutation.apply(this, arguments);
      }

      return bulkMutation;
    }()
  }, {
    key: "addReferencesTo",
    value: function () {
      var _addReferencesTo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee20(mutation) {
        return _regenerator.default.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                throw new Error('addReferencesTo is not implemented in CozyPouchLink');

              case 1:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function addReferencesTo(_x23) {
        return _addReferencesTo.apply(this, arguments);
      }

      return addReferencesTo;
    }()
  }, {
    key: "dbMethod",
    value: function () {
      var _dbMethod = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee21(method, mutation) {
        var markName, doctype, doc, docs, db, res;
        return _regenerator.default.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                markName = this.performanceApi.mark("dbMethod ".concat(method));
                doctype = (0, _cozyClient.getDoctypeFromOperation)(mutation);
                doc = mutation.document, docs = mutation.documents;
                db = this.getPouch(doctype);
                _context21.prev = 4;

                if (!docs) {
                  _context21.next = 11;
                  break;
                }

                _context21.next = 8;
                return db[method](docs.map(function (doc) {
                  return (0, jsonapi.sanitized)(doc);
                }));

              case 8:
                res = _context21.sent;
                _context21.next = 18;
                break;

              case 11:
                if (!doc) {
                  _context21.next = 17;
                  break;
                }

                _context21.next = 14;
                return db[method]((0, jsonapi.sanitized)(doc));

              case 14:
                res = _context21.sent;
                _context21.next = 18;
                break;

              case 17:
                throw new Error('A mutation should either have document or documents member.');

              case 18:
                this.performanceApi.measure({
                  markName: markName,
                  category: 'PouchDB'
                });
                return _context21.abrupt("return", res);

              case 22:
                _context21.prev = 22;
                _context21.t0 = _context21["catch"](4);
                this.performanceApi.measure({
                  markName: markName,
                  measureName: "".concat(markName, " error"),
                  category: 'PouchDB',
                  color: 'error'
                });
                throw new Error("Coud not apply mutation: ".concat(_context21.t0.message));

              case 26:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this, [[4, 22]]);
      }));

      function dbMethod(_x24, _x25) {
        return _dbMethod.apply(this, arguments);
      }

      return dbMethod;
    }()
  }, {
    key: "syncImmediately",
    value: function () {
      var _syncImmediately = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee22() {
        return _regenerator.default.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (this.pouches) {
                  _context22.next = 3;
                  break;
                }

                _logger.default.warn('Cannot sync immediately, no PouchManager');

                return _context22.abrupt("return");

              case 3:
                this.pouches.syncImmediately();

              case 4:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function syncImmediately() {
        return _syncImmediately.apply(this, arguments);
      }

      return syncImmediately;
    }()
    /**
     * Adds a new doctype to the list of managed doctypes, sets its replication options,
     * adds it to the pouches, and starts replication.
     *
     * @param {string} doctype - The name of the doctype to add.
     * @param {Object} replicationOptions - The replication options for the doctype.
     * @param {Object} options - The replication options for the doctype.
     * @param {boolean} [options.shouldStartReplication=true] - Whether the replication should be started.
     */

  }, {
    key: "addDoctype",
    value: function () {
      var _addDoctype = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee23(doctype, replicationOptions, options) {
        return _regenerator.default.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                this.doctypes.push(doctype);

                if (!this.doctypesReplicationOptions) {
                  this.doctypesReplicationOptions = {};
                }

                this.doctypesReplicationOptions[doctype] = replicationOptions;
                this.pouches.doctypes.push(doctype);
                _context23.next = 6;
                return this.pouches.addDoctype(doctype, replicationOptions);

              case 6:
                if ((options === null || options === void 0 ? void 0 : options.shouldStartReplication) === true) {
                  this.startReplicationWithDebounce();
                }

              case 7:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      function addDoctype(_x26, _x27, _x28) {
        return _addDoctype.apply(this, arguments);
      }

      return addDoctype;
    }()
    /**
     * Removes a doctype from the list of managed doctypes, deletes its replication options,
     * and removes it from the pouches.
     *
     * @param {string} doctype - The name of the doctype to remove.
     */

  }, {
    key: "removeDoctype",
    value: function () {
      var _removeDoctype = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee24(doctype) {
        return _regenerator.default.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                this.doctypes = this.doctypes.filter(function (d) {
                  return d !== doctype;
                });
                delete this.doctypesReplicationOptions[doctype];
                _context24.next = 4;
                return this.pouches.removeDoctype(doctype);

              case 4:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      function removeDoctype(_x29) {
        return _removeDoctype.apply(this, arguments);
      }

      return removeDoctype;
    }()
  }, {
    key: "getSharedDriveDoctypes",
    value: function getSharedDriveDoctypes() {
      var _this4 = this;

      return this.doctypes.filter(function (doctype) {
        var _this4$doctypesReplic;

        return (_this4$doctypesReplic = _this4.doctypesReplicationOptions[doctype]) === null || _this4$doctypesReplic === void 0 ? void 0 : _this4$doctypesReplic.driveId;
      });
    }
  }]);
  return PouchLink;
}(_cozyClient.CozyLink);

(0, _defineProperty2.default)(PouchLink, "getPouchAdapterName", function (localStorage) {
  var storage = new _localStorage.PouchLocalStorage(localStorage || _platformWeb.platformWeb.storage);
  return storage.getAdapterName();
});
var _default = PouchLink;
exports["default"] = _default;

}),
"./node_modules/cozy-pouch-link/dist/PouchManager.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/createClass.js"));

var _forEach = _interopRequireDefault(__webpack_require__("./node_modules/lodash/forEach.js"));

var _cozyDeviceHelper = __webpack_require__("./node_modules/cozy-device-helper/dist/index.js");

var _localStorage = __webpack_require__("./node_modules/cozy-pouch-link/dist/localStorage.js");

var _loop = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/loop.js"));

var _logger = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/logger.js"));

var _platformWeb = __webpack_require__("./node_modules/cozy-pouch-link/dist/platformWeb.js");

var _replicateOnce3 = __webpack_require__("./node_modules/cozy-pouch-link/dist/replicateOnce.js");

var _utils = __webpack_require__("./node_modules/cozy-pouch-link/dist/utils.js");

var _pouchdb = __webpack_require__("./node_modules/cozy-pouch-link/dist/migrations/pouchdb.js");

var _pouchdb2 = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/db/pouchdb/pouchdb.js"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var DEFAULT_DELAY = 30 * 1000; // See view_update_changes_batch_size in https://pouchdb.com/api.html#create_database
// PouchDB default is 50, which badly hurt performances for large databases

var DEFAULT_VIEW_UPDATE_BATCH = 1000;
/**
 * @param {import('cozy-client/types/types').Query} query The query definition whose name we're getting
 *
 * @returns {string} alias
 */

var getQueryAlias = function getQueryAlias(query) {
  return query.options.as;
};
/**
 * Handles the lifecycle of several pouches
 *
 * - Creates/Destroys the pouches
 * - Replicates periodically
 */


var PouchManager = /*#__PURE__*/function () {
  function PouchManager(doctypes, options) {
    var _options$platform, _options$platform2, _options$platform3, _options$platform4;

    (0, _classCallCheck2.default)(this, PouchManager);
    this.options = options;
    this.doctypes = doctypes;
    this.storage = new _localStorage.PouchLocalStorage(((_options$platform = options.platform) === null || _options$platform === void 0 ? void 0 : _options$platform.storage) || _platformWeb.platformWeb.storage);
    this.queryEngine = options.queryEngine || _pouchdb2.default;
    this.client = options.client;
    this.PouchDB = ((_options$platform2 = options.platform) === null || _options$platform2 === void 0 ? void 0 : _options$platform2.pouchAdapter) || _platformWeb.platformWeb.pouchAdapter;
    this.isOnline = ((_options$platform3 = options.platform) === null || _options$platform3 === void 0 ? void 0 : _options$platform3.isOnline) || _platformWeb.platformWeb.isOnline;
    this.events = ((_options$platform4 = options.platform) === null || _options$platform4 === void 0 ? void 0 : _options$platform4.events) || _platformWeb.platformWeb.events;
    this.dbQueryEngines = new Map();
  }

  (0, _createClass2.default)(PouchManager, [{
    key: "init",
    value: function () {
      var _init = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this$options$pouch$p,
            _this$options,
            _this$options$pouch,
            _this$options$pouch$o,
            _this$options2,
            _this$options2$pouch,
            _this = this;

        var pouchPlugins, pouchOptions, _iterator, _step, doctype;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pouchPlugins = (_this$options$pouch$p = (_this$options = this.options) === null || _this$options === void 0 ? void 0 : (_this$options$pouch = _this$options.pouch) === null || _this$options$pouch === void 0 ? void 0 : _this$options$pouch.plugins) !== null && _this$options$pouch$p !== void 0 ? _this$options$pouch$p : [];
                pouchOptions = (_this$options$pouch$o = (_this$options2 = this.options) === null || _this$options2 === void 0 ? void 0 : (_this$options2$pouch = _this$options2.pouch) === null || _this$options2$pouch === void 0 ? void 0 : _this$options2$pouch.options) !== null && _this$options$pouch$o !== void 0 ? _this$options$pouch$o : {};

                if (!pouchOptions.view_update_changes_batch_size) {
                  pouchOptions.view_update_changes_batch_size = DEFAULT_VIEW_UPDATE_BATCH;
                }

                (0, _forEach.default)(pouchPlugins, function (plugin) {
                  return _this.PouchDB.plugin(plugin);
                });
                this.pouches = {};
                this.doctypesReplicationOptions = this.options.doctypesReplicationOptions || {};
                _iterator = _createForOfIteratorHelper(this.doctypes);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    doctype = _step.value;
                    this.addDoctype(doctype, this.doctypesReplicationOptions[doctype]);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                _context.next = 10;
                return this.persistDatabasesNames();

              case 10:
                _context.next = 12;
                return this.storage.getPersistedSyncedDoctypes();

              case 12:
                this.syncedDoctypes = _context.sent;
                _context.next = 15;
                return this.storage.getPersistedWarmedUpQueries();

              case 15:
                this.warmedUpQueries = _context.sent;
                this.getReplicationURL = this.options.getReplicationURL;
                this.listenerLaunched = false; // We must ensure databases exist on the remote before
                // starting replications

                this.ensureDatabasesExistDone = false;
                this.startReplicationLoop = this.startReplicationLoop.bind(this);
                this.stopReplicationLoop = this.stopReplicationLoop.bind(this);
                this.replicateOnce = this.replicateOnce.bind(this);
                this.executeQuery = this.options.executeQuery;
                /** @type {import('./types').CancelablePromise[]} - Stores replication promises */

                this.replications = undefined;
                (0, _pouchdb.destroyOldDatabases)();

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function init() {
        return _init.apply(this, arguments);
      }

      return init;
    }()
  }, {
    key: "addListeners",
    value: function addListeners() {
      if (!this.listenerLaunched) {
        if ((0, _cozyDeviceHelper.isMobileApp)()) {
          this.events.addEventListener('pause', this.stopReplicationLoop);
          this.events.addEventListener('resume', this.startReplicationLoop);
        }

        this.events.addEventListener('online', this.startReplicationLoop);
        this.events.addEventListener('offline', this.stopReplicationLoop);
        this.listenerLaunched = true;
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners() {
      if (this.listenerLaunched) {
        if ((0, _cozyDeviceHelper.isMobileApp)()) {
          this.events.removeEventListener('pause', this.stopReplicationLoop);
          this.events.removeEventListener('resume', this.startReplicationLoop);
        }

        this.events.removeEventListener('online', this.startReplicationLoop);
        this.events.removeEventListener('offline', this.stopReplicationLoop);
        this.listenerLaunched = false;
      }
    }
  }, {
    key: "destroy",
    value: function () {
      var _destroy = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.stopReplicationLoop();
                this.removeListeners();
                _context2.next = 4;
                return this.clearSyncedDoctypes();

              case 4:
                _context2.next = 6;
                return this.clearWarmedUpQueries();

              case 6:
                _context2.next = 8;
                return this.storage.destroy();

              case 8:
                return _context2.abrupt("return", (0, _utils.allSettled)(Object.values(this.pouches).map(function (pouch) {
                  return pouch.destroy();
                })));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function destroy() {
        return _destroy.apply(this, arguments);
      }

      return destroy;
    }()
    /**
     * Via a call to info() we ensure the database exist on the
     * remote side. This is done only once since after the first
     * call, we are sure that the databases have been created.
     */

  }, {
    key: "ensureDatabasesExist",
    value: function () {
      var _ensureDatabasesExist = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var _this2 = this;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.ensureDatabasesExistDone) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return", Promise.resolve());

              case 2:
                return _context3.abrupt("return", Promise.all(Object.values(this.pouches).map(function (pouch) {
                  return pouch.info();
                })).then(function () {
                  _logger.default.info('PouchManager: ensure databases exist done');

                  _this2.ensureDatabasesExistDone = true;
                }));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function ensureDatabasesExist() {
        return _ensureDatabasesExist.apply(this, arguments);
      }

      return ensureDatabasesExist;
    }()
    /**
     * Starts periodic syncing of the pouches
     *
     * @returns {Promise<Loop | void>}
     */

  }, {
    key: "startReplicationLoop",
    value: function () {
      var _startReplicationLoop = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var delay;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.ensureDatabasesExist();

              case 2:
                if (!this.replicationLoop) {
                  _context4.next = 5;
                  break;
                }

                _logger.default.warn('Replication loop already started');

                return _context4.abrupt("return");

              case 5:
                if (true) {
                  _logger.default.info('PouchManager: Start replication loop');
                }

                delay = this.options.replicationDelay || DEFAULT_DELAY;
                this.replicationLoop = new _loop.default(this.replicateOnce, delay);
                this.replicationLoop.start();
                this.addListeners();
                return _context4.abrupt("return", this.replicationLoop);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function startReplicationLoop() {
        return _startReplicationLoop.apply(this, arguments);
      }

      return startReplicationLoop;
    }()
    /** Stop periodic syncing of the pouches */

  }, {
    key: "stopReplicationLoop",
    value: function stopReplicationLoop() {
      if (this.replicationLoop) {
        _logger.default.info('PouchManager: Stop replication loop');

        this.replicationLoop.stop();
        this.replicationLoop = null;
      }
    }
    /**
     * If a replication is currently ongoing, will start a replication
     * just after it has finished. Otherwise it will start a replication
     * immediately
     */

  }, {
    key: "syncImmediately",
    value: function syncImmediately() {
      if (!this.replicationLoop) {
        _logger.default.warn('No replication loop, cannot syncImmediately');

        return;
      }

      this.replicationLoop.scheduleImmediateTask();
    }
    /**
     * Starts replication
     *
     * @param {object} options - The options
     * @param {boolean|null} [options.waitForReplications=true] - Whether the others replication process should be waited
     * @returns {Promise<any>} the replication result
     */

  }, {
    key: "replicateOnce",
    value: function () {
      var _replicateOnce2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var _ref,
            _ref$waitForReplicati,
            waitForReplications,
            _args5 = arguments;

        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _ref = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : {}, _ref$waitForReplicati = _ref.waitForReplications, waitForReplications = _ref$waitForReplicati === void 0 ? true : _ref$waitForReplicati;

                if (!waitForReplications) {
                  _context5.next = 4;
                  break;
                }

                _context5.next = 4;
                return this.waitForCurrentReplications();

              case 4:
                return _context5.abrupt("return", (0, _replicateOnce3.replicateOnce)(this));

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function replicateOnce() {
        return _replicateOnce2.apply(this, arguments);
      }

      return replicateOnce;
    }()
  }, {
    key: "handleReplicationError",
    value: function handleReplicationError(err) {
      var aggregatedMessage = ''; // @ts-ignore
      // eslint-disable-next-line no-undef

      if (err instanceof AggregateError) {
        aggregatedMessage = (0, _utils.formatAggregatedError)(err);
      }

      _logger.default.warn("PouchManager: Error during replication - ".concat(err.message).concat(aggregatedMessage)); // On error, replication stops, it needs to be started
      // again manually by the owner of PouchManager


      this.stopReplicationLoop();

      if (this.options.onError) {
        this.options.onError(err);
      }
    }
  }, {
    key: "cancelCurrentReplications",
    value: function cancelCurrentReplications() {
      if (!this.replications) {
        _logger.default.warn('PouchManager: No current replications');

        return;
      }

      Object.values(this.replications).forEach(function (replication) {
        return replication.cancel && replication.cancel();
      });
    }
  }, {
    key: "waitForCurrentReplications",
    value: function waitForCurrentReplications() {
      if (!this.replications) {
        return Promise.resolve();
      }

      return (0, _utils.allSettled)(Object.values(this.replications));
    }
  }, {
    key: "getPouch",
    value: function getPouch(dbName) {
      return this.pouches[dbName];
    }
  }, {
    key: "setQueryEngine",
    value: function setQueryEngine(name, doctype) {
      var engine = new this.queryEngine(this, doctype);
      engine.openDB(name);
      this.dbQueryEngines.set(name, engine);
      return engine;
    }
  }, {
    key: "getQueryEngine",
    value: function getQueryEngine(name, doctype) {
      var engine = this.dbQueryEngines.get(name);

      if (!engine) {
        engine = this.setQueryEngine(name, doctype);
      }

      return engine;
    }
    /**
     * Update the Sync info for the specifed doctype
     *
     * @param {string} doctype - The doctype to update
     * @param {import('./types').SyncStatus} status - The new Sync status for the doctype
     */

  }, {
    key: "updateSyncInfo",
    value: function () {
      var _updateSyncInfo = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(doctype) {
        var status,
            _args6 = arguments;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                status = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : 'synced';
                this.syncedDoctypes[doctype] = {
                  date: new Date().toISOString(),
                  status: status
                };
                _context6.next = 4;
                return this.storage.persistSyncedDoctypes(this.syncedDoctypes);

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function updateSyncInfo(_x) {
        return _updateSyncInfo.apply(this, arguments);
      }

      return updateSyncInfo;
    }()
    /**
     * Get the Sync info for the specified doctype
     *
     * @param {string} doctype - The doctype to check
     * @returns {import('./types').SyncInfo}
     */

  }, {
    key: "getSyncInfo",
    value: function getSyncInfo(doctype) {
      return this.syncedDoctypes && this.syncedDoctypes[doctype];
    }
    /**
     * Get the Sync status for the specified doctype
     *
     * @param {string} doctype - The doctype to check
     * @returns {import('./types').SyncStatus}
     */

  }, {
    key: "getSyncStatus",
    value: function getSyncStatus(doctype) {
      var info = this.getSyncInfo(doctype);
      return (info === null || info === void 0 ? void 0 : info.status) || 'not_synced';
    }
  }, {
    key: "clearSyncedDoctypes",
    value: function () {
      var _clearSyncedDoctypes = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7() {
        return _regenerator.default.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                this.syncedDoctypes = {};
                _context7.next = 3;
                return this.storage.destroySyncedDoctypes();

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function clearSyncedDoctypes() {
        return _clearSyncedDoctypes.apply(this, arguments);
      }

      return clearSyncedDoctypes;
    }()
  }, {
    key: "warmupQueries",
    value: function () {
      var _warmupQueries = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(doctype, queries) {
        var _this3 = this;

        return _regenerator.default.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!this.warmedUpQueries[doctype]) this.warmedUpQueries[doctype] = [];
                _context9.prev = 1;
                _context9.next = 4;
                return Promise.all(queries.map( /*#__PURE__*/function () {
                  var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(query) {
                    var def;
                    return _regenerator.default.wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            def = getQueryAlias(query);

                            if (_this3.warmedUpQueries[doctype].includes(def)) {
                              _context8.next = 5;
                              break;
                            }

                            _context8.next = 4;
                            return _this3.executeQuery(query.definition().toDefinition());

                          case 4:
                            _this3.warmedUpQueries[doctype].push(def);

                          case 5:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x4) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 4:
                _context9.next = 6;
                return this.storage.persistWarmedUpQueries(this.warmedUpQueries);

              case 6:
                _logger.default.log('PouchManager: warmupQueries for ' + doctype + ' are done');

                _context9.next = 13;
                break;

              case 9:
                _context9.prev = 9;
                _context9.t0 = _context9["catch"](1);

                _logger.default.error('PouchManager: Could not warm up queries for ' + doctype, _context9.t0);

                delete this.warmedUpQueries[doctype];

              case 13:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 9]]);
      }));

      function warmupQueries(_x2, _x3) {
        return _warmupQueries.apply(this, arguments);
      }

      return warmupQueries;
    }() // Queries are warmed up only once per instantiation of the PouchManager. Since
    // the PouchManager lives during the complete lifecycle of the app, warm up
    // happens only on app start / restart.

  }, {
    key: "checkToWarmupDoctype",
    value: function checkToWarmupDoctype(doctype, replicationOptions) {
      if (!this.warmedUpQueries[doctype] && replicationOptions.warmupQueries) {
        this.warmupQueries(doctype, replicationOptions.warmupQueries);
      }
    }
  }, {
    key: "areQueriesWarmedUp",
    value: function () {
      var _areQueriesWarmedUp = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10(doctype, queries) {
        var persistWarmedUpQueries;
        return _regenerator.default.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return this.storage.getPersistedWarmedUpQueries();

              case 2:
                persistWarmedUpQueries = _context10.sent;
                return _context10.abrupt("return", queries.every(function (query) {
                  return persistWarmedUpQueries[doctype] && persistWarmedUpQueries[doctype].includes(getQueryAlias(query));
                }));

              case 4:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function areQueriesWarmedUp(_x5, _x6) {
        return _areQueriesWarmedUp.apply(this, arguments);
      }

      return areQueriesWarmedUp;
    }()
  }, {
    key: "clearWarmedUpQueries",
    value: function () {
      var _clearWarmedUpQueries = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        return _regenerator.default.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                this.warmedUpQueries = {};
                _context11.next = 3;
                return this.storage.destroyWarmedUpQueries();

              case 3:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function clearWarmedUpQueries() {
        return _clearWarmedUpQueries.apply(this, arguments);
      }

      return clearWarmedUpQueries;
    }()
    /**
     * Adds a new doctype to the list of managed doctypes, sets its replication options,
     * creates a new PouchDB instance for it, and sets up the query engine.
     *
     * @param {string} doctype - The name of the doctype to add.
     * @param {Object} replicationOptions - The replication options for the doctype.
     */

  }, {
    key: "addDoctype",
    value: function () {
      var _addDoctype = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12(doctype, replicationOptions) {
        var _this$options3, _this$options$pouch$o2, _this$options4, _this$options4$pouch;

        var pouchOptions, dbName;
        return _regenerator.default.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                if (!((_this$options3 = this.options) !== null && _this$options3 !== void 0 && _this$options3.doctypesReplicationOptions)) {
                  this.options.doctypesReplicationOptions = {};
                }

                this.options.doctypesReplicationOptions[doctype] = replicationOptions;
                pouchOptions = (_this$options$pouch$o2 = (_this$options4 = this.options) === null || _this$options4 === void 0 ? void 0 : (_this$options4$pouch = _this$options4.pouch) === null || _this$options4$pouch === void 0 ? void 0 : _this$options4$pouch.options) !== null && _this$options$pouch$o2 !== void 0 ? _this$options$pouch$o2 : {};

                if (!pouchOptions.view_update_changes_batch_size) {
                  pouchOptions.view_update_changes_batch_size = DEFAULT_VIEW_UPDATE_BATCH;
                }

                dbName = (0, _utils.getDatabaseName)(this.options.prefix, doctype);
                this.pouches[dbName] = new this.PouchDB((0, _utils.getDatabaseName)(this.options.prefix, doctype), pouchOptions);
                _context12.next = 8;
                return this.persistDatabasesNames();

              case 8:
                this.setQueryEngine(dbName, (0, _utils.getDoctypeFromDatabaseName)(dbName));

              case 9:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function addDoctype(_x7, _x8) {
        return _addDoctype.apply(this, arguments);
      }

      return addDoctype;
    }()
    /**
     * Removes a doctype from the list of managed doctypes, deletes its replication options,
     * destroys its PouchDB instance, and removes it from the pouches.
     *
     * @param {string} doctype - The name of the doctype to remove.
     */

  }, {
    key: "removeDoctype",
    value: function () {
      var _removeDoctype = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13(doctype) {
        var _this$options5, _this$options5$doctyp;

        var dbName;
        return _regenerator.default.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                this.doctypes = this.doctypes.filter(function (d) {
                  return d !== doctype;
                });
                (_this$options5 = this.options) === null || _this$options5 === void 0 ? true : (_this$options5$doctyp = _this$options5.doctypesReplicationOptions) === null || _this$options5$doctyp === void 0 ? true : delete _this$options5$doctyp[doctype];
                dbName = (0, _utils.getDatabaseName)(this.options.prefix, doctype);
                this.pouches[dbName].destroy();
                delete this.pouches[dbName];
                _context13.next = 7;
                return this.persistDatabasesNames();

              case 7:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      function removeDoctype(_x9) {
        return _removeDoctype.apply(this, arguments);
      }

      return removeDoctype;
    }()
    /**
     * Persists the names of the PouchDB databases.
     *
     * This method is primarily used to ensure that database names are saved for
     * old browsers that do not support `indexeddb.databases()`. This persistence
     * facilitates cleanup processes. Note that PouchDB automatically adds the
     * `_pouch_` prefix to database names.
     *
     * @returns {Promise<void>}
     */

  }, {
    key: "persistDatabasesNames",
    value: function () {
      var _persistDatabasesNames = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
        var dbNames, pouchDbNames;
        return _regenerator.default.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                dbNames = Object.keys(this.pouches);
                pouchDbNames = dbNames.map(function (dbName) {
                  return "_pouch_".concat(dbName);
                });
                _context14.next = 4;
                return this.storage.persistDatabasesNames(pouchDbNames);

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function persistDatabasesNames() {
        return _persistDatabasesNames.apply(this, arguments);
      }

      return persistDatabasesNames;
    }()
  }]);
  return PouchManager;
}();

var _default = PouchManager;
exports["default"] = _default;

}),
"./node_modules/cozy-pouch-link/dist/files.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.queryFileById = exports.TYPE_FILE = exports.TYPE_DIRECTORY = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _cozyClient = __webpack_require__("./node_modules/cozy-client/dist/index.js");

var defaultFetchPolicy = _cozyClient.fetchPolicies.olderThan(5 * 60 * 1000); // 5 min


var TYPE_DIRECTORY = 'directory';
exports.TYPE_DIRECTORY = TYPE_DIRECTORY;
var TYPE_FILE = 'file';
exports.TYPE_FILE = TYPE_FILE;

var queryFileById = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(client, id) {
    var queryOpts;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            queryOpts = {
              as: "io.cozy.files/".concat(id),
              fetchPolicy: defaultFetchPolicy,
              singleDocData: true
            };
            return _context.abrupt("return", client.query((0, _cozyClient.Q)('io.cozy.files').getById(id), queryOpts));

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function queryFileById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.queryFileById = queryFileById;

}),
"./node_modules/cozy-pouch-link/dist/jsonapi.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireWildcard = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sanitizeJsonApi = exports.sanitized = exports.fromPouchResult = exports.computeFileFullpath = exports.normalizeDoc = exports.normalizeDocs = exports.resetAllPaths = exports.getFilePath = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _cozyClient = _interopRequireWildcard(__webpack_require__("./node_modules/cozy-client/dist/index.js"));

var _omit = _interopRequireDefault(__webpack_require__("./node_modules/lodash/omit.js"));

var _startsWith = _interopRequireDefault(__webpack_require__("./node_modules/lodash/startsWith.js"));

var _helpers = __webpack_require__("./node_modules/cozy-pouch-link/dist/db/helpers.js");

var _files = __webpack_require__("./node_modules/cozy-pouch-link/dist/files.js");

var _logger = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/logger.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * The paths are not stored in CouchDB for files, thus there are not in PouchDB neither.
 * So we keep all the file paths in memory to be able to quickly retrieve them
 * at search time.
 */
var allPaths = new Map();

var getFilePath = function getFilePath(id) {
  return id ? allPaths.get(id) : undefined;
};

exports.getFilePath = getFilePath;

var setFilePath = function setFilePath(id, path) {
  allPaths.set(id, path);
};

var resetAllPaths = function resetAllPaths() {
  allPaths.clear();
};
/**
 * Normalize several PouchDB document
 *
 * @param {CozyClient} client - The CozyClient instance
 * @param {string} doctype - The document's doctype
 * @param {Array<import('./CozyPouchLink').CozyPouchDocument>} docs - The documents to normalize
 */


exports.resetAllPaths = resetAllPaths;

var normalizeDocs = function normalizeDocs(client, doctype, docs) {
  for (var i = docs.length; i >= 0; i--) {
    var doc = docs[i];

    if (!doc) {
      docs.splice(i, 1);
      continue;
    }

    if ((0, _startsWith.default)(doc._id, '_design/')) {
      docs.splice(i, 1);
      continue;
    }

    normalizeDoc(client, doctype, doc);
  }
};
/**
 * Normalize a PouchDB document
 * Note we directly modify the objet rather than creating a new one, as it is
 * much more performant. See commit description for details.
 *
 * @param {CozyClient} client - The CozyClient instance
 * @param {string} doctype - The document's doctype
 * @param {import('./CozyPouchLink').CozyPouchDocument} doc - The document to normalize
 */


exports.normalizeDocs = normalizeDocs;

var normalizeDoc = function normalizeDoc(client, doctype, doc) {
  var id = doc._id || doc.id;
  doc.id = id;
  doc._id = id;
  doc._rev = doc._rev || doc.rev;
  doc._type = doctype;

  if (doc.referenced_by) {
    // TODO: should we remove referenced_by at the doc root?
    // For now, we keep it for safety
    doc.relationships = _objectSpread(_objectSpread({}, doc.relationships), {}, {
      referenced_by: {
        links: undefined,
        data: doc.referenced_by
      }
    });
  }

  if (doc.rev) {
    doc.rev = undefined;
  }

  if (doctype === 'io.cozy.apps') {
    normalizeAppsLinks(client, doctype, doc);
  }

  if (doctype === 'io.cozy.files') {
    computeFileFullpath(client, doc);
  }
};

exports.normalizeDoc = normalizeDoc;

var normalizeAppsLinks = function normalizeAppsLinks(client, doctype, docRef) {
  if (doctype !== 'io.cozy.apps') {
    return;
  }

  var webLink = (0, _cozyClient.generateWebLink)({
    cozyUrl: client.getStackClient().uri,
    slug: docRef.slug,
    subDomainType: client.capabilities.flat_subdomains ? 'flat' : 'nested',
    pathname: '',
    hash: '',
    searchParams: []
  });
  docRef.links = {
    self: "/apps/".concat(docRef.slug),
    related: webLink,
    icon: "/apps/".concat(docRef.slug, "/icon/").concat(docRef.version)
  };
};

var buildPathWithName = function buildPathWithName(parentPath, fileName) {
  var hasTrailingSlash = parentPath.substr(-1) === '/';
  var path = hasTrailingSlash ? "".concat(parentPath).concat(fileName) : "".concat(parentPath, "/").concat(fileName);
  return path;
};
/**
 * Compute paths for files
 *
 * There are several ways to get a path:
 *   - It is already defined in the file
 *   - The file path exists in memory
 *   - The directory path exists in memory
 *   - The directory path is retrieved from db
 *
 * @param { CozyClient} client - The cozy client instance
 * @param { import('cozy-client/types/types').IOCozyFile} file - The file to compute path
 * @returns {Promise<import('cozy-client/types/types').IOCozyFile>} the completed file with path
 */


var computeFileFullpath = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(client, file) {
    var _file$path, newPath, filePath, parentPath, builtPath, path, _yield$queryFileById, parentDir, _path;

    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(file.type === _files.TYPE_DIRECTORY)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", file);

          case 2:
            if (!file.path) {
              _context.next = 10;
              break;
            }

            if (!((_file$path = file.path) !== null && _file$path !== void 0 && _file$path.includes(file.name))) {
              _context.next = 6;
              break;
            }

            setFilePath(file._id, file.path);
            return _context.abrupt("return", file);

          case 6:
            newPath = buildPathWithName(file.path, file.name);
            setFilePath(file._id, newPath);
            file.path = newPath;
            return _context.abrupt("return", file);

          case 10:
            filePath = getFilePath(file._id);
            parentPath = getFilePath(file.dir_id);

            if (!(parentPath && filePath)) {
              _context.next = 17;
              break;
            }

            // Check if file path is up to date
            builtPath = buildPathWithName(parentPath, file.name);

            if (filePath !== builtPath) {
              setFilePath(file._id, builtPath);
            }

            file.path = builtPath;
            return _context.abrupt("return", file);

          case 17:
            if (!parentPath) {
              _context.next = 22;
              break;
            }

            // Parent path exists in memory: use it to compute file path and save in memory
            path = buildPathWithName(parentPath, file.name);
            setFilePath(file._id, path);
            file.path = path;
            return _context.abrupt("return", file);

          case 22:
            if (file.dir_id) {
              _context.next = 25;
              break;
            }

            _logger.default.warn("Missing dir_id for file ".concat(file._id));

            return _context.abrupt("return", file);

          case 25:
            _context.next = 27;
            return (0, _files.queryFileById)(client, file.dir_id);

          case 27:
            _yield$queryFileById = _context.sent;
            parentDir = _yield$queryFileById.data;

            if (parentDir !== null && parentDir !== void 0 && parentDir.path) {
              _path = buildPathWithName(parentDir.path, file.name);
              file.path = _path; // Add the computed paths in memory

              setFilePath(file.dir_id, parentDir.path);
              setFilePath(file._id, _path);
            }

            return _context.abrupt("return", file);

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function computeFileFullpath(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.computeFileFullpath = computeFileFullpath;

var fromPouchResult = function fromPouchResult(_ref2) {
  var res = _ref2.res,
      withRows = _ref2.withRows,
      doctype = _ref2.doctype,
      client = _ref2.client;

  if (!res) {
    return null;
  } // Handle special case for docs with `cozyPouchData`


  var cozyPouchData = (0, _helpers.getCozyPouchData)(res);

  if (cozyPouchData) {
    return {
      data: cozyPouchData
    };
  }

  if (withRows) {
    var docs = res.rows ? res.rows.map(function (row) {
      return row.doc;
    }) : res.docs;
    var offset = res.offset || 0;
    var next = offset + docs.length < res.total_rows || docs.length >= res.limit;
    normalizeDocs(client, doctype, docs);
    var result = {
      data: docs,
      meta: {
        count: docs.length
      },
      skip: offset,
      next: next
    };
    return result;
  } else {
    Array.isArray(res) ? normalizeDocs(client, doctype, res) : normalizeDoc(client, doctype, res);
    return {
      data: res
    };
  }
};

exports.fromPouchResult = fromPouchResult;

var sanitized = function sanitized(doc) {
  return (0, _omit.default)(doc, '_type');
};

exports.sanitized = sanitized;

var sanitizeJsonApi = function sanitizeJsonApi(doc) {
  var docWithoutType = sanitized(doc);
  var sanitizedDoc = (0, _omit.default)(docWithoutType, ['attributes', 'meta']);
  return sanitizedDoc;
};

exports.sanitizeJsonApi = sanitizeJsonApi;

}),
"./node_modules/cozy-pouch-link/dist/replicateOnce.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.replicateOnce = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _fromPairs = _interopRequireDefault(__webpack_require__("./node_modules/lodash/fromPairs.js"));

var _map = _interopRequireDefault(__webpack_require__("./node_modules/lodash/map.js"));

var _startsWith = _interopRequireDefault(__webpack_require__("./node_modules/lodash/startsWith.js"));

var _zip = _interopRequireDefault(__webpack_require__("./node_modules/lodash/zip.js"));

var _logger = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/logger.js"));

var _remote = __webpack_require__("./node_modules/cozy-pouch-link/dist/remote.js");

var _startReplication = __webpack_require__("./node_modules/cozy-pouch-link/dist/startReplication.js");

var _utils = __webpack_require__("./node_modules/cozy-pouch-link/dist/utils.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Process replication once for given PouchManager
 *
 * @param {import('./PouchManager').default} pouchManager - PouchManager that handle the replication
 * @returns {Promise<any>} res
 */
var replicateOnce = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(pouchManager) {
    var doctypes, promises, res, zippedDoctypes, successZippedDoctypes, failedZippedDoctypes, blockingErrors, unblockingErrors, _iterator, _step, unblockingError, _doctype, errors, reasons, doctypeUpdated, doctypeFailed;

    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return pouchManager.isOnline();

          case 2:
            if (_context2.sent) {
              _context2.next = 5;
              break;
            }

            _logger.default.info('PouchManager: The device is offline so the replication has been skipped');

            return _context2.abrupt("return", Promise.resolve());

          case 5:
            _logger.default.info('PouchManager: Starting replication iteration'); // Creating each replication


            pouchManager.replications = (0, _map.default)(pouchManager.pouches, /*#__PURE__*/function () {
              var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(pouch, dbName) {
                var _pouchManager$doctype, _pouchManager$doctype2;

                var doctype, replicationOptions, getReplicationURL, initialReplication, replicationFilter, isSharedDrive, seq, lastSeq, res;
                return _regenerator.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        doctype = (0, _utils.getDoctypeFromDatabaseName)(dbName); // Use optional chaining and nullish coalescing instead of get

                        replicationOptions = (_pouchManager$doctype = (_pouchManager$doctype2 = pouchManager.doctypesReplicationOptions) === null || _pouchManager$doctype2 === void 0 ? void 0 : _pouchManager$doctype2[doctype]) !== null && _pouchManager$doctype !== void 0 ? _pouchManager$doctype : {};

                        _logger.default.info('PouchManager: Starting replication for ' + doctype);

                        getReplicationURL = function getReplicationURL() {
                          return pouchManager.getReplicationURL(doctype, replicationOptions);
                        };

                        initialReplication = pouchManager.getSyncStatus(doctype) !== 'synced';

                        replicationFilter = function replicationFilter(doc) {
                          return !(0, _startsWith.default)(doc._id, '_design');
                        };

                        isSharedDrive = Boolean(replicationOptions.driveId);
                        seq = '';

                        if (!(initialReplication && !isSharedDrive)) {
                          _context.next = 16;
                          break;
                        }

                        _context.next = 11;
                        return (0, _remote.fetchRemoteLastSequence)(getReplicationURL());

                      case 11:
                        lastSeq = _context.sent;
                        _context.next = 14;
                        return pouchManager.storage.persistDoctypeLastSequence(doctype, lastSeq);

                      case 14:
                        _context.next = 22;
                        break;

                      case 16:
                        _context.next = 18;
                        return pouchManager.storage.getDoctypeLastSequence(doctype);

                      case 18:
                        _context.t0 = _context.sent;

                        if (_context.t0) {
                          _context.next = 21;
                          break;
                        }

                        _context.t0 = '';

                      case 21:
                        seq = _context.t0;

                      case 22:
                        replicationOptions.initialReplication = initialReplication;
                        replicationOptions.filter = replicationFilter;
                        replicationOptions.since = seq;
                        replicationOptions.doctype = doctype;

                        if (pouchManager.options.onDoctypeSyncStart) {
                          pouchManager.options.onDoctypeSyncStart(doctype);
                        }

                        _context.next = 29;
                        return (0, _startReplication.startReplication)(pouch, replicationOptions, getReplicationURL, pouchManager.storage, pouchManager.client);

                      case 29:
                        res = _context.sent;

                        if (!(seq && !isSharedDrive)) {
                          _context.next = 33;
                          break;
                        }

                        _context.next = 33;
                        return pouchManager.storage.destroyDoctypeLastSequence(doctype);

                      case 33:
                        _context.next = 35;
                        return pouchManager.updateSyncInfo(doctype);

                      case 35:
                        pouchManager.checkToWarmupDoctype(doctype, replicationOptions);

                        if (pouchManager.options.onDoctypeSyncEnd) {
                          pouchManager.options.onDoctypeSyncEnd(doctype);
                        }

                        return _context.abrupt("return", res);

                      case 38:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function (_x2, _x3) {
                return _ref2.apply(this, arguments);
              };
            }()); // Waiting on each replication

            doctypes = Object.keys(pouchManager.pouches);
            promises = Object.values(pouchManager.replications);
            _context2.prev = 9;
            _context2.next = 12;
            return (0, _utils.allSettled)(promises);

          case 12:
            res = _context2.sent;

            if (true) {
              _logger.default.info('PouchManager: Replication ended');
            }

            if (!pouchManager.options.onSync) {
              _context2.next = 51;
              break;
            }

            zippedDoctypes = (0, _zip.default)(doctypes, res);
            successZippedDoctypes = zippedDoctypes.filter(function (d) {
              return d[1].status === 'fulfilled';
            }).map(function (d) {
              return [d[0], d[1].value];
            });
            failedZippedDoctypes = zippedDoctypes.filter(function (d) {
              return d[1].status === 'rejected';
            }).map(function (d) {
              return [d[0], d[1].reason];
            });
            blockingErrors = res.filter(function (r) {
              return r.status === 'rejected' && !(0, _remote.isDatabaseNotFoundError)(r.reason) && !(0, _remote.isDatabaseUnradableError)(r.reason);
            });
            unblockingErrors = failedZippedDoctypes.filter(function (r) {
              return (0, _remote.isDatabaseNotFoundError)(r[1]) || (0, _remote.isDatabaseUnradableError)(r[1]);
            });
            _iterator = _createForOfIteratorHelper(unblockingErrors);
            _context2.prev = 21;

            _iterator.s();

          case 23:
            if ((_step = _iterator.n()).done) {
              _context2.next = 30;
              break;
            }

            unblockingError = _step.value;
            _doctype = unblockingError[0]; // @ts-ignore

            _context2.next = 28;
            return pouchManager.updateSyncInfo(_doctype, 'not_complete');

          case 28:
            _context2.next = 23;
            break;

          case 30:
            _context2.next = 35;
            break;

          case 32:
            _context2.prev = 32;
            _context2.t0 = _context2["catch"](21);

            _iterator.e(_context2.t0);

          case 35:
            _context2.prev = 35;

            _iterator.f();

            return _context2.finish(35);

          case 38:
            if (!(blockingErrors.length > 0)) {
              _context2.next = 45;
              break;
            }

            errors = blockingErrors.map(function (err) {
              return err.reason;
            });
            reasons = errors.join('\n');

            _logger.default.debug("ReplicateOnce's promises failed with the following errors", reasons); // @ts-ignore
            // eslint-disable-next-line no-undef


            throw new AggregateError(errors, 'Failed with blocking errors');

          case 45:
            _logger.default.debug("ReplicateOnce's promises succeed with no blocking errors");

          case 46:
            doctypeUpdated = (0, _fromPairs.default)(successZippedDoctypes);
            doctypeFailed = (0, _fromPairs.default)(failedZippedDoctypes);

            _logger.default.debug('Doctypes replications in error: ', Object.keys(doctypeFailed));

            _logger.default.debug('Doctypes replications in success: ', Object.keys(doctypeUpdated));

            pouchManager.options.onSync(doctypeUpdated);

          case 51:
            // @ts-ignore
            res.cancel = pouchManager.cancelCurrentReplications;
            return _context2.abrupt("return", res);

          case 55:
            _context2.prev = 55;
            _context2.t1 = _context2["catch"](9);
            pouchManager.handleReplicationError(_context2.t1);

          case 58:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[9, 55], [21, 32, 35, 38]]);
  }));

  return function replicateOnce(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.replicateOnce = replicateOnce;

}),
"./node_modules/cozy-pouch-link/dist/startReplication.js": (function (__unused_webpack_module, exports, __webpack_require__) {


var _interopRequireDefault = __webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.sharedDriveReplicateAllDocs = exports.replicateAllDocs = exports.startReplication = void 0;

var _regenerator = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _helpers = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/helpers.js"));

var _startsWith = _interopRequireDefault(__webpack_require__("./node_modules/lodash/startsWith.js"));

var _logger = _interopRequireDefault(__webpack_require__("./node_modules/cozy-pouch-link/dist/logger.js"));

var _remote = __webpack_require__("./node_modules/cozy-pouch-link/dist/remote.js");

var _cozyClient = _interopRequireDefault(__webpack_require__("./node_modules/cozy-client/dist/index.js"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var isDesignDocument = _helpers.default.isDesignDocument,
    isDeletedDocument = _helpers.default.isDeletedDocument;
var BATCH_SIZE = 1000; // we have mostly small documents

var humanTimeDelta = function humanTimeDelta(timeMs) {
  var cur = timeMs;
  var unitIndex = 0;
  var str = '';

  while (cur >= TIME_UNITS[unitIndex][1]) {
    var unit = TIME_UNITS[unitIndex];
    var int = Math.round(cur / unit[1]);
    var rest = cur % unit[1];
    str = "".concat(rest).concat(unit[0]) + str;
    cur = int;
    unitIndex++;
  }

  var lastUnit = TIME_UNITS[unitIndex];
  str = "".concat(cur).concat(lastUnit[0]) + str;
  return str;
};
/** @type {[string, number][]} */


var TIME_UNITS = [['ms', 1000], ['s', 60], ['m', 60], ['h', 24]];
/**
 * startReplication - Create a cancellable promise for replication with default options
 *
 * @private
 * @param {object} pouch                 Pouch database instance
 * @param {object} replicationOptions Any option supported by the Pouch replication API (https://pouchdb.com/api.html#replication)
 * @param {string} replicationOptions.strategy The direction of the replication. Can be "fromRemote",  "toRemote" or "sync"
 * @param {boolean} replicationOptions.initialReplication Whether or not this is an initial replication
 * @param {string} [replicationOptions.driveId] - ID of the shared drive to replicate (enables shared drive mode)
 * @param {string} replicationOptions.doctype The doctype to replicate
 * @param {import('cozy-client/types/types').Query[]} replicationOptions.warmupQueries The queries to warmup
 * @param {Function} getReplicationURL A function that should return the remote replication URL
 * @param {import('./localStorage').PouchLocalStorage} storage Methods to access local storage
 * @param {CozyClient} client - Cozy client instance (required for shared drive replication)
 *
 * @returns {import('./types').CancelablePromise} A cancelable promise that resolves at the end of the replication
 */

var startReplication = function startReplication(pouch, replicationOptions, getReplicationURL, storage, client) {
  var replication;
  var docs = {};
  var start = new Date();
  /** @type {import('./types').CancelablePromise} */

  var promise = new Promise(function (resolve, reject) {
    var url = getReplicationURL();
    var strategy = replicationOptions.strategy,
        initialReplication = replicationOptions.initialReplication,
        warmupQueries = replicationOptions.warmupQueries,
        doctype = replicationOptions.doctype,
        customReplicationOptions = (0, _objectWithoutProperties2.default)(replicationOptions, ["strategy", "initialReplication", "warmupQueries", "doctype"]);

    var options = _objectSpread(_objectSpread({
      batch_size: BATCH_SIZE
    }, customReplicationOptions), {}, {
      selector: {
        cozyLocalOnly: {
          $exists: false
        }
      }
    });

    if (replicationOptions.driveId) {
      ;
      (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _docs;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return sharedDriveReplicateAllDocs({
                  pouch: pouch,
                  storage: storage,
                  doctype: doctype,
                  client: client,
                  initialReplication: initialReplication,
                  driveId: replicationOptions.driveId
                });

              case 3:
                _docs = _context.sent;
                resolve(_docs);
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                reject(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
      return;
    } else {
      if (initialReplication && strategy !== 'toRemote') {
        ;
        (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
          var end;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;

                  // For the first remote->local replication, we manually replicate all docs
                  // as it avoids to replicate all revs history, which can lead to
                  // performances issues
                  _logger.default.info("PouchManager: Start first replication for ".concat(doctype));

                  _context2.next = 4;
                  return replicateAllDocs({
                    db: pouch,
                    baseUrl: url,
                    doctype: doctype,
                    storage: storage
                  });

                case 4:
                  docs = _context2.sent;

                  _logger.default.info("PouchManager: End first replication for ".concat(doctype));

                  end = new Date();

                  if (true) {
                    _logger.default.info("PouchManager: initial replication with all_docs for ".concat(url, " took ").concat(humanTimeDelta(end.getTime() - start.getTime())));
                  }

                  return _context2.abrupt("return", resolve(docs));

                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](0);
                  return _context2.abrupt("return", reject(_context2.t0));

                case 14:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[0, 11]]);
        }))();
        return;
      }

      if (strategy === 'fromRemote') {
        replication = pouch.replicate.from(url, options);
      } else if (strategy === 'toRemote') {
        replication = pouch.replicate.to(url, options);
      } else {
        replication = pouch.sync(url, options);
      }

      replication.on('change', function (infos) {
        //! Since we introduced the concept of strategy we can use
        // PouchDB.replicate or PouchDB.sync. But both don't share the
        // same API for the change's event.
        // See https://pouchdb.com/api.html#replication
        // and https://pouchdb.com/api.html#sync (see example response)
        var change = infos.change ? infos.change : infos;

        if (change.docs) {
          change.docs.forEach(function (doc) {
            if (!isDesignDocument(doc) && !isDeletedDocument(doc)) {
              docs[doc._id] = doc;
            }
          });
        }
      });
      replication.on('error', reject).on('complete', function () {
        var end = new Date();

        if (true) {
          _logger.default.info("PouchManager: replication for ".concat(url, " took ").concat(humanTimeDelta(end.getTime() - start.getTime())));
        }

        resolve(Object.values(docs));
      });
    }
  });

  var cancel = function cancel() {
    if (replication) {
      replication.cancel();
    }
  };

  promise.cancel = cancel;
  return promise;
};

exports.startReplication = startReplication;

var filterDocs = function filterDocs(docs) {
  return docs.map(function (doc) {
    return doc.doc;
  }).filter(function (doc) {
    return !doc._deleted && !(0, _startsWith.default)(doc._id, '_design');
  });
};
/**
 * Replicate all docs locally from a remote URL.
 *
 * It uses the _all_docs view, and bulk insert the docs.
 * Note it saves the last replicated _id for each run and
 * starts from there in case the process stops before the end.
 *
 * @param {object} params - The replications parameters
 * @param {object} params.db - Pouch instance
 * @param {string} params.baseUrl - The remote instance
 * @param {string} params.doctype - The doctype to replicate
 * @param {import('./localStorage').PouchLocalStorage} params.storage - Methods to access local storage
 * @returns {Promise<Array>} The retrieved documents
 */


var replicateAllDocs = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(_ref3) {
    var db, baseUrl, doctype, storage, remoteUrlAllDocs, batchSize, hasMore, startDocId, docs, res, _res, filteredDocs;

    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            db = _ref3.db, baseUrl = _ref3.baseUrl, doctype = _ref3.doctype, storage = _ref3.storage;
            remoteUrlAllDocs = new URL("".concat(baseUrl, "/_all_docs"));
            batchSize = BATCH_SIZE;
            hasMore = true;
            _context3.next = 6;
            return storage.getLastReplicatedDocID(doctype);

          case 6:
            startDocId = _context3.sent;
            // Get last replicated _id in localStorage
            docs = [];

          case 8:
            if (!hasMore) {
              _context3.next = 42;
              break;
            }

            if (startDocId) {
              _context3.next = 26;
              break;
            }

            _context3.next = 12;
            return (0, _remote.fetchRemoteInstance)(remoteUrlAllDocs, {
              limit: batchSize,
              include_docs: true
            });

          case 12:
            res = _context3.sent;
            docs = filterDocs(res.rows);

            if (!(docs.length === 0)) {
              _context3.next = 18;
              break;
            }

            hasMore = false;
            _context3.next = 24;
            break;

          case 18:
            startDocId = docs[docs.length - 1]._id;

            if (docs.length < batchSize) {
              hasMore = false;
            }

            _context3.next = 22;
            return _helpers.default.insertBulkDocs(db, docs);

          case 22:
            _context3.next = 24;
            return storage.persistLastReplicatedDocID(doctype, startDocId);

          case 24:
            _context3.next = 40;
            break;

          case 26:
            _context3.next = 28;
            return (0, _remote.fetchRemoteInstance)(remoteUrlAllDocs, {
              include_docs: true,
              limit: batchSize,
              startkey_docid: startDocId
            });

          case 28:
            _res = _context3.sent;
            filteredDocs = filterDocs(_res.rows);

            if (!(filteredDocs.length < 2)) {
              _context3.next = 32;
              break;
            }

            return _context3.abrupt("return", docs);

          case 32:
            filteredDocs.shift(); // Remove first element, already included in previous request

            startDocId = filteredDocs[filteredDocs.length - 1]._id;
            _context3.next = 36;
            return _helpers.default.insertBulkDocs(db, filteredDocs);

          case 36:
            _context3.next = 38;
            return storage.persistLastReplicatedDocID(doctype, startDocId);

          case 38:
            docs = docs.concat(filteredDocs);

            if (_res.rows.length < batchSize) {
              hasMore = false;
            }

          case 40:
            _context3.next = 8;
            break;

          case 42:
            return _context3.abrupt("return", docs);

          case 43:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function replicateAllDocs(_x) {
    return _ref4.apply(this, arguments);
  };
}();
/**
 * Replicates all documents from a shared drive to a local PouchDB instance.
 * This function fetches documents in batches from a twake drive shared drive
 * and replicates them to the local database, maintaining replication state
 * to allow for incremental updates.
 * We do not have an _all_docs view for shared drives, so we use the fetchChanges method.
 *
 * @param {Object} params - The parameters object
 * @param {string} params.driveId - The unique identifier of the shared drive to replicate from
 * @param {Object} params.pouch - The local PouchDB instance to replicate documents to
 * @param {Object} params.storage - Storage interface for persisting replication state
 * @param {string} params.doctype - The document type being replicated (e.g., 'io.cozy.files')
 * @param {boolean} params.initialReplication - Whether this is an initial replication
 * @param {CozyClient} params.client - CozyClient instance for fetching remote documents
 * @returns {Promise<Array>} A promise that resolves to an array of all replicated documents
 * @throws {Error} Throws an error if driveId is not provided
 */


exports.replicateAllDocs = replicateAllDocs;

var sharedDriveReplicateAllDocs = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(_ref5) {
    var driveId, pouch, storage, _ref5$initialReplicat, initialReplication, doctype, client, docs, hasMore, doctypeLastSequence, _yield$client$collect, newLastSeq, results, pending, toDelete, toInsert, allDocsWithDriveId, _iterator, _step, doc, docWithDriveId, updatedToDeleteDocs, toBulkDelete;

    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            driveId = _ref5.driveId, pouch = _ref5.pouch, storage = _ref5.storage, _ref5$initialReplicat = _ref5.initialReplication, initialReplication = _ref5$initialReplicat === void 0 ? false : _ref5$initialReplicat, doctype = _ref5.doctype, client = _ref5.client;

            if (driveId) {
              _context4.next = 3;
              break;
            }

            throw new Error('sharedDriveReplicateAllDocs: driveId is required');

          case 3:
            docs = [];
            hasMore = true;
            _context4.next = 7;
            return storage.getDoctypeLastSequence(doctype);

          case 7:
            doctypeLastSequence = _context4.sent;

          case 8:
            if (!hasMore) {
              _context4.next = 38;
              break;
            }

            _context4.next = 11;
            return client.collection('io.cozy.files', {
              driveId: driveId
            }).fetchChanges(_objectSpread({
              include_docs: true
            }, doctypeLastSequence ? {
              since: doctypeLastSequence
            } : {}), _objectSpread(_objectSpread({
              includeFilePath: false
            }, initialReplication ? {
              skipDeleted: true,
              skipTrashed: true
            } : {
              skipDeleted: false,
              skipTrashed: false
            }), {}, {
              limit: BATCH_SIZE
            }));

          case 11:
            _yield$client$collect = _context4.sent;
            newLastSeq = _yield$client$collect.newLastSeq;
            results = _yield$client$collect.results;
            pending = _yield$client$collect.pending;
            toDelete = [];
            toInsert = [];
            allDocsWithDriveId = [];
            _iterator = _createForOfIteratorHelper(results);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                doc = _step.value;
                docWithDriveId = doc.doc;
                docWithDriveId.driveId = driveId;
                allDocsWithDriveId.push(docWithDriveId);

                if (doc.doc._deleted) {
                  toDelete.push(doc.doc);
                } else {
                  toInsert.push(docWithDriveId);
                }
              } // FIXME this is a workaround to allow to delete documents from the shared drive
              // changes
              // PouchDB.bulkDocs ignores _deleted documents with revision newer than the existing
              // document
              // The workaround is to get documents from PouchDB with correct revision and delete them
              // see https://github.com/pouchdb/pouchdb/issues/7841

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            if (!(toDelete.length > 0)) {
              _context4.next = 29;
              break;
            }

            _context4.next = 23;
            return pouch.bulkGet({
              docs: toDelete.map(function (d) {
                return {
                  id: d._id
                };
              })
            });

          case 23:
            updatedToDeleteDocs = _context4.sent;
            toBulkDelete = updatedToDeleteDocs.results.map(function (doc) {
              var _doc$docs, _doc$docs$;

              return _objectSpread(_objectSpread({}, doc === null || doc === void 0 ? void 0 : (_doc$docs = doc.docs) === null || _doc$docs === void 0 ? void 0 : (_doc$docs$ = _doc$docs[0]) === null || _doc$docs$ === void 0 ? void 0 : _doc$docs$.ok), {}, {
                _deleted: true
              });
            }).filter(function (doc) {
              return doc._id;
            });

            if (!(toBulkDelete.length > 0)) {
              _context4.next = 29;
              break;
            }

            _context4.next = 28;
            return pouch.bulkDocs(toBulkDelete);

          case 28:
            if (toBulkDelete.length !== toDelete.length) {
              _logger.default.error("sharedDriveReplicateAllDocs: Error deleting documents ".concat(toDelete.map(function (d) {
                return d._id;
              }).join(', ')));
            }

          case 29:
            doctypeLastSequence = newLastSeq;
            _context4.next = 32;
            return _helpers.default.insertBulkDocs(pouch, toInsert);

          case 32:
            _context4.next = 34;
            return storage.persistDoctypeLastSequence(doctype, doctypeLastSequence);

          case 34:
            docs = docs.concat(allDocsWithDriveId);
            hasMore = !!pending;
            _context4.next = 8;
            break;

          case 38:
            return _context4.abrupt("return", docs);

          case 39:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function sharedDriveReplicateAllDocs(_x2) {
    return _ref6.apply(this, arguments);
  };
}();

exports.sharedDriveReplicateAllDocs = sharedDriveReplicateAllDocs;

}),

});
//# sourceMappingURL=cozy.279cbc7c0d29f61f.hot-update.js.map