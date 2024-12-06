import { ORDER_BURGER } from './burgerTypes'

// 1) Initial state
const initialState = {
  burgerBuns: 330
}

// 2) Reducer is a pure function without any side-effects
export const burgerReducer = (state = initialState, action) => {
  if (action.type === ORDER_BURGER) {
    return {
      ...state,
      burgerBuns: state.burgerBuns - 1
    }
  }

  return state
}
