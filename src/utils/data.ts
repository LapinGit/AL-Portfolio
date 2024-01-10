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
    link: "TechOne",
    image: "/TechTwo.png",
    title: "Angel's Burger Website Idea",
    description: "Trying to improve my front end skills I decided to find any popular Philippine business franchise that doesn't have a website and create one.   ",
    technologies: ["Nextjs", "Tailwindcss","TypeScript", "2023"],
    source: "",
  },
];
