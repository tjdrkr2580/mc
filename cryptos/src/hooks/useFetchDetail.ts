import { TickerInfo } from "./../types/type";
import axios from "axios";
import { useQuery } from "react-query";
export const useFetchDetail = (id: string | undefined) => {
  const detailFetch = async () => {
    const res = await axios.get(`https://api.coinpaprika.com/v1/tickers/${id}`);
    return res.data;
  };
  return useQuery<TickerInfo | undefined>(["detail"], detailFetch);
};
