import FinishedScreen from './FinishedScreen'

export default function Options({
  currentQuestion,
  dispatch,
  answerSelected,
  currentIndex,
  totalQuestions
}) {
  const { correctOption, options } = currentQuestion

  const hasAnswered = answerSelected !== null

  const handleClick = index => {
    dispatch({ type: 'user_answer', payload: index })
  }

  if (currentIndex < totalQuestions) {
    return (
      <article className="flex gap-x-9 flex-wrap">
        {options?.map((option, index) => {
          return (
            <button
              className={`rounded-full px-5 py-2  text-white mb-8 transition-all duration-500 ease-in-out font-semibold  cursor-pointer min-w-40
              ${
                hasAnswered
                  ? index === currentQuestion.correctOption
                    ? 'bg-green-500 cursor-not-allowed'
                    : 'bg-orange-400 border border-black cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-700'
              }
              `}
              key={option}
              disabled={hasAnswered}
              onClick={() => handleClick(index)}>
              {option}
            </button>
          )
        })}
      </article>
    )
  }
}
