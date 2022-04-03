import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home-container">
     
      <div className="topbanner">
        <img className="ads-top" src='https://res.cloudinary.com/redhero/image/upload/v1648940487/Donuts/donut-banner_kbzce3.jpg' />
      </div>
      <div className="ads-row-1">
        <Link to="/donuts">
          <img className="ads1" src='https://res.cloudinary.com/redhero/image/upload/v1648937839/Donuts/photo-1422919869950-5fdedb27cde8_qwruj0.avif' />
        </Link>
        <Link to="/donuts">
          <img className="ads1" src='https://res.cloudinary.com/redhero/image/upload/v1648937858/Donuts/photo-1619286310604-453e3b283575_qdjnrs.avif' />
        </Link>
      </div>
      <div className="ads-3-container">
        <div className="ad-text-3">
          <h1>ICE COLD DRINKS SERVED DAILY</h1>
        </div>
        <div className="ads-row-3">
          <Link to="/drinks">
            <img className="ads3" src='https://res.cloudinary.com/redhero/image/upload/v1648940211/Donuts/frap2_dbj9m4.jpg' />
          </Link>
          <Link to="/drinks">
            <img className="ads3" src='https://res.cloudinary.com/redhero/image/upload/v1648940211/Donuts/frap3_mqkmdo.jpg' />
          </Link>
          <Link to="/drinks">
            <img className="ads3" src='https://res.cloudinary.com/redhero/image/upload/v1648940211/Donuts/frap1_piua0w.png' />
          </Link>
        </div>
      </div>
      <div className="ads-row-2">
        <Link to="/">
          <img className="ads2" src='https://res.cloudinary.com/redhero/image/upload/v1648940526/Donuts/long-ad_obocam.jpg' />
        </Link>
        <Link to="/">
          <img className="ads2" src='https://res.cloudinary.com/redhero/image/upload/v1648940581/Donuts/ad-order-now-donut_copy_bah2oh.jpg' />
        </Link>
      </div>
    </div>
  );
}

export default Home;
