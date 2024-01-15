import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchCuts } from "services/apiCuts";

export const fetchCutsThunk = createAsyncThunk(
  "cuts/fetchCuts",
  async (startDate, endDate) => {
    const response = await fetchCuts(startDate);

    return response.data;
  }
);

export const fetchPastThreeMonthCutsThunk = createAsyncThunk(
  "cuts/fetchPastCuts",
  async () => {
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 3);
    const response = await fetchCuts(startDate.toISOString().split("T")[0]);

    return response.data;
  }
);

const cutsSlice = createSlice({
  name: "cuts",
  initialState: {
    isLoading: false,
    error: null,
    cuts: [],
    pastCuts: [],
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
      state.isLoading = false;
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

    builder.addCase(fetchPastThreeMonthCutsThunk.fulfilled, (state, action) => {
      console.log("setting past cuts", action.payload);
      state.pastCuts = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchPastThreeMonthCutsThunk.pending, (state, action) => {
      console.log("fetching past cuts:... pending");
      state.isLoading = true;
    });
    builder.addCase(fetchPastThreeMonthCutsThunk.rejected, (state, action) => {
      console.log("fetching past cuts:... rejected", action.error);
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { setCuts } = cutsSlice.actions;

export default cutsSlice.reducer;

export const getCuts = (state) => state.cuts;
