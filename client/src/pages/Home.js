import React from 'react';

// Import bootstrap components
import { Col, Container, Row  } from 'react-bootstrap';

// Import react icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// Import video
import backgroundVideo from '../assets/videos/mountains.mp4';

// Import components
import Sidebar from '../components/common/Sidebar'

const Home = () => {
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
                            <p>Full Stack Developer (React and Node)</p>
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
                        <a href="mailto:pablo.medina.us@gmail.com" rel="noreferrer" alt="email account" target="_blank" className="btn">
                            <HiOutlineMail className="social-network-icon" />
                        </a>
                </Row>
            </Container>
        </>
    );
}

export default Home;
