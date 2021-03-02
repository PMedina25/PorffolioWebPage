import React from 'react';
import './styles/footer.css';

import { FaAws, FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiApollographql, SiGraphql, SiMongodb } from 'react-icons/si';
import { AiOutlineSmile } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="footer">
            <p>Developed with love by Pablo<AiOutlineSmile className="footer-icon" /></p>
            <p>
                <FaReact className="footer-icon" />
                <FaBootstrap className="footer-icon" />
                <FaNodeJs className="footer-icon" />
                <SiGraphql className="footer-icon" />
                <SiApollographql className="footer-icon" />
                <SiMongodb className="footer-icon" />
                <FaAws className="footer-icon" />
            </p>
        </footer>
    );
}

export default Footer;
