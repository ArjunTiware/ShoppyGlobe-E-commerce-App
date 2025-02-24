import React from "react";

const OtherCatCard = ({ data }) => {
  return (
    <>
      <div className=" flex flex-col gap-2  items-center  p-2 ">
        <div className="p-7 hover:bg-red-300  rounded-full">
          <img src={data.src} className="" alt="" />
        </div>
        <h1 className="font-bold text-lg text-ellipsis  text-nowrap overflow-hidden">
          {data.category}
        </h1>
      </div>
    </>
  );
};

export default OtherCatCard;
