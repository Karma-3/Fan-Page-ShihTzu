import React from 'react'
import {GiSittingDog} from 'react-icons/gi'
import {SiDatadog} from 'react-icons/si'
import {MdAttachMoney} from 'react-icons/md'
import '../styles/asistencia.css'
import {AiFillHeart} from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Asistencia = () => {
    AOS.init();

    return (
        <div data-aos="fade-right">
            
        <section className="contenedor-asistencia">
            <h2>Porque Elegir a nuestros perrunos?</h2>
            <div className="asistencia">

            <div className='flex mr-3 ml-0 asistencia-item '>
                <div className='imagen ml-0'>
            <figure><GiSittingDog/></figure>
                </div>
                <div>
            <h3>Son cariñosos</h3>
            <p>A nuestros amigos les gusta que los acaricien</p>
                </div>
            </div>
            
            <div className='flex asistencia-item' >
                <div className='imagen'>
            <figure><AiFillHeart/></figure>
                </div>
                <div>
            <h3>Son leales</h3>
            <p>Siempre estaran para ti</p>
                </div>
            </div>
            
            <div className='flex asistencia-item'>
                <div className='imagen'>
            <figure><SiDatadog/></figure>
                </div>
                <div>
            <h3>Son saludables</h3>
            <p>Nos preocupa la salud de nuestros animales</p>
                </div>
            </div>

            </div>
        </section>
        
        </div>
        )
}

export default Asistencia