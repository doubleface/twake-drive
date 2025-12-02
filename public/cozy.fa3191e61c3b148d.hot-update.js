"use strict";
self["webpackHotUpdatecozy_drive"]("cozy", {
"./node_modules/cozy-sharing/dist/stylesheet.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1764602288449
        var cssReload = (__webpack_require__("./node_modules/@rspack/core/dist/cssExtractHmr.js")/* .cssReload */.cssReload)(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

}),
"./node_modules/cozy-sharing/dist/state.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SHARING_TYPE: () => (SHARING_TYPE),
  addSharing: () => (addSharing),
  addSharingLink: () => (addSharingLink),
  canReshare: () => (canReshare),
  "default": () => (__WEBPACK_DEFAULT_EXPORT__),
  getDocumentPermissions: () => (getDocumentPermissions),
  getDocumentSharing: () => (getDocumentSharing),
  getDocumentSharingType: () => (getDocumentSharingType),
  getExternalSharingIds: () => (getExternalSharingIds),
  getOwner: () => (getOwner),
  getPermissionDocIds: () => (getPermissionDocIds),
  getRecipients: () => (getRecipients),
  getRecipientsWithGroups: () => (getRecipientsWithGroups),
  getSharedDocIds: () => (getSharedDocIds),
  getSharedDocIdsBySharings: () => (getSharedDocIdsBySharings),
  getSharedDriveSharingType: () => (getSharedDriveSharingType),
  getSharedParentPath: () => (getSharedParentPath),
  getSharingById: () => (getSharingById),
  getSharingDocIds: () => (getSharingDocIds),
  getSharingForSelf: () => (getSharingForSelf),
  getSharingLink: () => (getSharingLink),
  getSharingType: () => (getSharingType),
  hasSharedChild: () => (hasSharedChild),
  hasSharedParent: () => (hasSharedParent),
  isOwner: () => (isOwner),
  isReadOnlySharing: () => (isReadOnlySharing),
  isSharedDrive: () => (isSharedDrive),
  matchingInstanceName: () => (matchingInstanceName),
  receivePaths: () => (receivePaths),
  receiveSharings: () => (receiveSharings),
  revokeGroup: () => (revokeGroup),
  revokeRecipient: () => (revokeRecipient),
  revokeSelf: () => (revokeSelf),
  revokeSharingLink: () => (revokeSharingLink),
  updateSharing: () => (updateSharing),
  updateSharingLink: () => (updateSharingLink)
});
/* ESM import */var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* ESM import */var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* ESM import */var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* ESM import */var lodash_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/lodash/get.js");
/* ESM import */var lodash_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var cozy_flags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cozy-flags/dist/index.browser.js");




function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



var RECEIVE_SHARINGS = 'RECEIVE_SHARINGS';
var ADD_SHARING = 'ADD_SHARING';
var UPDATE_SHARING = 'UPDATE_SHARING';
var REVOKE_RECIPIENT = 'REVOKE_RECIPIENT';
var REVOKE_GROUP = 'REVOKE_GROUP';
var REVOKE_SELF = 'REVOKE_SELF';
var ADD_SHARING_LINK = 'ADD_SHARING_LINK';
var UPDATE_SHARING_LINK = 'UPDATE_SHARING_LINK';
var REVOKE_SHARING_LINK = 'REVOKE_SHARING_LINK';
var RECEIVE_PATHS = 'RECEIVE_PATHS';
var SHARING_TYPE = {
  TWO_WAY: 'two-way',
  ONE_WAY: 'one-way'
}; // actions

