import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface IUser {
  name: string | null;
  email: string | null;
  isLoading: boolean;
}

const initialState: IUser = {
  name: null,
  email: null,
  isLoading: true,
};

export const fetchedUserProfile = createAsyncThunk(
  "user/fetchedUserProfile",
  async () => {
    const response = await fetch(
      "https://book-catalog-server-nine.vercel.app/api/v1/user/profile",
      {
        headers: {
          Authorization: localStorage.getItem("token") as string,
        },
      }
    );
    const data = await response.json();

    if (!data.success) {
      localStorage.removeItem("token");
    }

    const { email, name } = data.data;

    return { email, name };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchedUserProfile.pending, (state) => {
        state.isLoading = true;
        state.email = null;
        state.name = null;
      })
      .addCase(fetchedUserProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.email = payload?.email;
        state.name = payload?.name;
      })
      .addCase(fetchedUserProfile.rejected, (state) => {
        state.isLoading = false;
        state.email = null;
        state.name = null;
      });
  },
});

export default userSlice.reducer;
