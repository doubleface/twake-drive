import { getOrCreateSharingLink } from './sharing'

const mockGenerateWebLink = jest.fn()

jest.mock('cozy-client', () => ({
  __esModule: true,
  default: jest.fn(),
  generateWebLink: (...args) => mockGenerateWebLink(...args),
  models: {
    file: {
      isFile: item => item?.type === 'file'
    }
  }
}))

jest.mock('cozy-client/dist/models/sharing', () => ({
  makeSharingLink: jest.fn()
}))

const file = {
  _id: 'file-id',
  name: 'invoice.pdf',
  type: 'file'
}

const makePermission = fileIds => ({
  id: 'permission-id',
  attributes: {
    permissions: {
      files: {
        values: fileIds,
        verbs: ['GET']
      }
    },
    shortcodes: {
      code: 'existing-code'
    }
  }
})

describe('getOrCreateSharingLink', () => {
  beforeEach(() => {
    mockGenerateWebLink.mockReturnValue(
      'https://drive.example/public?sharecode=existing-code'
    )
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('updates a reused link even when the sharing provider has not loaded it', async () => {
    const permission = makePermission(['file-id'])
    const permissionsCollection = {
      findLinksByDoctype: jest.fn().mockResolvedValue({ data: [permission] }),
      add: jest.fn().mockResolvedValue({ data: permission })
    }
    const client = {
      collection: jest.fn(() => permissionsCollection),
      getStackClient: () => ({ uri: 'https://drive.example' }),
      capabilities: {}
    }
    const updateDocumentPermissions = jest.fn().mockResolvedValue([])

    await getOrCreateSharingLink(
      client,
      file,
      {
        shareByLink: jest.fn(),
        updateDocumentPermissions
      },
      { editingRights: 'write' }
    )

    expect(permissionsCollection.add).toHaveBeenCalledWith(
      permission,
      {
        files: {
          values: ['file-id'],
          verbs: ['GET', 'POST', 'PUT', 'PATCH']
        }
      },
      { expiresAt: '', password: '' }
    )
  })

  it('creates a dedicated link when an existing permission covers multiple documents', async () => {
    const permissionsCollection = {
      findLinksByDoctype: jest.fn().mockResolvedValue({
        data: [makePermission(['file-id', 'other-file'])]
      })
    }
    const client = {
      collection: jest.fn(() => permissionsCollection),
      getStackClient: () => ({ uri: 'https://drive.example' }),
      capabilities: {}
    }
    const shareByLink = jest.fn().mockResolvedValue({
      data: {
        attributes: {
          shortcodes: { code: 'new-code' }
        }
      }
    })

    await getOrCreateSharingLink(client, file, {
      shareByLink,
      updateDocumentPermissions: jest.fn()
    })

    expect(shareByLink).toHaveBeenCalledWith(file, { verbs: ['GET'] })
  })
})
