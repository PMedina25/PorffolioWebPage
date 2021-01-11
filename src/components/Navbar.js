import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

const navbar = () => {
    return (
        <Navbar id="navbar" className="navbar-expand-lg navbar-dark bg-dark">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#organizations">Education/Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link onClick={() => alert('I\'m so sorry. Contact section is still in development.')}>Contact</Nav.Link>
          </Nav>
        </Navbar>
    )
}

export default navbar;
