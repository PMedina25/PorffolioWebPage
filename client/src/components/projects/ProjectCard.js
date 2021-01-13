import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import bootstrap components
import { Button, Card, Col } from 'react-bootstrap';

// Import components
import ProjectInfo from './ProjectInfo';

const ProjectCard = ({ title, description, technologies, startDate, endDate, url, image, projectPage }) => {
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <>
        <Col xs={12} sm={12} md={6} lg={6} xl={4}>
            <Card className="project-card project-card-hover">
                <Card.Img className="img-project" variant="top" src={image} />
                <Card.Body className="project-card-body">
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{'textAlign': 'justify'}}>
                        {description}
                    </Card.Text>
                    <Button type="button" className="btn-project btn-show-more" onClick={() => setModalShow(true)}>
                        Show More
                    </Button>
                </Card.Body>
                <Card.Footer style={{'textAlign': 'center', 'fontFamily': 'Roboto Mono, sans-serif'}}>
                    {startDate}{' - '}{endDate}
                </Card.Footer>
            </Card>
        </Col>

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
