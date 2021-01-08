import React, { useState } from 'react';

import { Button, Card } from 'react-bootstrap';

import ProjectInfo from './ProjectInfo';

const ProjectCard = ({ title, description, technologies, url, image }) => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
        <Card>
            <Card.Img className="img-project" variant="top" src={image} />
            <Card.Body className="project-card-body">
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button type="button" className="btn-project btn-show-more" onClick={() => setModalShow(true)}
                >
                    Show More
                </Button>
            </Card.Body>
        </Card>

        <ProjectInfo show={modalShow} onHide={() => setModalShow(false)} title={title} description={description} technologies={technologies} image={image} />
        </>
    );
}

export default ProjectCard;
