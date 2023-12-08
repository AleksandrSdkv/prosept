/* eslint-disable react-hooks/exhaustive-deps */
import { Table } from "../../Table/Table";
import { TableButton } from "../../TableButton/TableButton";
import { Card } from "../Card/Card";
import { getPredicate } from "../../../utils";
import { useEffect, useState } from "react";
import { randomNumbers } from "../../../utils/constants/DataSource";
export function TableDistributer({ idCard, productArray }) {
  const [arr, isArr] = useState([]);
  const [arrayCardCount, setArrayCardCount] = useState(0);
  useEffect(() => {
    getPredicate(idCard)
      .then((res) => isArr(res.data))
      .catch((err) => console.log(err));
  }, []);
  const handleClickCount = () => {
    setArrayCardCount(arrayCardCount + 1);
  };
  const dilstributorList = arr.map(
    (product, index) =>
      index + arrayCardCount > 2 && (
        <Card
          randomNumbers={randomNumbers[index]}
          key={product.id}
          product={product}
          name={"distributor__table-item"}
        />
      )
  );
  return (
    <Table typeTable="distributer" typeHeader="Товар производителя">
      {dilstributorList.length !== 0 ? (
        <div className="distributer_list">{dilstributorList}</div>
      ) : (
        <p className="distributer__no-predication">Для данного товара нет сравнений</p>
      )}
      <div className="distributer__btn-group">
        <TableButton nameBtn="Да" productArray={productArray} />
        <TableButton
          nameBtn="Нет"
          onClick={handleClickCount}
          productArray={productArray}
        />
        <TableButton nameBtn="Отложить" productArray={productArray} />
      </div>
    </Table>
  );
}
