import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../utils/AuthService";
export const fetchUserLogin = createAsyncThunk(
  "user/fetchUserLogin",
  async (value) => {
    try {
      return login(value);
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
