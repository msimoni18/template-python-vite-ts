import { useState, useEffect } from 'react'
import { get } from './utilities/requests'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Response = {
  message: string
  date: string
}

function App() {
  const [message, setMessage] = useState<Response>()

  useEffect(() => {
    get(
      'example',
      (response) => setMessage(response as Response),
      (error) => console.error(error),
    )
  }, [])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Docker application build with:</h1>
      <h2>Vite + Typescript + Python</h2>
      {message && (
        <div>
          <p>{message.message}</p>
          <p>{message.date}</p>
        </div>
      )}
    </>
  )
}

export default App
