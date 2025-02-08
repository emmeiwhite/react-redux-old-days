export default function Progress({
  index,
  totalQuestions,
  score,
  maxPossibleScore,
  answerSelected
}) {
  return (
    <>
      <progress
        value={index + Number(answerSelected !== null)}
        max={totalQuestions}
        className="w-full appearance-none bg-gray-100 rounded-full [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-green-500"
      />
      <div className="flex justify-between mb-10">
        <p>
          Question <strong>{index + 1}</strong> / {totalQuestions}
        </p>
        <p>
          <strong>{score}</strong> / {maxPossibleScore} points
        </p>
      </div>
    </>
  )
}
