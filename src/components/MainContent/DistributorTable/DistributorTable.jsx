import { Table } from "../../Table/Table";
import { TableButton } from "../../TableButton/TableButton";
import { Card } from "../Card/Card";
export function TableDistributer() {
  const products = [
    {
      product_key: 1,
      price: 0,
      product_name: "string",
      status: false,
      dealer_id: 0,
      product: {
        article: "антисептик",
        name: "Пропитка водоотталкивающая Prosept Aquaisol для камня концен. 1:2 1л",
        cost: 0,
        recommended_price: "233",
      },
    },
  ];

  const dilstributorList = products.map((product) => (
    <Card
      key={product.product_key}
      product={product}
      name={"distributor__table-item"}
    />
  ));
  return (
    <Table typeTable="distributer" typeHeader="Товар производителя">
      <div className="distributer_list">{dilstributorList}</div>
      <div className="distributer__btn-group">
        <TableButton nameBtn="Да" />
        <TableButton nameBtn="Нет" />
        <TableButton nameBtn="Отложить" />
      </div>
    </Table>
  );
}
