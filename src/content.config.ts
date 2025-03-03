import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // Not available with legacy API

const projects = defineCollection({
  loader: glob({ pattern: ["*.md"], base: "./src/data/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      priority: z.number(),
      tags: z.array(z.string()),
      logo: image().optional(),
      year: z.number().optional(),
    }),
});

export const collections = { projects };
