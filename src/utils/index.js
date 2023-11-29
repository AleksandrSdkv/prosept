import { basicResponse } from "./instance";

export const getApi = () => {
  basicResponse
    .post("api/auth/jwt/login", {
      username: "super@gmail.com",
      password: "Super_Customer",
    })
    .then(() => {
      return JSON.response();
    });
};

export const getDeleprices = () => {
  return basicResponse.get("/api/dealerprices/");
};
