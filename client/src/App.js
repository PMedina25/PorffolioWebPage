import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import pages
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Organizations from './pages/Organizations';
import Projects from './pages/Projects';
import AllProjects from './pages/AllProjects';

function App() {
  return (
      <Router>
          <Route path="/" component={Home} exact />
          <Route path="/aboutme" component={AboutMe} exact />
          <Route path="/skills" component={Skills} exact />
          <Route path="/organizations" component={Organizations} exact />
          <Route path="/projects" component={Projects} exact />
          <Route path="/allprojects" component={AllProjects} exact />
      </Router> 
  )
}

export default App;
