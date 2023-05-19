import { Link } from "react-router-dom";
import ReactTabs from "./ReactTabs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <div>
      <ToastContainer />
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://cdn.create.vista.com/api/media/medium/423537896/stock-photo-toy-car-gift-box-pink?token="
            className="w-full h-96"
          />
          <div className="absolute bottom-20 left-24">
            <h3 className="text-5xl font-bold leading-10 mb-2 text-[#ff8c98]">New Arrivals</h3>
            <h1 className="text-7xl font-bold mb-9">Toy Collection</h1>
            <Link to='/allToys' className="bg-[#ff8c98] hover:bg-[#54c2cf] font-semibold text-white px-7 py-4 rounded-xl">Shop Now</Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/premium-photo/car-diagnostic-service-concept-auto-maintenance-test-station-banner-male-hand-holding-toy-car-grey-background-with-copy-space_106035-1208.jpg"
            className="w-full h-96"
          />
          <div className="absolute bottom-20 right-24">
            <h3 className="text-5xl font-bold leading-10 mb-2 text-[#ff8c98]">New Arrivals</h3>
            <h1 className="text-7xl font-bold mb-9">Toy Collection</h1>
            <Link to='/allToys' className="bg-[#ff8c98] hover:bg-[#54c2cf] font-semibold text-white px-7 py-4 rounded-xl">Shop Now</Link>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <section className="py-8 flex flex-col">
        <img className="mx-auto" src="//yokaz.myshopify.com/cdn/shop/files/saperator.png" alt="" />
        <h4 className="font-bold text-3xl mx-auto mt-2 border-b-2 inline-block pb-4">Shop By Category</h4>
        <ReactTabs></ReactTabs>
      </section>
    </div>
  );
};

export default Home;
