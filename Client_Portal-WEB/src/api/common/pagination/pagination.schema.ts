import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.number().min(1).optional(),
  perPage: z.number().min(1).optional(),
});
