import { createSlice } from "@reduxjs/toolkit";
import { INVOICE } from "../../shared/invoiceObject";
const invoiceSlice = createSlice({
  name: "invoices",
  initialState: {
    data: INVOICE,
    temporaryData: null,
    isChange: false,
  },
  reducers: {
    updateAttrInvoiceById: (state, action) => {
      // action có id, gia tri thay doi , cho thay doi
      const index = state.data.findIndex((obj) => {
        return obj.id === action.payload.id;
      }); // tìm vị trí object có id đã chọn
      const atrr_0 = action.payload.attr.split(".")[0]
      const atrr_1 = action.payload.attr.split(".")[1]
      state.data[index][atrr_0][atrr_1] = action.payload.value;
    },
    updateAllInvoice: (state, action) => {
      state.data = action.payload.invoices;
    },
    startEditingInvoice: (state) => {
      // Lưu trạng thái ban đầu
      state.temporaryData = [...state.data]; // copy
      state.isChange = true;
    },
    confirmChangesInvoice: (state) => {
      // Cập nhật dữ liệu
      state.temporaryData = null;
      state.isChange = false;
    },
    cancelChangesInvoice: (state) => {
      // Hoàn nguyên trạng thái ban đầu
      state.data = [...state.temporaryData];
      state.isChange = false;
    },
    addInvoice: (state, action) => {
      state.data.push(action.payload.invoice)
    }
  },
});

export const { updateAttrInvoiceById, updateAllInvoice, startEditingInvoice, confirmChangesInvoice, cancelChangesInvoice, addInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
