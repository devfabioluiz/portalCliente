import { z } from 'zod';

import { PaginationSchema } from 'src/api';

export const RoleSchema = z.object({
  id: z.string(),
  name: z.string(),
});

export const RolesSchema = z.object({
  items: z.array(RoleSchema),
  pageCount: z.number().min(1),
  totalCount: z.number().min(0),
});

export const RolesParamsSchema = PaginationSchema.merge(
  z.object({
    search: z.string().optional(),
  }),
);

export type Role = z.infer<typeof RoleSchema>;
