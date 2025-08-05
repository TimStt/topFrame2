import {
  FetchQueryOptions,
  QueryFunction,
  QueryKey,
} from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

import { queryClient, rqClient } from '@/shared/api/api-client';
import { paths } from '@/shared/api/schema';
import { IResponse } from '@/shared/api/types';
import EmptyContent from '@/shared/ui/empty-content-ui';

export const prefetchQuery = <
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends readonly unknown[],
>({
  queryKey,
  queryFn,
}: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey>) => {
  const newQueryClient = new QueryClient();
  const prefetch = async () => {
    try {
      await newQueryClient.prefetchQuery({
        queryKey,
        queryFn,
      });
    } catch (error) {
      return error as IResponse;
    }
  };

  return {
    prefetch,
    newQueryClient,
  };
};
