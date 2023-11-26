import axios from "axios";
let config = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
};
export const getApi = () => {
  axios
    .post(
      "http://45.87.246.151:8000/api/auth/jwt/login",
      {
        username: "super@gmail.com",
        password: "Super_Customer",
      },
      config
    )
    .then((response) => {
      console.log(response.status);
    })
    .catch((error) => {
      console.log(error);
    });
};
