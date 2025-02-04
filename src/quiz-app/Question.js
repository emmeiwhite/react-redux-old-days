export default function Question({ currentQuestion, index, length }) {
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
            <li className="rounded-full px-5 py-2 bg-blue-400 text-white mb-8 font-semibold">
              {option}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
