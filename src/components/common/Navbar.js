import React, { useState } from 'react';

import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar id="navbar" expand="lg" fixed="top">
            <Navbar.Brand className="navigation-color" href="#home">PMR</Navbar.Brand>
            <Navbar.Toggle  aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navigation-color">
                <Nav id="navigation-items" className="mr-auto">
                    <Nav.Link className="link-item" href="#home">Home{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                    <Nav.Link className="link-item" href="#link">About{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                    <Nav.Link className="link-item" href="#home">Experience{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                    <Nav.Link className="link-item" href="#home">Projects{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                    <Nav.Link className="link-item" href="#home">Contact{' '}<span className="navigation-color">{'/>'}</span></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
