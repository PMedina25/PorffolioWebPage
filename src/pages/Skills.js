import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import bootstrap components
import { Container, Image } from 'react-bootstrap';

// Import components
import Sidebar from '../components/common/Navbar';

// Import skills constants
import { KNOWLEDGE_FIELDS, TECHNOLOGY_FIELDS } from '../constants/constants';

const Skills = () => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    let frontendGridColumns, backendGridColumns, toolsCloudGridColumns, embeddedSystemsGridColumns;

    if (TECHNOLOGY_FIELDS.frontend.length % 5 === 0) {
        frontendGridColumns = '1fr 1fr 1fr 1fr 1fr';
    } else if (TECHNOLOGY_FIELDS.frontend.length % 4 === 0) {
        frontendGridColumns = '1fr 1fr 1fr 1fr';
    } else if (TECHNOLOGY_FIELDS.frontend.length % 3 === 0){
        frontendGridColumns = '1fr 1fr 1fr';
    } else {
        frontendGridColumns = '1fr 1fr';
    }

    if (TECHNOLOGY_FIELDS.backend.length % 5 === 0) {
        backendGridColumns = '1fr 1fr 1fr 1fr 1fr';
    } else if (TECHNOLOGY_FIELDS.backend.length % 4 === 0) {
        backendGridColumns = '1fr 1fr 1fr 1fr';
    } else if (TECHNOLOGY_FIELDS.backend.length % 3 === 0){
        backendGridColumns = '1fr 1fr 1fr';
    } else {
        backendGridColumns = '1fr 1fr';
    }

    if (TECHNOLOGY_FIELDS.tools_cloud.length % 5 === 0) {
        toolsCloudGridColumns = '1fr 1fr 1fr 1fr 1fr';
    } else if (TECHNOLOGY_FIELDS.tools_cloud.length % 4 === 0) {
        toolsCloudGridColumns = '1fr 1fr 1fr 1fr';
    } else if (TECHNOLOGY_FIELDS.tools_cloud.length % 3 === 0){
        toolsCloudGridColumns = '1fr 1fr 1fr';
    } else {
        toolsCloudGridColumns = '1fr 1fr';
    }

    if (TECHNOLOGY_FIELDS.embedded_systems.length % 5 === 0) {
        embeddedSystemsGridColumns = '1fr 1fr 1fr 1fr 1fr';
    } else if (TECHNOLOGY_FIELDS.embedded_systems.length % 4 === 0) {
        embeddedSystemsGridColumns = '1fr 1fr 1fr 1fr';
    } else if (TECHNOLOGY_FIELDS.embedded_systems.length % 3 === 0){
        embeddedSystemsGridColumns = '1fr 1fr 1fr';
    } else {
        embeddedSystemsGridColumns = '1fr 1fr';
    }

    return (
        <div id="skills">
            <h1>Skills</h1>
            <div className="underline"></div>

            <div className="btn-container">
                {
                    KNOWLEDGE_FIELDS.map((field, index) => {
                        return (
                            <button 
                                key={field} 
                                onClick={() => setValue(index)} 
                                className={`field-btn ${value === index && 'active-btn'}`
                            }>
                                {field}
                            </button>
                        );
                    })
                }
            </div>

            {value === 0 &&
                <>
                    <article id="frontend-content" className="field-content" style={{'gridTemplateColumns': `${frontendGridColumns}`}}>
                    {
                        TECHNOLOGY_FIELDS.frontend.map((technology, index) => {
                            return (
                                <div key={index} className="technologies-grid-item" data-aos="zoom-in">
                                    <Image className="technology-icon" src={technology.icon} alt={`${technology.name} icon`} />
                                    <p>{technology.name}</p>
                                </div>
                            );
                        })
                    }
                    </article>
                    <div className="field-info">
                        <p>
                            In regards to the frontend, this involves skilled in <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong> and  
                            {' '}<strong>JSX</strong>, besides CSS frameworks such as <strong>Bootstrap</strong> and <strong>Semantic UI</strong>. For managing react states, I have developed some applications 
                            with <strong>React Hooks</strong>, <strong>Context API</strong> and <strong>Redux</strong>.
                        </p>
                    </div>
                </>
            }
            {value === 1 &&
                <>
                    <article id="backend-content" className="field-content" style={{'gridTemplateColumns': `${backendGridColumns}`}}>
                    {
                        TECHNOLOGY_FIELDS.backend.map((technology, index) => {
                            return (
                                <div key={index} className="technologies-grid-item" data-aos="zoom-in">
                                    <Image className="technology-icon" src={technology.icon} alt={`${technology.name} icon`} />
                                    <p>{technology.name}</p>
                                </div>
                            );
                        })
                    }
                    </article>
                    <div className="field-info">
                        <p>
                            <strong>Node</strong> and <strong>Express</strong> as the mainstay, as well as <strong>MongoDB</strong> as the primary database system. Moreover, I have developed
                            {' '}some applications using <strong>GraphQL</strong> and <strong>Apollo Server</strong> for the backend.
                        </p>
                        <p>
                            For mobile app development, I have used <strong>Firebase</strong> and <strong>SQLite</strong>.
                        </p>
                    </div>
                </>
            }
            {value === 2 &&
                <>
                    <article id="tools-content" className="field-content" style={{'gridTemplateColumns': `${toolsCloudGridColumns}`}}>
                    {
                        TECHNOLOGY_FIELDS.tools_cloud.map((technology, index) => {
                            return (
                                <div key={index} className="technologies-grid-item" data-aos="zoom-in">
                                    <Image className="technology-icon" src={technology.icon} alt={`${technology.name} icon`} />
                                    <p>{technology.name}</p>
                                </div>
                            );
                        })
                    }
                    </article>
                    <div className="field-info">
                        <p>
                            <strong>Visual Studio Code</strong> as the main IDE, with experience in <strong>Git</strong> version control system and <strong>Git Flow</strong>. Furthermore,
                            {' '}knowledge in deploying apps with <strong>Docker</strong> and <strong>Heroku</strong>.
                        </p>
                    </div>
                </>
            }
            {value === 3 &&
                <>
                    <article id="embedded-systems-content" className="field-content" style={{'gridTemplateColumns': `${embeddedSystemsGridColumns}`}}>
                    {
                        TECHNOLOGY_FIELDS.embedded_systems.map((technology, index) => {
                            return (
                                <div key={index} className="technologies-grid-item" data-aos="zoom-in">
                                    <Image className="technology-icon" src={technology.icon} alt={`${technology.name} icon`} />
                                    <p>{technology.name}</p>
                                </div>
                            );
                        })
                    }
                    </article>
                    <div className="field-info">
                        <p>
                            I have built plenty of embedded systems with <strong>Arduino</strong> and <strong>Raspberry Pi</strong>,
                            {' '} with the use of different wireless communication protocols (<strong>Bluetooth</strong>, <strong>LoRa</strong>
                            {' '} and <strong>Zigbee</strong>) and connected to the cloud.
                        </p>
                    </div>
                </> 
            }
        </div>
    );
}
export default Skills;
