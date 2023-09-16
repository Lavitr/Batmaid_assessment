import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortStrings, isNextDate } from "../utils/helpers";
import { Data, Job } from "../types";

export interface SwitchState {
  dataNext: Job[];
  dataPrev: Job[];
  loading: boolean;
  error?: string;
}

const initialState: SwitchState = {
  dataNext: [],
  dataPrev: [],
  loading: false,
  error: "",
};

export const getData = createAsyncThunk(
  "data/fetchData",
  async (): Promise<Data> => {
    const data = await fetch("/data", {
      method: "GET",
    });
    return await data.json();
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state: { loading: boolean }) => {
      state.loading = true;
    });
    builder.addCase(getData.fulfilled, (state, action: PayloadAction<Data>) => {
      state.loading = false;
      state.dataNext = action.payload.jobs
        .filter((job: Job) => isNextDate(job.executionDate))
        .sort((a: Job, b: Job) => sortStrings(a, b));
      state.dataPrev = action.payload.jobs
        .filter((job: Job) => !isNextDate(job.executionDate))
        .sort((a: Job, b: Job) => sortStrings(a, b));
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

const dataReducer = dataSlice.reducer;
export default dataReducer;
