import axios from "axios";
import { useQuery } from "react-query";

export const useFetchTickers = () => {
  const getTickers = async () => {
    const res = await axios.get(
      "https://api.coinpaprika.com/v1/tickers?quotes=KRW"
    );
    return res.data;
  };
  return useQuery(["coins"], getTickers);
};
