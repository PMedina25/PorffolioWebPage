import React, { useState } from 'react';

// Import bootstrap components
import { Col, Container, Row  } from 'react-bootstrap';

// Import react icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlinePhone } from 'react-icons/ai';

// Import components
import Sidebar from '../components/common/Sidebar';
import Submenu from '../components/home/Submenu';

const Home = () => {
    const backgroundVideo = 'https://res.cloudinary.com/dttybuhk5/video/upload/v1610876666/PorfolioWebPage/programming_cga9oq.mp4';

    const [displayEmail, setDisplayEmail] = useState(false);
    const [displayPhone, setDisplayPhone] = useState(false);

    return (
        <>
            <video src={backgroundVideo} type="video/mp4" autoPlay="autoplay" loop="loop" muted></video>
            <div className="overlay"></div>

            <Container id="home" fluid> 

                <Sidebar />

                <Row>
                    <Col xs={12} md={12} lg={12}>
                        <div id="home-text">
                            <h1>Hi, this is Pablo</h1>
                            <p>Full Stack Developer (MERN Stack)</p>
                        </div>
                    </Col>
                </Row>
                
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
            </Container>
        </>
    );
}

export default Home;
