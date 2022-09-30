import { configureStore } from "@reduxjs/toolkit";
import dropReducer from "./dropSlice";
import counterReducer from "./counterSlice";
import dataReducer from "./dataSlice";
import pointReducer from "./pointSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dataJSON: dataReducer,
    drop: dropReducer,
    point: pointReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
