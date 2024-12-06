// Actions reach reducer to update our state
import { ORDER_PIZZA } from './PizzaTypes'

// state related to pizzas
const initialState = {
  pizzaBase: 70
}

export const pizzaReducer = (state = initialState, action) => {
  if (action.type === ORDER_PIZZA) {
    return {
      ...state,
      pizzaBase: state.pizzaBase - 1
    }
  }

  return state
}
