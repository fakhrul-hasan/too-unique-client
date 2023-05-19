import React from "react";

const ToysRow = ({ toy, sequenceNumber }) => {
  const { sellerName, name, subCategoryName, price, qty } = toy;
  return (
    <tr>
      <td>{sequenceNumber + 1}</td>
      <th>{sellerName}</th>
      <td>{name}</td>
      <td>{subCategoryName}</td>
      <td>{price}</td>
      <td>{qty}</td>
      <th>
        <button className="btn bg-[#ff8c98] btn-xs">View Details</button>
      </th>
    </tr>
  );
};

export default ToysRow;
