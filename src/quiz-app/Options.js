export default function Options({ currentQuestion, dispatch }) {
  const { correctOption, options } = currentQuestion
  const handleClick = index => {
    if (index === correctOption) {
      console.log('The answer is correct')
      dispatch({ type: 'correct_answer', payload: currentQuestion.points })
    } else {
      console.log('The answer is incorrect')
      return
    }
  }
  return (
    <ul>
      {options?.map((option, index) => {
        return (
          <li
            className="rounded-full px-5 py-2 bg-blue-500 text-white mb-8 transition-all duration-500 ease-in-out font-semibold hover:bg-blue-400 hover:translate-x-8  cursor-pointer"
            key={option}
            onClick={() => handleClick(index)}>
            {option}
          </li>
        )
      })}
    </ul>
  )
}
