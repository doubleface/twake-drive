import PropTypes from 'prop-types'
import React, { useState } from 'react'

import Alert from 'cozy-ui/transpiled/react/Alert'
import Button from 'cozy-ui/transpiled/react/Buttons'
import { ConfirmDialog } from 'cozy-ui/transpiled/react/CozyDialogs'
import FormControlLabel from 'cozy-ui/transpiled/react/FormControlLabel'
import RadioGroup from 'cozy-ui/transpiled/react/RadioGroup'
import Radios from 'cozy-ui/transpiled/react/Radios'
import Typography from 'cozy-ui/transpiled/react/Typography'
import { useI18n } from 'twake-i18n'

const LinkAccessModal = ({
  selectedItems,
  onCancel,
  onConfirm,
  busy,
  error
}) => {
  const { t } = useI18n()
  const [editingRights, setEditingRights] = useState('readOnly')

  const handleConfirm = () => {
    onConfirm({ editingRights })
  }

  return (
    <ConfirmDialog
      open
      onClose={busy ? undefined : onCancel}
      title={t('FilePicker.linkAccess.title')}
      content={
        <div>
          {error && (
            <Alert severity="error" className="u-mb-1">
              {t(`FilePicker.errors.${error}`)}
            </Alert>
          )}
          <Typography className="u-mb-1">
            {t('FilePicker.linkAccess.anyoneWithLink')}
          </Typography>
          <ul className="u-mb-1">
            {selectedItems.map(item => (
              <li key={item._id || item.id}>{item.name}</li>
            ))}
          </ul>
          <RadioGroup
            value={editingRights}
            onChange={event => setEditingRights(event.target.value)}
          >
            <FormControlLabel
              value="readOnly"
              control={<Radios />}
              disabled={busy}
              label={t('FilePicker.linkAccess.viewer')}
            />
            <FormControlLabel
              value="write"
              control={<Radios />}
              disabled={busy}
              label={t('FilePicker.linkAccess.editor')}
            />
          </RadioGroup>
        </div>
      }
      actions={
        <>
          <Button
            variant="secondary"
            label={t('FilePicker.linkAccess.cancel')}
            onClick={onCancel}
            disabled={busy}
          />
          <Button
            label={t('FilePicker.linkAccess.confirm')}
            onClick={handleConfirm}
            disabled={busy}
            busy={busy}
          />
        </>
      }
    />
  )
}

LinkAccessModal.propTypes = {
  selectedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onCancel: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  busy: PropTypes.bool,
  error: PropTypes.string
}

LinkAccessModal.defaultProps = {
  busy: false,
  error: null
}

export default LinkAccessModal
