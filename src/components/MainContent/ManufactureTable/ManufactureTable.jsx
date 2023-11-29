import { Table } from "../../Table/Table";

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
    {
      product_key: 2,
      price: 0,
      product_name: "string",
      status: false,
      dealer_id: 0,
      product: {
        article: "антисептик",
        name: "Пропитка водоотталкивающая Prosept Aquaisol для камня концен. 1:2 1л",
        cost: 0,
        recommended_price: "453",
      },
    },
    {
      product_key: 3,
      price: 0,
      product_name: "string",
      status: false,
      dealer_id: 0,
      product: {
        article: "антисептик",
        name: "Пропитка водоотталкивающая Prosept Aquaisol для камнитка водоотталкивающая Prosept Aqu итка водоотталкивающая Prosept Aquя концен. 1:2 1л",
        cost: 0,
        recommended_price: "523",
      },
    },
  ];
  console.log(products);
  const listItems = products.map((product) => (
    <div key={product.product_key} className="manufacture__table-item">
      <p className="manufacture__table-item-article">{product.product.name}</p>
      <div className="manufacture__table-group">
        <h3 className="manufacture__table-item-name">
          {product.product.recommended_price}
        </h3>
        <div className="manufacture__table-item-icon"></div>
      </div>
    </div>
  ));

  return (
    <Table typeTable="manufacture" typeHeader="Каталог произвоителя">
      <div className="manufacture__table">{listItems}</div>
    </Table>
  );
}
