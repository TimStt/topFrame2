import { MutationOptions } from '@tanstack/react-query';

import { paths } from './schema';

export interface IMetaPaginationInfoDto {
  current_page: number;
  from?: number;
  last_page: number;
  per_page: number;
  to?: number;
  path: string;
  total: number;
  links: IMetaLinksPaginationInfoDto[];
}
export interface ILinksPaginationDto {
  first: string;
  last: string;
  next?: string;
  prev?: string;
}

export interface IMultipleElementsDto<Data> {
  data: Data[];
  links: ILinksPaginationDto;
  meta: IMetaPaginationInfoDto;
}

export type TRating = 1 | 2 | 3 | 4 | 5;

export interface IMetaLinksPaginationInfoDto {
  active: boolean;
  label: string;
  url: string;
}

export type IApiBoolean = 0 | 1;

export interface IErrorCatch {
  data: {
    status: number;
  };
  message: string;
}

export type TMutation<Arg = void, Response = undefined> = MutationOptions<
  Response,
  IResponse,
  Arg
>;

export interface IDataResponse<T> {
  data: T;
}

export type IResponseWithData<T = undefined> = T extends undefined
  ? IResponse
  : IResponse<IDataResponse<T>>;

export type IResponseWithMultipleElements<T = undefined> = T extends undefined
  ? IResponse
  : IResponse<IMultipleElementsDto<T>>;

export interface IResponse<T = undefined> {
  response: T;
  status?: number;
  errorMessage?: string;
  isError: boolean;
}

export interface IImage {
  id: number;
  original: string;
  small?: string;
}
