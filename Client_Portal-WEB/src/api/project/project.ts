import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import {
  type ApiError,
  type PaginationType,
  ProjectsSchema,
  apiClient,
} from 'src/api';
import { useNotification } from 'src/hooks';

type ProjectsType = z.infer<typeof ProjectsSchema>;

export const getProjects = async ({
  page,
  perPage,
}: Required<PaginationType>): Promise<ProjectsType['items']> => {
  const params = { page, perPage };
  const projects = await apiClient.get<ProjectsType>(`/project`, { params });
  return ProjectsSchema.parse(projects.data).items;
};

export const useProjects = ({
  page = 1,
  perPage = 10,
}: PaginationType = {}): DefinedUseQueryResult<
  ProjectsType['items'],
  Error | AxiosError
> => {
  const { addNotification } = useNotification();
  return useQuery(
    ['projects', { page, perPage }],
    async () => await getProjects({ page, perPage }),
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
