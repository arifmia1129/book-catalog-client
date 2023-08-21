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

export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  imageUrl: string;
  publicDate: string;
}
