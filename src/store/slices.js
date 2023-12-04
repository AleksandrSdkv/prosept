import { createSlice } from "@reduxjs/toolkit";
import { fetchUserLogin } from "./thunks";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    username: "",
    token: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserLogin.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
      state.statusUser = "success";

      state.username = action.meta.arg.username;
      localStorage.setItem("username", state.username);
    });
  },
});
export const userState = userSlice.reducer;
