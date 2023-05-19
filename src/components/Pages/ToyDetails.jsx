import React from "react";
import { useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  const toy = useLoaderData();
  const [{picture, name, detail, sellerName, sellerEmail, subCategoryName, price, qty}] = toy;
  useTitle(name);
  console.log(toy);
  return (
    <div data-aos='zoom-out-left' className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={picture}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">{name}</h1>
          <p className="text-gray-500 mt-2">Seller: {sellerName}</p>
          <p className="text-gray-500 mt-2">Email: {sellerEmail}</p>
          <p className="font-semibold">Sub-category: {subCategoryName}</p>
          <p className="font-semibold">Price: ${price}</p>
          <p className="font-semibold">Available Qty: {qty} Pcs</p>
          <p className="py-6">
            {detail}
          </p>
          <button className="btn bg-[#54c2cf]">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
