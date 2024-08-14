import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import {
  type ApiError,
  type RolesParamsSchema,
  RolesSchema,
  apiClient,
} from 'src/api';
import { useNotification } from 'src/hooks';

export type RolesType = z.infer<typeof RolesSchema>;
export type RolesParamsType = z.infer<typeof RolesParamsSchema>;

export const getRoles = async ({
  page,
  perPage,
  search,
}: RolesParamsType): Promise<RolesType['items']> => {
  const params = { page, perPage, search };
  const roles = await apiClient.get<RolesType>(`/project-role`, { params });
  return RolesSchema.parse(roles.data).items;
};

export const useRoles = ({
  page = 1,
  perPage = 10,
  search = '',
}: RolesParamsType = {}): DefinedUseQueryResult<
  RolesType['items'],
  Error | AxiosError
> => {
  const { addNotification } = useNotification();
  return useQuery(
    ['roles', { page, perPage, search }],
    async () => await getRoles({ page, perPage, search }),
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
