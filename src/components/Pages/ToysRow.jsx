import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ToysRow = ({ toy, sequenceNumber }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { sellerName, name, subCategoryName, price, qty, _id } = toy;
  return (
    <tr>
      <td>{sequenceNumber + 1}</td>
      <th>{sellerName}</th>
      <td>{name}</td>
      <td>{subCategoryName}</td>
      <td>{price}</td>
      <td>{qty}</td>
      <th>
        {
          location.pathname == '/allToys' ? <div
          className="tooltip"
          data-tip={
            user
              ? "Click to see details"
              : "You have to log in first to view details"
          }
        >
          <Link
            to={`/toyDetails/${_id}`}
            className={user ? `btn btn-xs bg-[#ff8c98]` : "btn-disabled"}
          >
            View Details
          </Link>
        </div>
        : <Link
        to={`/updateToy/${_id}`}
        className={user ? `btn btn-xs bg-[#ff8c98]` : "btn-disabled"}
      >
        Update
      </Link>
        }
      </th>
    </tr>
  );
};

export default ToysRow;
