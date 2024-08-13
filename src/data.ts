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
    name: "FigGen - Figma to Code converter",
    image: "/images/projects/figgen.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "react", "tailwind"],
  },
  {
    name: "FigGen - Figma to Code converter",
    image: "/images/projects/figgen.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "react", "tailwind"],
  },
  {
    name: "FigGen - Figma to Code converter",
    image: "/images/projects/figgen.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "react", "tailwind"],
  },
  {
    name: "FigGen - Figma to Code converter",
    image: "/images/projects/figgen.jpg",
    description: "Pixel perfect HTML/Tailwind for Figma Auto layout designs.",
    gradient: ["#1F6582", "#1ABCFE"],
    url: "https://www.figma.com/community/plugin/1065278044402066626",
    tech: ["typescript", "react", "tailwind"],
  }
]

export const SKILLS = {
  programmingLanguages: [
    "javascript",
    "gsap",
    "tailwind",
    "html",
    "css",
  ],
  frameworksDatabases: ["react", "angular",],
  tools: ["git",],
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
}

export const TIMELINE: Array<TimelineNode> = [
  {
    title: "2023",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
  },
  {
    title: "Speaker at React ",
    size: ItemSize.SMALL,
    subtitle:
      "Discussed on Interaction to Next Paint (INP), a Google Core Web Vital metric",
    shouldDrawLine: true,
  },
  {
    title: "2022",
    size: ItemSize.LARGE,
    shouldDrawLine: false,
  },
  {
    title: "Frontend Engineer 2 (Current)",
    size: ItemSize.SMALL,
    subtitle:
      "Frontend Engineering around Livingroom device performance",
    shouldDrawLine: true,
  }
]
