/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "../../Table/Table";
import Preloader from "../../Preloader/Preloader";

export function TableManufacture({ idCard, productArray }) {
  const product = productArray.find((f) => f.id + "" === idCard);
  return (
    <Table typeTable="manufacture" typeHeader="Каталог дилерских предложений">
      <div className={"manufacture__table-item"}>
        {product ? (
          <>
            <h3 className="manufacture__table-item-name">
              {product.product_name}
            </h3>
            <div className="manufacture__table-group">
              <p className="manufacture__table-item-price">
                {product.price + "p"}
              </p>
              <div className={"manufacture__table-item-icon"}></div>
            </div>
          </>
        ) : (
          <Preloader />
        )}
      </div>
    </Table>
  );
}
