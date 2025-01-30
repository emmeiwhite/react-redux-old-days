import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux-library/productActions'

const Products = () => {
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  if (products.loading) return <h2>Loading ...</h2>

  if (products.error) return <h2>Error ...</h2>

  return (
    <article className="mt-10 p-5">
      <h1 className="text-4xl  font-semibold text-center text-green-900 mt-8">Products</h1>

      <p className="text-center mt-4 mb-16">
        Small App in (React, Redux, Redux-Thunk, Axios, Tailwind)
      </p>
      <section className="grid justify-items-center grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-10">
        {products.map(product => {
          const { id, image, description, title, price } = product
          return (
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col"
              key={id}>
              <img
                className="w-full h-72 object-fill rounded-lg"
                src={image}
                alt={description}
              />
              <div className="px-6 py-4 flex-1">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description.substring(0, 100)}...</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-red-400 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                  ${price}
                </span>
              </div>
            </div>
          )
        })}
      </section>
    </article>
  )
}
export default Products
