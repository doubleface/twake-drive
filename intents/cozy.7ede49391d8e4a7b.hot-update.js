"use strict";
self["webpackHotUpdatecozy_drive"]("cozy", {
"./node_modules/cozy-sharing/dist/stylesheet.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1764608309462
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
/* ESM import */var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/prop-types/index.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-client/dist/index.js");
/* ESM import */var cozy_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cozy_client__WEBPACK_IMPORTED_MODULE_3__);
/* ESM import */var cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/I18n/index.js");
/* ESM import */var _DumbSharedDriveModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/cozy-sharing/dist/components/SharedDrive/DumbSharedDriveModal.js");
/* ESM import */var _hoc_withLocales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-sharing/dist/hoc/withLocales.js");
/* ESM import */var _models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/cozy-sharing/dist/DoctypeContact.js");








var SharedDriveEditModal = (0,_hoc_withLocales__WEBPACK_IMPORTED_MODULE_2__["default"])(function (_ref) {
  var document = _ref.document,
      sharing = _ref.sharing,
      recipients = _ref.recipients,
      onShare = _ref.onShare,
      onRevoke = _ref.onRevoke,
      onClose = _ref.onClose;
  var client = (0,cozy_client__WEBPACK_IMPORTED_MODULE_3__.useClient)();

  var _useI18n = (0,cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_4__.useI18n)(),
      t = _useI18n.t;

  var createContact = function createContact(contact) {
    return client.create(_models__WEBPACK_IMPORTED_MODULE_5__["default"].doctype, contact);
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(sharing === null || sharing === void 0 ? void 0 : sharing.description),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  console.log('name', name);

  var handleNameChange = function handleNameChange(event) {
    setName(event.target.value);
  };

  var onRename = function onRename(value) {
    console.log('onRename', value);
    console.log('sharing', sharing);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_DumbSharedDriveModal__WEBPACK_IMPORTED_MODULE_6__.DumbSharedDriveModal, {
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
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func.isRequired)
};

}),

});
//# sourceMappingURL=cozy.7ede49391d8e4a7b.hot-update.js.map