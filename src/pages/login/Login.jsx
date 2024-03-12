import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h2>
            {" "}
            -<br />
            NapaExtra <br />-
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            soluta provident ducimus ipsa? Blanditiis quis consequatur culpa
            labore sapiente nihil.
          </p>
          <span>Don't have an account?</span>
          <Link to={"/signup"}>
            <button className="btn btn-primary">Register</button>
          </Link>
        </div>

        <form className="right">
          <input type="text" required placeholder="username" />
          <input type="password" required placeholder="password" />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
