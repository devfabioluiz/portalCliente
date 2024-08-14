import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import {
  type ApiError,
  type TechnologiesParamsSchema,
  TechnologiesSchema,
  apiClient,
} from 'src/api';
import { useNotification } from 'src/hooks';

type TechnologiesType = z.infer<typeof TechnologiesSchema>;
type TechnologiesParamsType = z.infer<typeof TechnologiesParamsSchema>;

export const getTechnologies = async ({
  page,
  perPage,
  filterBy,
  filterValue,
}: TechnologiesParamsType): Promise<TechnologiesType['items']> => {
  const params = { page, perPage, sortField: filterBy, search: filterValue };
  const tech = await apiClient.get<TechnologiesType>(`/technology`, { params });
  return TechnologiesSchema.parse(tech.data).items;
};

export const useTechnologies = ({
  page = 1,
  perPage = 10,
  filterBy = 'name',
  filterValue = '',
}: TechnologiesParamsType = {}): DefinedUseQueryResult<
  TechnologiesType['items'],
  Error | AxiosError
> => {
  const { addNotification } = useNotification();
  return useQuery(
    ['technologies', { page, perPage, filterBy, filterValue }],
    async () => await getTechnologies({ page, perPage, filterBy, filterValue }),
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
