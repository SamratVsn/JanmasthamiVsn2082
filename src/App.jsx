import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Wish from './Components/Wish'
import Contact from './Components/Contact'
import Error from './Components/Error'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
        <Route path="/Wish" element={<Wish />} />
        <Route path="/Contact" element={<Contact />} />
        </Routes>
    </div>
  )
}

export default App
