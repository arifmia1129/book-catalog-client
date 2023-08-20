import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-catalog-server-nine.vercel.app/api/v1/",
  }),
  endpoints: () => ({}),
  tagTypes: ["addBook"],
});

export default api;
