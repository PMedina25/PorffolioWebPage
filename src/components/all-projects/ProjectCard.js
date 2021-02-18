import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import bootstrap components
import { Button, Card } from 'react-bootstrap';

// Import components
import ProjectInfo from '../projects/ProjectInfo';

const ProjectCard = ({ title, description, technologies, startDate, endDate, url, image, projectPage }) => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <>
        <Card className="all-projects-card" data-aos="fade-up">
            <Card.Img className="img-project" variant="top" src={image} />
            <Card.Body className="project-card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text  style={{'textAlign': 'justify'}}>
                    {description}
                </Card.Text>
                <button type="button" className="general-button" onClick={() => setModalShow(true)}>
                    Show More
                </button>
            </Card.Body>
        </Card>

        <ProjectInfo 
          show={modalShow} 
          onHide={() => setModalShow(false)} 
          title={title} 
          description={description} 
          technologies={technologies} 
          url={url} 
          image={image} 
        />
        </>
    );
}

export default ProjectCard;
