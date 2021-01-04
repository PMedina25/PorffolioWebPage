import React from 'react'

import { Button, Card, CardDeck, Container } from 'react-bootstrap';

import { FiChevronRight } from 'react-icons/fi';


// Import images
import openSirocoImg from '../images/open-siroco.png';
import socialNetworkAppImg from '../images/social-network-app.png';

function Projects() {
    return (
        <Container id="projects" fluid>
            <h1 style={{'textAlign': 'center'}}>Projects</h1>
            <CardDeck>
                <Card>
                    <Card.Img className="img-project" variant="top" src={openSirocoImg} />
                    <Card.Body>
                    <Card.Title>Open Siroco</Card.Title>
                    <Card.Text>
                        Open Innovation Platform for Production 4.0 Colaborative Robot Systems.
                    </Card.Text>
                    <Button className="btn-project">Show More</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className="img-project" variant="top" src={socialNetworkAppImg} />
                    <Card.Body>
                    <Card.Title>MERNG Social Network</Card.Title>
                    <Card.Text>
                        Social media app using MongoDB, Express, Node, React, GraphQL and Node (the MERNG Stack).
                    </Card.Text>
                    <Button className="btn-project">Show More</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className="img-project" variant="top" src={socialNetworkAppImg} />
                    <Card.Body>
                    <Card.Title>MERNG Social Network</Card.Title>
                    <Card.Text>
                        Social media app using MongoDB, Express, Node, React, GraphQL and Node (the MERNG Stack).
                    </Card.Text>
                    <Button className="btn-project">Show More</Button>
                    </Card.Body>
                </Card>
            </CardDeck>
            <Button id="btn-show-all" className="btn-project">
                Show all
                <FiChevronRight id="show-all-arrow" size={32} fontWeight={700}/>
            </Button>
      </Container>
    )
}

export default Projects;
