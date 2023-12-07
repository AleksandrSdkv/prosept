export const columns = [
  {
    Header: "Название 1С",
    accessor: "product_name",

    filter: (rows, id, filterType) =>
      rows.filter((row) => row.values[id].startsWith(filterType)),
  },
  {
    Header: "ID Дилера",
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
export let randomNumber = Math.floor(Math.random() * 601) + 500;