var receiveSharings = function receiveSharings(_ref) {
  var instanceUri = _ref.instanceUri,
      _ref$sharings = _ref.sharings,
      sharings = _ref$sharings === void 0 ? [] : _ref$sharings,
      _ref$permissions = _ref.permissions,
      permissions = _ref$permissions === void 0 ? [] : _ref$permissions,
      _ref$apps = _ref.apps,
      apps = _ref$apps === void 0 ? [] : _ref$apps;
  return {
    type: RECEIVE_SHARINGS,
    data: {
      sharings: sharings.filter(function (s) {
        return (// Shared drives without recipients are valid and should be kept
          (isSharingADrive(s) || !areAllRecipientsRevoked(s)) && !hasBeenSelfRevoked(s, instanceUri)
        );
      }),
      permissions: permissions,
      apps: apps
    }
  };
};
var addSharing = function addSharing(data, path) {
  return {
    type: ADD_SHARING,
    data: data,
    path: path
  };
};
var updateSharing = function updateSharing(sharing) {
  return {
    type: UPDATE_SHARING,
    sharing: sharing
  };
};
var revokeRecipient = function revokeRecipient(sharing, index, path) {
  return {
    type: REVOKE_RECIPIENT,

    /* We set revoked status to the revoked member.
    We can't just simply remove it, 'cauz we use the index
    to remove members..
    */
    sharing: _objectSpread(_objectSpread({}, sharing), {}, {
      attributes: _objectSpread(_objectSpread({}, sharing.attributes), {}, {
        members: sharing.attributes.members.map(function (m, idx) {
          if (idx === index) {
            return _objectSpread(_objectSpread({}, m), {}, {
              status: 'revoked'
            });
          }

          return m;
        })
      })
    }),
    path: path
  };
};
var revokeGroup = function revokeGroup(sharing, index, path) {
  return {
    type: REVOKE_GROUP,

    /* We can't just simply remove a group,
    because we use the index to remove the other group
    */
    sharing: _objectSpread(_objectSpread({}, sharing), {}, {
      attributes: _objectSpread(_objectSpread({}, sharing.attributes), {}, {
        groups: sharing.attributes.groups.map(function (g, idx) {
          if (idx === index) {
            return _objectSpread(_objectSpread({}, g), {}, {
              revoked: true
            });
          }

          return g;
        })
      })
    }),
    path: path
  };
};
var revokeSelf = function revokeSelf(sharing) {
  return {
    type: REVOKE_SELF,
    sharing: sharing
  };
};
var addSharingLink = function addSharingLink(data) {
  return {
    type: ADD_SHARING_LINK,
    data: data
  };
};
var updateSharingLink = function updateSharingLink(data) {
  return {
    type: UPDATE_SHARING_LINK,
    data: data
  };
};
var revokeSharingLink = function revokeSharingLink(permissions) {
  return {
    type: REVOKE_SHARING_LINK,
    permissions: permissions
  };
};
var receivePaths = function receivePaths(paths) {
  return {
    type: RECEIVE_PATHS,
    paths: paths
  };
};
var matchingInstanceName = function matchingInstanceName() {
  var instanceUri = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (shareMember) {
    return shareMember.instance && shareMember.instance.toString().toLowerCase() === instanceUri.toLowerCase();
  };
}; // reducers

var byIdInitialState = {
  sharings: [],
  permissions: []
};

var isItemEmpty = function isItemEmpty(item) {
  return item.sharings.length === 0 && item.permissions.length === 0;
};

var updateByIdItem = function updateByIdItem(state, id, updater) {
  var byIdState = state[id],
      rest = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(state, [id].map(_toPropertyKey));

  var update = updater(byIdState || byIdInitialState);
  return isItemEmpty(update) ? rest : _objectSpread(_objectSpread({}, rest), {}, (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, id, update));
};

var indexSharing = function indexSharing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sharing = arguments.length > 1 ? arguments[1] : undefined;
  var sharedDocs = getSharedDocIds(sharing);
  return sharedDocs.reduce(function (byId, id) {
    var updatedByIdItem = updateByIdItem(byId, id, function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        // todo index by id instead of having an array
        sharings: Object.values(state.sharings).includes(sharing.id) ? (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.sharings) : [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.sharings), [sharing.id])
      });
    });
    return updatedByIdItem;
  }, state);
};

var forgetSharing = function forgetSharing() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var sharing = arguments.length > 1 ? arguments[1] : undefined;
  return getSharedDocIds(sharing).reduce(function (byId, id) {
    return updateByIdItem(byId, id, function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        sharings: state.sharings.filter(function (sid) {
          return sid !== sharing.id;
        })
      });
    });
  }, state);
};

