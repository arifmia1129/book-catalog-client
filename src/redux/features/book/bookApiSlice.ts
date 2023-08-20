import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBook: build.query({
      query: () => "book",
    }),
  }),
});

export const { useGetBookQuery } = bookApi;
