import {
  type DefinedUseQueryResult,
  type UseInfiniteQueryResult,
  useInfiniteQuery,
  useQuery,
} from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import {
  type ApiError,
  ConsultantsSchema,
  type IQueryParams,
  type PaginatedApiResponse,
  type PaginationType,
  apiClient,
} from 'src/api';
import { useNotification } from 'src/hooks';
import { ITEMS_PER_PAGE } from 'src/pages/Consultants/Table/Table';

export type Consultants = z.infer<typeof ConsultantsSchema>;

const getConsultants = async ({
  page = 1,
  perPage = 10,
  search = '',
}: IQueryParams): Promise<Consultants> => {
  const res = await apiClient.get<PaginatedApiResponse<Consultants>>(
    '/consultant',
    { params: { page, perPage, search } },
  );

  return ConsultantsSchema.parse(res.data);
};

const useGetConsultantsInfinite = ({
  search,
}: {
  search: string;
}): UseInfiniteQueryResult<Consultants> =>
  useInfiniteQuery(
    ['consultants', { search }],
    async ({ pageParam = 1, queryKey }) =>
      await getConsultants({
        page: pageParam as number,
        search: queryKey[1].search as string,
      }),
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.pageCount === allPages.length
          ? undefined
          : allPages.length + 1,
    },
  );

const useGetConsultantsPaginated = ({
  page = 1,
  perPage = ITEMS_PER_PAGE,
}: PaginationType): DefinedUseQueryResult<Consultants, Error | AxiosError> => {
  const { addNotification } = useNotification();
  return useQuery(
    ['consultants', { page, perPage }],
    // TODO: set getOpportunities to 0-based indexing for "page" rather than 1-based
    async () => await getConsultants({ page: page + 1, perPage }),
    {
      initialData: { items: [], totalCount: 0, pageCount: 0 },
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

export {
  useGetConsultantsInfinite,
  getConsultants,
  useGetConsultantsPaginated,
};
