import React from 'react';
import '../assets/styles/components/Footer.scss';

const Footer = () => (
    <footer className="footer">
        <div className="footer__made">
            Made with
            {' '}
            <span role="img" aria-label="heart">♥</span>
            {' '}
            by
            <a
                href="https://www.linkedin.com/in/tiago-alc%C3%A1zar-le%C3%B3n-6061a0210/"
                rel="noopener noreferrer"
                target="_blank"
                className="logo"
            >
                <span className="logo-img">&lt;&gt;</span>
                {' '}
                <span>Tiago Alcazar</span>
            </a>
        </div>
        <div>
            CH, 
            <span>Santiago</span>
            , 2021
        </div>
    </footer>
);

export default Footer;
