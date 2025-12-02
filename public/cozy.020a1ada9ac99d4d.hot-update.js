"use strict";
self["webpackHotUpdatecozy_drive"]("cozy", {
"./node_modules/cozy-sharing/dist/stylesheet.css": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
// extracted by css-extract-rspack-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1764607249543
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
"./node_modules/cozy-sharing/dist/components/SharedDrive/DumbSharedDriveModal.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  DumbSharedDriveModal: () => (DumbSharedDriveModal)
});
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./node_modules/prop-types/index.js");
/* ESM import */var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* ESM import */var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* ESM import */var cozy_ui_transpiled_react_Buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Buttons/index.js");
/* ESM import */var cozy_ui_transpiled_react_CozyDialogs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/CozyDialogs/FixedDialog.js");
/* ESM import */var cozy_ui_transpiled_react_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/TextField/index.js");
/* ESM import */var cozy_ui_transpiled_react_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/Typography/index.js");
/* ESM import */var cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/cozy-ui/transpiled/react/providers/I18n/index.js");
/* ESM import */var _hoc_withLocales__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/cozy-sharing/dist/hoc/withLocales.js");
/* ESM import */var _ShareByEmail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/cozy-sharing/dist/components/ShareByEmail.js");
/* ESM import */var _WhoHasAccess__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./node_modules/cozy-sharing/dist/components/WhoHasAccess.js");










var DumbSharedDriveModal = (0,_hoc_withLocales__WEBPACK_IMPORTED_MODULE_1__["default"])(function (_ref) {
  var title = _ref.title,
      document = _ref.document,
      sharedDriveName = _ref.sharedDriveName,
      handleSharedDriveNameChange = _ref.handleSharedDriveNameChange,
      createContact = _ref.createContact,
      recipients = _ref.recipients,
      onRevoke = _ref.onRevoke,
      onSetType = _ref.onSetType,
      onCreate = _ref.onCreate,
      onClose = _ref.onClose,
      onShare = _ref.onShare;

  var _useI18n = (0,cozy_ui_transpiled_react_providers_I18n__WEBPACK_IMPORTED_MODULE_2__.useI18n)(),
      t = _useI18n.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(cozy_ui_transpiled_react_CozyDialogs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    open: true,
    disableGutters: true,
    onClose: onClose,
    title: title,
    classes: {
      paper: 'u-ov-visible'
    },
    componentsProps: {
      dialogContent: {
        className: 'u-ov-visible'
      }
    },
    content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "u-ph-2"
    }, handleSharedDriveNameChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(cozy_ui_transpiled_react_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
      required: true,
      label: t('SharedDrive.sharedDriveModal.nameLabel'),
      variant: "outlined",
      size: "small",
      className: "u-w-100 u-mt-1-half",
      value: sharedDriveName,
      onChange: handleSharedDriveNameChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(cozy_ui_transpiled_react_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "h6",
      className: "u-mt-1-half u-mb-half"
    }, t('SharedDrive.sharedDriveModal.addPeople')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ShareByEmail__WEBPACK_IMPORTED_MODULE_6__["default"], {
      createContact: createContact,
      currentRecipients: [],
      document: document,
      documentType: "Files",
      onShare: onShare,
      submitLabel: t('SharedDrive.sharedDriveModal.add'),
      showNotifications: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WhoHasAccess__WEBPACK_IMPORTED_MODULE_7__["default"], {
      isOwner: true,
      isSharedDrive: true,
      recipients: recipients,
      document: document,
      documentType: "Files",
      className: "u-w-100",
      onRevoke: onRevoke,
      onSetType: onSetType
    })),
    actions: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, onCreate && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(cozy_ui_transpiled_react_Buttons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "secondary",
      label: t('SharedDrive.sharedDriveModal.cancel'),
      onClick: onClose
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(cozy_ui_transpiled_react_Buttons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "primary",
      label: t('SharedDrive.sharedDriveModal.create'),
      onClick: onCreate
    })), handleSharedDriveNameChange && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(cozy_ui_transpiled_react_Buttons__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "primary",
      label: t('SharedDrive.sharedDriveModal.rename'),
      onClick: handleSharedDriveNameChange
    })))
  });
});
DumbSharedDriveModal.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  document: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().object),
  sharedDriveName: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  handleSharedDriveNameChange: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  createContact: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  recipients: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().array),
  onRevoke: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  onSetType: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  onCreate: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired),
  onShare: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func.isRequired)
};

}),

});
//# sourceMappingURL=cozy.020a1ada9ac99d4d.hot-update.js.map