import React, { useContext } from 'react';
import { shop_products } from '../../assets/assets';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../context/MyContextProvider';

const View_page = () => {
  const { open1, setOpen1, addToWishlist, addToCart,filteredProducts } = useContext(MyContext);
  const { id } = useParams();
  const selectedProduct=filteredProducts.find(e=>e._id===id)

  return (
    <div className="container mb-5">
      <h1 className="text-center my-2">Cake Shop</h1>

      {/* Breadcrumb */}
      <div className="d-flex gap-2">
        <p>
          <a href="/" className="text-dark">
            HOME
          </a>{' '}
          /
          <a href="/shop" className="text-muted">
            SHOP
          </a>
          /
          <a className="ms-2 fs-3 text-decoration-none text-dark">
            {selectedProduct.type}
          </a>
        </p>
      </div>

      <div className="row">
        {/* Left image section */}
        <div className="col-lg-6 text-center">
          <img
            src={selectedProduct.img}
            alt={selectedProduct.type}
            className="img-fluid rounded shadow"
            style={{
              width: '800px',
              height: '600px',
              objectFit: 'cover',
            }}
          />

          {/* Related cakes */}
          <div className="d-flex justify-content-between flex-wrap mt-3">
            {filteredProducts
              .filter(
                (p) =>
                  p.category === selectedProduct.category &&
                  p._id !== selectedProduct._id
              )
              .slice(0, 4)
              .map((product) => (
                <img
                  key={product._id}
                  src={product.img}
                  alt={product.type}
                  height={120}
                  width={120}
                  className="border rounded shadow-sm"
                  style={{ objectFit: 'cover', cursor: 'pointer' }}
                />
              ))}
          </div>
        </div>

        {/* Right product info */}
        <div className="col-lg-6">
          <h1 className="fw-bold">{selectedProduct.desc}</h1>
          <p className="text-muted fs-4">{selectedProduct.price}</p>
          <hr />

          <p className="text-muted">
            Indulge in our freshly baked {selectedProduct.type}, crafted with
            the finest ingredients and a perfect balance of sweetness. Each bite
            melts in your mouth with layers of moist sponge, creamy frosting,
            and a delightful aroma that brings pure joy. Whether you’re
            celebrating a special occasion or simply craving something sweet,
            this cake is sure to make your day extra delicious!
          </p>

          <div className="d-lg-flex d-md-flex gap-4 align-items-center">
            <button
              className="btn btn-dark my-3 py-2"
              onClick={() => addToCart(selectedProduct)}
            >
              Add to Cart
            </button>
          </div>

          <div className="d-flex" role="button">
            <i className="bi fs-5 bi-suit-heart"></i>
            <div className="mx-2 my-1">
              <p onClick={() => addToWishlist(selectedProduct)}>
                Add to Wishlist
              </p>
            </div>
          </div>

          <div className="d-flex text-secondary gap-5 mx-4">
            <div>
              <p>Categories</p>
              <p>Tags</p>
            </div>
            <div>
              <p>{selectedProduct.category}</p>
              <p>cake, dessert, sweet, bakery, pastry</p>
            </div>
          </div>

          {/* Accordion Section 1 - Description */}
          <div
            className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpen1(!open1)}
          >
            <h5 className="mb-0">Cake Description</h5>
            <span className="fs-4">{open1 ? '-' : '+'}</span>
          </div>
          {open1 && (
            <div className="mt-3 text-muted">
              <p>
                Our cakes are baked fresh daily using premium ingredients such
                as real butter, fresh cream, and organic sugar. Each layer is
                carefully frosted to perfection, giving you a moist, rich, and
                flavorful experience every time.
              </p>
              <p>
                Perfect for birthdays, anniversaries, or just to satisfy your
                sweet tooth — this cake brings warmth and happiness to every
                celebration.
              </p>
            </div>
          )}

          {/* Accordion Section 2 - Additional Info */}
          <div
            className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpen1(!open1)}
          >
            <h5 className="mb-0">Ingredients & Storage</h5>
            <span className="fs-4">{open1 ? '-' : '+'}</span>
          </div>
          {open1 && (
            <div className="mt-3 text-muted">
              <p>
                Ingredients: Flour, butter, sugar, eggs, milk, baking powder,
                and natural flavoring. Keep refrigerated and consume within 3
                days of purchase for best taste.
              </p>
            </div>
          )}

          {/* Accordion Section 3 - Reviews */}
          <div
            className="d-flex justify-content-between align-items-center border-bottom pb-2 mt-4"
            style={{ cursor: 'pointer' }}
            onClick={() => setOpen1(!open1)}
          >
            <h5 className="mb-0">Customer Reviews</h5>
            <span className="fs-4">{open1 ? '-' : '+'}</span>
          </div>
          {open1 && (
            <div className="review py-4">
              <h4>Reviews</h4>
              <p className="text-secondary">There are no reviews yet.</p>
              <h4 className="mt-5">
                Be the first to review “{selectedProduct.type}”
              </h4>
              <p className="text-secondary mt-5">
                Your email address will not be published. Required fields are
                marked *
              </p>
              <p className="text-secondary">Your rating *</p>
              <div className="d-flex text-secondary ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="mt-5">Your review*</p>
              <textarea rows="9" className="w-100"></textarea>
              <div className="row my-3">
                <div className="col-lg-6 col-md-6">
                  <p>Name*</p>
                  <input type="text" className="w-100 p-2" />
                </div>
                <div className="col-lg-6 col-md-6">
                  <p>Email*</p>
                  <input type="email" className="w-100 p-2" />
                </div>
              </div>
              <input type="checkbox" />
              <label className="mx-3 text-secondary">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
              <button className="btn btn-dark px-5 py-2 my-5">Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default View_page;
