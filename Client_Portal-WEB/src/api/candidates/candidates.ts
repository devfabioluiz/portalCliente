import {
  type DefinedUseQueryResult,
  type UseMutationResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import { type ApiError, type PaginationType, apiClient } from 'src/api';
import {
  CandidatesSchema,
  type HiringStatus,
  type UpdateCandidateSchema,
} from 'src/api/candidates/candidates.schema';
import { useNotification } from 'src/hooks';
import { ITEMS_PER_PAGE } from 'src/pages/Candidates/Table/Table';

export type CandidatesType = z.infer<typeof CandidatesSchema>;
type UpdateCandidate = z.infer<typeof UpdateCandidateSchema>;

export const getCandidates = async (
  pagination: PaginationType,
  status: HiringStatus[],
): Promise<CandidatesType> => {
  const params = {
    ...pagination,
    status,
  };

  const candidates = await apiClient.get<CandidatesType['items']>(
    `/candidate`,
    {
      params,
    },
  );

  return CandidatesSchema.parse(candidates.data);
};

export const useCandidates = (
  // TODO: "page" uses 0-based indexing. See https://v5.mui.com/x/api/data-grid/data-grid/
  { page = 0, perPage = ITEMS_PER_PAGE }: PaginationType,
  status: HiringStatus[],
): DefinedUseQueryResult<CandidatesType, Error | AxiosError> => {
  const { addNotification } = useNotification();
  return useQuery(
    ['candidates', { page, perPage }],
    // TODO: set getCandidates to 0-based indexing for "page" rather than 1-based
    async () => await getCandidates({ page: page + 1, perPage }, status),
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

export const updateCandidate = async (
  data: UpdateCandidate,
): Promise<CandidatesType> => {
  const { candidateId, ...rest } = data;
  const candidates = await apiClient.put<CandidatesType>(
    `/candidate/${candidateId}`,
    rest,
  );
  return candidates.data;
};

export const useUpdateCandidate = (): UseMutationResult<
  CandidatesType,
  unknown,
  UpdateCandidate
> => {
  const queryClient = useQueryClient();
  const { addNotification } = useNotification();

  return useMutation(updateCandidate, {
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['candidates'] });
      addNotification({
        type: 'success',
        message: 'Candidate updated successfully',
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
