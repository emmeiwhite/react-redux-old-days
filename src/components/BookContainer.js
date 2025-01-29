import { connect } from 'react-redux'
import { borrow_book } from '../redux-library/bookActions'

const BookContainer = props => {
  return (
    <div>
      <h1>Current Book Count: {props.bookCount} </h1>
      <button onClick={props.borrowBook}>Borrow Book</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer)
