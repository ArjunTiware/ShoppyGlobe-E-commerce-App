import React from "react";

export const ItemandPrice = ({ name, price }) => {
  return (
    <>
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{price}</p>
      </div>
    </>
  );
};
