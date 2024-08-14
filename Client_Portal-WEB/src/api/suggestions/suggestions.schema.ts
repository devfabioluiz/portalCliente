import { z } from 'zod';

import { UserSchema } from 'src/api/shared/User.types';

export enum SuggestionStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
}

const CreateSuggestionSchema = z.object({
  opportunityId: z.string(),
  suggestions: z.array(
    z.object({
      consultantId: z.string(),
      salary: z.number(),
      cvFileUrl: z.string(),
      testResultFileUrl: z.string().optional(),
    }),
  ),
});

const SuggestionSchema = z.object({
  id: z.string(),
  consultant: z.object({
    id: z.string(),
    name: z.string(),
    seniority: z.object({
      id: z.string(),
      name: z.string(),
    }),
    role: z.object({
      id: z.string(),
      name: z.string(),
    }),
    salary: z.number(),
    cvFileUrl: z.string(),
  }),
  user: UserSchema,
  salary: z.number(),
  cvFileUrl: z.string(),
  testResultFileUrl: z.string(),
});

const GetSuggestion = z.object({
  id: z.string(),
  consultant: z.object({
    id: z.string(),
    name: z.string(),
    businessManager: UserSchema,
    salary: z.number(),
    cvFileUrl: z.string().nullable(),
    role: z
      .object({
        id: z.string(),
        name: z.string(),
      })
      .optional(),
  }),
  status: z.nativeEnum(SuggestionStatus),
  salary: z.number(),
  cvFileUrl: z.string().nullable(),
  testResultFileUrl: z.string().nullable(),
});

const SuggestionResponseSchema = z.object({
  items: z.array(GetSuggestion),
  pageCount: z.number().min(0),
  totalCount: z.number().min(0),
});

export { CreateSuggestionSchema, SuggestionSchema, SuggestionResponseSchema };
