import { orderPizza } from './redux/index.js'

function PizzaBox(props) {
  console.log(props)
  return (
    <div>
      <h1>Total Pizza bases: 100</h1>
      <p>Enjoy the delight of real Pizza</p>
      <button className="btn">Order Now</button>
    </div>
  )
}

// We need to access our global state in our component, for which we will use the function with the convention name as mapStateToProps
const mapStateToProps = state => {
  return {
    pizzaBase: state.pizzaBase
  }
}

// We need to dispatch our actions for which we conventionally make use of mapDispatchToProps:

/** These two function maps  */
const mapDispatchToProps = dispatch => {
  return {
    orderPizza: () => dispatch(orderPizza())
  }
}

export default PizzaBox
