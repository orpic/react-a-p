import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    status: "pending",
  },
  reducers: {
    addData(state, action) {
      state.data = action.payload;
    },

    editData(state, action) {
      const newData = action.payload;
      const exisitingData = state.data.find((item) => item.id === newData.id);

      exisitingData.name = newData.name;
      exisitingData.email = newData.email;
      exisitingData.role = newData.role;
    },

    deleteData(state, action) {
      //action.payload should always be an array of ids
      const idsToDelete = action.payload;
      state.data = state.data.filter((item) => !idsToDelete.includes(item.id));
    },

    deleteSinlgeData(state, action) {
      //action.payload should always be an array of ids
      const idToDelete = action.payload;
      state.data = state.data.filter((item) => item.id !== idToDelete);
    },

    updateStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
