/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getDeleprices } from "../utils/index";
export const useGetDeleprices = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDeleprices().then((res) =>
      setData([...data, ...res.data.splice(0, 60)])
    );
  }, []);

  return { data };
};
