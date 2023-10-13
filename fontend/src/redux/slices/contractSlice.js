import { createSlice } from "@reduxjs/toolkit";
import { CONTRACT } from "../../shared/contractObject";
const contractSlice = createSlice({
  name: "contracts",
  initialState: {
    data: CONTRACT,
    temporaryData: null,
    isChange: false,
  },
  reducers: {
    updateAttrContractById: (state, action) => {
      // action có id, gia tri thay doi , cho thay doi
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      state.data[index][action.payload.attr] = action.payload.value;
    },
    updateAllContract: (state, action) => {
      state.data = action.payload.contracts;
    },
    startEditingContract: (state) => {
      // Lưu trạng thái ban đầu
      state.temporaryData = [...state.data]; // copy
      state.isChange = true;
    },
    confirmChangesContract: (state) => {
      // Cập nhật dữ liệu
      state.temporaryData = null;
      state.isChange = false;
    },
    cancelChangesContract: (state) => {
      // Hoàn nguyên trạng thái ban đầu
      state.data = [...state.temporaryData];
      state.isChange = false;
    },
    addContract: (state, action) => {
      state.data.push(action.payload.room)
    }
  },
});

export const { updateAttrContractById, updateAllContract, startEditingContract, confirmChangesContract, cancelChangesContract, addContract } = contractSlice.actions;
export default contractSlice.reducer;
