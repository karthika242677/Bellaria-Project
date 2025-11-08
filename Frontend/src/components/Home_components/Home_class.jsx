import React from "react";
import { logo, shop_products } from "../../assets/assets";

const Home_class = () => {
  return (
    <>
      <div className="container-fluid mt-5 text-center">
        <img src={logo.logos3} alt="logo" width={200} />
        <h4 className="display-4 mt-4">Master Classes</h4>

        <div className="row justify-content-center">
          {shop_products
            .filter((product) => product.category === "cake")
            .map((product, index) => (
              <div
                key={product.id || index}
                className="col-lg-4 col-md-6 col-sm-12 text-dark mb-4"
              >
                <img
                  src={product.img}
                  alt={product.name || "Product Image"}
                  className="img-fluid mt-3 rounded shadow-sm"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    maxWidth: "400px",
                  }}
                />
                <h5 className="mt-3">{product.desc}</h5>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Home_class;
