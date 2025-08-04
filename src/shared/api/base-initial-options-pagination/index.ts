// import {
//   InfiniteData,
//   QueriesOptions,
//   QueryObserverOptions,
//   UnusedSkipTokenInfiniteOptions,
//   UseInfiniteQueryOptions,
// } from '@tanstack/react-query';

// import {
//   ILinksPaginationDto,
//   IMetaPaginationInfoDto,
//   IMultipleElementsDto,
//   IResponse,
// } from '../types';

// export const baseInitialOptionsPagination = <Data,
//   T extends { meta: IMetaPaginationInfoDto, data: Data } & {
//     [key: string]: unknown;
//   },
// >(
//   initialPageParam?: number,
// ): Omit<
//   UseInfiniteQueryOptions<IResponse<T>>,
//   'queryKey' | 'queryFn' | 'select'
// > & {
//   select: (data: InfiniteData<IResponse<T>>) => IResponse<T>
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

//     return {
//       data: dataResult,

//       meta: data?.pages?.[0]?.response?.meta,

//     };
//   },
// });
