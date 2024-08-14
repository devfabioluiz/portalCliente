import { z } from 'zod';

export const SenioritySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
});

export const SenioritiesSchema = z.object({
  items: z.array(SenioritySchema),
  pageCount: z.number().min(1),
  totalCount: z.number().min(0),
});

export type Seniority = z.infer<typeof SenioritySchema>;
