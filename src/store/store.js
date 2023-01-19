import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../store";

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
  },
});

export default store;
