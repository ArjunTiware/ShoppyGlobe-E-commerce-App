import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useProductData from "../Hooks/UseFetchData";
import FilterCard from "../Components/Card/FilterCard";

const Products = () => {
  let { slug } = useParams();
  let url = `https://dummyjson.com/products/category/${slug}`;

  const { data, error, loading } = useProductData(url);

  if (loading) {
    return (
      <section className="h-screen w-screen justify-center flex items-center">
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }
  if (error) {
    return <div>{error.msg}</div>;
  }
  if (!data) {
    return <div>No products Available</div>;
  }

  let dataArr = data.products;

  return (
    <section className=" flex flex-wrap gap-6">
      {dataArr.map((e) => (
        <FilterCard key={e.id} item={e} />
      ))}
    </section>
  );
};
export default Products;
