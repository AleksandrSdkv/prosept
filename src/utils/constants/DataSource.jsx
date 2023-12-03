export const columns = [
    {
      Header: 'Продукция',
      accessor: 'name_1C',
      // Footer: info => `Count: ${info.pageCount}`,
      filter: (rows, id, filterType) => rows.filter(row => row.values[id].startsWith(filterType)),
    },
    {
      Header: 'Продавцы',
      accessor: 'product_name',
    },
    {
      Header: 'Ссылка',
      accessor: 'url',
    },
    {
      Header: 'Рекомендованная цена',
      accessor: 'recommended_price',
    },
    {
      Header: 'Цена',
      accessor: 'price',
    },
  ];
  
  export const data = [
    {
      name_1C: 'Моющее средство А',
      product_name: 'ВБ',
      url: 'www.google.com',
      recommended_price: 800,
      price: 1200,
    },
    {
      name_1C: 'Моющее средство Б',
      product_name: 'Озон',
      url: 'www.google.com',
      recommended_price: 1000,
      price: 1300,
    },
    {
      name_1C: 'Моющее средство В',
      product_name: 'Озон',
      url: 'www.google.com',
      recommended_price: 700,
      price: 900,
    },
    {
      name_1C: 'Моющее средство Г',
      product_name: 'ВБ',
      url: 'www.google.com',
      recommended_price: 650,
      price: 1000,
    },
    {
      name_1C: 'Моющее средство Д',
      product_name: 'Летуаль',
      url: 'www.google.com',
      recommended_price: 700,
      price: 1100,
    },
  ];