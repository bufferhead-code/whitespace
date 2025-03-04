import ContactFormOne from "@components/Contact/ContactFormOne.astro";
import ContactFromTwo from "@components/Contact/ContactFormTwo.astro";
import ExperienceSectionOne from "@components/Experience/ExperienceSectionOne.astro";
import ExperienceSectionTwo from "@components/Experience/ExperienceSectionTwo.astro";
import ExperienceSectionThree from "@components/Experience/ExperienceSectionThree.astro";
import HeroSectionOne from "@components/Hero/HeroSectionOne.astro";
import HeroSectionTwo from "@components/Hero/HeroSectionTwo.astro";
import HeroSectionThree from "@components/Hero/HeroSectionThree.astro";
import ServiceSectionOne from "@components/Service/ServiceSectionOne.astro";
import ServiceSectionTwo from "@components/Service/ServiceSectionTwo.astro";
import ServiceSectionThree from "@components/Service/ServiceSectionThree.astro";
import StackSectionOne from "@components/Stack/StackSectionOne.astro";
import StackSectionTwo from "@components/Stack/StackSectionTwo.astro";
import TestimonialsSectionsOne from "@components/Testimonial/TestimonialSectionOne.astro";
import ProjectSectionOne from "@components/Project/ProjectSectionOne.astro";
import ProjectSectionTwo from "@components/Project/ProjectSectionTwo.astro";
import ProjectSectionThree from "@components/Project/ProjectSectionThree.astro";

export const sections = [
  {
    title: "Contact Forms",
    slug: "contact",
    components: [
      {
        title: "Contact Form One",
        component: ContactFormOne,
        path: "/src/components/Contact/ContactFormOne.astro",
      },
      {
        title: "Contact Form Two",
        component: ContactFromTwo,
        path: "/src/components/Contact/ContactFormTwo.astro",
      },
    ],
  },
  {
    title: "Experience & Education",
    slug: "experience",
    components: [
      {
        title: "Experience Section One",
        component: ExperienceSectionOne,
        path: "/src/components/Experience/ExperienceSectionOne.astro",
      },
      {
        title: "Education Section Two",
        component: ExperienceSectionTwo,
        path: "/src/components/Experience/ExperienceSectionTwo.astro",
      },
      {
        title: "Experience Section Three",
        component: ExperienceSectionThree,
        path: "/src/components/Experience/ExperienceSectionThree.astro",
      },
    ],
  },
  {
    title: "Hero",
    slug: "hero",
    components: [
      {
        title: "Hero One",
        component: HeroSectionOne,
        path: "/src/components/Hero/HeroSectionOne.astro",
      },
      {
        title: "Hero Two",
        component: HeroSectionTwo,
        path: "/src/components/Hero/HeroSectionTwo.astro",
      },
      {
        title: "Hero Three",
        component: HeroSectionThree,
        path: "/src/components/Hero/HeroSectionThree.astro",
      },
    ],
  },
  {
    title: "Projects",
    slug: "projects",
    components: [
      {
        title: "Projects One",
        component: ProjectSectionOne,
        path: "/src/components/Project/ProjectSectionOne.astro",
      },
      {
        title: "Projects Two",
        component: ProjectSectionTwo,
        path: "/src/components/Project/ProjectSectionTwo.astro",
      },
      {
        title: "Projects Three",
        component: ProjectSectionThree,
        path: "/src/components/Project/ProjectSectionThree.astro",
      },
    ],
  },
  {
    title: "Services",
    slug: "services",
    components: [
      {
        title: "Services Section One",
        component: ServiceSectionOne,
        path: "/src/components/Service/ServiceSectionOne.astro",
      },
      {
        title: "Services Two",
        component: ServiceSectionTwo,
        path: "/src/components/Service/ServiceSectionTwo.astro",
      },
      {
        title: "Services Three",
        component: ServiceSectionThree,
        path: "/src/components/Service/ServiceSectionThree.astro",
      },
    ],
  },
  {
    title: "Stack",
    slug: "stack",
    components: [
      {
        title: "Stack Section One",
        component: StackSectionOne,
        path: "/src/components/Stack/StackSectionOne.astro",
      },
      {
        title: "Stack Section Two",
        component: StackSectionTwo,
        path: "/src/components/Stack/StackSectionTwo.astro",
      },
    ],
  },
  {
    title: "Testimonials",
    slug: "testimonials",
    components: [
      {
        title: "Testimonials Section One",
        component: TestimonialsSectionsOne,
        path: "/src/components/Testimonial/TestimonialSectionOne.astro",
      },
    ],
  },
];
