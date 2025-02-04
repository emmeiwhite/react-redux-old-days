import logo from './../assets/quiz-logo.png'
const QuizHeader = () => {
  return (
    <div className="sm:flex gap-8 items-center">
      <img
        src={logo}
        className="h-20 w-auto object-cover"
        alt="site react logo"
      />

      <h1 className="text-5xl">THE REACT QUIZ</h1>
    </div>
  )
}
export default QuizHeader
