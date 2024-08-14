import { z } from 'zod';

import { ProjectSchema, RoleSchema } from 'src/api';
import { ConsultantSchema } from 'src/api/consultants';
import { UserSchema } from 'src/api/shared/User.types';

export enum HiringStatus {
  WAITING = 'WAITING',
  ROUND_1 = 'ROUND_1',
  ROUND_2 = 'ROUND_2',
  GO = 'GO',
  NO_GO = 'NO_GO',
}

const CandidateOpportunitySchema = z.object({
  customer: z.object({
    id: z.string().uuid(),
    name: z.string().min(2),
    accountOwners: z.array(UserSchema),
  }),
  id: z.string().uuid(),
  description: z.string(),
  project: ProjectSchema,
  role: RoleSchema,
  identifier: z.string(),
  openDate: z.string().datetime(),
  numOfRequestedPositions: z.number().min(0),
  salaryMinimum: z.number().min(0),
  salaryMaximum: z.number().min(0),
  location: z.string(),
});

const CandidateBaseSchema = z.object({
  id: z.string().uuid(),
  consultant: ConsultantSchema,
  createdAt: z.string().datetime(),
  cvFileUrl: z.string().url(),
  testFileUrl: z.string().url().nullable(),
  status: z.nativeEnum(HiringStatus),
  opportunity: CandidateOpportunitySchema,
  salary: z.number(),
});

const UpdateCandidateSchema = z.object({
  candidateId: z.string().uuid(),
  status: z.nativeEnum(HiringStatus),
});

const CandidatesSchema = z.object({
  items: z.array(CandidateBaseSchema),
  pageCount: z.number().min(0),
  totalCount: z.number().min(0),
});

export { CandidateBaseSchema, CandidatesSchema, UpdateCandidateSchema };

export type Candidate = z.infer<typeof CandidateBaseSchema>;
export type CandidateOpportunity = z.infer<typeof CandidateOpportunitySchema>;
export type Consultant = z.infer<typeof ConsultantSchema>;
