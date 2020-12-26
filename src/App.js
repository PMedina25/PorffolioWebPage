import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { Image, Row, Col } from 'react-bootstrap';

// Import components
import Navbar from './components/Navbar';

// Import images
import profilePhoto from './images/FotoPabloMedina.png';

function App() {
  console.log(profilePhoto)
  return (
    <Container fluid>
      <div id="main">

          <Navbar />

          <Container id="home" fluid>
            <Row>
              <Col md={4}>
                <Image id="profile-image" src={profilePhoto} alt="Photo of Pablo" roundedCircle thumbnail fluid />
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

          <Container id="skills">
            
          </Container>
        </div>
      </Container>
  )
}

export default App;
