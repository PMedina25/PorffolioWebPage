import React from 'react';

// Import components
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import EducationExperience from '../components/organizations/Organizations';
import Projects from '../components/projects/Projects';
import Contact from '../components/Contact';


const MainPage = () => {
    return (
        <>
            <Navbar />
            <Home />
            <AboutMe />
            <Skills />
            <EducationExperience />
            <Projects />
            {/* <Contact />*/}
        </>
    )
}

export default MainPage;
