import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from './actionTypes'
import axios from 'axios'

export const fetch_request = () => {
  return {
    type: FETCH_REQUEST
  }
}

//
export const fetch_success = products => {
  return {
    type: FETCH_SUCCESS,
    payload: products
  }
}

export const fetch_error = error => {
  return {
    type: FETCH_ERROR,
    payload: error
  }
}

// redux-thunk middleware to perform async requests

const fetchProducts = () => {
  return dispatch => {
    // Action send to reducer
    dispatch(fetch_request())
    axios
      .get('https://fakestoreapi.com/products')
      .then(res => {
        const products = res.data
        console.log(products)
        dispatch(fetch_success(products))
      })
      .catch(err => {
        const error = err.message
        console.log(error)
        dispatch(fetch_error(error))
      })
  }
}
