const NextButton = ({ dispatch, answerSelected, currentIndex, totalQuestions }) => {
  // If no option has been selected we return null and nothing is rendered from the component
  if (answerSelected === null) return null

  if (currentIndex < totalQuestions - 1) {
    return (
      <button
        className="px-8 py-2 border-2 border-gray-500 rounded-full text-gray-600 hover:bg-pray-300 transition hover:text-black"
        onClick={() => dispatch({ type: 'next_question' })}>
        Next
      </button>
    )
  }

  if (currentIndex === totalQuestions - 1) {
    return (
      <button
        className="px-8 py-2 border-2 border-gray-500 rounded-full text-gray-600 hover:bg-pray-300 transition hover:text-black"
        onClick={() => dispatch({ type: 'finish_quiz' })}>
        Finish
      </button>
    )
  }
}
export default NextButton