var indexPermission = function indexPermission() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var perm = arguments.length > 1 ? arguments[1] : undefined;
  return getSharedDocIds(perm).reduce(function (byId, id) {
    return updateByIdItem(byId, id, function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        permissions: [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.permissions), [perm.id])
      });
    });
  }, state);
};

var forgetPermission = function forgetPermission() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var permission = arguments.length > 1 ? arguments[1] : undefined;
  return getSharedDocIds(permission).reduce(function (byId, id) {
    return updateByIdItem(byId, id, function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        permissions: state.permissions.filter(function (pid) {
          return pid !== permission.id;
        })
      });
    });
  }, state);
};

var byDocId = function byDocId() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case RECEIVE_SHARINGS:
      // eslint-disable-next-line no-case-declarations
      var intermediaryState = action.data.sharings.reduce(function (byId, sharing) {
        return indexSharing(byId, sharing);
      }, state);
      return action.data.permissions.reduce(function (byId, perm) {
        return indexPermission(byId, perm);
      }, intermediaryState);

    case ADD_SHARING:
      return indexSharing(state, action.data);

    case REVOKE_GROUP:
    case REVOKE_RECIPIENT:
    case UPDATE_SHARING:
      if (!isSharingADrive(action.sharing) && areAllRecipientsRevoked(action.sharing)) {
        return forgetSharing(state, action.sharing);
      }

      return state;

    case ADD_SHARING_LINK:
      if (!Array.isArray(action.data)) {
        return indexPermission(state, action.data);
      } else {
        var clonedState = _objectSpread({}, state);

        action.data.map(function (s) {
          clonedState = _objectSpread({}, indexPermission(clonedState, s));
        });
        return clonedState;
      }

    case REVOKE_SELF:
      return forgetSharing(state, action.sharing);

    case REVOKE_SHARING_LINK:
      return action.permissions.reduce(function (byId, perm) {
        return forgetPermission(byId, perm);
      }, state);

    default:
      return state;
  }
};

var permissions = function permissions() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case RECEIVE_SHARINGS:
      return action.data.permissions;

    case ADD_SHARING_LINK:
      if (!Array.isArray(action.data)) {
        return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [action.data]);
      } else {
        return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(action.data));
      }

    case UPDATE_SHARING_LINK:
      return state.map(function (p) {
        return p.id === action.data.id ? action.data : p;
      });

    case REVOKE_SHARING_LINK:
      // eslint-disable-next-line no-case-declarations
      var permIds = action.permissions.map(function (p) {
        return p.id;
      });
      return state.filter(function (p) {
        return permIds.indexOf(p.id) === -1;
      });

    default:
      return state;
  }
};

var apps = function apps() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case RECEIVE_SHARINGS:
      return action.data.apps;

    default:
      return state;
  }
};

var sharings = function sharings() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case RECEIVE_SHARINGS:
      return action.data.sharings;

    case ADD_SHARING:
      // be sure that we're not adding the sharing twice
      // can be the case if we launch the create and
      // receive the realtime in the same time
      // TODO Index by index...
      // eslint-disable-next-line
      var filtered_state = state.filter(function (s) {
        return s.id !== action.data.id;
      });
      return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(filtered_state), [action.data]);

    case UPDATE_SHARING:
    case REVOKE_GROUP:
    case REVOKE_RECIPIENT:
      return state.map(function (s) {
        return s.id !== action.sharing.id ? s : action.sharing;
      });

    case REVOKE_SELF:
      return state.filter(function (s) {
        return s.id !== action.sharing.id;
      });

    default:
      return state;
  }
};

