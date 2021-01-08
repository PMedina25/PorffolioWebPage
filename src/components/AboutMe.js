import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { Col, Row  } from 'react-bootstrap';

const AboutMe = () => {

    return (
        <Row id="about-me" className="card card-body bg-light">
            <Col md={6} id="about-me-info">
                <h1>About Me</h1>
                <p>Computer engineer, full stack developer  and tech enthusiast.</p>
                <p>With experience in teamwork, always willing to learn new things and delighted at facing new challenges.</p>
                <p>Looking for a MERN Stack junior developer job, especially if it involves Machine Learning.</p>
            </Col>
            <Col md={6} id="about-me-map">
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} id="mapContainer">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </Col>
        </Row> 
    )
}

export default AboutMe;
