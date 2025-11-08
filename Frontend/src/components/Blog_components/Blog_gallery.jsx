import React from "react";
import { logo, shop_products } from "../../assets/assets";

const Blog_gallery = () => {
  // Filter only Dessert products
  const desserts = shop_products.filter(
    (product) => product.category === "Dessert"
  );

  return (
    <div
      className="container-fluid my-5 py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(172, 123, 126, 0.8), rgba(20, 26, 11, 0.32)),
        url("https://bellaria.cwsthemes.com/wp-content/uploads/2017/12/home_03_bg_03.jpg?id=1416")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container">
        <div className="row g-5">
          {desserts.map((product, index) => (
            <div key={product.id || index} className="col-12">
              <div
                className={`row align-items-center ${
                  index % 2 === 0 ? "" : "flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div className="col-md-6 text-center">
                  <img
                    src={product.img}
                    alt={product.name || "Dessert"}
                    className="img-fluid rounded shadow"
                    style={{ maxHeight: "400px", objectFit: "cover" }}
                  />
                </div>

                {/* Text Section */}
                <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-center">
                  <h4 className="fw-bold display-5 mt-3">{product.type}</h4>
                  <p
                    className="mt-4"
                    style={{
                      color: "#e7e7eec4",
                      fontSize: "16px",
                      lineHeight: "1.8",
                    }}
                  >
                    Indulge your senses with our exquisite collection of desserts,
                    each crafted to perfection and designed to delight. From the rich,
                    velvety layers of chocolate cake to the light, fragrant sweetness
                    of vanilla cupcakes, every bite tells a story of flavor and artistry.
                    Fresh strawberries crown crisp tarts, blueberries lend their
                    natural brightness to creamy cheesecakes, and delicate macarons
                    bring a touch of Parisian elegance. Golden, fluffy donuts evoke
                    comforting nostalgia, while vibrant red velvet slices and tangy
                    lemon meringue pies offer a perfect balance of taste and texture.
                    Each creation is not only visually stunning but also a celebration
                    of taste, crafted to transform every moment into a memorable,
                    decadent experience.
                  </p>
                  <img src={logo.logos2} alt="Logo" className="mt-3" width={80} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog_gallery;
