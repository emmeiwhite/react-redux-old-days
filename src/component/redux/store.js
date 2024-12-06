import { createStore, applyMiddleware } from 'redux'
import { rootReducers } from './rootReducer'
import logger from 'redux-logger'

const store = createStore(rootReducers, applyMiddleware(logger))

export default store
// We have to provide this store to our entire application and for this we'll make use of react-redux library and use Provider Component in our App.js
