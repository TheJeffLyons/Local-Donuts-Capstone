import React from "react";
import { Link } from "react-router-dom";
import LoginBanner from "../components/LoginBanner";
import image1 from "../images/donut1.jpg";
import image2 from "../images/donut2.jpg";
import image3 from "../images/long-ad.jpg";
import image4 from "../images/ad-order-now-donut copy.jpg";
import image5 from "../images/donut-banner.jpg";
import image6 from "../images/frap1.png";
import image7 from "../images/frap2.jpg";
import image8 from "../images/frap3.jpg";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
     {/* <LoginBanner /> */}
      <div className="topbanner">
        <img className="ads-top" src={image5} />
      </div>
      <div className="ads-row-1">
        <Link to="/donuts">
          <img className="ads1" src={image1} />
        </Link>
        <Link to="/donuts">
          <img className="ads1" src={image2} />
        </Link>
      </div>
      <div className="ads-3-container">
        <div className="ad-text-3">
          <h1>ICE COLD DRINKS SERVED DAILY</h1>
        </div>
        <div className="ads-row-3">
          <Link to="/drinks">
            <img className="ads3" src={image6} />
          </Link>
          <Link to="/drinks">
            <img className="ads3" src={image7} />
          </Link>
          <Link to="/drinks">
            <img className="ads3" src={image8} />
          </Link>
        </div>
      </div>
      <div className="ads-row-2">
        <Link to="/signin">
          <img className="ads2" src={image3} />
        </Link>
        <Link to="/signin">
          <img className="ads2" src={image4} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
