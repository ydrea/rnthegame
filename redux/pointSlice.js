import { createSlice } from "@reduxjs/toolkit";
import produce from "immer";
//
const initialState = {
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
      state.points.push(action.payload)
    //   const unique = (points)=> {
    //     return Array.from(new Set(points));
    //   }
    },
 },
});

export const { addToPoints } = pointSlice.actions;
// export const selectPoint = (state) => state.point.count;
export const selectPoints = (state) => state.point.points;

export default pointSlice.reducer;
