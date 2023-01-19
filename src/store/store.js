import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    dataStore: dataSlice.reducer,
  },
});

export default store;
