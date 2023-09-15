import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sortStrings, isNextDate } from "../utils/helpers";

const initialState = {
  dataNext: [],
  dataPrev: [],
  loading: false,
  error: null,
};

export const getData = createAsyncThunk("data/fetchData", async () => {
  const data = await fetch("/data", {
    method: "GET",
  }).then((data: any) => data.json());
  return data;
});

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getData.pending,
      (state: { loading: boolean }, action: any) => {
        state.loading = true;
      }
    );
    builder.addCase(getData.fulfilled, (state, action) => {
      state.loading = false;
      state.dataNext = action.payload.jobs
        .filter((job: any) => isNextDate(job.executionDate))
        .sort((a: any, b: any) => sortStrings(a, b));
      state.dataPrev = action.payload.jobs
        .filter((job: any) => !isNextDate(job.executionDate))
        .sort((a: any, b: any) => sortStrings(a, b));
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      (state as any).error = action.error.message;
    });
  },
});

const dataReducer = dataSlice.reducer;
export default dataReducer;
