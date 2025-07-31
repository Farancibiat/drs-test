import { screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { trans } from '../../../config/i18n'
import { memoryDBFirebase } from '../../mocks/FirestoreMemoryMock'
import { ejecAllMocks, renderAppWithRoute } from '../../helpers'
import store from '../../../redux/store'
import { getWords } from '../../../redux/actions'
import { setGroupHashWordsByNumberWords } from '../../../redux/config.slice'
ejecAllMocks()

describe('Index', () => {
  beforeAll(async () => {
    await store.dispatch(getWords())
    store.dispatch(setGroupHashWordsByNumberWords(10))
  })

  it('should render training page', () => {
    renderAppWithRoute('/')
    const label =screen.getByText(trans('label.studiedNumber'))
    expect(label).toBe(trans(`label.studiedNumber ${2}`))
    //1. abrir pagina OK
    //2. crear mock con value 2
    //3. encontrar el label ok
    //4.  comparar valor 
  })
})
