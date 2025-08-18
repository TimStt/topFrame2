// import {
//   InfiniteData,
//   QueriesOptions,
//   QueryObserverOptions,
//   UnusedSkipTokenInfiniteOptions,
//   UseInfiniteQueryOptions,
// } from "@tanstack/react-query";

// export const baseInitialOptionsPagination = <T>(
//   initialPageParam?: number
// ): Omit<
//   UseInfiniteQueryOptions<IResponse<IMultipleElementsDto<T>>>,
//   "queryKey" | "queryFn" | "select"
// > & {
//   select: (data: InfiniteData<IResponse<IMultipleElementsDto<T>>>) => {
//     data: T[];
//     total: number;
//     meta: IMetaPaginationInfoDto;
//     links: ILinksPaginationDto;
//   };
// } => ({
//   initialPageParam: initialPageParam || 1,
//   getNextPageParam: ({ response }) => {
//     const isLastPage =
//       response?.meta?.last_page === response?.meta?.current_page;

//     const nextPage = isLastPage ? undefined : response?.meta?.current_page + 1;

//     return nextPage;
//   },
//   select: (data) => {
//     const dataResult = data?.pages
//       ?.map((results) => results?.response?.data)
//       .flat();

//     const total = data?.pages?.[0]?.response?.meta?.total || 0;

//     return {
//       data: dataResult,
//       total,
//       meta: data?.pages?.[0]?.response?.meta,
//       links: data?.pages?.[0]?.response?.links,
//     };
//   },
// });
