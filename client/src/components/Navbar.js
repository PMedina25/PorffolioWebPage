import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa';

const NavbarComponent = () => {
  const { openSidebar } = useGlobalContext();

  return (
      <Navbar id="navbar" className="navbar-expand-lg navbar-dark bg-dark" expand="lg">
        <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about-me">About Me</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#organizations">Education / Experience</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link onClick={() => alert('I\'m so sorry. Contact section is still in development.')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  )
}

export default NavbarComponent;
