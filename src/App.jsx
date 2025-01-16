import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConferencePage from './page/main'
import Tracks from './page/tracks'
import Instructions from './page/instructions'
import Commitee from './page/commitee'
import { Navbar } from './sections/navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
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
