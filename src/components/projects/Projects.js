import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../../utils/graphql';

import { Row, Col } from 'react-bootstrap';

import Loader from '../common/Loader';
import Project from './Project';
import ProjectSingleContainer from './ProjectSingleContainer';

const Projects = () => {
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

    return (
        <div id="projects">
            <Row>
                <Col md={12}>
                    <h1 data-aos="fade-up"><span className="navigation-color">{'<'}</span>Projects{'  '}<span className="navigation-color">{'/>'}</span></h1>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <Link to={'/projects'} id="view-all-projects-button-container">
                        <button id="view-all-projects-button" data-aos="fade-up">view all projects</button>
                    </Link>
                </Col>
            </Row>
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
                  .filter(project => project.id === '5ff82d75a728a819889de753')
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
        </div>
    );
};

export default Projects;
