type Projects = {
  id: number;
  link: string;
  image: string;
  title: string;
  description: string;
  technologies: string[];
  source: string
}[];

export const ProjectsData: Projects = [
  {
    id: 0,
    link: "https://github.com/Wasabi199/MITRF-Mapua",
    image: "/TechFour.png",
    title: "Mapúa MITRF System ",
    description:
      "A loaning app based on the employee of Mapua University. this is composed of 3 users (User, Admin, Medical) the user who used the website application will  provide the necessary files for the admin.",
    technologies: ["Vuejs", "Tailwindcss","Laravel","MySql","2023"],
    source:"https://github.com/Wasabi199/MITRF-Mapua",
  },

  {
    id: 1,
    link: "https://github.com/LapinGit/FindYourShoePH-FRONTEND-",
    image: "/TechOne.png",
    title: "Find Your Shoe",
    description:
      "My first static website that I have created with the things I have learned from different tutorials.",
    technologies: ["React", "2023"],
    source:"https://github.com/LapinGit/FindYourShoePH-FRONTEND-",
  },
  {
    id: 2,
    link: "https://github.com/LapinGit/AngelsBurgerWebsite-FRONTEND-",
    image: "/TechTwo.png",
    title: "Angel's Burger Website Idea",
    description: "Trying to improve my front end skills I decided to find any popular Philippine business franchise that doesn't have a website and create one.   ",
    technologies: ["Nextjs", "Tailwindcss","TypeScript", "2023"],
    source: "https://github.com/LapinGit/AngelsBurgerWebsite-FRONTEND-",
  },
  {
    id: 3,
    link: "https://github.com/LapinGit/testing-framer-motion",
    image: "/TechThree.png",
    title: "Testing Framer Motion",
    description: "Exploring framer motion on my website that is dedicated to my favorite artists of 2023 ",
    technologies: ["Nextjs", "Tailwindcss","TypeScript","FramerMotion", "2023"],
    source: "https://github.com/LapinGit/testing-framer-motion",
  },
];
