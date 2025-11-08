import React, { useContext } from "react";
import { nav } from "../../assets/assets";
import { MyContext } from "../../context/MyContextProvider";

const Navbar = () => {
  const {
    wishlist,
    cart,
    searchFun,
    setInput,
    removeFromWishlist,
    removeFromCart,
    LogoutFun,
  } = useContext(MyContext);

  return (
    <>
      {/* ✅ Navbar Section */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm sticky-top">
        <div className="container-fluid px-4">
          {/* Navbar Toggle for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center gap-3 gap-lg-4 text-center custom-nav">
              <li className="nav-item">
                <a className="nav-link fw-bold active" href="/home">
                  <i class="bi bi-house-fill"></i>Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/pages">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/portfolio">
                  Portfolio
                </a>
              </li>

              {/* Center Logo */}
              <li className="nav-item d-none d-lg-block">
                <img
                  src={nav.nav1}
                  alt=""
                  className="img-fluid mx-3"
                  style={{ maxHeight: "120px" }}
                />
              </li>

              <li className="nav-item">
                <a className="nav-link fw-bold" href="/blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/shop">
                 <i class="bi bi-bag-fill"></i> Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold" href="/contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-3 ms-3">
            {/* Search */}
            <i
              className="bi bi-search"
              style={{ cursor: "pointer", fontSize: "20px" }}
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
              aria-label="Search"
            ></i>

            {/* Wishlist */}
            <div className="position-relative">
              <i
                className="bi bi-heart"
                data-bs-toggle="modal"
                data-bs-target="#wishlistModal"
                aria-label="Wishlist"
                style={{ fontSize: "20px", cursor: "pointer" }}
              ></i>
              {wishlist.length > 0 && (
                <span
                  className="badge bg-danger rounded-pill position-absolute"
                  style={{ top: "-6px", right: "-10px", fontSize: "10px" }}
                >
                  {wishlist.length}
                </span>
              )}
            </div>

            {/* Cart */}
            <div className="position-relative">
              <i
                className="bi bi-cart"
                data-bs-toggle="modal"
                data-bs-target="#cartModal"
                aria-label="Cart"
                style={{ fontSize: "20px", cursor: "pointer" }}
              ></i>
              {cart.length > 0 && (
                <span
                  className="badge bg-danger rounded-pill position-absolute"
                  style={{ top: "-6px", right: "-10px", fontSize: "10px" }}
                >
                  {cart.length}
                </span>
              )}
            </div>
          </div>

          {/* ✅ Logout */}
          <div className="logout-icon m-3" onClick={LogoutFun}>
        <i className="bi bi-box-arrow-right"></i>
        </div>

        </div>
      </nav>

      {/* 🔍 Search Modal */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5 className="modal-title">Search Products</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                placeholder="Type product name..."
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={searchFun}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ❤️ Wishlist Modal */}
      <div className="modal fade" id="wishlistModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5 className="modal-title">Wishlist Products</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body table-responsive">
              <table className="table align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Image</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlist.length > 0 ? (
                    wishlist.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={product.img}
                            alt={product.type}
                            style={{ width: "70px", height: "70px", objectFit: "cover" }}
                          />
                        </td>
                        <td>{product.type}</td>
                        <td>{product.price}</td>
                        <td>
                          <i
                            className="bi bi-x-circle text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => removeFromWishlist(product._id)}
                            title="Remove"
                          ></i>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-muted">
                        No products in wishlist
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* 🛒 Cart Modal */}
      <div className="modal fade" id="cartModal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content p-3">
            <div className="modal-header border-0">
              <h5 className="modal-title">Cart Products</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body table-responsive">
              <table className="table align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th>Image</th>
                    <th>Type</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 ? (
                    cart.map((product, index) => (
                      <tr key={index}>
                        <td>
                          <img
                            src={product.img}
                            alt={product.type}
                            style={{ width: "70px", height: "70px", objectFit: "cover" }}
                          />
                        </td>
                        <td>{product.type}</td>
                        <td>{product.price}</td>
                        <td>
                          <i
                            className="bi bi-x-circle text-danger"
                            style={{ cursor: "pointer", fontSize: "20px" }}
                            onClick={() => removeFromCart(product._id)}
                            title="Remove"
                          ></i>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="text-muted">
                        Your cart is empty
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
