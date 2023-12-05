import axios from "axios";

export type categoriesType = {
  id: string;
  name: string;
  image: string;
};
export const getCategories = async (): Promise<categoriesType[]> => {
  const { data } = await axios.get(
    "https://api.escuelajs.co/api/v1/categories"
  );
  return data;
};
