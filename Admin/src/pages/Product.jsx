import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { img } from '../assets/assets'
import { MyContext } from '../context/ContextProvider'

const Product = () => {
  const {
    productData, UpdateFun,
    updateCategory, setUpdateCategory,
    updateType, setUpdateType,
    updateDesc, setUpdateDesc,
    updatePrice, setUpdatePrice,
    updatePreviewImg, RemoveProduct, UpdateImageFun, UpdateSubmitFun
  } = useContext(MyContext)

  return (
    <div className="container-fluid px-3 px-md-5">
      <div className="d-flex justify-content-between align-items-center my-3 flex-wrap">
        <h3>Product List</h3>
        <Link to="/" className='fs-3'>Add to Products</Link>
      </div>

      {/* ✅ Responsive Table without any extra custom code */}
      <div className="table-responsive">
        <table className='table table-primary text-center align-middle'>
          <thead>
            <tr>
              <th>Image</th>
              <th>Category</th>
              <th>Type</th>
              <th>Desc</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {productData.length === 0 ? (
              <tr>
                <td className='text-danger' colSpan={7}>No Products Found</td>
              </tr>
            ) : (
              productData.map((value, index) => (
                <tr key={index}>
                  <td><img src={value.img} alt="" height={60} /></td>
                  <td>{value.category}</td>
                  <td>{value.type}</td>
                  <td>{value.desc}</td>
                  <td>{value.price}</td>
                  <td>
                    <button
                      className='btn btn-primary'
                      data-bs-toggle="modal"
                      data-bs-target="#mymodal"
                      onClick={() => UpdateFun(value._id)}>
                      update
                    </button>
                  </td>
                  <td>
                    <span className='fs-4 text-danger' onClick={() => RemoveProduct(value._id)}>
                      &times;
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Section */}
      <div className="modal fade" id='mymodal'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4>Update Product</h4>
              <button className='btn-close' data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={UpdateSubmitFun}>
                <input type="file" id='updateImage' hidden onChange={UpdateImageFun} />
                <label htmlFor="updateImage">
                  <img src={updatePreviewImg ? updatePreviewImg : img.upload} alt="" height={200} />
                </label>
                <select
                  className='form-control my-3'
                  value={updateCategory}
                  onChange={e => setUpdateCategory(e.target.value)}>
                  <option hidden>choose</option>
                  <option>Masonry</option>
                  <option>Ice cake</option>
                  <option>Dessert</option>
                  <option>Cakes</option>
                  <option>Chocolate Cake</option>
                  <option>Strawberry Cake</option>
                  <option>Red Velvet Cake</option>
                  <option>Black Forest Cake</option>
                </select>
                <input
                  type="text"
                  className='form-control my-3'
                  value={updateType}
                  onChange={e => setUpdateType(e.target.value)} />
                <input
                  type="text"
                  className='form-control my-3'
                  value={updateDesc}
                  onChange={e => setUpdateDesc(e.target.value)} />
                <input
                  type="number"
                  className='form-control my-3'
                  value={updatePrice}
                  onChange={e => setUpdatePrice(e.target.value)} />
                <input type="submit" className='btn btn-primary w-100' />
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product
