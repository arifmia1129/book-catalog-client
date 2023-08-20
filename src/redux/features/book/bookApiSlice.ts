import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBook: build.query({
      query: (term) => `book?searchTerm=${term}`,
    }),
  }),
});

export const { useGetBookQuery } = bookApi;
