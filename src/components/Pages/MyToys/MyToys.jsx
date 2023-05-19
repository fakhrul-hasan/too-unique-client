import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ToysRow from "../ToysRow";
import { ToastContainer, toast } from "react-toastify";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [addedToy, setAddedToy] = useState([]);
  const url = `http://localhost:3000/allToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAddedToy(data);
      });
  }, [url]);
  const handleDelete=(id)=>{
    fetch(`http://localhost:3000/toy/${id}`,{method: 'DELETE'})
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.deletedCount>0){
        toast.warning('Deleted!!!');
        const remaining = addedToy.filter(toy=> toy._id !== id);
        setAddedToy(remaining);
      }
    })
  }
  return (
    <div>
      <ToastContainer/>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head*/}
          <thead>
            <tr>
              {location.pathname == '/myToys' && <th></th>}
              <th>SL</th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
            </tr>
          </thead>
          <tbody>
            {addedToy.map((toy, index) => (
              <ToysRow key={toy._id} sequenceNumber={index} toy={toy} handleDelete={handleDelete}></ToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
