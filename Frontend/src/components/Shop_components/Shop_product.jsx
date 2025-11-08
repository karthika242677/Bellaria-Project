import React, { useContext } from "react";
import { MyContext } from "../../context/MyContextProvider";


const Shop_product = () => {
  const {
    selectedCategory,
    filterProducts,
    sortProducts,
    filteredProducts = [],
    addToWishlist,
    addToCart,navigate
  } = useContext(MyContext);


  return (
    <div className="container my-3">
      <div className="row">
        {/* Filter Section */}
        <div className="col-12 col-md-3 mb-4">
          <div
            className="p-3 mb-4"
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#8fb2eea4",
            }}
          >
            <h6 className="fw-bold mb-3 text-center">Category</h6>
            {[
              "All",
              "Dessert",
              "Masonry",
              "Cakes",
              "Chocolate Cake",
              "Strawberry Cake",
              "Red Velvet Cake",
              "Black Forest Cake",
            ].map((cat) => (
              <button
                key={cat}
                className={`btn w-100 mb-2 ${
                  selectedCategory === cat
                    ? "btn-dark text-white"
                    : "btn-outline-secondary"
                }`}
                onClick={() => filterProducts(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            className="p-3"
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              backgroundColor: "#8fb2eea4",
            }}
          >
            <h6 className="fw-bold mb-3 text-center">Sort by Price</h6>
            <button
              className="btn btn-outline-secondary w-100 mb-2"
              onClick={() => sortProducts("lowToHigh")}
            >
              Low to High
            </button>
            <button
              className="btn btn-outline-secondary w-100"
              onClick={() => sortProducts("highToLow")}
            >
              High to Low
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="col-12 col-md-9">
          <div className="row">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="col-12 col-md-6 col-lg-4 mb-4 text-center"
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "250px",
                    overflow: "hidden",
                    borderRadius: "10px",
                  }}
                  onClick={() =>
                    navigate(`/Dynamic/${product._id}`)
                  }
                >
                  <img
                    src={product.img}
                    alt={product.type}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />

                  {/* Overlay Icons */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      display: "flex",
                      gap: "8px",
                    }}
                  >
                    <i
                      className="bi bi-cart"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.53)",
                        borderRadius: "40%",
                        padding: "10px",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                    ></i>

                    <i
                      className="bi bi-heart"
                      style={{
                        backgroundColor: "rgba(255, 255, 255, 0.53)",
                        borderRadius: "40%",
                        padding: "10px",
                        fontSize: "18px",
                        cursor: "pointer",
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToWishlist(product);
                      }}
                    ></i>
                  </div>
                </div>

                {/* Product details */}
                <p className="mt-2 mb-1">{product.type}</p>
                <p className="fw-bold">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_product;
