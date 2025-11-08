import React from "react";
import { allproducts, logo } from "../../assets/assets";

const Home_design = () => {
  return (
    <>
      <h4 className="text-center my-3">Our Designs</h4>

      <div
        className="container-fluid text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 93, 139, 0.6), rgba(6, 18, 26, 0.6)), url("https://bellaria.cwsthemes.com/wp-content/uploads/2017/12/home_03_bg_02.jpg?id=1407")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <img src={logo.logos5} alt="Design Logo" width={150} className="mt-5" />
        <p className="text-white display-6 mt-3">CHOOSE YOUR DESIGN</p>

        <div className="col-12 col-md-10 mx-auto">
          <div className="row justify-content-center my-2 g-4">
            {allproducts
              .filter((product) => product.category === "DESIGN")
              .map((product, index) => (
                <div
                  key={product.id || index}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 text-white justify-content-center"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={product.img}
                    alt={product.name || "Design"}
                    className="img-fluid mt-5 zoom"
                    width={500}
                  />
                  <h3 className="mt-2">{product.desc}</h3>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_design;
