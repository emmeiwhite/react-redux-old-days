import { ORDER_PIZZA } from './actionTypes'

export const order_pizza = pizzaOrder => {
  return {
    type: ORDER_PIZZA,
    payload: pizzaOrder
  }
}
