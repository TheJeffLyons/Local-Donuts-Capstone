import React from "react";

import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="company-container">
        <div className="address">
          <h1 className="address-name">
            <u>Local Donuts</u>
          </h1>
          <h2 className="address-address">780 Sprinkle Lane</h2>
          <h2 className="address-address">Pittsburgh, PA 12345</h2>
          <h2 className="address-address">412-222-2222</h2>
        </div>

        <div className="social-container">
          <h2 className="footer-h2">Stay Connected</h2>
          <div className="social-btns">
            <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/">
              <img
                className="social-logo"
                src="https://res.cloudinary.com/redhero/image/upload/v1648940728/Donuts/fb-logo_lk3uqq.png"
              />
            </a>

            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/">
              <img
                className="social-logo"
                src="https://res.cloudinary.com/redhero/image/upload/v1648940728/Donuts/insta-logo_batr1m.png"
              />
            </a>

            <a rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/">
              <img
                className="social-logo"
                src="https://res.cloudinary.com/redhero/image/upload/v1648940728/Donuts/twitter-logo_wwhly5.png"
              />
            </a>
          </div>
        </div>
        <div className="footer-logo-container">
          <img
            className="footer-logo"
            src="https://res.cloudinary.com/redhero/image/upload/v1648940799/Donuts/donut-logo_miqpyr.png"
          />
        </div>
      </div>
      <div className="copyright">
        <h4>Copyright &copy; 2022 by Jeff Lyons</h4>
      </div>
    </div>
  );
}

export default Footer;
