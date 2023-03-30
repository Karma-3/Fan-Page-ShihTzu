import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/contacto.css'
import {GrFacebook, GrInstagram} from 'react-icons/gr'
import {HiOutlineMail, HiPhone, HiLocationMarker} from 'react-icons/hi'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const formularioContacto = () =>{
    const form = useRef();
    
    AOS.init();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7zhjo8m', 'template_0gibq7h', form.current, 'G9OELfPAFdVpPP2NG')
        .then((result) => {
            // console.log(result.text);
            toast.success('Se envio correctamente', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
                });
        }, (error) => {
            toast.error('No se pudo enviar, Vuelve a intentarlo', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light'
                });
        });
    };
        return (
            <>
            <section className='contenedor-contacto'>
                <div data-aos="fade-right">

                <div className='informacion-contacto'>
                <h1>Contacto</h1>
                <p>Complete el formulario asi nos pondremos en contacto con usted.</p>
                    <div className="contactos">
                        <a href="https://wa.me/3415595913?text=Hola%20Me%20Interesa%20Saber%20Si%20Hay%20Shih%20Tzu%20Disponibles"><HiPhone/>3415 59-5913</a>
                        <a href="mailto:nicolaspeinado96@gmail.com"><HiOutlineMail/>nicolaspeinado96@gmail.com</a>
                        <a href=""><GrFacebook/>Nicolas Peinado</a>
                        <a href="https://www.instagram.com/shit_zumania/"><GrInstagram/>shit_zumania</a>
                        <a href=""><HiLocationMarker/>Rosario, Zona Norte</a>
                    </div>
                </div>
                </div>

                <div data-aos="fade-left">
            <div className="contenedor-formulario">
            <form ref={form} onSubmit={sendEmail}>
        <label>Nombre</label>
        <input type="text" className='bg-transparent input' placeholder='Analia Laporta' name="user_name" />
        <label>Correo Electronico</label>
        <input type="email" className='bg-transparent input' placeholder='analia345@gmail.com' name="user_email" />
        <label>Mensaje</label>
        <textarea name="message" className=' h-full' placeholder='Mensaje' />
        <input type="submit" className='boton w-auto'   value="Enviar" />
        </form>
            </div>
                </div>
            </section>
    
    <ToastContainer toastStyle={{color: 'black'}}/>
            </>
    )
}

export default formularioContacto;