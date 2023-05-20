import { Link } from "react-router-dom";
import ReactTabs from "./ReactTabs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { FaAngleUp } from "react-icons/fa";
import MessageSection from "./MessageSection/MessageSection";
import ServiceSection from "./ServiceSection/ServiceSection";

const Home = () => {
  useTitle('Too Unique');
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="overflow-hidden">
      <ToastContainer />
      <div data-aos='zoom-in' className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://cdn.create.vista.com/api/media/medium/423537896/stock-photo-toy-car-gift-box-pink?token="
            className="w-full md:h-96"
          />
          <div className="absolute md:bottom-20 left-20 md:left-24">
            <h3 className="md:text-5xl font-bold leading-10 mb-2 text-[#ff8c98]">New Arrivals</h3>
            <h1 className="md:text-7xl font-bold mb-4 md:mb-9">Toy Collection</h1>
            <Link to='/allToys' className="bg-[#ff8c98] hover:bg-[#54c2cf] font-semibold text-white px-2 md:px-7 py-1 md:py-4 rounded-xl">Shop Now</Link>
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
            className="w-full md:h-96"
          />
          <div className="absolute md:bottom-20 right-20 md:right-24">
            <h3 className="md:text-5xl font-bold leading-10 mb-2 text-[#ff8c98]">New Arrivals</h3>
            <h1 className="md:text-7xl font-bold mb-4 md:mb-9">Toy Collection</h1>
            <Link to='/allToys' className="bg-[#ff8c98] hover:bg-[#54c2cf] font-semibold text-white px-2 md:px-7 py-1 md:py-4 rounded-xl">Shop Now</Link>
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
      {/* Tab section */}
      <section className="py-8 flex flex-col">
        <img className="mx-auto" src="//yokaz.myshopify.com/cdn/shop/files/saperator.png" alt="" />
        <h4 className="font-bold text-3xl mx-auto mt-2 border-b-2 inline-block pb-4">Shop By Category</h4>
        <ReactTabs></ReactTabs>
      </section>
      {/* Banner section */}
      <section className="flex gap-8 mb-4">
        <img data-aos='fade-up-right' data-aos-duration='1500' className="w-1/2 rounded-lg" src="/banner1.jpg" alt="" />
        <img data-aos='fade-up-left' data-aos-duration='1500' className="w-1/2 rounded-lg" src="/banner2.jpg" alt="" />
      </section>
      {/* Thumbnail part */}
      <div className="flex justify-around py-8">
        <img data-aos='zoom-in' data-aos-duration='1500' src="/thumbnail1.png" alt="" />
        <img data-aos='zoom-in' data-aos-duration='1500' src="/thumbnail2.png" alt="" />
        <img data-aos='zoom-in' data-aos-duration='1500' src="/thumbnail3.png" alt="" />
        <img data-aos='zoom-in' data-aos-duration='1500' src="/thumbnail4.png" alt="" />
      </div>
      {/* Message Section */}
        <MessageSection></MessageSection>
        {/* service section */}
        <ServiceSection></ServiceSection>
      <div className="fixed bottom-4 right-4">
      <button
        type="button"
        onClick={scrollToTop}
        className={
          isVisible ? 'opacity-100 bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2' : 'opacity-0'
        }
      >
        <FaAngleUp/>
      </button>
    </div>
    </div>
  );
};

export default Home;
