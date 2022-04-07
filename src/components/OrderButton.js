import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "../styles/header.css";

function OrderButton() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  return (
    isAuthenticated && (
      <button className="placeorder-btn" onClick={() => navigate("/order")}>
        Place Order
      </button>
    )
  );
}

export default OrderButton;
