import { useEffect, useState } from "react";
import axios from "axios";
import { IPriceUsd, IGet } from "../models";
import { useParams } from "react-router-dom";

export function usePrices() {
  const params = useParams();
  const [prices, setPrice] = useState<IPriceUsd[]>([]);

  useEffect(() => {
    async function fetchPrice() {
      const response = await axios.get<IGet>(
        `https://api.coincap.io/v2/assets/${params.id}/history?interval=d1`
      );
      setPrice(response.data.data);
    }

    fetchPrice();
  }, [params.id]);

  return { prices };
}
