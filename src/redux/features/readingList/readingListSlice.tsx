import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IBook } from "../../../types/globalTypes";

type ReadingStatus = "Not Start Reading" | "Reading" | "Finished";

interface ReadingListBook extends IBook {
  status: ReadingStatus;
}

interface IReadingList {
  books: ReadingListBook[];
}

const initialState: IReadingList = {
  books: [],
};

const readingListSlice = createSlice({
  name: "readingList",
  initialState,
  reducers: {
    addToReadingList: (state, action: PayloadAction<IBook>) => {
      const isExist = state.books.find(
        (book) => book._id === action.payload._id
      );
      if (!isExist) {
        state.books.push({ ...action.payload, status: "Not Start Reading" });
      }
    },
    updateStatusReadingList: (
      state,
      action: PayloadAction<{ id: string; status: string }>
    ) => {
      const isExist = state.books.find(
        (book) => book._id === action.payload.id
      );
      if (isExist && "status" in isExist) {
        isExist.status = action.payload.status as ReadingStatus;
      }
    },
    removeFromReadingList: (state, action: PayloadAction<IBook>) => {
      state.books = state.books.filter(
        (book) => book._id !== action.payload._id
      );
    },
  },
});

export const {
  addToReadingList,
  removeFromReadingList,
  updateStatusReadingList,
} = readingListSlice.actions;

export default readingListSlice.reducer;
