export default function StartingScreen({ totalQuestions, dispatch }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl">Welcome to the React Quiz!</h2>
      <p className="my-5">{totalQuestions} questions to test your React Mastery</p>
      <button
        className="px-5 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition"
        onClick={() => dispatch({ type: 'start' })}>
        Let's Start
      </button>
    </div>
  )
}
