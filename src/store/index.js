import { configureStore } from "@reduxjs/toolkit";
import { userState } from "./slices";
export const store = configureStore({
  reducer: {
    user: userState,
  },
});
