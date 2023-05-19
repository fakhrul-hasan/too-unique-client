import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const { totalToys } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/allToys?page=${currentPage}&limit=${itemsPerPage}`);
      const data = await response.json();
      setToys(data);
    }
    fetchData();
  }, [currentPage]);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalToys / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
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
            {toys.map((toy, index) => (
              <ToysRow key={toy._id} sequenceNumber={index} toy={toy}></ToysRow>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mb-10">
        {pageNumbers.map((number) => (
          <button key={number} onClick={()=> setCurrentPage(number)} className={currentPage === number ? 'btn bg-[#ff8c98]' : 'btn'}>{number}</button>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
