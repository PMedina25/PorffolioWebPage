import React, { useEffect } from 'react';
import Aos from 'aos';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../utils/graphql';

import { CardColumns, Col, Container, Row } from 'react-bootstrap';

import { AiOutlineArrowLeft } from 'react-icons/ai';

// Import components
import ProjectCard from '../components/projects/ProjectCard';
import Spinner from '../components/common/Spinner';

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

    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <h1>Error: Something Wrong Happened</h1>;
    }

    return (
        <div id="all-projects">
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
                            data.getProjects &&
                            data.getProjects
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
                        data.getProjects &&
                        data.getProjects
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
                        data.getProjects &&
                        data.getProjects
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
        </div>
    )
}

export default Projects;
