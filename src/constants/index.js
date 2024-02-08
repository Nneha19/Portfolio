import {
  mobile,
  backend,
  web,
 
  expense_tracker,
  vidsphere,
  reciperover,
  shopease,
  imageseeker,
  reactminifeatures,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "UI/UX",
    icon: web,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Backend (Familiar)",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: "./html.png",
  },
  {
    name: "CSS 3",
    icon: "./css.png",
  },
  {
    name: "JavaScript",
    icon: "./javascript.png",
  },
  {
    name: "React JS",
    icon: "./reactjs.png",
  },
  {
    name: "Redux Toolkit",
    icon: "./redux.png",
  },
  {
    name: "Tailwind CSS",
    icon: "./tailwind.png",
  },
  {
    name: "Node JS",
    icon: "./nodejs.png",
  },
  {
    name: "MongoDB",
    icon: "./mongodb.png",
  },
  {
    name: "MySQL",
    icon: "./mysql.png",
  },
  {
    name: "Express",
    icon: "./express.png",
  },
  {
    name: "git",
    icon: "./git.png",
  },
  {
    name: "figma",
    icon: "./figma.png",
  },
];


const projects = [
  {
    name: "Expense Tracker",
    description:
      "Web-based platform enabling users to effortlessly monitor and manage their expenses for enhanced financial control.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "chakra-ui",
        color: "green-text-gradient",
      },
      {
        name: "apexcharts",
        color: "pink-text-gradient",
      },
    ],
    image: expense_tracker,
    demo_link: "https://expensetrace.netlify.app/",
    source_code_link: "https://github.com/Nneha19/ExpenseTracker",
  },
 
  {
    name: "VidSphere",
    description:
      "Innovative web application serving as a video-watching platform, empowering users to seamlessly enjoy YouTube videos.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: vidsphere,
    demo_link: "https://vidsphere.netlify.app/",
    source_code_link: "https://github.com/Nneha19/VidSphere",
  },
  {
    name: "Recipe Rover",
    description:
      "A dynamic food recipe website enabling users to explore diverse recipes, and save their favorites for cooking adventures.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: reciperover,
    demo_link: "https://recipeyrover.netlify.app/",
    source_code_link: "https://github.com/Nneha19/RecipeRover",
  },
  {
    name: "ShopEase",
    description:
      "ShopEase, a React-Redux powered shopping cart that enhances the online shopping experience for users.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: shopease,
    demo_link: "https://shopeaze.netlify.app/",
    source_code_link: "https://github.com/Nneha19/ShopEase",
  },
  {
    name: "React Mini Features",
    description:
      " Designed to serve as a learning tool for core React concepts, including Accordian, Pagination, Star-rating and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-redux",
        color: "green-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "pink-text-gradient",
      },
    ],
    image: reactminifeatures,
    demo_link: "https://github.com/Nneha19/React-Machine-Coding-Questions",
    source_code_link:
      "https://github.com/Nneha19/React-Machine-Coding-Questions",
  },
  {
    name: "ImageSeeker",
    description:
      "ImageSeeker employs an infinite scroll concept, allowing users to explore diverse images through an intuitive search platform.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: imageseeker,
    demo_link: "https://imageseeker.netlify.app/",
    source_code_link: "https://github.com/Nneha19/ImageSeeker",
  },
];

export { services, technologies, projects };
