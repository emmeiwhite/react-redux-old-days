import { ORDER_PIZZA } from './actionTypes'

const initialState = {
  pizzaBase: 100
}

const pizzaReducer = (state = initialState, action) => {
  // action now has a payload attached to order specific number of pizzas
  if (action.type === ORDER_PIZZA) {
    return { ...state, pizzaBase: state.pizzaBase - action.payload }
  }
  return state
}

export default pizzaReducer
