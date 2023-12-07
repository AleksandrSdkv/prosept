export const columns = [
  {
    Header: "name_1C",
    accessor: "product_name",

      filter: (rows, id, filterType) =>
      rows.filter((row) => row.values[id].startsWith(filterType)),
  },
  {
    Header: "Продавцы",
    accessor: "dealer_id",
  },
  {
    Header: "Дата",
    accessor: "date",
  },
  {
    Header: "Рекомендованная цена",
    accessor: "price",
  },
];

