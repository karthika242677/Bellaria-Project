import React from 'react'
import { bar } from '../../assets/assets'

const Menu_story = () => {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row mx-0">
          <div className="col-12 px-0">
            <div className="card text-dark bg-transparent border-0 position-relative">
              
              {/* Background Image */}
              <img
                src={bar.menu2}
                alt="Background"
                className="card-img img-fluid w-100"
                style={{
                  height: "auto",
                  minHeight: "350px",
                  maxHeight: "550px",
                  objectFit: "cover",
                }}
              />

              {/* Overlay Content */}
              <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center p-3 p-md-4">
                <img 
                  src={bar.logo1} 
                  alt="logo" 
                  className="mb-2 img-fluid" 
                  style={{ width: "150px", maxWidth: "60%" }} 
                />
                
                <h5 
                  className="fw-bold text-dark" 
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  Our Story
                </h5>
                
                <img 
                  src={bar.logo2} 
                  alt="logo2" 
                  className="mt-2 mb-3 img-fluid"
                  style={{ width: "70px", maxWidth: "50%" }} 
                />

                <p 
                  className="text-dark mt-2 mb-3" 
                  style={{
                    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
                    maxWidth: "90%",
                    lineHeight: "1.6",
                  }}
                >
                  Welcome to our story — a journey of flavor, passion, and craftsmanship.
                  From humble beginnings to becoming a favorite destination for dessert lovers,
                  every recipe we create tells a tale of love and dedication.
                  Each slice, frosting, and aroma is carefully curated to bring joy to your day —
                  one sweet bite at a time.
                </p>

                <button 
                  className="btn btn-dark mt-3 px-4 py-2 rounded-0"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
                >
                  Our Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu_story
