import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./customers/customerSlice";
import scheduleReducer from "./schedules/scheduleSlice";
import cutsReducer from "./cuts/cutsSlice";

const store = configureStore({
  reducer: {
    customer: customerReducer,
    schedules: scheduleReducer,
    cuts: cutsReducer,
  },
});

export default store;
