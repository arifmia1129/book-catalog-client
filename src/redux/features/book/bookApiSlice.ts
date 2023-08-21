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
    deleteBook: build.mutation({
      query: (id) => ({
        url: `book/${id}`,
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token") as string,
        },
      }),
      invalidatesTags: ["addBook"],
    }),
    updateBook: build.mutation({
      query: ({ id, data }) => ({
        url: `book/${id}`,
        method: "PATCH",
        body: data,
        headers: {
          Authorization: localStorage.getItem("token") as string,
        },
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
    getReview: build.query({
      query: (id) => `book/${id}/review`,
      providesTags: ["addBook"],
    }),
  }),
});

export const {
  useGetBookQuery,
  useAddBookMutation,
  useGetBookByIdQuery,
  useAddReviewMutation,
  useGetReviewQuery,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = bookApi;
