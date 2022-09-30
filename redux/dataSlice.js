import { createSlice } from "@reduxjs/toolkit";
import importedData from "../data/db.json";

export const dataSlice = createSlice({
  name: "loc",
  initialState: { importedData, points: [], check: false, search: "" },
  reducers: {
    checkIt: (state) => {
      state.check = !state.check;
    },
    addToPoints: (state, action) => {
      state.points.push(action.payload);
    },
  },
});

export const { checkIt, addToPoints } = dataSlice.actions;
export const selectEm = (state) => state;
export const selectSculptures = (state) => state.data.importedData.sculptures;
export const selectPoints = (state) => state.data.points;
export const selectCheck = (state) => state.data.check;

// export const selectMarkers = (state) =>
//   state.dataJSON.sculptures.map((m) => m.coordinate.latitude);
// console.log("um", m);
// export const selectPlanets = (state) => state.dataJSON.planets;
//

// export const selectSculptureById = (state, id) =>
//   state.dataJSON.sculptures.find((i) => i.id === id);

// export const selectPlanetByPid = (state, pid) =>
//   state.dataJSON.planets.find((ii) => ii.pid === pid);

//
export default dataSlice.reducer;
