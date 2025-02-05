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
  status: 'loading',
  currentIndex: 0
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

  if (action.type === 'next_question') {
    if (action.payload === state.questions.length) return { ...state, currentIndex: 0 }

    return {
      ...state,
      currentIndex: action.payload
    }
  }

  if (action.type === 'prev_question') {
    if (action.payload === -1) return { ...state, currentIndex: 14 }

    return {
      ...state,
      currentIndex: action.payload
    }
  }

  throw new Error('No Action Matched ')
}

const url = 'http://localhost:9000/questions'

const QuizApp = () => {
  const [{ status, questions, currentIndex }, dispatch] = useReducer(reducer, initialState)

  console.log(questions)
  const totalQuestions = questions.length

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios(url)

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
        {status === 'active' && (
          <Question
            currentQuestion={questions[currentIndex]}
            index={currentIndex}
            length={questions.length}
            dispatch={dispatch}
          />
        )}
      </QuizMain>
    </div>
  )
}
export default QuizApp
