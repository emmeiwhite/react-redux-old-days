// creating custom hook to encapsulate common logic for code reusability
import { useState } from 'react'
export const useToggle = defaultValue => {
  const [show, setShow] = useState(defaultValue)

  const handleClick = () => {
    setShow(!show)
  }
  return { show, handleClick }
}
