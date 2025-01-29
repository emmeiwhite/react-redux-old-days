import { store } from './redux-library/store'
import { Provider } from 'react-redux'

import BookContainer from './components/BookContainer'
function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BookContainer />
      </Provider>
    </div>
  )
}

export default App
