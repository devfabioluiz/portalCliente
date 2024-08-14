import { z } from 'zod';

enum InterviewStatus {
  PENDING_CONFIRMATION = 'PENDING_CONFIRMATION',
  CONFIRMED = 'CONFIRMED',
}

const dateSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
});

const CreateInterviewSchema = z.object({
  candidateId: z.string(),
  date: dateSchema,
  proposedDates: z.array(dateSchema).optional(), // TODO: when the propose dates feature is done the optional attribute should be removed
  note: z.string(),
});

const InterviewSchema = z.object({
  id: z.string().uuid(),
  dateId: z.string().uuid(),
  proposedDates: z.array(
    dateSchema.extend({
      id: z.string().uuid(),
      acceptedById: z.string().uuid(),
    }),
  ),
  status: z.nativeEnum(InterviewStatus),
});

export { CreateInterviewSchema, InterviewSchema };
