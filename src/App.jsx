import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConferencePage from './page/main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<ConferencePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
