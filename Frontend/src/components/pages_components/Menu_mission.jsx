import React from 'react'
import { bar } from '../../assets/assets'

const Menu_mission = () => {
  return (
    <>
      <div
        className="container-fluid text-center text-white py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(252, 9, 122, 0.49), rgba(248, 91, 177, 0.4)), url(${bar.menu3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "650px",
        }}
      >
        {/* Heading Section */}
        <h5 className="display-6 fw-bold mt-3">Our Mission</h5>
        <p className="fs-6 fs-md-5 mx-auto mb-5 px-3" style={{ maxWidth: "700px" }}>
          At Bellaria, our mission is to spread joy through the art of baking.
          Every dessert we create is a celebration of flavor, craftsmanship, and love —
          made with the finest ingredients and a passion for perfection.
        </p>

        {/* Icons Section */}
        <div className="row justify-content-center text-center g-4 px-2 px-md-5">
          {/* Card 1 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <img src={bar.icon1} alt="icon1" className="img-fluid mb-3" style={{ height: 80, width: 80 }} />
            <h4 className="fw-semibold">High Standards</h4>
            <p className="fs-6 mt-2">
              We maintain the highest quality standards in every recipe — from hand-selecting
              ingredients to ensuring each pastry delivers unmatched taste and texture.
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <img src={bar.icon2} alt="icon2" className="img-fluid mb-3" style={{ height: 80, width: 80 }} />
            <h4 className="fw-semibold">Work Tirelessly</h4>
            <p className="fs-6 mt-2">
              Our dedicated team pours their heart into every batch, working tirelessly to bring
              sweet happiness to your table — one dessert at a time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <img src={bar.icon3} alt="icon3" className="img-fluid mb-3" style={{ height: 80, width: 80 }} />
            <h4 className="fw-semibold">Skilled Artisans</h4>
            <p className="fs-6 mt-2">
              Our bakers are true artisans, combining traditional craftsmanship with modern creativity
              to design treats that are as beautiful as they are delicious.
            </p>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-sm-6 col-lg-3">
            <img src={bar.icon4} alt="icon4" className="img-fluid mb-3" style={{ height: 80, width: 80 }} />
            <h4 className="fw-semibold">Responsibility</h4>
            <p className="fs-6 mt-2">
              We believe in responsible baking — supporting local farmers, reducing waste, and ensuring
              that our joy-filled creations also care for our planet and community.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu_mission
