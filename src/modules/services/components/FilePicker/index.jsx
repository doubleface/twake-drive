import PropTypes from 'prop-types'
import React, { useState, memo, useMemo } from 'react'

import { FixedDialog } from 'cozy-ui/transpiled/react/CozyDialogs'

import FilePickerBody from './FilePickerBody'
import FilePickerFooter from './FilePickerFooter'
import FilePickerHeader from './FilePickerHeader'
import LinkAccessModal from './LinkAccessModal'
import { defaultFilePickerConfig, filePickerLinkModes } from './constants'
import { getActionDisabledState } from './constraints'
import { getCompliantTypes } from './helpers'
import styles from './styles.styl'

import { useSelectionContext } from '@/modules/selection/SelectionProvider'

export const ROOT_DIR_ID = 'io.cozy.files.root-dir'

const FilePicker = ({
  onClose,
  onChange,
  accept,
  multiple,
  filePickerConfig
}) => {
  const [folderId, setFolderId] = useState(ROOT_DIR_ID)
  const [error, setError] = useState(null)
  const [isLinkAccessOpen, setIsLinkAccessOpen] = useState(false)
  const [isSubmittingLink, setIsSubmittingLink] = useState(false)
  const { selectedItems, clearSelection } = useSelectionContext()
  const itemsIdsSelected = useMemo(
    () => selectedItems.map(item => item._id),
    [selectedItems]
  )

  const config = filePickerConfig || defaultFilePickerConfig
  const publicLinkAction = config.sharingLink ?? null
  const downloadLinkAction = config.downloadLink ?? null

  const handleClose = () => {
    clearSelection()
    onClose()
  }

  const navigateTo = folder => {
    setError(null)
    setFolderId(folder.id ?? folder._id)
    clearSelection()
  }

  const handleConfirm = async (linkMode, linkAccess = null) => {
    setError(null)
    const value = multiple ? itemsIdsSelected : itemsIdsSelected[0]
    const pickError = await onChange(value, linkMode, linkAccess)
    if (pickError) {
      setError(pickError)
      return pickError
    }

    clearSelection()
    return null
  }

  const handleOpenLinkAccess = () => {
    setError(null)
    setIsLinkAccessOpen(true)
  }

  const handleLinkAccessConfirm = async linkAccess => {
    setIsSubmittingLink(true)
    const pickError = await handleConfirm(
      filePickerLinkModes.PUBLIC_LINK,
      linkAccess
    )
    setIsSubmittingLink(false)
    if (!pickError) {
      setIsLinkAccessOpen(false)
    }
  }

  const handleFooterConfirm = linkMode => {
    if (linkMode === filePickerLinkModes.PUBLIC_LINK) {
      handleOpenLinkAccess()
      return
    }

    handleConfirm(linkMode)
  }

  const itemTypesAccepted = getCompliantTypes(accept)
  const hasSelection = itemsIdsSelected.length > 0

  const publicLinkState = hasSelection
    ? getActionDisabledState(publicLinkAction, selectedItems)
    : { disabled: true, reasonKey: null }
  const downloadLinkState = hasSelection
    ? getActionDisabledState(downloadLinkAction, selectedItems)
    : { disabled: true, reasonKey: null }

  return (
    <>
      <FixedDialog
        open
        disableGutters
        onClose={handleClose}
        size="large"
        disableTitleAutoPadding
        classes={{ paper: styles.filePickerDialogPaper }}
        componentsProps={{
          dialogTitle: {
            className: 'u-pl-1-half'
          },
          dialogContent: {
            className: 'u-pos-relative'
          }
        }}
        title={<FilePickerHeader />}
        content={
          <FilePickerBody
            navigateTo={navigateTo}
            folderId={folderId}
            itemTypesAccepted={itemTypesAccepted}
            multiple={multiple}
            folderSelectable
            error={error}
          />
        }
        actions={
          <FilePickerFooter
            onConfirm={handleFooterConfirm}
            publicLinkState={publicLinkState}
            downloadLinkState={downloadLinkState}
            publicLinkAction={publicLinkAction}
            downloadLinkAction={downloadLinkAction}
          />
        }
      />

      {isLinkAccessOpen && (
        <LinkAccessModal
          selectedItems={selectedItems}
          onCancel={() => setIsLinkAccessOpen(false)}
          onConfirm={handleLinkAccessConfirm}
          busy={isSubmittingLink}
          error={error}
        />
      )}
    </>
  )
}

FilePicker.propTypes = {
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  filePickerConfig: PropTypes.shape({
    sharingLink: PropTypes.object,
    downloadLink: PropTypes.object
  })
}

FilePicker.defaultProps = {
  accept: '',
  multiple: false,
  filePickerConfig: defaultFilePickerConfig
}

export default memo(FilePicker)
