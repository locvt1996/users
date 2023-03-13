export type FetchingData<DataResponse> = {
  loading: boolean;
  loaded: boolean;
  data: DataResponse;
  error: string;
};
