import { screen, waitFor } from '@testing-library/react'
import { describe, it } from 'vitest'
// import { trans } from '../../../config/i18n'
// import { memoryDBFirebase } from '../../mocks/FirestoreMemoryMock'
import { ejecAllMocks, renderAppWithRoute } from '../../helpers'
import store from '../../../redux/store'
import { getWords } from '../../../redux/actions'
import { setGroupHashWordsByNumberWords, setStudiedhashWords } from '../../../redux/config.slice'
ejecAllMocks()

describe('Index', () => {
  beforeAll(async () => {
    await store.dispatch(getWords())
    store.dispatch(setGroupHashWordsByNumberWords(10))
  })

  it('should render training page', async () => {
    const mockHashWords = ['test1', 'test2']
    store.dispatch(setStudiedhashWords(mockHashWords))
    renderAppWithRoute('/')
    await waitFor(() => {
      const label = screen.getByText(`Número de estudiadas: ${mockHashWords.length}`)
      expect(label.textContent).toBe('Número de estudiadas: 2')
    })
  })
})
