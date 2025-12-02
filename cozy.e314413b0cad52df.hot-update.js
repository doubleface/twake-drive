"use strict";
self["webpackHotUpdatecozy_drive"]("cozy", {
"./node_modules/cozy-sharing/dist/stylesheet.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1764608965860
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
"./node_modules/cozy-sharing/dist/components/SharedDrive/SharedDriveEditModal.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  SharedDriveEditModal: () => (SharedDriveEditModal)
});
/* ESM import */var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* ESM import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* ESM import */var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* ESM import */var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/prop-types/index.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_5__);
/* ESM import */var cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/I18n/index.js");
/* ESM import */var _DumbSharedDriveModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/cozy-sharing/dist/components/SharedDrive/DumbSharedDriveModal.js");
/* ESM import */var _hoc_withLocales__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cozy-sharing/dist/hoc/withLocales.js");
/* ESM import */var _models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/cozy-sharing/dist/DoctypeContact.js");










var SharedDriveEditModal = (0,_hoc_withLocales__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref) {
  var document = _ref.document,
      sharing = _ref.sharing,
      recipients = _ref.recipients,
      onShare = _ref.onShare,
      onRevoke = _ref.onRevoke,
      onClose = _ref.onClose;
  var client = (0,cozy_client__WEBPACK_IMPORTED_MODULE_5__.useClient)();

  var _useI18n = (0,cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_6__.useI18n)(),
      t = _useI18n.t;

  var createContact = function createContact(contact) {
    return client.create(_models__WEBPACK_IMPORTED_MODULE_7__["default"].doctype, contact);
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(sharing === null || sharing === void 0 ? void 0 : sharing.description),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  console.log('name', name);

  var handleNameChange = function handleNameChange(event) {
    setName(event.target.value);
  };

  var onRename = /*#__PURE__*/function () {
    var _ref2 = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(value) {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return client.collection('io.cozy.sharings').rename(sharing._id, value);

          case 2:
            response = _context.sent;
            console.log('response', response);

          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));

    return function onRename(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_DumbSharedDriveModal__WEBPACK_IMPORTED_MODULE_8__.DumbSharedDriveModal, {
    title: t('Files.share.title', {
      name: sharing === null || sharing === void 0 ? void 0 : sharing.description
    }),
    document: document,
    createContact: createContact,
    recipients: recipients,
    onRevoke: onRevoke,
    onClose: onClose,
    onShare: onShare,
    sharedDriveName: name,
    handleSharedDriveNameChange: handleNameChange,
    onRename: onRename,
    originalSharedDriveName: sharing === null || sharing === void 0 ? void 0 : sharing.description
  });
});
SharedDriveEditModal.propTypes = {
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired)
};

}),

});
//# sourceMappingURL=cozy.e314413b0cad52df.hot-update.js.map