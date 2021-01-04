import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EducationExperience from './components/EducationExperience';

function App() {
  return (
      <div id="main">

          <Navbar />

          <Home />

          <AboutMe />

          <Skills />

          <EducationExperience />

          <Projects />

          <Contact />
          
          <Footer />
        </div>
  )
}

export default App;
