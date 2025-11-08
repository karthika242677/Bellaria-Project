import React, { useContext, useState } from "react";
import { MyContext } from "../context/MyContextProvider";

const Form = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    RegisterSubmitFun,
    loginUsername,
    setLoginUsername,
    loginPassword,
    setLoginPassword,
    LoginSubmitFun,
  } = useContext(MyContext);

  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container-fluid d-flex flex-wrap">
        
      {/* Left Side - Image & Text */}
      <div className="left flex-fill d-flex flex-column justify-content-center align-items-center text-light text-center p-5">
        <h1 className="fw-bold mb-3"style={{color: "#ce1a7dda"}}>Welcome to Cake Delight 🍰</h1>
        <p className="lead mb-4"style={{ color: "#1a0344da" }}>
          {isLogin
            ? "New here? Create your account and start ordering delicious cakes!"
            : "Already have an account? Login to continue your sweet journey!"}
        </p>
        <button
          className="btn btn-light rounded-pill px-4 py-2 fw-semibold"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create Account" : "Login Instead"}
        </button>
      </div>

      {/* Right Side - Form */}
      <div className="right flex-fill d-flex justify-content-center align-items-center p-5">
        <div className="card shadow-lg border-0 rounded-4 p-4 w-100" style={{ maxWidth: "400px" }}>
          {isLogin ? (
            <>
              <h3 className="text-center text-primary fw-bold mb-4">Login</h3>
              <form onSubmit={LoginSubmitFun}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    placeholder="Enter username..."
                    value={loginUsername}
                    onChange={(e) => setLoginUsername(e.target.value)}
                    className="form-control rounded-pill px-3 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password..."
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="form-control rounded-pill px-3 py-2"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 rounded-pill py-2 fw-semibold"
                >
                  Login
                </button>
              </form>
            </>
          ) : (
            <>
              <h3 className="text-center text-success fw-bold mb-4">Register</h3>
              <form onSubmit={RegisterSubmitFun}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    placeholder="Enter username..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control rounded-pill px-3 py-2"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    placeholder="Enter password..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control rounded-pill px-3 py-2"
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control rounded-pill px-3 py-2"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100 rounded-pill py-2 fw-semibold"
                >
                  Register
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Inline Styling */}
      <style>
        {`
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
          }

          .container-fluid {
            min-height: 100vh;
          }

          .left {
background: #d0d4ddbe;
  background-image: url("https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

          .right {
            background: #f9fafc;
          }

          .card {
            background: #fff;
            transition: all 0.3s ease-in-out;
          }

          .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          }

          @media (max-width: 768px) {
            .left {
              min-height: 40vh;
              padding: 2rem;
            }
            .right {
              padding: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Form;
