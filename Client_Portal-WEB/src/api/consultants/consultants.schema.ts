import { z } from 'zod';

import { UserSchema } from 'src/api/shared/User.types';

const ConsultantProjectSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  customer: z.object({
    id: z.string().uuid(),
    name: z.string().min(2),
    accountOwners: z.array(UserSchema),
  }),
});

const ConsultantSchema = z.object({
  id: z.string().uuid(),
  isPinned: z.boolean().optional(), // TODO: remove optional
  name: z.string(),
  salary: z.number(),
  cvFileUrl: z.string().url().nullable(),
  seniority: z.object({ id: z.string(), name: z.string() }),
  role: z.object({ id: z.string(), name: z.string() }),
  project: ConsultantProjectSchema.optional(),
  businessManager: UserSchema,
});

const ConsultantsSchema = z.object({
  items: z.array(ConsultantSchema),
  pageCount: z.number().min(1),
  totalCount: z.number().min(0),
});

type ConsultantType = z.infer<typeof ConsultantSchema>;
export type ConsultantProject = z.infer<typeof ConsultantProjectSchema>;

export { ConsultantSchema, ConsultantsSchema, type ConsultantType };
