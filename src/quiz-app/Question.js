import Options from './Options'

export default function Question({
  currentQuestion,
  index,
  totalQuestions,
  totalScore,
  dispatch,
  score,
  answerSelected
}) {
  console.log(currentQuestion)
  const { question } = currentQuestion
  return (
    <div>
      <h3 className="text-2xl font-bold my-8">{question}</h3>
      <div className="flex justify-between mb-10">
        <p>
          Question {index + 1} / {totalQuestions}
        </p>
        <p>
          {score} / {totalScore} points
        </p>
      </div>

      <Options
        dispatch={dispatch}
        currentQuestion={currentQuestion}
        answerSelected={answerSelected}
      />

      <div className="flex justify-between mt-20">
        <button className="px-8 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition">
          07:12
        </button>

        {index > 0 && (
          <button
            className="px-8 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition"
            onClick={() => dispatch({ type: 'prev_question', payload: index - 1 })}>
            Prev
          </button>
        )}

        <button
          className="px-8 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition"
          onClick={() => dispatch({ type: 'next_question', payload: index + 1 })}>
          Next
        </button>
      </div>
    </div>
  )
}
