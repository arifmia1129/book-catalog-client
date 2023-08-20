export interface ApiErrorResponse {
  status: number;
  data: {
    statusCode: number;
    success: boolean;
    message: string;
    errorMessages: Array<{ path: string; message: string }>;
    stack: null | string;
  };
}
