export default function Question({ currentQuestion, index, length, dispatch }) {
  console.log(currentQuestion)
  const { question, correctOption, options, points, id } = currentQuestion
  return (
    <div>
      <h3 className="text-2xl font-bold my-8">{question}</h3>
      <div className="flex justify-between mb-10">
        <p>
          Question {index + 1} / {length}
        </p>
        <p>0 / 280 points</p>
      </div>
      <ul>
        {options?.map(option => {
          return (
            <li
              className="rounded-full px-5 py-2 bg-blue-500 text-white mb-8 transition-all duration-500 ease-in-out font-semibold hover:bg-blue-400 hover:translate-x-8 hover:border-2 hover:border-black cursor-pointer"
              key={option}>
              {option}
            </li>
          )
        })}
      </ul>

      <div className="flex justify-between mt-20">
        <button className="px-8 py-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition">
          07:12
        </button>
        <button
          className="px-8 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition"
          onClick={() => dispatch({ type: 'next_question', payload: index + 1 })}>
          Next
        </button>
      </div>
    </div>
  )
}
