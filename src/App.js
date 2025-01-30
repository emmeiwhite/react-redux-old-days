import { store } from './redux-library/store'
import { Provider } from 'react-redux'

import BookContainer from './components/BookContainer'
import Pizza from './components/Pizza'
import CustomerForm from './components/CustomerForm'

function App() {
  return (
    <div className="container m-auto px-4">
      <Provider store={store}>
        {/* <Pizza /> */}
        <CustomerForm />

        {/* <BookContainer /> */}
      </Provider>
    </div>
  )
}

export default App
