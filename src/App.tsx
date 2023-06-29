import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import store from './store/store'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Cadastro from './pages/cadastro/Cadastro'
import NavBar from './components/statics/navbar/Navbar'
import Footer from './components/statics/footer/Footer'
import ListaTema from './components/themes/listaTema/ListaTema'
import DeletarPost from './components/posts/deletarPost/DeletarPost'
import DeletarTema from './components/themes/deletarTema/DeletarTema'
import CadastroPost from './components/posts/cadastroPost/CadastroPost'
import CadastroTema from './components/themes/cadastroTema/CadastroTema'
import ListaPostagem from './components/posts/listaPostagem/ListaPostagem'
import 'react-toastify/dist/ReactToastify.css'

export default function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes> // Antigo Switch

          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/temas" element={<ListaTema />} />
          <Route path="/formularioPostagem" element={<CadastroPost />} />
          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
          <Route path="/formularioTema" element={<CadastroTema />} />
          <Route path="/formularioTema/:id" element={<CadastroTema />} />
          <Route path="/deletarPostagem/:id" element={<DeletarPost />} />
          <Route path="/deletarTema/:id" element={<DeletarTema />} />
          <Route path={`*`} element={<Navigate to={`/`} />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}