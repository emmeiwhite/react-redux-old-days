import { useDispatch, useSelector } from 'react-redux'
import { order_pizza } from '../redux-library/pizzaActions'

const Pizza = () => {
  const pizzas = useSelector(state => state.pizzas.pizzaBase)
  const dispatch = useDispatch()
  return (
    <div className="p-12 text-center">
      <h1 className="text-3xl font-semibold text-primary ">Total Pizzabases:{pizzas}</h1>
      <button
        className="bg-primary text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 transition duration-200"
        onClick={() => dispatch(order_pizza())}>
        Order Pizza
      </button>
    </div>
  )
}
export default Pizza
