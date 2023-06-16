import NavBar from './components/statics/NavBar'
import Footer from './components/statics/Footer'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

export default function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}