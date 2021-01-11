import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { CardColumns, Col, Container, Row } from 'react-bootstrap';

import { AiOutlineArrowLeft } from 'react-icons/ai';

// Import components
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
    return (
        <Container>
            <Row>
                <Col md={6}>
                    <Link to="/" id="back-btn" className="btn btn-project">
                        <AiOutlineArrowLeft style={{'marginRight': '10'}} />
                        Back to main page
                    </Link>
                </Col>
            </Row>
            <div id="main-projects">
                <h1>Professional and Academic Projects</h1>
                <CardColumns>
                    {
                        projects.getProjects &&
                        projects.getProjects
                            .filter(project => project.category === 'professional' || project.category === 'academic')
                            .map(project => {
                                return (
                                    <div className="card-column-item">
                                        <ProjectCard
                                                key={project.id}
                                                title={project.title} 
                                                description={project.description}
                                                technologies={project.technologies}
                                                startDate={project.startDate}
                                                endDate={project.endDate}
                                                url={project.url}
                                                image={project.image}
                                                projectPage={true} />
                                    </div> 
                                )
                            })
                    }
                </CardColumns>
            </div>
            <div id="personal-projects">
                <h1>Personal Projects</h1>
                <CardColumns>
                {
                    projects.getProjects &&
                    projects.getProjects
                        .filter(project => project.category === 'personal')
                        .map(project => {
                            return (
                                <div className="card-column-item">
                                    <ProjectCard
                                            key={project.id}
                                            title={project.title} 
                                            description={project.description}
                                            technologies={project.technologies}
                                            startDate={project.startDate}
                                            endDate={project.endDate}
                                            url={project.url}
                                            image={project.image}
                                            projectPage={true} />
                                </div> 
                            )
                        })
                }
                </CardColumns>
            </div>
            <div id="other-projects">
                <h1>Other Projects</h1>
                <CardColumns>
                {
                    projects.getProjects &&
                    projects.getProjects
                        .filter(project => project.category === 'others')
                        .map(project => {
                            return (
                                <div className="card-column-item">
                                    <ProjectCard
                                            key={project.id}
                                            title={project.title} 
                                            description={project.description}
                                            technologies={project.technologies}
                                            startDate={project.startDate}
                                            endDate={project.endDate}
                                            url={project.url}
                                            image={project.image}
                                            projectPage={true} />
                                </div> 
                            ); 
                        })
                }
                </CardColumns>
            </div>
        </Container>
    )
}

export default Projects;
