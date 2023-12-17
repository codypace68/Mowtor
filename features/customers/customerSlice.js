import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCustomers } from "services/apiCustomers";

export const fetchCustomersThunk = createAsyncThunk(
  "customer/fetchCustomers",
  async () => {
    const response = await fetchCustomers();

    return response.data;
  }
);

const customerSlice = createSlice({
  name: "customers",
  initialState: {
    isLoading: false,
    error: null,
    customers: [],
  },
  reducers: {
    setCustomers: (state, action) => {
      state.customer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCustomersThunk.fulfilled, (state, action) => {
      console.log("setting customers", action.payload);
      state.customers = action.payload;
    });
    builder.addCase(fetchCustomersThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCustomersThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { setCustomers } = customerSlice.actions;

export default customerSlice.reducer;

export const getCustomers = (state) => state.customer;
