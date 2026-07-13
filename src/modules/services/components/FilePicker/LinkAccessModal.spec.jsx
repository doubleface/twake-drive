import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import LinkAccessModal from './LinkAccessModal'

jest.mock('cozy-ui/transpiled/react/CozyDialogs', () => ({
  ConfirmDialog: ({ title, content, actions, onClose }) => (
    <div role="dialog" aria-label="Set link access">
      <button type="button" aria-label="Close" onClick={onClose}>
        Close
      </button>
      <div>{title}</div>
      <div>{content}</div>
      <div>{actions}</div>
    </div>
  )
}))

jest.mock('twake-i18n', () => ({
  useI18n: () => ({
    t: key =>
      ({
        'FilePicker.linkAccess.title': 'Set link access',
        'FilePicker.linkAccess.anyoneWithLink':
          'Anyone with the link can access these items.',
        'FilePicker.linkAccess.viewer': 'Viewer',
        'FilePicker.linkAccess.editor': 'Editor',
        'FilePicker.linkAccess.cancel': 'Cancel',
        'FilePicker.linkAccess.confirm': 'Add links',
        'FilePicker.errors.SHARING_LINK_FAILED':
          'Could not generate a sharing link.'
      })[key] || key
  })
}))

describe('LinkAccessModal', () => {
  const selectedItems = [
    { _id: 'file-id', name: 'invoice.pdf' },
    { _id: 'folder-id', name: 'Projects' }
  ]

  it('lets the user select Editor access before adding links', () => {
    const onConfirm = jest.fn()
    const { getByLabelText, getByRole } = render(
      <LinkAccessModal
        selectedItems={selectedItems}
        onCancel={jest.fn()}
        onConfirm={onConfirm}
      />
    )

    expect(getByRole('dialog')).toHaveTextContent('invoice.pdf')
    expect(getByRole('dialog')).toHaveTextContent('Projects')
    expect(getByRole('dialog')).toHaveTextContent(
      'Anyone with the link can access these items.'
    )
    expect(getByLabelText('Viewer')).toBeChecked()

    fireEvent.click(getByLabelText('Editor'))
    fireEvent.click(getByRole('button', { name: 'Add links' }))

    expect(onConfirm).toHaveBeenCalledWith({ editingRights: 'write' })
  })

  it('disables access controls while links are being added', () => {
    const { getByLabelText, getByRole } = render(
      <LinkAccessModal
        selectedItems={selectedItems}
        onCancel={jest.fn()}
        onConfirm={jest.fn()}
        busy
      />
    )

    expect(getByLabelText('Viewer')).toBeDisabled()
    expect(getByLabelText('Editor')).toBeDisabled()
    expect(getByRole('button', { name: 'Cancel' })).toBeDisabled()
    expect(getByRole('button', { name: 'Add links' })).toBeDisabled()
  })

  it('shows a sharing error without closing the modal', () => {
    const { getByRole } = render(
      <LinkAccessModal
        selectedItems={selectedItems}
        onCancel={jest.fn()}
        onConfirm={jest.fn()}
        error="SHARING_LINK_FAILED"
      />
    )

    expect(getByRole('dialog')).toHaveTextContent(
      'Could not generate a sharing link.'
    )
  })

  it('returns to the picker when cancelled', () => {
    const onCancel = jest.fn()
    const { getByRole } = render(
      <LinkAccessModal
        selectedItems={selectedItems}
        onCancel={onCancel}
        onConfirm={jest.fn()}
      />
    )

    fireEvent.click(getByRole('button', { name: 'Cancel' }))

    expect(onCancel).toHaveBeenCalledTimes(1)
  })
})
