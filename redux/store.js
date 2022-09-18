import { configureStore } from "@reduxjs/toolkit";
import boolReducer from "./boolSlice";
import counterReducer from "./counterSlice";
import dataReducer from "./dataSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dataJSON: dataReducer,
    boolean: boolReducer,
  },
});
