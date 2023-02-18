export type FetchingData<DataResponse> = {
  loading: boolean;
  data: DataResponse;
  error: string;
};
