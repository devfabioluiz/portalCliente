export interface ApiError {
  statusCode: number;
  message: string;
  error: string;
}

export interface PaginatedApiResponse<T> {
  totalCount: number;
  pageCount: number;
  items: T[];
}

export interface IQueryParams {
  page?: number;
  perPage?: number;
  search?: string;
}
