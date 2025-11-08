import React from 'react'
import { shop_products } from '../../assets/assets'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useContext } from 'react';
import { MyContext } from '../../context/MyContextProvider';

const Dynamic_allproduct = () => {
  const{navigate}=useContext(MyContext)
  return (
    <>
          <div className="container-fluid my-5 text-center">
        <h1 className='text-center mb-4'>Related Products</h1>

            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              slidesPerGroup={5} // Move 3 images per pagination
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1, slidesPerGroup: 1},
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 5, slidesPerGroup: 5 },
              }}
              className="mySwiper"
            >
              {shop_products.map((product) => (
                  <SwiperSlide key={product.id}>
            <div className="card p-2 border-0 shadow-none"onClick={() =>navigate("/shop")}>
              <img 
                src={product.img} 
                alt={product.type} 
                className="card-img-top mb-2"style={{
                    width: "100%",
                    height: "230px",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
              />
              <p className="mb-2">{product.type}</p>
              <p className="fw-bold">{product.price}</p>
            </div>
          </SwiperSlide>
                ))}
            </Swiper>
          </div>
    
    
    
    </>
  )
}

export default Dynamic_allproduct