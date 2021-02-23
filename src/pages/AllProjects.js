import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../utils/graphql';

import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';

// Import components
import Loader from '../components/common/Loader';
import ProjectSingleContainer from '../components/projects/ProjectSingleContainer';

const AllProjects = () => {
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
        return <Loader />
    }
    if (error) {
        return <h1>Error: Something Wrong Happened</h1>;
    }

    return (
        <div id="all-projects">
            <Container>
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
                    <div className="projects-grid">
                    {
                        data.getProjects &&
                        data.getProjects
                            .filter(project => project.category === 'professional' || project.category === 'academic')
                            .map(project => {
                                return <ProjectSingleContainer key={project.id} project={project} />;
                            })
                    }
                    </div>
                </div>

                <div id="personal-projects">
                    <h1><span className="navigation-color">{'<'}</span>Personal Projects<span className="navigation-color">{' />'}</span></h1>
                    <div className="projects-grid">
                    {
                        data.getProjects &&
                        data.getProjects
                            .filter(project => project.category === 'personal')
                            .map(project => {
                                return <ProjectSingleContainer key={project.id} project={project} />;
                            })
                    }
                    </div>
                </div>

                <div id="other-projects">
                    <h1><span className="navigation-color">{'<'}</span>Other Projects<span className="navigation-color">{' />'}</span></h1>
                    <div className="projects-grid">
                    {
                        data.getProjects &&
                        data.getProjects
                            .filter(project => project.category === 'others')
                            .map(project => {
                                return <ProjectSingleContainer key={project.id} project={project} />;
                            })
                    }
                    </div>
                </div>

                <div id="development-projects">
                    <h1><span className="navigation-color">{'<'}</span>Projects in Development<span className="navigation-color">{' />'}</span></h1>
                    <div className="projects-grid">
                    {
                        data.getProjects &&
                        data.getProjects
                            .filter(project => project.category === 'development')
                            .map(project => {
                                return <ProjectSingleContainer key={project.id} project={project} />;
                            })
                    }
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default AllProjects;
