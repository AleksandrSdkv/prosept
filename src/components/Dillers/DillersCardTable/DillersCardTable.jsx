// import React from 'react';
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { columns } from "../../../utils/constants/DataSource";
import { getDeleprices } from "../../../utils/index";
import "./DillersCardTable.css";
import { useEffect, useState } from "react";

export function DillersCardTable() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDeleprices().then((res) =>
      setData([...data, ...res.data.splice(0, 60)])
    );
  }, []);
  console.log(data);
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
  return (
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
                  {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
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
                  <td key={index} {...cell.getCellProps()}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
