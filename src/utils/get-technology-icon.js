import { 
    FaBootstrap,
    FaCloud,
    FaDocker, 
    FaJava,
    FaNodeJs, 
    FaPython,
    FaRaspberryPi, 
    FaReact,
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
    SiJavascript, 
    SiKeras,
    SiKubernetes, 
    SiMariadb,
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

export const getTechnologyIcon = (technology) => {
    switch(technology) {
        case 'Bootstrap':
            return <FaBootstrap />;
        case 'Cloud':
            return <FaCloud />;
        case 'Docker':
            return <FaDocker />;
        case 'Java':
            return <FaJava />;
        case 'Node':
        case 'Express':
            return <FaNodeJs />;
        case 'Python':
            return <FaPython />;
        case 'Raspberry Pi':
            return <FaRaspberryPi />;
        case 'React':
            return <FaReact />;
        case 'LoRa':
        case 'MQTT':
            return <FaWifi />;
        case 'Apollo Server':
            return <SiApollographql />;
        case 'Arduino':
            return <SiArduino />;
        case 'C++':
            return <SiCplusplus />;
        case 'Firebase':
            return <SiFirebase />;
        case 'Google Maps API':
            return <SiGooglemaps />;
        case 'GraphQL':
            return <SiGraphql />;
        case 'Heroku':
            return <SiHeroku />;
        case 'JavaScript':
            return <SiJavascript />;
        case 'Keras':
            return <SiKeras />;
        case 'Kubernetes':
            return <SiKubernetes />;
        case 'MariaDB':
            return <SiMariadb />;
        case 'MongoDB':
            return <SiMongodb />;
        case 'MySQL':
            return <SiMysql />;
        case 'Netlify':
            return <SiNetlify />;
        case 'Redux':
            return <SiRedux />;
        case 'TensorFlow':
            return <SiTensorflow />;
        case 'Zigbee':
            return <SiZigbee />;
        case 'Semantic UI':
            return <AiFillLayout />
        default:
            return <div></div>;
    }
}