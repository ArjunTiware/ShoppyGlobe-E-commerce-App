import React from "react";
import { useParams } from "react-router-dom";
import useProductData from "../Hooks/UseFetchData";
import FilterCard from "../Components/Card/FilterCard";
import { nanoid } from "@reduxjs/toolkit";

const SearchPage = () => {
  let { value } = useParams();

  const { data, loading, error } = useProductData(
    `https://dummyjson.com/products/search?q=${value}`
  );

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

  if (data.products.length <= 0) {
    return (
      <>
        <section className="h-dvh flex w-dvw justify-center items-center">
          <h1 className="text-2xl">No Resualt Found for "{value}"</h1>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        {data &&
          data.products.map((e) => <FilterCard key={nanoid()} item={e} />)}
      </section>
    </>
  );
};

export default SearchPage;
