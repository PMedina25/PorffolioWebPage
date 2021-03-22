import React from 'react';
import './styles/navbar.css';

import { GiHamburgerMenu } from 'react-icons/gi';

import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar id="navbar" expand="lg" fixed="top">
            <Navbar.Brand className="navigation-color navbar-brand animate-pop-in" href="#home">Pablomedina.</Navbar.Brand>
            <Navbar.Toggle id="navbar-collapse-button"  aria-controls="basic-navbar-nav"><GiHamburgerMenu id="navbar-toggle-icon" /></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav" className="navigation-color">
                <Nav id="navigation-items" className="mr-auto">
                    <Nav.Link className="link-item animate-pop-in" href="#home">Home{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                    <Nav.Link className="link-item animate-pop-in" href="#projects">Projects{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                    <Nav.Link className="link-item animate-pop-in" href="#about">About{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                    <Nav.Link className="link-item animate-pop-in" href="#organizations">Training && Experience{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                    <Nav.Link className="link-item animate-pop-in" href="#contact">Contact{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
