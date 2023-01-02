import React from 'react'
// images
import Logo from "../../images/logo.png";
// styling
import "../../css/navbar.css";
const Header = () => {
  return (
    <nav class="navbar">
        <div class="logo">
          <img src={Logo} alt="" />
        </div>
        <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
            <div class="menu">

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

            </div>
        </ul>
    </nav>
  )
}

export default Header; 