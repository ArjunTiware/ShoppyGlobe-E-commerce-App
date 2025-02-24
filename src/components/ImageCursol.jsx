import React, { useEffect, useState } from "react";

const ImageCursol = () => {
  let [count, setCount] = useState(0);
  const images = [
    "https://res.cloudinary.com/dqlryem36/image/upload/v1738957107/Yellow_and_White_Modern_Illustrative_Cyber_Monday_Sale_Banner_1_oyqnwb.png",
    "https://res.cloudinary.com/dqlryem36/image/upload/v1738956960/Black_White_and_Red_Minimalist_Market_Shops_Discount_Black_Friday_Banner_vyqvr8.png",
    "https://res.cloudinary.com/dqlryem36/image/upload/v1738956942/Yellow_and_White_Modern_Illustrative_Cyber_Monday_Sale_Banner_owriaf.png",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % images.length); // Update the count to go through the images
    }, 3000);

    // Cleanup: Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <div className="px-6 mt-3">
        <div>
          <img src={images[count]} alt="" />
        </div>
      </div>
    </>
  );
};

export default ImageCursol;
