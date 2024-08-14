import {
  type UseMutationResult,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import { apiClient } from 'src/api/client';
import { type ApiError } from 'src/api/common';
import {
  type CreateInterviewSchema,
  InterviewSchema,
} from 'src/api/interview/interview.schema';
import { useNotification } from 'src/hooks';

type CreateInterviewSchemaType = z.infer<typeof CreateInterviewSchema>;
type Interview = z.infer<typeof InterviewSchema>;

const createInterview = async (
  data: CreateInterviewSchemaType,
): Promise<Interview> => {
  const res = await apiClient.post('/interview', data);
  return InterviewSchema.parse(res.data);
};

const useCreateInterview = (): UseMutationResult<
  Interview,
  unknown,
  CreateInterviewSchemaType
> => {
  const { addNotification } = useNotification();
  const queryClient = useQueryClient();

  return useMutation(createInterview, {
    onSuccess: () => {
      addNotification({
        type: 'success',
        message: 'Interview successfully scheduled',
      });
      void queryClient.invalidateQueries({ queryKey: ['candidates'] });
    },
    onError: (error: Error | AxiosError) => {
      if (axios.isAxiosError<ApiError, ApiError>(error))
        addNotification({
          type: 'error',
          message: error.response?.data?.message ?? 'Something went wrong',
        });
    },
  });
};

export { useCreateInterview };
