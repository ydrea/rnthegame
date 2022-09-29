import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

// prettier-ignore
export const pointSlice = createSlice({
  name: "points",
  initialState,
  reducers: {
    incrementPoint: (state) => {state.count += 1},
  },
});

export const { incrementPoint } = pointSlice.actions;
export const selectPoint = (state) => state.point.count;
export default pointSlice.reducer;
