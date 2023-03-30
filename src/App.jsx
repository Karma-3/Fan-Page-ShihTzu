import './App.css'
import Header from './components/Header'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './components/Inicio'
import Footer from './components/Footer'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import NoFunciona from './components/NoFunciona'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={ <Inicio/>}/>
    <Route path='/galeria' element={<Galeria/>}/>
    <Route path='/contactos' element={<Contacto/>}/>
    <Route path='*' element={<NoFunciona/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
