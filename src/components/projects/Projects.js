import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FETCH_PROJECTS_QUERY } from '../../utils/graphql';

import { Button, CardDeck, Container } from 'react-bootstrap';

import { FiChevronRight } from 'react-icons/fi';

import ProjectCard from './ProjectCard';

const Projects = () => {
    const {
        loading,
        error,
        data
    } = useQuery(FETCH_PROJECTS_QUERY);

    // TODO: Add Spinner
    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
    return <p>Error:(</p>;
    }

    return (
        <Container id="projects" fluid>
            <h1 style={{'textAlign': 'center'}}>Projects</h1>
            <CardDeck>
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
                                            image={project.image} />)
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
                                            image={project.image} />)
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
                                            image={project.image} />)
                }
            </CardDeck>
            <Link to={'/projects'} id="btn-show-all" className="btn-project btn">
                Show all
                <FiChevronRight id="show-all-arrow" size={32} fontWeight={700}/>
            </Link>
      </Container>
    )
}

export default Projects;
