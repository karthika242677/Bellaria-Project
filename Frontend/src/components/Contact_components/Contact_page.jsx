import React from 'react'
import { bar } from '../../assets/assets'

const Contact_pages = () => {
  return (
    <>
    <div className="container-fluid my-3 text-center">
        <img src={bar.logo1} alt=""width={250} />
        <h5 className='display-6'>Our Contact</h5>
        <img src={bar.logo2} alt="" width={100}/>
        <div className="row">
            <div className="col-lg-3 col-md-3 col-12 mt-5">
                <div className="text-center">
                <i className="fa-solid bi-geo-alt-fill text-light bg-dark fa-2x p-4 rounded-circle"></i>
                <h5 className="my-3 mt-5 mb-2">Store Address</h5>
                <p className="text-secondary">245 Oxford Street, Kensington, London W8 6NA, United Kingdom
</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-12 mt-5">
                <div className="text-center">
                    <i className="bi bi-telephone-fill text-light bg-dark fa-2x p-4 rounded-circle"></i>
                    <h5 className="my-3 mt-5 mb-2">Call Info</h5>
                     <p className="text-secondary">
                Available 9:00 AM - 6:00 PM (Mon-Sat)<br/>
                <b>+44 20 7946 0235</b>
              </p>
                    </div>
                </div>
            <div className="col-lg-3 col-md-3 col-12 mt-5">
                <div className="text-center">
                    <i className="bi bi-envelope-fill text-light bg-dark fa-2x p-4 rounded-circle"></i>
                    <h5 className="my-3 mt-5 mb-2">Email support</h5>
                    <p className="text-secondary">Sent mail to <br/> <b>bellaria@email.com</b></p>
                    </div>
                </div> 
            <div className="col-lg-3 col-md-3 col-12 mt-5">
                <div className="text-center">
                    <i className="bi bi-chat-left-fill text-light bg-dark fa-2x p-4 rounded-circle"></i>
                    <h5 className="my-3 mt-5 mb-2">Live Support</h5>
                    <p className="text-secondary">Live chat service <br/> <b>https://www.livechat.com</b></p>
                    </div>
                </div>        
        </div>
            <div className="row my-5">
                <div className="col-lg-6 col-md-6 col-12">
                    <p className="display-5"><b>Get In Touch</b></p>
                    <div>
                        <input type="text" placeholder="Your Name" className="border-bottom py-3 px-3 w-100 border-0 my-3"/>
                        <input type="text" placeholder="Your email" className="border-bottom py-3 px-3 w-100 border-0 my-3"/>
                        <input type="text" placeholder="Subject" className="border-bottom py-3 px-3 w-100 border-0 my-3"/>
                        <textarea rows="9" placeholder="Your Message (optional)" className="border-bottom py-3 px-3 w-100 border-0 my-3"></textarea>
                        <button className="btn btn-dark px-4 my-3 py-2 rounded-0">Send Message</button>
                    </div>
                </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19803.898265492!2d-0.20095317631768548!3d51.50142953175172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760540e3f37f3f%3A0x1e6d3dbaf04544a5!2sKensington%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1734211288765!5m2!1sen!2sin"
                                          className="w-100 h-100 rounded-3 shadow-sm"></iframe>

                        </div>
            </div>
    </div>
    
    </>
  )
}

export default Contact_pages