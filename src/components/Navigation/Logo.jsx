import React from 'react';
import Img from '../assets/accueil.png'
import "../Navigation/Logo.scss"

const Logo = () => {
    return (
        <div className='logo'>
            <img src={Img} alt={Img.title} />
        </div>
    );
};

export default Logo;