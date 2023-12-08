/* eslint-disable react-hooks/exhaustive-deps */
import { TableManufacture } from "./ManufactureTable/ManufactureTable";
import { TableDistributer } from "./DistributorTable/DistributorTable";
import { Sidebar } from "./Sidebar/Sidebar";
import { useParams } from "react-router-dom";
import Preloader from "../Preloader/Preloader";
import { useGetDeleprices } from "../../hooks/useGetDeleprices";
export function MainContent() {
  const { data } = useGetDeleprices();
  let { id } = useParams();

  return (
    <main className="main">
      {data.length === 0 && <Preloader />}
      {data.length !== 0 && (
        <>
          <TableManufacture idCard={id} productArray={data} />
          <TableDistributer idCard={id} productArray={data} />
          <Sidebar />
        </>
      )}
    </main>
  );
}
