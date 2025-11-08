import React from "react";
import { logo, nav } from "../../assets/assets";

const Footer = () => {
  return (
    <>
      <footer
        className="text-white text-center mt-5"
        style={{
          backgroundImage: `linear-gradient(rgba(190, 88, 102, 0.45), rgba(56, 57, 58, 0.56)),
            url('https://bellaria.cwsthemes.com/wp-content/uploads/2017/12/153694902.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center justify-content-between text-center text-md-start">
            {/* ✅ Left: Social Media */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="fw-bold">Follow Us</h4>
              <img src={logo.logos2} alt="decorative" width={40} />
              <div className="d-flex mt-3 gap-3 justify-content-center justify-content-md-start fs-5">
                <a href="#" className="text-white">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-pinterest"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            {/* ✅ Center: Logo */}
            <div className="col-md-4 mb-4 mb-md-0 text-center">
              <img
                src={nav.foot}
                alt="Bellaria Logo"
                className="img-fluid"
                style={{ maxWidth: "250px", height: "auto" }}
              />
            </div>

            {/* ✅ Right: Newsletter */}
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="fw-bold">Get Our Sweet News</h4>
              <img src={logo.logos2} alt="decorative" width={40} />
              <form
                className="mt-3 d-flex justify-content-center justify-content-md-start"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="form-control me-2"
                  style={{
                    maxWidth: "250px",
                    borderRadius: "30px",
                    padding: "8px 15px",
                  }}
                />
                <button
                  type="submit"
                  className="btn btn-light text-dark rounded-circle"
                >
                  <i className="bi bi-envelope-at"></i>
                </button>
              </form>
            </div>
          </div>

          {/* ✅ Bottom Line */}
          <div className="mt-5 border-top pt-3">
            <p className="mb-0 small">
              © 2025 Bellaria – A Delicious Cakes and Bakery Theme
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
