import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchSchedules } from "services/apiSchedules";

export const fetchSchedulesThunk = createAsyncThunk(
  "schedule/fetchSchedules",
  async () => {
    const response = await fetchSchedules();

    return response.data;
  }
);

const scheduleSlice = createSlice({
  name: "schedules",
  initialState: {
    isLoading: false,
    error: null,
    schedules: [],
  },
  reducers: {
    setSchedules: (state, action) => {
      state.schedules = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSchedulesThunk.fulfilled, (state, action) => {
      console.log("setting schedules", action.payload);
      state.schedules = action.payload;
    });
    builder.addCase(fetchSchedulesThunk.pending, (state, action) => {
      console.log("fetching schedules:... pending");
      state.isLoading = true;
    });
    builder.addCase(fetchSchedulesThunk.rejected, (state, action) => {
      console.log("fetching schedules:... rejected", action.error);
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { setSchedules } = scheduleSlice.actions;

export default scheduleSlice.reducer;

export const getSchedules = (state) => state.schedules;
