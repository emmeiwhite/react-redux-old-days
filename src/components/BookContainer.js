import { borrow_book } from '../redux-library/bookActions'

const BookContainer = props => {
  return (
    <div>
      <h1>Current Book Count: {props.bookCount} </h1>
    </div>
  )
}

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

export default BookContainer
