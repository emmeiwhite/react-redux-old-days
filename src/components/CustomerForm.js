import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { order_pizza } from '../redux-library/pizzaActions'

const CustomerForm = () => {
  const [pizzaCount, setPizzaCount] = useState(1)
  const totalPizzas = useSelector(state => state.pizzas.pizzaBase)
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()

    if (totalPizzas - pizzaCount < 0) {
      alert('Enter amount of pizza as per availability')
    }
    dispatch(order_pizza(pizzaCount))
    // As soon as the user submits number, we need to take the number to the reducer
    // And to take the number to the reducer, we need action with payload
  }
  return (
    <article className="p-6 bg-blue-500 mt-12 relative">
      <div className="absolute top-0 right-0 p-2 bg-green-600 text-white">
        Available Pizzas: <span className="font-bold">{totalPizzas}</span>
      </div>
      <h2 className="text-white text-2xl font-semibold mb-4">
        How many pizza's you want to order?
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          onChange={e => setPizzaCount(e.target.value)}
          placeholder="Enter number of pizzas"
          value={pizzaCount}
          className="w-full p-2 "
          min={1}
        />
        <button
          type="submit"
          className="bg-primary block mt-4 text-white px-4 py-2 rounded-md bg-blue-900 hover:bg-blue-700 transition duration-300">
          Submit
        </button>
      </form>
    </article>
  )
}
export default CustomerForm
