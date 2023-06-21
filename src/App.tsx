import NavBar from './components/statics/NavBar'
import Footer from './components/statics/Footer'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import ListaPostagem from './components/posts/ListaPostagem'
import ListaTema from './components/themes/ListaTema'

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
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/temas" element={<ListaTema />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}