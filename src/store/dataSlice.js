import { createSlice } from "@reduxjs/toolkit";

const data = createSlice({
  name: "data",
  initialState: {
    data: [],
  },
  reducers: {
    addData() {},
    editData(state, action) {
      const newData = action.payload;
      const exisitingData = state.data.find((item) => item.id === newData.id);
    },
    deleteData(state, action) {},
  },
});
