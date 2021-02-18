import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../utils/graphql';

// Import bootstrap components
import { CardDeck, Container, Row } from 'react-bootstrap';

// Import react icon
import { FiChevronRight } from 'react-icons/fi';

// Import components
import Sidebar from '../components/common/Navbar';
import ProjectCard from '../components/projects/ProjectCard';
import Loader from '../components/common/Loader';

const Projects = () => {
    const {
        loading,
        error,
        data
    } = useQuery(FETCH_PROJECTS_QUERY);

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
            <h1 data-aos="zoom-in"><span className="navigation-color">{'<'}</span>Projects<span className="navigation-color">{' />'}</span></h1>
            
            <CardDeck data-aos="zoom-in">
                <Row>
                {
                    data.getProjects &&
                    data.getProjects
                        .filter(project => project.id === '5ff8368da728a819889de758')
                        .map(project => <ProjectCard 
                                            key={project.id}
                                            title={project.title} 
                                            description={project.description}
                                            technologies={project.technologies}
                                            startDate={project.startDate}
                                            endDate={project.endDate}
                                            url={project.url}
                                            image={project.image} 
                                        />)
                }
                {
                    data.getProjects
                        .filter(project => project.id === '5ff8381ba728a819889de759')
                        .map(project => <ProjectCard 
                                            key={project.id}
                                            title={project.title} 
                                            description={project.description}
                                            technologies={project.technologies}
                                            startDate={project.startDate}
                                            endDate={project.endDate}
                                            url={project.url}
                                            image={project.image} 
                                        />)
                }
                {
                    data.getProjects
                        .filter(project => project.id === '5ff82c39a728a819889de752')
                        .map(project => <ProjectCard 
                                            key={project.id}
                                            title={project.title} 
                                            description={project.description}
                                            technologies={project.technologies}
                                            startDate={project.startDate}
                                            endDate={project.endDate}
                                            url={project.url}
                                            image={project.image}
                                        />)
                }
                     
                </Row>
            </CardDeck>
            <Row>
                <Link to={'/projects'} style={{'marginTop': '4rem', 'marginLeft': 'auto', 'marginRight': 'auto'}}>
                    <button className="general-button">Show All</button>
                </Link>
            </Row>
      </div>
    );
}

export default Projects;
