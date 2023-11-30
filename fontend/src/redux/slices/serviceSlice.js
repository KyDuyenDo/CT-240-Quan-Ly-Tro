import { createSlice } from "@reduxjs/toolkit";
import { SERVICES } from "../../shared/serviceObject";
const serviceSlice = createSlice({
  name: "services",
  initialState: {
    data: SERVICES,
  },
  reducers: {
    updateAttrServiceById: (state, action) => {
      // action có id, gia tri thay doi , cho thay doi
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      state.data[index][action.payload.attr] = action.payload.value;
    },
    updateAllService: (state, action) => {
      state.data = action.payload.services;
    },
    addService: (state, action) => {
      state.data.push(action.payload.room)
    }
  },
});

export const { updateAttrServiceById, updateAllService, addService} = serviceSlice.actions;
export default serviceSlice.reducer;
