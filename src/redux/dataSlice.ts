import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { sortStrings, isNextDate } from "../utils/helpers";
import { Data, Job } from "../types";

export enum Status {
  idle = "idle",
  loading = "loading",
  complete = "complete",
}

export interface DataState {
  dataNext: Job[];
  dataPrev: Job[];
  status: "idle" | "loading" | "complete";
  error?: string;
}

const initialState: DataState = {
  dataNext: [],
  dataPrev: [],
  status: "idle",
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
    builder.addCase(getData.pending, (state) => {
      state.status = Status.loading;
    });
    builder.addCase(getData.fulfilled, (state, action: PayloadAction<Data>) => {
      state.status = Status.complete;
      if (action.payload.jobs) {
        state.dataNext = action.payload.jobs
          .filter((job: Job) => isNextDate(job.executionDate))
          .sort((a: Job, b: Job) => sortStrings(a, b));
        state.dataPrev = action.payload.jobs
          .filter((job: Job) => !isNextDate(job.executionDate))
          .sort((a: Job, b: Job) => sortStrings(a, b));
      }
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.status = Status.complete;
      state.error = action.error.message;
    });
  },
});

const dataReducer = dataSlice.reducer;
export default dataReducer;