var sharedPaths = function sharedPaths() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case RECEIVE_PATHS:
      // !TODO Remove after we solved the sharedPaths bugs
      // eslint-disable-next-line
      return action.paths;

    case ADD_SHARING:
      // !TODO Remove after we solved the sharedPaths bugs
      // eslint-disable-next-line
      var newState = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state), [action.path]);
      return newState;

    case REVOKE_GROUP:
    case REVOKE_RECIPIENT:
      if (!isSharingADrive(action.sharing) && areAllRecipientsRevoked(action.sharing)) {
        return state.filter(function (p) {
          return p !== action.path;
        });
      }

      return state;

    default:
      return state;
  }
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    byDocId: byDocId(state.byDocId, action),
    sharings: sharings(state.sharings, action),
    permissions: permissions(state.permissions, action),
    apps: apps(state.apps, action),
    sharedPaths: sharedPaths(state.sharedPaths, action)
  };
};

/* ESM default export */ const __WEBPACK_DEFAULT_EXPORT__ = (reducer); // selectors

var isOwner = function isOwner(state, docId) {
  if (state.byDocId[docId] && state.byDocId[docId].sharings.length !== 0) {
    return getSharingById(state, state.byDocId[docId].sharings[0]).attributes.owner === true;
  }

  return true;
};
var isSharedDrive = function isSharedDrive(state, docId) {
  if (state.byDocId[docId] && state.byDocId[docId].sharings.length !== 0) {
    return getSharingById(state, state.byDocId[docId].sharings[0]).attributes.drive === true;
  }

  return false;
};
var canReshare = function canReshare(state, docId, instanceUri) {
  var sharing = getDocumentSharing(state, docId);
  var me = sharing.attributes.members.find(matchingInstanceName(instanceUri));
  return sharing.attributes.open_sharing === true && me && !me.read_only;
};
var getOwner = function getOwner(state, docId) {
  return getRecipients(state, docId).find(function (r) {
    return r.status === 'owner';
  });
};
var getRecipients = function getRecipients(state, docId) {
  var sharings = getDocumentSharings(state, docId);

  if ((0,cozy_flags__WEBPACK_IMPORTED_MODULE_4__["default"])('sharing.show-recipient-groups')) {
    return getRecipientsWithGroups(sharings, docId);
  }

  return getRecipientsWithoutGroups(sharings, docId);
};

var getRecipientType = function getRecipientType(sharing, member, documentType) {
  // If member is read_only, for sure it's one-way
  if (member.read_only) {
    return 'one-way';
  } // Else if it is a shared drive, for sure it's two-way


  if (sharing.drive) {
    return 'two-way';
  } // Else, we keep the legacy way of determining the type
  // because we need to take some time to understand if we can
  // just return 'two-way' or not


  return documentType;
};

var getRecipientsWithoutGroups = function getRecipientsWithoutGroups(sharings, docId) {
  var recipients = sharings.map(function (sharing) {
    var type = getDocumentSharingType(sharing, docId);
    return sharing.attributes.members.map(function (m, idx) {
      return _objectSpread(_objectSpread({}, m), {}, {
        index: "sharing-".concat(sharing.id, "-member-").concat(idx),
        type: getRecipientType(sharing, m, type),
        sharingId: sharing.id,
        memberIndex: idx,
        avatarPath: "/sharings/".concat(sharing.id, "/recipients/").concat(idx, "/avatar")
      });
    });
  }).reduce(function (acc, member) {
    return acc.concat(member);
  }, []).filter(function (r) {
    return r.status !== 'revoked';
  });

  if (recipients[0] && recipients[0].status === 'owner') {
    return [recipients[0]].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(recipients.filter(function (r) {
      return r.status !== 'owner';
    })));
  }

  return recipients;
};

