import { createSlice } from "@reduxjs/toolkit";

export const switchSlice = createSlice({
  name: "switch",
  initialState: {
    isPrevJobs: false,
  },
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

export const switchReducer =  switchSlice.reducer;
