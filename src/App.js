import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import bootstrap components
import { Container } from 'react-bootstrap';

// Import pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Organizations from './pages/Organizations';
import Projects from './pages/Projects';
import AllProjects from './pages/AllProjects';
import NavBar from './components/common/Navbar';

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Home />
        <AboutMe />
        <Skills />
        <Organizations />
        <Projects />
        <Router>
          <Route path="/projects" component={AllProjects} exact />
        </Router>
      </Container>
    </>
  );
}

export default App;
