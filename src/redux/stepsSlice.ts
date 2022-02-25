import { createSlice, current } from "@reduxjs/toolkit";
import { IGenre, ISubgenre } from "../_shared/types";

interface StepsState {
  currentStep: number;
  genre: IGenre;
  subgenre: ISubgenre;
  addNewSubgenre: boolean;
}

const initialState: StepsState = {
  currentStep: 0,
  genre: {} as IGenre,
  subgenre: {} as ISubgenre,
  addNewSubgenre: false,
};

export const stepSlice = createSlice({
  name: "stepSlice",
  initialState,
  reducers: {
    addGenre: (state, action) => {
      state.genre = action.payload;
      // console.log(current(state).genre);
    },

    addSubgenre: (state, action) => {
      state.subgenre = action.payload;
      console.log(current(state).subgenre);
    },

    reset: (state) => {
      state.genre = {} as IGenre;
      state.subgenre = {} as ISubgenre;
    },

    addNewSubgenre: (state, action) => {
      if (action.payload === "addNewSubgenre") {
        console.log("true");

        state.addNewSubgenre = true;
      } else {
        console.log("false");

        state.addNewSubgenre = false;
      }
    },
  },
});

export const { addGenre, addSubgenre, addNewSubgenre, reset } =
  stepSlice.actions;
export default stepSlice.reducer;
