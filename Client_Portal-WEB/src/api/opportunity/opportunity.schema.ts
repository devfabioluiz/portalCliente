import { z } from 'zod';

import {
  CustomerSchema,
  ProjectSchema,
  RoleSchema,
  SenioritySchema,
  TechnologySchema,
} from 'src/api';
import { UserSchema } from 'src/api/shared/User.types';

const OpportunityBaseSchema = z.object({
  id: z.string().uuid(),
  identifier: z.string(),
  isPinned: z.boolean(),
  openDate: z.string().datetime(),
  numOfRequestedPositions: z.number().min(0),
  description: z.string(),
  technologies: z.array(TechnologySchema),
  salaryMinimum: z.number().min(0),
  salaryMaximum: z.number().min(0),
  location: z.string(),
});

export const OpportunitySchema = OpportunityBaseSchema.extend({
  customer: CustomerSchema,
  project: ProjectSchema,
  role: RoleSchema,
  level: SenioritySchema,
}).refine(({ salaryMinimum, salaryMaximum }) => salaryMinimum < salaryMaximum);

export const CreateOpportunityResponseSchema = OpportunityBaseSchema.extend({
  customerId: z.string().uuid(),
  projectId: z.string().uuid(),
  roleId: z.string().uuid(),
  levelId: z.string().uuid(),
  user: UserSchema,
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  deletedAt: z.string().datetime().nullable(),
}).refine(({ salaryMinimum, salaryMaximum }) => salaryMinimum < salaryMaximum);

export const OpportunitiesSchema = z.object({
  items: z.array(OpportunitySchema),
  pageCount: z.number().min(1),
  totalCount: z.number().min(0),
});

export const CreateOpportunitySchema = z
  .object({
    openDate: z.string().datetime(),
    customerId: z.string().uuid(),
    projectId: z.string().uuid(),
    roleId: z.string().uuid(),
    levelId: z.string().uuid(),
    numOfRequestedPositions: z.number().min(1),
    description: z.string(),
    technologyIds: z.array(z.string()),
    salaryMinimum: z.number().min(1),
    salaryMaximum: z.number().min(1),
    location: z.string(),
  })
  .refine(
    ({ salaryMinimum, salaryMaximum }) =>
      salaryMinimum > 0 && salaryMinimum < salaryMaximum,
  );

export type OpportunityType = z.infer<typeof OpportunitySchema>;
