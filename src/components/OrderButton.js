import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function OrderButton() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Link to="/order" className="placeorder-btn">
        <h1>Place Order</h1>
      </Link>
    )
  );
}

export default OrderButton;
