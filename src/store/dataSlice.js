import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "dataStore",
  initialState: {
    data: [],
    flags: {
      isPending: true,
      isCompleted: false,
      isEmpty: false,
      isError: false,
    },
    error: "",
  },

  reducers: {
    addDataToStore(state, action) {
      state.data = action.payload;
    },
  },
});

export default dataSlice;
