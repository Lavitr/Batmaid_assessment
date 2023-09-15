import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
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
      state.data = action.payload;
    });
    builder.addCase(getData.rejected, (state, action) => {
      state.loading = false;
      (state as any).error = action.error.message;
    });
  },
});

const dataReducer = dataSlice.reducer;
export default dataReducer;
