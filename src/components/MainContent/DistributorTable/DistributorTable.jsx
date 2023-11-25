import { Table } from "../../Table/Table";
import { TableButton } from "../../TableButton/TableButton";

export function TableDistributer() {
  return (
    <Table typeTable="distributer" typeHeader="Каталог дилерских предложений">
      <div className="distributer_list">
        <span></span>
      </div>
      <div className="distributer__btn-group">
        <TableButton nameBtn="Да" />
        <TableButton nameBtn="Нет" />
        <TableButton nameBtn="Отложить" />
      </div>
    </Table>
  );
}
