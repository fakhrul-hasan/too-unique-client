import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const ToyCard = ({toy}) => {
    const {user} = useContext(AuthContext);
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
        <div className="flex gap-2">
            <span className="font-semibold">
              Rating:{" "}
            </span>
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            {rating}
          </div>
          <div className="tooltip" data-tip={user ? 'Click to see details' : 'You have to log in first to view details'}>
          <Link to='/toyDetails' className={user ? `btn bg-[#ff8c98]` : 'btn-disabled'}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
