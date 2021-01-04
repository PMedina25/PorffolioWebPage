import React from 'react'

import profilePhoto from '../images/FotoPabloMedina.png';

import { Button, Card, CardDeck, Col, Container, Form, Image, Row  } from 'react-bootstrap';
import { HiOutlineMail } from 'react-icons/hi';


import { FaLinkedin, FaGithub, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';

const Home = () => {
    return (
        <Row id="home">
            <Col md={12}>
                <Row>
                    <Col className="m-auto text-center" lg={4} md={6}>
                        <Image id="profile-image" src={profilePhoto} alt="Photo of Pablo" roundedCircle />
                    </Col>
                </Row>
                <div className="text-center">
                    <h1 className="display-4 text-center">Pablo Medina</h1>
                    <p className="lead text-center">Full Stack Developer (React and Node)</p>
                    <p>
                        <a href="https://www.linkedin.com/in/pablo-medina-rodr%C3%ADguez-a3a8b9135/" alt="linkedin profile" target="_blank" className="btn">
                            <FaLinkedin className="social-network-icon" />
                        </a>
                        <a className="social-network-icon" href="https://github.com/PMedina25" alt="github profile" target="_blank" className="btn">
                            <FaGithub className="social-network-icon" />
                        </a>
                        <a className="social-network-icon" href="mailto:pablo.medina.us@gmail.com" alt="email account" target="_blank" className="btn">
                            <HiOutlineMail className="social-network-icon" />
                        </a>
                    </p>
                </div>
            </Col>
        </Row>
    )
}

export default Home;
