import { useEffect } from 'react'
import axios from 'axios'

const url = 'http://localhost:9000/questions'
const QuizMain = ({ children }) => {
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios(url)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return <main className="sm:px-16 mt-12">{children}</main>
}
export default QuizMain
