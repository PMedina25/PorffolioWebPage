import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../../utils/graphql';
import './styles/projects.css';

import { Row, Col } from 'react-bootstrap';

import Loader from '../common/Loader';
import Project from './Project';
import ProjectSingleContainer from './ProjectSingleContainer';

const Projects = () => {
    const [showProjects, setShowProjects] = useState(false);
    const [buttonText, setButtonText] = useState('Show Projects in Development');

    const {
        loading,
        error,
        data
    } = useQuery(FETCH_PROJECTS_QUERY);

    const isSmallScreen = useMediaQuery({
        query: '(max-width: 991px)'
    });

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <h1>Error: Something Wrong Happened</h1>;
    }

    /**
     * Click handler for the show projects in development button
     */
    const onClickHandler = () => {
        setShowProjects(!showProjects);
        
        if (!showProjects) {
            setButtonText('Hide Projects');
        } else {
            setButtonText('Show Projects in Development');
        }
    }

    return (
        <div id="projects">
            <Row>
                <Col md={12}>
                    <h1 data-aos="fade-up" data-aos-once="true"><span className="navigation-color">{'<'}</span>Projects{'  '}<span className="navigation-color">{'/>'}</span></h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Link to={'/projects'} id="view-all-projects-button-container">
                        <button id="view-all-projects-button" data-aos="fade-up" data-aos-once="true">view all projects</button>
                    </Link>
                </Col>
            </Row>
            {
                data.getProjects && 
                data.getProjects
                  .filter(project => project.id === '6034ced5dd716a8cf36f88ac')
                  .map(project => {
                      return (     
                            isSmallScreen
                            ? <ProjectSingleContainer key={project.id} project={project} />
                            : <Project key={project.id} project={project} />   
                      );
                  })
            }
            {
                data.getProjects && 
                data.getProjects
                  .filter(project => project.id === '5ff8368da728a819889de758')
                  .map(project => {
                      return (     
                            isSmallScreen
                            ? <ProjectSingleContainer key={project.id} project={project} />
                            : <Project key={project.id} project={project} />   
                      );
                  })
            }
            {
                data.getProjects && 
                data.getProjects
                  .filter(project => project.id === '5ff82c39a728a819889de752')
                  .map(project => {
                    return (     
                            isSmallScreen
                            ? <ProjectSingleContainer key={project.id} project={project} />
                            : <Project key={project.id} project={project} />   
                      );
                  })
            }
            <Row id="projects-development" data-aos="fade-up" data-aos-once="true">
                <Col md={12} className="button-col">
                    <button
                        id="show-projects-development" 
                        type='button' 
                        className='general-button'
                        onClick={onClickHandler}
                    >
                        {buttonText}
                    </button>
                </Col>
            </Row>
                <div className="projects-grid">
                {
                    showProjects && 
                    data.getProjects
                      .filter(project => project.category === 'development')
                      .map(project => {
                          return (
                              <ProjectSingleContainer key={project.id} project={project} />
                          );
                      })
                }
                </div>
        </div>
    );
};

export default Projects;
