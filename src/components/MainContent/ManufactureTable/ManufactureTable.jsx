/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "../../Table/Table";
import { useParams } from "react-router-dom";
import { getDeleprices } from "../../../utils/index";
import { useEffect, useState } from "react";

export function TableManufacture() {
  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    getDeleprices().then((res) =>
      setData([...data, ...res.data.splice(0, 60)])
    );
  }, []);

  const product = data.find((f) => f.id + "" === id);

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
          <h2>🌀 Loading...</h2>
        )}
      </div>
    </Table>
  );
}
