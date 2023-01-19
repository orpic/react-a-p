import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "pending",
  },

  reducers: {
    addDataToStore(state, action) {
      state.data = action.payload;
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
