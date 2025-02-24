import React from "react";
import { Link } from "react-router-dom";

const GridCategory = () => {
  return (
    <>
      <br />

      <section className="container flex flex-col">
        <div></div>
        <div className="grid grid-cols-2 h-[600px] gap-10">
          <div className="bg-black flex p-6 items-end row-start-1 bg-bottom row-end-3 bg-no-repeat bg-[url('https://res.cloudinary.com/dqlryem36/image/upload/v1738954079/ps5-slim-goedkope-playstation_large_1_u6u3uz.png')]">
            <div className="text-white flex flex-col gap-2 ">
              <h1 className="text-2xl gap-2 ">PlayStation 5</h1>
              <p className="w-3/5">
                Black and White versions of the PS5 coming out on sale
              </p>
              <Link className=" w-fit border-b border-dashed">Shop now</Link>
            </div>
          </div>

          <div className="bg-black bg-right bg-no-repeat flex p-6 items-end  bg-[url('https://res.cloudinary.com/dqlryem36/image/upload/v1738954158/attractive-woman-wearing-hat-posing-black-background_1_t1hko6.png')]">
            <div className="text-white flex flex-col gap-2 ">
              <h1 className="text-2xl gap-2 ">Women's Collection</h1>
              <p className="w-3/5">
                Featured woman collectio that give you another vibe
              </p>
              <Link className=" w-fit border-b border-dashed">Shop now</Link>
            </div>
          </div>

          <div className="flex gap-4">
            <div className='bg-black bg h-full bg-center flex p-6 items-end bg-no-repeat bg-[url("https://res.cloudinary.com/dqlryem36/image/upload/v1738954142/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png_1_aubafy.png")] w-1/2'>
              <div className="text-white flex flex-col gap-2 ">
                <h1 className="text-xl gap-2 ">Speakers</h1>
                <p className="text-sm ">Amazon Wireless speakers</p>
                <Link className=" w-fit border-b border-dashed">Shop now</Link>
              </div>
            </div>
            <div className='bg-black bg-no-repeat flex p-6 items-end bg-center h-full bg-[url("https://res.cloudinary.com/dqlryem36/image/upload/v1738954103/652e82cd70aa6522dd785109a455904c_1_ngtjlh.png")] w-1/2'>
              <div className="text-white flex flex-col gap-2 ">
                <h1 className="text-xl gap-2 ">Perfume</h1>
                <p className="text-sm ">GUCCI INTENSE OUT EDP</p>
                <Link className=" w-fit border-b border-dashed">Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GridCategory;
