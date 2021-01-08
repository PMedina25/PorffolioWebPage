import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { Col, Row  } from 'react-bootstrap';

const AboutMe = () => {
    const locationData = {
        'sevilla': {
            'lat': 37.3826,
            'lng': -5.99629
        },
        'amsterdam': {
            'lat': 52.3738,
            'lng': 4.89093
        },
        'lyon': {
            'lat': 45.74846,
            'lng': 4.84671
        }
    }

    return (
        <Row id="about-me" className="card card-body bg-light">
            <Col md={6} id="about-me-info">
                <h1>About Me</h1>
                <p>Computer engineer, full stack developer  and tech enthusiast.</p>
                <p>With experience in teamwork, always willing to learn new things and delighted at facing new challenges.</p>
                <p>Looking for a MERN Stack junior developer job, especially if it involves Machine Learning.</p>
            </Col>
            <Col md={6} id="about-me-map">
                <MapContainer center={[locationData.lyon.lat, locationData.lyon.lng]} zoom={4} scrollWheelZoom={true} id="mapContainer">
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[locationData.sevilla.lat, locationData.sevilla.lng]}>
                        <Popup>
                            <strong>Education: Universidad de Sevilla</strong> <br /> Computer Engineering Degree
                            <br />
                            <br />
                            <strong>Education: Universidad Pablo de Olavide</strong> <br /> Master in Computer Engineering
                            <br />
                            <br />
                            <strong>Experience: TTI Norte</strong> <br /> Internet of Things Developer
                        </Popup>
                    </Marker>
                    <Marker position={[locationData.amsterdam.lat, locationData.amsterdam.lng]}>
                        <Popup>
                            <strong>Education: Hogeschool van Amsterdam</strong> <br /> Mobile Development Minor
                            <br />
                            <br />
                            <strong>Experience: TamTam (part of dept)</strong> <br /> iOS App Developer
                        </Popup>
                    </Marker>
                </MapContainer>
            </Col>
        </Row> 
    )
}

export default AboutMe;
