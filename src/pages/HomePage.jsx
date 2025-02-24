import React, { useEffect, useState } from "react";
import OtherCatCard from "../Components/Card/OtherCatCard";
import GridCategory from "../Components/HomePage/GridCategory";
import ImageCursol from "../Components/HomePage/ImageCursol";
import axios from "axios";
import Headline from "../Components/HomePage/Headline";
import Card from "../Components/Card/Card";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, SetCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("http://localhost:8000/api/category")
      .then((respone) => {
        if (respone && respone.data) {
          SetCategories(respone.data.data);
        }
      })
      .catch((err) => {
        setError(err);
      });

    axios("http://localhost:8000/api/product")
      .then((respone) => {
        if (respone && respone.data) {
          setProducts(respone.data.data);
        }
      })
      .catch((err) => {
        setError(err);
      });
  }, []);

  if (products.length > 8) {
    products.length = 8;
  }

  return (
    <>
      <ImageCursol />
      <br /> <br />
      <Headline name="categories" title="Browse By Category" />
      <br />
      <div className="flex flex-wrap gap-5  container">
        {categories &&
          categories.map((item, index) => {
            return <OtherCatCard key={index} data={item} />;
          })}
      </div>
      <br /> <br />
      <Headline name="Featured" title="New Arrival" />
      <GridCategory />
      <br /> <br />
      <Headline name="products" title="Explore our products" />
      <br />
      {/* Products card grid */}
      <div className="flex flex-wrap gap-5 justify-center mx-auto ">
        {products &&
          products.map((item, index) => {
            return <Card key={index} item={item} />;
          })}

        <div className=" mt-4 p- flex w-full justify-center">
          <button className="bg-red-500 rounded-md text-white p-2 px-3 ">
            View all products
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
