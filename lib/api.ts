import axios from "axios";
export const fetchProducts = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
