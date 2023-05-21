import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  useTitle('All Toys');
  const [toys, setToys] = useState([]);
  const { totalToys } = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const handleSearch=event=>{
    event.preventDefault();
    const form = event.target;
    const search = form.search.value;
    fetch(`https://too-unique-server.vercel.app/allToys/${search}`)
    .then(res=>res.json())
    .then(data=>{
      setToys(data);
    })
  }
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://too-unique-server.vercel.app/allToys?page=${currentPage}&limit=${itemsPerPage}`);
      const data = await response.json();
      setToys(data);
    }
    fetchData();
  }, [currentPage]);
  const itemsPerPage = 20;
  const totalPages = Math.ceil(totalToys / itemsPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  return (
    <div className="">
      <form onSubmit={handleSearch} className="text-center absolute top-5 right-1/2">
        <input type="text" placeholder="Search here" className="input border-[#ff8c98] input-[#ff8c98] w-full max-w-xs" name='search' />
        </form>
      <div className="overflow-hidden">
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
