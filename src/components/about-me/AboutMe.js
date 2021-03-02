import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './styles/about-me.css';

// Import components
import Map from './Map';
import Technologies from './Technologies';

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

// Import bootstrap components
import { Col, Row  } from 'react-bootstrap';


const AboutMe = () => {
    const [showTechnologies, setShowTechnologies] = useState(false);
    const [buttonText, setButtonText] = useState('Show All Technologies');

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const onClickHandler = () => {
        setShowTechnologies(!showTechnologies);
        
        if (!showTechnologies) {
            setButtonText('Hide All Technologies');
        } else {
            setButtonText('Show All Technologies');
        }
    }

    return (
        <div id="about">
            <Row>
                <Col md={12}>
                    <h1 data-aos="fade-up" data-aos-once="true"><span className="navigation-color">{'<'}</span>About Me{'  '}<span className="navigation-color">{'/>'}</span></h1>
                </Col>
            </Row>
            
            <Row id="about-me-section">
                <Col xs={12} md={12} lg={6} id="about-me-info"  data-aos="fade-right" data-aos-once="true">
                    <div id="about-me-text">
                        <p>Computer engineer and full stack developer based in Sevilla and Amsterdam.</p>
                        <p>Designing and creating any kind of digital product is my passion, either web or mobile, with their respective backend.</p>
                        <p>No matter the time, I will always be dealing with a project, there are always new ideas to make them real. Currently looking for a Full Stack junior developer job.</p>
                        <p>Here are some technologies I command:</p>
                        <div className="about-technologies-grid">
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
                </Col>

                <Col xs={12} md={12} lg={6} id="map-col" data-aos="flip-right" data-aos-once="true">
                    <Map />
                </Col>
            </Row>
            <Row id="all-technologies">
                <Col md={12} id="button-col">
                    <button
                        id="show-all-technologies-button" 
                        type='button' 
                        className='general-button'
                        onClick={onClickHandler}
                    >
                        {buttonText}
                    </button>
                </Col>
                {
                    showTechnologies && <Technologies />
                }
            </Row>
        </div>
    );
}

export default AboutMe;
