import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';

const Footer = () => {
    
    let location = useLocation();
    console.log(location.pathname);

    return (
        <div className={`footer 
            ${location.pathname === '/login' && 'footer--home'}
            ${location.pathname === '/armatuplan' && 'footer--plan'}`}>
            <div className="container">
                <p className="footer__title">© 2021 RIMAC Seguros y Reaseguros.</p>
            </div>
        </div>
    )
}

export default Footer;