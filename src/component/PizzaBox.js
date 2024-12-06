import { orderPizza } from './redux/index.js'
import { useSelector, useDispatch } from 'react-redux'

function PizzaBox() {
  const pizzaBase = useSelector(state => state.pizza.pizzaBase)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Total Pizza bases: {pizzaBase}</h1>
      <p>Enjoy the delight of real Pizza</p>
      <button
        className="btn"
        onClick={() => dispatch(orderPizza())}
        // dispatching action to the reducer {type:ORDER_PIZZA}
      >
        Order Now
      </button>
    </div>
  )
}

export default PizzaBox
