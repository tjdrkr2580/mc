import { FunctionComponent } from "react";
import { useParams } from "react-router";
import { useFetchDetail } from "../hooks/useFetchDetail";

const Detail: FunctionComponent = () => {
  const { id } = useParams<string>();
  const { data } = useFetchDetail(id);
  return (
    <div>
      {data && (
        <>
          <div>{data.name}</div>
          <div>{data.first_data_at}</div>
        </>
      )}
    </div>
  );
};

export default Detail;
