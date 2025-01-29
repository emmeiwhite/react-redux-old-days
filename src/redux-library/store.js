import { createStore } from 'redux'

import bookReducer from './bookReducer'

export const store = createStore(bookReducer)
