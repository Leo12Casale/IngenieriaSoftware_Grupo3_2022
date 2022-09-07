const mockData = [
  {
    imgUrl: "https://placeimg.com/300/300/arch",
    title: "Algo de Messi",
    description: [...Array(30)]
      .map(() => Math.random().toString(36)[2])
      .join(""),

    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/300/300/album",
    title: "Album de Messi",
    description: [...Array(30)]
      .map(() => Math.random().toString(36)[2])
      .join(""),

    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/300/300/coca",
    title: "Coca Cola de Messi",
    description: [...Array(30)]
      .map(() => Math.random().toString(36)[2])
      .join(""),

    quantity: 2,
    amount: 1700,
  },
  {
    imgUrl: "https://placeimg.com/300/300/hamburguesa",
    title: "Hamburguesa de Messi",
    description: [...Array(30)]
      .map(() => Math.random().toString(36)[2])
      .join(""),

    quantity: 2,
    amount: 1700,
  },
];

export default mockData;
