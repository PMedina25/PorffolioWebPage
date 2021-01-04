import React from 'react';

import { Button, Col, Container, Form } from 'react-bootstrap';

function Contact() {
    return (
        <Container id="contact" className="bg-light" fluid>
            <h1 style={{'textAlign': 'center'}}>Contact</h1>
            <Form id="contact-form">
              <Form.Row>
                <Form.Group as={Col} controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control placeholder="Enter subject" />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Enter message" rows={4} />
              </Form.Group>

              <Button className="btn-project" type="submit">
                Send
              </Button>
            </Form>
          </Container>

    )
}

export default Contact;