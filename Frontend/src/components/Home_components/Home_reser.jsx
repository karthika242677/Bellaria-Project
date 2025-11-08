import React from 'react';

const Home_reser = () => {
  return (
    <div className="container-fluid text-center text-white mb-2 mt-5 py-5"
        style={{
          backgroundImage: `linear-gradient(rgba(248, 91, 177, 0.4), rgba(17, 2, 10, 0.4)),
          url("https://bellaria.cwsthemes.com/wp-content/uploads/2017/12/home_03_bg_03.jpg?id=1416")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
      <h2 className="mt-3 display-5">Reservation</h2>
      <p className="mt-4">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices<br />
        posuere cubilia Curae; Praesent molestie eu turpis nec molestie. Nam<br />
        auctor magna mauris, non lacinia felis mattis nec.
      </p>

      {/* Center the form */}
      <div className="d-flex justify-content-center mt-4">
        <form className="p-4 border-0 bg-0" style={{ minWidth: '300px', maxWidth: '600px', width: '100%' }}>
          <input
            type="text"
            placeholder="Your Name"
            className="form-control mb-3"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="form-control mb-3"
          />

          <textarea
            rows={5}
            placeholder="Tips Message"
            className="form-control mb-3"
          ></textarea>

          <input type="submit"placeholder='send'/>
            
        </form>
      </div>
    </div>
  );
};

export default Home_reser;
