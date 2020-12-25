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
          <div id="home">
            <Container id="image-container">
              <Row>
                <Col xs={6} md={4}>
                  <Image src={profilePhoto} alt="Photo of Pablo" roundedCircle thumbnail fluid />
                </Col>
                <Col xs={10} md={8} id="greetings">
                  <h1 className="fluid">Hi, I'm Pablo</h1>
                  <h3>Full Stack Developer with knowledge in TensorFlow</h3>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </Container>
  )
}

export default App;
