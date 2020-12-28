import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card, CardDeck, Col, Container, Form, Image, Row  } from 'react-bootstrap';

import { FaLinkedin, FaGithub, FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { FiChevronRight } from 'react-icons/fi';
import { SiApollographql, SiGraphql, SiMongodb } from 'react-icons/si';


// Import components
import Navbar from './components/Navbar';
import EducationExperience from './components/EducationExperience';

// Import images
import profilePhoto from './images/FotoPabloMedina.png';
import openSirocoImg from './images/open-siroco.png';
import socialNetworkAppImg from './images/social-network-app.png';

function App() {
  return (
    <Container fluid>
      <div id="main">

          <Navbar />

          <Container id="home" fluid>
            <Row>
              <Col md={4}>
                <Image id="profile-image" src={profilePhoto} alt="Photo of Pablo" roundedCircle fluid />
              </Col>
              <Col md={8} id="greetings">
                <h1>Hi, I'm Pablo</h1>
                <h4>Full Stack Developer with knowledge in TensorFlow</h4>
              </Col>
            </Row>
          </Container>

          <Container id="about-me" fluid>
             <Col md={6} id="about-me-info">
               <h1>About Me</h1>
               <p>Computer engineer, full stack developer  and tech enthusiast.</p>
               <p>With experience in teamwork, always willing to learn new things and delighted at facing new challenges.</p>
               <p>Looking for a MERN Stack junior developer job, especially if it involves Machine Learning.</p>
             </Col>
             <Col md={6} id="about-me-grid">
               <Image className="image-item" />
               <Image className="image-item" />
               <Image className="image-item" />
               <Image className="image-item" />
               <Image className="image-item" />
               <Image className="image-item" />
               <Image className="image-item" />
               <Image className="image-item" />
               <Image className="image-item" />
             </Col>
          </Container>

          <Container id="skills" fluid>
            <Col md={6} id="skills-info">
               <h1>Skills</h1>
               <p>The main area of my expertise is all related to MERN Stack (<strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, <strong>Node</strong>).</p>
               <p>
                  This involves skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>JSX</strong>, 
                  besides CSS frameworks such as <strong>Bootstrap</strong> and <strong>Semantic UI</strong>. For managing react states,
                  I have developed some applications with <strong>React Hooks</strong>, <strong>Context API</strong> and <strong>Redux</strong>.
               </p>
               <p>Moreover, experienced in developing Backend services with <strong>GraphQL</strong> and <strong>Apollo Server</strong>.</p>
               <p>Finally, as a complementary background, <strong>TensorFlow</strong> and <strong>Keras</strong> with <strong>Python</strong>.</p>
             </Col>
          </Container>

          <EducationExperience />

          <Container id="projects" fluid>
            <h1 style={{'textAlign': 'center'}}>Projects</h1>
            <CardDeck>
              <Card>
                <Card.Img className="img-project" variant="top" src={openSirocoImg} />
                <Card.Body>
                  <Card.Title>Open Siroco</Card.Title>
                  <Card.Text>
                    Open Innovation Platform for Production 4.0 Colaborative Robot Systems.
                  </Card.Text>
                  <Button className="btn-project">Show More</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img className="img-project" variant="top" src={socialNetworkAppImg} />
                <Card.Body>
                  <Card.Title>MERNG Social Network</Card.Title>
                  <Card.Text>
                    Social media app using MongoDB, Express, Node, React, GraphQL and Node (the MERNG Stack).
                  </Card.Text>
                  <Button className="btn-project">Show More</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img className="img-project" variant="top" src={socialNetworkAppImg} />
                <Card.Body>
                  <Card.Title>MERNG Social Network</Card.Title>
                  <Card.Text>
                    Social media app using MongoDB, Express, Node, React, GraphQL and Node (the MERNG Stack).
                  </Card.Text>
                  <Button className="btn-project">Show More</Button>
                </Card.Body>
              </Card>
            </CardDeck>
            <Button id="btn-show-all" className="btn-project">
              Show all
              <FiChevronRight id="show-all-arrow" size={32} fontWeight={700}/>
            </Button>
          </Container>
          
          <Container id="contact" fluid>
            <h1 style={{'textAlign': 'center'}}>Contact</h1>
            <Form id="contact-form">
              <Form.Row>
                <Form.Group as={Col} controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control placeholder="Enter subject" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Enter message" rows={4} />
              </Form.Group>

              <Button className="btn-project" type="submit">
                Send
              </Button>
            </Form>
          </Container>

          <footer>
            <Container fluid>
              <Row>
                <Col id="social-networks" md={6}>
                  <a href="https://www.linkedin.com/in/pablo-medina-rodr%C3%ADguez-a3a8b9135/" alt="linkedin profile" target="_blank" class="btn">
                    <FaLinkedin className="social-network-icon" />
                  </a>
                  <a className="social-network-icon" href="https://github.com/PMedina25" alt="github profile" target="_blank" class="btn">
                    <FaGithub className="social-network-icon" />
                  </a>
                  <a className="social-network-icon" href="mailto:pablo.medina.us@gmail.com" alt="email account" target="_blank" class="btn">
                    <HiOutlineMail className="social-network-icon" />
                  </a>
                </Col>
                <Col id="technologies" md={6}>
                  <span>Developed with:</span>
                  <FaReact size={32} style={{'paddingLeft': '12'}} />
                  <FaBootstrap size={32} style={{'paddingLeft': '12'}} />
                  <FaNodeJs size={32} style={{'paddingLeft': '12'}} />
                  <SiMongodb size={32} style={{'paddingLeft': '12'}} />
                  <SiApollographql size={32} style={{'paddingLeft': '12'}} />
                  <SiGraphql size={32} style={{'paddingLeft': '12'}} />
                </Col>
              </Row>
            </Container>
          </footer>
        </div>
      </Container>
  )
}

export default App;
