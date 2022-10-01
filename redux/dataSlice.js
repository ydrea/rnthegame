import { createSlice } from "@reduxjs/toolkit";
import importedData from "../data/db.json";

export const dataSlice = createSlice({
  name: "loc",
  initialState: { importedData, search: [], checkR: false, id: null },
  reducers: {
    addToPoints: (state, action) => {
      const novi = {
        points: action.payload.points,
        id: action.payload.id,
        checkR: true,
      };
      state.points.push(novi);
    },
  },
});

export const { addToPoints } = dataSlice.actions;
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
