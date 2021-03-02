import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../utils/graphql';
import './styles/all-projects.css';

import { Container, Row, Col } from 'react-bootstrap';
import { AiOutlineArrowLeft } from 'react-icons/ai';

// Import components
import Loader from '../components/common/Loader';
import ProjectSingleContainer from '../components/projects/ProjectSingleContainer';

// Import button component
import ScrollToTopButton from '../components/scroll-to-top-button/ScrollToTopButton';

const AllProjects = () => {
    const [isVisible, setIsVisible] = useState(false);

    const {
        loading,
        error,
        data
    } = useQuery(FETCH_PROJECTS_QUERY);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 600) {
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behaviour: "smooth"
        });
    };

    useEffect(() => {
        window.scroll({
            'top': 0,
            'left': 0,
            'behaviour': 'auto'
        });
        window.addEventListener("scroll", toggleVisibility);
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

            {isVisible && 
                <ScrollToTopButton onClick={scrollToTop} />
            }
        </div>
    )
}

export default AllProjects;
