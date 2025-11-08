import React from 'react'
import { bar } from '../../assets/assets'

const Menu_page = () => {
  return (
     <>
       <div className="container-fluid p-0">
         <div className="row g-0">
           <div className="col-12">
             <div className="card text-dark bg-transparent border-0 position-relative">
               {/* Background Image */}
               <img
                 src={bar.menu1}
                 alt="Background"
                 className="card-img img-fluid"
                 style={{
                   height: "auto",
                   maxHeight: "400px",
                   objectFit: "cover",
                 }}
               />
               {/* Overlay Content */}
               <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center text-center">
                 <h5 className="display-5 fw-bold">About Us</h5>
                 <a
                   href="/home"
                   className="text-dark text-decoration-none fw-semibold"
                 >
                   Home / About 
                 </a>
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   )
}

export default Menu_page