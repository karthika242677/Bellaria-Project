import React from 'react'
import { bar } from '../../assets/assets'

const Menu_stand = () => {
  return (
    <>
      <div
        className="container-fluid text-start text-dark mb-2 mt-5 py-5"
        style={{
          backgroundImage: `url(${bar.chefi2})`,             
             backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          width: "100%",
        }}
      >
       <div className="row">
        <div className="col-lg-6 text-center">
            <img src={bar.logo1} alt=""width={250} className='mb-2'/> 
            <h4 className='display-6'>Our Standards</h4> 
            <img src={bar.logo2} alt="" width={100} className='mt-2 '/> 
            <p> 🍰 Every dessert we craft is a sweet expression of passion and perfection.</p>
             <img src={bar.logo3} alt="" /> 
             <p>🌿 We use only the finest ingredients to create timeless indulgence.</p>
              <img src={bar.logo3} alt="" /> 
              <p>🧁 Blending tradition and creativity, we bring flavor to life.</p>
               <img src={bar.logo3} alt="" /> 
               <p>🍫 Each bite is a moment of joy — made with care and love.</p> 
               <img src={bar.logo3} alt="" /> 
            <p>🎂 Our promise: quality, freshness, and a touch of sweetness in every creation.</p>
               <img src={bar.logo3} alt="" /> 

        </div>
       </div>
      </div>
    </>
  )
}

export default Menu_stand
