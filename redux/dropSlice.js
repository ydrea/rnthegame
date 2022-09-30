import { createSlice } from "@reduxjs/toolkit";

const initialState = { selected: false };
// prettier-ignore
export const dropSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {    
    toggle: (state) => {
    state.selected = !state.selected;
    }
  },
});
//actions
export const { toggle } = dropSlice.actions;
//selectors
export const selectToggle = (state) => state.drop.selected;
//reducer
export default dropSlice.reducer;
