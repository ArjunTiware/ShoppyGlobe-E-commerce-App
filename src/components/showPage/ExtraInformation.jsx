import React from "react";

const ExtraInformation = ({ item }) => {
  return (
    <>
      <hr />
      <div className=" text-sm flex gap-1 flex-col">
        <h1 className="text-lg">
          Extra Information <i className="fa-solid fa-layer-group"></i>
        </h1>
        <p>weight: {item.weight} kg</p>
        <p>Height: {item.dimensions.height} cm</p>
        <p>Width: {item.dimensions.height} cm</p>
        <p>Depth: {item.dimensions.depth} cm</p>
        <p>warranty: {item.warrantyInformation}</p>
        <p>Sku : {item.sku}</p>
      </div>
      <hr />
    </>
  );
};

export default ExtraInformation;
