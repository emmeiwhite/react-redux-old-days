import QuizHeader from './QuizHeader'
import QuizMain from './QuizMain'
import { useEffect, useReducer } from 'react'
import axios from 'axios'
import Loader from './Loader'
import Error from './Error'
import StartingScreen from './StartingScreen'
import Question from './Question'
import NextButton from './NextButton'
import Progress from './Progress'
import FinishedScreen from './FinishedScreen'

const initialState = {
  questions: [],
  // 'loading','error','ready','active','finished'
  status: 'loading',
  currentIndex: 0,
  score: 0,
  answerSelected: null
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
    return {
      ...state,
      currentIndex: state.currentIndex + 1,
      answerSelected: null
    }
  }

  if (action.type === 'prev_question') {
    if (action.payload === -1) return { ...state, currentIndex: 14 }

    return {
      ...state,
      currentIndex: action.payload
    }
  }

  if (action.type === 'user_answer') {
    // Grab the current Question
    const currentQuestion = state.questions.at(state.currentIndex)

    let isTrue = currentQuestion.correctOption === action.payload
    return {
      ...state,
      answerSelected: action.payload,
      score: isTrue ? state.score + currentQuestion.points : state.score
    }
  }

  if (action.type === 'finish_quiz') {
    return {
      ...state,
      status: 'finished'
    }
  }

  if (action.type === 'restart') {
    return {
      ...initialState,
      questions: state.questions,
      status: 'ready'
    }
  }

  throw new Error('No Action Matched ')
}

const url = 'http://localhost:9000/questions'

const QuizApp = () => {
  const [{ status, questions, currentIndex, score, answerSelected }, dispatch] = useReducer(
    reducer,
    initialState
  )

  // Let's create derived states and pass those as props:
  const totalQuestions = questions.length
  const maxPossibleScore = questions.reduce((acc, curr) => {
    return (acc += curr.points)
  }, 0)

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
          <>
            <Progress
              score={score}
              maxPossibleScore={maxPossibleScore}
              totalQuestions={totalQuestions}
              index={currentIndex}
              answerSelected={answerSelected}
            />
            <Question
              currentQuestion={questions[currentIndex]}
              index={currentIndex}
              totalQuestions={totalQuestions}
              dispatch={dispatch}
              maxPossibleScore={maxPossibleScore}
              score={score}
              answerSelected={answerSelected}
            />
            <div className="flex justify-end mt-10">
              <NextButton
                dispatch={dispatch}
                answerSelected={answerSelected}
                totalQuestions={totalQuestions}
                currentIndex={currentIndex}
              />
            </div>
          </>
        )}

        {status === 'finished' && (
          <FinishedScreen
            score={score}
            maxPossibleScore={maxPossibleScore}
          />
        )}
      </QuizMain>
    </div>
  )
}
export default QuizApp
