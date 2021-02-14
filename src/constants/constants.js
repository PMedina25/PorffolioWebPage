// Import images
import htmlIcon from '../assets/images/html-5.png';
import cssIcon from '../assets/images/css.png';
import javascriptIcon from '../assets/images/javascript.png';
import reactIcon from '../assets/images/react.png';
import reduxIcon from '../assets/images/Redux.png';
import bootstrapIcon from '../assets/images/bootstrap.png';
import semanticUiIcon from '../assets/images/semantic-ui.png';
import nodeIcon from '../assets/images/nodejs.png';
import mongodbIcon from '../assets/images/mongodb.png';
import graphqlIcon from '../assets/images/graphql.png';
import apolloIcon from '../assets/images/apollo.png';
import mySqlIcon from '../assets/images/mysql.png';
import mariadbIcon from '../assets/images/mariadb.png';
import firebaseIcon from '../assets/images/firebase.png';
import vsCodeIcon from '../assets/images/vscode.png';
import postmanIcon from '../assets/images/postman.png';
import gitIcon from '../assets/images/git.png';
import githubIcon from '../assets/images/github.png';
import dockerIcon from '../assets/images/docker.png';
import awsAmplifyIcon from '../assets/images/aws-amplify.png';
import awsLambdaIcon from '../assets/images/aws-lambda.png';
import herokuIcon from '../assets/images/heroku.png';
import netlifyIcon from '../assets/images/netlify.png';
import androidJavaIcon from '../assets/images/android_w_java.png';
import cIcon from '../assets/images/cplusplus.png';
import arduinoIcon from '../assets/images/arduino.png';
import raspberryPiIcon from '../assets/images/raspberrypi.png';
import loraIcon from '../assets/images/lora.png';
import zigbeeIcon from '../assets/images/zigbee.png';

const frontend = 'Frontend';
const backend = 'Backend';
const toolsCloud = 'Tools and Cloud';
const embeddedSystems = 'Embedded Systems';


export const KNOWLEDGE_FIELDS = [frontend, backend, toolsCloud, embeddedSystems];
export const TECHNOLOGY_FIELDS = {
    'frontend': [
        {
            name: 'HTML',
            icon: htmlIcon
        },
        {
            name: 'CSS',
            icon: cssIcon
        },
        {
            name: 'JavaScript',
            icon: javascriptIcon
        },
        {
            name: 'React',
            icon: reactIcon
        },
        {
            name: 'React Native',
            icon: reactIcon
        },
        {
            name: 'Redux',
            icon: reduxIcon
        },
        {
            name: 'Bootstrap',
            icon: bootstrapIcon
        },
        {
            name: 'Semantic UI',
            icon: semanticUiIcon
        }
    ],
    'backend': [
        {
            name: 'Node/Express',
            icon: nodeIcon
        },
        {
            name: 'MongoDB',
            icon: mongodbIcon
        },
        {
            name: 'GraphQL',
            icon: graphqlIcon
        },
        {
            name: 'Apollo Server',
            icon: apolloIcon
        },
        {
            name: 'MySQL',
            icon: mySqlIcon
        },
        {
            name: 'MariaDB',
            icon: mariadbIcon
        }
    ],
    'tools_cloud': [
        {
            name: 'VSCode',
            icon: vsCodeIcon
        },
        {
            name: 'Postman',
            icon: postmanIcon
        },
        {
            name: 'Git',
            icon: gitIcon
        },
        {
            name: 'GitHub',
            icon: githubIcon
        },
        {
            name: 'Docker',
            icon: dockerIcon
        },
        {
            name: 'Firebase',
            icon: firebaseIcon
        },
        {
            name: 'AWS Amplify',
            icon: awsAmplifyIcon
        },
        {
            name: 'AWS Lambda',
            icon: awsLambdaIcon
        },
        {
            name: 'Heroku',
            icon: herokuIcon
        },
        {
            name: 'Netlify',
            icon: netlifyIcon
        }
    ],
    'embedded_systems': [
        {
            name: 'Android Java',
            icon: androidJavaIcon
        },
        {
            name: 'C++',
            icon: cIcon
        },
        {
            name: 'Arduino',
            icon: arduinoIcon
        },
        {
            name: 'Raspberry Pi',
            icon: raspberryPiIcon
        },
        {
            name: 'LoRa',
            icon: loraIcon
        },
        {
            name: 'Zigbee',
            icon: zigbeeIcon
        }
    ]
};