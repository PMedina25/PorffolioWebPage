import React from 'react';

import { Col, Container } from 'react-bootstrap';


function Skills() {
    return (
        <Container id="skills" fluid>
            <Col md={6} id="skills-info">
               <h1>Skills</h1>
               <p>The main area of my expertise is all related to MERN Stack (<strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, <strong>Node</strong>).</p>
               <p>
                  This involves skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>JSX</strong>, 
                  besides CSS frameworks such as <strong>Bootstrap</strong> and <strong>Semantic UI</strong>. For managing react states,
                  I have developed some applications with <strong>React Hooks</strong>, <strong>Context API</strong> and <strong>Redux</strong>.
               </p>
               <p>Moreover, experienced in developing Backend services with <strong>GraphQL</strong> and <strong>Apollo Server</strong>.</p>
               <p>Finally, as a complementary background, <strong>TensorFlow</strong> and <strong>Keras</strong> with <strong>Python</strong>.</p>
             </Col>
          </Container>
    );
}

export default Skills;
