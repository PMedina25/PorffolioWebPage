import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Row, Col, Image } from 'react-bootstrap';

import { AiFillGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

import { getTechnologyIcon } from '../../utils/get-technology-icon';


const Project = ({ project }) => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <div className="project" data-aos="fade-up" data-aos-once="true">
            <Row>
                <Col md={6} className="project-image-container">
                    <div className="overlay">
                        <a href={project.url} target="_blank">
                            <Image src={project.image} fluid />
                        </a>
                    </div>
                </Col>
                <Col md={6} className="project-info-col">
                    <div className="project-info">
                        <h4>{project.title}</h4>
                        <div className="project-description">
                            <p>{project.description}</p>
                        </div>
                        <div className="project-technologies-grid">
                            {project.technologies.map((technology, index) => {
                                return (
                                    <div key={index} className="project-technology-item">
                                        {getTechnologyIcon(technology)}
                                        <div className="technology-name">
                                            {technology}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="project-links">
                            {
                                project.github &&
                                <a href={project.github} className="project-link-icon" target="_blank">
                                    <AiFillGithub />
                                </a>
                            }
                            {
                                project.url &&
                                <a href={project.url} className="project-link-icon" target="_blank">
                                    <BiLinkExternal />
                                </a>
                            }
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Project;
