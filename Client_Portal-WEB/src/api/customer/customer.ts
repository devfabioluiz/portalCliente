import { type DefinedUseQueryResult, useQuery } from '@tanstack/react-query';
import axios, { type AxiosError } from 'axios';
import { type z } from 'zod';

import { type ApiError, type PaginationType, apiClient } from 'src/api';
import { CustomersSchema } from 'src/api/customer/customer.schema';
import { useNotification } from 'src/hooks';

type CustomersType = z.infer<typeof CustomersSchema>;

export const getCustomers = async ({
  page,
  perPage,
}: Required<PaginationType>): Promise<CustomersType['items']> => {
  const params = {
    page,
    perPage,
  };
  const customers = await apiClient.get<CustomersType>(`/customer`, { params });
  return CustomersSchema.parse(customers.data).items;
};

export const useCustomers = ({
  page = 1,
  perPage = 10,
  enabled = true,
}: PaginationType & { enabled?: boolean } = {}): DefinedUseQueryResult<
  CustomersType['items'],
  Error | AxiosError
> => {
  const { addNotification } = useNotification();
  return useQuery(
    ['customers', { page, perPage }],
    async () => await getCustomers({ page, perPage }),
    {
      enabled,
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
