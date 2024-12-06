import { createStore } from 'redux'
import { rootReducers } from './rootReducer'
const store = createStore(rootReducers)

export default store
// We have to provide this store to our entire application and for this we'll make use of react-redux library and use Provider Component in our App.js
