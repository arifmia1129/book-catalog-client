import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBook: build.query({
      query: (term) => `book?searchTerm=${term}`,
    }),
    addBook: build.mutation({
      query: (data) => ({
        url: "book/create",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBookQuery, useAddBookMutation } = bookApi;
