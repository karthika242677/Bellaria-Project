import React from 'react'
import { bar } from '../../assets/assets'

const Menu_cookie = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                <div className="card h-100 w-100 border-0 position-relative"
                 style={{
          backgroundImage: `linear-gradient(rgba(104, 99, 102, 0.9), rgba(214, 204, 213, 0.79))`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height:"auto",
        }}>
                 <img src={bar.cookies} alt="img-fluid"style={{height:650}}/>

                          <div className="card-img-overlay d-flex flex-column text-white justify-content-center align-items-center">
                            <h4 className='display-4'>Our bakery</h4>
                <p className="text-center text-dark mt-3 fs-5">
                 At the heart of every great day is the aroma of freshly baked
              cookies. Our bakery is where tradition meets <br/>creativity — from
              hand-rolled dough to golden-brown perfection.<br/> Each batch is baked
              with love, using the finest ingredients and a sprinkle of passion.
              Whether it’s a<br/> morning treat or an evening indulgence, our cookies
              are made to <br/>bring warmth and sweetness to every moment.
            </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    </>
  )
}

export default Menu_cookie