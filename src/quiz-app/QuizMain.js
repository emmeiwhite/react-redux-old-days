import { useEffect, useReducer } from 'react'
import axios from 'axios'

const initialState = {
  questions: [],

  // 'loading','error','ready','active','finished'
  status: 'loading'
}

function reducer(state, action) {
  if (action.type === 'data_received') {
    return {
      ...state,
      questions: action.payload,
      status: 'ready'
    }
  }

  if (action.type === 'data_failed') {
    return {
      ...state,
      status: 'error'
    }
  }

  throw new Error('No Action Matched ')
}

const url = 'http://localhost:9000/questions'

const QuizMain = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios(url)
        console.log(data)
        dispatch({ type: 'data_received', payload: data })
      } catch (error) {
        dispatch({ type: 'data_failed' })
      }
    }

    fetchData()
  }, [])
  return <main className="sm:px-16 mt-12">{children}</main>
}
export default QuizMain
