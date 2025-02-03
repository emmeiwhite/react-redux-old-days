import { useToggle } from './useToggle'

export default function ToggleUI() {
  const { show, handleClick } = useToggle()
  return (
    <div className="text-center">
      <h1>Toggle JSX</h1>
      <button
        className="px-4 py-2 bg-blue-400"
        onClick={handleClick}>
        toggle
      </button>
      {show && <p>Life moves on!</p>}
    </div>
  )
}
