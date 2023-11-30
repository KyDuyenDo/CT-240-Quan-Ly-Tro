import { createSlice } from "@reduxjs/toolkit";
import { ROOMOBJECT } from "../../shared/roomObject";
import { object } from "yup";
const roomSlice = createSlice({
  name: "rooms",
  initialState: {
    data: ROOMOBJECT,
    temporaryData: null,
    isChange: false,
  },
  reducers: {
    updateAttrRoomById: (state, action) => {
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      // action có id, gia tri thay doi , cho thay doi
      if (action.payload.attr === "status") {
        const index_status = state.data[index].status.indexOf("is_empty");
        console.log(index_status);
        if (index !== -1) {
          console.log(state.data[index].status[index_status]);
          state.data[index].status[index_status] = action.payload.value;
        }
      } else if (action.payload.attr === "customers") {
        state.data[index].customers =
          (parseInt(state.data[index].customers) + action.payload.value).toString();
      } else {
        state.data[index][action.payload.attr] = action.payload.value;
      }
    },
    updateAllRoom: (state, action) => {
      state.data = action.payload.rooms;
    },
    deleteRoomById: (state, action) => {
      const newdata = state.data.filter((obj) => obj.id !== action.payload.id);
      state.data = [...newdata];
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
    addRoom: (state, action) => {
      state.data.push(action.payload.room);
    },
  },
});

export const {
  updateAttrRoomById,
  updateAllRoom,
  startEditing,
  confirmChanges,
  cancelChanges,
  addRoom,
  deleteRoomById,
} = roomSlice.actions;
export default roomSlice.reducer;
