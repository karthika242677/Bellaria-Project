import React from "react";
import { conts, logo } from "../../assets/assets";

const Content = () => {
  return (
    <>
      <div className="container-fluid px-0 overflow-hidden">
        <div className="row">
          <div className="col-12">
            <div className="card text-dark bg-transparent border-0 position-relative">

              {/* ✅ Full Background Image */}
              <div style={{ overflow: "hidden", width: "100%" }}>
                <img
                  src={conts.cont}
                  alt="Background"
                  className="card-img img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    minHeight: "500px", // allows full overlay visibility
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* ✅ Overlay Content */}
              <div
                className="card-img-overlay text-center d-flex flex-column justify-content-center align-items-center px-3"
                style={{
                  top: "0",
                  left: "0",
                  right: "0",
                  bottom: "0",
                }}
              >
                <img
                  src={logo.logos3}
                  alt="Logo"
                  className="img-fluid mb-3"
                  style={{ maxWidth: "130px" }}
                />

                <h4 className="mt-2 mb-3 fs-4 fw-semibold">Who We Are</h4>

                <p
                  className="text-dark mx-auto"
                  style={{
                    lineHeight: "1.8",
                    fontSize: "15px",
                    maxWidth: "500px",
                  }}
                >
                  We are passionate about creating delightful culinary experiences
                  that blend creativity with tradition. Our chefs craft every dish
                  with care, combining high-quality ingredients, refined techniques,
                  and a love for flavor. We believe in sharing happiness through our
                  creations — one sweet moment at a time. Join us to discover the
                  true taste of art in every bite.
                </p>

                <img
                  src={logo.logos4}
                  alt="Signature"
                  className="img-fluid mt-3"
                  style={{ maxWidth: "100px" }}
                />
                <h5 className="mt-2 fs-6">Maria, Chef Cook</h5>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
