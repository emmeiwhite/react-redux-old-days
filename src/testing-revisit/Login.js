import { useState } from 'react'

export default function LoginForm({ onUserSubmit }) {
  const [formData, setFormData] = useState({ name: '', gmail: '' })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!formData.name && !formData.gmail) return

    onUserSubmit(formData) // passing formData directly to the global state users and avoiding lifting state up, Global state is awesome
    setFormData({ ...formData, name: '', gmail: '' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 p-5">
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="border p-1 ml-1"
        />
      </label>
      <br />
      <br />
      <label>
        Gmail:
        <input
          type="email"
          name="gmail"
          value={formData.gmail}
          onChange={handleChange}
          className="border p-1 ml-1"
        />
      </label>
      <br />
      <br />
      <button
        type="submit"
        className="bg-blue-400 px-4 py-2 text-white cursor-pointer">
        Login
      </button>
    </form>
  )
}
