export const MENU = [
    {
      name: "Home",
      ref: "home",
    },
    {
      name: "Education",
      ref: "education",
    },
    {
      name: "Projects",
      ref: "projects",
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
  description: string;
  gradient: [string, string];
  url: string;
  tech: string[];
}

export const PROJECTS: Project[] = [
  {
    name: "Basketball Stats Site",
    image: "/images/projects/basketballStatsSite.png",
    description: "Statistics site that shows up to date NBA player and team stats.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://github.com/majuth/basketball-stats-site",
    tech: ["angular", "typescript", "css"],
  },
  {
    name: "Android Calculator App",
    image: "/images/projects/calculatorApp.png",
    description: "Simple calculator app that runs on Android platform.",
    gradient: ["#153BB9", "#0E2C8B"],
    url: "https://github.com/majuth/Calculator-App",
    tech: ["kotlin", "java", "xml"],
  },
  {
    name: "Course Selection Site",
    image: "/images/projects/courseSelectionSite.png",
    description: "A course selection prototype site created for RUHacks 2021.",
    gradient: ["#245B57", "#004741"],
    url: "https://github.com/Ctrl-Alt-Defeat-RUHacks/RUPrint",
    tech: ["react", "css", "javascript"],
  }
]

export const SKILLS = {
  programmingLanguages: [
    "python",
    "java",
    "typescript",
    "javascript",
    "html",
    "css",
    "sql",
    "kotlin",
    "c",
    "c++",
    "shell",
    "php",
  ],
  frameworksDatabases: ["react", "angular", "nodejs", "bootstrap", "mysql","firebase",],
  tools: ["git", "vscode", "figma",],
};

export enum ItemSize {
  SMALL = "small",
  LARGE = "large",
}

export interface TimelineNode {
  title: string;
  subtitle?: string;
  size: ItemSize;
  shouldDrawLine: boolean;
  image?: string;
}

export const TIMELINE: Array<TimelineNode> = [
  {
    title: "2025",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
  },
  {
    title: "Software Engineer Intern ",
    size: ItemSize.SMALL,
    subtitle:
      "Improving API performance and reliability for 1+ million merchants using Ruby on Rails, GraphQL and REST APIs",
    shouldDrawLine: true,
    image: "/images/experiences/shopify.png"
  },
  {
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
  },
  {
    title: "Software Engineer Intern ",
    size: ItemSize.SMALL,
    subtitle:
      "Developed Banking App features for 5+ million Android users utilizing Kotlin, Java, XML and Android Studio",
    shouldDrawLine: true,
    image: "/images/experiences/TD.png"
  },
  {
    title: "Software Developer Intern ",
    size: ItemSize.SMALL,
    subtitle:
      "Developed full-stack React website and implemented scalable UI/UX elements using Bootstrap",
    shouldDrawLine: true,
    image: "/images/experiences/OPS.png"
  },
  {
    title: "2020",
    size: ItemSize.LARGE,
    shouldDrawLine: true,
  },
  {
    title: "Systems Developer Intern",
    size: ItemSize.SMALL,
    subtitle:
      "Consolidated various data into advanced statistics in Microsoft Power BI and maintained Powershell scripts",
    shouldDrawLine: true,
    image: "/images/experiences/OPS.png"
  },
  {
    title: "Full Stack Developer Intern",
    size: ItemSize.SMALL,
    subtitle:
      "Created Javascript based Google Suite API scripts to add functionality to existing G-Suite Apps",
    shouldDrawLine: true,
    image: "/images/experiences/ryerson.png"
  }
]
