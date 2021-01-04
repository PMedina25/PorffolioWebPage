import React from 'react';

import { Col, Container, Image, Row } from 'react-bootstrap';

// Import images
import htmlIcon from '../images/html-5.png';
import cssIcon from '../images/css.png';
import javascriptIcon from '../images/javascript.png';
import jsxIcon from '../images/jsx.png';
import reactIcon from '../images/react.png';
import reduxIcon from '../images/Redux.png';
import bootstrapIcon from '../images/bootstrap.png';
import semanticUiIcon from '../images/semantic-ui.png';
import nodeIcon from '../images/nodejs.png';
import mongodbIcon from '../images/mongodb-logo.png';
import graphqlIcon from '../images/graphql.png';
import apolloIcon from '../images/apollo.png';
import pythonIcon from '../images/python.png';
import tensorFlowIcon from '../images/TensorFlow.png';
import kerasIcon from '../images/keras.png';
import mySqlIcon from '../images/mysql.png';
import androidJavaIcon from '../images/android_w_java.png';
import sqlLiteIcon from '../images/sqlite.png';
import dockerIcon from '../images/docker.png';
import herokuIcon from '../images/heroku.png';



function Skills() {

    return (
        <Container id="skills" fluid>
            <h1 className="mb-4">Skills</h1>
            <Row>
                <Col md={6} id="skills-info">
                    <p>The main area of my expertise is all related to MERN Stack (<strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, <strong>Node</strong>).</p>
                    <p>
                        This involves skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>JSX</strong>, 
                        besides CSS frameworks such as <strong>Bootstrap</strong> and <strong>Semantic UI</strong>. For managing react states,
                        I have developed some applications with <strong>React Hooks</strong>, <strong>Context API</strong> and <strong>Redux</strong>.
                    </p>
                    <p>Moreover, experienced in developing Backend services with <strong>GraphQL</strong> and <strong>Apollo Server</strong>.</p>
                    <p>Finally, as a complementary background, <strong>TensorFlow</strong> and <strong>Keras</strong> with <strong>Python</strong>.</p>
                </Col>
                <Col md={6} id="technologies-grid">
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={htmlIcon} alt="html icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={cssIcon} alt="css icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={javascriptIcon} alt="javascript icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={jsxIcon} alt="jsx icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={reactIcon} alt="react icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={reduxIcon} alt="redux icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={bootstrapIcon} alt="bootstrap icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={semanticUiIcon} alt="semantic ui icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={nodeIcon} alt="node icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={mongodbIcon} alt="mongodb icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={graphqlIcon} alt="graphql icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={apolloIcon} alt="apollo icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={pythonIcon} alt="python icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={tensorFlowIcon} alt="tensorflow icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={kerasIcon} alt="keras icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={mySqlIcon} alt="mysql icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={androidJavaIcon} alt="android java icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={sqlLiteIcon} alt="sqlite icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={dockerIcon} alt="docker icon" />
                    </div>
                    <div className="technologies-grid-item">
                        <Image className="technology-icon" src={herokuIcon} alt="heroku icon" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;
