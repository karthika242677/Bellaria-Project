import React from "react";
import { caro, logo } from "../../assets/assets";

const Home_caro = () => {
  return (
    <div className="container-fluid my-3 mb-5 p-0">
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        {/* Carousel Items */}
        <div className="carousel-inner">
          
          {/* Slide 1 */}
          <div className="carousel-item active">
            <img src={caro.caro1} alt="Slide 1" className="d-block w-100 carousel-img" />
            <div className="carousel-text">
              <h6>Welcome To</h6>
              <h3 className="display-5">Your Bellaria</h3>
              <img src={logo.logos} alt="logo" className="carousel-logo" />
              <p>We offer now a great range of different<br />flavoured bite-sized pastries and cookies</p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <img src={caro.caro2} alt="Slide 2" className="d-block w-100 carousel-img" />
            <div className="carousel-text">
              <h6>Welcome To</h6>
              <h3 className="display-5">Your Bellaria</h3>
              <img src={logo.logos} alt="logo" className="carousel-logo" />
              <p>We offer now a great range of different<br />flavoured bite-sized pastries and cookies</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <img src={caro.caro3} alt="Slide 3" className="d-block w-100 carousel-img" />
            <div className="carousel-text">
              <h6>Welcome To</h6>
              <h3 className="display-5">Your Bellaria</h3>
              <img src={logo.logos} alt="logo" className="carousel-logo" />
              <p>We offer now a great range of different<br />flavoured bite-sized pastries and cookies</p>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </div>
  );
};

export default Home_caro;
