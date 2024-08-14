import { z } from 'zod';

import { PaginationSchema } from 'src/api';

export const TechnologySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
});

export const TechnologiesSchema = z.object({
  items: z.array(TechnologySchema),
  pageCount: z.number().min(1),
  totalCount: z.number().min(0),
});

export const TechnologiesParamsSchema = PaginationSchema.merge(
  z.object({
    filterBy: z.string().optional(),
    filterValue: z.string().optional(),
  }),
);

export type Technology = z.infer<typeof TechnologySchema>;
