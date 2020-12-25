import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import { Image, Row, Col } from 'react-bootstrap';

// Import components
import Navbar from './components/Navbar';

// Import images


function App() {
  return (
    <Container fluid>
      <div id="main">
          <Navbar />
          <div id="home">
            <img alt="Photo of Pablo" src={require('./images/FotoPabloMedina.png')} />
            <div id="greetings">
              <h1>Hi, I'm Pablo</h1>
              <h3>Full Stack Developer with knowledge in TensorFlow</h3>
            </div>
          </div>
      </div>
    </Container>
  )
}

export default App;
