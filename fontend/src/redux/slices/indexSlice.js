import { createSlice } from "@reduxjs/toolkit";
import { POWEROFROOM } from "../../shared/powerOfRoom";
const indexSlice = createSlice({
  name: "index",
  initialState: {
    data: POWEROFROOM,
  },
  reducers: {
    updateAttrIndexById: (state, action) => {
      // action có id, gia tri thay doi , cho thay doi
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      state.data[index][action.payload.attr] = action.payload.value;
    },
    updateAllIndex: (state, action) => {
      state.data = action.payload.services;
    },
    addIndex: (state, action) => {
      state.data.push(action.payload.room)
    }
  },
});

export const { updateAttrIndexById, updateAllIndex, addIndex} = indexSlice.actions;
export default indexSlice.reducer;
