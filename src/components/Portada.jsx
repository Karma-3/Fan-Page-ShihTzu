import React from 'react'
import '../styles/portada.css'

const Portada = () => {
    return (
        <section className='contenedor-portada relative'>
            <div data-aos="fade-right">

            <div className='texto-portada'>
                <h1>Fan de Shih Tzu</h1>
                <p className='w-5/12'>El Shih Tzu es una raza de perro pequeño y peludo, originaria de China. Su nombre proviene de la palabra china "perro león", ya que fueron criados para parecerse a los leones representados en la cultura china. Son conocidos por su temperamento alegre y feliz, son juguetones y simpáticos, y tienden a llevarse bien con personas de todas las edades y otros animales. </p>
                <div className='contenedor-botones flex justify-start'>   
                {/* <button className='bg-amber-900 text-white border-none font-bold'>Mas info</button> */}
                {/* <button className='bg-amber-900 text-white border-none font-bold'  > Contacto</button> */}
                </div>
            </div>
            </div>
                
            <div className="contenedor-imagen-portada">
            <figure>
                <div data-aos="fade-up">
                <img src="https://www.pngmart.com/files/12/Shih-Tzu-Puppy-PNG-Picture.png" alt="" />
            </div>
            </figure>
            </div>
        </section>
    )
}

export default Portada