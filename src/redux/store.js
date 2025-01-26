import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "./fetures/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReduser,
  },
});
