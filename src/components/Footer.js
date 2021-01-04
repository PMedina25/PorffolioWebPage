import React from 'react';

import { Button, Card, CardDeck, Col, Container, Form, Image, Row  } from 'react-bootstrap';

import { FaLinkedin, FaGithub, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiApollographql, SiGraphql, SiMongodb } from 'react-icons/si';

export default function Footer() {
    return (
        <footer>
            <Container fluid>
              <Row>
                <Col id="social-networks" md={6}>
                  <a href="https://www.linkedin.com/in/pablo-medina-rodr%C3%ADguez-a3a8b9135/" alt="linkedin profile" target="_blank" className="btn">
                    <FaLinkedin className="social-network-icon" />
                  </a>
                  <a className="social-network-icon" href="https://github.com/PMedina25" alt="github profile" target="_blank" className="btn">
                    <FaGithub className="social-network-icon" />
                  </a>
                  <a className="social-network-icon" href="mailto:pablo.medina.us@gmail.com" alt="email account" target="_blank" className="btn">
                    <HiOutlineMail className="social-network-icon" />
                  </a>
                </Col>
                <Col id="technologies" md={6}>
                  <span>Developed with:</span>
                  <FaReact size={32} style={{'paddingLeft': '12', 'color': 'white'}} />
                  <FaBootstrap size={32} style={{'paddingLeft': '12', 'color': 'white'}} />
                  <FaNodeJs size={32} style={{'paddingLeft': '12', 'color': 'white'}} />
                  <SiMongodb size={32} style={{'paddingLeft': '12', 'color': 'white'}} />
                  <SiApollographql size={32} style={{'paddingLeft': '12', 'color': 'white'}} />
                  <SiGraphql size={32} style={{'paddingLeft': '12', 'color': 'white'}} />
                </Col>
              </Row>
            </Container>
          </footer>
    )
}
