import { basicResponse } from "./instance";

export const logout = () => {
  return basicResponse.post("api/auth/jwt/logout");
};

export const login = ({ username, password }) => {
  return basicResponse
    .post("api/auth/jwt/login", {
      username,
      password,
    })
    .then(
      (response) => {
        localStorage.setItem("authenticated", true);
        localStorage.setItem("token", response.data.access_token);
      },
      (error) => {
        console.log(error);
      }
    );
};
