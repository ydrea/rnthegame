import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
  points: 0,
};
// prettier-ignore
export const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
  addOne: (state) => {state.points += 1},

 },
});

export const { addOne } = pointSlice.actions;
export const selectPoints = (state) => state.point.points;

export default pointSlice.reducer;
