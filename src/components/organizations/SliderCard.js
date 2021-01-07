import React from 'react';
import { Card, Image } from 'react-bootstrap';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SliderCard = ({ name, description, startDate, endDate, url, logo }) => {
    return (
        <Card className="m-auto" className="slider-card">
            <FiChevronLeft className="left-arrow-slider" />
            <div className="card-content">
            <Image className="card-slider-image" src={logo} roundedCircle/>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{startDate}{' '}-{' '}{endDate}</small>
            </Card.Footer>
            </div>
            <FiChevronRight className="right-arrow-slider" />
        </Card>
    )
}

export default SliderCard;
