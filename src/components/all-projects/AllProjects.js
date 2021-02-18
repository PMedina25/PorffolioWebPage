import React from 'react';
import { Link } from 'react-router-dom';

import { CardColumns, Col, Container, Row } from 'react-bootstrap';

import { AiOutlineArrowLeft } from 'react-icons/ai';

// Import components
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
    return (
        <Container id="all-projects">
            <Row>
                <Col md={12}>
                    <Link to="/" id="back-btn">
                        <button type="button" className="general-button">
                            <AiOutlineArrowLeft style={{'marginRight': '10'}} />
                            Back to projects page
                        </button>
                    </Link>
                </Col>
            </Row>
            <div id="main-projects">
                <h1><span className="navigation-color">{'<'}</span>Professional and Academic Projects<span className="navigation-color">{' />'}</span></h1>
                <CardColumns>
                    {
                        projects.getProjects &&
                        projects.getProjects
                            .filter(project => project.category === 'professional' || project.category === 'academic')
                            .map(project => {
                                return (
                                    <div key={project.id} className="card-column-item">
                                        <ProjectCard
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
                <h1><span className="navigation-color">{'<'}</span>Personal Projects<span className="navigation-color">{' />'}</span></h1>
                <CardColumns>
                {
                    projects.getProjects &&
                    projects.getProjects
                        .filter(project => project.category === 'personal')
                        .map(project => {
                            return (
                                <div key={project.id} className="card-column-item">
                                    <ProjectCard
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
                <h1><span className="navigation-color">{'<'}</span>Other Projects<span className="navigation-color">{' />'}</span></h1>
                <CardColumns>
                {
                    projects.getProjects &&
                    projects.getProjects
                        .filter(project => project.category === 'others')
                        .map(project => {
                            return (
                                <div key={project.id} className="card-column-item">
                                    <ProjectCard
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
