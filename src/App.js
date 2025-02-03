import { store } from './redux-library/store'
import { Provider } from 'react-redux'

import BookContainer from './components/BookContainer'
import Pizza from './components/Pizza'
import CustomerForm from './components/CustomerForm'
import Products from './components/Products'
import ToggleUI from './custom_hooks/toggle/ToggleUI'

function App() {
  return (
    <div className="container m-auto px-4">
      <Provider store={store}>
        {/* <Pizza /> */}
        {/* <CustomerForm /> */}

        {/* <BookContainer /> */}
        {/* <Products /> */}

        <ToggleUI />
      </Provider>
    </div>
  )
}

export default App
