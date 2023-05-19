import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const toys = useLoaderData();
  console.log(toys);
  return (
    <div>
      
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              <th>SL</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index)=><ToysRow
            key={toy._id}
            sequenceNumber={index}
            toy={toy}
            ></ToysRow>)}
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
