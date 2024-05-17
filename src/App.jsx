import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cadastro from './components/Cadastro'
import CadastroConsumidor from './components/CadastroConsumidor'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="cadastro" element={<Cadastro />} />
      <Route path='cadastroconsumidor' element={<CadastroConsumidor />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
