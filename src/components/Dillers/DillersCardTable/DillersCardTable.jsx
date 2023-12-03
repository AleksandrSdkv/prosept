// import React from 'react';
import { useState, useEffect} from "react";
import PropTypes from "prop-types";
import React from "react";
import { useTable, useSortBy, useGlobalFilter } from "react-table";
import { columns, data } from "../../../utils/constants/DataSource"

import "./DillersCardTable.css";

export function DillersCardTable() {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    initialState: {
      globalFilter: "",
    },
  },
  useGlobalFilter,
  useSortBy);
  return (
    <table {...getTableProps()} className="dillers_table">
      <thead className="dillers_table__thead">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()} className="dillers_table__tr">
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className="dillers_table__th">
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
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

// export function DillersCardTable(data) {
//   const [isLoading, setIsLoading] = useState(false);
//   const [filter, setFilter] = useState({});
//   // console.log(data)
//   // useEffect(() => {
//   //   filterHandler();
//   //   filterDillers({ data: config });
//   // }, []);

//   // function filterHandler() {
//   //   setFilter(handleFilteredData());
//   // }

// function handleFilteredData(data) {
//     // console.log(data)
//     return data.filter((item) => {
//         // console.log(item)
//         return item.name.toLowerCase().includes(filter.toLowerCase())}
//     );
// }

//   // async function filterDillers(config) {
//   //   setIsLoading(true);
//   //   try {
//   //     handleFilteredData.length > 0? ( config.map((item) => (
//   //       <tr key={item.id}>
//   //         <td>{item.name_1C}</td>
//   //         <td>{item.product_name}</td>
//   //         <td>{item.url}</td>
//   //         <td>{item.recommended_price}</td>
//   //         <td>{item.price}</td>
//   //       </tr>
//   //     ))) : (<p>Не найдено</p>) 
//   //         console.log(config)
//   //   } catch(err) {
//   //     console.log(err);
//   //   } finally {
//   //     setIsLoading(false);
//   //   }
//   // }

//   DillersCardTable.propTypes = {
//     data: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name_1C: PropTypes.string.isRequired,
//         product_name: PropTypes.string.isRequired,
//         url: PropTypes.string.isRequired,
//         recommended_price: PropTypes.number.isRequired,
//         price: PropTypes.number.isRequired,
//       })
//     ).isRequired,
//   }
  
//   return (
//     <table className="dillers_table">
//       <thead>
//         <tr>
//           <th className="dillers_table__title">Продукция</th>
//           <th className="dillers_table__title">Продавцы</th>
//           <th className="dillers_table__title">Ссылка</th>
//           <th className="dillers_table__title">Рекомендованная цена</th>
//           <th className="dillers_table__title">Цена</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* {handleFilteredData.length > 0 ? ( data.map((item) => {
//           <tr key={item.id}>
//             <td>{item.name_1C}</td>
//             <td>{item.product_name}</td>
//             <td>{item.url}</td>
//             <td>{item.recommended_price}</td>
//             <td>{item.price}</td>
//           </tr>
// })) : (<p>Не найдено</p>)} */}
//       </tbody>
//     </table>
//   );
// }