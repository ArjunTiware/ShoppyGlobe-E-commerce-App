import React from "react";

const Headline = ({ name, title }) => {
  return (
    <>
      <div className="flex container mx-auto flex-col gap-2">
        <div className="flex gap-2">
          <div className="bg-red-600 rounded-md h-8 w-4"></div>
          <h1 className="text-xl">{name}</h1>
        </div>
        <h1 className="text-3xl">{title}</h1>
      </div>
    </>
  );
};

export default Headline;
