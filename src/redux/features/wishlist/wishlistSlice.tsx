import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

interface IWishList {
  books: IBook[];
}

const initialState: IWishList = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBook>) => {
      const isExist = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (!isExist) {
        state.books.push(action?.payload);
      }
    },
    removeFromWishlist: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
