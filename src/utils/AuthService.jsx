import { basicResponse } from "./instance";

export const logout = (token) => {
  return basicResponse.post("api/auth/jwt/logout", {
    token,
  });
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
