import { createSlice } from "@reduxjs/toolkit";
import {CUSTOMER} from "../../shared/customer"
const customerSlice = createSlice({
  name: "customers",
  initialState: {
    data: CUSTOMER,
    temporaryData: null,
    isChange: false,
  },
  reducers: {
    updateAttrCustomerById: (state, action) => {
      // action có id, gia tri thay doi , cho thay doi
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload.id;
      });
      state.data[index][action.payload.attr] = action.payload.value;
    },
    updateAllCustomer: (state, action) => {
      state.data = action.payload.customers;
    },
    startEditingCustomer: (state) => {
      // Lưu trạng thái ban đầu
      state.temporaryData = [...state.data]; // copy
      state.isChange = true;
    },
    confirmChangesCustomer: (state) => {
      // Cập nhật dữ liệu
      state.temporaryData = null;
      state.isChange = false;
    },
    cancelChangesCustomer: (state) => {
      // Hoàn nguyên trạng thái ban đầu
      state.data = [...state.temporaryData];
      state.isChange = false;
    },
    addCustomer: (state, action) => {
      state.data.push(action.payload.customer)
    }
  },
});

export const { updateAttrCustomerById, updateAllCustomer, startEditingCustomer, confirmChangesCustomer, cancelChangesCustomer, addCustomer } = customerSlice.actions;
export default customerSlice.reducer;
