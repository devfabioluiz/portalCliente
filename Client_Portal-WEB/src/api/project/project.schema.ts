import { z } from 'zod';

export const ProjectSchema = z.object({
  id: z.string(),
  name: z.string().min(2),
});

export const ProjectsSchema = z.object({
  items: z.array(ProjectSchema),
  pageCount: z.number().min(1),
  totalCount: z.number().min(0),
});

export type Project = z.infer<typeof ProjectSchema>;
