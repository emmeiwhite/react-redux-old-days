import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux-library/productActions'

const Products = () => {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (products.loading) return <h2>Loading ...</h2>

  if (products.error) return <h2>Error ...</h2>

  return (
    <article className="bg-blue-300 mt-10 p-5">
      <h1 className="text-3xl  font-semibold text-center text-green-900">Products</h1>
    </article>
  )
}
export default Products
