import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <button className="logout-btn" onClick={() => logout()}>
        LOGOUT
      </button>
    )
  );
}

export default LogoutButton;
