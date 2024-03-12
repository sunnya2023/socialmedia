import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h2>
            -<br />
            NapaExtra Signup <br />-
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            soluta provident ducimus ipsa? Blanditiis quis consequatur culpa
            labore sapiente nihil.
          </p>
          <span>Don't have an account?</span>
          <Link to={"/login"}>
            <button className="btn btn-primary">Login</button>
          </Link>
        </div>

        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="email" required placeholder="email" />
          <input type="password" required placeholder="password" />
          <button type="submit" className="btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
