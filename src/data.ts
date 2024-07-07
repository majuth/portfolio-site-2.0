export const MENU = [
    {
      name: "Home",
      ref: "home",
    },
    {
      name: "Projects",
      ref: "projects",
    },
    {
      name: "Education",
      ref: "education",
    },
    {
      name: "Skills",
      ref: "skills",
    },
    {
      name: "Experience",
      ref: "experience",
    },
    {
      name: "Contact",
      ref: "contact",
    },
  ];

export const TYPEDTITLE = [
    "I am an aspiring Software Engineer",
    "I build modern and user friendly apps",
    "I am an aspiring professional",
    "I am an aspiring Computer Scientist"
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/majuth/",
  github: "https://github.com/majuth",
  instagram: "https://www.instagram.com/majuthkira/",
  facebook: "https://www.facebook.com/majuth.kirakalaprathapan/",
  twitter: "https://twitter.com/majuthkira",
}

export interface Project {
  name: string;
  image: string;
  blurImage: string;
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "FigGen - Figma to Code converter",
    image: "images/projects/figgen.jpg",
    blurImage: "images/projects/blur/figgen-blur.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "react", "tailwind"],
  }
]