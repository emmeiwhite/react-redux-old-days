import pizzaReducer from './pizzaReducer'
import bookReducer from './bookReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  books: bookReducer,
  pizzas: pizzaReducer
})

export default rootReducer