var getRecipientsWithGroups = function getRecipientsWithGroups(sharings, docId) {
  var recipients = sharings.flatMap(function (sharing) {
    var _sharing$attributes$g;

    var type = getDocumentSharingType(sharing, docId);
    var sharingId = sharing.id;
    var members = sharing.attributes.members.map(function (m, idx) {
      return _objectSpread(_objectSpread({}, m), {}, {
        type: getRecipientType(sharing, m, type),
        sharingId: sharingId,
        index: "sharing-".concat(sharing.id, "-member-").concat(idx),
        memberIndex: idx,
        avatarPath: "/sharings/".concat(sharingId, "/recipients/").concat(idx, "/avatar")
      });
    });
    var groups = ((_sharing$attributes$g = sharing.attributes.groups) === null || _sharing$attributes$g === void 0 ? void 0 : _sharing$attributes$g.map(function (g, idx) {
      return _objectSpread(_objectSpread({}, g), {}, {
        sharingId: sharingId,
        index: "sharing-".concat(sharing.id, "-group-").concat(idx),
        groupIndex: idx,
        owner: members[g.addedBy],
        members: members.filter(function (member) {
          var _member$groups;

          return (_member$groups = member.groups) === null || _member$groups === void 0 ? void 0 : _member$groups.includes(idx);
        })
      });
    }).filter(function (g) {
      return !g.revoked;
    })) || [];
    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(members.filter(function (m) {
      return !m.only_in_groups && m.status !== 'revoked';
    })), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(groups));
  });

  if (recipients[0] && recipients[0].status === 'owner') {
    return [recipients[0]].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(recipients.filter(function (r) {
      return r.status !== 'owner';
    })));
  }

  return recipients;
};
var getSharingLink = function getSharingLink(state, docId, documentType) {
  // This shouldn't have happened, but unfortunately some duplicate sharing links have been created in the past
  var perms = getDocumentPermissions(state, docId);
  if (perms.length === 0) return null;
  var perm = perms[0]; // We used to use `email` as `codes` attribute for a sharingByLink.
  // But when we use cozy-client to create a Permission, by default
  // the codes attribute is set to `code`. MesPapiers app is using this
  // default behavior... So the sharing by link created by mes papiers
  // didn't appear correctly in cozy-sharing.
  // This is a bit ugly, we should have a better way to know if this is
  // a sharing by link or not.

  var code = lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(perm, 'attributes.shortcodes.email') || lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(perm, 'attributes.shortcodes.code') || lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(perm, 'attributes.codes.email') || lodash_get__WEBPACK_IMPORTED_MODULE_3___default()(perm, 'attributes.codes.code');

  if (code) {
    return buildSharingLink(state, documentType, code);
  } else {
    return null;
  }
};
var getSharingForSelf = function getSharingForSelf(state, docId) {
  return getDocumentSharing(state, docId);
};
var getSharingType = function getSharingType(state, docId, instanceUri) {
  var _sharing$attributes;

  var sharing = getSharingForSelf(state, docId);
  if (!sharing) return false;
  var type = getDocumentSharingType(sharing, docId);
  if ((_sharing$attributes = sharing.attributes) !== null && _sharing$attributes !== void 0 && _sharing$attributes.owner) return type;
  var me = sharing.attributes.members.find(matchingInstanceName(instanceUri));
  if (!me) return type;

  if (me.read_only) {
    return 'one-way';
  }

  if (sharing.attributes.drive) {
    return 'two-way';
  }

  return type;
};
var getDocumentSharing = function getDocumentSharing(state, docId) {
  return getDocumentSharings(state, docId)[0] || null;
};

var getDocumentSharings = function getDocumentSharings(state, docId) {
  return !state.byDocId[docId] ? [] : state.byDocId[docId].sharings.map(function (id) {
    return getSharingById(state, id);
  });
};

var getSharingById = function getSharingById(state, id) {
  return state.sharings.find(function (s) {
    return s.id === id;
  });
};
var getDocumentPermissions = function getDocumentPermissions(state, docId) {
  return !state.byDocId[docId] ? [] : state.byDocId[docId].permissions.map(function (id) {
    return getPermissionById(state, id);
  });
};

var getPermissionById = function getPermissionById(state, id) {
  return state.permissions.find(function (s) {
    return s.id === id;
  });
};

var getApps = function getApps(state) {
  return state.apps;
};

var hasSharedParent = function hasSharedParent(state, documentPath) {
  if (!state.sharedPaths) {
    return false; // hasSharedParent should not occur
  }

  return state.sharedPaths.some(function (path) {
    return documentPath.indexOf("".concat(path, "/")) === 0;
  });
};
var hasSharedChild = function hasSharedChild(state, documentPath) {
  if (!state.sharedPaths) {
    return false; // hasSharedChild should not occur
  }

  var ret = state.sharedPaths.some(function (path) {
    return path.indexOf("".concat(documentPath, "/")) === 0;
  });
  return ret;
};
/**
 * Returns the path of the shared parent for a given document
 * @param {object} state - Redux state
 * @param {string} documentPath - Path of the given document
 * @returns {string|null} Path of the shared parent
 */

