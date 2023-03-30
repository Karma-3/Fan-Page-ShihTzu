import React from 'react'
import '../styles/infoMascota.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
const InfoMascota = () => {

    AOS.init();

    return (
        <div data-aos="fade-up">

        <section className='contenedor-info-mascota'>
            <div className="contenedor-imagen">
            <figure>
                <img src="https://i.pinimg.com/originals/fa/59/35/fa59352bb4a5f79c64b5a9af0b312cb3.png" alt="" />
            </figure>
            </div>
            <div className="contenedor-info">
                <h2>Porqué elejir un Shih Tzu</h2>
                <p>Los Shih Tzus se destacan por su temperamento alegre y burbujeante,
                    son juguetones y amigables 
                    y tienden a llevarse bien con personas de todas las edades 
                    y con otros perros y mascotas de distintas especies. 
                    Es raro encontrar un shih tzu antipatico porque la mayoría son muy lindos.</p>

                <p>Debido a sus hocicos cortos, Shih Tzus no puede masticar bien,
                    pero les gusta excavar y algunas personas se complacen en ladrar molestos. 
                    Ya sea sentado en su regazo o caminando por el parque, 
                    lo impulsa un gran deseo de estar con la gente.</p>
            </div>
        </section>
        </div>
        )
}

export default InfoMascota