import React from 'react';
import { Card, Image } from 'react-bootstrap';

const SliderCard = ({ name, description, startDate, endDate, url, logo }) => {
    return (
        <>
            <div className="card-content">
                <Image className="card-slider-image" src={logo} roundedCircle/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </div>
        </>
    );
}

export default SliderCard;
