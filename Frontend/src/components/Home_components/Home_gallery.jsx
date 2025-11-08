import React from "react";
import { logo, shop_products } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Home_gallery = () => {
  return (
    <>
      <div className="container-fluid my-5 text-center">
        <img src={logo.logos3} alt="logo" width={200} />
        <h3 className="display-4 mt-3">Our Gallery</h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          slidesPerGroup={3} // Move 3 images per pagination
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1, slidesPerGroup: 1},
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="mySwiper"
        >
          {shop_products
            .filter((product) => product.category === "Gallery")
            .map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  className="p-1 m-3 d-flex"
                  style={{
                    width: "100%",
                    height: "230px",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={product.img}
                    alt={product.name}
                    className="img-fluid w-100 h-100 rounded shadow-sm"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home_gallery;
