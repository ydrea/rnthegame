import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
//
// const points = new Set();
// points.add("Kumica");

const initialState = {
  // count: 0,
  points: [],
};

// prettier-ignore
export const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    // incrementPoint: (state) => {state.count += 1},
   addToPoints: (state, action) => {
        // let newPoints = [...points] 
        // if !include bla...
      state.points.push(action.payload)},
 },
});

export const { addToPoints } = pointSlice.actions;
// export const selectPoint = (state) => state.point.count;
export const selectPoints = (state) => state.point.points;

export default pointSlice.reducer;
