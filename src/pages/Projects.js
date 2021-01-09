import React, { useEffect } from 'react';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../utils/graphql';

import { Col, Container, Row } from 'react-bootstrap';

import ProjectCard from '../components/projects/ProjectCard';

const Projects = () => {
    const {
        loading,
        error,
        data
    } = useQuery(FETCH_PROJECTS_QUERY);

    useEffect(() => {
        window.scroll({
            'top': 0,
            'left': 0,
            'behaviour': 'auto'
        });
    }, []);

    // TODO: Add Spinner
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
    return <p>Error:(</p>;
    }

    return (
        <div id="all-projects">
            <Container>
                <Row>
                    <Col md={6}>
                        <Link to="/" className="btn btn-light">
                            Back to main page
                        </Link>
                    </Col>
                </Row>
                <div id="main-projects">
                    <h1>Professional and Academic Projects</h1>
                    <div className="grid-all-projects">
                        {
                            data.getProjects &&
                            data.getProjects
                                .filter(project => project.category === 'professional' || project.category === 'academic')
                                .map(project => {
                                    return (
                                        <div className="all-projects-grid-item">
                                            <ProjectCard
                                                key={project.id}
                                                title={project.title} 
                                                description={project.description}
                                                technologies={project.technologies}
                                                startDate={project.startDate}
                                                endDate={project.endDate}
                                                url={project.url}
                                                image={project.image}
                                                 />
                                        </div>
                                    )
                                })
                        }
                    </div>
                </div>
                <div id="personal-projects">
                    <h1>Personal Projects</h1>
                    <div className="grid-all-projects">
                    {
                        data.getProjects &&
                        data.getProjects
                            .filter(project => project.category === 'personal')
                            .map(project => {
                                return (
                                    <div className="all-projects-grid-item">
                                        <ProjectCard
                                            key={project.id}
                                            title={project.title} 
                                            description={project.description}
                                            technologies={project.technologies}
                                            startDate={project.startDate}
                                            endDate={project.endDate}
                                            url={project.url}
                                            image={project.image} />
                                    </div>
                                )
                            })
                    }
                    </div>
                </div>
                <div id="other-projects">
                    <h1>Other Projects</h1>
                    <div className="grid-all-projects">
                    {
                        data.getProjects &&
                        data.getProjects
                            .filter(project => project.category === 'others')
                            .map(project => {
                                return (
                                    <div className="all-projects-grid-item">
                                        <ProjectCard
                                            key={project.id}
                                            title={project.title} 
                                            description={project.description}
                                            technologies={project.technologies}
                                            startDate={project.startDate}
                                            endDate={project.endDate}
                                            url={project.url}
                                            image={project.image} />
                                    </div>
                                )
                            })
                    }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Projects;
