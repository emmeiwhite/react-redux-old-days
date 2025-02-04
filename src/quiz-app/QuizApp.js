import QuizHeader from './QuizHeader'
import QuizMain from './QuizMain'

const QuizApp = () => {
  return (
    <div className="mt-12 ">
      <QuizHeader />
      <QuizMain>
        <p>15</p>
        <p>Questions</p>
      </QuizMain>
    </div>
  )
}
export default QuizApp
