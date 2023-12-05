import { ProductType } from "@/types";
import axios from "axios";

export const getProducts = async (): Promise<ProductType[]> => {
  const res = await fetch("https://fakestoreapi.com/products?limit=10");
  return await res.json();
};

export const getProductById = async (id: number): Promise<ProductType> => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return data;
};
