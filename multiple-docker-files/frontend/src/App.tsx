import { useState, useEffect } from 'react'
import { get } from './utilities/requests'
import reactLogo from './assets/react.svg'
import dockerLogo from './assets/docker.svg'
import pythonLogo from './assets/python.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Response = {
  message: string
  date: string
  hostname: string
}

function App() {
  const [message, setMessage] = useState<Response>()

  useEffect(() => {
    get(
      'example',
      (response) => setMessage(response as Response),
      (error) => console.log(error),
    )
  }, [])

  return (
    <div className="flex flex-col gap-8 justify-center items-center h-screen">
      <h1 className="text-2xl font-bold">Application built with</h1>
      <div className="flex">
        <div className="text-xl text-center">
          <h2>Vite</h2>
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <div className="text-xl text-center">
          <h2>React</h2>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <div className="text-xl text-center">
          <h2>Python</h2>
          <img src={pythonLogo} className="logo python" alt="Python logo" />
        </div>
        <div className="text-xl text-center">
          <h2>Docker</h2>
          <img src={dockerLogo} className="logo docker" alt="Docker logo" />
        </div>
      </div>
      <div className="flex gap-8 w-full justify-center">
        <div className="text-end">
          <h3 className="font-semibold">Message from Flask:</h3>
          <h3 className="font-semibold">Date & Time from Flask:</h3>
          <h3 className="font-semibold">Hostname:</h3>
        </div>
        <div>
          <h3>{message ? message.message : 'Not connected'}</h3>
          <h3>{message ? message.date : 'Not connected'}</h3>
          <h3>{message ? message.hostname : 'Not connected'}</h3>
        </div>
      </div>
    </div>
  )
}

export default App
