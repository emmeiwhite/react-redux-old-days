// import { connect } from 'react-redux'
import { borrow_book } from '../redux-library/bookActions'
import { useDispatch, useSelector } from 'react-redux'

const BookContainer = props => {
  // Get state value using useSelector
  const booksCount = useSelector(state => state.books.totalBooks)
  // Get dispatch function
  const dispatch = useDispatch()
  return (
    <div className="flex gap-4 mt-12 bg-slate-500 p-4">
      <h1 className="text-xl font-semibold text-white inline-flex p-2 gap-2 items-center justify-center">
        Books in the Library:{' '}
        <span className="block rounded-md  text-white w-12 h-12  grid place-items-center">
          {' '}
          {booksCount}{' '}
        </span>
      </h1>
      <button
        onClick={() => dispatch(borrow_book())}
        className="bg-blue-400 block text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 self-center">
        Borrow Book
      </button>
    </div>
  )
}

export default BookContainer

/* --- This whole boilerplate code is not required
const mapStateToProps = state => {
  return {
    bookCount: state.totalBooks
  }
}

const mapDispatchToProps = dispatch => {
  return {
    borrowBook: () => dispatch(borrow_book())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
--- */
