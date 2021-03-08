/**
 * Import packages
 */
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './styles/contact.css';

/**
 * Import React Bootstrap Components
 */
import { Button, Col, Form, Row } from 'react-bootstrap';


/**
 * Contact Component
 */
const Contact = () => {
  /**
   * Define component states
   */
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


  /**
   * Send email handler
   * @param {object} e - Event
   */
  const sendEmail = (e) => {
    /* Avoid the page to be refreshed */
    e.preventDefault();

    /* Send email with emailJS */
    emailjs.send(
      'service_inke7o9', 
      'template_0qs8gjg', {
        name,
        email,
        subject,
        message
      },
      'user_nSFn72jWq3bv20i8C79Xi');

    /* Reset the value */
    e.target.reset();

    /* Alert which shows that the message has been sent */
    alert('Message sent!')
  };


  /**
   * Return the component
   */
  return (
      <div id="contact" data-aos="fade-up" data-aos-once="true">
        <Row>
            <Col md={12}>
                <h1><span className="navigation-color">{'<'}</span>Contact{'  '}<span className="navigation-color">{'/>'}</span></h1>
            </Col>
        </Row>

        <Form id="contact-form" onSubmit={sendEmail}>
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter name" 
                onChange={(e) => setName(e.target.value)} 
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control 
              placeholder="Enter subject"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control 
              as="textarea" 
              placeholder="Enter message" 
              rows={6} 
              onChange={(e) => setMessage(e.target.value)} 
              required
            />
          </Form.Group>

          <button className="general-button" type="submit">
            Send Message
          </button>
        </Form>
      </div>
  );
}

export default Contact;