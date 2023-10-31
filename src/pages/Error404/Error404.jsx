import React from 'react';
import { NavLink } from "react-router-dom";
import Error from '../../components/assets/error.png'
import '../Error404/Error404.scss'

export default function Error404() {
    return (
        <div className='error'>
            <img src={Error} alt="Error404" />
            <h1>Oups la page que vous demandez n'existe pas.</h1>
            <NavLink to="/"><p>Retourner sur la page d'accueil</p></NavLink>
        </div>
    )
}