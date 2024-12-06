import { combineReducers } from 'redux'
import { pizzaReducer } from './pizza/PizzaReducers'
import { burgerReducer } from './burger/burgerReducers'

export const rootReducers = combineReducers({
  pizza: pizzaReducer,
  burger: burgerReducer
})
