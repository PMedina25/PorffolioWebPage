import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import components
import MainPage from './pages/MainPage';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div id="main">
        <Route exact path="/" component={MainPage} />
        <Route exact path="/projects" component={Projects} />
        <Footer />
      </div>    
    </Router> 
  )
}

export default App;
