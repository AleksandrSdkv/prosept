import { TableManufacture } from "./ManufactureTable/ManufactureTable";
import { TableDistributer } from "./DistributorTable/DistributorTable";
import { Sidebar } from "./Sidebar/Sidebar";


export function MainContent() {
  return (
    <main className="main">
      <TableManufacture />
      <TableDistributer />
      <Sidebar />
    </main>
  );
}
