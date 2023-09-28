import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
export const store = configureStore({
  reducer: {
    rooms: roomReducer,
  },
});
