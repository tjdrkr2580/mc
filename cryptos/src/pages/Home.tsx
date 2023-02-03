import { useFetchTickers } from "../hooks/useFetchTickers";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import { TickersInfo } from "../types/type";

const Home = () => {
  const { data } = useFetchTickers();
  return (
    <div className="wrapper">
      {data.map((element: TickersInfo) => (
        <Link to={`/${element.id}`}>{element.name}</Link>
      ))}
    </div>
  );
};

export default Home;
