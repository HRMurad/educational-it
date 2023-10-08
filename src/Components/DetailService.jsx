import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DisplayDetailsService from "./DisplayDetailsService";

const DetailService = () => {
  const detailsData = useLoaderData();
  console.log(detailsData);
  const { id } = useParams();
  console.log(id);
  const [service, setService] = useState([]);

  useEffect(() => {
    const findService = detailsData.find((ServiceData) => ServiceData.id == id);
    setService(findService);
  }, [detailsData, id]);
  return (
    <>
      <div>
        <DisplayDetailsService service={service}></DisplayDetailsService>
      </div>
    </>
  );
};

export default DetailService;
