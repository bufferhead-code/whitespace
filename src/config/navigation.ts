import { getCollection } from "astro:content";

const project = (await getCollection("projects"))[0];

export const navigationItems = [
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Pages",
    items: [
      {
        title: "Home 2",
        url: "/home-2",
      },
      {
        title: "Home 3",
        url: "/home-3",
      },
      {
        title: "Project Single",
        url: "/projects/" + project?.id,
      },
    ],
  },
  {
    title: "Sections",
    items: [
      {
        title: "Contact Forms",
        url: "/sections/contact",
      },
      {
        title: "Experience & Education",
        url: "/sections/experience",
      },
      {
        title: "Hero",
        url: "/sections/hero",
      },
      {
        title: "Projects",
        url: "/sections/projects",
      },
      {
        title: "Services",
        url: "/sections/services",
      },
      {
        title: "Stack",
        url: "/sections/stack",
      },
      {
        title: "Testimonials",
        url: "/sections/testimonials",
      },
    ],
  },
];

export const socialItems = [
  {
    title: "Github",
    url: "#",
    icon: "mdi:github",
  },
  {
    title: "Dribbble",
    url: "#",
    icon: "mdi:dribbble",
  },
  {
    title: "Instagram",
    url: "#",
    icon: "mdi:instagram",
  },
  {
    title: "Linkedin",
    url: "#",
    icon: "mdi:linkedin",
  },
];
