import { store } from './redux-library/store'
import { Provider } from 'react-redux'

// import BookContainer from './components/BookContainer'
// import Pizza from './components/Pizza'
// import CustomerForm from './components/CustomerForm'
// import Products from './components/Products'
import LoginForm from './testing-revisit/Login'
import { useState } from 'react'
import ToggleUI from './custom_hooks/toggle/ToggleUI'
import QuizApp from './quiz-app/QuizApp'

function App() {
  // const [users, setUsers] = useState([])

  // function onUserSubmit(user) {
  //   setUsers([...users, user])
  // }
  return (
    <div className="container m-auto px-4">
      {/* <h1>Testing is Fun</h1> */}
      {/* <Provider store={store}>
        <LoginForm onUserSubmit={onUserSubmit} />

        <h2>LIST OF USERS:</h2>

        {users.map(user => {
          return (
            <p
              key={user.gmail}
              className="px-3 py-2 border bg-green-200 mb-3">
              {user.name} & {user.gmail}
            </p>
          )
        })}
      </Provider> */}
      <QuizApp />
    </div>
  )
}

export default App
