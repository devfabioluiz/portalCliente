import {
  type UseInfiniteQueryResult,
  type UseMutationResult,
  useInfiniteQuery,
  useMutation,
} from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import { apiClient } from 'src/api/client';
import {
  type ApiError,
  type IQueryParams,
  type PaginatedApiResponse,
} from 'src/api/common';
import {
  type CreateSuggestionSchema,
  SuggestionResponseSchema,
  type SuggestionSchema,
} from 'src/api/suggestions/suggestions.schema';
import { useNotification } from 'src/hooks';

export type CreateSuggestionSchemaType = z.infer<typeof CreateSuggestionSchema>;
export type Suggestion = z.infer<typeof SuggestionSchema>;
export type SuggestionResponse = z.infer<typeof SuggestionResponseSchema>;

interface ISuggestionQueryParams extends IQueryParams {
  opportunityId: string;
}

const getSuggestion = async ({
  page = 1,
  perPage = 10,
  search = '',
  opportunityId,
}: ISuggestionQueryParams): Promise<SuggestionResponse> => {
  const params = { page, perPage, search, opportunityIds: [opportunityId] };
  const res = await apiClient.get<PaginatedApiResponse<SuggestionResponse>>(
    `/suggestion`,
    { params },
  );

  return SuggestionResponseSchema.parse(res.data);
};

const useGetSuggestionInfinite = ({
  search,
  opportunityId,
}: {
  search: string;
  opportunityId: string;
}): UseInfiniteQueryResult<SuggestionResponse> =>
  useInfiniteQuery(
    ['suggestions', { search, opportunityId }],
    async ({ pageParam = 1, queryKey }) => {
      return await getSuggestion({
        page: pageParam as number,
        search: queryKey[1].search as string,
        opportunityId,
      });
    },
    {
      getNextPageParam: (lastPage, allPages) =>
        lastPage.pageCount === allPages.length
          ? undefined
          : allPages.length + 1,
    },
  );

const createSuggestion = async (
  data: CreateSuggestionSchemaType,
): Promise<Suggestion> => {
  const res = await apiClient.post<Suggestion>('/suggestion', data);
  return res.data;
};

const useCreateSuggestion = (): UseMutationResult<
  Suggestion,
  unknown,
  CreateSuggestionSchemaType
> => {
  const { addNotification } = useNotification();

  return useMutation(createSuggestion, {
    onSuccess: () => {
      addNotification({
        type: 'success',
        message: 'Consultants successfully suggested',
      });
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

export {
  getSuggestion,
  useGetSuggestionInfinite,
  createSuggestion,
  useCreateSuggestion,
};
