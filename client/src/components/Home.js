import React from 'react';

// Import bootstrap components
import { Col, Image, Row  } from 'react-bootstrap';

// Import react icons
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

// Import profile photo
import profilePhoto from '../images/FotoPabloMedina.png';

const Home = () => {
    return (
            <Row id="home">
                <Col className="m-auto text-center" lg={4} md={6}>
                    <Image id="profile-image" src={profilePhoto} alt="Photo of Pablo" roundedCircle />
                    <div className="text-center">
                    <h1 className="display-4 text-center">Pablo Medina</h1>
                    <p className="lead text-center">Full Stack Developer (React and Node)</p>
                    <p>
                        <a href="https://www.linkedin.com/in/pablo-medina-rodr%C3%ADguez-a3a8b9135/" rel="noreferrer" alt="linkedin profile" target="_blank" className="btn">
                            <FaLinkedin className="social-network-icon" />
                        </a>
                        <a href="https://github.com/PMedina25" rel="noreferrer" alt="github profile" target="_blank" className="btn">
                            <FaGithub className="social-network-icon" />
                        </a>
                        <a href="mailto:pablo.medina.us@gmail.com" rel="noreferrer" alt="email account" target="_blank" className="btn">
                            <HiOutlineMail className="social-network-icon" />
                        </a>
                    </p>
                </div>
            </Col>
        </Row>
    );
}

export default Home;
