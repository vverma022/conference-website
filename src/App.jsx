import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ConferencePage } from './page/main'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConferencePage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
