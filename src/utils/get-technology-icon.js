import { 
    FaApple,
    FaBluetooth,
    FaBootstrap,
    FaCloud,
    FaDocker, 
    FaJava,
    FaNodeJs, 
    FaPython,
    FaRaspberryPi, 
    FaReact,
    FaSwift,
    FaWifi
} from 'react-icons/fa';

import { 
    SiApollographql,
    SiArduino, 
    SiCplusplus,
    SiFirebase, 
    SiGooglemaps,
    SiGraphql, 
    SiHeroku,
    SiIbeacon,
    SiJavascript, 
    SiKeras,
    SiKubernetes, 
    SiMariadb,
    SiMathworks,
    SiMongodb,
    SiMysql,
    SiNetlify,
    SiRedux,
    SiTensorflow,
    SiZigbee
} from 'react-icons/si';

import { 
    DiAndroid 
} from 'react-icons/di';

import {
    AiFillLayout
} from 'react-icons/ai';

import {
    MdGpsFixed
} from 'react-icons/md';

export const getTechnologyIcon = (technology) => {
    switch(technology) {
        case 'ARKit':
            return <FaApple className="project-technology-icon" />
        case 'Bluetooth':
            return <FaBluetooth className="project-technology-icon" />;
        case 'Bootstrap':
            return <FaBootstrap className="project-technology-icon" />;
        case 'Cloud':
            return <FaCloud className="project-technology-icon" />;
        case 'Docker':
            return <FaDocker className="project-technology-icon" />;
        case 'Java':
            return <FaJava className="project-technology-icon" />;
        case 'Node':
        case 'Express':
            return <FaNodeJs className="project-technology-icon" />;
        case 'Python':
            return <FaPython className="project-technology-icon" />;
        case 'Raspberry Pi':
            return <FaRaspberryPi className="project-technology-icon" />;
        case 'React':
            return <FaReact className="project-technology-icon" />;
        case 'Swift':
            return <FaSwift className="project-technology-icon" />
        case 'LoRa':
        case 'MQTT':
            return <FaWifi className="project-technology-icon" />;
        case 'Apollo Server':
            return <SiApollographql className="project-technology-icon" />;
        case 'Arduino':
            return <SiArduino className="project-technology-icon" />;
        case 'C++':
            return <SiCplusplus className="project-technology-icon" />;
        case 'Firebase':
            return <SiFirebase className="project-technology-icon" />;
        case 'Google Maps':
            return <SiGooglemaps className="project-technology-icon" />;
        case 'GraphQL':
            return <SiGraphql className="project-technology-icon" />;
        case 'Heroku':
            return <SiHeroku className="project-technology-icon" />;
        case 'iBeacons':
            return <SiIbeacon className="project-technology-icon" />;
        case 'JavaScript':
            return <SiJavascript className="project-technology-icon" />;
        case 'Keras':
            return <SiKeras className="project-technology-icon" />;
        case 'Kubernetes':
            return <SiKubernetes className="project-technology-icon" />;
        case 'MariaDB':
            return <SiMariadb className="project-technology-icon" />;
        case 'MATLAB':
            return <SiMathworks className="project-technology-icon" />;
        case 'MongoDB':
            return <SiMongodb className="project-technology-icon" />;
        case 'MySQL':
            return <SiMysql className="project-technology-icon" />;
        case 'Netlify':
            return <SiNetlify className="project-technology-icon" />;
        case 'Redux':
            return <SiRedux className="project-technology-icon" />;
        case 'TensorFlow':
            return <SiTensorflow className="project-technology-icon" />;
        case 'Zigbee':
            return <SiZigbee className="project-technology-icon" />;
        case 'Semantic UI':
            return <AiFillLayout className="project-technology-icon" />;
        case 'Android':
            return <DiAndroid className="project-technology-icon" />;
        case 'GPS':
            return <MdGpsFixed className="project-technology-icon" />
        default:
            return <div></div>;
    }
}