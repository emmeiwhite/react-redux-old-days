import { BORROW_BOOK } from './actionTypes'

const initialState = {
  totalBooks: 123
}

const bookReducer = (state = initialState, action) => {
  if (action.type === BORROW_BOOK) {
    return { ...state, totalBooks: state.totalBooks - 1 }
  }
  return state
}

export default bookReducer
