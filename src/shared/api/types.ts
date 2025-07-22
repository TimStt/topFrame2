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

export interface IMetaLinksPaginationInfoDto {
  active: boolean;
  label: string;
  url: string;
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
