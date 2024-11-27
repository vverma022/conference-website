import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConferencePage from './page/main'
import Tracks from './page/tracks'
import Instructions from './page/instructions'
import Commitee from './page/commitee'

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<ConferencePage />} />
       <Route path="/tracks" element={<Tracks />} />
       <Route path="/instructions" element={<Instructions />} />
        <Route path="/commitee" element={<Commitee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
