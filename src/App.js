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
        </div>
      </Container>
  )
}

export default App;
