import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () =>{
  return (
    <div className="login-form">
      <div className="login">
        <div className="left">
          <h1>Sign up</h1>
          <div className="username">
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="email">
            <input type="text" name="email" placeholder="E-mail" />
          </div>
          <div className="password">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="re-password">
            <input
              type="password"
              name="password2"
              placeholder="Retype password"
            />
          </div>
          <div className="btn">
            <Link to="/app">
              <input type="submit" name="signup_submit" value="Sign me up" />
            </Link>
          </div>
        </div>
        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>
          <button className="social-signin facebook">Log in with facebook</button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
