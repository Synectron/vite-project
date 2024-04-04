export interface Product {
  id: number;
  productName: string;
  quantity: number;
  price: number;
}

const productData: Product[] = [
  {
    id: 1,
    productName: "Salt",
    quantity: 5,
    price: 10,
  },
  {
    id: 2,
    productName: "Sugar",
    quantity: 50,
    price: 10,
  },
  {
    id: 3,
    productName: "Kurkure",
    quantity: 5,
    price: 10,
  },
  {
    id: 4,
    productName: "Chips",
    quantity: 15,
    price: 10,
  },
];

export default productData;

//interface
//type define
// return same as fn type
