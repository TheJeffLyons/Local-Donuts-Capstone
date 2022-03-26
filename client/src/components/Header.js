import React from "react";
import logo from "../images/donut-logo.png";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  return (
    <header>
      <nav className="header-nav">
        <div className="header-links">
          <div className="header-left">
            <Link to="/donuts" className="link-header">
              <h1>Donuts</h1>
            </Link>
            <Link to="/drinks" className="link-header">
              <h1>Drinks</h1>
            </Link>
          </div>

          <div className="header-mid">
            <Link to="/">
              <img src={logo} className="logo" />
            </Link>
          </div>

          <div className="header-right">
            <div>
              <Link to="/signup" className="sign-up-btn">
                <h1>SIGN UP</h1>
              </Link>
            </div>

            <div>
              <Link to="/signin" className="sign-in-btn">
                <h1>SIGN IN</h1>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
