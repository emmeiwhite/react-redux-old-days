import { render, screen } from '@testing-library/react'

import '@testing-library/jest-dom' // Ensure this import is present
import App from './App'

test('renders the h1 element', function () {
  // 1. render the component to test
  render(<App />)

  // 2. Querying the Virtual DOM created by RTL
  const heading = screen.getByText(/Testing is Fun/i)

  // 3. Assertion: To check heading exists in the DOM
  expect(heading).toBeInTheDocument()
})
