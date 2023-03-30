import React from 'react'
import {BsInstagram, BsFacebook} from 'react-icons/bs'
import '../styles/footer.css'
const Footer = () => {
    return (
        <>
        <footer className="footer p-10 bg-stone-900 text-white text-lg">
                    <div>
                        <span className="footer-title flex">Contactos</span> 
                        <a className="link link-hover text-sky-600 text-lg" href='https://wa.me/3415595913?text=Hola%20Me%20Interesa%20Saber%20Si%20Hay%20Shih%20Tzu%20Disponibles'>
                        Nicolas Peinado
                        </a> 
                        <a className="link link-hover text-sky-600 text-lg" href='https://wa.me/341651-7436?text=Hola%20Me%20Interesa%20Saber%20Si%20Hay%20Shih%20Tzu%20Disponibles'>
                        Analia Laporta
                        </a> 
                    </div> 
                    
                    <div>
                        <span className="footer-title text-lg ">Siguenos</span> 
                        <div className="grid grid-flow-col gap-4 redes-sociales">
                        <a href="https://www.facebook.com/nicolas.peinado.397?mibextid=ZbWKwL" className='text-4xl'><BsFacebook/></a>
                        <a href="https://www.instagram.com/shit_zumania/" className='text-4xl'><BsInstagram/></a>
                        </div>
                    </div>
        </footer>
        </>
    )
}

export default Footer