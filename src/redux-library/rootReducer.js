import pizzaReducer from './pizzaReducer'
import bookReducer from './bookReducer'
import { combineReducers } from 'redux'
import productsReducer from './productReducer'

const rootReducer = combineReducers({
  books: bookReducer,
  pizzas: pizzaReducer,
  products: productsReducer
})

export default rootReducer
