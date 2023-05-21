
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';
import ModalLoginForm from '../Pages/ModalLoginForm';
import { AuthContext } from '../../Providers/AuthProvider';
import { useContext } from 'react';

const Navbar = () => {
  const {user} = useContext(AuthContext);
  
    return (
      <>
      <div className="navbar md:flex md:justify-between bg-base-100">
        <div className="navbar-start block md:hidden">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-[#ff8c98]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/' className="text-[#ff8c98]">Home</Link>
              </li>
              <li>
                <Link to='/allToys' className="text-[#ff8c98]">All Toys</Link>
              </li>
              {user && <span><li>
                <Link to='/myToys' className="text-[#ff8c98]">My Toys</Link>
              </li>
              <li>
                <Link to='/addToy' className="text-[#ff8c98]">Add A Toy</Link>
              </li></span>}
              <li>
                <Link to='/blogs' className="text-[#ff8c98]">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
        <Link to='/' className="navbar-center flex flex-col border rounded-lg border-[#ff8c98] px-2" >
          <img src="https://png.pngtree.com/png-clipart/20230131/ourmid/pngtree-pink-car-with-love-nuances-on-valentines-day-png-image_6578252.png" className="h-12" alt="" />
          <h5 className="text-xl font-bold text-[#ff8c98]">Too Unique</h5>
        </Link>
        <div className="flex-end">
        <ModalLoginForm></ModalLoginForm>
        </div>
      </div>
        <nav className='bg-[#54c2cf] relative mb-4 hidden md:block '>
          <div className='py-3 text-center'>
              <NavLink to='/' className='text-white font-bold text-lg me-5 hover:text-[#ff8c98]'>Home</NavLink>
              <NavLink to='/allToys' className='text-white font-bold text-lg me-5 hover:text-[#ff8c98]'>All Toys</NavLink>
              {
                user &&
                <span>
                  <NavLink to='/myToys' className='text-white font-bold text-lg me-5 hover:text-[#ff8c98]'>My Toys</NavLink>
              <NavLink to='/addToy' className='text-white font-bold text-lg me-5 hover:text-[#ff8c98]'>Add A Toy</NavLink>
                </span>
              }
              <NavLink to='/blogs' className='text-white font-bold text-lg hover:text-[#ff8c98]'>Blogs</NavLink>
          </div>
          <div className='absolute bg-[url("//yokaz.myshopify.com/cdn/shop/files/1.png?v=1619006370")] h-6 w-full bg-repeat-x z-10 -bottom-4'></div>
        </nav>
      </>
    );
  };
  
  export default Navbar;