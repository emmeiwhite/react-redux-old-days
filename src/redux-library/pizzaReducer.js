import { ORDER_PIZZA } from './actionTypes'

const initialState = {
  pizzaBase: 100
}

const pizzaReducer = (state = initialState, action) => {
  if (action.type === ORDER_PIZZA) {
    return { ...state, pizzaBase: state.pizzaBase - 1 }
  }
  return state
}

export default pizzaReducer
