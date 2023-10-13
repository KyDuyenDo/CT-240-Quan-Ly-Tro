import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
import notifyReducer from "./slices/notifySlice";
import invoiceReducer from "./slices/invoiceSlice";
import contractReducer from "./slices/contractSlice";
export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    notify: notifyReducer,
    invoices: invoiceReducer,
    contracts: contractReducer
  },
});