var getSharedParentPath = function getSharedParentPath(state, documentPath) {
  if (hasSharedParent(state, documentPath)) {
    return state.sharedPaths.find(function (path) {
      return documentPath.startsWith(path);
    });
  }

  return null;
}; // helpers

var getSharedDocIds = function getSharedDocIds(doc) {
  return doc.type === 'io.cozy.sharings' ? getSharingDocIds(doc) : getPermissionDocIds(doc);
};
var getSharingDocIds = function getSharingDocIds(sharing) {
  var docs = sharing.attributes.rules.map(function (r) {
    return r.values;
  }).reduce(function (acc, val) {
    return acc.concat(val);
  }, []);

  if (sharing.attributes.shortcut_id) {
    docs.push(sharing.attributes.shortcut_id);
  }

  return docs;
};
/**
 * Get ids of shared documents, but only if sharing is ready so files exist
 * @param {object} sharing
 * @param {string} instanceUri
 * @returns {string[]} List of document ids of a sharing
 */

var getExternalSharingIds = function getExternalSharingIds(sharing, instanceUri) {
  var member = sharing.attributes.members.find(function (member) {
    return member.instance === instanceUri;
  });
  var docs = [];

  if ((member === null || member === void 0 ? void 0 : member.status) === 'ready') {
    docs = sharing.attributes.rules.map(function (r) {
      return r.values;
    }).reduce(function (acc, val) {
      return acc.concat(val);
    }, []);
  }

  if (sharing.attributes.shortcut_id) {
    docs.push(sharing.attributes.shortcut_id);
  }

  return docs;
}; // Some permissions can not have values since they can
// be on a global doctype. In that case, we can't sort
// them by id

