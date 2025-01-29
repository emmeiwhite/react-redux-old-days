import { store } from './redux-library/store'
import { Provider } from 'react-redux'

import BookContainer from './components/BookContainer'
import Pizza from './components/Pizza'

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BookContainer />
        <Pizza />
      </Provider>
    </div>
  )
}

export default App
