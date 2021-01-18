import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import aboutMeData from '../data/about-me-data';

// Import components
import Sidebar from '../components/common/Sidebar';
import Question from '../components/about-me/Question';

// Import leaflet components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

// Import bootstrap components
import { Col, Container, Row  } from 'react-bootstrap';

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
    const [questions] = useState(aboutMeData)

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <Container id="about-me" fluid>
            <Sidebar />

        
            <Row>
                <Col md={12} style={{'textAlign': 'center'}}>
                    <h1 style={{'textAlign': 'center'}}>About Me</h1>
                    <div className="underline"></div>
                </Col>
            </Row>
            
            <Row id="about-me-section">
                <Col xs={12} md={12} lg={6} id="about-me-info"  data-aos="fade-right">
                    <p>Computer engineer and full stack developer based in Sevilla and Amsterdam.</p>
                    <p>With experience in teamwork, always willing to learn new things and delighted at facing new challenges.</p>
                    <p>No matter the time, I will always be dealing with a project.</p>
                    <p>Looking for a Full Stack junior developer job.</p>
                    <div id="about-me-map"  data-aos="flip-right">
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
                    </div>
                </Col>
                <Col xs={12} md={12} lg={6} id="about-me-questions">
                    {questions.map((question) => {
                        return <Question key={question.id} {...question} />
                    })}
                </Col>
            </Row> 
        </Container>
    );
}

export default AboutMe;
