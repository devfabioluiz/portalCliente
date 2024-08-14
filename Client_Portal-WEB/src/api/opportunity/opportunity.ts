import {
  type DefinedUseQueryResult,
  type UseMutationResult,
  type UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import { type ApiError, type IQueryParams, apiClient } from 'src/api';
import {
  CreateOpportunityResponseSchema,
  type CreateOpportunitySchema,
  OpportunitiesSchema,
  type OpportunityType,
} from 'src/api/opportunity/opportunity.schema';
import {
  type ConvertedSortDirection,
  mapFiltersToQueryParams,
} from 'src/helpers/table.helpers';
import { useNotification } from 'src/hooks';
import { type SortingAndFilteringTableFields } from 'src/pages/Opportunities/Table/Grid/Grid.types';
import { ITEMS_PER_PAGE } from 'src/pages/Opportunities/Table/Table';
import { type IFilterAtom } from 'src/recoil/opportunity';

type CreatedOpportunityType = z.infer<typeof CreateOpportunityResponseSchema>;
export type OpportunitiesType = z.infer<typeof OpportunitiesSchema>;
export type CreateOpportunityType = z.infer<typeof CreateOpportunitySchema>;

export interface PinOpportunity {
  id: string;
  isPinned: boolean | undefined;
}

export enum MinMaxFee {
  MIN_FEE = 'minFee',
  MAX_FEE = 'maxFee',
}

export type ApiSortingParams =
  | Omit<SortingAndFilteringTableFields, 'FEE'>
  | MinMaxFee;

export interface MappedFilters
  extends Omit<IFilterAtom, 'sortField' | 'sortDirection'> {
  sortField: ApiSortingParams;
  sortDirection: ConvertedSortDirection;
}

export const createOpportunity = async (
  data: CreateOpportunityType,
): Promise<CreatedOpportunityType> => {
  const res = await apiClient.post<CreatedOpportunityType>(
    '/opportunity',
    data,
  );
  return CreateOpportunityResponseSchema.parse(res.data);
};

export const useCreateOpportunity = (): UseMutationResult<
  CreatedOpportunityType,
  unknown,
  CreateOpportunityType,
  unknown
> => {
  const { addNotification } = useNotification();
  const queryClient = useQueryClient();

  return useMutation(createOpportunity, {
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['opportunities'] });
      addNotification({
        type: 'success',
        message: 'Opportunity created successfully',
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

export const useEditOpportunity = (
  id: string,
): UseMutationResult<void, unknown, CreateOpportunityType, unknown> => {
  const { addNotification } = useNotification();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      await apiClient.put(`/opportunity/${id}`, data);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['opportunity'] });
      addNotification({
        type: 'success',
        message: 'Opportunity updated successfully',
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

export const getOpportunity = async (id: string): Promise<OpportunityType> => {
  const res = await apiClient.get<OpportunityType>(`/opportunity/${id}`);
  return res.data;
};

export const useGetOpportunity = (
  id: string,
): UseQueryResult<OpportunityType> => {
  return useQuery(['opportunity', id], async () => await getOpportunity(id));
};

export const getOpportunities = async (
  queryParams: IQueryParams,
  filters: IFilterAtom,
): Promise<OpportunitiesType> => {
  const params = {
    ...queryParams,
    ...mapFiltersToQueryParams(filters),
  };
  const opportunities = await apiClient.get<OpportunitiesType>(`/opportunity`, {
    params,
  });
  return OpportunitiesSchema.parse(opportunities.data);
};

export const useOpportunities = (
  { page = 1, perPage = ITEMS_PER_PAGE, search = '' }: IQueryParams,
  filters: IFilterAtom,
): DefinedUseQueryResult<OpportunitiesType, Error | AxiosError> => {
  const { addNotification } = useNotification();
  return useQuery(
    ['opportunities', { page, perPage }, filters],
    // TODO: set getOpportunities to 0-based indexing for "page" rather than 1-based
    async () =>
      await getOpportunities({ page: page + 1, perPage, search }, filters),
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

export const usePinOpportunity = (): UseMutationResult<
  void,
  unknown,
  PinOpportunity,
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, isPinned }: PinOpportunity) => {
      if (isPinned ?? false) {
        await apiClient.delete(`/pin/${id}`);
      } else {
        await apiClient.put(`/pin/${id}`);
      }
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['opportunities'] });
    },
  });
};

export const useDeleteOpportunity = (): UseMutationResult<
  void,
  unknown,
  { id: string },
  unknown
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id }: { id: string }) => {
      await apiClient.delete(`/opportunity/${id}`);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['opportunities'] });
    },
  });
};
