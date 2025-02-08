import Options from './Options'

export default function Question({
  currentQuestion,
  index,
  totalQuestions,
  maxPossibleScore,
  dispatch,
  score,
  answerSelected
}) {
  const { question } = currentQuestion
  return (
    <div>
      <h3 className="text-2xl font-bold my-8">{question}</h3>

      <Options
        dispatch={dispatch}
        currentQuestion={currentQuestion}
        answerSelected={answerSelected}
        currentIndex={index}
        totalQuestions={totalQuestions}
      />
    </div>
  )
}
