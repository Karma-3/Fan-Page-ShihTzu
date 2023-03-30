import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/header.css'
import ScrollToTop from 'react-scroll-to-top'
import {BsWhatsapp} from 'react-icons/bs'
import { Tooltip as ReactTooltip } from "react-tooltip";

const Header = () => {
  return (
    <>
    <header>
      <div className='nombre'>
        <span>Shih Tzu Lovers</span>
      </div>
      <nav>
        <Link to={'/'}><span>Inicio</span></Link>
        <Link to={'/galeria'}><span>Galeria</span></Link>
        <Link to={'/contactos'}><span className='contacto'>Contactos</span></Link>
      </nav>
    </header>
    <ScrollToTop smooth className='button-to-up  rounded-t-3xl' />
    <a href="https://wa.me/3415595913?text=Hola%20Me%20Interesa%20Saber%20Si%20Hay%20Shih%20Tzu%20Disponibles"id='wp' data-tooltip-html='Hola'>
      <div className='contenedor-wp'>
        <div className='wp'>
          <BsWhatsapp/>
        </div>
      </div>

            </a>
            <section className='navbar-contenedor '>
            <div className="navbar contenedor-navbar">
  <div className="navbar-start w-48">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 menu-navbar bg-white font-bold">
        <li><Link to={'/'}>Inicio</Link></li>
        <li><Link to={'/galeria'}>Galeria</Link></li>
        <li className='bg-red-800 text-white radiues rounded-lg' ><Link to={'/contactos'}>Contactos</Link></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">Analia Laporta</a>
  </div>

</div>
            </section>
    </>
  )
}

export default Header