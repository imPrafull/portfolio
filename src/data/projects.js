import taskclipImg from '../assets/projects/taskclip.jpg';
import moviesNowImg from '../assets/projects/movies-now.jpeg';
import recipeBookImg from '../assets/projects/recipe-book.jpeg';
import ticTacToeImg from '../assets/projects/tic-tac-toe.png';
import projectManagerImg from '../assets/projects/project-manager.png';
import shoppingCartImg from '../assets/projects/shopping-cart.png';
import placepickerImg from '../assets/projects/placepicker.png';
import reactQuizImg from '../assets/projects/react-quiz.png';
import eventManagerImg from '../assets/projects/event-manager.png';

export const PROJECTS = [
    {
        name: "Recipe Book",
        description: `An easy-to-use web app that helps you manage your recipes. You can add new recipes, view your collection, create ingredient lists, and quickly add recipes to your shopping list. It also features secure authentication for secure access. The app is developed using Angular, Node.js and MongoDB.`,
        skills: [ 'Angular', 'Node', 'MongoDB' ],
        img: recipeBookImg,
        demoLink: 'https://recipebook-ag.netlify.app/',
        githubLink: 'https://github.com/imPrafull/Recipe-Book',
    },
    {
        name: "MoviesNow",
        description: `A React web app that showcases a list of movies currently in theaters and upcoming releases, complete with detailed information. It pulls data from The Movie Database API to provide you with the latest movie details, helping you stay up-to-date with your film interests.`,
        skills: [ 'ReactJS', 'HTML', 'CSS' ],
        img: moviesNowImg,
        demoLink: 'https://react-movies-158.netlify.app/',
        githubLink: 'https://github.com/imPrafull/React-Movie-App',
    },
    {
        name: "Task Clip",
        description: `A web app for managing tasks, featuring secure authentication to keep your data safe. It lets you create, organize, and track tasks with ease. Developed with Svelte on the frontend, it allowed me to explore and learn the framework, while Node.js and MongoDB handle the backend.`,
        skills: [ 'Svelte', 'Node', 'MongoDB' ],
        img: taskclipImg,
        demoLink: 'https://taskclip.netlify.app/',
        githubLink: 'https://github.com/imPrafull/task-clip',
    },
];

export const MORE_PROJECTS = [
    {
        name: "Tic Tac Toe",
        description: `A simple and fun app that lets you play the classic game of Tic Tac Toe`,
        skills: [ 'React', 'JS' ],
        img: ticTacToeImg,
        demoLink: 'https://imPrafull.github.io/React-complete-guide/02-tic-tac-toe',
    },
    {
        name: "Project Manager",
        description: `An app for managing projects, organizing tasks and tracking progress`,
        skills: [ 'React', 'JS' ],
        img: projectManagerImg,
        demoLink: 'https://imPrafull.github.io/React-complete-guide/06-project-management',
    },
    {
        name: "Shopping Cart",
        description: `An easy-to-use app to browse products, add items to your cart, and manage purchases`,
        skills: [ 'React', 'JS' ],
        img: shoppingCartImg,
        demoLink: 'https://imPrafull.github.io/React-complete-guide/07-shopping-cart',
    },
    {
        name: "Placepicker",
        description: `An app where you can choose places you'd like to visit from a curated list of destinations`,
        skills: [ 'React', 'JS' ],
        img: placepickerImg,
        demoLink: 'https://imPrafull.github.io/React-complete-guide/12-placepicker-hooks',
    },
    {
        name: "React Quiz",
        description: `A fun app that lets you take quizzes and test your knowledge of React`,
        skills: [ 'React', 'JS' ],
        img: reactQuizImg,
        demoLink: 'https://imPrafull.github.io/React-complete-guide/09-react-quiz',
    },
    {
        name: "Event Manager",
        description: `An app built to help you organize and manage events`,
        skills: [ 'React', 'JS' ],
        img: eventManagerImg,
        demoLink: 'https://event-manager-react.netlify.app/',
    },
]
