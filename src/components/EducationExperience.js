import React from 'react';

import { Card, CardDeck, Col, Container, Image, Row  } from 'react-bootstrap';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// import images
import freeCodeCampLogo from '../images/freecodecamp-logo.jpg';
import universidadSevillaLogo from '../images/universidad-sevilla.png'
import ttinorteLogo from '../images/ttinorte.png';


function EducationExperience() {
    return (
        <Container id="education-experience" fluid>
            <Row>
              <Col md={4}>
                <h1>Education</h1>
              </Col>
              <Col md={4}>
                <h1>Experience</h1>
              </Col>
              <Col md={4}>
                <h1>Certifications</h1>
              </Col>
            </Row>
            <CardDeck>
                <Card id="education" className="slider-card">
                  <FiChevronLeft className="left-arrow-slider" />
                  <div className="card-content">
                    <Image src={universidadSevillaLogo} className="card-slider-image" roundedCircle />
                    <Card.Body>
                      <Card.Title>Education title</Card.Title>
                      <Card.Text>
                        This is a education card. Here we display the education info.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">2014-2019</small>
                    </Card.Footer>
                  </div>
                  <FiChevronRight className="right-arrow-slider" />
                </Card>
                <Card id="experience" className="slider-card">
                  <FiChevronLeft className="left-arrow-slider" />
                  <div className="card-content">
                    <Image src={ttinorteLogo} className="card-slider-image" roundedCircle />
                    <Card.Body>
                      <Card.Title>Experience title</Card.Title>
                      <Card.Text>
                        This is a experience card. Here we display the experience info.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">2014-2019</small>
                    </Card.Footer>
                  </div>
                  <FiChevronRight className="right-arrow-slider" />
                </Card>
                <Card id="certifications" className="slider-card">
                  <FiChevronLeft className="left-arrow-slider" />
                  <div className="card-content">
                    <Image src={freeCodeCampLogo} className="card-slider-image" roundedCircle />
                    <Card.Body>
                      <Card.Title>Certifications title</Card.Title>
                      <Card.Text>
                        This is a certification card. Here we display the certification info.
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">2014-2019</small>
                    </Card.Footer>
                  </div>
                  <FiChevronRight className="right-arrow-slider" />
                </Card>
            </CardDeck>
          </Container>
    )
}

export default EducationExperience;