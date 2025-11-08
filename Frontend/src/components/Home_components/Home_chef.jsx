import React from 'react';
import { allproducts, logo } from '../../assets/assets';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home_chef = () => {
  return (
    <>
      <div className="container-fluid text-center my-5">
        <img src={logo.logos3} alt="" width={200} />
        <h3 className="display-5 mt-2">Our Masters</h3>

        <Swiper
  modules={[Pagination, Autoplay]}
  spaceBetween={25}
pagination={{ clickable: true }}

  slidesPerView={4}
  autoplay={{ delay: 2000, disableOnInteraction: false }}
  loop={true}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10 }, 
    576: { slidesPerView: 2, spaceBetween: 15 },  
    768: { slidesPerView: 3, spaceBetween: 20 }, 
    992: { slidesPerView: 4, spaceBetween: 20 },  
    1200: { slidesPerView: 4, spaceBetween: 30 },
  }}
          className="mySwiper"
        >
          {allproducts
            .filter((product) => product.category === "Chef")
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div className="chef-card mb-3">
                  <img
                    src={product.img}
                    alt={product.type}
                    className="chef-img mb-3"
                  />
                  <h3 className="mb-1">{product.type}</h3>
                  <img src={logo.logos6} alt="" width={80} />
                  <p className="mb-1 fw-semibold">{product.desc}</p>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home_chef;
