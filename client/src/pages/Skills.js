import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import bootstrap components
import { Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap';

// Import components
import Sidebar from '../components/common/Sidebar';

// Import images
import htmlIcon from '../assets/images/html-5.png';
import cssIcon from '../assets/images/css.png';
import javascriptIcon from '../assets/images/javascript.png';
import reactIcon from '../assets/images/react.png';
import reduxIcon from '../assets/images/Redux.png';
import bootstrapIcon from '../assets/images/bootstrap.png';
import semanticUiIcon from '../assets/images/semantic-ui.png';
import nodeIcon from '../assets/images/nodejs.png';
import mongodbIcon from '../assets/images/mongodb-logo.png';
import graphqlIcon from '../assets/images/graphql.png';
import apolloIcon from '../assets/images/apollo.png';
import pythonIcon from '../assets/images/python.png';
import tensorFlowIcon from '../assets/images/TensorFlow.png';
import kerasIcon from '../assets/images/keras.png';
import mySqlIcon from '../assets/images/mysql.png';
import androidJavaIcon from '../assets/images/android_w_java.png';
import gitIcon from '../assets/images/git.png';
import githubIcon from '../assets/images/github.png';
import dockerIcon from '../assets/images/docker.png';
import herokuIcon from '../assets/images/heroku.png';



const Skills = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return (
        <Container id="skills" fluid>

            <Sidebar />

            <div className="fields-center">
                <h1>Skills</h1>
                <div className="underline"></div>

                <div className="btn-container">
                    <button onClick={() => setValue(0)} className={`field-btn ${value === 0 && 'active-btn'}`}>Frontend</button>
                    <button onClick={() => setValue(1)} className={`field-btn ${value === 1 && 'active-btn'}`}>Backend</button>
                    <button onClick={() => setValue(2)} className={`field-btn ${value === 2 && 'active-btn'}`}>Tools</button>
                    <button onClick={() => setValue(3)} className={`field-btn ${value === 3 && 'active-btn'}`}>Embedded Systems</button>
                    <button onClick={() => setValue(4)} className={`field-btn ${value === 4 && 'active-btn'}`}>A.I.</button>
                </div>

                {value === 0 &&
                    <article id="frontend-content" className="field-content">
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={htmlIcon} alt="html icon" />
                            <p>HTML</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={cssIcon} alt="css icon" />
                            <p>CSS</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={javascriptIcon} alt="javascript icon" />
                            <p>JavaScript</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={reactIcon} alt="react icon" />
                            <p>React</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={reduxIcon} alt="redux icon" />
                            <p>Redux</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={bootstrapIcon} alt="bootstrap icon" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={semanticUiIcon} alt="semantic ui icon" />
                            <p>Semantic UI</p>
                        </div>
                    </article>
                }
                {value === 1 &&
                    <article id="backend-content" className="field-content">
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={nodeIcon} alt="node icon" />
                            <p>Node.js</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={mongodbIcon} alt="mongodb icon" />
                            <p>MongoDB</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={graphqlIcon} alt="graphql icon" />
                            <p>GraphQL</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={apolloIcon} alt="apollo icon" />
                            <p>Apollo Server</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={mySqlIcon} alt="mysql icon" />
                            <p>MySQL</p>
                        </div>
                    </article>
                }
                {value === 2 &&
                    <article id="tools-content" className="field-content">
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={gitIcon} alt="git icon" />
                            <p>Git</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={githubIcon} alt="github icon" />
                            <p>GitHub</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={dockerIcon} alt="docker icon" />
                            <p>Docker</p>
                        </div>
                    </article>
                }
                {value === 3 &&
                    <article id="embedded-systems-content" className="field-content">
                        <Image className="technology-icon" src={androidJavaIcon} alt="android java icon" />
                        <p>Java for Android</p>
                    </article>
                }
                {value === 4 &&
                    <article id="articial-intelligence-content" className="field-content">
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={pythonIcon} alt="python icon" />
                            <p>Python</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={tensorFlowIcon} alt="tensorflow icon" />
                            <p>TensorFlow</p>
                        </div>
                        <div className="technologies-grid-item" data-aos="zoom-in">
                            <Image className="technology-icon" src={kerasIcon} alt="keras icon" />
                            <p>Keras</p>
                        </div>
                    </article>
                }
            </div>
        </Container>
    );
}

export default Skills;
