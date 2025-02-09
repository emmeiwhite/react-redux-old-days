import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Login from './Login'

import userEvent from '@testing-library/user-event'

test('it shows two inputs & a button', () => {
  // Step-1: render the component
  render(<Login />)

  // Step-2: Manipulate the component or find an element in it (Querying Virtual DOM in the node environment)
  const inputs = screen.getAllByRole('textbox')
  const button = screen.getByRole('button')

  // Assertion: Make sure the component is doing what we expect it to do
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

test('it calls onUserSubmit when the form is submitted', () => {
  // Render the Component
  const mock = jest.fn()
  render(<Login onUserSubmit={mock} />)

  // Manipulate or find an element
  //   const [userName, userEmail] = screen.getAllByRole('textbox')
  const userEmail = screen.getByLabelText(/Gmail:/i)
  const userName = screen.getByLabelText(/Name:/i)
  const button = screen.getByRole('button')

  // Simulate the input typing [2 steps: Focus(click() + typing(keyboard))]
  // 1) Simulating userName input typing
  userEvent.click(userName)
  userEvent.keyboard('rawdha')

  // 2) Simulating userEmail input typing
  userEvent.click(userEmail)
  userEvent.keyboard('rawdha@gmail.com')

  // Simulating the button click
  userEvent.click(button)
  //Assertion to make sure the clicking on the button calls onUserSubmit with email / name
  expect(mock).toHaveBeenCalled() // to have been called at least once
  expect(mock).toHaveBeenCalledWith({
    name: 'rawdha',
    gmail: 'rawdha@gmail.com'
  })
})
