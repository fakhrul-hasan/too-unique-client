import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ToysRow from "../ToysRow";
import { ToastContainer, toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";

const MyToys = () => {
  useTitle('My Toys');
  const { user } = useContext(AuthContext);
  const [addedToy, setAddedToy] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const url = `https://too-unique-server.vercel.app/allToys?email=${user?.email}&sortOrder=${sortOrder}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAddedToy(data);
      });
  }, [url]);
  const handleDelete = (id) => {
    fetch(`https://too-unique-server.vercel.app/toy/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.warning("Deleted!!!");
          const remaining = addedToy.filter((toy) => toy._id !== id);
          setAddedToy(remaining);
        }
      });
  };
  return (
    <div>
      <ToastContainer />
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              {location.pathname == "/myToys" && <th></th>}
              <th>SL</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th className="dropdown dropdown-end">
                <li tabIndex={0} className="btn btn-outline m-1">
                  Sort By Price
                </li>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li onClick={()=>setSortOrder('asc')}>
                    <a>Low to High</a>
                  </li>
                  <li onClick={()=>setSortOrder('desc')}>
                    <a>High to Low</a>
                  </li>
                </ul>
              </th>
            </tr>
          </thead>

          <tbody>
            {addedToy.map((toy, index) => (
              <ToysRow
                key={toy._id}
                sequenceNumber={index}
                toy={toy}
                handleDelete={handleDelete}
              ></ToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