var getPermissionDocIds = function getPermissionDocIds(perm) {
  return Object.keys(perm.attributes.permissions).map(function (k) {
    return perm.attributes.permissions[k].values ? perm.attributes.permissions[k].values : [];
  }).reduce(function (acc, val) {
    return [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(acc), (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(val));
  }, []);
};

var isSharingADrive = function isSharingADrive(sharing) {
  return sharing.attributes.drive === true;
};

var areAllRecipientsRevoked = function areAllRecipientsRevoked(sharing) {
  return sharing.attributes.owner && sharing.attributes.members.filter(function (m) {
    return m.status !== 'revoked';
  }).length === 1;
};

var hasBeenSelfRevoked = function hasBeenSelfRevoked(sharing, instanceUri) {
  var me = sharing.attributes.members.find(matchingInstanceName(instanceUri));
  return !sharing.attributes.owner && me && me.status === 'revoked';
};
/**
 * Returns the sharing rule of a document
 * @param {object} sharing - The sharing
 * @param {string} docId - Id of the shared document
 * @returns {object} sharing rule
 */


var getSharingRule = function getSharingRule(sharing, docId) {
  return sharing.attributes.rules.find(function (r) {
    return r.values.indexOf(docId) !== -1;
  });
};
/**
 * Returns the sharing type of a directory
 * @param {object} rule - Sharing rule of a document
 * @returns {string} two-way or one-way
 */


var getDirectorySharingType = function getDirectorySharingType(rule) {
  // If a document has no rule, it is a shortcut preview of a sharing.
  // Since the sharing hasn't been accepted, it can't be synced so we return the "one-way" type.
  // TODO : the sharing type shouldn't be based on rule but on ready_only prop of the member
  return rule && rule.update === 'sync' && rule.remove === 'sync' ? SHARING_TYPE.TWO_WAY : SHARING_TYPE.ONE_WAY;
};
/**
 * Returns the sharing type of a file
 * @param {object} rule - Sharing rule of a document
 * @returns {string} two-way or one-way
 */


var getFileSharingType = function getFileSharingType(rule) {
  // If a document has no rule, it is a shortcut preview of a sharing.
  // Since the sharing hasn't been accepted, it can't be synced so we return the "one-way" type.
  // TODO : the sharing type shouldn't be based on rule but on ready_only prop of the member
  return rule && rule.update === 'sync' && rule.remove === 'revoke' ? SHARING_TYPE.TWO_WAY : SHARING_TYPE.ONE_WAY;
};
/**
 * Returns the sharing type of a document
 * @param {object} sharing - The sharing
 * @param {string} docId - Id of the shared document
 * @returns {string} two-way or one-way
 */


var getDocumentSharingType = function getDocumentSharingType(sharing, docId) {
  if (!sharing) return null;
  var rule = getSharingRule(sharing, docId);
  var directorySharingType = getDirectorySharingType(rule);
  var fileSharingType = getFileSharingType(rule);
  return directorySharingType === SHARING_TYPE.TWO_WAY || fileSharingType === SHARING_TYPE.TWO_WAY ? SHARING_TYPE.TWO_WAY : SHARING_TYPE.ONE_WAY;
};
var isReadOnlySharing = function isReadOnlySharing(sharing, docId) {
  var rule = getSharingRule(sharing, docId);
  var directorySharingType = getDirectorySharingType(rule);
  var fileSharingType = getFileSharingType(rule);
  return directorySharingType === SHARING_TYPE.TWO_WAY || fileSharingType === SHARING_TYPE.TWO_WAY ? false : true;
};

var buildSharingLink = function buildSharingLink(state, documentType, sharecode) {
  var appUrl = getAppUrlForDoctype(state, documentType);

  switch (documentType) {
    case 'Notes':
      return "".concat(appUrl, "public/?sharecode=").concat(sharecode);

    default:
      return "".concat(appUrl, "public?sharecode=").concat(sharecode);
  }
};

var getAppUrlForDoctype = function getAppUrlForDoctype(state, documentType) {
  var apps = getApps(state);

  switch (documentType) {
    case 'Notes':
      return getAppUrl(apps, 'notes');

    case 'Files':
    case 'Document':
      return getAppUrl(apps, 'drive');

    case 'Albums':
      return getAppUrl(apps, 'photos');

    default:
      throw new Error("Sharing link: don't know which app to use for doctype ".concat(documentType));
  }
};

var getAppUrl = function getAppUrl(apps, appName) {
  var app = apps.find(function (a) {
    return (a === null || a === void 0 ? void 0 : a.slug) === appName && (a === null || a === void 0 ? void 0 : a.state) === 'ready';
  });

  if (!app) {
    throw new Error("Sharing link: app ".concat(appName, " not installed"));
  }

  return app.links.related;
};
/**
 *
 * @param {SharingCollection} sharings
 * @return {Array} Array of docIds
 */


var getSharedDocIdsBySharings = function getSharedDocIdsBySharings(sharings) {
  var docs = [];
  if (!sharings.data) return [];
  sharings.data.forEach(function (s) {
    if (s.attributes && s.attributes.active) {
      docs.push.apply(docs, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(getSharingDocIds(s)));
    }
  });
  return docs;
};
/**
 * Computes the effective sharing type for a drive.
 *
 * @param {string} state - the state
 * @param {string} driveId - the shared drive ID
 * @param {string} instanceUri - the URI of the instance
 * @returns {string|null} - the sharing type
 */

var getSharedDriveSharingType = function getSharedDriveSharingType(state, driveId, instanceUri) {
  var _sharing$attributes$m;

  var sharing = getSharingById(state, driveId);
  if (!sharing) return null;
  var me = (_sharing$attributes$m = sharing.attributes.members) === null || _sharing$attributes$m === void 0 ? void 0 : _sharing$attributes$m.find(matchingInstanceName(instanceUri));
  if (!me) return null;
  return me.read_only ? SHARING_TYPE.ONE_WAY : SHARING_TYPE.TWO_WAY;
};

}),

});
//# sourceMappingURL=cozy.fa3191e61c3b148d.hot-update.js.map