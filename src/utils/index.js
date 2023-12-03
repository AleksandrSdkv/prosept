import { basicResponse } from "./instance";

export const getDeleprices = () => {
  return basicResponse.get("/api/dealerprices/");
};

