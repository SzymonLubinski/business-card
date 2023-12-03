import {ProjectType} from "./MyTypes";

const jFarm = require('../img/josehpFarm.png');
const lTaco = require('../img/logans.png');
const pList = require('../img/ProductList.png');
const mShop = require('../img/MacrameShop.png');
const cDocs = require('../img/DocsCreator.png');
const sSant = require('../img/SimonSanta.png');

export const staticData: ProjectType[] = [
    {
        id: '1',
        name: "Simon Santa Claus",
        line1: "The Simon Santa Claus website is a website for conducting the St. Nicholas Day draw. But not only.",
        line2: "On Simon Santa's website you can register and use it as a messenger. Invite friends, create groups and chat with your friends on the fly, just like in popular messengers.",
        img: sSant,
        link: 'https://simon-santa-claus.vercel.app/',
    },
    {
        id: '2',
        name: "Logan's Taco",
        line1: "Restaurant website. Order food, receive a confirmation email and manage the restaurant from the dashboard.",
        line2: 'Frontend and backend restaurant website written in TypeScript with Next.js.The application uses the function of sending e-mails, databases, registration and logging in Next-Auth, data analysis and many others.',
        img: lTaco,
        link: 'https://logans-taco.vercel.app/',
    },
    {
        id: '3',
        name: "Josep's Farm",
        line1: "A fully functional game that's tons of fun! ",
        line2: 'Joseph\'s Farm is written in Python using the PyGame library and several others. The game has many features, including saving and loading game state.',
        img: jFarm,
        link: 'https://github.com/SzymonLubinski/Josephs-Farm',
    },
    {
        id: '4',
        name: "Macrame Shop",
        line1: "Shop and blog of a person who owns a shop with handmade products.",
        line2: "An example of a purely styling website I created. There is no contact form support or backend functionality.. Written with Bootstrap",
        img: mShop,
        link: 'https://szymonlubinski.github.io/macrame_shop/',
    },
    {
        id: '5',
        name: "Product List",
        line1: "Page for adding and removing products",
        line2: "Simple website with backend in PHP. App has options like add and delete product from list. I used MySQL to kept product items",
        img: pList,
        link: 'https://productlistbyszymon.000webhostapp.com',
    },
    {
        id: '6',
        name: "Document Creator",
        line1: 'creating documents and reports using python',
        line2: "An application written in Python that prepares a document based on Eurostat data and saves it in pdf format.The program is not written based on OOP principles. It was just an exercise in the skills learned in the course.",
        img: cDocs,
        link: 'https://github.com/SzymonLubinski/document-creator',
    },
];