import React from "react";
// image
import Logo from "../../images/logo.png";
// styling
import "../../css/style.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="about">
          <img style={{ width: "50%" }} src={Logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida
            enim, porttitor enim erat varius platea enim suspendisse.
          </p>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">Testimonials</a>
          </li>
          <li>
            <a href="/">Gallary</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Our Plans</a>
          </li>
          <li>
            <a href="/">Muslim Dating</a>
          </li>
          <li>
            <a href="/">Chirstian Dating</a>
          </li>
          <li>
            <a href="/">Jewes Dating</a>
          </li>
          <li>
            <a href="/">Hindu Dating</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
        <ul>
          <h3>Contact Details</h3>
          <li>
            {/* <a href=""><i className="fa fa-phone"></i> 03555........</a> */}
          </li>
          <li>
            {/* <a href=""><i className="fa-solid fa-envelope"></i> hussainkalim......</a> */}
          </li>
          <li>
            {/* <a href=""><i className="fa-brands fa-facebook"></i> Rana.........</a> */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
