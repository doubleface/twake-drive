"use strict";
self["webpackHotUpdatecozy_drive"]("main", {
"./src/modules/navigation/hooks/helpers.ts": (function (module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  computeApp: () => (computeApp),
  computeFileType: () => (computeFileType),
  computePath: () => (computePath)
});
/* ESM import */var cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/cozy-client/dist/models/file.js");
/* ESM import */var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/constants/config.js");
/* ESM import */var _lib_path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/lib/path.js");
/* ESM import */var _modules_nextcloud_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/modules/nextcloud/helpers.ts");
/* ESM import */var _modules_views_OnlyOffice_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/modules/views/OnlyOffice/helpers.js");
/* provided dependency */ var $ReactRefreshRuntime$ = __webpack_require__("./node_modules/@rspack/plugin-react-refresh/client/reactRefresh.js");





const computeFileType = function(file) {
    let { isOfficeEnabled = false, isPublic = false, cozyUrl = '' } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (file._id === _constants_config__WEBPACK_IMPORTED_MODULE_0__.TRASH_DIR_ID) {
        return 'trash';
    } else if (file._id === 'io.cozy.remote.nextcloud.files.trash-dir') {
        return 'nextcloud-trash';
    } else if (file.dir_id === _constants_config__WEBPACK_IMPORTED_MODULE_0__.SHARED_DRIVES_DIR_ID && !(0,_modules_nextcloud_helpers__WEBPACK_IMPORTED_MODULE_2__.isNextcloudShortcut)(file)) {
        return 'shared-drive';
    } else if (file._type === 'io.cozy.remote.nextcloud.files') {
        return (0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_4__.isDirectory)(file) ? 'nextcloud-directory' : 'nextcloud-file';
    } else if ((0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_4__.isNote)(file)) {
        var _file_cozyMetadata;
        // createdOn url ends with a trailing slash whereas cozyUrl does not joinPath fixes this
        const isSameInstance = (0,_lib_path__WEBPACK_IMPORTED_MODULE_1__.joinPath)(cozyUrl, '') === ((_file_cozyMetadata = file.cozyMetadata) === null || _file_cozyMetadata === void 0 ? void 0 : _file_cozyMetadata.createdOn);
        if (isPublic && isSameInstance) {
            return 'public-note-same-instance';
        } else if (isSameInstance) {
            return 'note';
        } else {
            return 'public-note';
        }
    } else if ((0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_4__.isDocs)(file)) {
        return 'docs';
    } else if ((0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_4__.shouldBeOpenedByOnlyOffice)(file) && isOfficeEnabled) {
        return 'onlyoffice';
    } else if ((0,_modules_nextcloud_helpers__WEBPACK_IMPORTED_MODULE_2__.isNextcloudShortcut)(file)) {
        return 'nextcloud';
    } else if ((0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_4__.isShortcut)(file)) {
        return 'shortcut';
    } else if ((0,cozy_client_dist_models_file__WEBPACK_IMPORTED_MODULE_4__.isDirectory)(file)) {
        return 'directory';
    } else if (file.driveId) {
        return 'shared-drive-file';
    } else {
        return 'file';
    }
};
const computeApp = (type)=>{
    switch(type){
        case 'nextcloud-file':
            return 'nextcloud';
        case 'note':
        case 'public-note-same-instance':
            return 'notes';
        case 'docs':
            return 'docs';
        default:
            return 'drive';
    }
};
const computePath = (file, param)=>{
    let { type, pathname, isPublic } = param;
    const paths = pathname.split('/').slice(1);
    const driveId = file.driveId;
    switch(type){
        case 'trash':
            return '/trash';
        case 'nextcloud-trash':
            return `${pathname}/trash`;
        case 'nextcloud':
            var _file_cozyMetadata;
            return `/nextcloud/${((_file_cozyMetadata = file.cozyMetadata) === null || _file_cozyMetadata === void 0 ? void 0 : _file_cozyMetadata.sourceAccount) ?? 'unknown'}`;
        case 'nextcloud-directory':
            return `${pathname}?path=${file.path ?? '/'}`;
        case 'nextcloud-file':
            var _file_links;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
            return ((_file_links = file.links) === null || _file_links === void 0 ? void 0 : _file_links.self) ?? '';
        case 'note':
            return `/n/${file._id}`;
        case 'public-note-same-instance':
            return `/?id=${file._id}`;
        case 'public-note':
            return driveId ? `/note/${driveId}/${file._id}` : `/note/${file._id}`;
        case 'docs':
            // eslint-disable-next-line no-case-declarations, @typescript-eslint/restrict-template-expressions
            return `/bridge/docs/${file.metadata.externalId}`;
        case 'shortcut':
            return `/external/${file._id}`;
        case 'directory':
            // On mobile, if we are in /favorites tab, we do not want it to appears in computed path
            // so we redirect to root route for folders
            if (pathname.startsWith('/favorites')) {
                return `/folder/${file._id}`;
            }
            // paths with only one element correspond to the root of a page like /sharings
            // when we add id we want to keep the path before to make /sharings/id
            return paths.length === 1 ? file._id : `../${file._id}`;
        case 'onlyoffice':
            return (0,_modules_views_OnlyOffice_helpers__WEBPACK_IMPORTED_MODULE_3__.makeOnlyOfficeFileRoute)(file._id, {
                driveId,
                fromPathname: pathname,
                fromPublicFolder: isPublic
            });
        case 'shared-drive':
            // Without driveId, we should use path `/folder/:folderId` because it's shared drive folder of owner
            if (!driveId) {
                return `/folder/${file._id}`;
            }
            return `/shareddrive/${driveId}/${file._id}`;
        case 'shared-drive-file':
            if (!driveId || !file.dir_id) {
                throw new Error('Missing driveId or dir_id in shared drive file');
            }
            return `/shareddrive/${driveId}/${file.dir_id}/file/${file._id}`;
        default:
            // On mobile, if we are in /favorites tab, we do not want it to appears in computed path
            // so we redirect to root route for files
            if (pathname.startsWith('/favorites')) {
                // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                return `/folder/${file.dir_id}/file/${file._id}`;
            }
            return `file/${file._id}`;
    }
};

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
__webpack_require__.h = () => ("38bc30f47a49f388")
})();

}
);
//# sourceMappingURL=main.1e93d58e98475fe3.hot-update.js.map