import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import CadastroConsumidor from './components/CadastroConsumidor';
import CadastroLojista from './components/CadastroLojista';
import DadosLojista from './components/DadosLojista';
import Principal from './pages/Principal';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const location = useLocation();

  const backgroundClass = location.pathname === '/' || location.pathname.startsWith('/cadastro') ? 'body-bg' : '';

  return (
    <div className={backgroundClass}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cadastro" element={<Cadastro />} />
        <Route path="cadastroconsumidor" element={<CadastroConsumidor />} />
        <Route path="cadastrolojista" element={<CadastroLojista />} />
        <Route path="dadoslojista" element={<DadosLojista />} />
        <Route path="principal" element={<Principal />} />
      </Routes>
    </div>
  );
}

export default App;
