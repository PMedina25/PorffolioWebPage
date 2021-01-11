import React from 'react';

// Import bootstrap components
import { Col, Container, Row  } from 'react-bootstrap';

// Import react icons
import { FaLinkedin, FaGithub, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiApollographql, SiGraphql, SiMongodb } from 'react-icons/si';

const Footer = () => {
    return (
        <footer>
            <Container fluid>
              <Row>
                <Col id="social-networks" md={6}>
                  <a href="https://www.linkedin.com/in/pablo-medina-rodr%C3%ADguez-a3a8b9135/" rel="noreferrer" alt="linkedin profile" target="_blank" className="btn">
                    <FaLinkedin className="social-network-icon" />
                  </a>
                  <a href="https://github.com/PMedina25" alt="github profile" rel="noreferrer" target="_blank" className="btn">
                    <FaGithub className="social-network-icon" />
                  </a>
                  <a href="mailto:pablo.medina.us@gmail.com" rel="noreferrer" alt="email account" target="_blank" className="btn">
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

export default Footer;
