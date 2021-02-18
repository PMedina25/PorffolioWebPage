import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import react icons
import { 
    FaDocker,
    FaNodeJs,
    FaReact
} from 'react-icons/fa';
import {
    SiGraphql,
    SiJavascript,
    SiJest,
    SiMongodb
} from 'react-icons/si';
import {
    DiGitBranch,
    DiMysql
} from 'react-icons/di';

// Import leaflet components
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Import bootstrap components
import { Button, Col, Row  } from 'react-bootstrap';

const API_KEY = '651fb2fadc414211aebeac8a17a62aeb';

const markerIcon = new L.Icon({
    iconUrl: `https://api.geoapify.com/v1/icon/?type=material&color=%2364ffda&icon=code&iconType=awesome&noWhiteCircle&apiKey=${API_KEY}`,
    iconSize: [31, 46], // size of the icon
    iconAnchor: [15.5, 42], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -45] // point from which the popup should open relative to the iconAnchor
});

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

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div id="about">
            <Row>
                <Col md={12}>
                    <h1 data-aos="fade-up"><span className="navigation-color">{'<'}</span>About Me{'  '}<span className="navigation-color">{'/>'}</span></h1>
                </Col>
            </Row>
            
            <Row id="about-me-section">
                <Col xs={12} md={12} lg={6} id="about-me-info"  data-aos="fade-right">
                    <div id="about-me-text">
                        <p>Computer engineer and full stack developer based in Sevilla and Amsterdam.</p>
                        <p>Designing and creating any kind of digital product is my passion, either web or mobile, with their respective backend.</p>
                        <p>No matter the time, I will always be dealing with a project, there are always new ideas to make them real. Currently looking for a Full Stack junior developer job.</p>
                        <p>Here are some technologies I command:</p>
                        <div id="about-technologies-grid">
                            <div className="about-grid-item">
                                <p><SiJavascript className="about-technology-icon" />{' '}JavaScript</p>
                            </div>
                            <div className="about-grid-item">
                                <p><FaReact className="about-technology-icon" />{' '}React</p>
                            </div>
                            <div className="about-grid-item">
                                <p><FaNodeJs className="about-technology-icon" />{' '}Node.js</p>
                            </div>
                            <div className="about-grid-item">
                                <p><SiGraphql className="about-technology-icon" />{' '}GraphQL</p>
                            </div>
                            <div className="about-grid-item">
                                <p><SiMongodb className="about-technology-icon" />{' '}MongoDB</p>
                            </div>
                            <div className="about-grid-item">
                                <p><DiMysql className="about-technology-icon" />{' '}MySQL</p>
                            </div>
                            <div className="about-grid-item">
                                <p><DiGitBranch className="about-technology-icon" />{' '}Git</p>
                            </div>
                            <div className="about-grid-item">
                                <p><SiJest className="about-technology-icon" />{' '}Jest</p>
                            </div>
                            <div className="about-grid-item">
                                <p><FaDocker className="about-technology-icon" />{' '}Docker</p>
                            </div>
                        </div>
                    </div>
                    <button id="show-all-technologies-button" type='button' className='general-button'>Show All Technologies</button>
                </Col>
                <Col xs={12} md={12} lg={6} id="map-col" data-aos="fade-right">
                    <div id="about-me-map" data-aos="flip-right">
                        <MapContainer center={[locationData.lyon.lat, locationData.lyon.lng]} zoom={3} scrollWheelZoom={true} id="mapContainer">
                            <TileLayer
                                attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
                                url="https://api.mapbox.com/styles/v1/pmedina25/ckl9bhy8w02g417nuu9b776in/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicG1lZGluYTI1IiwiYSI6ImNrbDlidG9qcjM5M2oycnFvMDQ3OXRkeGMifQ._TGzF-JdZZEApOP-n3V8sQ"
                            />
                            <Marker position={[locationData.sevilla.lat, locationData.sevilla.lng]} icon={markerIcon}>
                                <Popup>
                                    <strong style={{'color': '#0a192f'}}>Education: Universidad de Sevilla</strong> <br /> Computer Engineering Degree
                                    <br />
                                    <br />
                                    <strong style={{'color': '#0a192f'}}>Education: Universidad Pablo de Olavide</strong> <br /> Master in Computer Engineering
                                    <br />
                                    <br />
                                    <strong style={{'color': '#0a192f'}}>Experience: TTI Norte</strong> <br /> Internet of Things Developer
                                </Popup>
                            </Marker>
                            <Marker position={[locationData.amsterdam.lat, locationData.amsterdam.lng]} icon={markerIcon}>
                                <Popup style={{'backgroundColor': 'red'}}>
                                    <strong style={{'color': '#0a192f'}}>Education: Hogeschool van Amsterdam</strong> <br /> Mobile Development Minor
                                    <br />
                                    <br />
                                    <strong style={{'color': '#0a192f'}}>Experience: TamTam (part of dept)</strong> <br /> iOS App Developer
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default AboutMe;
