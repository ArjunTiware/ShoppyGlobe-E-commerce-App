import React from "react";
import ShowPage from "../Components/showPage/ShowPage";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <ShowPage id={id} />
    </>
  );
};

export default ProductDetails;
