import { Table } from "../../Table/Table";
import { Card } from "../Card/Card";

export function TableManufacture() {
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
      name={"manufacture__table-item"}
    />
  ));

  return (
    <Table typeTable="manufacture" typeHeader="Каталог дилерских предложений">
      <div className="manufacture__table">{dilstributorList}</div>
    </Table>
  );
}
