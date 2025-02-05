import { useState } from 'react'
export default function Options({ currentQuestion, dispatch }) {
  const { correctOption, options } = currentQuestion

  // We'll use this to check whether the user has clicked on a particular option because we have to setup the styling accordingly
  const [clickedOption, setClickedOption] = useState(null)

  const handleClick = index => {
    setClickedOption(index)
    if (index === correctOption) {
      dispatch({ type: 'correct_answer', payload: currentQuestion.points })
    }
  }
  return (
    <ul>
      {options?.map((option, index) => {
        return (
          <li
            className={`rounded-full px-5 py-2 bg-blue-500 text-white mb-8 transition-all duration-500 ease-in-out font-semibold hover:bg-blue-400   cursor-pointer hover:translate-x-8 
              ${index === clickedOption ? 'translate-x-8' : ''}
            ${
              clickedOption !== null // Only change colors after an option is clicked
                ? index === correctOption
                  ? 'bg-green-500 hover:bg-green-700'
                  : 'bg-orange-400 hover:bg-orange-600'
                : 'bg-blue-500 hover:bg-blue-400'
            }`}
            key={option}
            onClick={() => handleClick(index)}>
            {option}
          </li>
        )
      })}
    </ul>
  )
}
