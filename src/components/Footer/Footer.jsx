import React from 'react';
import '../Footer/footer.scss'
import footer from '../assets/footer.png'

const Footer = () => {
    return (
        <div className='footer'>
        <img src={footer} alt={footer.title} />
    </div>
    );
};

export default Footer;