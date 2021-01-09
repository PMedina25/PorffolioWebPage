import React, { useState } from 'react';

// Import bootstrap components
import { Button, Card } from 'react-bootstrap';

// Import components
import ProjectInfo from './ProjectInfo';

const ProjectCard = ({ title, description, technologies, startDate, endDate, url, image }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <Card className="project-card">
            <Card.Img className="img-project" variant="top" src={image} />
            <Card.Body className="project-card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
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
