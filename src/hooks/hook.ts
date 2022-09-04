import { useEffect, useState } from "react";
import axios from "axios";
import { IData, IProduct } from "../models";

export function useProduct() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function fetchData() {
    const response = await axios.get<IData>(
      "https://api.coincap.io/v2/assets?limit=10"
    );
    setProducts(response.data.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { products };
}
