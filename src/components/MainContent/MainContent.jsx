import { TableManufacture } from "./ManufactureTable/ManufactureTable";
import { TableDistributer } from "./DistributorTable/DistributorTable";

export function MainContent() {
  return (
    <main className="main">
      <TableManufacture />
      <TableDistributer />
    </main>
  );
}
