import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { columns } from "../../../utils/constants/DataSource";
import "./DillersCardTable.css";
import { useNavigate } from "react-router-dom";
import { useGetDeleprices } from "../../../hooks/useGetDeleprices";
import Preloader from "../../Preloader/Preloader";
export function DillersCardTable() {
  const { data } = useGetDeleprices();

  const navigate = useNavigate();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        initialState: {
          globalFilter: "",
        },
      },
      useGlobalFilter,
      useSortBy
    );
  const navigateToProduct = (event, product) => {
    navigate(`/item/${product.id}`);
  };
  return (
    <>
      {data.length === 0 && <Preloader />}
      <table {...getTableProps()} className="dillers_table">
        <thead className="dillers_table__thead">
          {headerGroups.map((headerGroup, index) => (
            <tr
              key={index}
              {...headerGroup.getHeaderGroupProps()}
              className="dillers_table__tr"
            >
              {headerGroup.headers.map((column) => (
                <th
                  key={column.id}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="dillers_table__th"
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="dillers_table__tbody">
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <tr key={index} {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td
                      onClick={(e) => {
                        navigateToProduct(e, row.original);
                      }}
                      key={index}
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
