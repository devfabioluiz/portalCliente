import { z } from 'zod';

import { UserSchema } from 'src/api/shared/User.types';
import { SuggestionSchema } from 'src/api/suggestions/suggestions.schema';

const IdNameSchema = z.object({ id: z.string().uuid(), name: z.string() });

export const CreateOpportunityFormSchema = z.object({
  customer: IdNameSchema,
  project: IdNameSchema,
  role: IdNameSchema,
  level: IdNameSchema,
  numOfRequestedPositions: z.preprocess((input) => {
    const processed = z
      .string()
      .regex(/^\d+$/)
      .transform(Number)
      .safeParse(input);
    return processed.success ? processed.data : input;
  }, z.number().min(1)),
  description: z.string().min(1),
  technologies: z.array(IdNameSchema),
  salary: z.array(z.number()).length(2),
  location: z.string().min(1),
  suggestions: SuggestionSchema,
  user: UserSchema,
});

export type CreateOpportunityFormType = z.infer<
  typeof CreateOpportunityFormSchema
>;

// export type EditOpportunityFormType = z.infer<
//   typeof CreateOpportunityFormSchema
// >;
