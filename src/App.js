/**
 * Import packages
 */
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * Import Bootstrap Components
 */
import { Container } from 'react-bootstrap';


/**
 * Import Components
 */
import NavBar from './components/common/Navbar';
import Home from './components/home/Home';
import AboutMe from './components/about-me/AboutMe';
import Organizations from './components/organizations/Organizations';
import Projects from './components/projects/Projects';
import AllProjects from './pages/AllProjects';
import Contact from './components/contact/Contact';
import Footer from './components/common/Footer';


/**
 * App Component
 */
const App = () => {
  return (
    <>
      <Router>
        <Route path="/" exact>
          <NavBar />
          <Container>
            <Home />
            <Projects />
            <AboutMe />
            <Organizations />
            <Contact />
          </Container>
        </Route>
        <Route path="/projects" component={AllProjects} exact />
        <Footer />
      </Router>
    </>
  );
}

export default App;
