import { useDispatch, useSelector } from 'react-redux'
import { order_pizza } from '../redux-library/pizzaActions'

const Pizza = () => {
  const pizzas = useSelector(state => state.pizzas.pizzaBase)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Total Pizzabases:{pizzas}</h1>
      <button
        className="btn"
        onClick={() => dispatch(order_pizza())}>
        Order Pizza
      </button>
    </div>
  )
}
export default Pizza
