import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/listProperty/ListSlice";

export const store = configureStore({
  reducer: {
    property: listReducer,
  },
});
