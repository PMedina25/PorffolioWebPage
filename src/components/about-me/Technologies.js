import React from 'react';

import { Col } from 'react-bootstrap';

// Import react icons
import { 
    FaAws,
    FaBluetooth,
    FaDocker,
    FaNodeJs,
    FaRaspberryPi,
    FaReact,
    FaSass
} from 'react-icons/fa';
import {
    FiRadio
} from 'react-icons/fi';
import {
    SiApollographql,
    SiArduino,
    SiBootstrap,
    SiCplusplus,
    SiFirebase,
    SiGraphql,
    SiHeroku,
    SiJavascript,
    SiJest,
    SiMariadb,
    SiMongodb,
    SiMocha,
    SiNetlify,
    SiNextDotJs,
    SiPostgresql,
    SiPostman,
    SiRedux,
    SiZigbee
} from 'react-icons/si';
import {
    DiCss3,
    DiGitBranch,
    DiMysql
} from 'react-icons/di';
import {
    AiFillGithub,
    AiFillHtml5
} from 'react-icons/ai';

const Technologies = () => {
    return (
        <>
            <Col xs={12} md={12} lg={6} className="technology-col">
                <h4>Frontend</h4>
                <div className="about-technologies-grid">
                    <div className="about-grid-item">
                        <p><AiFillHtml5 className="about-technology-icon" />{' '}HTML5</p>
                    </div>
                    <div className="about-grid-item">
                        <p><DiCss3 className="about-technology-icon" />{' '}CSS</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiJavascript className="about-technology-icon" />{' '}JavaScript</p>
                    </div>
                    <div className="about-grid-item">
                        <p><FaReact className="about-technology-icon" />{' '}React</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiRedux className="about-technology-icon" />{' '}Redux</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiBootstrap className="about-technology-icon" />{' '}Bootstrap</p>
                    </div>
                    <div className="about-grid-item">
                        <p><FaSass className="about-technology-icon" />{' '}Sass</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiNextDotJs className="about-technology-icon" />{' '}Next.js</p>
                    </div>
                </div>
            </Col>

            <Col xs={12} md={12} lg={6} className="technology-col">
                <h4>Backend</h4>
                <div className="about-technologies-grid">
                    <div className="about-grid-item">
                        <p><FaNodeJs className="about-technology-icon" />{' '}Node/Express</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiGraphql className="about-technology-icon" />{' '}GraphQL</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiApollographql className="about-technology-icon" />{' '}Apollo Server</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiMongodb className="about-technology-icon" />{' '}MongoDB</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiPostgresql className="about-technology-icon" />{' '}PostgreSQL</p>
                    </div>
                    <div className="about-grid-item">
                        <p><DiMysql className="about-technology-icon" />{' '}MySQL</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiMariadb className="about-technology-icon" />{' '}MariaDB</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiFirebase className="about-technology-icon" />{' '}Firebase</p>
                    </div>
                </div>
            </Col>

            <Col xs={12} md={12} lg={6} className="technology-col">
                <h4>Tools && Testing</h4>
                <div className="about-technologies-grid">        
                    <div className="about-grid-item">
                        <p><DiGitBranch className="about-technology-icon" />{' '}Git</p>
                    </div>
                    <div className="about-grid-item">
                        <p><AiFillGithub className="about-technology-icon" />{' '}GitHub</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiJest className="about-technology-icon" />{' '}Jest</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiMocha className="about-technology-icon" />{' '}Mocha</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiPostman className="about-technology-icon" />{' '}Postman</p>
                    </div>
                    <div className="about-grid-item">
                        <p><FaDocker className="about-technology-icon" />{' '}Docker</p>
                    </div>
                    <div className="about-grid-item">
                        <p><FaAws className="about-technology-icon" />{' '}AWS</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiHeroku className="about-technology-icon" />{' '}Heroku</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiNetlify className="about-technology-icon" />{' '}Netlify</p>
                    </div>
                </div>
            </Col>

            <Col xs={12} md={12} lg={6} className="technology-col">
                <h4>Embedded Systems</h4>
                <div className="about-technologies-grid">
                    <div className="about-grid-item">
                        <p><SiArduino className="about-technology-icon" />{' '}Arduino</p>
                    </div>
                    <div className="about-grid-item">
                        <p><FaRaspberryPi className="about-technology-icon" />{' '}Raspberry Pi</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiCplusplus className="about-technology-icon" />{' '}C++</p>
                    </div>
                    <div className="about-grid-item">
                        <p><FaBluetooth className="about-technology-icon" />{' '}Bluetooth</p>
                    </div>
                    <div className="about-grid-item">
                        <p><SiZigbee className="about-technology-icon" />{' '}Zigbee</p>
                    </div>
                    <div className="about-grid-item">
                        <p><FiRadio className="about-technology-icon" />{' '}LoRa</p>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default Technologies;
