import React from "react";
import fblogo from "../images/fb-logo.png";
import twitterlogo from "../images/twitter-logo.png";
import instalogo from "../images/insta-logo.png";
import logo from "../images/donut-logo.png";
import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="company-container">
            
                  <div className="address">
                          <h1 className="address-name"><u>Local Donuts</u></h1>
                          <h2 className="address-address">780 Sprinkle Lane</h2>
                          <h2 className="address-address">Pittsburgh, PA 12345</h2>
                          <h2 className="address-address">412-222-2222</h2>
                  </div>
                  
                  <div className="social-container">
                          <h2 className="footer-h2">Stay Connected</h2>
                          <div className="social-btns">
                          <img className="social-logo" src={fblogo} />
                          
                          <img className="social-logo" src={twitterlogo} />
                          
                          <img className="social-logo" src={instalogo} />
                          </div>
            </div>
            <div className="footer-logo-container">
              <img className="footer-logo" src={logo} />
            </div>
      </div>
      <div className="copyright">
            <h4>Copyright &copy; 2022 by Jeff Lyons</h4>
      </div>
    </div>
  );
}

export default Footer;
