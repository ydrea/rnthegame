import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boo: false,
};

// prettier-ignore
export const boolSlice = createSlice({
  name: "boolean",
  initialState,
  reducers: {
    itsTrue: (state)=>{state.boo=true},
    itsFalse: (state)=>{state.boo=false},
  },
});
//actions
export const { itsTrue, itsFalse } = boolSlice.actions;
//selectors
export const selectToggle = (state) => state.boolean.boo;
//reducer
export default boolSlice.reducer;
