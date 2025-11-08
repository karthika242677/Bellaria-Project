import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { img } from '../assets/assets'
import { MyContext } from '../context/ContextProvider'

const Form = () => {

    const { category , setCategory , type , setType , desc , setDesc , price , setPrice , ImageFun , previewImg , ProductSubmitFun } = useContext(MyContext)

  return (
    <>
        <div className="container">
            <div className="d-flex justify-content-between my-3 align-items-center">
                <h3>Add Products</h3>
                <div>
                    <Link to={"/product"} className='fs-5'>View Products</Link>
                    <Link to={"/user"} className='ps-3 fs-5'>View Users</Link>
                </div>
            </div>

            <form onSubmit={ProductSubmitFun}>

                <input type="file" id='image' hidden onChange={ImageFun} />   
                <label htmlFor="image">
            <img
              src={previewImg ? previewImg : img.upload}
              alt="Preview"
              height={200}
              width={200}
            />
          </label>     

                 <select
            className='form-control my-3'
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option hidden>Choose Category</option>
            <option>Masonry</option>
            <option>Dessert</option>
            <option>Cakes</option>
             <option>Chocolate Cake</option>
            <option>Strawberry Cake</option>
             <option>Red Velvet Cake</option>
            <option>Black Forest Cake</option>

          </select>

               <input type="text" className='form-control my-3' placeholder='Enter product type...' value={type} onChange={e => setType(e.target.value)} />
                <input type="text" className='form-control my-3' placeholder='Enter product desc...' value={desc} onChange={e => setDesc(e.target.value)} />
                <input type="number" className='form-control my-3' placeholder='Enter product price...' value={price} onChange={e => setPrice(e.target.value)} />
                <input type="submit" className='btn btn-primary w-100' />

            </form>
        </div>
    </>
  )
}

export default Form  

