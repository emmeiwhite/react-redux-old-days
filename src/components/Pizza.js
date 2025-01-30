import { useDispatch, useSelector } from 'react-redux'
import { order_pizza } from '../redux-library/pizzaActions'

const Pizza = () => {
  const pizzas = useSelector(state => state.pizzas.pizzaBase)
  const dispatch = useDispatch()
  return (
    <div className="">
      <h1 className="text-2xl font-semibold text-white inline-flex ga-4 bg-blue-500 p-4  items-center justify-center">
        Total Pizzabases:
        <span className="block rounded-md  text-white w-12 h-12  grid place-items-center">
          {pizzas}
        </span>
      </h1>
      <button
        className="bg-primary block text-white px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-700 transition duration-200"
        onClick={() => dispatch(order_pizza())}>
        Order Pizza
      </button>
    </div>
  )
}
export default Pizza
