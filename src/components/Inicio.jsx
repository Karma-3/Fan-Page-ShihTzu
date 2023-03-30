import React from 'react'
import { Link } from 'react-router-dom'
import Asistencia from './Asistencia'
import Galeria from './Galeria'
import InfoMascota from './InfoMascota'
import Portada from './Portada'

const Inicio = () => {
    return (
        <>
        <Portada/>
        <Asistencia/>
        <InfoMascota/>
        <Galeria/>
        </>
        )
}

export default Inicio