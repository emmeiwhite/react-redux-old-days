import PizzaBox from './component/PizzaBox'
import BurgerBox from './component/BurgerBox'

import { Provider } from 'react-redux'
import store from './component/redux/store'

console.log(store)
function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <PizzaBox />
        <BurgerBox />
      </div>
    </Provider>
  )
}

export default App
