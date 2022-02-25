import { createSlice, PayloadAction, current } from "@reduxjs/toolkit";
import { Books, Book } from "../_shared/types";
// import type { RootState } from "../../app/store";

// Define the initial state using that type
const initialState: Books = {
  books: [],
};

export const bookSlice = createSlice({
  name: "bookSlice",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books = [...state.books, action.payload];
      console.log(current(state).books, action.payload);
    },
    removeBook: (state, action: PayloadAction<Books>) => {
      state = action.payload;
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => undefined;

export default bookSlice.reducer;
