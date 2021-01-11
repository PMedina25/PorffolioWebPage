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
            return <FaApple />
        case 'Bluetooth':
            return <FaBluetooth />;
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
        case 'Swift':
            return <FaSwift />
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
        case 'Google Maps':
            return <SiGooglemaps />;
        case 'GraphQL':
            return <SiGraphql />;
        case 'Heroku':
            return <SiHeroku />;
        case 'iBeacons':
            return <SiIbeacon />;
        case 'JavaScript':
            return <SiJavascript />;
        case 'Keras':
            return <SiKeras />;
        case 'Kubernetes':
            return <SiKubernetes />;
        case 'MariaDB':
            return <SiMariadb />;
        case 'MATLAB':
            return <SiMathworks />;
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
            return <AiFillLayout />;
        case 'Android':
            return <DiAndroid />;
        case 'GPS':
            return <MdGpsFixed />
        default:
            return <div></div>;
    }
}