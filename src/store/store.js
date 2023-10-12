import { configureStore } from "@reduxjs/toolkit";
import modal from "./modalSlice";
import task from "./taskSlice";
export const store = configureStore({
  reducer: {
    modal,
    task,
  },
});
