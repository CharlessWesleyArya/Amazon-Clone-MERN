import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svp.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" name="" value="" />
          <h5>Password</h5>
          <input type="password" name="" value="" />
          <button className="login_signInButton" type="">
            Sign In
          </button>
        </form>
        <p>
          This is just a fake Amazon Clone app developed to get Knowledge in the
          E commerce application
        </p>
        <button className="login_registerButton" type="">
          Create Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
