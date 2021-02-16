import React, { useState } from 'react';

// Import bootstrap components
import { Col, Container, Row  } from 'react-bootstrap';

// Import react icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

const Home = () => {
    const backgroundVideo = 'https://res.cloudinary.com/dttybuhk5/video/upload/v1610876666/PorfolioWebPage/programming_cga9oq.mp4';

    const [displayEmail, setDisplayEmail] = useState(false);
    const [displayPhone, setDisplayPhone] = useState(false);

    return (
        <>
            <div id="home">
                <div id="home-text">
                    <h1>Hi, this is Pablo</h1>
                    <h1 style={{'color': '#8892B0'}}>Full Stack Developer (MERN Stack)</h1>
                    <p style={{'color': '#8892B0'}}>I'm a Computer Engineer based in Seville and Amsterdam, specialized in building web and mobile apps, both the frontend and the backend.</p>
                </div>
                
                <Row id="social-icons">
                        <a href="https://www.linkedin.com/in/pablo-medina-rodr%C3%ADguez-a3a8b9135/" rel="noreferrer" alt="linkedin profile" target="_blank" className="btn">
                            <FaLinkedin className="social-network-icon" />
                        </a>
                        <a href="https://github.com/PMedina25" rel="noreferrer" alt="github profile" target="_blank" className="btn">
                            <FaGithub className="social-network-icon" />
                        </a>
                        <a  rel="noreferrer" alt="email account" className="btn" onClick={() => alert('pablo.medina.us@gmail.com')}>
                            <HiOutlineMail id="email-icon" className="social-network-icon" />
                        </a>
                        <a rel="noreferrer" alt="email account" className="btn" onClick={() => alert('+34 639 538 774')}>
                            <AiOutlinePhone className="social-network-icon" />
                        </a>
                </Row>
            </div>
        </>
    );
}

export default Home;
