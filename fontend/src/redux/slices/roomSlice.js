import { createSlice } from "@reduxjs/toolkit";
import { ROOMOBJECT } from "../../shared/roomObject";
const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    data: ROOMOBJECT,
    temporaryData: null,
    isChange: false,
  },
  reducers: {
    updateAttrRoomById: (state, action) => {
      // action có id, gia tri thay doi , cho thay doi
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      state.data[index][action.payload.attr] = action.payload.value;
    },
    updateAllRoom: (state, action) => {
      state.data = action.payload.rooms;
    },
    startEditing: (state) => {
      // Lưu trạng thái ban đầu
      state.temporaryData = [...state.data]; // copy
      state.isChange = true;
    },
    confirmChanges: (state) => {
      // Cập nhật dữ liệu
      state.temporaryData = null;
      state.isChange = false;
    },
    cancelChanges: (state) => {
      // Hoàn nguyên trạng thái ban đầu
      state.data = [...state.temporaryData];
      state.isChange = false;
    },
  },
});

export const { updateAttrRoomById, updateAllRoom, startEditing, confirmChanges, cancelChanges } = roomSlice.actions;
export default roomSlice.reducer;
