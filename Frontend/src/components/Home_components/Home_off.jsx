import React from 'react'
import { logo } from '../../assets/assets'

const Home_off = () => {
  return (
    <>
    <div className="container-fluid my-5 py-5 text-center text-white off"
     style={{
          backgroundImage: `linear-gradient(rgba(158, 160, 163, 0.4),rgba(167, 139, 182, 0.51)),
          url("https://bellaria.cwsthemes.com/wp-content/uploads/2017/12/home_03_bg_04.jpg?id=1413")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
            <h4 className='mt-5 display-6'>Special Offer</h4>
            <h4 className='ms-2 display-6'>Today</h4>
            <p className='px-5 py-4 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel sem imperdiet, venenatis eros ac, mattis mauris, <br/>
            vivamus non hendrerit velit, nam mattis at sapien eget.</p>

            <button className="offer-btn mt-5">Order Now</button>
    </div>
    
    
    </>
  )
}

export default Home_off