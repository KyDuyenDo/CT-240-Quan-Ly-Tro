import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
import notifyReducer from "./slices/notifySlice";
import invoiceReducer from "./slices/invoiceSlice";
import contractReducer from "./slices/contractSlice";
import serviceReducer from "./slices/serviceSlice";
import indexReducer from "./slices/indexSlice";
export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    notify: notifyReducer,
    invoices: invoiceReducer,
    contracts: contractReducer,
    services: serviceReducer,
    index: indexReducer
  },
});
