import React from 'react';

import { Button, Image, Modal } from 'react-bootstrap';
import { DiVim } from 'react-icons/di';

import { getTechnologyIcon } from '../../utils/get-technology-icon';

const ProjectInfo = (props) => {
    return (
        <Modal
            {...props}
            className="project-modal"
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Image className="modal-image" src={props.image} />
                <div className="project-modal-content">
                    <div className="project-modal-description">
                        <p style={{'color': 'black'}}>
                            {props.description}
                        </p>
                    </div>
                    <div className="project-technologies-grid">
                        {props.technologies.map((technology, index) => {
                            return (
                                <div key={index} className="project-grid-item">
                                    {getTechnologyIcon(technology)}
                                    <div className="technology-name">
                                        {technology}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
            </Modal.Body>
            {props.url &&
                <Modal.Footer>
                    <Button className="btn-project" type="button" href={props.url} target="_blank">Go to project</Button>
                </Modal.Footer>
            }
        </Modal>
    )
}

export default ProjectInfo;
