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
import Sidebar from '../components/common/Sidebar';
import ProjectCard from '../components/projects/ProjectCard';
import Spinner from '../components/common/Spinner';

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
        return <Spinner />
    }
    if (error) {
        return <h1>Error: Something Wrong Happened</h1>;
    }

    return (
        <Container id="projects" fluid>
            <Sidebar />

            <h1 style={{'textAlign': 'center'}} data-aos="zoom-in">Projects</h1>
            <div className="underline"></div>
            
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
            <Link to={'/allprojects'} id="btn-show-all" className="btn-project btn">
                Show all
                <FiChevronRight id="show-all-arrow" size={32} fontWeight={700}/>
            </Link>
      </Container>
    );
}

export default Projects;
