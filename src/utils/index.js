import { basicResponse } from "./instance";

export const getDeleprices = () => {
  return basicResponse.get("/api/dealerprices/");
};

export const getPredicate = (id) => {
  return basicResponse.get(
    `http://81.31.246.233:8000/api/predictions?product_id=${id}&k=5`
  );
};
