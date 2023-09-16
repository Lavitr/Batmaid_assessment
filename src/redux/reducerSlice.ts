import { createSlice } from "@reduxjs/toolkit";

export interface SwitchState {
  isPrevJobs: boolean;
}

const initialState: SwitchState = {
  isPrevJobs: false,
};

export const switchSlice = createSlice({
  name: "switch",
  initialState,
  reducers: {
    setPrevJobs: (state) => {
      state.isPrevJobs = true;
    },
    setNextJobs: (state) => {
      state.isPrevJobs = false;
    },
  },
});

export const { setPrevJobs, setNextJobs } = switchSlice.actions;

export const switchReducer = switchSlice.reducer;
