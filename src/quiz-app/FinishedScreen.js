const FinishedScreen = ({ score, maxPossibleScore, dispatch }) => {
  let percentage = (score / maxPossibleScore) * 100

  return (
    <div>
      <p className="px-10 py-6 bg-blue-400 text-white rounded-full text-center text-xl mb-12">
        You scored <strong>{score}</strong> out of <strong>{maxPossibleScore}</strong> (
        {Math.ceil(percentage)}%)
      </p>

      <div className="flex justify-end">
        <button
          className="px-8 py-2 border-2 border-gray-500 rounded-full text-gray-600 hover:bg-pray-300 transition hover:text-black inline-block"
          onClick={() => dispatch({ type: 'restart' })}>
          Restart
        </button>
      </div>
    </div>
  )
}
export default FinishedScreen
