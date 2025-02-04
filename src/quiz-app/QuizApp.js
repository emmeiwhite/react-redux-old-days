import QuizHeader from './QuizHeader'
import QuizMain from './QuizMain'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Error from './Error'
import StartingScreen from './StartingScreen'
import Question from './Question'

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

  if (action.type === 'start') {
    return {
      ...state,
      status: 'active'
    }
  }

  throw new Error('No Action Matched ')
}

const url = 'http://localhost:9000/questions'

const QuizApp = () => {
  const [{ status, questions }, dispatch] = useReducer(reducer, initialState)

  const totalQuestions = questions.length

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
  return (
    <div className="mt-12 ">
      <QuizHeader />
      <QuizMain>
        {/* <p>15</p>
        <p>Questions</p> We are avoiding passing props with Component Composition*/}

        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartingScreen
            totalQuestions={totalQuestions}
            dispatch={dispatch}
          />
        )}
        {status === 'active' && <Question />}
      </QuizMain>
    </div>
  )
}
export default QuizApp
