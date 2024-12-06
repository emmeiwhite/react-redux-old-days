import { orderBurger } from './redux'
import { useSelector, useDispatch } from 'react-redux'

function BurgerBox() {
  let burgerBuns = useSelector(state => state.burger.burgerBuns)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Total Burger Buns: {burgerBuns}</h1>
      <p>Enjoy the delight of real Burgers</p>
      <button
        className="btn"
        onClick={() => {
          dispatch(orderBurger())
        }}
        // dispatching action to the reducer {type:ORDER_PIZZA}
      >
        Order Now
      </button>
    </div>
  )
}

export default BurgerBox
