import React from "react";
import { bar } from "../../assets/assets";

const Menu_chef = () => {
  return (
    <>
      <div
        className="container-fluid text-center text-dark mb-2 mt-5 py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(214, 204, 209, 0.9), rgba(214, 204, 213, 0.79)),
          url("https://bellaria.cwsthemes.com/wp-content/uploads/2017/12/543600488.jpg?id=219")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="row align-items-center justify-content-center px-3 px-md-5">
          {/* Chef Image */}
          <div className="col-12 col-md-6 mb-4 mb-md-0 d-flex justify-content-center">
            <img
              src={bar.chefi}
              alt="Chef"
              className="img-fluid"
              style={{ maxWidth: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>

          {/* Chef Description */}
          <div className="col-12 col-md-6 text-center mt-3 mt-md-0">
            <img
              src={bar.logo1}
              alt="logo"
              width={200}
              className="img-fluid mb-3"
            />
            <h4 className="display-6 fw-bold">Alex Doe</h4>
            <h6 className="text-muted">Master Chef</h6>
            <img
              src={bar.logo2}
              alt="divider"
              width={80}
              className="img-fluid mt-3 mb-4"
            />
            <p
              className="fs-6 mt-3 text-center"
              style={{
                lineHeight: "1.9",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Alex Doe is a world-renowned pastry chef celebrated for his
              artistry and precision. With over 15 years of experience crafting
              exquisite desserts in Rome and beyond, his philosophy blends
              creativity with classic techniques. Each creation reflects his
              passion for balance, flavor, and detail — turning every dessert
              into a masterpiece that delights both the eyes and the taste buds.
            </p>

            <button className="btn btn-dark mt-4 px-4 py-2 rounded-0">
              Our Service
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu_chef;
