import { createSlice } from "@reduxjs/toolkit";

const points = new Map();
points.set("Kumica");

const initialState = {
  count: 0,
  points,
};

// prettier-ignore
export const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    incrementPoint: (state) => {state.count += 1},
   addToPoints: (state, action) => {points.set(action.payload)}
 },
});

export const { incrementPoint, addToPoints } = pointSlice.actions;
export const selectPoint = (state) => state.point.count;
export const selectPoints = (state) => state.point.points;

export default pointSlice.reducer;
