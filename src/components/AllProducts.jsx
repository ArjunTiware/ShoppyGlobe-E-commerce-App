import React, { useEffect } from "react";
import UseFetchData from "../../Hooks/UseFetchData";
import Card from "../Card/Card";
import { Link, Links, useFetcher } from "react-router-dom";
import { useMemo, useState } from "react";

export const AllProducts = () => {
  const [sortOption, setSortOption] = useState("");
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]); // State to store fetched products
  const [searchres, setSearchres] = useState([]);
  const handleChange = (e) => {
    setSortOption(e.target.id);
    // setSelectedFilter((prev)=>([...prev,e.target.id]))
  };

  const url = useMemo(() => {
    if (sortOption === "highTolow") {
      return "https://dummyjson.com/products?sortBy=price&order=desc";
    }
    if (sortOption === "lowToHigh") {
      return "https://dummyjson.com/products?sortBy=price&order=asc";
    }
    return "http://localhost:8000/api/product";
  }, [sortOption]);

  let { data, loading, error } = UseFetchData(url);
  console.log(data);

  useEffect(() => {
    if (data) {
      setProducts(data.data);
      setSearchres(data.data);
    }
  }, [data]);

  function handleSearch(val) {
    setValue(val);
    let val2 = val.trim().toLowerCase();
    let p = products.filter((e) => e.title.toLowerCase().includes(val2));
    setSearchres(p.length > 0 ? p : products);
  }

  if (loading) {
    return (
      <section className="h-screen z-50 w-screen justify-center flex items-center">
        <div className="spinner-border m-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </section>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data) {
    return (
      <>
        <h1>Products Not found</h1>
      </>
    );
  }

  return (
    <>
      {/* Filters section for data  */}

      {/* <div className='w-1/4 p-4 sticky top-16 h-full border-2'>
    <h1 className='text-2xl p-2'>Filter Products</h1> 
    <hr />
   
    <h1 className='text-xl p-1'>Based on Price</h1>
    <input id='highTolow' onChange={handleChange} name='price' type="radio" /> &nbsp;
    <label htmlFor="highTolow">High To Low</label>
    <br />

    <input id='lowToHigh'onChange={handleChange} name='price' type="radio" /> &nbsp;
    <label htmlFor="lowToHigh">Low To High</label>
     <br />
    <input id='popular' onChange={handleChange} name='price' type="radio" /> &nbsp;
    <label htmlFor="popular">Popularity</label>

    </div> */}

      {/* All products */}

      <div className="w-3/4">
        <div className="p-2 flex sticky top-16 z-10 bg-white justify-center">
          <input
            className="w-64 p-1 outline rounded-xl border-blue-500"
            value={value}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Find product"
            type="text"
          />{" "}
          &nbsp;
        </div>
        <section className="flex flex-wrap  justify-center  gap-4">
          {searchres &&
            searchres.map((item) => <Card key={item._id} item={item} />)}
        </section>
      </div>
    </>
  );
};
