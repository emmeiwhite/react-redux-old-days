// import { connect } from 'react-redux'
import { borrow_book } from '../redux-library/bookActions'
import { useDispatch, useSelector } from 'react-redux'

const BookContainer = props => {
  // Get state value using useSelector
  const booksCount = useSelector(state => state.totalBooks)

  // Get dispatch function
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Current Book Count: {booksCount} </h1>
      <button onClick={() => dispatch(borrow_book())}>Borrow Book</button>
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
