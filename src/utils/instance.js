import axios from "axios";

export const basicResponse = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
