import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from './actionTypes'

const initialState = {
  loading: false,
  error: '',
  products: []
}

const productsReducer = (state = initialState, action) => {
  if (action.type === FETCH_REQUEST) {
    return { ...state, loading: true }
  }

  if (action.type === FETCH_SUCCESS) {
    return { ...state, loading: false, products: action.payload }
  }

  if (action.type === FETCH_ERROR) {
    return { ...state, loading: false, error: action.payload }
  }

  return state
}

export default productsReducer
