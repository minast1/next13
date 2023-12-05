import { produce } from "immer";

type selectedProductType = {
  id: number;
  quantity?: number;
  title: string;
  price: number;
  image: string;
};
export const cart: selectedProductType[] = [
  {
    id: 1,
    quantity: 2,
    title: "Test Product",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
  },
];

export const addToCart = (product: selectedProductType) => {
  const updatedCart = produce(cart, (cartState) => {
    cartState.push(product);
  });
  //return updatedCart;
};

export const removeFromCart = (id: number) => {
  const updatedCart = produce(cart, (cartState) => {
    const productIndex = cartState.findIndex((el) => el.id === id);
    cartState.splice(productIndex, 1);
  });
  return updatedCart;
};

// export const addQuantity = async () => {

// }
