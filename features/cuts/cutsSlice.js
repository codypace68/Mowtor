import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCuts } from "services/apiCuts";

export const fetchCutsThunk = createAsyncThunk("cuts/fetchCuts", async () => {
  const response = await fetchCuts();

  return response.data;
});

const cutsSlice = createSlice({
  name: "cuts",
  initialState: {
    isLoading: false,
    error: null,
    cuts: [],
  },
  reducers: {
    setCuts: (state, action) => {
      state.cuts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCutsThunk.fulfilled, (state, action) => {
      console.log("setting cuts", action.payload);
      state.cuts = action.payload;
    });
    builder.addCase(fetchCutsThunk.pending, (state, action) => {
      console.log("fetching cuts:... pending");
      state.isLoading = true;
    });
    builder.addCase(fetchCutsThunk.rejected, (state, action) => {
      console.log("fetching cuts:... rejected", action.error);
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { setCuts } = cutsSlice.actions;

export default cutsSlice.reducer;

export const getCuts = (state) => state.cuts;
