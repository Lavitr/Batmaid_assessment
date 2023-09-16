import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import { switchReducer } from "./reducerSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    switch: switchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<any>