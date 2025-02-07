export default function Options({ currentQuestion, dispatch, answerSelected }) {
  const { correctOption, options } = currentQuestion

  const handleClick = index => {
    dispatch({ type: 'user_answer', payload: index })
  }
  return (
    <article className="flex gap-x-9 flex-wrap">
      {options?.map((option, index) => {
        return (
          <button
            className={`rounded-full px-5 py-2 bg-blue-500 text-white mb-8 transition-all duration-500 ease-in-out font-semibold hover:bg-blue-700 cursor-pointer min-w-40`}
            key={option}
            onClick={() => handleClick(index)}>
            {option}
          </button>
        )
      })}
    </article>
  )
}
