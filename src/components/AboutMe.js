import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl';

import { Col, Row  } from 'react-bootstrap';

mapboxgl.accessToken = 'pk.eyJ1IjoicG1lZGluYTI1IiwiYSI6ImNrZmZoeWg1MDA0aWEyeG1reDN2dXJ1a3MifQ.odUV_vUZROT5EFn4-WlQDA';

const AboutMe = () => {
    const mapContainerRef = useRef(null);

    const [lng, setLng] = useState(-0.5805000);
    const [lat, setLat] = useState(44.8404400);
    const [zoom, setZoom] = useState(3.25);

    // Initialize map when component mounts
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });


        const markerSevilla = new mapboxgl.Marker()
            .setLngLat([-5.97317, 37.38283])   
            .addTo(map); 

        // Clean up on unmount
        return () => map.remove();
    }, []);

    return (
        <Row id="about-me" className="card card-body bg-light">
            <Col md={6} id="about-me-info">
                <h1>About Me</h1>
                <p>Computer engineer, full stack developer  and tech enthusiast.</p>
                <p>With experience in teamwork, always willing to learn new things and delighted at facing new challenges.</p>
                <p>Looking for a MERN Stack junior developer job, especially if it involves Machine Learning.</p>
            </Col>
            <Col md={6} id="about-me-map">
                <div id="mapContainer" ref={mapContainerRef}>
                </div>
            </Col>
        </Row> 
    )
}

export default AboutMe;
