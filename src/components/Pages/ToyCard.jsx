import React from "react";

const ToyCard = ({toy}) => {
    const {picture, name, price, rating} = toy;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
        className="w-full"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <div className="card-actions justify-between items-center">
            <p>{rating}</p>
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
