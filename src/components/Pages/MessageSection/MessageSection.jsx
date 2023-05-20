import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper";
import './MessageSection.css';

const MessageSection = () => {
    return (
        <section data-aos='zoom-out-up' data-aos-duration='1500' className="md:h-screen p-4 md:p-0 bg-about mt-8">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="">
              <h3 className="font-bold md:text-3xl">What People Say</h3>
              <img className="mx-auto rounded-full my-1 md:my-8 h-12 md:h-40" src="/babyImg.png" alt="" />
              <p className="md:px-80 md:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt ab perspiciatis officiis accusantium incidunt quibusdam hic voluptas omnis dignissimos id fugiat quae.</p>
                <h4 className="font-bold md:text-2xl">Likhon</h4>
                <h5 className="md:text-xl text-pink-600 font-semibold">Co-Founder</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <h3 className="font-bold md:text-3xl">What People Say</h3>
              <img className="mx-auto rounded-full my-1 md:my-8 h-12 md:h-40" src="/babyImg.png" alt="" />
              <p className="md:px-80 md:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt ab perspiciatis officiis accusantium incidunt quibusdam hic voluptas omnis dignissimos id fugiat quae.</p>
                <h4 className="font-bold md:text-2xl">Likhon</h4>
                <h5 className="md:text-xl text-pink-600 font-semibold">Co-Founder</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <h3 className="font-bold md:text-3xl">What People Say</h3>
              <img className="mx-auto rounded-full my-1 md:my-8 h-12 md:h-40" src="/babyImg.png" alt="" />
              <p className="md:px-80 md:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit deserunt ab perspiciatis officiis accusantium incidunt quibusdam hic voluptas omnis dignissimos id fugiat quae.</p>
                <h4 className="font-bold md:text-2xl">Likhon</h4>
                <h5 className="md:text-xl text-pink-600 font-semibold">Co-Founder</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    );
};

export default MessageSection;