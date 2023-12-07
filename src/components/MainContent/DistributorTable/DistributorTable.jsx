/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "../../Table/Table";
import { TableButton } from "../../TableButton/TableButton";
import { Card } from "../Card/Card";
import { getPredicate } from "../../../utils";
import { useEffect, useState } from "react";
export function TableDistributer({ idCard }) {
  const [arr, isArr] = useState([]);
  useEffect(() => {
    getPredicate(idCard)
      .then((res) => isArr(res.data))
      .catch((err) => console.log(err));
  }, []);

  const dilstributorList = arr.map(
    (product, index) =>
      index > 2 && (
        <Card
          key={product.id}
          product={product}
          name={"distributor__table-item"}
        />
      )
  );
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
