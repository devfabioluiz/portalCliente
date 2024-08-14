import { z } from 'zod';

export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string().min(2),
});

export const CustomersSchema = z.object({
  items: z.array(CustomerSchema),
  pageCount: z.number().min(1),
  totalCount: z.number().min(0),
});

export type Customer = z.infer<typeof CustomerSchema>;
