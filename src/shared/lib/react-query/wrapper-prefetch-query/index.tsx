import { FetchQueryOptions } from "@tanstack/react-query";

import EmptyContent from "@/shared/ui/empty-content-ui";
import { WrapperHydrationUI } from "../wrapper-hydration-ui";
import { prefetchQuery } from "../prefetch-query";

export const WrapperPrefetchQuery = async <
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends readonly unknown[],
>({
  children,
  queryKey,
  queryFn,
}: FetchQueryOptions<TQueryFnData, TError, TData, TQueryKey> & {
  children: React.ReactNode;
}) => {
  const { prefetch, newQueryClient } = prefetchQuery({
    queryKey,
    queryFn,
  });

  const error = await prefetch();

  if (error?.isError) {
    return <EmptyContent text="Ошибка при запросе данных" hasReloadButton />;
  }

  return (
    <WrapperHydrationUI newQueryClient={newQueryClient}>
      {children}
    </WrapperHydrationUI>
  );
};
