import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "./fetures/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReduser,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type appDispatch = typeof store.dispatch
