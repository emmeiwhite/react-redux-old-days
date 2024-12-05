import PizzaBox from './component/PizzaBox'
import { Provider } from 'react-redux'
import store from './component/redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PizzaBox />
      </div>
    </Provider>
  )
}

export default App
