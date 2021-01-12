import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import bootstrap components
import { Col, Container, Image, Row } from 'react-bootstrap';

// Import images
import htmlIcon from '../images/html-5.png';
import cssIcon from '../images/css.png';
import javascriptIcon from '../images/javascript.png';
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
import gitIcon from '../images/git.png';
import githubIcon from '../images/github.png';
import dockerIcon from '../images/docker.png';
import herokuIcon from '../images/heroku.png';



const Skills = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <Container id="skills" fluid>
            <Row>
                <Col xs={12} md={12} lg={6} id="skills-info">
                    <h1 className="mb-4" data-aos="fade-up">Skills</h1>
                    <p data-aos="fade-up">The main area of my expertise is all related to MERN Stack (<strong>MongoDB</strong>, <strong>Express</strong>, <strong>React</strong>, <strong>Node</strong>).</p>
                    <p data-aos="fade-up">
                        This involves skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>JSX</strong>, 
                        besides CSS frameworks such as <strong>Bootstrap</strong> and <strong>Semantic UI</strong>. For managing react states,
                        I have developed some applications with <strong>React Hooks</strong>, <strong>Context API</strong> and <strong>Redux</strong>.
                    </p>
                    <p data-aos="fade-up">Moreover, experienced in developing Backend services with <strong>GraphQL</strong> and <strong>Apollo Server</strong>.</p>
                    <p data-aos="fade-up">Finally, as a complementary background, <strong>Java</strong> for <strong>Android App Development</strong>, and also <strong>TensorFlow</strong> and <strong>Keras</strong> with <strong>Python</strong>.</p>
                </Col>
                <Col xs={12} md={12} lg={6} id="technologies-grid">
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={htmlIcon} alt="html icon" />
                        <p>HTML</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={cssIcon} alt="css icon" />
                        <p>CSS</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={javascriptIcon} alt="javascript icon" />
                        <p>JavaScript</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={reactIcon} alt="react icon" />
                        <p>React</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={reduxIcon} alt="redux icon" />
                        <p>Redux</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={bootstrapIcon} alt="bootstrap icon" />
                        <p>Bootstrap</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={semanticUiIcon} alt="semantic ui icon" />
                        <p>Semantic UI</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={nodeIcon} alt="node icon" />
                        <p>Node.js</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={mongodbIcon} alt="mongodb icon" />
                        <p>MongoDB</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={graphqlIcon} alt="graphql icon" />
                        <p>GraphQL</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={apolloIcon} alt="apollo icon" />
                        <p>Apollo Server</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={pythonIcon} alt="python icon" />
                        <p>Python</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={tensorFlowIcon} alt="tensorflow icon" />
                        <p>TensorFlow</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={kerasIcon} alt="keras icon" />
                        <p>Keras</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={mySqlIcon} alt="mysql icon" />
                        <p>MySQL</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={androidJavaIcon} alt="android java icon" />
                        <p>Java for Android</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={gitIcon} alt="git icon" />
                        <p>Git</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={githubIcon} alt="github icon" />
                        <p>GitHub</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={dockerIcon} alt="docker icon" />
                        <p>Docker</p>
                    </div>
                    <div className="technologies-grid-item" data-aos="fade-up">
                        <Image className="technology-icon" src={herokuIcon} alt="heroku icon" />
                        <p>Heroku</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Skills;
