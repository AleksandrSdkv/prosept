import { basicResponse } from "./instance";


export const logout = () => {
  return basicResponse.post("api/auth/jwt/logout");
};

export const login = () => {
  return basicResponse
    .post("api/auth/jwt/login", {
      username: "super@gmail.com",
      password: "Super_Customer",
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};
