import React from 'react';
import './styles/home.css';

/* Import components */
import Tooltip from './Tooltip';

/* Import bootstrap components */
import { Row  } from 'react-bootstrap';

/* Import react icons */
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

const Home = () => {
    return (
        <>
            <div id="home">
                <div id="home-text">
                    <h1 className="animate-pop-in">Hi, this is Pablo</h1>
                    <h1 className="animate-pop-in" style={{'color': '#8892B0'}}>Full Stack Developer (MERN Stack)</h1>
                    <p className="animate-pop-in" style={{'color': '#8892B0'}}>I'm a Computer Engineer based in Seville and Amsterdam, specialized in building web and mobile apps, both the frontend and the backend.</p>
                </div>
                
                <Row id="social-icons">
                        <a 
                          href="https://www.linkedin.com/in/pablo-medina-rodr%C3%ADguez-a3a8b9135/" 
                          className="social-icon-container btn animate-pop-in" 
                          rel="noreferrer" 
                          alt="linkedin profile" 
                          target="_blank"
                        >
                            <FaLinkedin className="social-network-icon" />
                        </a>
                        <a 
                          href="https://github.com/PMedina25" 
                          className="social-icon-container btn animate-pop-in" 
                          rel="noreferrer" alt="github profile" 
                          target="_blank"
                        >
                            <FaGithub className="social-network-icon" />
                        </a>
                        <a  
                          rel="noreferrer" 
                          className="social-icon-container btn animate-pop-in anchor-tooltip" 
                          alt="email account" 
                        >
                            <HiOutlineMail id="email-icon" className="social-network-icon" />
                            <Tooltip tooltipText={'pabmedinarod@gmail.com'}/>
                        </a>
                        <a 
                          rel="noreferrer" 
                          className="social-icon-container btn animate-pop-in anchor-tooltip"
                          alt="phone number"
                        >
                            <AiOutlinePhone className="social-network-icon" />
                            <Tooltip tooltipText={'+34 639 538 774'}/>
                        </a>
                </Row>
            </div>
        </>
    );
}

export default Home;
