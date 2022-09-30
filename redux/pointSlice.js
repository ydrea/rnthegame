import { createSlice } from "@reduxjs/toolkit";
//
const initialState = {
  points: [],
  check: false,
  search: "",
};
// prettier-ignore
export const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    searchAndCompare: (state, action)=>{

    },
   addToPoints: (state, action) => {
      state.points.push(action.payload)},

 },
});

export const { addToPoints } = pointSlice.actions;
export const selectPoints = (state) => state.point.points;
export const selectCheck = (state) => state.point.check;

export default pointSlice.reducer;
