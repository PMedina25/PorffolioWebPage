import React from 'react';

import { Button, Card } from 'react-bootstrap';

const ProjectCard = ({ title, description, url, image }) => {
    return (
        <Card>
            <Card.Img className="img-project" variant="top" src={image} />
            <Card.Body className="project-card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button className="btn-project btn-show-more">Show More</Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
