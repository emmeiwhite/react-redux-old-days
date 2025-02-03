import { useState } from 'react'
import { useToggle } from './useToggle'

export default function ToggleUI() {
  const { show, handleClick } = useToggle()
  const [progress, setProgress] = useState(1)
  const [count, setCount] = useState(0)

  function handleCount(e) {
    setCount(Number(e.target.value))
  }

  function handleDecrease() {
    setCount(c => c - progress)
  }

  function handleIncrease() {
    setCount(c => c + progress)
  }

  let date = new Date()
  date.setDate(date.getDate() + count)

  console.log(date)
  return (
    <div className="text-center">
      <h1>Toggle JSX</h1>
      <button
        className="px-4 py-2 bg-blue-400"
        onClick={handleClick}>
        toggle
      </button>
      {show && <p>Life moves on!</p>}

      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={progress}
          onChange={e => setProgress(Number(e.target.value))}
        />

        <div>
          <button
            onClick={handleDecrease}
            className="px-2 bg-green-400">
            -
          </button>
          <input
            type="number"
            value={count}
            onChange={handleCount}
            className="border inline-block mx-3"
          />
          <button
            onClick={handleIncrease}
            className="px-2 bg-green-400">
            +
          </button>

          <p>
            {count === 0 ? 'Today' : `${count} days from today`} is {date.toDateString()}
          </p>
        </div>
      </div>
    </div>
  )
}
