import React from "react";
import LoginButton from "./LoginButton";
import { Link } from "react-router-dom";
import "../styles/header.css";
import LogoutButton from "./LogoutButton";
import OrderButton from "./OrderButton";
import LoginBanner from "./LoginBanner";

function Header() {
  return (
    <header>
      <nav className="header-nav">
        <div className="header-links">
          <div className="header-left">
            <Link to="/donuts" className="link-header">
              <h1 className="donut-menu">Donuts</h1>
            </Link>
            <Link to="/drinks" className="link-header">
              <h1>Drinks</h1>
            </Link>
          </div>

          <div className="header-mid">
            <Link to="/">
              <img src='https://res.cloudinary.com/redhero/image/upload/v1648940799/Donuts/donut-logo_miqpyr.png' className="logo" />
            </Link>
          </div>

          <div className="header-right">
            <div>
              <OrderButton />
            </div>

            <div>
              <LoginButton />
              <LogoutButton />
            </div>
          </div>
        </div>
      </nav>
      <LoginBanner />
    </header>
  );
}

export default Header;
