import api from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBook: build.query({
      query: (term) => `book?searchTerm=${term}`,
      providesTags: ["addBook"],
    }),
    getBookById: build.query({
      query: (id) => `book/${id}`,
      providesTags: ["addBook"],
    }),
    addBook: build.mutation({
      query: (data) => ({
        url: "book/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addBook"],
    }),
    addReview: build.mutation({
      query: ({ id, data }) => ({
        url: `book/${id}/review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addBook"],
    }),
  }),
});

export const {
  useGetBookQuery,
  useAddBookMutation,
  useGetBookByIdQuery,
  useAddReviewMutation,
} = bookApi;
