import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { Router, Routes } from 'react-router-dom'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Routes path="/" element={<LandingPage />}/>
        </Router>
        </div>
    </>
  )
}
