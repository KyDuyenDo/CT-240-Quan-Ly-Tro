import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
import notifyReducer from "./slices/notifySlice";
export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    notify: notifyReducer
  },
});
