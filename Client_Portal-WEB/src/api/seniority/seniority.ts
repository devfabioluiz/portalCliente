import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import {
  type ApiError,
  type PaginationType,
  SenioritiesSchema,
  apiClient,
} from 'src/api';
import { useNotification } from 'src/hooks';

type LevelsType = z.infer<typeof SenioritiesSchema>;

export const getLevels = async ({
  page,
  perPage,
}: Required<PaginationType>): Promise<LevelsType['items']> => {
  const params = { page, perPage };
  const levels = await apiClient.get<LevelsType>(`/seniority`, { params });
  return SenioritiesSchema.parse(levels.data).items;
};

export const useLevels = ({
  page = 1,
  perPage = 10,
}: PaginationType = {}): DefinedUseQueryResult<
  LevelsType['items'],
  Error | AxiosError
> => {
  const { addNotification } = useNotification();
  return useQuery(
    ['seniorities', { page, perPage }],
    async () => await getLevels({ page, perPage }),
    {
      initialData: [],
      onError: (error: Error | AxiosError) => {
        if (axios.isAxiosError<ApiError, ApiError>(error))
          addNotification({
            type: 'error',
            message: error.response?.data?.message ?? 'Something went wrong',
          });
      },
    },
  );
};
